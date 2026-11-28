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

test('the Go agent carries the shared version', () => {
  // The published binary is the primary agent now, so its constant has to move
  // with the panel's; a stale one makes every host look out of date.
  const source = readFileSync(join(ROOT, 'agent', 'go', 'version.go'), 'utf8')
  const match = /const version = "([^"]+)"/.exec(source)
  assert.notEqual(match, null, 'agent/go/version.go must declare a version constant')
  assert.equal(match[1], AGENT_VERSION)
})

test('the release workflow builds the agent', () => {
  const workflow = readFileSync(join(ROOT, '.github', 'workflows', 'release.yml'), 'utf8')
  // A tag must produce binaries, or install.sh has nothing to download.
  assert.match(workflow, /tags:/)
  assert.match(workflow, /go build/)
  assert.match(workflow, /action-gh-release/)
})

test('agent scripts report the shared version', () => {
  const node = spawnSync(process.execPath, [join(ROOT, 'agent', 'agent.mjs'), '--version'], { encoding: 'utf8' })
  assert.equal(node.status, 0)
  assert.match(node.stdout, new RegExp(`dsh-probe-agent ${AGENT_VERSION}`))

  const shell = spawnSync('sh', [join(ROOT, 'agent', 'agent.sh'), '--version'], { encoding: 'utf8' })
  assert.equal(shell.status, 0)
  assert.match(shell.stdout, new RegExp(`dsh-probe-agent ${AGENT_VERSION}`))
})
