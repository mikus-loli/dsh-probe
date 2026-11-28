/**
 * Region detection for monitored hosts, ported from Komari's `utils/geoip`.
 *
 * A host's location is derived from the address its report arrived from, never
 * typed by the operator. Upstream supports four providers and falls back to an
 * empty one when none can start; the same shape is kept here because a single
 * third-party endpoint is exactly the thing you cannot depend on:
 *
 * - `mmdb`    — reads a local GeoLite2 country database, no network per lookup.
 *               This is the resilient default: after one download it works
 *               offline and survives any API outage.
 * - `ip-api`  — ip-api.com, key-less, 45 requests/minute.
 * - `geojs`   — geojs.io, key-less.
 * - `ipinfo`  — ipinfo.io, key-less with a low anonymous quota.
 * - `none`    — never resolves; hosts simply show the placeholder crest.
 *
 * Results are cached per (provider, address) like upstream, so an agent
 * reporting every 3 s costs one lookup per address per cache lifetime.
 */

import { existsSync, mkdirSync, readFileSync, statSync, createWriteStream } from 'node:fs'
import { dirname, join } from 'node:path'
import { pipeline } from 'node:stream/promises'
import maxmind from 'maxmind'
import { Readable } from 'node:stream'

/** Default provider: the offline database, so nothing depends on an API. */
export const DEFAULT_PROVIDER = 'mmdb'

/** Where the GeoLite2 country database lives, mirroring upstream's `./data`. */
export const GEOIP_FILE = 'GeoLite2-Country.mmdb'

/**
 * Database mirror (the same URL Komari uses). Loyalsoldier republishes MaxMind's
 * GeoLite2-Country daily, which keeps the probe free of a MaxMind licence key.
 */
export const GEOIP_URL = 'https://raw.githubusercontent.com/Loyalsoldier/geoip/release/GeoLite2-Country.mmdb'

/** Cache lifetime for one address; upstream uses the cache default (5 min). */
const CACHE_TTL_MS = 5 * 60 * 1000

/** Per-(provider, address) results, so a 3 s report cadence costs one lookup. */
const cache = new Map()

/** True while a database download is running, so concurrent reports share it. */
let downloading = null

/** Addresses with a remote lookup in flight. */
const pending = new Set()

/**
 * @typedef {object} RegionInfo
 * @property {string} code - ISO 3166-1 alpha-2, lowercase.
 * @property {string} name - Display label.
 */

/** Read one /etc/os-release-style key from a MaxMind record. */
function text(value) {
  return typeof value === 'string' ? value : ''
}

/* -------------------------------------------------------------------------- */
/* Providers                                                                  */
/* -------------------------------------------------------------------------- */

/** Remote providers: one fetch, one JSON shape each. */
const REMOTE = {
  'ip-api': {
    url: ip => `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country,countryCode`,
    parse: body => body?.status === 'success' && typeof body.countryCode === 'string'
      ? { code: body.countryCode.toLowerCase(), name: String(body.country ?? body.countryCode) }
      : undefined,
  },
  geojs: {
    url: ip => `https://get.geojs.io/v1/ip/country/${encodeURIComponent(ip)}.json`,
    parse: body => typeof body?.country_code === 'string'
      ? { code: body.country_code.toLowerCase(), name: String(body.country ?? body.country_code) }
      : undefined,
  },
  ipinfo: {
    url: ip => `https://ipinfo.io/${encodeURIComponent(ip)}/json`,
    parse: body => typeof body?.country === 'string'
      ? { code: body.country.toLowerCase(), name: String(body.country) }
      : undefined,
  },
}

/**
 * Resolve the provider to use: an explicit setting wins, otherwise the offline
 * database when present, otherwise the first configured remote fallback.
 * @param {string} configured - provider name from settings.
 * @param {string} dataDir - probe data directory (holds the mmdb file).
 * @returns {{name: string, lookup: (ip: string) => Promise<RegionInfo|null>}}
 */
export async function createProvider(configured, dataDir) {
  const order = configured === 'none'
    ? []
    : configured === '' || configured === undefined
      ? ['mmdb', 'ip-api', 'geojs', 'ipinfo']
      : [configured, ...['mmdb', 'ip-api', 'geojs', 'ipinfo'].filter(name => name !== configured)]

  for (const name of order) {
    if (name === 'mmdb') {
      const reader = await loadMmdb(dataDir)
      if (reader !== null) {
        return { name: 'mmdb', lookup: ip => Promise.resolve(reader.lookup(ip) ?? null) }
      }
      continue
    }
    const remote = REMOTE[name]
    if (remote === undefined) continue
    return { name, lookup: ip => lookupRemote(name, remote, ip) }
  }
  return { name: 'none', lookup: () => Promise.resolve(null) }
}

/** One reader per database path, opened once. */
const readers = new Map()

/** Open (or reuse) the database reader for one file. */
async function openCached(file) {
  const cached = readers.get(file)
  if (cached !== undefined) return cached
  const opening = maxmind.open(file)
  readers.set(file, opening)
  try {
    return await opening
  } catch (error) {
    readers.delete(file)
    throw error
  }
}

/**
 * Open the local database with the official `maxmind` reader.
 *
 * Hand-rolling the mmdb binary format was a dead end: the search tree holds
 * pointers into a shared data section and the country record sits behind a
 * second pointer, which is exactly what the maintained library already solves.
 * Reading stays fully offline — no lookup ever leaves the machine.
 * @param {string} dataDir - probe data directory holding the .mmdb file.
 * @returns {object|null} an object with a `lookup(ip)` method, or null.
 */
async function loadMmdb(dataDir) {
  const file = join(dataDir, GEOIP_FILE)
  if (!existsSync(file)) return null
  try {
    // maxmind v5 dropped the synchronous opener; the reader is cached here so
    // the async open happens once per process, not per report.
    const reader = await openCached(file)
    return {
      lookup(ip) {
        try {
          const record = reader.get(ip)
          const country = record?.country
          const iso = typeof country?.iso_code === 'string' ? country.iso_code.toLowerCase() : ''
          if (iso === '') return null
          const names = country?.names
          const name = typeof names?.en === 'string' && names.en !== '' ? names.en : iso.toUpperCase()
          return { code: iso, name }
        } catch {
          return null
        }
      },
    }
  } catch {
    return null
  }
}

/**
 * Download the GeoLite2 database once, so region lookups stop needing a network.
 * @param {string} dataDir - probe data directory.
 * @returns {Promise<{ok: boolean, error?: string}>}
 */
export async function downloadDatabase(dataDir) {
  if (downloading !== null) return downloading
  downloading = (async () => {
    const file = join(dataDir, GEOIP_FILE)
    try {
      mkdirSync(dirname(file), { recursive: true })
      const response = await fetch(GEOIP_URL, { redirect: 'follow' })
      if (!response.ok || response.body === null) {
        return { ok: false, error: `HTTP ${response.status}` }
      }
      const temp = `${file}.part`
      await pipeline(Readable.fromWeb(response.body), createWriteStream(temp))
      // Rename only after a complete download, so a torn file is never read.
      const { renameSync } = await import('node:fs')
      renameSync(temp, file)
      cache.clear()
      readers.clear()
      return { ok: true }
    } catch (error) {
      return { ok: false, error: error instanceof Error ? error.message : String(error) }
    } finally {
      downloading = null
    }
  })()
  return downloading
}

/** Whether the local database is present, plus its size and age. */
export function databaseStatus(dataDir) {
  const file = join(dataDir, GEOIP_FILE)
  if (!existsSync(file)) return { present: false, bytes: 0, updatedAt: 0 }
  try {
    const stat = statSync(file)
    return { present: true, bytes: stat.size, updatedAt: stat.mtimeMs }
  } catch {
    return { present: false, bytes: 0, updatedAt: 0 }
  }
}

/** One remote lookup with a short timeout. */
async function lookupRemote(name, provider, ip) {
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => { controller.abort() }, 4000)
    try {
      const response = await fetch(provider.url(ip), { signal: controller.signal })
      if (!response.ok) return null
      return provider.parse(await response.json()) ?? null
    } finally {
      clearTimeout(timer)
    }
  } catch {
    return null
  }
}

/* -------------------------------------------------------------------------- */
/* Address classification + public API                                        */
/* -------------------------------------------------------------------------- */

/** Private, loopback, link-local and CG-NAT ranges carry no location. */
export function isPublicAddress(address) {
  const value = String(address ?? '').trim().toLowerCase()
  if (value === '' || value === '::1' || value === '::') return false
  const bare = value.replace(/%.*$/, '').replace(/^\[|\]$/g, '')
  const mapped = /^::ffff:(.+)$/.exec(bare)
  const v4 = mapped === null ? bare : (mapped[1] ?? '')
  if (/^\d+\.\d+\.\d+\.\d+$/.test(v4)) {
    const [a = 0, b = 0] = v4.split('.').map(Number)
    if (a === 10 || a === 127 || a === 0) return false
    if (a === 169 && b === 254) return false
    if (a === 172 && b >= 16 && b <= 31) return false
    if (a === 192 && b === 168) return false
    if (a === 100 && b >= 64 && b <= 127) return false
    return true
  }
  if (bare.startsWith('fc') || bare.startsWith('fd') || bare.startsWith('fe80')) return false
  return bare !== ''
}

/**
 * Cached region for one address, mirroring upstream's `provider:ip` cache key.
 * @returns the region, `null` when a lookup already failed, or `undefined`
 *   when nothing has been asked yet.
 */
export function cachedRegion(providerName, address) {
  const key = `${providerName}:${address}`
  const hit = cache.get(key)
  if (hit === undefined) return undefined
  if (Date.now() - hit.at > CACHE_TTL_MS) {
    cache.delete(key)
    return undefined
  }
  return hit.region
}

/**
 * Resolve one address through the active provider, caching the answer.
 * @param {{name: string, lookup: Function}} provider
 * @param {string} address
 * @returns {Promise<RegionInfo|null>}
 */
export async function lookupRegion(provider, address) {
  const hit = cachedRegion(provider.name, address)
  if (hit !== undefined) return hit
  const region = await provider.lookup(address)
  cache.set(`${provider.name}:${address}`, { at: Date.now(), region })
  return region
}

/** In-flight guard shared with the service. */
export function markPending(address) {
  if (pending.has(address)) return false
  pending.add(address)
  return true
}

/** Clear the in-flight guard for one address. */
export function clearPending(address) {
  pending.delete(address)
}

/** Drop every cached lookup (used after a database download). */
export function clearCache() {
  cache.clear()
}
