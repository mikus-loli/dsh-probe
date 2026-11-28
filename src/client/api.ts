/**
 * Browser-side client for the /api/dsh-probe route family — the only data
 * access path the panel uses. Plain same-origin fetch; the host half applies
 * the loopback/trust fence and the remote-access layer applies its own auth.
 */
import { tt } from './panel/helpers'

/** Route base claimed by the host half. */
const BASE = '/api/dsh-probe'

/** A host status as the host half computes it. */
export type HostStatus = 'online' | 'stale' | 'offline' | 'waiting' | 'disabled'

/** One normalized metric sample. */
export interface ProbeSample {
  t: number
  cpu: number
  memTotal: number
  memUsed: number
  memPct: number
  swapTotal: number
  swapUsed: number
  swapPct: number
  diskMount: string
  diskTotal: number
  diskUsed: number
  diskPct: number
  load1: number
  load5: number
  load15: number
  rxRate: number
  txRate: number
  /** Cumulative bytes since boot, for traffic accounting. */
  totalRx: number
  totalTx: number
  /** Established TCP sockets and open UDP sockets. */
  connTcp: number
  connUdp: number
  gpuName: string
  gpuMemTotal: number
  gpuMemUsed: number
  gpuUsage: number
  gpuTemp: number
  uptime: number
  hostname: string
  os: string
  kernel: string
  arch: string
  cpuModel: string
  cores: number
  agentVersion: string
}

/** One host's standing on one latency task. */
export interface ProbePingResult {
  hostId: string
  hostName: string
  latest: number | null
  avg: number | null
  loss: number | null
  count: number
}

/** A latency probe task. */
export interface ProbePingTask {
  id: string
  name: string
  type: 'icmp' | 'tcp' | 'http'
  target: string
  intervalSec: number
  hosts: string[]
  enabled: boolean
  results: ProbePingResult[]
  createdAt?: number
  updatedAt?: number
}

/** A latency sample: `ms === null` is a loss, not a zero. */
export interface ProbePingSample {
  t: number
  ms: number | null
}

/** A sparkline series for one host card. */
export interface ProbeSpark {
  from: number
  to: number
  cpu: number[]
  mem: number[]
  disk: number[]
  load: number[]
  rx: number[]
  tx: number[]
}

/** One threshold alert (active or resolved). */
export interface ProbeAlert {
  id: string
  hostId: string
  hostName: string
  rule: 'cpu' | 'memory' | 'disk' | 'load' | 'offline'
  severity: 'warning' | 'critical'
  value: number
  peak: number
  threshold: number
  holdSec: number
  unit: string
  message: string
  startedAt: number
  endedAt: number | null
  durationSec?: number
}

/** One host as the panel consumes it. */
export interface ProbeHost {
  id: string
  name: string
  token: string
  tags: string[]
  location: string
  /** ISO 3166-1 alpha-2 detected from the agent's source address, lowercase. */
  regionCode: string
  /** Display label for the region, e.g. `Hong Kong`. */
  regionName: string
  note: string
  enabled: boolean
  createdAt: number
  updatedAt: number
  status: HostStatus
  muted: boolean
  mutedUntil: number
  agentOutdated: boolean
  lastSeen: number
  silenceMs: number
  current: ProbeSample | null
  spark: ProbeSpark | null
  alerts: { active: ProbeAlert[]; recent: ProbeAlert[] }
  historyBytes: number
}

/** One rule's configuration. */
export interface ProbeRule {
  enabled: boolean
  threshold: number
  holdSec: number
}

/** The host half's settings document. */
export interface ProbeSettings {
  rules: {
    cpu: ProbeRule
    memory: ProbeRule
    disk: ProbeRule
    load: ProbeRule
    offline: { enabled: boolean; holdSec: number }
  }
  retentionDays: number
  /** Region provider: '' auto, mmdb offline, ip-api/geojs/ipinfo remote, none. */
  geoProvider: string
  reportIntervalSec: number
  notify: {
    enabled: boolean
    url: string
    onResolve: boolean
  }
}

/** The alert document. */
export interface ProbeAlertSnapshot {
  active: ProbeAlert[]
  recent: ProbeAlert[]
  totalActive: number
  totalRecent: number
}

/** The whole panel payload. */
export interface ProbeSnapshot {
  now: number
  version: string
  hosts: ProbeHost[]
  alerts: ProbeAlertSnapshot
  settings: ProbeSettings
  notify: {
    enabled: boolean
    url: string
    onResolve: boolean
    last: ProbeDelivery | null
  }
  versions: { panel: string; agent: string }
  counts: { total: number; online: number; waiting: number }
}

/** Outcome of one webhook delivery attempt. */
export interface ProbeDelivery {
  ok: boolean
  status?: number
  error?: string
  at: number
  event?: string
}

/** One downsampled history series. */
export interface ProbeHistory {
  hostId: string
  name: string
  range: '1h' | '24h' | '7d'
  from: number
  to: number
  stepMs: number
  points: Array<{ t: number; c: number; m: number; d: number; l: number; r: number; x: number }>
  summary: {
    cpu: { avg: number; max: number }
    mem: { avg: number; max: number }
    disk: { avg: number; max: number }
  }
}

/** The fields a host may be created or patched with. */
export interface ProbeHostInput {
  name?: string
  tags?: string[]
  location?: string
  note?: string
  enabled?: boolean
}

/** Error carrying the route's JSON error message. */
export class ProbeApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ProbeApiError'
  }
}

/** Parse a JSON response or throw a ProbeApiError. */
async function readJson<T>(response: Response): Promise<T> {
  let body: unknown
  try {
    body = await response.json()
  } catch {
    if (response.status === 404) throw new ProbeApiError(tt('error.network'))
    throw new ProbeApiError(`HTTP ${response.status}`)
  }
  if (!response.ok) {
    const message = typeof body === 'object' && body !== null && typeof (body as { error?: unknown }).error === 'string'
      ? (body as { error: string }).error
      : `HTTP ${response.status}`
    throw new ProbeApiError(message)
  }
  return body as T
}

/** One same-origin JSON request. */
async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(BASE + path, {
    credentials: 'same-origin',
    headers: init.body === undefined ? undefined : { 'content-type': 'application/json' },
    ...init,
  })
  return readJson<T>(response)
}

/** The probe panel's API client. */
export class ProbeApi {
  /** Current snapshot: hosts, alerts, settings. */
  /**
   * Ask one host's agent to replace itself with this panel's build.
   *
   * Queues an `agent.switchVersion` event; the agent picks it up on its next
   * report, downloads the script, verifies it and re-execs.
   */
  async upgradeAgent(id: string): Promise<{ queued: boolean; agentVersion: string; currentVersion: string }> {
    return request<{ queued: boolean; agentVersion: string; currentVersion: string }>(
      `/hosts/${encodeURIComponent(id)}/upgrade`,
      { method: 'POST' },
    )
  }

  /** Region provider status and the local database's size and age. */
  async geoStatus(): Promise<{ provider: string; database: { present: boolean; bytes: number; updatedAt: number } }> {
    return request<{ provider: string; database: { present: boolean; bytes: number; updatedAt: number } }>('/geo')
  }

  /** Download the offline GeoIP database and switch to it. */
  async downloadGeoDatabase(): Promise<{ ok: boolean; error?: string }> {
    return request<{ ok: boolean; error?: string }>('/geo/download', { method: 'POST' })
  }

  /** Every latency task with its per-host summary. */
  async listPingTasks(): Promise<ProbePingTask[]> {
    const body = await request<{ tasks: ProbePingTask[] }>('/pings')
    return body.tasks ?? []
  }

  /** Create a latency task. */
  async createPingTask(payload: Record<string, unknown>): Promise<ProbePingTask> {
    const body = await request<{ task: ProbePingTask }>('/pings', { method: 'POST', body: JSON.stringify(payload) })
    return body.task
  }

  /** Patch one latency task. */
  async updatePingTask(id: string, payload: Record<string, unknown>): Promise<ProbePingTask> {
    const body = await request<{ task: ProbePingTask }>(`/pings/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })
    return body.task
  }

  /** Delete one latency task and its samples. */
  async deletePingTask(id: string): Promise<void> {
    await request<{ ok: boolean }>(`/pings/${encodeURIComponent(id)}`, { method: 'DELETE' })
  }

  /** Samples for one task/host pair over a window. */
  async pingSeries(taskId: string, hostId: string, windowMs: number): Promise<ProbePingSample[]> {
    const body = await request<{ series: ProbePingSample[] }>(
      `/pings/${encodeURIComponent(taskId)}/${encodeURIComponent(hostId)}?window=${windowMs}`,
    )
    return body.series ?? []
  }

  async snapshot(): Promise<ProbeSnapshot> {
    return request<ProbeSnapshot>('/snapshot')
  }

  /** Create one host; the response carries its fresh agent token. */
  async createHost(input: ProbeHostInput): Promise<ProbeHost> {
    const body = await request<{ host: ProbeHost }>('/hosts', { method: 'POST', body: JSON.stringify(input) })
    return body.host
  }

  /** Patch one host. */
  async updateHost(id: string, patch: ProbeHostInput): Promise<ProbeHost> {
    const body = await request<{ host: ProbeHost }>(`/hosts/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify(patch) })
    return body.host
  }

  /** Remove one host and its history. */
  async deleteHost(id: string): Promise<void> {
    await request<{ ok: boolean }>(`/hosts/${encodeURIComponent(id)}`, { method: 'DELETE' })
  }

  /** Mint a new agent token for one host. */
  async rotateToken(id: string): Promise<ProbeHost> {
    const body = await request<{ host: ProbeHost }>(`/hosts/${encodeURIComponent(id)}/token`, { method: 'POST' })
    return body.host
  }

  /** One host's trend for 1h / 24h / 7d. */
  async history(id: string, range: '1h' | '24h' | '7d'): Promise<ProbeHistory> {
    return request<ProbeHistory>(`/hosts/${encodeURIComponent(id)}/history?range=${range}`)
  }

  /** Silence a host's alerts for a window (0 unmutes). */
  async setMute(id: string, minutes: number): Promise<ProbeHost> {
    const body = await request<{ host: ProbeHost }>(`/hosts/${encodeURIComponent(id)}/mute`, {
      method: 'POST',
      body: JSON.stringify({ minutes }),
    })
    return body.host
  }

  /** Send a test webhook and return the delivery outcome. */
  async testNotify(): Promise<ProbeDelivery> {
    const body = await request<{ delivery: ProbeDelivery }>('/notify/test', { method: 'POST' })
    return body.delivery
  }

  /** Save a settings patch. */
  async updateSettings(patch: Partial<ProbeSettings>): Promise<ProbeSettings> {
    const body = await request<{ settings: ProbeSettings }>('/settings', { method: 'PATCH', body: JSON.stringify(patch) })
    return body.settings
  }

  /** The alert document. */
  async alerts(): Promise<ProbeAlertSnapshot> {
    return request<ProbeAlertSnapshot>('/alerts')
  }

  /** Drop resolved-alert history. */
  async clearRecentAlerts(): Promise<ProbeAlertSnapshot> {
    return request<ProbeAlertSnapshot>('/alerts/clear', { method: 'POST' })
  }
}
