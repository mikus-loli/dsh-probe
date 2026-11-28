import assert from 'node:assert/strict'
import test from 'node:test'
import { call, makeRouteTable, makeService, tempHome } from './helpers.mjs'
import { AGENT_VERSION, PANEL_VERSION } from '../host/version.js'

function route(table, path) {
  const found = table.find(item => item.path === path)
  assert.ok(found, `route ${path} missing`)
  return found
}

test('the panel API is fenced and the agent plane stays public', async () => {
  tempHome()
  const { service } = makeService()
  const table = makeRouteTable(service)
  const panel = route(table, '/api/dsh-probe')

  let out = await call(panel.handler, { url: '/api/dsh-probe/snapshot' })
  assert.equal(out.status, 200)
  assert.deepEqual(out.json.hosts, [])
  assert.equal(out.json.versions.panel, PANEL_VERSION)

  out = await call(panel.handler, { url: '/api/dsh-probe/snapshot', remote: '203.0.113.5' })
  assert.equal(out.status, 403)
  out = await call(panel.handler, { url: '/api/dsh-probe/snapshot', headers: { 'x-forwarded-for': '203.0.113.5' } })
  assert.equal(out.status, 403)
})

test('host lifecycle, ingest, mute and notify test over HTTP', async () => {
  tempHome()
  const { service } = makeService()
  const table = makeRouteTable(service)
  const panel = route(table, '/api/dsh-probe')
  const ingest = route(table, '/auth/dsh-probe/ingest')

  let out = await call(panel.handler, { method: 'POST', url: '/api/dsh-probe/hosts', body: { name: 'web-1', tags: ['prod'] } })
  assert.equal(out.status, 201)
  const host = out.json.host
  assert.equal(host.token.length, 48)
  assert.equal(host.agentOutdated, false)

  const report = { cpu: 22, mem: { total: 100, used: 40 }, disk: { total: 100, used: 30 }, load: [0.5, 0.4, 0.3], cores: 2, hostname: 'web-1', agentVersion: '0.1.0' }
  out = await call(ingest.handler, { method: 'POST', url: '/auth/dsh-probe/ingest', headers: { 'x-probe-token': host.token }, body: report })
  assert.equal(out.status, 200)

  out = await call(panel.handler, { url: '/api/dsh-probe/snapshot' })
  assert.equal(out.json.hosts[0].status, 'online')
  assert.equal(out.json.hosts[0].agentOutdated, true)

  out = await call(panel.handler, { method: 'POST', url: `/api/dsh-probe/hosts/${host.id}/mute`, body: { minutes: 30 } })
  assert.equal(out.status, 200)
  assert.equal(out.json.host.muted, true)

  out = await call(panel.handler, { method: 'POST', url: '/api/dsh-probe/notify/test' })
  assert.equal(out.status, 200)
  assert.equal(out.json.delivery.ok, false)

  out = await call(panel.handler, { url: `/api/dsh-probe/hosts/${host.id}/history?range=24h` })
  assert.equal(out.status, 200)
  assert.equal(out.json.range, '24h')

  out = await call(panel.handler, { method: 'DELETE', url: `/api/dsh-probe/hosts/${host.id}` })
  assert.equal(out.status, 200)
  out = await call(panel.handler, { url: '/api/dsh-probe/snapshot' })
  assert.deepEqual(out.json.hosts, [])
})

test('the version manifest points at the release channel', async () => {
  tempHome()
  const { service } = makeService()
  const table = makeRouteTable(service)

  const out = await call(route(table, '/auth/dsh-probe/version.json').handler, { url: '/auth/dsh-probe/version.json' })
  assert.equal(out.status, 200)
  assert.equal(out.json.panel, PANEL_VERSION)
  assert.equal(out.json.agent, AGENT_VERSION)
  // The agent is a published binary: the panel points at the release instead of
  // serving a script, so there is no in-panel download to test any more.
  assert.match(out.json.agentDownload, /github\.com\/mikus-loli\/dsh-probe\/releases\/latest$/)
})
