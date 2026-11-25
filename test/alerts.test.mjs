import assert from 'node:assert/strict'
import test from 'node:test'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
import { makeService, sample, tempHome } from './helpers.mjs'

function lowThresholds(service) {
  service.updateSettings({
    rules: {
      cpu: { enabled: true, threshold: 90, holdSec: 0 },
      memory: { enabled: true, threshold: 90, holdSec: 0 },
      disk: { enabled: true, threshold: 90, holdSec: 0 },
      load: { enabled: true, threshold: 2, holdSec: 0 },
      offline: { enabled: true, holdSec: 60 },
    },
  })
}

test('an alert opens after the hold time and closes on recovery', async () => {
  tempHome()
  const { service, store, alerts } = makeService()
  lowThresholds(service)
  const host = store.create({ name: 'h1' })
  const rule = store.getSettings().rules.cpu

  // One sample is not enough while the hold time has not elapsed.
  alerts.evaluate(host, sample({ cpu: 95 }), { ...store.getSettings(), rules: { ...store.getSettings().rules, cpu: { ...rule, holdSec: 30 } } }, 1_000)
  assert.equal(alerts.snapshot().totalActive, 0)

  service.ingest(host.token, { cpu: 95, mem: { total: 100, used: 50 }, disk: { total: 100, used: 40 }, load: [1, 1, 1], cores: 2 })
  assert.equal(alerts.snapshot().totalActive, 1)
  await sleep(260)
  assert.equal(alerts.snapshot().active[0].rule, 'cpu')

  await sleep(260)
  service.ingest(host.token, { cpu: 5, mem: { total: 100, used: 50 }, disk: { total: 100, used: 40 }, load: [1, 1, 1], cores: 2 })
  assert.equal(alerts.snapshot().totalActive, 0)
  assert.equal(alerts.snapshot().recent.length, 1)
})

test('muting clears active alerts silently and blocks new ones', async () => {
  tempHome()
  const { service, store, alerts } = makeService()
  lowThresholds(service)
  const host = store.create({ name: 'h2' })
  const report = { cpu: 95, mem: { total: 100, used: 50 }, disk: { total: 100, used: 40 }, load: [1, 1, 1], cores: 2 }
  service.ingest(host.token, report)
  assert.equal(alerts.snapshot().totalActive, 1)

  service.setMute(host.id, 60)
  assert.equal(alerts.snapshot().totalActive, 0)
  assert.equal(alerts.snapshot().recent[0].silent, true)

  // Reports keep arriving and are stored, but do not reopen the alert.
  await sleep(260)
  service.ingest(host.token, report)
  assert.equal(alerts.snapshot().totalActive, 0)
  assert.ok(service.history(host.id, '1h').points.length >= 1)
})

test('the offline rule respects mute windows', () => {
  tempHome()
  const { service, store, metrics, alerts } = makeService()
  lowThresholds(service)
  const host = store.create({ name: 'h3' })
  service.ingest(host.token, { cpu: 1, mem: { total: 100, used: 10 }, disk: { total: 100, used: 10 }, load: [0, 0, 0], cores: 2 })
  const settings = store.getSettings()
  const lastSeen = metrics.lastSeen(host.id)

  alerts.evaluateOffline([store.find(host.id)], metrics, settings, lastSeen + 120_000)
  assert.equal(alerts.snapshot().active[0].rule, 'offline')

  store.setMute(host.id, 60)
  const mutedHost = store.find(host.id)
  alerts.evaluateOffline([mutedHost], metrics, settings, lastSeen + 180_000)
  assert.equal(alerts.snapshot().totalActive, 0)
})
