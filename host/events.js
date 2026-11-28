/**
 * Server-to-agent event queue, ported from Komari's `web/agent/v2_events.go`.
 *
 * The agent dials out and never listens, so a command reaches it one of two
 * ways upstream: pushed over the WebSocket when one is open, or left in this
 * queue and handed back in the response to the agent's next report. The probe
 * has no WebSocket, so every command takes the second path — the report
 * response carries pending events, and the agent acknowledges them on its next
 * report by id.
 *
 * Delivery is at-least-once: an event leaves the queue only when the agent acks
 * its id, and it expires on its own TTL so a dead agent cannot accumulate work
 * forever.
 */

import { randomUUID } from 'node:crypto'

/** Maximum events held per host (upstream uses 128). */
const QUEUE_LIMIT = 128

/** How long an ordinary event stays deliverable. */
const EVENT_TTL_MS = 5 * 60 * 1000

/**
 * Ping events expire almost immediately: a latency sample that arrives after a
 * few seconds describes a moment nobody is looking at any more.
 */
const PING_TTL_MS = 3 * 1000

/** Per-host queues, keyed by host id. */
const queues = new Map()

/** Queue for one host, created on demand. */
function queueFor(hostId) {
  let queue = queues.get(hostId)
  if (queue === undefined) {
    queue = []
    queues.set(hostId, queue)
  }
  return queue
}

/** Drop expired events in place. */
function prune(queue, now) {
  for (let index = queue.length - 1; index >= 0; index -= 1) {
    if ((queue[index]?.expiresAt ?? 0) <= now) queue.splice(index, 1)
  }
}

/**
 * Queue one event for a host.
 * @param {string} hostId - target host.
 * @param {string} method - agent-side method name, e.g. `agent.ping`.
 * @param {object} params - method payload.
 * @param {number} [ttlMs] - override the default lifetime.
 * @returns {object} the queued event.
 */
export function enqueue(hostId, method, params, ttlMs) {
  const now = Date.now()
  const queue = queueFor(hostId)
  prune(queue, now)
  const event = {
    id: randomUUID(),
    method,
    params,
    createdAt: now,
    expiresAt: now + (ttlMs ?? (method === 'agent.ping' ? PING_TTL_MS : EVENT_TTL_MS)),
  }
  queue.push(event)
  // Keep the newest work: a flood must not starve the latest command.
  while (queue.length > QUEUE_LIMIT) queue.shift()
  return event
}

/**
 * Take the events owed to a host and drop the ones it just acknowledged.
 * @param {string} hostId - reporting host.
 * @param {string[]} ackIds - ids the agent reports as handled.
 * @param {number} [limit] - maximum events returned (upstream uses 8).
 * @returns {object[]} events to deliver now.
 */
export function take(hostId, ackIds, limit = 8) {
  const now = Date.now()
  const queue = queueFor(hostId)
  if (Array.isArray(ackIds) && ackIds.length > 0) {
    const acked = new Set(ackIds.map(String))
    for (let index = queue.length - 1; index >= 0; index -= 1) {
      if (acked.has(String(queue[index]?.id))) queue.splice(index, 1)
    }
  }
  prune(queue, now)
  return queue.slice(0, Math.max(0, limit))
}

/** Forget a host's queue (used when the host is removed). */
export function dropHost(hostId) {
  queues.delete(hostId)
}

/** Queue depth for one host, for the panel. */
export function depth(hostId) {
  const queue = queues.get(hostId)
  if (queue === undefined) return 0
  prune(queue, Date.now())
  return queue.length
}
