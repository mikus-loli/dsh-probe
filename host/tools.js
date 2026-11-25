/**
 * Agent tools over the probe service.
 *
 * The tools read the same host store, the same metric ring and the same alert
 * engine the panel reads, so a host added or a token rotated in the GUI is
 * immediately visible to the model and vice versa. Reads stay cheap and
 * bounded: cards answer "what is happening", history answers "how was last
 * night" with a downsampled series, and nothing here dumps the whole ring.
 */

import { defineTool } from '@deepseek-ai/dsh-tools'

/** Round-trip a tool value through plain JSON so no `undefined` property survives. */
function clean(value) {
  if (Array.isArray(value)) return value.map(clean)
  if (value !== null && typeof value === 'object') {
    const out = {}
    for (const [key, item] of Object.entries(value)) {
      if (item !== undefined) out[key] = clean(item)
    }
    return out
  }
  return value
}

/** One text content block. */
function text(value) {
  return [{ type: 'text', text: value }]
}

/** Tool names this plugin registers (used by the prompt-section visibility gate). */
export const PROBE_TOOL_NAMES = ['probe_list', 'probe_status', 'probe_history', 'probe_alerts', 'probe_manage']

/** Format a byte count compactly. */
function bytes(value) {
  if (!Number.isFinite(value) || value <= 0) return '0 B'
  const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB']
  let index = 0
  let size = value
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024
    index += 1
  }
  return `${size >= 100 ? Math.round(size) : size.toFixed(1)} ${units[index]}`
}

/** Format an uptime in seconds as days/hours. */
function duration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '-'
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}

/** Format a "last seen" timestamp as an age. */
function ago(timestamp) {
  if (timestamp === 0) return 'never'
  const seconds = Math.max(0, Math.round((Date.now() - timestamp) / 1000))
  if (seconds < 60) return `${seconds}s ago`
  if (seconds < 3600) return `${Math.round(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.round(seconds / 3600)}h ago`
  return `${Math.round(seconds / 86400)}d ago`
}

/** One host table row for the model. */
function renderHostTable(hosts) {
  if (hosts.length === 0) return 'no probe hosts configured'
  const header = 'name | status | cpu | mem | disk | load1 | net rx/tx | uptime | last seen | tags | agent'
  const rows = hosts.map(host => [
    host.name,
    host.status,
    host.cpu === undefined ? '-' : `${host.cpu}%`,
    host.mem === undefined ? '-' : `${host.mem}%`,
    host.disk === undefined ? '-' : `${host.disk}%`,
    host.load1 === undefined ? '-' : String(host.load1),
    host.rxRate === undefined ? '-' : `${bytes(host.rxRate)}/s / ${bytes(host.txRate)}/s`,
    host.uptime === undefined ? '-' : duration(host.uptime),
    ago(host.lastSeen),
    host.tags.length > 0 ? host.tags.join(',') : '-',
    host.agentVersion === undefined ? '-' : `${host.agentVersion}${host.agentOutdated === true ? ' (update)' : ''}`,
  ].join(' | '))
  return [header, '--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---', ...rows].join('\n')
}

/** Project one host view onto the compact tool row. */
function hostRow(view) {
  const current = view.current
  return {
    id: view.id,
    name: view.name,
    status: view.status,
    tags: view.tags,
    location: view.location,
    lastSeen: view.lastSeen,
    cpu: current === null ? undefined : current.cpu,
    mem: current === null ? undefined : current.memPct,
    disk: current === null ? undefined : current.diskPct,
    load1: current === null ? undefined : current.load1,
    rxRate: current === null ? undefined : current.rxRate,
    txRate: current === null ? undefined : current.txRate,
    uptime: current === null ? undefined : current.uptime,
    cores: current === null ? undefined : current.cores,
    agentVersion: current === null ? undefined : current.agentVersion,
    agentOutdated: view.agentOutdated === true ? true : undefined,
  }
}

/** The active-alert rows for one host or all hosts. */
function alertRows(alerts) {
  return alerts.map(alert => ({
    hostId: alert.hostId,
    hostName: alert.hostName,
    rule: alert.rule,
    value: alert.value,
    threshold: alert.threshold,
    startedAt: alert.startedAt,
    durationSec: alert.endedAt === null ? Math.round((Date.now() - alert.startedAt) / 1000) : alert.durationSec,
    message: alert.message,
  }))
}

/** The host-list tool. */
export function probeListTool(service) {
  return defineTool({
    name: 'probe_list',
    description: 'List the servers this machine monitors with the DSH probe, with live status and the current CPU / memory / disk / load / network sample. Use probe_status for one host, probe_history for trends, probe_alerts for threshold alerts.',
    parameters: {
      query: { type: 'string', description: 'Optional fuzzy match against name, tags and location.' },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          hosts: {
            type: 'array',
            required: true,
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                id: { type: 'string', required: true },
                name: { type: 'string', required: true },
                status: { type: 'string', enum: ['online', 'stale', 'offline', 'waiting', 'disabled'], required: true },
                tags: { type: 'array', items: { type: 'string' }, required: true },
                location: { type: 'string', required: true },
                lastSeen: { type: 'integer', required: true },
                cpu: { type: 'number' },
                mem: { type: 'number' },
                disk: { type: 'number' },
                load1: { type: 'number' },
                rxRate: { type: 'number' },
                txRate: { type: 'number' },
                uptime: { type: 'number' },
                cores: { type: 'integer' },
                agentVersion: { type: 'string' },
                agentOutdated: { type: 'boolean' },
              },
            },
          },
        },
      },
      render: (_args, value) => text(renderHostTable(value.hosts ?? [])),
    },
    isConcurrencySafe: () => true,
    async execute(args) {
      const query = typeof args.query === 'string' ? args.query.trim().toLowerCase() : ''
      let rows = service.views()
      if (query !== '') {
        rows = rows.filter(view => [view.name, view.location, ...view.tags].join(' ').toLowerCase().includes(query))
      }
      return clean({ hosts: rows.map(hostRow) })
    },
  })
}

/** The single-host status tool. */
export function probeStatusTool(service) {
  return defineTool({
    name: 'probe_status',
    description: 'Read one monitored host in detail: current CPU / memory / disk / swap / load / network / uptime, agent metadata, its recent trend, and its active alerts. Host accepts an id or an exact name.',
    parameters: {
      host: { type: 'string', required: true, description: 'Host id or exact name from probe_list.' },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ok: { type: 'boolean', required: true },
          host: {
            type: 'object',
            additionalProperties: false,
            properties: {
              id: { type: 'string', required: true },
              name: { type: 'string', required: true },
              status: { type: 'string', required: true },
              lastSeen: { type: 'integer', required: true },
              tags: { type: 'array', items: { type: 'string' }, required: true },
              location: { type: 'string', required: true },
              note: { type: 'string', required: true },
              agentOutdated: { type: 'boolean' },
              latestAgent: { type: 'string' },
              current: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  t: { type: 'integer', required: true },
                  cpu: { type: 'number', required: true },
                  memPct: { type: 'number', required: true },
                  memUsed: { type: 'number', required: true },
                  memTotal: { type: 'number', required: true },
                  swapPct: { type: 'number', required: true },
                  swapUsed: { type: 'number', required: true },
                  swapTotal: { type: 'number', required: true },
                  diskPct: { type: 'number', required: true },
                  diskUsed: { type: 'number', required: true },
                  diskTotal: { type: 'number', required: true },
                  diskMount: { type: 'string', required: true },
                  load1: { type: 'number', required: true },
                  load5: { type: 'number', required: true },
                  load15: { type: 'number', required: true },
                  rxRate: { type: 'number', required: true },
                  txRate: { type: 'number', required: true },
                  uptime: { type: 'number', required: true },
                  hostname: { type: 'string', required: true },
                  os: { type: 'string', required: true },
                  kernel: { type: 'string', required: true },
                  arch: { type: 'string', required: true },
                  cores: { type: 'integer', required: true },
                  cpuModel: { type: 'string', required: true },
                  agentVersion: { type: 'string', required: true },
                },
              },
              activeAlerts: {
                type: 'array',
                required: true,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    rule: { type: 'string', required: true },
                    value: { type: 'number', required: true },
                    threshold: { type: 'number', required: true },
                    startedAt: { type: 'integer', required: true },
                    durationSec: { type: 'integer', required: true },
                    message: { type: 'string', required: true },
                  },
                },
              },
            },
          },
          error: { type: 'string' },
        },
      },
      render: (_args, value) => {
        if (value.ok !== true || value.host === undefined) return text(`probe_status failed: ${value.error ?? 'unknown error'}`)
        const host = value.host
        const current = host.current
        if (current === undefined) return text(`${host.name} [${host.status}] has not reported yet (last seen ${host.lastSeen === 0 ? 'never' : ago(host.lastSeen)}).`)
        const lines = [
          `${host.name} [${host.status}] ${current.hostname} · ${current.os} (${current.arch}, ${current.cores} cores) · agent ${current.agentVersion}${host.agentOutdated === true ? ` (update available: ${host.latestAgent})` : ''}`,
          `cpu ${current.cpu}% | mem ${current.memPct}% (${bytes(current.memUsed)} / ${bytes(current.memTotal)}) | swap ${current.swapPct}%`,
          `disk ${current.diskPct}% (${bytes(current.diskUsed)} / ${bytes(current.diskTotal)}) on ${current.diskMount} | load ${current.load1} / ${current.load5} / ${current.load15}`,
          `net rx ${bytes(current.rxRate)}/s tx ${bytes(current.txRate)}/s | uptime ${duration(current.uptime)} | last seen ${ago(host.lastSeen)}`,
        ]
        if (host.tags.length > 0 || host.location !== '') lines.push(`tags: ${host.tags.join(',') || '-'} | location: ${host.location || '-'}`)
        if (host.note !== '') lines.push(`note: ${host.note}`)
        if (host.activeAlerts.length > 0) {
          lines.push('active alerts:')
          for (const alert of host.activeAlerts) lines.push(`  - ${alert.message} (${alert.durationSec}s)`)
        }
        return text(lines.join('\n'))
      },
    },
    isConcurrencySafe: () => true,
    async execute(args) {
      const view = service.resolve(args.host)
      if (view === undefined) return { ok: false, error: `unknown probe host: ${args.host}` }
      const hostView = service.view(service.store.find(view.id))
      return clean({
        ok: true,
        host: {
          id: hostView.id,
          name: hostView.name,
          status: hostView.status,
          lastSeen: hostView.lastSeen,
          tags: hostView.tags,
          location: hostView.location,
          note: hostView.note,
          agentOutdated: hostView.agentOutdated === true ? true : undefined,
          latestAgent: service.agentVersion,
          current: hostView.current ?? undefined,
          activeAlerts: alertRows(hostView.alerts.active).map(alert => ({
            rule: alert.rule,
            value: alert.value,
            threshold: alert.threshold,
            startedAt: alert.startedAt,
            durationSec: alert.durationSec,
            message: alert.message,
          })),
        },
      })
    },
  })
}

/** The history tool. */
export function probeHistoryTool(service) {
  return defineTool({
    name: 'probe_history',
    description: 'Read a monitored host\'s trend over the last hour, 24 hours, or 7 days. Values are downsampled averages, with average and peak CPU / memory / disk over the window; history is one-minute resolution beyond the last hour.',
    parameters: {
      host: { type: 'string', required: true, description: 'Host id or exact name from probe_list.' },
      range: { type: 'string', enum: ['1h', '24h', '7d'], description: 'Window: 1h uses raw samples, 24h and 7d use the persisted one-minute series. Defaults to 1h.' },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ok: { type: 'boolean', required: true },
          name: { type: 'string' },
          range: { type: 'string' },
          from: { type: 'integer' },
          to: { type: 'integer' },
          stepMs: { type: 'integer' },
          points: {
            type: 'array',
            required: true,
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                t: { type: 'integer', required: true },
                c: { type: 'number', required: true },
                m: { type: 'number', required: true },
                d: { type: 'number', required: true },
                l: { type: 'number', required: true },
              },
            },
          },
          summary: {
            type: 'object',
            additionalProperties: false,
            properties: {
              cpu: { type: 'object', additionalProperties: false, properties: { avg: { type: 'number', required: true }, max: { type: 'number', required: true } } },
              mem: { type: 'object', additionalProperties: false, properties: { avg: { type: 'number', required: true }, max: { type: 'number', required: true } } },
              disk: { type: 'object', additionalProperties: false, properties: { avg: { type: 'number', required: true }, max: { type: 'number', required: true } } },
            },
          },
          error: { type: 'string' },
        },
      },
      render: (_args, value) => {
        if (value.ok !== true) return text(`probe_history failed: ${value.error ?? 'unknown error'}`)
        const summary = value.summary
        const head = `${value.name} · ${value.range} · ${value.points.length} points`
        if (summary === undefined) return text(`${head}: no samples in this window`)
        return text([
          head,
          `cpu avg ${summary.cpu.avg}% / max ${summary.cpu.max}% · mem avg ${summary.mem.avg}% / max ${summary.mem.max}% · disk avg ${summary.disk.avg}% / max ${summary.disk.max}%`,
          `window: ${new Date(value.from).toLocaleString()} -> ${new Date(value.to).toLocaleString()}`,
        ].join('\n'))
      },
    },
    isConcurrencySafe: () => true,
    async execute(args) {
      const view = service.resolve(args.host)
      if (view === undefined) return { ok: false, points: [], error: `unknown probe host: ${args.host}` }
      const range = args.range === '24h' || args.range === '7d' ? args.range : '1h'
      const series = service.history(view.id, range)
      // The model needs the shape, not 300 rows: bound the tool copy to 60
      // points and keep the summary exact over the full window.
      const stride = Math.max(1, Math.ceil(series.points.length / 60))
      const points = series.points.filter((_point, index) => index % stride === 0).map(point => ({
        t: point.t, c: point.c, m: point.m, d: point.d, l: point.l,
      }))
      return clean({
        ok: true,
        name: view.name,
        range,
        from: series.from,
        to: series.to,
        stepMs: series.stepMs * stride,
        points,
        summary: series.summary,
      })
    },
  })
}

/** The alerts tool. */
export function probeAlertsTool(service) {
  return defineTool({
    name: 'probe_alerts',
    description: 'List probe threshold alerts: currently firing alerts with their duration, and recently resolved ones. Alerts fire when CPU / memory / disk / load stay above their threshold for the configured hold time, or when a host stops reporting.',
    parameters: {},
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          active: {
            type: 'array',
            required: true,
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                hostId: { type: 'string', required: true },
                hostName: { type: 'string', required: true },
                rule: { type: 'string', required: true },
                value: { type: 'number', required: true },
                threshold: { type: 'number', required: true },
                startedAt: { type: 'integer', required: true },
                durationSec: { type: 'integer', required: true },
                message: { type: 'string', required: true },
              },
            },
          },
          recent: {
            type: 'array',
            required: true,
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                hostId: { type: 'string', required: true },
                hostName: { type: 'string', required: true },
                rule: { type: 'string', required: true },
                value: { type: 'number', required: true },
                threshold: { type: 'number', required: true },
                startedAt: { type: 'integer', required: true },
                durationSec: { type: 'integer', required: true },
                endedAt: { type: 'integer', required: true },
                message: { type: 'string', required: true },
              },
            },
          },
        },
      },
      render: (_args, value) => {
        const lines = []
        if (value.active.length === 0) lines.push('no active alerts')
        else {
          lines.push(`active (${value.active.length}):`)
          for (const alert of value.active) lines.push(`  - ${alert.message} for ${alert.durationSec}s`)
        }
        if (value.recent.length > 0) {
          lines.push(`recent (${value.recent.length}):`)
          for (const alert of value.recent.slice(0, 10)) {
            lines.push(`  - ${alert.message}${alert.durationSec === undefined ? '' : ` (${alert.durationSec}s)`}`)
          }
        }
        return text(lines.join('\n'))
      },
    },
    isConcurrencySafe: () => true,
    async execute() {
      const snapshot = service.alertsSnapshot()
      return clean({
        active: alertRows(snapshot.active),
        recent: alertRows(snapshot.recent).map(alert => ({ ...alert, endedAt: alert.startedAt + (alert.durationSec ?? 0) * 1000 })),
      })
    },
  })
}

/** The host-management tool (same operations the panel drives). */
export function probeManageTool(service) {
  return defineTool({
    name: 'probe_manage',
    description: 'Create, rename, re-tag, enable/disable, mute alerts, rotate the agent token of, or remove a monitored server; also test the alert webhook. The agent token is a credential: it authorizes metric reports for that host only. After adding a host, install the agent on that server from the Probe panel install card (or fetch /auth/dsh-probe/agent.sh and run it with the token).',
    parameters: {
      action: { type: 'string', required: true, enum: ['add', 'update', 'remove', 'rotate_token', 'enable', 'disable', 'mute', 'unmute', 'test_notify'], description: 'Operation to perform. mute silences alerts for a window; unmute clears it; test_notify sends a test webhook.' },
      host: { type: 'string', description: 'Host id or exact name (required for every action except add and test_notify).' },
      name: { type: 'string', description: 'Display name (required for add; new name for update).' },
      tags: { type: 'array', items: { type: 'string' }, description: 'Replacement tag list; empty array clears tags.' },
      location: { type: 'string', description: 'Free-form location note.' },
      note: { type: 'string', description: 'Free-form note.' },
      minutes: { type: 'integer', description: 'Mute window in minutes (mute only, default 60, max 10080).' },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ok: { type: 'boolean', required: true },
          host: {
            type: 'object',
            additionalProperties: false,
            properties: {
              id: { type: 'string', required: true },
              name: { type: 'string', required: true },
              token: { type: 'string', required: true },
              status: { type: 'string', required: true },
              enabled: { type: 'boolean', required: true },
            },
          },
          delivery: {
            type: 'object',
            additionalProperties: false,
            properties: {
              ok: { type: 'boolean', required: true },
              status: { type: 'integer' },
              error: { type: 'string' },
              at: { type: 'integer', required: true },
              event: { type: 'string' },
            },
          },
          error: { type: 'string' },
        },
      },
      render: (_args, value) => {
        if (value.delivery !== undefined) {
          const delivery = value.delivery
          return text(delivery.ok
            ? `webhook test delivered at ${new Date(delivery.at).toISOString()}${delivery.status === undefined ? '' : ` (HTTP ${delivery.status})`}`
            : `webhook test failed: ${delivery.error ?? `HTTP ${delivery.status ?? 'unknown'}`}`)
        }
        if (value.ok !== true) return text(`probe_manage failed: ${value.error ?? 'unknown error'}`)
        if (value.host === undefined) return text('probe_manage failed: no host in the result')
        return text(`ok: ${value.host.name} (${value.host.id}) status=${value.host.status} enabled=${value.host.enabled}\ntoken: ${value.host.token}`)
      },
    },
    async execute(args) {
      try {
        const action = args.action
        if (action === 'add') {
          if (typeof args.name !== 'string' || args.name.trim() === '') return { ok: false, error: 'name is required to add a host' }
          const view = service.createHost({
            name: args.name,
            tags: args.tags,
            location: args.location,
            note: args.note,
          })
          return { ok: true, host: { id: view.id, name: view.name, token: view.token, status: view.status, enabled: view.enabled } }
        }
        if (action === 'test_notify') {
          const delivery = await service.testNotify()
          return clean({ ok: delivery.ok === true, delivery })
        }
        const target = service.resolve(args.host)
        if (target === undefined) return { ok: false, error: `unknown probe host: ${args.host}` }
        if (action === 'remove') {
          service.removeHost(target.id)
          return { ok: true, host: { id: target.id, name: target.name, token: '', status: 'disabled', enabled: false } }
        }
        if (action === 'rotate_token') {
          const view = service.rotateToken(target.id)
          return { ok: true, host: { id: view.id, name: view.name, token: view.token, status: view.status, enabled: view.enabled } }
        }
        if (action === 'enable' || action === 'disable') {
          const view = service.updateHost(target.id, { enabled: action === 'enable' })
          return { ok: true, host: { id: view.id, name: view.name, token: view.token, status: view.status, enabled: view.enabled } }
        }
        if (action === 'mute' || action === 'unmute') {
          const view = service.setMute(target.id, action === 'unmute' ? 0 : (args.minutes ?? 60))
          return { ok: true, host: { id: view.id, name: view.name, token: view.token, status: view.status, enabled: view.enabled } }
        }
        // update
        const patch = {}
        if (args.name !== undefined) patch.name = args.name
        if (args.tags !== undefined) patch.tags = args.tags
        if (args.location !== undefined) patch.location = args.location
        if (args.note !== undefined) patch.note = args.note
        const view = service.updateHost(target.id, patch)
        return { ok: true, host: { id: view.id, name: view.name, token: view.token, status: view.status, enabled: view.enabled } }
      } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : String(error) }
      }
    },
  })
}

/** Every tool this plugin registers. */
export function probeTools(service) {
  return [
    probeListTool(service),
    probeStatusTool(service),
    probeHistoryTool(service),
    probeAlertsTool(service),
    probeManageTool(service),
  ]
}
