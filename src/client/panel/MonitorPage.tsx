/**
 * The monitoring wall — a direct port of the Komari Mikus index page.
 *
 * Class names, DOM order and nesting all come from upstream (`index.html` plus
 * `utils/ui/nodes-grid.js`), and the stylesheet is the upstream CSS re-rooted
 * under `[data-dsh-probe-view]`. That is deliberate: the moment these components
 * start inventing their own markup, the two drift apart. Anything extra the
 * probe needs (managing hosts, latency tasks, alerts, settings) lives in the
 * admin page instead of being bolted on here.
 */
import { useEffect, useMemo, useState } from 'react'
import type { ProbeHost, ProbeSnapshot } from '../api'
import type { ProbeKey } from '../locales'
import { bytes, durationShort, load, percent, rate, uptime as formatUptime } from './format'
import { tt } from './helpers'
import { formatOs } from './os-icon'
import { flagUrl, hasFlag } from './flag'
import { MASCOT } from '../theme/mikus'

/** One thing the wall needs beyond the raw snapshot. */
export interface MonitorHandlers {
  /** Open the admin page (the upstream `login-btn` slot). */
  onAdmin: () => void
  /** Refresh the snapshot. */
  onRefresh: () => void
  /** Open one host's detail view. */
  onOpenHost: (id: string) => void
  /** Light or dark, owned by the panel so the detail modal can match. */
  theme: 'light' | 'dark'
  /** Flip the theme. */
  onToggleTheme: () => void
}

/** Time-of-day greeting, matching the upstream thresholds. */
function greetingFor(hours: number): string {
  if (hours >= 5 && hours < 12) return tt('greeting.morning')
  if (hours >= 12 && hours < 18) return tt('greeting.afternoon')
  if (hours >= 18 && hours < 23) return tt('greeting.evening')
  return tt('greeting.night')
}

/** Usage level names used by the theme's `level-*` colour classes. */
function levelFor(value: number | undefined): 'normal' | 'warning' | 'danger' {
  if (value === undefined || !Number.isFinite(value)) return 'normal'
  if (value >= 85) return 'danger'
  if (value >= 60) return 'warning'
  return 'normal'
}

/** One metric row: label, bar, value — upstream `renderMetricBar`. */
function MetricBar({ label, value }: { label: string; value: number | undefined }) {
  const level = levelFor(value)
  const width = value === undefined ? 0 : Math.min(100, Math.max(0, value))
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className="metric-bar">
        <div className={`metric-bar-fill level-${level}`} style={{ width: `${width}%` }} />
      </div>
      <div className={`metric-value level-${level}`}>{percent(value)}</div>
    </div>
  )
}

/** Split an upstream-style tag list into text plus an optional colour suffix. */
function parseTag(tag: string): { text: string; className: string } {
  const match = /<(\w+)>$/.exec(tag.trim())
  if (match === null) return { text: tag.trim(), className: '' }
  return { text: tag.replace(/<\w+>$/, '').trim(), className: ` tag-${(match[1] ?? '').toLowerCase()}` }
}

/** One node card, mirroring `renderNodeCard`. */
function NodeCard({ host, onOpen }: { host: ProbeHost; onOpen: () => void }) {
  const current = host.current
  const isOnline = host.status === 'online'
  const os = current === null ? null : formatOs(current.os)
  const tags = host.tags.slice(0, 2).map(parseTag)
  const swap = current?.swapTotal ?? 0

  return (
    <div
      className={`node-card${isOnline ? '' : ' offline'}`}
      data-status={host.status}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpen() } }}
      style={{ cursor: 'pointer' }}
    >
      <div className="node-card-header">
        {hasFlag(host.regionCode)
          ? (
            <span
              className="node-card-flag"
              title={host.regionName}
              style={{ backgroundImage: `url("${flagUrl(host.regionCode)}")` }}
            />
          )
          : <span className="node-card-flag node-card-flag-placeholder"><span>?</span></span>}

        <div className="node-card-info">
          <div className="node-card-name">
            <span className={`node-status-dot${isOnline ? '' : ' offline'}`} />
            <span className="node-name-text">{host.name}</span>
          </div>
          <div className="node-card-subtitle">
            <span className="node-card-os">
              <span className={`os-icon os-icon-${os?.icon ?? 'unknown'}`} />
              {os?.name ?? '-'}
            </span>
            {tags.map(tag => (
              <span key={tag.text} className={`node-api-tag${tag.className}`}>{tag.text}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="node-card-metrics">
        <MetricBar label={tt('card.cpu')} value={current?.cpu} />
        <MetricBar label="RAM" value={current?.memPct} />
        <MetricBar label={tt('card.disk')} value={current?.diskPct} />
        {swap > 0
          ? <MetricBar label="Swap" value={current?.swapPct} />
          : (
            <div className="metric">
              <div className="metric-label">Load</div>
              <div className="metric-value">{load(current?.load ?? null)}</div>
            </div>
          )}
      </div>

      <div className="node-card-footer">
        <span className="node-info-row">
          <span className="node-uptime">{formatUptime(current?.uptime)}</span>
          {current !== null && <span className="node-uptime">{current.hostname}</span>}
        </span>
        <span className="node-network-row">
          <span className="node-traffic-tag traffic-tag-up" title="total upload">↑ {bytes(current?.totalTx)}</span>
          <span className="node-traffic-tag traffic-tag-down" title="total download">↓ {bytes(current?.totalRx)}</span>
          <span className="node-network-speed">
            <span className="network-dir"><span className="arrow-up">▲</span>{rate(current?.txRate)}</span>
            <span className="network-dir"><span className="arrow-down">▼</span>{rate(current?.rxRate)}</span>
          </span>
        </span>
      </div>
    </div>
  )
}

/**
 * One card of the table view, mirroring upstream `renderTableCard`.
 *
 * Upstream's "table" is a compact card list (`.table-cards > .table-card`), not
 * a `<table>`: a header with status, flag and name, then a metric strip with a
 * bar per percentage, then the tag row.
 */
function TableCard({ host, onOpen }: { host: ProbeHost; onOpen: () => void }) {
  const current = host.current
  const isOnline = host.status === 'online'
  const os = current === null ? null : formatOs(current.os)
  const tags = host.tags.slice(0, 3).map(parseTag)

  /** One percentage metric with its bar. */
  const metric = (label: string, value: number | undefined): React.ReactElement => {
    const level = levelFor(value)
    return (
      <div className="table-card-metric">
        <span className="table-card-metric-label">{label}</span>
        <span className={`table-card-metric-value level-${level}`}>{percent(value)}</span>
        <div className="table-card-metric-bar">
          <div
            className={`table-card-metric-fill level-${level}`}
            style={{ width: `${value === undefined ? 0 : Math.min(100, Math.max(0, value))}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`table-card${isOnline ? '' : ' offline'}`}
      data-status={host.status}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpen() } }}
      style={{ cursor: 'pointer' }}
    >
      <div className="table-card-header">
        <div className="table-card-name-wrap">
          <span className={`table-card-status${isOnline ? '' : ' offline'}`} />
          <span className="table-card-flag-wrap">
            {hasFlag(host.regionCode) && (
              <span
                className="table-card-flag"
                title={host.regionName}
                style={{ backgroundImage: `url("${flagUrl(host.regionCode)}")` }}
              />
            )}
          </span>
          <span className="table-card-name">{host.name}</span>
        </div>
        <div className="table-card-info">
          <span className="table-card-price">{host.regionName !== '' ? host.regionName : ''}</span>
        </div>
      </div>

      <div className="table-card-metrics">
        <div className="table-card-metric table-card-system">
          <span className="table-card-metric-label">{tt('table.os')}</span>
          <span className="table-card-metric-value">
            <span className={`os-icon os-icon-${os?.icon ?? 'unknown'}`} />
            {os?.name ?? '-'}
          </span>
        </div>
        {metric('CPU', current?.cpu)}
        {metric('RAM', current?.memPct)}
        {metric(tt('card.disk'), current?.diskPct)}
        <div className="table-card-metric">
          <span className="table-card-metric-label">{tt('card.upload')}</span>
          <span className="table-card-metric-value">{rate(current?.txRate)}</span>
        </div>
        <div className="table-card-metric">
          <span className="table-card-metric-label">{tt('card.download')}</span>
          <span className="table-card-metric-value">{rate(current?.rxRate)}</span>
        </div>
        {tags.length > 0 && (
          <div className="table-card-metric table-card-metric-tags">
            <div className="table-card-tags">
              {tags.map(tag => (
                <span key={tag.text} className={`table-card-tag${tag.className}`}>{tag.text}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/** The whole wall. */
export function MonitorPage({ snapshot, handlers }: { snapshot: ProbeSnapshot; handlers: MonitorHandlers }) {
  const [clock, setClock] = useState(() => new Date())
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('all')
  const [view, setView] = useState<'grid' | 'table'>('grid')


  useEffect(() => {
    const timer = setInterval(() => { setClock(new Date()) }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Every distinct tag becomes a group filter, the way upstream lists node groups.
  const groups = useMemo(() => {
    const seen = new Set<string>()
    for (const host of snapshot.hosts) for (const tag of host.tags) seen.add(parseTag(tag).text)
    return ['all', ...[...seen].sort()]
  }, [snapshot.hosts])

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return snapshot.hosts.filter(host => {
      if (group !== 'all' && !host.tags.some(tag => parseTag(tag).text === group)) return false
      if (needle === '') return true
      const haystack = [host.name, host.location, host.regionName, current(host)?.hostname ?? '', ...host.tags].join(' ').toLowerCase()
      return haystack.includes(needle)
    })
  }, [snapshot.hosts, query, group])

  const totals = useMemo(() => {
    let up = 0
    let down = 0
    for (const host of snapshot.hosts) {
      up += host.current?.totalTx ?? 0
      down += host.current?.totalRx ?? 0
    }
    return { up, down }
  }, [snapshot.hosts])

  const online = snapshot.counts.online
  const offline = snapshot.hosts.length - online

  return (
    <div className="probe-wall probe-theme" data-theme={handlers.theme}>
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <span className="site-name">{tt('page.title')}</span>
          </div>
        </div>
        <div className="header-center" />
        <div className="header-right">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder={tt('list.search')}
              autoComplete="off"
              value={query}
              onChange={event => { setQuery(event.target.value) }}
            />
          </div>
          <div className="view-toggle">
            <button
              type="button"
              className={`view-btn${view === 'grid' ? ' active' : ''}`}
              title={tt('view.cards')}
              onClick={() => { setView('grid') }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              type="button"
              className={`view-btn${view === 'table' ? ' active' : ''}`}
              title={tt('view.table')}
              onClick={() => { setView('table') }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
          <div className="header-right-end">
            <button
              type="button"
              className="theme-toggle"
              title={handlers.theme === 'dark' ? tt('theme.light') : tt('theme.dark')}
              onClick={handlers.onToggleTheme}
            >
              {handlers.theme === 'dark'
                ? (
                  <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )
                : (
                  <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
            </button>
            <button type="button" className="login-btn" title={tt('entry.settings')} onClick={handlers.onAdmin}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="welcome-section">
          <div className="welcome-decoration">
            <div className="deco-circle deco-1" />
            <div className="deco-circle deco-2" />
            <div className="deco-circle deco-3" />
            {Array.from({ length: 5 }, (_, index) => <div key={index} className="sakura-petal" />)}
          </div>
          <div className="welcome-content">
            <div className="welcome-greeting">
              <img className="greeting-icon" src={MASCOT} alt="" aria-hidden="true" />
              <div className="greeting-info">
                <span className="greeting-text">{greetingFor(clock.getHours())}</span>
                <span className="greeting-subtitle">{tt('wall.welcome')}</span>
              </div>
            </div>
            <div className="welcome-time">
              <span className="time-label">
                {clock.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
              </span>
              <span className="time-value">
                {String(clock.getHours()).padStart(2, '0')}:{String(clock.getMinutes()).padStart(2, '0')}:{String(clock.getSeconds()).padStart(2, '0')}
              </span>
              <span className="traffic-text">
                ↑ {bytes(totals.up)} / ↓ {bytes(totals.down)}
              </span>
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-label">{tt('summary.total')}</span>
            <span className="stat-value">{snapshot.hosts.length}</span>
          </div>
          <div className="stat-item online">
            <span className="stat-label">{tt('summary.online')}</span>
            <span className="stat-value">{online}</span>
          </div>
          <div className="stat-item offline">
            <span className="stat-label">{tt('summary.offline')}</span>
            <span className="stat-value">{offline}</span>
          </div>
          <div className="group-filter">
            {groups.map(name => (
              <button
                key={name}
                type="button"
                className={`filter-btn${group === name ? ' active' : ''}`}
                onClick={() => { setGroup(name) }}
              >
                {name === 'all' ? tt('list.filterAll') : name}
              </button>
            ))}
          </div>
        </div>

        {view === 'grid'
          ? (
            <div className="nodes-grid">
              {visible.map(host => (
                <NodeCard key={host.id} host={host} onOpen={() => { handlers.onOpenHost(host.id) }} />
              ))}
            </div>
          )
          : (
            <div className="nodes-table-container">
              <div id="nodesTableBody">
                <div className="table-cards">
                  {visible.map(host => (
                    <TableCard key={host.id} host={host} onOpen={() => { handlers.onOpenHost(host.id) }} />
                  ))}
                </div>
              </div>
            </div>
          )}

        {visible.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" /><line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <p className="empty-state-text">{tt('list.empty')}</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <span>Powered by DSH Probe</span>
        <span>Panel {snapshot.versions.panel} · Agent {snapshot.versions.agent}</span>
      </footer>
    </div>
  )
}

/** The current sample of one host, if it has reported. */
function current(host: ProbeHost) {
  return host.current
}
