/**
 * Threshold alert engine.
 *
 * Rules are sustained-condition rules, not one-sample spikes: a value has to
 * stay above its threshold for `holdSec` before an alert opens, and it closes
 * as soon as the condition clears. That is what makes the panel's alert list
 * worth reading — a 5 s CPU blip from a build never becomes an alert.
 *
 * Alerts are evaluated from data the probe already has: every agent report
 * feeds the metric rules, and one shared scanner notices hosts that stopped
 * reporting. The engine owns no timers of its own so the host plugin can drive
 * it from the same tick as the rest of its state.
 */

import { randomBytes } from 'node:crypto'

/** Percent-based rules and their display units. */
const RULES = {
  cpu: { unit: '%', label: 'CPU' },
  memory: { unit: '%', label: 'Memory' },
  disk: { unit: '%', label: 'Disk' },
  load: { unit: 'x', label: 'Load' },
  offline: { unit: 's', label: 'Offline' },
}

/** One random alert id. */
function alertId() {
  return randomBytes(4).toString('hex')
}

/** Human sentence for a fired alert (the panel localizes from the fields). */
function sentence(hostName, rule, value, threshold, holdSec) {
  const meta = RULES[rule] ?? { unit: '', label: rule }
  if (rule === 'offline') return `${hostName}: no report for ${Math.round(value)}s (threshold ${threshold}s)`
  return `${hostName}: ${meta.label} ${value}${meta.unit} above ${threshold}${meta.unit} for ${holdSec}s`
}

/**
 * Sustained-threshold alert engine over the probe's live samples.
 */
export class AlertEngine {
  /**
   * @param options.store - the probe store (alert persistence + settings).
   * @param options.onAlert - optional callback fired on open/close (logging).
   */
  constructor(options) {
    this.store = options.store
    this.onAlert = options.onAlert
    const saved = this.store.loadAlerts()
    /** @type {Map<string, object>} active alerts keyed `${hostId}:${rule}` */
    this.active = new Map()
    for (const alert of saved.active) {
      if (alert !== null && typeof alert === 'object' && typeof alert.hostId === 'string') {
        this.active.set(`${alert.hostId}:${alert.rule}`, alert)
      }
    }
    /** @type {object[]} most recent closed alerts, newest first */
    this.recent = saved.recent.filter(alert => alert !== null && typeof alert === 'object').slice(0, 200)
    /** @type {Map<string, number>} first time a condition became true */
    this.pending = new Map()
  }

  /** Persist the current alert document. */
  #persist() {
    this.store.saveAlerts({ active: [...this.active.values()], recent: this.recent })
  }

  /**
   * Evaluate the metric rules for one fresh report.
   * @param host - the host row.
   * @param sample - the normalized sample.
   * @param settings - the current probe settings.
   * @param now - evaluation time (ms).
   */
  evaluate(host, sample, settings, now = Date.now()) {
    // A muted host keeps collecting metrics but must not raise alerts.
    if ((host.mutedUntil ?? 0) > now) return
    const rules = settings.rules
    const cores = Math.max(1, sample.cores || 1)
    const checks = [
      ['cpu', rules.cpu, sample.cpu],
      ['memory', rules.memory, sample.memPct],
      ['disk', rules.disk, sample.diskPct],
      ['load', rules.load, sample.load1 / cores],
    ]
    for (const [rule, config, value] of checks) {
      if (config === undefined || config.enabled !== true) {
        this.#closeIfActive(host, rule, now)
        continue
      }
      const condition = value >= config.threshold
      this.#tick(host, rule, condition, value, config, now)
    }
  }

  /**
   * Evaluate the offline rule for every configured host.
   * @param hosts - every host row.
   * @param metrics - the metric hub (last report time per host).
   * @param settings - the current probe settings.
   * @param now - scan time (ms).
   */
  evaluateOffline(hosts, metrics, settings, now = Date.now()) {
    const rule = settings.rules.offline
    for (const host of hosts) {
      if ((host.mutedUntil ?? 0) > now) {
        this.#closeIfActive(host, 'offline', now, true)
        continue
      }
      if (!host.enabled) {
        this.#closeIfActive(host, 'offline', now, true)
        continue
      }
      const lastSeen = metrics.lastSeen(host.id)
      if (lastSeen === 0 || rule === undefined || rule.enabled !== true) {
        // A host that never reported has no silence to alert on: telling the
        // user their not-yet-installed agent is offline is noise, and the card
        // already shows the install hint.
        if (lastSeen !== 0) this.#closeIfActive(host, 'offline', now)
        continue
      }
      const silenceSec = Math.max(0, Math.round((now - lastSeen) / 1000))
      this.#tick(host, 'offline', silenceSec >= rule.holdSec, silenceSec, { threshold: rule.holdSec, holdSec: 0 }, now)
    }
  }

  /** One rule's evaluation step: open after the hold, close on recovery. */
  #tick(host, rule, condition, value, config, now) {
    const key = `${host.id}:${rule}`
    const alert = this.active.get(key)
    if (condition) {
      if (alert !== undefined) {
        alert.value = Math.round(value * 10) / 10
        alert.peak = Math.max(alert.peak, value)
        return
      }
      const since = this.pending.get(key) ?? now
      if (!this.pending.has(key)) this.pending.set(key, since)
      if (now - since < Math.max(0, config.holdSec ?? 0) * 1000) return
      const opened = {
        id: alertId(),
        hostId: host.id,
        hostName: host.name,
        rule,
        severity: 'warning',
        value: Math.round(value * 10) / 10,
        peak: value,
        threshold: config.threshold ?? config.holdSec,
        holdSec: config.holdSec ?? 0,
        unit: RULES[rule]?.unit ?? '',
        message: sentence(host.name, rule, Math.round(value * 10) / 10, config.threshold ?? config.holdSec, config.holdSec ?? 0),
        startedAt: now,
        endedAt: null,
      }
      this.active.set(key, opened)
      this.#persist()
      this.onAlert?.('open', opened)
      return
    }
    this.pending.delete(key)
    this.#closeIfActive(host, rule, now)
  }

  /** Close an active alert for one host/rule, when present. */
  #closeIfActive(host, rule, now, silent = false) {
    const key = `${host.id}:${rule}`
    const alert = this.active.get(key)
    if (alert === undefined) return
    this.active.delete(key)
    this.pending.delete(key)
    const closed = {
      ...alert,
      endedAt: now,
      durationSec: Math.round((now - alert.startedAt) / 1000),
      // A close caused by a mute / disable is bookkeeping, not a recovery the
      // user asked to be notified about.
      silent: silent || alert.silent === true,
    }
    this.recent.unshift(closed)
    this.recent = this.recent.slice(0, 200)
    this.#persist()
    this.onAlert?.('close', closed)
  }

  /**
   * Close every active alert of one host (mute, disable, removal).
   * @param hostId - the host whose alerts should be cleared.
   * @param options.silent - suppress the close notification (default true).
   */
  closeHost(hostId, options = {}) {
    const silent = options.silent !== false
    const now = Date.now()
    let changed = false
    for (const [key, alert] of [...this.active.entries()]) {
      if (alert.hostId !== hostId) continue
      this.active.delete(key)
      this.pending.delete(key)
      this.recent.unshift({
        ...alert,
        endedAt: now,
        durationSec: Math.round((now - alert.startedAt) / 1000),
        silent,
      })
      changed = true
    }
    for (const key of [...this.pending.keys()]) {
      if (key.startsWith(`${hostId}:`)) this.pending.delete(key)
    }
    if (changed) {
      this.recent = this.recent.slice(0, 200)
      this.#persist()
    }
  }

  /** Remove every alert belonging to a removed host. */
  removeHost(hostId) {
    let changed = false
    for (const key of [...this.active.keys()]) {
      if (key.startsWith(`${hostId}:`)) {
        this.active.delete(key)
        changed = true
      }
    }
    for (const key of [...this.pending.keys()]) {
      if (key.startsWith(`${hostId}:`)) this.pending.delete(key)
    }
    const kept = this.recent.filter(alert => alert.hostId !== hostId)
    if (kept.length !== this.recent.length) changed = true
    this.recent = kept
    if (changed) this.#persist()
  }

  /** Alerts for one host (active first, then recent). */
  forHost(hostId) {
    return {
      active: [...this.active.values()].filter(alert => alert.hostId === hostId),
      recent: this.recent.filter(alert => alert.hostId === hostId).slice(0, 20),
    }
  }

  /** The whole alert state. */
  snapshot() {
    return {
      active: [...this.active.values()],
      recent: this.recent.slice(0, 50),
      totalActive: this.active.size,
      totalRecent: this.recent.length,
    }
  }
}
