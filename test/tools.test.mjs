import assert from 'node:assert/strict'
import test from 'node:test'
import { makeService, tempHome } from './helpers.mjs'
import { probeTools } from '../host/tools.js'

test('probe tools expose the panel operations', async () => {
  tempHome()
  const { service } = makeService()
  const tools = probeTools(service)
  assert.deepEqual(tools.map(tool => tool.name), ['probe_list', 'probe_status', 'probe_history', 'probe_alerts', 'probe_manage'])

  const manage = tools.find(tool => tool.name === 'probe_manage')
  let result = await manage.execute({ action: 'add', name: 'web-1', tags: ['prod'] })
  assert.equal(result.ok, true)
  assert.equal(result.host.name, 'web-1')

  const list = tools.find(tool => tool.name === 'probe_list')
  result = await list.execute({})
  assert.equal(result.hosts.length, 1)
  assert.equal(result.hosts[0].name, 'web-1')

  const status = tools.find(tool => tool.name === 'probe_status')
  result = await status.execute({ host: 'web-1' })
  assert.equal(result.ok, true)
  assert.equal(result.host.status, 'waiting')

  const history = tools.find(tool => tool.name === 'probe_history')
  result = await history.execute({ host: 'web-1', range: '24h' })
  assert.equal(result.ok, true)
  assert.deepEqual(result.points, [])

  // Mute / unmute and the webhook test run through the same service the panel uses.
  result = await manage.execute({ action: 'mute', host: 'web-1', minutes: 5 })
  assert.equal(result.host.enabled, true)
  assert.equal(service.resolve('web-1').mutedUntil > Date.now(), true)

  result = await manage.execute({ action: 'unmute', host: 'web-1' })
  assert.equal(service.resolve('web-1').mutedUntil, 0)

  result = await manage.execute({ action: 'test_notify' })
  assert.equal(result.ok, false)
  assert.match(result.delivery.error, /disabled/)

  result = await manage.execute({ action: 'remove', host: 'web-1' })
  assert.equal(result.ok, true)
  assert.equal(service.resolve('web-1'), undefined)
})
