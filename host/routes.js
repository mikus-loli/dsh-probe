/**
 * HTTP surfaces of the probe.
 *
 * Two families live here and they intentionally have different trust models:
 *
 * - `/api/dsh-probe/*` is the panel's own API. A route registered directly on
 *   the web server bypasses the browser-session gate that owns `/api`, so it
 *   carries the same loopback fence the other local UI plugins use (plus the
 *   deployment's connection-trust bridge, which is what admits a remote
 *   browser authenticated by a remote-access plugin).
 *
 * - `/auth/dsh-probe/*` is the agent plane: the report ingest endpoint and the
 *   agent script. A probe agent on another machine has no browser session, so
 *   this family is reached through the deployment's public origin and is
 *   authenticated per host by the agent token instead. It exposes nothing
 *   except "accept metrics for the host this token belongs to" and the
 *   dependency-free agent source itself.
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { connectionAdmits } from './connection-trust.js'
import { readJsonBody, writeJson } from './http.js'
import { isLoopbackRequest } from './loopback.js'
import { ProbeError } from './service.js'
import { AGENT_VERSION, PANEL_VERSION, SCHEMA_VERSION } from './version.js'

/** Paths this family claims. */
export const PROBE_PATHS = {
  panel: '/api/dsh-probe',
  ingest: '/auth/dsh-probe/ingest',
  /** Country flags, one SVG per ISO 3166-1 alpha-2 code. */
  flags: '/auth/dsh-probe/flags',
  version: '/auth/dsh-probe/version.json',
}

/** Read the bearer token from an Authorization header. */
function bearer(header) {
  if (typeof header !== 'string') return ''
  const match = header.match(/^Bearer\s+(.+)$/i)
  return match === null ? '' : match[1].trim()
}

/** The whole panel API under one prefix route. */
function panelRoute(service, connection) {
  return {
    kind: 'prefix',
    path: PROBE_PATHS.panel,
    handler: async (req, res) => {
      const allowed = isLoopbackRequest(req) || connectionAdmits(connection(), req)
      if (!allowed) {
        writeJson(res, 403, { error: 'forbidden: loopback-only' })
        return
      }
      const url = new URL(req.url ?? '/', 'http://localhost')
      const rest = url.pathname.slice(PROBE_PATHS.panel.length)
      const method = (req.method ?? 'GET').toUpperCase()
      try {
        await dispatch(req, res, service, method, rest, url)
      } catch (error) {
        if (error instanceof ProbeError) {
          writeJson(res, error.status, { error: error.message })
          return
        }
        writeJson(res, 500, { error: error instanceof Error ? error.message : String(error) })
      }
    },
  }
}

/** Route one panel request. */
async function dispatch(req, res, service, method, rest, url) {
  const segments = rest.split('/').filter(segment => segment !== '')

  // GET /snapshot and GET / (the prefix itself)
  if ((rest === '' || rest === '/') && method === 'GET') {
    writeJson(res, 200, service.snapshot())
    return
  }
  if (rest === '/snapshot') {
    if (method !== 'GET') throw new ProbeError('method not allowed', 405)
    writeJson(res, 200, service.snapshot())
    return
  }

  // /alerts
  if (segments[0] === 'alerts') {
    if (segments.length === 1) {
      if (method !== 'GET') throw new ProbeError('method not allowed', 405)
      writeJson(res, 200, service.alertsSnapshot())
      return
    }
    if (segments[1] === 'clear' && segments.length === 2) {
      if (method !== 'POST') throw new ProbeError('method not allowed', 405)
      writeJson(res, 200, service.clearRecentAlerts())
      return
    }
  }

  // /hosts/<id>/upgrade — queue an agent self-replacement
  if (segments[0] === 'hosts' && segments[2] === 'upgrade' && segments.length === 3) {
    if (method !== 'POST') throw new ProbeError('method not allowed', 405)
    writeJson(res, 202, service.upgradeAgent(segments[1]))
    return
  }

  // /pings — latency tasks and their samples
  if (segments[0] === 'pings') {
    if (segments.length === 1) {
      if (method === 'GET') {
        writeJson(res, 200, { tasks: service.pingSnapshot() })
        return
      }
      if (method === 'POST') {
        const body = await readJsonBody(req)
        if (body === null) throw new ProbeError('invalid JSON body')
        writeJson(res, 201, { task: service.createPingTask(body) })
        return
      }
      throw new ProbeError('method not allowed', 405)
    }
    if (segments.length === 2) {
      const id = segments[1]
      if (method === 'PATCH' || method === 'POST') {
        const body = await readJsonBody(req)
        if (body === null) throw new ProbeError('invalid JSON body')
        writeJson(res, 200, { task: service.updatePingTask(id, body) })
        return
      }
      if (method === 'DELETE') {
        service.removePingTask(id)
        writeJson(res, 200, { ok: true })
        return
      }
      throw new ProbeError('method not allowed', 405)
    }
    // /pings/<taskId>/<hostId>?window=3600000 — the chart series
    if (segments.length === 3 && method === 'GET') {
      const windowMs = Number(url.searchParams.get('window') ?? 3600000)
      writeJson(res, 200, {
        series: service.pingSeries(
          segments[1],
          segments[2],
          Number.isFinite(windowMs) && windowMs > 0 ? windowMs : 3600000,
        ),
      })
      return
    }
    throw new ProbeError('not found', 404)
  }

  // /geo — status, and download of the offline database
  if (segments[0] === 'geo') {
    if (segments.length === 1 && method === 'GET') {
      writeJson(res, 200, service.geoStatus())
      return
    }
    if (segments[1] === 'download' && segments.length === 2) {
      if (method !== 'POST') throw new ProbeError('method not allowed', 405)
      writeJson(res, 200, await service.downloadGeoDatabase())
      return
    }
  }

  // /notify/test
  if (segments[0] === 'notify' && segments[1] === 'test' && segments.length === 2) {
    if (method !== 'POST') throw new ProbeError('method not allowed', 405)
    writeJson(res, 200, { delivery: await service.testNotify() })
    return
  }

  // /settings
  if (segments[0] === 'settings' && segments.length === 1) {
    if (method === 'GET') {
      writeJson(res, 200, { settings: service.settings() })
      return
    }
    if (method === 'PATCH' || method === 'POST') {
      const body = await readJsonBody(req)
      if (body === null) throw new ProbeError('invalid JSON body')
      writeJson(res, 200, { settings: service.updateSettings(body) })
      return
    }
    throw new ProbeError('method not allowed', 405)
  }

  // /hosts...
  if (segments[0] === 'hosts') {
    if (segments.length === 1) {
      if (method === 'GET') {
        writeJson(res, 200, { hosts: service.views() })
        return
      }
      if (method === 'POST') {
        const body = await readJsonBody(req)
        if (body === null) throw new ProbeError('invalid JSON body')
        try {
          writeJson(res, 201, { host: service.createHost(body) })
        } catch (error) {
          throw new ProbeError(error instanceof Error ? error.message : String(error))
        }
        return
      }
      throw new ProbeError('method not allowed', 405)
    }
    const id = decodeURIComponent(segments[1])
    if (segments.length === 2) {
      if (method === 'GET') {
        const host = service.store.find(id)
        if (host === undefined) throw new ProbeError('host not found', 404)
        writeJson(res, 200, { host: service.view(host) })
        return
      }
      if (method === 'PATCH' || method === 'POST') {
        const body = await readJsonBody(req)
        if (body === null) throw new ProbeError('invalid JSON body')
        let host
        try {
          host = service.updateHost(id, body)
        } catch (error) {
          throw new ProbeError(error instanceof Error ? error.message : String(error))
        }
        if (host === undefined) throw new ProbeError('host not found', 404)
        writeJson(res, 200, { host })
        return
      }
      if (method === 'DELETE') {
        if (!service.removeHost(id)) throw new ProbeError('host not found', 404)
        writeJson(res, 200, { ok: true })
        return
      }
      throw new ProbeError('method not allowed', 405)
    }
    if (segments[2] === 'history' && segments.length === 3) {
      if (method !== 'GET') throw new ProbeError('method not allowed', 405)
      const range = url.searchParams.get('range') ?? '1h'
      writeJson(res, 200, service.history(id, range))
      return
    }
    if (segments[2] === 'token' && segments.length === 3) {
      if (method !== 'POST') throw new ProbeError('method not allowed', 405)
      const host = service.rotateToken(id)
      if (host === undefined) throw new ProbeError('host not found', 404)
      writeJson(res, 200, { host })
      return
    }
    if (segments[2] === 'mute' && segments.length === 3) {
      if (method !== 'POST') throw new ProbeError('method not allowed', 405)
      const body = (await readJsonBody(req)) ?? {}
      const host = service.setMute(id, Number(body.minutes ?? 60))
      if (host === undefined) throw new ProbeError('host not found', 404)
      writeJson(res, 200, { host })
      return
    }
  }

  throw new ProbeError(`unknown probe endpoint: ${rest}`, 404)
}

/** The agent ingest endpoint (token-authenticated, no browser session). */
function ingestRoute(service) {
  return {
    kind: 'exact',
    path: PROBE_PATHS.ingest,
    handler: async (req, res) => {
      if (req.method !== 'POST') {
        writeJson(res, 405, { error: `method not allowed: ${req.method}` }, { allow: 'POST' })
        return
      }
      const token = String(req.headers['x-probe-token'] ?? '') || bearer(req.headers.authorization)
      const body = await readJsonBody(req, 32 * 1024)
      if (body === null) {
        writeJson(res, 400, { error: 'invalid JSON body' })
        return
      }
      try {
        // Prefer the address the agent reports for itself: one that reports to
        // 127.0.0.1 (or through a LAN proxy) has a loopback source, which
        // carries no geography. The connection address stays as the fallback for
        // agents that do not send one.
        const forwarded = String(req.headers['x-forwarded-for'] ?? '').split(',')[0].trim()
        const reported = typeof body?.ip === 'string' ? body.ip : ''
        const sourceAddress = reported !== '' ? reported : (forwarded || req.socket?.remoteAddress || '')
        const result = service.ingest(token, body, sourceAddress)
        // The response is the downstream channel: queued agent commands ride
        // back on it (Komari's POST fallback), so a probe can be told to run a
        // latency check without any inbound connection.
        writeJson(res, 200, { ok: true, host: result.host, events: result.events ?? [] })
      } catch (error) {
        if (error instanceof ProbeError) {
          writeJson(res, error.status, { error: error.message })
          return
        }
        writeJson(res, 500, { error: error instanceof Error ? error.message : String(error) })
      }
    },
  }
}

/** The public version manifest: what panel and agents a client can expect. */
function versionRoute() {
  return {
    kind: 'exact',
    path: PROBE_PATHS.version,
    handler: (req, res) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        writeJson(res, 405, { error: 'method not allowed' }, { allow: 'GET, HEAD' })
        return
      }
      writeJson(res, 200, {
        panel: PANEL_VERSION,
        agent: AGENT_VERSION,
        schema: SCHEMA_VERSION,
        // The agent is a published binary now: release assets live on GitHub
        // and are installed by `install.sh`, so the panel no longer serves one.
        agentDownload: 'https://github.com/mikus-loli/dsh-probe/releases/latest',
      })
    },
  }
}

/**
 * Serve one country flag, ported from the Mikus theme's `assets/flags/*.svg`.
 *
 * The flag is a real image rather than an emoji: an emoji renders as its two
 * letters whenever the host has no emoji font, which is exactly how "🇭🇰" ends
 * up displayed as "HK". Serving the SVG the upstream theme ships keeps the crest
 * a flag everywhere. Only two-letter codes are addressable, so the parameter
 * cannot walk out of the directory.
 * @param flagDir - absolute path of the packaged flag directory.
 */
function flagRoute(flagDir) {
  const cache = new Map()
  return {
    kind: 'prefix',
    path: PROBE_PATHS.flags,
    handler: (req, res) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        writeJson(res, 405, { error: 'method not allowed' }, { allow: 'GET, HEAD' })
        return
      }
      const url = new URL(req.url ?? '/', 'http://localhost')
      const rest = url.pathname.slice(PROBE_PATHS.flags.length)
      const code = rest.replace(/^\//, '').replace(/\.svg$/i, '').toLowerCase()
      if (!/^[a-z]{2}$/.test(code)) {
        writeJson(res, 404, { error: 'unknown flag' })
        return
      }
      let body = cache.get(code)
      if (body === undefined) {
        try {
          body = readFileSync(join(flagDir, `${code}.svg`))
        } catch {
          writeJson(res, 404, { error: 'unknown flag' })
          return
        }
        cache.set(code, body)
      }
      res.writeHead(200, {
        'content-type': 'image/svg+xml',
        'cache-control': 'public, max-age=86400',
        'x-content-type-options': 'nosniff',
      })
      res.end(req.method === 'HEAD' ? undefined : body)
    },
  }
}

/** One downloadable agent source (public: it carries no secret). */
function sourceRoute(path, agentPath, contentType) {
  let cached
  return {
    kind: 'exact',
    path,
    handler: (req, res) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        writeJson(res, 405, { error: 'method not allowed' }, { allow: 'GET, HEAD' })
        return
      }
      if (cached === undefined) {
        try {
          cached = readFileSync(agentPath, 'utf8')
        } catch {
          writeJson(res, 500, { error: 'agent source is missing from the plugin package' })
          return
        }
      }
      res.writeHead(200, {
        'content-type': contentType,
        'cache-control': 'no-cache',
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'no-referrer',
      })
      res.end(req.method === 'HEAD' ? undefined : cached)
    },
  }
}

/**
 * Build the probe's route table.
 * @param options.service - probe operations.
 * @param options.connection - reader for the deployment's connection trust.
 * @param options.flagDir - absolute path of the packaged flag directory.
 */
export function makeRoutes(options) {
  return [
    panelRoute(options.service, options.connection),
    ingestRoute(options.service),
    flagRoute(options.flagDir),
    versionRoute(),
  ]
}
