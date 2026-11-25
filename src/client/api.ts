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
  uptime: number
  hostname: string
  os: string
  kernel: string
  arch: string
  cpuModel: string
  cores: number
  agentVersion: string
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
