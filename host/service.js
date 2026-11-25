/**
 * The probe's application operations.
 *
 * Both callers — the panel's HTTP routes and the agent tools — go through this
 * one object, so an operation has exactly one implementation and the two
 * surfaces cannot drift. The service owns no HTTP and no tool schema; it
 * returns plain values and throws `ProbeError` for an explicit status.
 */

import { normalizeReport } from './metrics.js'

/**
 * Compare two dotted versions by their numeric segments.
 * @param {string} a - left version.
 * @param {string} b - right version.
 * @returns negative when a < b, 0 when equal, positive when a > b.
 */
function compareVersions(a, b) {
  const split = (value) => String(value).split(/[.+-]/).map((part) => Number.parseInt(part, 10) || 0)
  const left = split(a)
  const right = split(b)
  const length = Math.max(left.length, right.length)
  for (let index = 0; index < length; index += 1) {
    const diff = (left[index] ?? 0) - (right[index] ?? 0)
    if (diff !== 0) return diff
  }
  return 0
}

/** An operation failure carrying the HTTP-ish status the caller should show. */
export class ProbeError extends Error {
  constructor(message, status = 400) {
    super(message)
    this.name = 'ProbeError'
    this.status = status
  }
}

/** Reports from one host closer than this are dropped as duplicates. */
const MIN_REPORT_GAP_MS = 200

/** Status words a host view may carry. */
export const HOST_STATUS = {
  online: 'online',
  stale: 'stale',
  offline: 'offline',
  waiting: 'waiting',
  disabled: 'disabled',
}

/**
 * Probe operations over the store, metric hub and alert engine.
 */
export class ProbeService {
  /**
   * @param options.store - host/settings persistence.
   * @param options.metrics - metric ring + minute history.
   * @param options.alerts - alert engine.
   * @param options.version - plugin version (shown on the install card).
   */
  constructor(options) {
    this.store = options.store
    this.metrics = options.metrics
    this.alerts = options.alerts
    this.notifier = options.notifier
    this.version = options.version ?? '0.2.0'
    this.agentVersion = options.agentVersion ?? this.version
    /** @type {Map<string, number>} last accepted report per host */
    this.lastReport = new Map()
  }

  /** Settings, kept as the single source for thresholds and retention. */
  settings() {
    return this.store.getSettings()
  }

  /** Apply a settings patch and keep the metric hub's retention in sync. */
  updateSettings(patch) {
    const settings = this.store.updateSettings(patch)
    this.metrics.setRetentionDays(settings.retentionDays)
    return settings
  }

  /** One host by id or exact name. */
  resolve(reference) {
    if (typeof reference !== 'string' || reference === '') return undefined
    return this.store.find(reference) ?? this.store.list().find(host => host.name === reference)
  }

  /**
   * The panel view of one host: identity, liveness, the newest sample, a spark
   * series for the cards, and this host's alerts.
   * @param host - the stored host row.
   * @param options.sparkPoints - raw points included for the card sparkline.
   */
  view(host, options = {}) {
    const settings = this.settings()
    const current = this.metrics.current(host.id) ?? null
    const lastSeen = this.metrics.lastSeen(host.id)
    const silenceMs = lastSeen === 0 ? 0 : Math.max(0, Date.now() - lastSeen)
    const offlineSec = settings.rules.offline?.holdSec ?? 60
    const reportSec = settings.reportIntervalSec ?? 3
    let status
    if (!host.enabled) status = HOST_STATUS.disabled
    else if (lastSeen === 0) status = HOST_STATUS.waiting
    else if (silenceMs >= offlineSec * 1000) status = HOST_STATUS.offline
    else if (silenceMs > Math.max(reportSec * 4, 15) * 1000) status = HOST_STATUS.stale
    else status = HOST_STATUS.online
    return {
      id: host.id,
      name: host.name,
      token: host.token,
      tags: [...host.tags],
      location: host.location ?? '',
      note: host.note ?? '',
      enabled: host.enabled,
      createdAt: host.createdAt,
      updatedAt: host.updatedAt,
      status,
      muted: (host.mutedUntil ?? 0) > Date.now(),
      mutedUntil: host.mutedUntil ?? 0,
      // A host whose last report came from an older agent build. Only a
      // strictly older version is "outdated": an agent upgraded ahead of the
      // panel is not something the operator needs to act on.
      agentOutdated: current !== null && current.agentVersion !== ''
        && compareVersions(current.agentVersion, this.agentVersion) < 0,
      lastSeen,
      silenceMs,
      current,
      spark: this.metrics.spark(host.id, options.sparkPoints ?? 60) ?? null,
      alerts: this.alerts.forHost(host.id),
      historyBytes: this.metrics.historyBytes(host.id),
    }
  }

  /** Every host view, in store order. */
  views() {
    return this.store.list().map(host => this.view(host))
  }

  /** The whole panel payload. */
  snapshot() {
    const settings = this.settings()
    const hosts = this.views()
    return {
      now: Date.now(),
      version: this.version,
      hosts,
      alerts: this.alerts.snapshot(),
      settings,
      versions: {
        panel: this.version,
        agent: this.agentVersion,
      },
      notify: {
        enabled: this.settings().notify.enabled === true,
        url: this.settings().notify.url,
        onResolve: this.settings().notify.onResolve !== false,
        last: this.notifier?.last ?? null,
      },
      counts: {
        total: hosts.length,
        online: hosts.filter(host => host.status === HOST_STATUS.online || host.status === HOST_STATUS.stale).length,
        waiting: hosts.filter(host => host.status === HOST_STATUS.waiting).length,
      },
    }
  }

  /** Create a host and return its panel view (including the fresh token). */
  createHost(input) {
    const host = this.store.create(input)
    return this.view(host)
  }

  /** Patch a host; undefined when the id is unknown. */
  updateHost(id, patch) {
    const host = this.store.update(id, patch)
    return host === undefined ? undefined : this.view(host)
  }

  /** Remove a host and every artifact it owned. */
  removeHost(id) {
    const host = this.store.find(id)
    if (host === undefined) return false
    this.alerts.removeHost(id)
    this.metrics.removeHost(id)
    this.store.remove(id)
    this.lastReport.delete(id)
    return true
  }

  /** Rotate one host's token. */
  rotateToken(id) {
    const host = this.store.rotateToken(id)
    return host === undefined ? undefined : this.view(host)
  }

  /** One host's downsample series for the requested range. */
  history(id, range = '1h') {
    const host = this.store.find(id)
    if (host === undefined) throw new ProbeError('host not found', 404)
    const normalized = range === '24h' || range === '7d' ? range : '1h'
    return { hostId: id, name: host.name, range: normalized, ...this.metrics.series(id, normalized) }
  }

  /** The alert document. */
  alertsSnapshot() {
    return this.alerts.snapshot()
  }

  /** Drop the closed-alert history. */
  clearRecentAlerts() {
    this.alerts.recent = []
    this.store.saveAlerts({ active: [...this.alerts.active.values()], recent: [] })
    return this.alerts.snapshot()
  }

  /**
   * Accept one agent report.
   * @param token - the `x-probe-token` header value.
   * @param body - parsed JSON report.
   * @returns the reporting host name.
   * @throws {ProbeError} for an unknown token, a disabled host, or an unusable payload.
   */
  ingest(token, body) {
    const host = this.store.findByToken(token)
    if (host === undefined) throw new ProbeError('unknown agent token', 401)
    if (!host.enabled) throw new ProbeError('host is disabled', 403)
    const now = Date.now()
    const previous = this.lastReport.get(host.id) ?? 0
    if (now - previous < MIN_REPORT_GAP_MS) throw new ProbeError('reporting too fast', 429)
    const sample = normalizeReport(body, now)
    if (sample === undefined) throw new ProbeError('report carries no usable metrics', 400)
    this.lastReport.set(host.id, now)
    this.metrics.ingest(host.id, sample)
    // A muted host still records metrics; it just must not raise alerts.
    if ((host.mutedUntil ?? 0) <= now) this.alerts.evaluate(host, sample, this.settings(), now)
    return { host: host.name, hostId: host.id }
  }

  /**
   * Silence a host's alerts for a window (0 unmutes), closing active alerts.
   * @returns the updated host view, or undefined when the id is unknown.
   */
  setMute(id, minutes) {
    const host = this.store.setMute(id, minutes)
    if (host === undefined) return undefined
    const window = Math.max(0, Math.round(Number(minutes) || 0))
    if (window > 0) this.alerts.closeHost(id, { silent: true })
    return this.view(host)
  }

  /** Send a test webhook and return the delivery outcome. */
  async testNotify() {
    if (this.notifier === undefined) return { ok: false, error: 'webhook notifier unavailable', at: Date.now() }
    return this.notifier.test()
  }

  /** Run the offline scan (driven by the host plugin's timer). */
  scanOffline() {
    this.alerts.evaluateOffline(this.store.list(), this.metrics, this.settings(), Date.now())
  }
}
