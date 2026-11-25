import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { ROOT } from './helpers.mjs'
import { AGENT_VERSION, PANEL_VERSION, SCHEMA_VERSION } from '../host/version.js'

const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))

test('package, host and agent versions agree', () => {
  assert.equal(pkg.version, PANEL_VERSION)
  assert.equal(pkg.version, AGENT_VERSION)
  assert.equal(SCHEMA_VERSION, 2)
})

test('agent scripts report the shared version', () => {
  const node = spawnSync(process.execPath, [join(ROOT, 'agent', 'agent.mjs'), '--version'], { encoding: 'utf8' })
  assert.equal(node.status, 0)
  assert.match(node.stdout, new RegExp(`dsh-probe-agent ${AGENT_VERSION}`))

  const shell = spawnSync('sh', [join(ROOT, 'agent', 'agent.sh'), '--version'], { encoding: 'utf8' })
  assert.equal(shell.status, 0)
  assert.match(shell.stdout, new RegExp(`dsh-probe-agent ${AGENT_VERSION}`))
})
