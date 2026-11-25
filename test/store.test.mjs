import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { dataDir, tempHome, writeData } from './helpers.mjs'
import { ProbeStore } from '../host/store.js'

test('a v1 data directory is migrated with a backup', () => {
  tempHome()
  writeData('hosts.json', {
    version: 1,
    hosts: [{ id: 'abc123', name: 'old-host', token: 'a'.repeat(48), tags: ['x'], enabled: true, createdAt: 1, updatedAt: 1 }],
  })
  writeData('settings.json', {
    rules: { cpu: { enabled: true, threshold: 80, holdSec: 60 } },
    retentionDays: 5,
    reportIntervalSec: 3,
  })

  const store = new ProbeStore()
  assert.equal(store.hosts.length, 1)
  assert.equal(store.hosts[0].mutedUntil, 0)
  const hostsDoc = JSON.parse(readFileSync(join(dataDir(), 'hosts.json'), 'utf8'))
  assert.equal(hostsDoc.version, 2)
  const settingsDoc = JSON.parse(readFileSync(join(dataDir(), 'settings.json'), 'utf8'))
  assert.equal(settingsDoc.schemaVersion, 2)
  assert.equal(settingsDoc.notify.enabled, false)
  const backups = readdirSync(dataDir()).filter(name => name.includes('.bak-'))
  assert.ok(backups.length >= 2, `expected backups, got ${backups.join(',')}`)
  assert.ok(existsSync(join(dataDir(), 'hosts.json')))
})

test('new hosts and settings land on the current schema', () => {
  tempHome()
  const store = new ProbeStore()
  const host = store.create({ name: 'web-1', tags: ['prod'] })
  assert.equal(store.getSettings().notify.enabled, false)
  store.updateSettings({ notify: { enabled: true, url: 'https://example.com/hook', onResolve: false }, retentionDays: 3 })
  const reloaded = new ProbeStore()
  assert.equal(reloaded.getSettings().notify.url, 'https://example.com/hook')
  assert.equal(reloaded.getSettings().retentionDays, 3)
  assert.equal(reloaded.find(host.id).name, 'web-1')
  const doc = JSON.parse(readFileSync(join(dataDir(), 'hosts.json'), 'utf8'))
  assert.equal(doc.version, 2)
})

test('mute windows are stored and cleared', () => {
  tempHome()
  const store = new ProbeStore()
  const host = store.create({ name: 'web-2' })
  const muted = store.setMute(host.id, 30)
  assert.ok(muted.mutedUntil > Date.now())
  const cleared = store.setMute(host.id, 0)
  assert.equal(cleared.mutedUntil, 0)
  assert.equal(new ProbeStore().find(host.id).mutedUntil, 0)
})

test('a newer data schema is read-only instead of being overwritten', () => {
  tempHome()
  writeData('hosts.json', { version: 99, hosts: [] })
  const store = new ProbeStore()
  assert.equal(store.foreignSchema, true)
  assert.throws(() => store.create({ name: 'nope' }), /newer dsh-probe/)
})
