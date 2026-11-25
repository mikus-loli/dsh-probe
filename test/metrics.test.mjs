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
