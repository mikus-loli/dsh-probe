/**
 * Shared test fixtures: a throwaway DSH home, a wired probe service, a route
 * table and a tiny node handler invoker.
 *
 * Every test file gets its own temp home through {@link tempHome}; the probe
 * store resolves $DSH_HOME when it is constructed, so the helper must run
 * before `makeService` / `makeStore`.
 */
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs'
import { Readable } from 'node:stream'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { AlertEngine } from '../host/alerts.js'
import { MetricsHub } from '../host/metrics.js'
import { WebhookNotifier } from '../host/notifier.js'
import { makeRoutes } from '../host/routes.js'
import { ProbeService } from '../host/service.js'
import { ProbeStore } from '../host/store.js'
import { AGENT_VERSION, PANEL_VERSION } from '../host/version.js'

/** Repository root (this file lives in test/). */
export const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))

/** Points $DSH_HOME at a fresh temp directory and returns it. */
export function tempHome(prefix = 'dsh-probe-test-') {
  const home = mkdtempSync(join(tmpdir(), prefix))
  process.env.DSH_HOME = home
  mkdirSync(join(home, 'dsh-probe', 'history'), { recursive: true, mode: 0o700 })
  return home
}

/** Absolute path of the probe data directory under the current $DSH_HOME. */
export function dataDir() {
  return join(process.env.DSH_HOME, 'dsh-probe')
}

/** Write one JSON document into the probe data directory. */
export function writeData(name, value) {
  writeFileSync(join(dataDir(), name), JSON.stringify(value, null, 2) + '\n', { mode: 0o600 })
}

/** Build a store + service over the current $DSH_HOME. */
export function makeService() {
  const store = new ProbeStore()
  const settings = store.getSettings()
  const metrics = new MetricsHub({ root: store.root, retentionDays: settings.retentionDays })
  const notifier = new WebhookNotifier({ store })
  const alerts = new AlertEngine({
    store,
    onAlert: (phase, alert) => notifier.notify(phase, alert),
  })
  const service = new ProbeService({
    store,
    metrics,
    alerts,
    notifier,
    version: PANEL_VERSION,
    agentVersion: AGENT_VERSION,
  })
  return { store, metrics, alerts, notifier, service }
}

/** Build the route table for a service. */
export function makeRouteTable(service) {
  return makeRoutes({
    service,
    connection: () => undefined,
    agentPath: join(ROOT, 'agent', 'agent.mjs'),
    shellAgentPath: join(ROOT, 'agent', 'agent.sh'),
  })
}

/**
 * Invoke one node handler.
 * @param handler - the route handler.
 * @param options.method/url/body/headers/remote/host.
 * @returns `{status, headers, text, json}`.
 */
export async function call(handler, options = {}) {
  const { method = 'GET', url = '/', body, headers = {}, remote = '127.0.0.1', host = '127.0.0.1:3080' } = options
  const request = Readable.from(body === undefined ? [] : [Buffer.from(JSON.stringify(body))])
  request.method = method
  request.url = url
  request.headers = { host, ...headers }
  request.socket = { remoteAddress: remote }
  const chunks = []
  const response = {
    statusCode: 0,
    headers: {},
    writeHead(code, header = {}) {
      this.statusCode = code
      this.headers = header
    },
    end(payload) {
      if (payload !== undefined) chunks.push(Buffer.from(payload))
    },
  }
  await handler(request, response)
  const text = chunks.length === 0 ? '' : Buffer.concat(chunks).toString('utf8')
  let json
  try {
    json = text === '' ? undefined : JSON.parse(text)
  } catch {
    json = undefined
  }
  return { status: response.statusCode, headers: response.headers, text, json }
}

/** One normalized-looking sample with every field the store expects. */
export function sample(overrides = {}) {
  return {
    t: Date.now(),
    cpu: 12,
    memTotal: 8 * 1024 ** 3,
    memUsed: 3 * 1024 ** 3,
    memPct: 37.5,
    swapTotal: 0,
    swapUsed: 0,
    swapPct: 0,
    diskMount: '/',
    diskTotal: 100 * 1024 ** 3,
    diskUsed: 40 * 1024 ** 3,
    diskPct: 40,
    load1: 0.4,
    load5: 0.3,
    load15: 0.2,
    rxRate: 1024,
    txRate: 512,
    uptime: 3600,
    hostname: 'host1',
    os: 'Linux',
    kernel: '6.8',
    arch: 'x64',
    cpuModel: 'Test CPU',
    cores: 2,
    agentVersion: AGENT_VERSION,
    ...overrides,
  }
}

/** Start a local webhook receiver; resolves `{url, received, close}`. */
export async function hookServer() {
  const { createServer } = await import('node:http')
  const received = []
  const server = createServer((request, response) => {
    let body = ''
    request.on('data', chunk => { body += chunk })
    request.on('end', () => {
      try { received.push(JSON.parse(body)) } catch { received.push({ raw: body }) }
      response.writeHead(202, { 'content-type': 'text/plain' }).end('ok')
    })
  })
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  const { port } = server.address()
  return {
    url: `http://127.0.0.1:${port}/hook`,
    received,
    close: () => new Promise(resolve => server.close(resolve)),
  }
}

/** Wait until `predicate()` is true, or fail after `timeoutMs`. */
export async function waitFor(predicate, timeoutMs = 2000) {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    if (predicate()) return
    await new Promise(resolve => setTimeout(resolve, 20))
  }
  throw new Error('condition not met in time')
}
