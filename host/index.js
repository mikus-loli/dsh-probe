/**
 * dsh-probe — host half.
 *
 * Mounts the probe: the host inventory + settings store under $DSH_HOME, the
 * metric ring and 7-day minute history, the sustained-threshold alert engine,
 * the panel API under /api/dsh-probe, the token-authenticated agent plane
 * under /auth/dsh-probe (report ingest + the agent script itself), the
 * probe_* agent tools, and a prompt section that tells the model the probe
 * exists. The browser half (./client) renders the sidebar entry and the Probe
 * panel.
 *
 * Everything runs on the plugin context's effects, so unloading the bundle
 * removes the routes, the tools, the prompt section and the timers together.
 */

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { AlertEngine } from './alerts.js'
import { captureConnection } from './connection-trust.js'
import { MetricsHub } from './metrics.js'
import { WebhookNotifier } from './notifier.js'
import { makeRoutes } from './routes.js'
import { ProbeService } from './service.js'
import { ProbeStore } from './store.js'
import { probeTools, PROBE_TOOL_NAMES } from './tools.js'
import { AGENT_VERSION, PANEL_VERSION } from './version.js'

/** Stable cordis plugin name. */
export const name = 'probe'

/** Services required before the probe surfaces can mount. */
export const inject = ['webServer', 'tools', 'systemPrompt']

/**
 * Model-facing announcement. Names the capability, the exact tools, where the
 * panel lives, and the one limit the model must not guess around: hosts and
 * their tokens are configured by the user, and a host that never reported has
 * no data however healthy it looks.
 */
const PROBE_GUIDANCE = '本机已安装 dsh-probe 插件（DSH 服务器探针，类似 Komari）：左侧栏「探针」页面显示每台服务器的 CPU / 内存 / 磁盘 / 负载 / 网络 / 在线状态与 1 小时到 7 天的趋势，并对持续超阈值与失联发出告警。每台被监控服务器运行一个轻量 agent（在面板的安装卡片里获取带令牌的一条命令），agent 主动上报指标，无需开 SSH 端口。能力：probe_list 列出主机与当前状态、probe_status 查看单机详情与活动告警、probe_history 查询 1h/24h/7d 趋势、probe_alerts 查看告警、probe_manage 增删改主机/轮换令牌/启停上报。数据存 $DSH_HOME/dsh-probe（默认 ~/.dsh），历史为每分钟一档、保留 7 天；agent 令牌是凭证，只对该主机上报有效。限制：主机与令牌由用户在面板配置，agent 必须能访问本机 DSH 的公网地址；刚添加、尚未首次上报的主机显示 waiting，不是故障。用户提到「探针 / 监控 / 服务器负载 / 告警 / Komari」时即指本插件，请据此协作。'

/** Prompt-section order: right after the SSH plugin's band. */
const SECTION_ORDER = 160

/** Render guidance only while at least one probe tool is reachable. */
function visibleToolText(tools, toolNames, text) {
  if (tools === undefined) return () => text
  return (context) => {
    for (const toolName of toolNames) {
      try {
        if (tools.get(toolName, context.scope) !== undefined) return text
      } catch {
        return text
      }
    }
    return ''
  }
}

/**
 * Mount the probe surfaces.
 * @param ctx - host plugin context carrying webServer / tools / systemPrompt.
 * @param config - the profile row's config: `enabled`, `announceToAgent`.
 */
export function apply(ctx, config) {
  const resolved = config !== null && typeof config === 'object' ? config : {}
  if (resolved.enabled === false) return
  const announceToAgent = resolved.announceToAgent !== false

  const log = (level, message) => {
    try {
      const logger = ctx.logger
      if (logger !== undefined && typeof logger[level] === 'function') logger[level](`[dsh-probe] ${message}`)
    } catch {
      // A profile without a logger must not fail the probe.
    }
  }

  const store = new ProbeStore()
  const settings = store.getSettings()
  const metrics = new MetricsHub({ root: store.root, retentionDays: settings.retentionDays })
  const notifier = new WebhookNotifier({ store, log })
  const alerts = new AlertEngine({
    store,
    onAlert: (phase, alert) => {
      log(phase === 'open' ? 'warn' : 'info', `${phase}: ${alert.message}`)
      notifier.notify(phase, alert)
    },
  })
  const service = new ProbeService({ store, metrics, alerts, notifier, version: PANEL_VERSION, agentVersion: AGENT_VERSION })

  // The connection bridge resolves authentication through its calling fiber;
  // capture it in a scope that injects both halves before routes use it.
  const connection = captureConnection(ctx, 'dsh-probe: connection trust')

  // The agent sources live beside the plugin package (agent/), not inside it:
  // they are the "agent end" of the project and are served unchanged.
  const here = dirname(fileURLToPath(import.meta.url))
  const routes = makeRoutes({
    service,
    connection,
    agentPath: join(here, '..', 'agent', 'agent.mjs'),
    shellAgentPath: join(here, '..', 'agent', 'agent.sh'),
  })
  const tools = probeTools(service)

  ctx.effect(() => {
    const disposers = routes.map(route => ctx.webServer.register(route))
    return () => {
      for (const dispose of disposers) dispose()
    }
  }, 'dsh-probe: routes')

  ctx.effect(() => {
    const disposers = tools.map(tool => ctx.tools.register(tool))
    return () => {
      for (const dispose of disposers) dispose()
    }
  }, 'dsh-probe: tools')

  if (announceToAgent) {
    ctx.effect(() => ctx.systemPrompt.section({
      name: 'plugin:dsh-probe',
      order: SECTION_ORDER,
      text: visibleToolText(ctx.tools, PROBE_TOOL_NAMES, PROBE_GUIDANCE),
    }), 'dsh-probe: prompt section')
  }

  // The offline scan is the only timer the engine needs: metric rules are
  // evaluated on each report, silence cannot be.
  const scanTimer = setInterval(() => {
    try {
      service.scanOffline()
    } catch (error) {
      log('warn', `offline scan failed: ${error instanceof Error ? error.message : String(error)}`)
    }
  }, 5000)
  ctx.effect(() => () => clearInterval(scanTimer), 'dsh-probe: offline scan')

  // History trimming runs hourly; retention is a settings value, so the hub
  // keeps reading the current one.
  const trimTimer = setInterval(() => {
    try {
      metrics.trimAll()
    } catch {
      // Best effort: an unwritable history file never breaks the live view.
    }
  }, 60 * 60 * 1000)
  ctx.effect(() => () => clearInterval(trimTimer), 'dsh-probe: history trim')
}
