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
import os from 'node:os'

const VERSION = '0.2.1'

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
  const firstCpu = os.cpus()[0]
  return {
    v: 1,
    agentVersion: VERSION,
    hostname: os.hostname(),
    os: `${os.type()} ${os.release()}`,
    arch: os.arch(),
    kernel: os.release(),
    cores,
    cpuModel: firstCpu?.model?.trim() ?? '',
    uptime: Math.round(os.uptime()),
    cpu: clamp(Number.isFinite(cpuPct) ? cpuPct : 0, 0, 100),
    mem: { total: mem.total, used: mem.used, swapTotal: mem.swapTotal, swapUsed: mem.swapUsed },
    disk: { mount: disk.mount, total: disk.total, used: disk.used },
    load: [load[0] ?? 0, load[1] ?? 0, load[2] ?? 0],
    net: { rxRate: Math.round(rxRate), txRate: Math.round(txRate) },
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

const endpoint = `${server}/auth/dsh-probe/ingest`
let sent = 0
let failures = 0
let stopping = false
let timer

/** POST one report; a failure never exits the agent. */
async function report() {
  const body = sample()
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
