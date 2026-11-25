/**
 * Metric store: a one-hour in-memory ring of raw reports plus a one-minute
 * on-disk series retained for `retentionDays` (7 by default).
 *
 * The split keeps both questions cheap: "what is happening right now" reads
 * the ring (no disk), and "how did last night look" reads the minute file. The
 * hour of raw samples lives only in memory, so a restart costs at most one
 * recent window; the minute file is the durable part and is trimmed on load.
 *
 * History rows are one JSON object per line, which keeps the file readable
 * with ordinary tools and lets a crashed write lose one sample instead of the
 * whole series.
 */

import { appendFileSync, chmodSync, existsSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

/** Raw reports kept per host (one hour at the default 3 s cadence). */
const RAW_MAX = 1500
/** Raw history window. */
const RAW_WINDOW_MS = 60 * 60 * 1000
/** Month/minute constants. */
const MINUTE_MS = 60 * 1000

/** Clamp a finite number into [min, max], or return the fallback. */
function num(value, fallback = 0, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  return typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback
}

/** Round to two decimals so files and payloads stay compact. */
function round(value, digits = 2) {
  const factor = 10 ** digits
  return Math.round(value * factor) / factor
}

/** Read a JSON-lines file into rows, tolerating a truncated last line. */
function readLines(path) {
  let text
  try {
    text = readFileSync(path, 'utf8')
  } catch {
    return []
  }
  const rows = []
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (trimmed === '') continue
    try {
      const row = JSON.parse(trimmed)
      if (row !== null && typeof row === 'object' && Number.isFinite(row.t)) rows.push(row)
    } catch {
      // A torn trailing line from a crash is dropped; the rest stays valid.
    }
  }
  return rows
}

/**
 * Normalize one agent report into the stored sample shape.
 * @param body - parsed JSON body from the agent.
 * @param now - receive timestamp in ms.
 * @returns the sample, or undefined when the payload carries no usable CPU/mem numbers.
 */
export function normalizeReport(body, now = Date.now()) {
  if (body === null || typeof body !== 'object') return undefined
  const mem = body.mem ?? {}
  const disk = body.disk ?? {}
  const network = body.net ?? {}
  const load = Array.isArray(body.load) ? body.load : []
  const cpu = num(body.cpu, Number.NaN, 0, 100)
  const memTotal = num(mem.total, 0, 0)
  const memUsed = num(mem.used, 0, 0)
  const diskTotal = num(disk.total, 0, 0)
  const diskUsed = num(disk.used, 0, 0)
  if (!Number.isFinite(cpu) && (memTotal === 0 || memUsed === 0)) return undefined
  const swapTotal = num(mem.swapTotal, 0, 0)
  const swapUsed = num(mem.swapUsed, 0, 0)
  return {
    t: now,
    cpu: Number.isFinite(cpu) ? round(cpu, 1) : 0,
    memTotal,
    memUsed,
    memPct: memTotal > 0 ? round((memUsed / memTotal) * 100, 1) : 0,
    swapTotal,
    swapUsed,
    swapPct: swapTotal > 0 ? round((swapUsed / swapTotal) * 100, 1) : 0,
    diskMount: typeof disk.mount === 'string' ? disk.mount.slice(0, 64) : '/',
    diskTotal,
    diskUsed,
    diskPct: diskTotal > 0 ? round((diskUsed / diskTotal) * 100, 1) : 0,
    load1: num(load[0], 0, 0),
    load5: num(load[1], 0, 0),
    load15: num(load[2], 0, 0),
    rxRate: num(network.rxRate, 0, 0),
    txRate: num(network.txRate, 0, 0),
    totalRx: num(network.totalRx, 0, 0),
    totalTx: num(network.totalTx, 0, 0),
    connTcp: Math.round(num(body.conn?.tcp, 0, 0, 1e9)),
    connUdp: Math.round(num(body.conn?.udp, 0, 0, 1e9)),
    gpuName: typeof body.gpu?.name === 'string' ? body.gpu.name.slice(0, 96) : '',
    gpuMemTotal: num(body.gpu?.memTotal, 0, 0),
    gpuMemUsed: num(body.gpu?.memUsed, 0, 0),
    gpuUsage: num(body.gpu?.usage, 0, 0, 100),
    gpuTemp: num(body.gpu?.temp, 0, -50, 200),
    uptime: num(body.uptime, 0, 0),
    hostname: typeof body.hostname === 'string' ? body.hostname.slice(0, 128) : '',
    os: typeof body.os === 'string' ? body.os.slice(0, 128) : '',
    kernel: typeof body.kernel === 'string' ? body.kernel.slice(0, 128) : '',
    arch: typeof body.arch === 'string' ? body.arch.slice(0, 32) : '',
    cpuModel: typeof body.cpuModel === 'string' ? body.cpuModel.slice(0, 128) : '',
    cores: Math.round(num(body.cores, 0, 0, 1024)),
    agentVersion: typeof body.agentVersion === 'string' ? body.agentVersion.slice(0, 24) : '',
  }
}

/** Average one field across the samples that carry it. */
function average(values) {
  return values.length === 0 ? 0 : values.reduce((sum, value) => sum + value, 0) / values.length
}

/** Downsample points into at most `max` evenly spaced buckets (average per bucket). */
function downsample(points, max, fieldOf) {
  if (points.length <= max) return points
  const size = Math.ceil(points.length / max)
  const out = []
  for (let index = 0; index < points.length; index += size) {
    const slice = points.slice(index, index + size)
    const row = fieldOf(slice)
    row.t = slice[0].t
    out.push(row)
  }
  return out
}

/**
 * The per-profile metric store.
 */
export class MetricsHub {
  /**
   * @param options.root - the probe data directory (history lives under it).
   * @param options.retentionDays - days of minute history kept.
   */
  constructor(options) {
    this.root = options.root
    this.historyDir = join(options.root, 'history')
    this.retentionDays = options.retentionDays ?? 7
    /** @type {Map<string, object>} per-host state */
    this.hosts = new Map()
  }

  /** Set the retention window (a settings edit reaches the running instance). */
  setRetentionDays(days) {
    if (Number.isFinite(days)) this.retentionDays = Math.max(1, Math.min(30, Math.round(days)))
  }

  /** File path for one host's minute series. */
  #file(hostId) {
    return join(this.historyDir, `${hostId}.jsonl`)
  }

  /** Load (or create) the state for one host. */
  #state(hostId) {
    let state = this.hosts.get(hostId)
    if (state !== undefined) return state
    state = {
      hostId,
      raw: [],
      persisted: [],
      lastSeen: 0,
      minute: null,
      lastReportAt: 0,
    }
    const file = this.#file(hostId)
    if (existsSync(file)) {
      const cutoff = Date.now() - this.retentionDays * 24 * 60 * MINUTE_MS
      const all = readLines(file)
      const rows = all.filter(row => row.t >= cutoff)
      state.persisted = rows
      // Rewrite a trimmed file only when trimming actually removed rows.
      if (rows.length < all.length) {
        const tmp = `${file}.${process.pid}.tmp`
        writeFileSync(tmp, rows.map(row => JSON.stringify(row)).join('\n') + '\n', { mode: 0o600 })
        try { chmodSync(tmp, 0o600) } catch { /* best effort */ }
        renameSync(tmp, file)
      }
    }
    this.hosts.set(hostId, state)
    return state
  }

  /**
   * Store one report.
   * @param hostId - the reporting host.
   * @param sample - a normalized sample from {@link normalizeReport}.
   * @param duplicateWindowMs - reports closer than this replace the previous
   *   sample in place (protects the ring from an agent restarting in a loop).
   */
  ingest(hostId, sample, duplicateWindowMs = 500) {
    const state = this.#state(hostId)
    if (state.raw.length > 0 && sample.t - state.raw[state.raw.length - 1].t < duplicateWindowMs) {
      state.raw[state.raw.length - 1] = sample
    } else {
      state.raw.push(sample)
    }
    const cutoff = sample.t - RAW_WINDOW_MS
    while (state.raw.length > RAW_MAX || (state.raw.length > 0 && state.raw[0].t < cutoff)) state.raw.shift()
    state.lastSeen = sample.t
    state.lastReportAt = sample.t
    this.#aggregate(state, sample)
  }

  /** Fold one sample into the current minute bucket, flushing the previous minute. */
  #aggregate(state, sample) {
    const minuteStart = Math.floor(sample.t / MINUTE_MS) * MINUTE_MS
    if (state.minute !== null && state.minute.t !== minuteStart) this.#flush(state)
    if (state.minute === null) {
      state.minute = {
        t: minuteStart, count: 0,
        cpu: 0, mem: 0, disk: 0, load: 0, rx: 0, tx: 0,
        connTcp: 0, connUdp: 0,
        cpuMax: 0, memMax: 0, diskMax: 0,
      }
    }
    const bucket = state.minute
    bucket.count += 1
    bucket.cpu += sample.cpu
    bucket.mem += sample.memPct
    bucket.disk += sample.diskPct
    bucket.load += sample.load1
    bucket.rx += sample.rxRate
    bucket.tx += sample.txRate
    bucket.connTcp += sample.connTcp ?? 0
    bucket.connUdp += sample.connUdp ?? 0
    bucket.cpuMax = Math.max(bucket.cpuMax, sample.cpu)
    bucket.memMax = Math.max(bucket.memMax, sample.memPct)
    bucket.diskMax = Math.max(bucket.diskMax, sample.diskPct)
  }

  /** Persist the completed minute bucket. */
  #flush(state) {
    const bucket = state.minute
    state.minute = null
    if (bucket === null || bucket.count === 0) return
    const row = {
      t: bucket.t,
      c: round(bucket.cpu / bucket.count, 1),
      m: round(bucket.mem / bucket.count, 1),
      d: round(bucket.disk / bucket.count, 1),
      l: round(bucket.load / bucket.count, 2),
      r: round(bucket.rx / bucket.count, 0),
      x: round(bucket.tx / bucket.count, 0),
      cMax: round(bucket.cpuMax, 1),
      // Connection counts ride the minute row so the trend chart can show them
      // without a second file; absent on rows written before this field existed.
      tc: Math.round(bucket.connTcp / bucket.count),
      uc: Math.round(bucket.connUdp / bucket.count),
    }
    state.persisted.push(row)
    const cutoff = Date.now() - this.retentionDays * 24 * 60 * MINUTE_MS
    while (state.persisted.length > this.retentionDays * 1440 + 5) state.persisted.shift()
    while (state.persisted.length > 0 && state.persisted[0].t < cutoff) state.persisted.shift()
    try {
      appendFileSync(this.#file(state.hostId), JSON.stringify(row) + '\n', { mode: 0o600 })
    } catch {
      // A failed history write must not fail the report the agent just sent;
      // the in-memory series keeps the live charts working.
    }
  }

  /** The newest raw sample for a host, when one exists. */
  current(hostId) {
    const state = this.#state(hostId)
    return state.raw.length === 0 ? undefined : state.raw[state.raw.length - 1]
  }

  /** When this host last reported (ms), or 0. */
  lastSeen(hostId) {
    return this.#state(hostId).lastSeen
  }

  /** A compact spark series for the host cards. */
  spark(hostId, points = 60) {
    const state = this.#state(hostId)
    if (state.raw.length === 0) return undefined
    const slice = state.raw.slice(-points)
    return {
      from: slice[0].t,
      to: slice[slice.length - 1].t,
      cpu: slice.map(point => point.cpu),
      mem: slice.map(point => point.memPct),
      disk: slice.map(point => point.diskPct),
      load: slice.map(point => point.load1),
      rx: slice.map(point => point.rxRate),
      tx: slice.map(point => point.txRate),
    }
  }

  /**
   * One downsampled series for the detail chart.
   * @param hostId - the host.
   * @param range - '1h' (raw ring), '24h' or '7d' (minute history).
   * @returns points plus an average/max summary, or an empty series.
   */
  series(hostId, range = '1h') {
    const state = this.#state(hostId)
    const now = Date.now()
    let rows
    let max
    if (range === '1h' && state.raw.length > 0) {
      rows = state.raw.map(point => ({
        t: point.t, c: point.cpu, m: point.memPct, d: point.diskPct, l: point.load1, r: point.rxRate, x: point.txRate,
      }))
      max = 240
    } else {
      const windowMs = range === '7d' ? this.retentionDays * 24 * 60 * MINUTE_MS : range === '24h' ? 24 * 60 * MINUTE_MS : 60 * MINUTE_MS
      rows = state.persisted.filter(row => row.t >= now - windowMs)
      max = range === '7d' ? 336 : range === '24h' ? 288 : 120
      if (range === '1h' && rows.length > 0) {
        // No raw ring yet (fresh process): the minute history still answers.
        rows = rows
      }
    }
    const points = downsample(rows, max, slice => ({
      c: round(average(slice.map(row => row.c)), 1),
      m: round(average(slice.map(row => row.m)), 1),
      d: round(average(slice.map(row => row.d)), 1),
      l: round(average(slice.map(row => row.l)), 2),
      r: round(average(slice.map(row => row.r)), 0),
      x: round(average(slice.map(row => row.x)), 0),
    }))
    const cpuValues = rows.map(row => row.c)
    const memValues = rows.map(row => row.m)
    const diskValues = rows.map(row => row.d)
    return {
      from: points.length === 0 ? now : points[0].t,
      to: points.length === 0 ? now : points[points.length - 1].t,
      stepMs: points.length < 2 ? 0 : points[1].t - points[0].t,
      points,
      summary: {
        cpu: { avg: round(average(cpuValues), 1), max: round(Math.max(0, ...cpuValues), 1) },
        mem: { avg: round(average(memValues), 1), max: round(Math.max(0, ...memValues), 1) },
        disk: { avg: round(average(diskValues), 1), max: round(Math.max(0, ...diskValues), 1) },
      },
    }
  }

  /** Forget a removed host (its file is deleted by the store). */
  removeHost(hostId) {
    this.hosts.delete(hostId)
  }

  /** Drop history rows past the retention window for every loaded host. */
  trimAll() {
    const cutoff = Date.now() - this.retentionDays * 24 * 60 * MINUTE_MS
    for (const [hostId, state] of this.hosts) {
      if (state.persisted.length === 0) continue
      const kept = state.persisted.filter(row => row.t >= cutoff)
      if (kept.length === state.persisted.length) continue
      state.persisted = kept
      try {
        const file = this.#file(hostId)
        const tmp = `${file}.${process.pid}.tmp`
        writeFileSync(tmp, kept.map(row => JSON.stringify(row)).join('\n') + '\n', { mode: 0o600 })
        renameSync(tmp, file)
      } catch {
        // Best effort: an unwritable history file never breaks the live view.
      }
    }
  }

  /** Size of one host's history file in bytes (panel diagnostics). */
  historyBytes(hostId) {
    try {
      return statSync(this.#file(hostId)).size
    } catch {
      return 0
    }
  }
}
