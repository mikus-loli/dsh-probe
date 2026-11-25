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
