import assert from 'node:assert/strict'
import test from 'node:test'
import { hookServer, makeService, tempHome, waitFor } from './helpers.mjs'

function fakeAlert(host, overrides = {}) {
  return {
    id: 'alert1',
    hostId: host.id,
    hostName: host.name,
    rule: 'cpu',
    value: 95,
    peak: 96,
    threshold: 90,
    holdSec: 120,
    unit: '%',
    message: `${host.name}: CPU 95% above 90% for 120s`,
    startedAt: Date.now() - 60_000,
    endedAt: null,
    ...overrides,
  }
}

test('a configured webhook receives test and alert payloads', async () => {
  tempHome()
  const hook = await hookServer()
  try {
    const { store, notifier } = makeService()
    store.updateSettings({ notify: { enabled: true, url: hook.url, onResolve: true } })
    const host = store.create({ name: 'h1' })

    const testResult = await notifier.test()
    assert.equal(testResult.ok, true)
    assert.equal(testResult.status, 202)

    notifier.notify('open', fakeAlert(host))
    await waitFor(() => hook.received.some(item => item.event === 'alert.open'))
    const open = hook.received.find(item => item.event === 'alert.open')
    assert.equal(open.host.name, 'h1')
    assert.equal(open.alert.rule, 'cpu')
    assert.match(open.text, /CPU 95%/)

    notifier.notify('close', fakeAlert(host, { endedAt: Date.now(), durationSec: 60 }))
    await waitFor(() => hook.received.some(item => item.event === 'alert.close'))

    // A silent close (mute / disable) is bookkeeping, not a recovery notice.
    const before = hook.received.length
    notifier.notify('close', fakeAlert(host, { silent: true, endedAt: Date.now() }))
    await new Promise(resolve => setTimeout(resolve, 100))
    assert.equal(hook.received.length, before)

    // onResolve off suppresses the close event only.
    store.updateSettings({ notify: { onResolve: false } })
    notifier.notify('close', fakeAlert(host, { endedAt: Date.now() }))
    await new Promise(resolve => setTimeout(resolve, 100))
    assert.equal(hook.received.length, before)
  } finally {
    await hook.close()
  }
})

test('disabled notifications and bad URLs fail without throwing', async () => {
  tempHome()
  const { store, notifier } = makeService()
  store.updateSettings({ notify: { enabled: false, url: 'https://example.invalid/hook' } })
  const disabled = await notifier.test()
  assert.equal(disabled.ok, false)
  assert.match(disabled.error, /disabled/)

  store.updateSettings({ notify: { enabled: true, url: 'ftp://example.com/hook' } })
  const invalid = await notifier.test()
  assert.equal(invalid.ok, false)
  assert.match(invalid.error, /invalid/)
})
