/**
 * The probe's application operations.
 *
 * Both callers — the panel's HTTP routes and the agent tools — go through this
 * one object, so an operation has exactly one implementation and the two
 * surfaces cannot drift. The service owns no HTTP and no tool schema; it
 * returns plain values and throws `ProbeError` for an explicit status.
 */

import { normalizeReport } from './metrics.js'
import { dropHost as dropEvents, enqueue as enqueueEvent, take as takeEvents } from './events.js'
import { PingStore, dispatchDue, normalizeTask } from './pingtasks.js'
import {
  cachedRegion,
  clearPending,
  createProvider,
  databaseStatus,
  downloadDatabase,
  isPublicAddress,
  lookupRegion,
  markPending,
} from './geo.js'

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
    /** Active region provider; resolved lazily by initGeo(). */
    this.geoProvider = undefined
    /** Latency task results and dispatch bookkeeping. */
    this.pingStore = new PingStore()
    /** @type {PingTask[]} configured latency tasks */
    this.pingTasks = this.store.getPingTasks()
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
      // Auto-detected from the report source address (never typed by hand).
      regionCode: host.regionCode ?? '',
      regionName: host.regionName ?? '',
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
  ingest(token, body, sourceAddress) {
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
    // Locate the host from the address the report arrived on, once. The agent
    // reports every few seconds, so the lookup is cached per address and the
    // result is written back onto the host record; the panel reads it from there.
    if (typeof sourceAddress === 'string') this.#locateHost(host, sourceAddress)
    // A muted host still records metrics; it just must not raise alerts.
    if ((host.mutedUntil ?? 0) <= now) this.alerts.evaluate(host, sample, this.settings(), now)
    // Results the agent carried back on this report, then whatever work is due.
    this.#takePingResults(host.id, body)
    this.#dispatchPings(host.id)
    // The response is the only channel back to the agent: pending events ride
    // it, and the agent acks them on its next report (Komari's POST fallback).
    const events = takeEvents(host.id, Array.isArray(body?.ackEventIds) ? body.ackEventIds : [], 8)
    return { host: host.name, hostId: host.id, events }
  }

  /**
   * Fold the ping results an agent carried back on this report.
   *
   * The agent reports every probe it ran since the previous report as
   * `pings: [{ taskId, ms }]`, where `ms: null` means the probe timed out. All
   * of them are stored so a latency chart sees every gap, not just the drops.
   * @param {string} hostId - reporting host.
   * @param {object} body - the raw report body.
   */
  #takePingResults(hostId, body) {
    const rows = Array.isArray(body?.pings) ? body.pings : []
    for (const row of rows.slice(0, 32)) {
      const taskId = typeof row?.taskId === 'string' ? row.taskId : ''
      if (taskId === '') continue
      if (!this.pingTasks.some(task => task.id === taskId)) continue
      const ms = typeof row?.ms === 'number' && Number.isFinite(row.ms) && row.ms >= 0 ? row.ms : null
      this.pingStore.record(taskId, hostId, ms)
    }
  }

  /**
   * Queue an `agent.ping` event for every task this host is due to run.
   * @param {string} hostId - reporting host.
   */
  #dispatchPings(hostId) {
    dispatchDue(this.pingStore, this.pingTasks, [hostId], (target, params) => {
      enqueueEvent(target, 'agent.ping', params)
    })
  }

  /**
   * Ask one host's agent to replace itself with the panel's version.
   *
   * The panel cannot push code: the agent dials out only. So this queues an
   * `agent.switchVersion` event, which rides the next report response (the same
   * path Komari uses when no websocket is open). The agent then downloads the
   * script this panel serves, verifies its version, and re-execs.
   * @param {string} id - host id.
   * @returns {{queued: boolean, eventId?: string, agentVersion?: string}}
   */
  upgradeAgent(id) {
    const host = this.store.find(id)
    if (host === undefined) throw new ProbeError('host not found', 404)
    const event = enqueueEvent(id, 'agent.switchVersion', {
      version: this.agentVersion,
      // The agent resolves its own platform asset from the release of this
      // version; the panel only names the version.
      channel: 'github-release',
    })
    return {
      queued: true,
      eventId: event.id,
      agentVersion: this.agentVersion,
      currentVersion: host.current?.agentVersion ?? '',
    }
  }

  /** Every latency task, each with a per-host summary. */
  pingSnapshot() {
    return this.pingTasks.map(task => ({
      ...task,
      results: task.hosts.map(hostId => {
        const host = this.store.find(hostId)
        return {
          hostId,
          hostName: host?.name ?? hostId,
          ...this.pingStore.summary(task.id, hostId),
        }
      }),
    }))
  }

  /** Create a latency task. */
  createPingTask(input) {
    const task = normalizeTask(input, null)
    if (task.target === '') throw new ProbeError('ping target is required', 400)
    this.pingTasks.push(task)
    this.store.savePingTasks(this.pingTasks)
    return task
  }

  /** Patch one latency task. */
  updatePingTask(id, patch) {
    const index = this.pingTasks.findIndex(task => task.id === id)
    if (index === -1) throw new ProbeError('ping task not found', 404)
    const next = normalizeTask(patch, this.pingTasks[index])
    if (next.target === '') throw new ProbeError('ping target is required', 400)
    this.pingTasks[index] = next
    this.store.savePingTasks(this.pingTasks)
    return next
  }

  /** Remove one latency task and its samples. */
  removePingTask(id) {
    const index = this.pingTasks.findIndex(task => task.id === id)
    if (index === -1) throw new ProbeError('ping task not found', 404)
    this.pingTasks.splice(index, 1)
    this.pingStore.dropTask(id)
    this.store.savePingTasks(this.pingTasks)
    return true
  }

  /**
   * Histories for one task/host pair, for the latency chart.
   * @param {string} taskId
   * @param {string} hostId
   * @param {number} [windowMs]
   */
  pingSeries(taskId, hostId, windowMs = 60 * 60 * 1000) {
    const cutoff = Date.now() - windowMs
    return this.pingStore.samples(taskId, hostId).filter(row => row.t >= cutoff)
  }

  /**
   * Resolve and persist the host's region from its report source address.
   *
   * Runs off the report path (no await), so a slow or failing geolocation
   * service never delays ingest. The lookup is cached per address, and the
   * outcome is stored on the host so the panel can draw a flag without any
   * per-render network call. Private addresses (LAN, loopback) are skipped.
   * @param host - the host the report belongs to.
   * @param address - the source address the report arrived from.
   */
  #locateHost(host, address) {
    if (!isPublicAddress(address)) return
    // The provider resolves once per process; until it is ready the report is
    // simply stored without a region and the next one picks it up.
    const provider = this.geoProvider
    if (provider === undefined) return
    const cached = cachedRegion(provider.name, address)
    if (cached !== undefined) {
      if (cached !== null && host.regionCode !== cached.code) this.store.setRegion(host.id, cached)
      return
    }
    if (!markPending(address)) return
    lookupRegion(provider, address)
      .then(region => {
        clearPending(address)
        if (region === null) return
        this.store.setRegion(host.id, region)
      })
      .catch(() => { clearPending(address) })
  }

  /**
   * Prepare the region provider (offline database when present, otherwise the
   * configured remote fallback). Safe to call more than once.
   * @returns {Promise<{name: string}>} the active provider.
   */
  async initGeo() {
    if (this.geoProvider !== undefined) return this.geoProvider
    const configured = this.settings().geoProvider ?? ''
    this.geoProvider = await createProvider(configured, this.metrics.root)
    return this.geoProvider
  }

  /** Which region provider is active, and whether the offline database exists. */
  geoStatus() {
    return {
      provider: this.geoProvider?.name ?? 'pending',
      database: databaseStatus(this.metrics.root),
    }
  }

  /**
   * Download the offline database and switch to it, so lookups stop needing a
   * network at all.
   * @returns {Promise<{ok: boolean, error?: string}>}
   */
  async downloadGeoDatabase() {
    const result = await downloadDatabase(this.metrics.root)
    if (result.ok) {
      this.geoProvider = undefined
      await this.initGeo()
    }
    return result
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
