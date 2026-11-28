/**
 * Latency monitoring tasks, modelled on Komari's `database/models/pingTask.go`.
 *
 * A task is one probe: a name, a kind (`icmp` / `tcp` / `http`), a target, an
 * interval, and which hosts run it. The server decides when a host is due and
 * queues an `agent.ping` event; the agent runs the probe and reports the result
 * back through its normal report channel.
 *
 * Results are kept in a small ring per (task, host) pair: only the recent window
 * matters for a latency chart, and a busy fleet would otherwise grow this
 * without bound.
 */

import { randomUUID } from 'node:crypto'

/** Accepted probe kinds, matching upstream's `Type` column. */
export const PING_TYPES = ['icmp', 'tcp', 'http']

/** Samples retained per (task, host) pair. */
const SAMPLES_PER_PAIR = 720

/** Shortest interval a task may request, so an agent is never hammered. */
export const MIN_INTERVAL_SEC = 10

/** Longest interval worth keeping; anything rarer is not a latency monitor. */
export const MAX_INTERVAL_SEC = 24 * 60 * 60

/**
 * @typedef {object} PingTask
 * @property {string} id - stable id.
 * @property {string} name - operator-facing label.
 * @property {'icmp'|'tcp'|'http'} type - probe kind.
 * @property {string} target - host or URL the agent probes.
 * @property {number} intervalSec - how often each host runs it.
 * @property {string[]} hosts - host ids this task applies to; empty means none.
 * @property {boolean} enabled - paused tasks are neither dispatched nor charted.
 * @property {number} createdAt
 * @property {number} updatedAt
 */

/** Normalize one task input over an existing value. */
export function normalizeTask(input, previous) {
  const type = PING_TYPES.includes(input?.type) ? input.type : (previous?.type ?? 'icmp')
  const interval = Number(input?.intervalSec ?? previous?.intervalSec ?? 60)
  const hosts = Array.isArray(input?.hosts)
    ? input.hosts.filter(host => typeof host === 'string' && host !== '').slice(0, 200)
    : (previous?.hosts ?? [])
  return {
    id: previous?.id ?? randomUUID(),
    name: String(input?.name ?? previous?.name ?? 'probe').slice(0, 60),
    type,
    target: String(input?.target ?? previous?.target ?? '').slice(0, 255),
    intervalSec: Math.min(MAX_INTERVAL_SEC, Math.max(MIN_INTERVAL_SEC, Math.round(interval) || 60)),
    hosts,
    enabled: input?.enabled !== undefined ? input.enabled !== false : (previous?.enabled !== false),
    createdAt: previous?.createdAt ?? Date.now(),
    updatedAt: Date.now(),
  }
}

/** Whether a task applies to one host and is due for another dispatch. */
function dueFor(task, hostId, lastRunAt) {
  if (!task.enabled || task.target === '') return false
  if (!task.hosts.includes(hostId)) return false
  return Date.now() - lastRunAt >= task.intervalSec * 1000
}

/**
 * Latency result storage: a bounded ring per (task, host).
 */
export class PingStore {
  constructor() {
    /** @type {Map<string, Array<{t: number, ms: number|null}>>} */
    this.series = new Map()
    /** @type {Map<string, number>} last dispatch time per `${taskId}|${hostId}` */
    this.lastRun = new Map()
  }

  /** Key for one task/host pair. */
  static key(taskId, hostId) {
    return `${taskId}|${hostId}`
  }

  /**
   * Record one probe result.
   * @param {string} taskId
   * @param {string} hostId
   * @param {number|null} ms - round-trip time, or null for a loss.
   */
  record(taskId, hostId, ms) {
    const key = PingStore.key(taskId, hostId)
    let ring = this.series.get(key)
    if (ring === undefined) {
      ring = []
      this.series.set(key, ring)
    }
    ring.push({ t: Date.now(), ms })
    while (ring.length > SAMPLES_PER_PAIR) ring.shift()
  }

  /** Samples for one pair (oldest first). */
  samples(taskId, hostId) {
    return this.series.get(PingStore.key(taskId, hostId)) ?? []
  }

  /**
   * Summary for one pair: latest value, average and loss rate over a window.
   * @param {string} taskId
   * @param {string} hostId
   * @param {number} [windowMs] - how far back to look.
   */
  summary(taskId, hostId, windowMs = 60 * 60 * 1000) {
    const cutoff = Date.now() - windowMs
    const rows = this.samples(taskId, hostId).filter(row => row.t >= cutoff)
    if (rows.length === 0) return { latest: null, avg: null, loss: null, count: 0 }
    const lost = rows.filter(row => row.ms === null).length
    const seen = rows.filter(row => row.ms !== null)
    const avg = seen.length === 0 ? null : seen.reduce((sum, row) => sum + (row.ms ?? 0), 0) / seen.length
    return {
      latest: rows[rows.length - 1]?.ms ?? null,
      avg: avg === null ? null : Math.round(avg * 10) / 10,
      loss: Math.round((lost / rows.length) * 1000) / 10,
      count: rows.length,
    }
  }

  /** Mark a dispatch so the next tick waits for the interval again. */
  markDispatched(taskId, hostId) {
    this.lastRun.set(PingStore.key(taskId, hostId), Date.now())
  }

  /** Last dispatch time for one pair, or 0. */
  lastDispatch(taskId, hostId) {
    return this.lastRun.get(PingStore.key(taskId, hostId)) ?? 0
  }

  /** Drop every result for a host (host removed). */
  dropHost(hostId) {
    for (const key of [...this.series.keys()]) {
      if (key.endsWith(`|${hostId}`)) this.series.delete(key)
    }
    for (const key of [...this.lastRun.keys()]) {
      if (key.endsWith(`|${hostId}`)) this.lastRun.delete(key)
    }
  }

  /** Drop every result for a task. */
  dropTask(taskId) {
    for (const key of [...this.series.keys()]) {
      if (key.startsWith(`${taskId}|`)) this.series.delete(key)
    }
    for (const key of [...this.lastRun.keys()]) {
      if (key.startsWith(`${taskId}|`)) this.lastRun.delete(key)
    }
  }
}

/**
 * Queue ping events for every task/host pair that is due.
 * @param {PingStore} store - result/last-run bookkeeping.
 * @param {PingTask[]} tasks - configured tasks.
 * @param {string[]} hostIds - hosts that reported recently enough to be online.
 * @param {(hostId: string, event: object) => void} dispatch - queue one event.
 * @returns {number} how many events were queued.
 */
export function dispatchDue(store, tasks, hostIds, dispatch) {
  let queued = 0
  for (const task of tasks) {
    for (const hostId of hostIds) {
      if (!dueFor(task, hostId, store.lastDispatch(task.id, hostId))) continue
      dispatch(hostId, { taskId: task.id, type: task.type, target: task.target })
      store.markDispatched(task.id, hostId)
      queued += 1
    }
  }
  return queued
}
