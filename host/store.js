/**
 * Probe host inventory + user settings, persisted under $DSH_HOME/dsh-probe.
 *
 * Everything this plugin owns lives in one private directory: the host list
 * (each host carries the agent token the ingest route authenticates), the
 * alert/settings document, and the per-host history files. The directory is
 * created 0700 and every file is written 0600 through a temp file + rename, so
 * a crash never leaves a half-written JSON document behind.
 *
 * Tokens are capabilities, not identities: they are handed out to a server's
 * agent and revocable from the panel without touching any other host.
 */

import { randomBytes, timingSafeEqual } from 'node:crypto'
import { chmodSync, copyFileSync, existsSync, mkdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { dshHome } from './dsh-home.js'
import { SCHEMA_VERSION } from './version.js'

/** Defaults for every tunable the panel edits. */
export const DEFAULT_SETTINGS = {
  rules: {
    cpu: { enabled: true, threshold: 90, holdSec: 120 },
    memory: { enabled: true, threshold: 90, holdSec: 120 },
    disk: { enabled: true, threshold: 90, holdSec: 300 },
    load: { enabled: true, threshold: 2, holdSec: 120 },
    offline: { enabled: true, holdSec: 60 },
  },
  /** Days of one-minute history kept per host. */
  retentionDays: 7,
  /**
   * Region lookup provider. `mmdb` reads the offline GeoLite2 database;
   * `ip-api` / `geojs` / `ipinfo` fall back to a network service. Empty means
   * "choose automatically" (offline database when downloaded, else a remote).
   */
  geoProvider: '',
  /** Reporting cadence written into the install commands. */
  reportIntervalSec: 3,
  /** Optional webhook that receives alert open/close events. */
  notify: {
    enabled: false,
    url: '',
    onResolve: true,
  },
}

/** Fields a rule object may carry. */
const RULE_KEYS = ['cpu', 'memory', 'disk', 'load', 'offline']

/** Read one JSON document, or the fallback when it is missing or malformed. */
function readJson(path, fallback) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    return fallback
  }
}

/** Keep one timestamped copy of a file before it is migrated in place. */
function backupFile(path) {
  try {
    if (!existsSync(path)) return
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    const target = `${path}.bak-${stamp}`
    copyFileSync(path, target)
    chmodSync(target, 0o600)
  } catch {
    // A backup failure must not block the migration itself; the schema bump is
    // still safer than refusing to start.
  }
}

/** Write one JSON document atomically with owner-only permissions. */
function writeJson(path, value) {
  const tmp = `${path}.${process.pid}.tmp`
  writeFileSync(tmp, JSON.stringify(value, null, 2) + '\n', { mode: 0o600 })
  try { chmodSync(tmp, 0o600) } catch { /* best effort */ }
  renameSync(tmp, path)
}

/** Normalize the optional webhook notification settings over a previous value. */
function normalizeNotify(raw, fallback) {
  const next = { ...fallback }
  if (raw === null || typeof raw !== 'object') return next
  if (typeof raw.enabled === 'boolean') next.enabled = raw.enabled
  if (typeof raw.url === 'string') next.url = raw.url.trim().slice(0, 500)
  if (typeof raw.onResolve === 'boolean') next.onResolve = raw.onResolve
  return next
}

/** Clamp a finite number into [min, max]. */
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

/** Trim a free-form string and bound its length. */
function text(value, max) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

/** One random identifier. */
export function newId() {
  return randomBytes(6).toString('hex')
}

/** One 48-hex-character agent token. */
export function newToken() {
  return randomBytes(24).toString('hex')
}

/** Constant-time string comparison (lengths differ → false). */
export function sameSecret(a, b) {
  const left = Buffer.from(String(a))
  const right = Buffer.from(String(b))
  if (left.length !== right.length) return false
  return timingSafeEqual(left, right)
}

/**
 * The probe's persisted state.
 */
export class ProbeStore {
  /**
   * @param options.root - data directory (defaults to $DSH_HOME/dsh-probe).
   */
  constructor(options = {}) {
    this.root = options.root ?? join(dshHome(), 'dsh-probe')
    this.hostsFile = join(this.root, 'hosts.json')
    this.settingsFile = join(this.root, 'settings.json')
    this.alertsFile = join(this.root, 'alerts.json')
    this.historyDir = join(this.root, 'history')
    mkdirSync(this.root, { recursive: true, mode: 0o700 })
    mkdirSync(this.historyDir, { recursive: true, mode: 0o700 })
    try { chmodSync(this.root, 0o700) } catch { /* best effort */ }
    try { chmodSync(this.historyDir, 0o700) } catch { /* best effort */ }
    const document = readJson(this.hostsFile, { version: SCHEMA_VERSION, hosts: [] })
    const hostsVersion = Number.isFinite(document?.version) ? document.version : 1
    // A document written by a newer panel is read-only here: upgrading the
    // panel is the supported direction, downgrading is not.
    this.foreignSchema = hostsVersion > SCHEMA_VERSION
    this.hosts = Array.isArray(document?.hosts) ? document.hosts.filter(host => host && typeof host.id === 'string') : []
    // A host written by a newer version may lack a token; mint one so the row
    // stays usable instead of failing every ingest.
    for (const host of this.hosts) {
      if (typeof host.token !== 'string' || host.token.length < 16) host.token = newToken()
      if (!Array.isArray(host.tags)) host.tags = []
      host.enabled = host.enabled !== false
      if (!Number.isFinite(host.mutedUntil)) host.mutedUntil = 0
      if (typeof host.regionCode !== 'string') host.regionCode = ''
      if (typeof host.regionName !== 'string') host.regionName = ''
    }
    if (!this.foreignSchema && existsSync(this.hostsFile) && hostsVersion < SCHEMA_VERSION) {
      backupFile(this.hostsFile)
      writeJson(this.hostsFile, { version: SCHEMA_VERSION, hosts: this.hosts })
    }
    this.settings = this.#loadSettings()
  }

  /** Normalize the stored settings over the defaults. */
  #loadSettings() {
    const raw = readJson(this.settingsFile, null)
    this.foreignSettings = false
    const settingsVersion = raw === null ? SCHEMA_VERSION : (Number.isFinite(raw?.schemaVersion) ? raw.schemaVersion : 1)
    if (raw !== null && settingsVersion > SCHEMA_VERSION) {
      this.foreignSettings = true
      // Read what we understand, but never rewrite a newer document.
    }
    const merged = structuredClone(DEFAULT_SETTINGS)
    if (raw !== null && typeof raw === 'object') {
      if (Number.isFinite(raw.retentionDays)) merged.retentionDays = clamp(Math.round(raw.retentionDays), 1, 30)
      if (typeof raw.geoProvider === 'string' && ['', 'mmdb', 'ip-api', 'geojs', 'ipinfo', 'none'].includes(raw.geoProvider)) {
        merged.geoProvider = raw.geoProvider
      }
      if (Number.isFinite(raw.reportIntervalSec)) merged.reportIntervalSec = clamp(Math.round(raw.reportIntervalSec), 1, 60)
      for (const key of RULE_KEYS) {
        const rule = raw?.rules?.[key]
        if (rule === null || typeof rule !== 'object') continue
        if (typeof rule.enabled === 'boolean') merged.rules[key].enabled = rule.enabled
        if (Number.isFinite(rule.threshold)) merged.rules[key].threshold = clamp(rule.threshold, 1, key === 'load' ? 64 : 100)
        if (Number.isFinite(rule.holdSec)) merged.rules[key].holdSec = clamp(Math.round(rule.holdSec), 0, 3600)
      }
      merged.notify = normalizeNotify(raw.notify, merged.notify)
    }
    if (raw !== null && !this.foreignSettings && settingsVersion < SCHEMA_VERSION) {
      backupFile(this.settingsFile)
      writeJson(this.settingsFile, { ...merged, schemaVersion: SCHEMA_VERSION })
    }
    return merged
  }

  /** The current settings document (a copy). */
  getSettings() {
    return structuredClone(this.settings)
  }

  /**
   * Apply a partial settings document and persist it.
   * @param patch - `{ rules?, retentionDays?, reportIntervalSec? }`.
   * @returns the saved settings.
   */
  updateSettings(patch) {
    const next = structuredClone(this.settings)
    if (patch !== null && typeof patch === 'object') {
      if (Number.isFinite(patch.retentionDays)) next.retentionDays = clamp(Math.round(patch.retentionDays), 1, 30)
      if (Number.isFinite(patch.reportIntervalSec)) next.reportIntervalSec = clamp(Math.round(patch.reportIntervalSec), 1, 60)
      if (typeof patch.geoProvider === 'string' && ['', 'mmdb', 'ip-api', 'geojs', 'ipinfo', 'none'].includes(patch.geoProvider)) {
        next.geoProvider = patch.geoProvider
      }
      if (patch.rules !== null && typeof patch.rules === 'object') {
        for (const key of RULE_KEYS) {
          const rule = patch.rules[key]
          if (rule === null || typeof rule !== 'object') continue
          if (typeof rule.enabled === 'boolean') next.rules[key].enabled = rule.enabled
          if (Number.isFinite(rule.threshold)) next.rules[key].threshold = clamp(rule.threshold, 1, key === 'load' ? 64 : 100)
          if (Number.isFinite(rule.holdSec)) next.rules[key].holdSec = clamp(Math.round(rule.holdSec), 0, 3600)
        }
      }
      if (patch.notify !== null && typeof patch.notify === 'object') {
        next.notify = normalizeNotify(patch.notify, next.notify)
      }
    }
    if (this.foreignSettings) throw new Error('settings were written by a newer dsh-probe; upgrade the panel instead')
    this.settings = next
    writeJson(this.settingsFile, { ...this.settings, schemaVersion: SCHEMA_VERSION })
    return this.getSettings()
  }

  /** Persist the host list. */
  #saveHosts() {
    if (this.foreignSchema) throw new Error('host data was written by a newer dsh-probe; upgrade the panel instead')
    writeJson(this.hostsFile, { version: SCHEMA_VERSION, hosts: this.hosts })
  }

  /** Every host, in creation order. */
  list() {
    return this.hosts.map(host => ({ ...host, tags: [...host.tags] }))
  }

  /** One host by id, or undefined. */
  find(id) {
    const host = this.hosts.find(candidate => candidate.id === id)
    return host === undefined ? undefined : { ...host, tags: [...host.tags] }
  }

  /** The host owning an agent token, or undefined. */
  findByToken(token) {
    if (typeof token !== 'string' || token.length === 0) return undefined
    const host = this.hosts.find(candidate => sameSecret(candidate.token, token))
    return host === undefined ? undefined : { ...host, tags: [...host.tags] }
  }

  /**
   * Create one host.
   * @returns the stored host (including its fresh token).
   * @throws when the name is empty or too long.
   */
  create(input = {}) {
    const name = text(input.name, 60)
    if (name === '') throw new Error('host name is required')
    if (this.hosts.some(host => host.name === name)) throw new Error(`host name already in use: ${name}`)
    const now = Date.now()
    const host = {
      id: newId(),
      name,
      token: newToken(),
      tags: Array.isArray(input.tags) ? input.tags.map(tag => text(tag, 24)).filter(tag => tag !== '').slice(0, 8) : [],
      location: text(input.location, 60),
      note: text(input.note, 200),
      enabled: input.enabled !== false,
      mutedUntil: 0,
      createdAt: now,
      updatedAt: now,
    }
    this.hosts.push(host)
    this.#saveHosts()
    return { ...host }
  }

  /** Latency tasks, read from disk on first use. */
  getPingTasks() {
    if (this.pingTasks !== undefined) return this.pingTasks
    const file = join(this.root, 'pings.json')
    const document = readJson(file, { version: SCHEMA_VERSION, tasks: [] })
    const tasks = Array.isArray(document?.tasks) ? document.tasks : []
    this.pingTasks = tasks.filter(task => task !== null && typeof task === 'object' && typeof task.id === 'string')
    return this.pingTasks
  }

  /** Persist the latency task list. */
  savePingTasks(tasks) {
    if (this.foreignSchema) return
    this.pingTasks = tasks
    writeJson(join(this.root, 'pings.json'), { version: SCHEMA_VERSION, tasks })
  }

  /**
   * Store the auto-detected region on a host.
   *
   * Separate from `update` because the ingest path writes it, not the operator:
   * a manual `location` note stays intact, and this only records what the source
   * address lookup concluded.
   * @param {string} id - host id.
   * @param {{code: string, name: string}} region - resolved region.
   * @returns {object|undefined} the updated host, or undefined when unknown.
   */
  setRegion(id, region) {
    const host = this.hosts.find(candidate => candidate.id === id)
    if (host === undefined || this.foreignSchema) return undefined
    const code = String(region?.code ?? '').toLowerCase().slice(0, 2)
    const name = String(region?.name ?? '').slice(0, 60)
    if (code === '' || (host.regionCode === code && host.regionName === name)) return host
    host.regionCode = code
    host.regionName = name
    host.updatedAt = Date.now()
    this.#saveHosts()
    return host
  }

  /**
   * Patch one host (name / tags / location / note / enabled).
   * @returns the updated host, or undefined when the id is unknown.
   */
  update(id, patch = {}) {
    const host = this.hosts.find(candidate => candidate.id === id)
    if (host === undefined) return undefined
    if (patch.name !== undefined) {
      const name = text(patch.name, 60)
      if (name === '') throw new Error('host name is required')
      if (this.hosts.some(candidate => candidate.id !== id && candidate.name === name)) throw new Error(`host name already in use: ${name}`)
      host.name = name
    }
    if (patch.tags !== undefined) {
      host.tags = Array.isArray(patch.tags) ? patch.tags.map(tag => text(tag, 24)).filter(tag => tag !== '').slice(0, 8) : []
    }
    if (patch.location !== undefined) host.location = text(patch.location, 60)
    if (patch.note !== undefined) host.note = text(patch.note, 200)
    if (patch.enabled !== undefined) host.enabled = patch.enabled !== false
    host.updatedAt = Date.now()
    this.#saveHosts()
    return { ...host, tags: [...host.tags] }
  }

  /** Remove one host and its history file. */
  remove(id) {
    const index = this.hosts.findIndex(candidate => candidate.id === id)
    if (index === -1) return false
    this.hosts.splice(index, 1)
    this.#saveHosts()
    const file = join(this.historyDir, `${id}.jsonl`)
    try { if (existsSync(file)) unlinkSync(file) } catch { /* best effort */ }
    return true
  }

  /**
   * Silence a host's alerts for a window (0 clears the mute).
   * @param id - host id.
   * @param minutes - minutes from now, or 0 to unmute.
   * @returns the updated host, or undefined when the id is unknown.
   */
  setMute(id, minutes) {
    const host = this.hosts.find(candidate => candidate.id === id)
    if (host === undefined) return undefined
    const window = Number.isFinite(minutes) ? clamp(Math.round(minutes), 0, 10080) : 0
    host.mutedUntil = window > 0 ? Date.now() + window * 60 * 1000 : 0
    host.updatedAt = Date.now()
    this.#saveHosts()
    return { ...host, tags: [...host.tags] }
  }

  /** Rotate a host's agent token; the previous token stops working at once. */
  rotateToken(id) {
    const host = this.hosts.find(candidate => candidate.id === id)
    if (host === undefined) return undefined
    host.token = newToken()
    host.updatedAt = Date.now()
    this.#saveHosts()
    return { ...host, tags: [...host.tags] }
  }

  /** Load the persisted alert document. */
  loadAlerts() {
    const raw = readJson(this.alertsFile, null)
    return {
      active: Array.isArray(raw?.active) ? raw.active : [],
      recent: Array.isArray(raw?.recent) ? raw.recent : [],
    }
  }

  /** Persist the alert document. */
  saveAlerts(document) {
    writeJson(this.alertsFile, { active: document.active, recent: document.recent.slice(0, 200) })
  }
}
