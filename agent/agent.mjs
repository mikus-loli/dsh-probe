#!/usr/bin/env node
/**
 * dsh-probe-agent — one small, dependency-free reporter for the DSH Probe panel.
 *
 * It reads Linux's own counters (/proc/stat, /proc/meminfo, /proc/loadavg,
 * /proc/net/dev) plus `statfs` on the chosen mount, turns them into rates
 * between two samples, and POSTs one JSON report per interval to the DSH
 * instance that issued its token. Nothing else runs: no daemon framework, no
 * package install, no root-only syscalls.
 *
 * Configuration (flags win over environment):
 *   --server <url>      https://dsh.example.com (the DSH web origin)
 *   --token <token>     per-host agent token from the Probe panel
 *   --name <name>       display name (defaults to the machine hostname)
 *   --interval <sec>    report cadence, default 3
 *   --disk <path>       mount to report disk usage for, default /
 *   --once              send a single report and exit (connectivity test)
 *   --verbose           log every report
 *
 * Environment equivalents: DSPROBE_SERVER, DSPROBE_TOKEN, DSPROBE_NAME,
 * DSPROBE_INTERVAL, DSPROBE_DISK.
 */

import { readFileSync, statfsSync } from 'node:fs'
import { execFile, execFileSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import os from 'node:os'

const VERSION = '0.4.0'

/**
 * Human-readable distro name from /etc/os-release. `os.type()` only ever says
 * "Linux"; PRETTY_NAME gives the identity an operator recognises.
 * @returns the distro name, or the kernel family when os-release is absent.
 */
function distroName() {
  try {
    const text = readFileSync('/etc/os-release', 'utf8')
    const field = (key) => {
      const match = new RegExp(`^${key}=(.*)$`, 'm').exec(text)
      return match === null ? '' : match[1].trim().replace(/^["']|["']$/g, '')
    }
    const pretty = field('PRETTY_NAME')
    if (pretty !== '') return pretty
    const name = field('NAME')
    const versionId = field('VERSION_ID')
    if (name !== '' && versionId !== '') return name.includes(versionId) ? name : `${name} ${versionId}`
    if (name !== '') return name
  } catch {
    // No os-release: fall through to the kernel family.
  }
  return os.type()
}

/** Parse `--key value` flags and `--flag` switches. */
function parseArgs(argv) {
  const out = {}
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (!arg.startsWith('--')) continue
    const key = arg.slice(2)
    const next = argv[index + 1]
    if (next === undefined || next.startsWith('--')) {
      out[key] = true
      continue
    }
    out[key] = next
    index += 1
  }
  return out
}

/** Read one /proc file, or '' when the platform does not have it. */
function readProc(path) {
  try {
    return readFileSync(path, 'utf8')
  } catch {
    return ''
  }
}

/** Clamp a number into range. */
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

/** CPU tick counters from /proc/stat (first aggregate line). */
function cpuCounters() {
  const line = readProc('/proc/stat').split('\n')[0] ?? ''
  const parts = line.trim().split(/\s+/).slice(1).map(Number)
  if (parts.length < 4 || parts.some(value => !Number.isFinite(value))) return undefined
  const [user, nice, system, idle, iowait = 0, irq = 0, softirq = 0, steal = 0] = parts
  const total = user + nice + system + idle + iowait + irq + softirq + steal
  const busy = total - idle - iowait
  return { total, busy }
}

/** Memory numbers in bytes from /proc/meminfo. */
function memory() {
  const text = readProc('/proc/meminfo')
  const pick = key => {
    const match = text.match(new RegExp(`^${key}:\\s+(\\d+) kB`, 'm'))
    return match === null ? 0 : Number(match[1]) * 1024
  }
  const total = pick('MemTotal')
  const available = pick('MemAvailable') || pick('MemFree')
  const swapTotal = pick('SwapTotal')
  const swapFree = pick('SwapFree')
  return { total, used: Math.max(0, total - available), swapTotal, swapUsed: Math.max(0, swapTotal - swapFree) }
}

/** Network byte counters summed over every interface except loopback. */
function netCounters() {
  const text = readProc('/proc/net/dev')
  let rx = 0
  let tx = 0
  for (const line of text.split('\n')) {
    const match = line.match(/^\s*([^:]+):\s*(.*)$/)
    if (match === null) continue
    const iface = match[1].trim()
    if (iface === 'lo') continue
    const fields = match[2].trim().split(/\s+/).map(Number)
    if (fields.length < 16) continue
    rx += fields[0] || 0
    tx += fields[8] || 0
  }
  return { rx, tx }
}

/** TCP established + UDP socket counts, matching the shell agent's definition. */
function connCounters() {
  const count = (file, establishedOnly) => {
    const text = readProc(file)
    if (text === '') return 0
    let total = 0
    const lines = text.split('\n')
    for (let index = 1; index < lines.length; index += 1) {
      const line = lines[index].trim()
      if (line === '') continue
      if (establishedOnly) {
        // /proc/net/tcp column 4 holds the socket state; 01 is ESTABLISHED.
        const fields = line.split(/\s+/)
        if (fields[3] !== '01') continue
      }
      total += 1
    }
    return total
  }
  return {
    tcp: count('/proc/net/tcp', true) + count('/proc/net/tcp6', true),
    udp: count('/proc/net/udp', false) + count('/proc/net/udp6', false),
  }
}

/** First GPU summary line from nvidia-smi, or undefined when unavailable. */
function gpuInfo() {
  try {
    const line = execFileSync('nvidia-smi', [
      '--query-gpu=name,memory.total,memory.used,utilization.gpu,temperature.gpu',
      '--format=csv,noheader,nounits',
    ], { encoding: 'utf8', timeout: 3000 }).split('\n')[0]?.trim() ?? ''
    if (line === '') return undefined
    const [name = '', memTotal = '0', memUsed = '0', usage = '0', temp = '0'] = line.split(',').map(part => part.trim())
    return {
      name,
      memTotal: Math.round((Number(memTotal) || 0) * 1048576),
      memUsed: Math.round((Number(memUsed) || 0) * 1048576),
      usage: Number(usage) || 0,
      temp: Number(temp) || 0,
    }
  } catch {
    return undefined
  }
}

/** Disk usage for one mount. */
function diskOf(path) {
  try {
    const stats = statfsSync(path)
    const total = stats.blocks * stats.bsize
    const free = stats.bfree * stats.bsize
    const available = stats.bavail * stats.bsize
    return { mount: path, total, used: Math.max(0, total - free), available }
  } catch {
    return { mount: path, total: 0, used: 0, available: 0 }
  }
}

/** The previous raw counters, used to derive rates for the next report. */
const previous = { at: 0, cpu: undefined, net: undefined }

/** Build one report body from the current counters. */
function sample() {
  const now = Date.now()
  const cores = os.cpus().length || 1
  const cpu = cpuCounters()
  const net = netCounters()
  const elapsed = previous.at === 0 ? 0 : (now - previous.at) / 1000
  let cpuPct = 0
  let rxRate = 0
  let txRate = 0
  if (previous.cpu !== undefined && cpu !== undefined && cpu.total > previous.cpu.total) {
    cpuPct = ((cpu.busy - previous.cpu.busy) / (cpu.total - previous.cpu.total)) * 100
  }
  if (previous.net !== undefined && elapsed > 0) {
    rxRate = Math.max(0, (net.rx - previous.net.rx) / elapsed)
    txRate = Math.max(0, (net.tx - previous.net.tx) / elapsed)
  }
  previous.at = now
  previous.cpu = cpu
  previous.net = net
  const mem = memory()
  const disk = diskOf(diskTarget)
  const load = os.loadavg()
  const gpu = gpuInfo()
  const firstCpu = os.cpus()[0]
  return {
    v: 1,
    agentVersion: VERSION,
    hostname: os.hostname(),
    os: distroName(),
    arch: os.arch(),
    kernel: os.release(),
    cores,
    cpuModel: firstCpu?.model?.trim() ?? '',
    uptime: Math.round(os.uptime()),
    cpu: clamp(Number.isFinite(cpuPct) ? cpuPct : 0, 0, 100),
    mem: { total: mem.total, used: mem.used, swapTotal: mem.swapTotal, swapUsed: mem.swapUsed },
    disk: { mount: disk.mount, total: disk.total, used: disk.used },
    load: [load[0] ?? 0, load[1] ?? 0, load[2] ?? 0],
    net: { rxRate: Math.round(rxRate), txRate: Math.round(txRate), totalRx: net.rx, totalTx: net.tx },
    conn: connCounters(),
    ...(gpu === undefined ? {} : { gpu }),
    reportedAt: now,
  }
}

const args = parseArgs(process.argv.slice(2))
if (args.version === true) {
  console.log(`dsh-probe-agent ${VERSION}`)
  process.exit(0)
}
const server = String(args.server ?? process.env.DSPROBE_SERVER ?? '').replace(/\/+$/, '')
const token = String(args.token ?? process.env.DSPROBE_TOKEN ?? '')
const displayName = String(args.name ?? process.env.DSPROBE_NAME ?? os.hostname())
const intervalSec = clamp(Number(args.interval ?? process.env.DSPROBE_INTERVAL ?? 3) || 3, 1, 60)
const diskTarget = String(args.disk ?? process.env.DSPROBE_DISK ?? '/')
const once = args.once === true
const verbose = args.verbose === true

if (server === '' || token === '') {
  console.error('dsh-probe-agent: --server and --token are required (or DSPROBE_SERVER / DSPROBE_TOKEN)')
  process.exit(2)
}

/* -------------------------------------------------------------------------- */
/* Latency probes                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Run one probe with the system tool for its kind.
 *
 * `icmp` uses ping and parses the `time=… ms` field; `tcp` measures only the
 * connect handshake with curl's `time_connect`; `http` takes curl's
 * `time_total`. A non-zero exit or an unparsable output is a loss, reported as
 * `null` so the server can tell a timeout from a zero-millisecond reply.
 * @param {{type: string, target: string}} task - the queued probe.
 * @returns {Promise<number|null>} round-trip milliseconds, or null on loss.
 */
function probe(task) {
  return new Promise(resolve => {
    const done = (value) => { resolve(value) }
    try {
      if (task.type === 'icmp') {
        execFile('ping', ['-c', '1', '-W', '2', task.target], { timeout: 5000 }, (error, stdout) => {
          if (error) return done(null)
          const match = /time=([\d.]+)\s*ms/.exec(String(stdout))
          return done(match === null ? null : Math.round(Number(match[1]) * 100) / 100)
        })
        return
      }
      if (task.type === 'tcp') {
        const [host, port] = task.target.includes(':')
          ? [task.target.slice(0, task.target.lastIndexOf(':')), task.target.slice(task.target.lastIndexOf(':') + 1)]
          : [task.target, '80']
        execFile('curl', ['-sS', '-o', '/dev/null', '--max-time', '3', '-w', '%{time_connect}', `telnet://${host}:${port}`],
          { timeout: 5000 }, (error, stdout) => {
            if (error) return done(null)
            const seconds = Number(String(stdout).trim())
            return done(Number.isFinite(seconds) ? Math.round(seconds * 1000) : null)
          })
        return
      }
      if (task.type === 'http') {
        execFile('curl', ['-sS', '-o', '/dev/null', '--max-time', '5', '-w', '%{time_total}', task.target],
          { timeout: 7000 }, (error, stdout) => {
            if (error) return done(null)
            const seconds = Number(String(stdout).trim())
            return done(Number.isFinite(seconds) ? Math.round(seconds * 1000) : null)
          })
        return
      }
      done(null)
    } catch {
      done(null)
    }
  })
}

/**
 * Replace this script with the version the panel serves, then re-exec.
 *
 * The panel only queues an `agent.switchVersion` event; the actual swap is the
 * agent's job because it already knows where it reports to. The download is
 * verified (the new script must report the expected version through
 * `--version`) before it is moved into place, so a truncated transfer can never
 * become the running agent. The move is a same-directory rename, hence atomic.
 * @param {string} version - version the panel expects.
 * @param {string} nodePath - path of the .mjs source, relative to the server.
 * @returns {Promise<boolean>} whether the upgrade happened (true means re-exec).
 */
async function upgradeSelf(version, nodePath) {
  if (typeof version !== 'string' || version === '' || version === VERSION) return false
  const target = process.argv[1]
  if (typeof target !== 'string' || target === '') return false
  const url = `${server}/${String(nodePath ?? '').replace(/^\//, '')}`
  // Node decides how to load a file by its extension, so the temp copy must
  // keep `.mjs` at the end; a `.new.<pid>` suffix would be an unknown type.
  const temp = `${target}.new-${process.pid}.mjs`
  console.log(`[dsh-probe-agent] upgrading ${VERSION} -> ${version}`)
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(30_000) })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const body = await response.text()
    if (!body.includes('dsh-probe-agent')) throw new Error('downloaded file is not an agent')
    await fs.writeFile(temp, body, { mode: 0o755 })
    // Verify the download really is the advertised build before replacing.
    const reported = execFileSync(process.execPath, [temp, '--version'], { encoding: 'utf8', timeout: 15_000 }).trim()
    if (!reported.endsWith(version)) throw new Error(`downloaded version is "${reported}", expected ${version}`)
    await fs.rename(temp, target)
    console.log(`[dsh-probe-agent] upgraded to ${version}; restarting`)
    // Carry the original argv so the supervisor sees the same command again.
    execFileSync(process.execPath, [target, ...process.argv.slice(2)], { stdio: 'inherit' })
    process.exit(0)
  } catch (error) {
    await fs.rm(temp, { force: true }).catch(() => {})
    console.error(`[dsh-probe-agent] upgrade failed: ${error instanceof Error ? error.message : String(error)}`)
    return false
  }
}

/** Results carried to the next report, and the ids the server may drop. */
let pendingPings = []
let pendingAcks = []

/**
 * Run every probe the server queued on the last response.
 * @param {Array<{id: string, method: string, params: object}>} events
 * @returns {Promise<void>}
 */
async function runEvents(events) {
  const pings = []
  const acks = []
  for (const event of events) {
    if (event === null || typeof event !== 'object') continue
    // A version switch ends this process: the replacement re-execs in place.
    if (event.method === 'agent.switchVersion') {
      const ok = await upgradeSelf(event.params?.version, event.params?.node)
      if (ok) process.exit(0)
      continue
    }
    if (event.method !== 'agent.ping') continue
    const params = event.params ?? {}
    if (typeof params.taskId !== 'string' || typeof params.target !== 'string') continue
    const ms = await probe({ type: params.type, target: params.target })
    pings.push({ taskId: params.taskId, ms })
    if (typeof event.id === 'string') acks.push(event.id)
  }
  if (pings.length > 0) {
    pendingPings = pings
    pendingAcks = acks
    console.log(`[dsh-probe-agent] ran ${pings.length} probe(s)`)
  }
}

/** Egress address of this machine, resolved once. */
let publicIpPromise

/**
 * Ask for this machine's public IPv4.
 *
 * The panel locates a host by address, and an agent reporting to localhost has
 * a loopback source that carries no geography — so the agent reports its own
 * egress address, exactly like Komari's basicInfo does.
 * @returns {Promise<string>} the address, or an empty string when unavailable.
 */
async function publicIp() {
  if (typeof process.env.DSPROBE_PUBLIC_IP === 'string' && process.env.DSPROBE_PUBLIC_IP !== '') {
    return process.env.DSPROBE_PUBLIC_IP.trim()
  }
  if (publicIpPromise === undefined) {
    publicIpPromise = (async () => {
      for (const url of ['https://api.ipify.org', 'https://ifconfig.me/ip', 'https://ipinfo.io/ip']) {
        try {
          const response = await fetch(url, { signal: AbortSignal.timeout(4000) })
          if (!response.ok) continue
          const text = (await response.text()).trim()
          if (/^\d{1,3}(\.\d{1,3}){3}$/.test(text)) return text
        } catch {
          // Try the next endpoint; a failure must not cost a lookup per report.
        }
      }
      return ''
    })()
  }
  return publicIpPromise
}

const endpoint = `${server}/auth/dsh-probe/ingest`
let sent = 0
let failures = 0
let stopping = false
let timer

/** POST one report; a failure never exits the agent. */
async function report() {
  // Probe results measured since the previous report ride this one, together
  // with the ids the server can drop: it is the only downstream channel a
  // dial-out agent has (the same contract Komari's POST fallback uses).
  const body = { ...sample(), pings: pendingPings, ackEventIds: pendingAcks }
  const ip = await publicIp()
  if (ip !== '') body.ip = ip
  const delivered = { pings: pendingPings.length, acks: pendingAcks.length }
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-probe-token': token,
        'x-probe-name': displayName,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10_000),
    })
    if (!response.ok) {
      const text = await response.text().catch(() => '')
      throw new Error(`HTTP ${response.status} ${text.slice(0, 200)}`)
    }
    // The report was accepted, so what it carried is now the server's problem;
    // anything queued in the response becomes this cycle's work.
    if (delivered.pings > 0 || delivered.acks > 0) {
      pendingPings = []
      pendingAcks = []
    }
    let payload = null
    try {
      payload = await response.json()
    } catch {
      payload = null
    }
    const events = Array.isArray(payload?.events) ? payload.events : []
    if (events.length > 0) await runEvents(events)

    sent += 1
    if (sent === 1) {
      console.log(`[dsh-probe-agent] reporting ${displayName} -> ${endpoint} every ${intervalSec}s`)
    } else if (verbose || sent % 20 === 0) {
      console.log(`[dsh-probe-agent] report #${sent} ok (cpu ${body.cpu.toFixed(1)}%, load ${body.load[0].toFixed(2)})`)
    }
  } catch (error) {
    failures += 1
    // A proxy restart or a sleeping laptop must not spam the journal: one line
    // per failure class, and a recovery line after the next success.
    if (failures === 1 || failures % 20 === 0) {
      console.error(`[dsh-probe-agent] report failed (${failures}x): ${error instanceof Error ? error.message : String(error)}`)
    }
  }
  return body
}

/** One report, then schedule the next one (drift-free enough for a probe). */
async function tick() {
  if (stopping) return
  await report()
  if (once) {
    process.exit(failures === 0 ? 0 : 1)
  }
  timer = setTimeout(tick, intervalSec * 1000)
}

process.on('SIGTERM', () => { stopping = true; if (timer) clearTimeout(timer); process.exit(0) })
process.on('SIGINT', () => { stopping = true; if (timer) clearTimeout(timer); process.exit(0) })

tick()
