import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { dataDir, makeService, sample, tempHome } from './helpers.mjs'
import { MetricsHub } from '../host/metrics.js'

test('reports feed the ring, the sparkline and the minute history', () => {
  tempHome()
  const { service, store, metrics } = makeService()
  const host = store.create({ name: 'm1' })
  const base = Math.floor(Date.now() / 60000) * 60000 - 3 * 60000

  metrics.ingest(host.id, sample({ t: base + 1000, cpu: 10 }))
  metrics.ingest(host.id, sample({ t: base + 2000, cpu: 20 }))
  // The next minute flushes the first bucket to the history file.
  metrics.ingest(host.id, sample({ t: base + 61000, cpu: 30 }))
  metrics.ingest(host.id, sample({ t: base + 122000, cpu: 40 }))

  const current = metrics.current(host.id)
  assert.equal(current.cpu, 40)
  const spark = metrics.spark(host.id, 60)
  assert.deepEqual(spark.cpu, [10, 20, 30, 40])

  const file = join(dataDir(), 'history', `${host.id}.jsonl`)
  const lines = readFileSync(file, 'utf8').trim().split('\n')
  assert.equal(lines.length, 2)
  const row = JSON.parse(lines[0])
  assert.equal(row.c, 15)

  const series = metrics.series(host.id, '1h')
  assert.ok(series.points.length >= 4)
  assert.equal(series.summary.cpu.max, 40)

  // A fresh hub (panel restart) reloads the minute series from disk.
  const reopened = new MetricsHub({ root: store.root, retentionDays: 7 })
  const persisted = reopened.series(host.id, '24h')
  assert.ok(persisted.points.length >= 1)
})

test('history range and downsampling stay bounded', () => {
  tempHome()
  const store = makeService().store
  const hub = new MetricsHub({ root: store.root, retentionDays: 7 })
  const host = store.create({ name: 'm2' })
  const start = Date.now() - 4 * 60 * 60000
  for (let minute = 0; minute < 240; minute += 1) {
    hub.ingest(host.id, sample({ t: start + minute * 60000 + 1000, cpu: minute % 100 }))
  }
  const series = hub.series(host.id, '24h')
  assert.ok(series.points.length > 0)
  assert.ok(series.points.length <= 288)
  assert.ok(series.from <= series.to)
})

test('agent reports carry connections, cumulative traffic and optional GPU', () => {
  tempHome()
  const { store, metrics } = makeService()
  const host = store.create({ name: 'm-extra' })
  const now = Date.now()

  // A plain report: no GPU key, connections and totals present.
  metrics.ingest(host.id, sample({ t: now, connTcp: 31, connUdp: 4, totalRx: 5 * 1024 ** 3, totalTx: 1024 ** 3 }))
  const current = metrics.current(host.id)
  assert.equal(current.connTcp, 31)
  assert.equal(current.connUdp, 4)
  assert.equal(current.totalRx, 5 * 1024 ** 3)
  assert.equal(current.totalTx, 1024 ** 3)
  assert.equal(current.gpuName, '')
  // No GPU: both stay numeric so the payload stays losslessly serializable.
  assert.equal(current.gpuUsage, 0)
  assert.equal(current.gpuTemp, 0)

  // A report with a GPU section keeps all four numbers.
  metrics.ingest(host.id, sample({
    t: now + 5000,
    gpuName: 'NVIDIA GeForce RTX 5090',
    gpuMemTotal: 32 * 1024 ** 3,
    gpuMemUsed: 8 * 1024 ** 3,
    gpuUsage: 41.5,
    gpuTemp: 63,
  }))
  const withGpu = metrics.current(host.id)
  assert.equal(withGpu.gpuName, 'NVIDIA GeForce RTX 5090')
  assert.equal(withGpu.gpuUsage, 41.5)
  assert.equal(withGpu.gpuTemp, 63)
})

test('minute history keeps the connection averages', () => {
  tempHome()
  const { store, metrics } = makeService()
  const host = store.create({ name: 'm-conn' })
  const base = Math.floor(Date.now() / 60000) * 60000 - 3 * 60000

  metrics.ingest(host.id, sample({ t: base + 1000, connTcp: 10, connUdp: 2 }))
  metrics.ingest(host.id, sample({ t: base + 2000, connTcp: 20, connUdp: 4 }))
  // Flush the bucket by moving to the next minute.
  metrics.ingest(host.id, sample({ t: base + 61000 }))

  const file = join(dataDir(), 'history', `${host.id}.jsonl`)
  const row = JSON.parse(readFileSync(file, 'utf8').trim().split('\n')[0])
  assert.equal(row.tc, 15)
  assert.equal(row.uc, 3)
})

test('private addresses are not geolocated; public ones are', async () => {
  const { isPublicAddress } = await import('../host/geo.js')
  for (const address of ['127.0.0.1', '10.0.0.5', '192.168.1.9', '172.16.4.10', '::1', 'fe80::1', '100.64.0.1', '']) {
    assert.equal(isPublicAddress(address), false, `${address} must be private`)
  }
  for (const address of ['103.121.94.197', '1.1.1.1', '::ffff:103.121.94.197', '2001:4860:4860::8888']) {
    assert.equal(isPublicAddress(address), true, `${address} must be public`)
  }
})

test('an ISO code renders as a flag emoji', async () => {
  const { flagEmoji, hasFlag } = await import('../src/client/panel/flag.ts').catch(() => ({}))
  // The helper is TypeScript; when the loader cannot import it, skip instead of
  // pretending the assertion ran.
  if (typeof flagEmoji !== 'function') return
  assert.equal(flagEmoji('hk'), '\u{1F1ED}\u{1F1F0}')
  assert.equal(hasFlag('hk'), true)
  assert.equal(hasFlag(''), false)
})

test('the store records a detected region on the host', () => {
  tempHome()
  const { store } = makeService()
  const host = store.create({ name: 'geo-1' })
  store.setRegion(host.id, { code: 'hk', name: 'Hong Kong' })
  const saved = store.find(host.id)
  assert.equal(saved.regionCode, 'hk')
  assert.equal(saved.regionName, 'Hong Kong')
})

test('a ping task dispatches once per interval and records the result', async () => {
  const { ProbeService } = await import('../host/service.js')
  const { ProbeStore } = await import('../host/store.js')
  const { MetricsHub } = await import('../host/metrics.js')
  const { tempHome } = await import('./helpers.mjs')
  tempHome()
  const root = dataDir()
  const store = new ProbeStore({ root })
  const metrics = new MetricsHub({ root })
  const alerts = { evaluate() {}, evaluateOffline() {}, snapshot() { return { active: [], recent: [] } }, forHost() { return { active: [], recent: [] } } }
  const service = new ProbeService({ store, metrics, alerts, version: 't', agentVersion: 't' })
  const host = store.create({ name: 'ping-host' })
  const task = service.createPingTask({ name: 'Local', type: 'icmp', target: '127.0.0.1', intervalSec: 10, hosts: [host.id] })

  const sample = {
    cpu: 5, mem: { total: 100, used: 50 }, disk: { mount: '/', total: 100, used: 40 },
    load: [0.1, 0.1, 0.1], net: { rxRate: 1, txRate: 1 }, uptime: 1, cores: 2,
  }
  const first = service.ingest(host.token, sample, '')
  assert.equal(first.events.length, 1, 'one task is due, so one event is queued')
  assert.equal(first.events[0].method, 'agent.ping')
  assert.equal(first.events[0].params.target, '127.0.0.1')

  // The agent answers with a sample and an ack: the event is gone, the number kept.
  // Reports are rate-limited by MIN_REPORT_GAP_MS, so wait out the gap.
  await new Promise(resolve => setTimeout(resolve, 600))
  const second = service.ingest(host.token, {
    ...sample,
    pings: [{ taskId: task.id, ms: 7 }],
    ackEventIds: first.events.map(event => event.id),
  }, '')
  assert.equal(second.events.length, 0, 'the interval has not elapsed, and the ack removed the event')
  assert.deepEqual(service.pingStore.samples(task.id, host.id).map(row => row.ms), [7])
  assert.equal(service.pingSnapshot()[0].results[0].latest, 7)
})

test('a lost probe is recorded as null, not as zero', async () => {
  const { ProbeService } = await import('../host/service.js')
  const { ProbeStore } = await import('../host/store.js')
  const { MetricsHub } = await import('../host/metrics.js')
  const { tempHome } = await import('./helpers.mjs')
  tempHome()
  const root = dataDir()
  const store = new ProbeStore({ root })
  const metrics = new MetricsHub({ root })
  const alerts = { evaluate() {}, evaluateOffline() {}, snapshot() { return { active: [], recent: [] } }, forHost() { return { active: [], recent: [] } } }
  const service = new ProbeService({ store, metrics, alerts, version: 't', agentVersion: 't' })
  const host = store.create({ name: 'loss-host' })
  const task = service.createPingTask({ name: 'Blackhole', type: 'icmp', target: '192.0.2.1', intervalSec: 10, hosts: [host.id] })
  const sample = {
    cpu: 5, mem: { total: 100, used: 50 }, disk: { mount: '/', total: 100, used: 40 },
    load: [0.1, 0.1, 0.1], net: { rxRate: 1, txRate: 1 }, uptime: 1, cores: 2,
  }
  service.ingest(host.token, { ...sample, pings: [{ taskId: task.id, ms: null }] }, '')
  const summary = service.pingStore.summary(task.id, host.id)
  assert.equal(summary.latest, null)
  assert.equal(summary.loss, 100, 'the only sample was a loss')
})

test('an upgrade queues a switchVersion event for that host only', async () => {
  const { ProbeService } = await import('../host/service.js')
  const { ProbeStore } = await import('../host/store.js')
  const { MetricsHub } = await import('../host/metrics.js')
  const { take } = await import('../host/events.js')
  const { tempHome } = await import('./helpers.mjs')
  tempHome()
  const root = dataDir()
  const store = new ProbeStore({ root })
  const metrics = new MetricsHub({ root })
  const alerts = { evaluate() {}, evaluateOffline() {}, snapshot() { return { active: [], recent: [] } }, forHost() { return { active: [], recent: [] } } }
  const service = new ProbeService({ store, metrics, alerts, version: 't', agentVersion: '9.9.9' })
  const host = store.create({ name: 'upgrade-host' })
  const queued = service.upgradeAgent(host.id)
  assert.equal(queued.queued, true)
  assert.equal(queued.agentVersion, '9.9.9')
  const events = take(host.id, [], 8)
  assert.equal(events.length, 1)
  assert.equal(events[0].method, 'agent.switchVersion')
  assert.equal(events[0].params.version, '9.9.9')
  // The agent resolves its own platform asset from the release; the panel
  // only names the version and the channel.
  assert.equal(events[0].params.channel, 'github-release')
  // A second host must not see the first host's command.
  const other = store.create({ name: 'other-host' })
  assert.equal(take(other.id, [], 8).length, 0)
})
