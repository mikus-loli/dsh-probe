/**
 * The Probe panel: host cards with live gauges, a per-host trend view, an
 * alert list, and the alert/retention settings. Everything the panel shows
 * comes from /api/dsh-probe (the host half), refreshed on a five-second poll
 * that pauses while the tab is hidden.
 *
 * The page follows the host's own layout language: a compact header, a
 * segmented pill tab row, and bordered surfaces rather than a dense table, so
 * the same DOM reads correctly at phone width.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type {
  ProbeAlert,
  ProbeApi,
  ProbeHistory,
  ProbeHost,
  ProbeHostInput,
  ProbeDelivery,
  ProbeSample,
  ProbeSettings,
  ProbeSnapshot,
} from '../api'
import { ago, bytes, durationShort, load, percent, rate, uptime } from './format'
import { copyText, errorMessage, tt } from './helpers'
import type { ProbeKey } from '../locales'
import { Sparkline, TrendChart, type TrendPoint } from './Sparkline'
import css from './panel.module.css'

/** The panel's tab set. */
type Tab = 'overview' | 'alerts' | 'settings'

/** One open dialog. */
type DialogState =
  | { kind: 'host'; mode: 'add' | 'edit'; host?: ProbeHost }
  | { kind: 'install'; host: ProbeHost }

/** Gauge tone from a percentage. */
function toneFor(value: number | undefined): 'normal' | 'warn' | 'critical' {
  if (value === undefined || !Number.isFinite(value)) return 'normal'
  if (value >= 90) return 'critical'
  if (value >= 75) return 'warn'
  return 'normal'
}

/** Raw 1-minute load divided by the host's core count (the unit the alert rule uses). */
function perCoreLoad(sample: { load1?: number; cores?: number } | null | undefined): number | undefined {
  if (sample === null || sample === undefined || sample.load1 === undefined) return undefined
  return sample.load1 / Math.max(1, sample.cores ?? 1)
}

/** Localized host status label. */
function statusLabel(status: ProbeHost['status']): string {
  return tt(`status.${status}` as ProbeKey)
}

/** Localized alert rule label. */
function ruleLabel(rule: ProbeAlert['rule']): string {
  return tt(`alerts.rule.${rule}` as ProbeKey)
}

/** Escape one systemd Environment value (quoted form). */
function envValue(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

/** Alert duration text. */
function alertDuration(alert: ProbeAlert): string {
  const seconds = alert.endedAt === null
    ? Math.max(0, Math.round((Date.now() - alert.startedAt) / 1000))
    : (alert.durationSec ?? Math.max(0, Math.round((alert.endedAt - alert.startedAt) / 1000)))
  return durationShort(seconds)
}

/** The panel page. */
export function ProbePanel({ api }: { api: ProbeApi }) {
  const [snapshot, setSnapshot] = useState<ProbeSnapshot | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>('overview')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [dialog, setDialog] = useState<DialogState | null>(null)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'online' | 'offline' | 'waiting'>('all')
  const [view, setView] = useState<'cards' | 'table'>(() => {
    try {
      return localStorage.getItem('dsh-probe.view') === 'table' ? 'table' : 'cards'
    } catch {
      return 'cards'
    }
  })
  const bodyRef = useRef<HTMLDivElement | null>(null)

  // A tab switch or a different host opens at the top, not at the old scroll.
  useEffect(() => { bodyRef.current?.scrollTo({ top: 0 }) }, [tab, selectedId])

  const load = useCallback(async (quiet: boolean) => {
    try {
      const next = await api.snapshot()
      setSnapshot(next)
      setError(null)
    } catch (caught) {
      if (!quiet) setError(errorMessage(caught))
    }
  }, [api])

  useEffect(() => { void load(false) }, [load])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!document.hidden) void load(true)
    }, 5000)
    const onVisibility = (): void => {
      if (!document.hidden) void load(true)
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [load])

  const hosts = snapshot?.hosts ?? []
  const selected = selectedId === null ? undefined : hosts.find(host => host.id === selectedId)
  const activeAlerts = snapshot?.alerts.active ?? []
  const onlineCount = hosts.filter(host => host.status === 'online' || host.status === 'stale').length

  const visibleHosts = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return hosts.filter(host => {
      if (needle !== '') {
        const haystack = [host.name, host.location, host.current?.hostname ?? '', ...host.tags].join(' ').toLowerCase()
        if (!haystack.includes(needle)) return false
      }
      if (filter === 'online') return host.status === 'online' || host.status === 'stale'
      if (filter === 'offline') return host.status === 'offline'
      if (filter === 'waiting') return host.status === 'waiting' || host.status === 'disabled'
      return true
    })
  }, [hosts, query, filter])

  const changeView = (next: 'cards' | 'table'): void => {
    setView(next)
    try { localStorage.setItem('dsh-probe.view', next) } catch { /* ignore */ }
  }

  const replaceHost = (host: ProbeHost): void => {
    setSnapshot(current => {
      if (current === null) return current
      const exists = current.hosts.some(candidate => candidate.id === host.id)
      const nextHosts = exists
        ? current.hosts.map(candidate => candidate.id === host.id ? host : candidate)
        : [...current.hosts, host]
      return { ...current, hosts: nextHosts }
    })
  }

  const removeHost = (id: string): void => {
    setSnapshot(current => current === null ? current : { ...current, hosts: current.hosts.filter(host => host.id !== id) })
    setSelectedId(current => current === id ? null : current)
  }

  return (
    <div className={css.page} data-dsh-probe-view="">
      <header className={css.header}>
        <div className={css.headerText}>
          <h1 className={css.title}>{tt('page.title')}</h1>
          <p className={css.subtitle}>
            {snapshot === null
              ? tt('page.loading')
              : hosts.length === 0
                ? tt('page.subtitleEmpty')
                : tt('page.subtitle', { total: hosts.length, online: snapshot.counts.online })}
          </p>
        </div>
        <div className={css.headerActions}>
          <button type="button" className={css.ghostButton} onClick={() => void load(false)}>
            {tt('action.refresh')}
          </button>
          <button type="button" className={css.primaryButton} onClick={() => setDialog({ kind: 'host', mode: 'add' })}>
            <span aria-hidden="true">+</span> {tt('action.add')}
          </button>
        </div>
      </header>

      {error !== null && <div className={css.errorBar}>{tt('error.load', { message: error })}</div>}

      <nav className={css.tabs} role="tablist">
        {(['overview', 'alerts', 'settings'] as Tab[]).map(item => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={tab === item}
            className={css.tab}
            data-active={tab === item ? 'true' : undefined}
            onClick={() => {
              setSelectedId(null)
              setTab(item)
            }}
          >
            {tt(`tab.${item}`)}
            {item === 'alerts' && activeAlerts.length > 0 && <span className={css.tabCount}>{activeAlerts.length}</span>}
          </button>
        ))}
      </nav>

      <div className={css.body} ref={bodyRef}>

      {tab === 'overview' && snapshot === null && <LoadingState />}

      {tab === 'overview' && selected !== undefined && (
        <HostDetail
          key={selected.id}
          api={api}
          host={selected}
          onBack={() => setSelectedId(null)}
          onEdit={() => setDialog({ kind: 'host', mode: 'edit', host: selected })}
          onInstall={() => setDialog({ kind: 'install', host: selected })}
          onDeleted={() => removeHost(selected.id)}
          onHostChange={replaceHost}
        />
      )}

      {tab === 'overview' && snapshot !== null && selected === undefined && (
        <>
          {activeAlerts.length > 0 && (
            <button type="button" className={css.banner} onClick={() => setTab('alerts')}>
              <span className={css.bannerIcon} aria-hidden="true">!</span>
              <span className={css.bannerText}>
                {activeAlerts.length === 1
                  ? tt('alert.bannerOne')
                  : tt('alert.banner', { count: activeAlerts.length })}
                <span className={css.bannerList}>
                  {tt('alert.bannerList', { names: activeAlerts.slice(0, 2).map(alert => alert.hostName).join(', ') })}
                </span>
              </span>
              <span className={css.bannerArrow} aria-hidden="true">›</span>
            </button>
          )}
          {hosts.length === 0
            ? <EmptyState onAdd={() => setDialog({ kind: 'host', mode: 'add' })} />
            : (
              <>
                <SummaryStrip hosts={hosts} online={onlineCount} activeAlerts={activeAlerts.length} />
                <div className={css.listBar}>
                  <div className={css.searchWrap}>
                    <span className={css.searchGlyph} aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <circle cx="7" cy="7" r="4.4" />
                        <path d="M10.4 10.4 14 14" />
                      </svg>
                    </span>
                    <input
                      className={css.searchInput}
                      value={query}
                      placeholder={tt('list.search')}
                      onChange={event => setQuery(event.target.value)}
                    />
                    {query !== '' && (
                      <button type="button" className={css.searchClear} aria-label={tt('list.clear')} onClick={() => setQuery('')}>×</button>
                    )}
                  </div>
                  <div className={css.filterPills} role="group">
                    {([
                      ['all', tt('list.filterAll')],
                      ['online', tt('list.filterOnline')],
                      ['offline', tt('list.filterOffline')],
                      ['waiting', tt('list.filterWaiting')],
                    ] as Array<['all' | 'online' | 'offline' | 'waiting', string]>).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        className={css.pill}
                        data-active={filter === key ? 'true' : undefined}
                        aria-pressed={filter === key}
                        onClick={() => setFilter(key)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <div className={css.viewToggle} role="group">
                    <button
                      type="button"
                      className={css.viewButton}
                      data-active={view === 'cards' ? 'true' : undefined}
                      aria-label={tt('view.cards')}
                      title={tt('view.cards')}
                      onClick={() => changeView('cards')}
                    >
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4">
                        <rect x="2" y="2" width="5" height="5" rx="1" />
                        <rect x="9" y="2" width="5" height="5" rx="1" />
                        <rect x="2" y="9" width="5" height="5" rx="1" />
                        <rect x="9" y="9" width="5" height="5" rx="1" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className={css.viewButton}
                      data-active={view === 'table' ? 'true' : undefined}
                      aria-label={tt('view.table')}
                      title={tt('view.table')}
                      onClick={() => changeView('table')}
                    >
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                        <path d="M2 4h12M2 8h12M2 12h12" />
                      </svg>
                    </button>
                  </div>
                </div>
                {visibleHosts.length === 0
                  ? (
                    <div className={css.quietState}>
                      <span>{tt('list.empty')}</span>
                      <button type="button" className={css.linkButton} onClick={() => { setQuery(''); setFilter('all') }}>
                        {tt('list.clear')}
                      </button>
                    </div>
                  )
                  : view === 'table'
                    ? <HostTable hosts={visibleHosts} onOpen={id => setSelectedId(id)} />
                    : (
                      <div className={css.grid}>
                        {visibleHosts.map(host => (
                          <HostCard
                            key={host.id}
                            host={host}
                            onOpen={() => setSelectedId(host.id)}
                          />
                        ))}
                      </div>
                    )}
              </>
            )}
        </>
      )}

      {tab === 'alerts' && (snapshot === null
        ? <LoadingState />
        : (
          <AlertsTab
            alerts={snapshot.alerts}
            api={api}
            onChanged={() => void load(true)}
          />
        ))}

      {tab === 'settings' && (snapshot === null
        ? <LoadingState />
        : (
          <SettingsTab
            settings={snapshot.settings}
            versions={snapshot.versions}
            api={api}
            onSaved={next => setSnapshot(current => current === null ? current : { ...current, settings: next })}
          />
        ))}

      </div>


      {dialog !== null && dialog.kind === 'host' && (
        <HostDialog
          mode={dialog.mode}
          host={dialog.host}
          api={api}
          onClose={() => setDialog(null)}
          onSaved={host => {
            replaceHost(host)
            setSelectedId(host.id)
            setDialog(dialog.mode === 'add' ? { kind: 'install', host } : null)
            void load(true)
          }}
        />
      )}

      {dialog !== null && dialog.kind === 'install' && (
        <InstallDialog
          host={hosts.find(host => host.id === dialog.host.id) ?? dialog.host}
          settings={snapshot?.settings}
          latestAgent={snapshot?.versions.agent ?? ''}
          api={api}
          onClose={() => setDialog(null)}
          onHostChange={host => {
            replaceHost(host)
            setDialog({ kind: 'install', host })
          }}
        />
      )}
    </div>
  )
}

/** Four compact figures over the whole inventory. */
function SummaryStrip({ hosts, online, activeAlerts }: { hosts: ProbeHost[]; online: number; activeAlerts: number }) {
  const samples = hosts.map(host => host.current).filter((sample): sample is ProbeSample => sample !== null)
  const average = (pick: (sample: ProbeSample) => number): number | undefined => samples.length === 0
    ? undefined
    : samples.reduce((sum, sample) => sum + pick(sample), 0) / samples.length
  const items: Array<{ label: string; value: string; tone?: 'ok' | 'warn' }> = [
    { label: tt('stats.online'), value: `${online} / ${hosts.length}`, tone: online === hosts.length ? 'ok' : undefined },
    { label: tt('stats.alerts'), value: String(activeAlerts), tone: activeAlerts > 0 ? 'warn' : undefined },
    { label: tt('stats.cpu'), value: percent(average(sample => sample.cpu)) },
    { label: tt('stats.mem'), value: percent(average(sample => sample.memPct)) },
  ]
  return (
    <div className={css.stats}>
      {items.map(item => (
        <div key={item.label} className={css.stat} data-tone={item.tone}>
          <span className={css.statLabel}>{item.label}</span>
          <span className={css.statValue}>{item.value}</span>
        </div>
      ))}
    </div>
  )
}

/** Sort keys the table understands. */
type SortKey = 'name' | 'cpu' | 'mem' | 'disk' | 'seen'

/** The table view: the same hosts as one scannable list. */
function HostTable({ hosts, onOpen }: { hosts: ProbeHost[]; onOpen: (id: string) => void }) {
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: 'name', dir: 1 })
  const rows = useMemo(() => {
    const value = (host: ProbeHost): string | number => {
      if (sort.key === 'name') return host.name.toLowerCase()
      if (sort.key === 'seen') return host.lastSeen
      if (sort.key === 'cpu') return host.current?.cpu ?? -1
      if (sort.key === 'mem') return host.current?.memPct ?? -1
      return host.current?.diskPct ?? -1
    }
    return [...hosts].sort((left, right) => {
      const a = value(left)
      const b = value(right)
      if (a < b) return -sort.dir
      if (a > b) return sort.dir
      return 0
    })
  }, [hosts, sort])

  const header = (key: SortKey, label: string): React.ReactElement => (
    <th>
      <button
        type="button"
        className={css.sortButton}
        data-active={sort.key === key ? 'true' : undefined}
        onClick={() => setSort(current => ({ key, dir: current.key === key && current.dir === 1 ? -1 : 1 }))}
      >
        {label}
        <span aria-hidden="true">{sort.key === key ? (sort.dir === 1 ? '↑' : '↓') : ''}</span>
      </button>
    </th>
  )

  return (
    <div className={css.tableWrap}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>{tt('table.status')}</th>
            {header('name', tt('table.name'))}
            {header('cpu', tt('table.cpu'))}
            {header('mem', tt('table.mem'))}
            {header('disk', tt('table.disk'))}
            <th>{tt('table.load')}</th>
            <th className={css.colNet}>{tt('table.net')}</th>
            {header('seen', tt('table.seen'))}
            <th aria-hidden="true" />
          </tr>
        </thead>
        <tbody>
          {rows.map(host => (
            <tr key={host.id} className={css.tableRow} onClick={() => onOpen(host.id)}>
              <td>
                <span className={css.statusCell}>
                  <span className={css.dot} data-status={host.status} aria-hidden="true" />
                  {tt(`status.${host.status}.short` as ProbeKey)}
                </span>
              </td>
              <td>
                <div className={css.nameCell}>
                  <span className={css.tableName}>{host.name}</span>
                  {host.muted && <span className={css.cardStatus} data-status="muted">{tt('status.muted')}</span>}
                  {host.agentOutdated && <span className={css.cardStatus} data-status="outdated">{tt('host.outdated')}</span>}
                  {host.tags.slice(0, 2).map(tag => <span key={tag} className={css.chip}>{tag}</span>)}
                </div>
              </td>
              <td data-tone={toneFor(host.current?.cpu)}>{percent(host.current?.cpu)}</td>
              <td data-tone={toneFor(host.current?.memPct)}>{percent(host.current?.memPct)}</td>
              <td data-tone={toneFor(host.current?.diskPct)}>{percent(host.current?.diskPct)}</td>
              <td>{load(perCoreLoad(host.current))}</td>
              <td className={`${css.colNet} ${css.netCell}`}>
                <span>↓ {rate(host.current?.rxRate)}</span>
                <span>↑ {rate(host.current?.txRate)}</span>
              </td>
              <td className={css.seenCell}>
                {host.lastSeen === 0 ? tt('card.never') : ago(host.lastSeen)}
              </td>
              <td className={css.rowChevron}>
                <button
                  type="button"
                  className={css.rowOpen}
                  aria-label={tt('table.open')}
                  onClick={event => { event.stopPropagation(); onOpen(host.id) }}
                >
                  ›
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Skeleton shown until the first snapshot arrives. */
function LoadingState() {
  return (
    <div className={css.grid} aria-busy="true" aria-label={tt('page.loading')}>
      {[0, 1, 2].map(index => (
        <div key={index} className={css.skeletonCard} aria-hidden="true">
          <span className={css.skeletonLine} data-width="short" />
          <span className={css.skeletonLine} />
          <span className={css.skeletonLine} data-width="tall" />
        </div>
      ))}
    </div>
  )
}

/** Empty inventory: what to do next, in three steps. */
function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className={css.empty}>
      <div className={css.emptyGlyph} aria-hidden="true">
        <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <rect x="5" y="9" width="38" height="13" rx="2.5" />
          <rect x="5" y="27" width="38" height="13" rx="2.5" />
          <path d="M11 15.5h6M11 33.5h6" />
          <circle cx="37.5" cy="15.5" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="37.5" cy="33.5" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <h2 className={css.emptyTitle}>{tt('empty.title')}</h2>
      <p className={css.emptyText}>{tt('empty.desc')}</p>
      <button type="button" className={css.primaryButton} onClick={onAdd}>{tt('empty.action')}</button>
    </div>
  )
}

/** One host card. */
function HostCard({ host, onOpen }: { host: ProbeHost; onOpen: () => void }) {
  const current = host.current
  const tags = host.tags
  return (
    <div
      className={css.card}
      data-status={host.status}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen()
        }
      }}
    >
      <div className={css.cardTop}>
        <span className={css.dot} data-status={host.status} aria-hidden="true" />
        <span className={css.hostName}>{host.name}</span>
        {host.status !== 'online' && (
          <span className={css.cardStatus} data-status={host.status}>
            {tt(`status.${host.status}.short` as ProbeKey)}
          </span>
        )}
        {host.muted && <span className={css.cardStatus} data-status="muted">{tt('status.muted')}</span>}
        {host.alerts.active.length > 0 && (
          <span className={css.alertChip}>
            {host.alerts.active.length === 1
              ? tt('card.alertOne')
              : tt('card.alerts', { count: host.alerts.active.length })}
          </span>
        )}
        <span className={css.cardAge}>
          {host.lastSeen === 0 ? tt('card.never') : tt('card.seen', { age: ago(host.lastSeen) })}
        </span>
      </div>

      <div className={css.cardMeta}>
        <span className={css.metaText}>
          {current !== null && current.hostname !== ''
            ? `${current.hostname} · ${current.os}`
            : host.location !== '' ? host.location : tt('card.noData')}
        </span>
        {(tags.length > 0 || host.agentOutdated) && (
          <span className={css.chipRow}>
            {host.agentOutdated && (
              <span className={css.cardStatus} data-status="outdated">{tt('host.outdated')}</span>
            )}
            {tags.slice(0, 3).map(tag => <span key={tag} className={css.chip}>{tag}</span>)}
          </span>
        )}
      </div>

      <div className={css.gaugeRow}>
        <Gauge label={tt('card.cpu')} value={current?.cpu} />
        <Gauge label={tt('card.mem')} value={current?.memPct} />
        <Gauge label={tt('card.disk')} value={current?.diskPct} />
      </div>

      <Sparkline values={host.spark?.cpu ?? []} tone={toneFor(current?.cpu)} />

      <div className={css.cardFoot}>
        <span className={css.footItem}>
          <span className={css.footLabel}>{tt('card.loadPerCore')}</span>
          <span className={css.footValue}>{load(perCoreLoad(current))}</span>
        </span>
        <span className={css.footItem}>
          <span className={css.footLabel}>↓</span>
          <span className={css.footValue}>{rate(current?.rxRate)}</span>
        </span>
        <span className={css.footItem}>
          <span className={css.footLabel}>↑</span>
          <span className={css.footValue}>{rate(current?.txRate)}</span>
        </span>
        <span className={css.footItem}>
          <span className={css.footLabel}>{tt('card.uptime')}</span>
          <span className={css.footValue}>{uptime(current?.uptime)}</span>
        </span>
      </div>
    </div>
  )
}

/** One labelled percentage bar. */
function Gauge({ label, value }: { label: string; value: number | undefined }) {
  const tone = toneFor(value)
  return (
    <div className={css.gauge} data-tone={tone}>
      <div className={css.gaugeHead}>
        <span className={css.gaugeLabel}>{label}</span>
        <span className={css.gaugeValue}>{percent(value)}</span>
      </div>
      <span className={css.gaugeTrack}>
        <span className={css.gaugeFill} style={{ width: `${Math.min(100, Math.max(0, value ?? 0))}%` }} />
      </span>
    </div>
  )
}

/** One host's detail page. */
function HostDetail({ api, host, onBack, onEdit, onInstall, onDeleted, onHostChange }: {
  api: ProbeApi
  host: ProbeHost
  onBack: () => void
  onEdit: () => void
  onInstall: () => void
  onDeleted: () => void
  onHostChange: (host: ProbeHost) => void
}) {
  const [range, setRange] = useState<'1h' | '24h' | '7d'>('1h')
  const [history, setHistory] = useState<ProbeHistory | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [historyError, setHistoryError] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [muteBusy, setMuteBusy] = useState(false)
  const sequence = useRef(0)

  // One fetch path for the first load and the retry button; the sequence guard
  // drops a response from a range the user already left.
  const loadHistory = useCallback((nextRange: '1h' | '24h' | '7d') => {
    const id = ++sequence.current
    setLoading(true)
    setHistoryError(null)
    setHistory(null)
    api.history(host.id, nextRange)
      .then(next => {
        if (id === sequence.current) setHistory(next)
      })
      .catch(caught => {
        if (id === sequence.current) setHistoryError(errorMessage(caught))
      })
      .finally(() => {
        if (id === sequence.current) setLoading(false)
      })
  }, [api, host.id])

  useEffect(() => { loadHistory(range) }, [loadHistory, range])

  // Refresh the chart on the same cadence as the cards while the page is open.
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden) return
      const id = ++sequence.current
      api.history(host.id, range)
        .then(next => {
          if (id !== sequence.current) return
          setHistory(next)
          setHistoryError(null)
        })
        .catch(caught => {
          if (id === sequence.current) setHistoryError(errorMessage(caught))
        })
    }, 15000)
    return () => clearInterval(timer)
  }, [api, host.id, range])

  const current = host.current
  const points: TrendPoint[] = history?.points ?? []
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (confirmTimer.current !== null) clearTimeout(confirmTimer.current) }, [])

  const toggleMute = (): void => {
    setMuteBusy(true)
    api.setMute(host.id, host.muted ? 0 : 60)
      .then(next => onHostChange(next))
      .catch(caught => setError(errorMessage(caught)))
      .finally(() => setMuteBusy(false))
  }

  const remove = (): void => {
    if (!confirmDelete) {
      setConfirmDelete(true)
      confirmTimer.current = setTimeout(() => setConfirmDelete(false), 4000)
      return
    }
    api.deleteHost(host.id).then(() => onDeleted()).catch(caught => setError(errorMessage(caught)))
  }

  return (
    <div className={css.detail}>
      <div className={css.detailHeader}>
        <button type="button" className={css.backButton} onClick={onBack}>
          <span aria-hidden="true">‹</span> {tt('action.back')}
        </button>
        <div className={css.detailTitleRow}>
          <span className={css.dot} data-status={host.status} aria-hidden="true" />
          <h2 className={css.detailTitle}>{host.name}</h2>
          <span className={css.statusChip} data-status={host.status}>{statusLabel(host.status)}</span>
          {host.muted && <span className={css.statusChip} data-status="muted">{tt('detail.mutedChip')}</span>}
          {host.tags.map(tag => <span key={tag} className={css.chip}>{tag}</span>)}
        </div>
        <div className={css.detailActions}>
          <button type="button" className={css.ghostButton} onClick={onEdit}>{tt('action.edit')}</button>
          <button type="button" className={css.ghostButton} disabled={muteBusy} onClick={toggleMute}>
            {host.muted ? tt('detail.unmute') : tt('detail.mute')}
          </button>
          <button type="button" className={css.ghostButton} onClick={onInstall}>{tt('detail.install')}</button>
          <button type="button" className={css.dangerGhost} onClick={remove} data-confirm={confirmDelete ? 'true' : undefined}>
            {confirmDelete ? tt('action.deleteConfirm') : tt('action.delete')}
          </button>
        </div>
      </div>

      {error !== null && <div className={css.errorBar} role="alert">{tt('error.action', { message: error })}</div>}

      {(host.location !== '' || host.note !== '') && (
        <p className={css.detailMeta}>
          {host.location}
          {host.location !== '' && host.note !== '' ? ' · ' : ''}
          {host.note}
        </p>
      )}

      {current === null && (
        <div className={css.waitingNote}>
          <span>{tt('empty.waiting')}</span>
          <button type="button" className={css.ghostButton} onClick={onInstall}>{tt('detail.install')}</button>
        </div>
      )}

      <div className={css.tiles}>
        <Tile label={tt('detail.cpu')} value={percent(current?.cpu)} sub={current === null ? undefined : `${current.cores} ${tt('detail.cores')}`} />
        <Tile label={tt('detail.mem')} value={percent(current?.memPct)} sub={current === null ? undefined : `${bytes(current.memUsed)} / ${bytes(current.memTotal)}`} />
        <Tile label={tt('detail.swap')} value={percent(current?.swapPct)} sub={current === null ? undefined : `${bytes(current.swapUsed)} / ${bytes(current.swapTotal)}`} />
        <Tile label={tt('detail.disk')} value={percent(current?.diskPct)} sub={current === null ? undefined : `${bytes(current.diskUsed)} / ${bytes(current.diskTotal)}`} />
        <Tile
          label={tt('card.loadPerCore')}
          value={load(perCoreLoad(current))}
          sub={current === null ? undefined : `${load(current.load5 / Math.max(1, current.cores))} / ${load(current.load15 / Math.max(1, current.cores))}`}
        />
        <Tile label={tt('detail.net')} value={`↓ ${rate(current?.rxRate)}`} sub={`↑ ${rate(current?.txRate)}`} />
        <Tile label={tt('detail.uptime')} value={uptime(current?.uptime)} sub={host.lastSeen === 0 ? tt('card.never') : ago(host.lastSeen)} />
        <Tile label={tt('detail.os')} value={current?.os ?? '—'} sub={current === null ? undefined : `${current.arch} · ${current.kernel}`} />
      </div>

      <TrendChart
        points={points}
        range={range}
        onRange={setRange}
        loading={loading}
        error={historyError ?? undefined}
        onRetry={() => loadHistory(range)}
      />

      <div className={css.section}>
        <div className={css.sectionHeader}>
          <span className={css.sectionTitle}>{tt('detail.alerts')}</span>
          {host.alerts.active.length === 0 && host.alerts.recent.length === 0 && (
            <span className={css.sectionHint}>{tt('detail.noAlerts')}</span>
          )}
          {host.alerts.active.length > 0 && (
            <span className={css.sectionHint}>{tt('alerts.activeCount', { count: host.alerts.active.length })}</span>
          )}
        </div>
        {host.alerts.active.length === 0 && host.alerts.recent.length === 0 && (
          <p className={css.muted}>{tt('alerts.recentNone')}</p>
        )}
        {(host.alerts.active.length > 0 ? host.alerts.active : []).map(alert => (
          <AlertRow key={alert.id} alert={alert} active />
        ))}
        {host.alerts.active.length === 0 && host.alerts.recent.slice(0, 5).map(alert => (
          <AlertRow key={alert.id} alert={alert} active={false} />
        ))}
      </div>

      <div className={css.section}>
        <div className={css.sectionHeader}>
          <span className={css.sectionTitle}>{tt('detail.install')}</span>
          <span className={css.sectionHint}>
            {tt('detail.agent')}{current === null ? '' : ` ${current.agentVersion}`}
            {host.agentOutdated && (
              <span className={css.outdatedMark}> {tt('host.outdated')}</span>
            )}
            {current !== null && current.cpuModel !== '' ? ` · ${current.cpuModel}` : ''}
          </span>
        </div>
        <div className={css.installSummary}>
          <TokenPill host={host} api={api} onHostChange={onHostChange} />
          <button type="button" className={css.primaryButton} onClick={onInstall}>{tt('install.open')}</button>
        </div>
      </div>
    </div>
  )
}

/** One metric tile. */
function Tile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className={css.tile}>
      <span className={css.tileLabel}>{label}</span>
      <span className={css.tileValue}>{value}</span>
      {sub !== undefined && <span className={css.tileSub}>{sub}</span>}
    </div>
  )
}

/** One alert row. */
function AlertRow({ alert, active }: { alert: ProbeAlert; active: boolean }) {
  return (
    <div className={css.alertRow} data-active={active ? 'true' : undefined}>
      <span className={css.alertDot} data-active={active ? 'true' : undefined} aria-hidden="true" />
      <div className={css.alertBody}>
        <div className={css.alertTitle}>
          <strong>{alert.hostName}</strong>
          <span className={css.alertRule}>{ruleLabel(alert.rule)}</span>
          <span className={css.alertValue}>
            {alert.rule === 'offline'
              ? tt('alerts.silent', { value: Math.round(alert.value), threshold: Math.round(alert.threshold) })
              : `${Math.round(alert.value * 10) / 10}${alert.unit === '%' ? '%' : '×'}`}
            {alert.rule !== 'offline' && (
              <span className={css.muted}> / {alert.threshold}{alert.unit === '%' ? '%' : '×'}</span>
            )}
          </span>
        </div>
        <div className={css.alertTime}>
          {active
            ? tt('alerts.ending', { duration: alertDuration(alert) })
            : tt('alerts.ended', { duration: alertDuration(alert), ago: ago(alert.endedAt ?? alert.startedAt) })}
        </div>
      </div>
    </div>
  )
}

/** The alerts tab. */
function AlertsTab({ alerts, api, onChanged }: {
  alerts: ProbeSnapshot['alerts']
  api: ProbeApi
  onChanged: () => void
}) {
  const [confirmClear, setConfirmClear] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current !== null) clearTimeout(timer.current) }, [])

  const clear = (): void => {
    if (!confirmClear) {
      setConfirmClear(true)
      timer.current = setTimeout(() => setConfirmClear(false), 4000)
      return
    }
    api.clearRecentAlerts().then(() => onChanged()).catch(caught => setError(errorMessage(caught)))
  }

  return (
    <div className={css.section}>
      {error !== null && <div className={css.errorBar}>{tt('error.action', { message: error })}</div>}
      <div className={css.sectionHeader}>
        <span className={css.sectionTitle}>{tt('alerts.active')}</span>
        <span className={css.sectionHint}>{alerts.active.length === 0 ? tt('alerts.activeNone') : String(alerts.active.length)}</span>
      </div>
      {alerts.active.length === 0
        ? <div className={css.quietState}>{tt('alerts.activeNone')}</div>
        : alerts.active.map(alert => <AlertRow key={alert.id} alert={alert} active />)}

      <div className={css.sectionHeader}>
        <span className={css.sectionTitle}>{tt('alerts.recent')}</span>
        {alerts.recent.length > 0 && (
          <button type="button" className={css.ghostButton} data-confirm={confirmClear ? 'true' : undefined} onClick={clear}>
            {confirmClear ? tt('action.clearConfirm') : tt('action.clearRecent')}
          </button>
        )}
      </div>
      {alerts.recent.length === 0
        ? <div className={css.quietState}>{tt('alerts.recentNone')}</div>
        : alerts.recent.map(alert => <AlertRow key={alert.id} alert={alert} active={false} />)}
    </div>
  )
}

/** The settings tab. */
/** Fill fields a host running an older bundle may not send yet. */
function withSettingsDefaults(settings: ProbeSettings | undefined): ProbeSettings | undefined {
  if (settings === undefined) return undefined
  return {
    ...settings,
    notify: settings.notify ?? { enabled: false, url: '', onResolve: true },
  }
}

function SettingsTab({ settings, api, versions, onSaved }: {
  settings: ProbeSettings | undefined
  api: ProbeApi
  versions: { panel: string; agent: string } | undefined
  onSaved: (settings: ProbeSettings) => void
}) {
  const [draft, setDraft] = useState<ProbeSettings | undefined>(withSettingsDefaults(settings))
  const [dirty, setDirty] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<ProbeDelivery | null>(null)
  const savedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // A poll must not overwrite values the user is editing; only an untouched
  // draft follows the snapshot, and Save clears the flag.
  useEffect(() => { if (!dirty) setDraft(withSettingsDefaults(settings)) }, [settings, dirty])
  useEffect(() => () => { if (savedTimer.current !== null) clearTimeout(savedTimer.current) }, [])

  if (draft === undefined) {
    return <div className={css.section}><p className={css.muted}>{tt('chart.loading')}</p></div>
  }

  const updateRule = (key: keyof ProbeSettings['rules'], field: 'enabled' | 'threshold' | 'holdSec', value: boolean | number): void => {
    setDirty(true)
    setDraft(current => {
      if (current === undefined) return current
      const rules = { ...current.rules } as ProbeSettings['rules']
      const rule = { ...(rules[key] as Record<string, unknown>) }
      rule[field] = value
      rules[key] = rule as never
      return { ...current, rules }
    })
  }

  const updateNotify = (patch: Partial<ProbeSettings['notify']>): void => {
    setDirty(true)
    setDraft(current => current === undefined ? current : ({ ...current, notify: { ...current.notify, ...patch } }))
  }

  const urlValid = /^https?:\/\/\S+$/.test(draft.notify.url.trim())

  // The test must use the values on screen, so save the notify block first and
  // then ask the host to deliver one payload.
  const runTest = (): void => {
    setTesting(true)
    setTestResult(null)
    api.updateSettings({ notify: draft.notify })
      .then(() => api.testNotify())
      .then(result => setTestResult(result))
      .catch(caught => setTestResult({ ok: false, at: Date.now(), error: errorMessage(caught) }))
      .finally(() => setTesting(false))
  }

  const save = (): void => {
    setSaving(true)
    setError(null)
    api.updateSettings({
      rules: draft.rules,
      retentionDays: draft.retentionDays,
      reportIntervalSec: draft.reportIntervalSec,
      notify: draft.notify,
    })
      .then(next => {
        setDraft(next)
        setDirty(false)
        onSaved(next)
        setSaved(true)
        if (savedTimer.current !== null) clearTimeout(savedTimer.current)
        savedTimer.current = setTimeout(() => setSaved(false), 2500)
      })
      .catch(caught => setError(errorMessage(caught)))
      .finally(() => setSaving(false))
  }

  const ruleRows: Array<{ key: 'cpu' | 'memory' | 'disk' | 'load'; label: string; unit: string; step: number }> = [
    { key: 'cpu', label: tt('settings.ruleCpu'), unit: '%', step: 5 },
    { key: 'memory', label: tt('settings.ruleMemory'), unit: '%', step: 5 },
    { key: 'disk', label: tt('settings.ruleDisk'), unit: '%', step: 5 },
    { key: 'load', label: tt('settings.ruleLoad'), unit: '×', step: 0.5 },
  ]

  // The number inputs report 0 for an empty field; refuse to save that instead
  // of silently writing a threshold the user never chose.
  const invalid = ruleRows.some(row => {
    const rule = draft.rules[row.key]
    return !(rule.threshold >= 1) || !(rule.holdSec >= 0)
  }) || !(draft.rules.offline.holdSec >= 1) || !(draft.reportIntervalSec >= 1)
    || (draft.notify.enabled && !urlValid)

  return (
    <div className={css.section}>
      {error !== null && <div className={css.errorBar}>{tt('error.action', { message: error })}</div>}
      <div className={css.sectionHeader}>
        <span className={css.sectionTitle}>{tt('settings.title')}</span>
        <span className={css.sectionHint}>{tt('settings.desc')}</span>
      </div>

      <div className={css.settingsGrid}>
        {ruleRows.map(row => {
          const rule = draft.rules[row.key]
          return (
            <div key={row.key} className={css.settingsRow} data-disabled={rule.enabled ? undefined : 'true'}>
              <label className={css.check}>
                <input
                  type="checkbox"
                  checked={rule.enabled}
                  onChange={event => updateRule(row.key, 'enabled', event.target.checked)}
                />
                <span>{row.label}</span>
              </label>
              <label className={css.field}>
                <span className={css.fieldLabel}>{tt('settings.threshold')}</span>
                <span className={css.inlineInput}>
                  <input
                    type="number"
                    min={1}
                    max={row.key === 'load' ? 64 : 100}
                    step={row.step}
                    value={rule.threshold}
                    onChange={event => updateRule(row.key, 'threshold', Number(event.target.value))}
                    onBlur={() => { if (!(rule.threshold >= 1)) updateRule(row.key, 'threshold', 1) }}
                  />
                  <span className={css.unit}>{row.unit}</span>
                </span>
              </label>
              <label className={css.field}>
                <span className={css.fieldLabel}>{tt('settings.hold')}</span>
                <span className={css.inlineInput}>
                  <input
                    type="number"
                    min={0}
                    max={3600}
                    step={10}
                    value={rule.holdSec}
                    onChange={event => updateRule(row.key, 'holdSec', Number(event.target.value))}
                  />
                  <span className={css.unit}>{tt('unit.sec')}</span>
                </span>
              </label>
            </div>
          )
        })}
        <div className={css.settingsRow} data-disabled={draft.rules.offline.enabled ? undefined : 'true'}>
          <label className={css.check}>
            <input
              type="checkbox"
              checked={draft.rules.offline.enabled}
              onChange={event => updateRule('offline', 'enabled', event.target.checked)}
            />
            <span>{tt('settings.ruleOffline')}</span>
          </label>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('settings.hold')}</span>
            <span className={css.inlineInput}>
              <input
                type="number"
                min={10}
                max={3600}
                step={10}
                value={draft.rules.offline.holdSec}
                onChange={event => updateRule('offline', 'holdSec', Number(event.target.value))}
                onBlur={() => { if (!(draft.rules.offline.holdSec >= 1)) updateRule('offline', 'holdSec', 1) }}
              />
              <span className={css.unit}>{tt('unit.sec')}</span>
            </span>
          </label>
        </div>

        <div className={css.settingsRow}>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('settings.retention')}</span>
            <span className={css.inlineInput}>
              <select
                value={draft.retentionDays}
                onChange={event => {
                  setDirty(true)
                  setDraft({ ...draft, retentionDays: Number(event.target.value) })
                }}
              >
                {[1, 3, 7, 14, 30].map(days => <option key={days} value={days}>{days}</option>)}
              </select>
              <span className={css.unit}>{tt('settings.retentionUnit')}</span>
            </span>
          </label>
          <p className={css.hint}>{tt('settings.retentionDesc')}</p>
        </div>

        <div className={css.settingsRow}>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('settings.interval')}</span>
            <span className={css.inlineInput}>
              <input
                type="number"
                min={1}
                max={60}
                step={1}
                value={draft.reportIntervalSec}
                onChange={event => {
                  setDirty(true)
                  setDraft({ ...draft, reportIntervalSec: Number(event.target.value) })
                }}
                onBlur={() => { if (!(draft.reportIntervalSec >= 1)) setDraft({ ...draft, reportIntervalSec: 1 }) }}
              />
              <span className={css.unit}>{tt('settings.intervalUnit')}</span>
            </span>
          </label>
          <p className={css.hint}>{tt('settings.intervalDesc')}</p>
        </div>
      </div>

      <div className={css.notifySection}>
        <div className={css.sectionHeader}>
          <span className={css.sectionTitle}>{tt('notify.title')}</span>
          <span className={css.sectionHint}>{tt('notify.desc')}</span>
        </div>
        <label className={css.check}>
          <input
            type="checkbox"
            checked={draft.notify.enabled}
            onChange={event => updateNotify({ enabled: event.target.checked })}
          />
          <span>{tt('notify.enabled')}</span>
        </label>
        <label className={css.field}>
          <span className={css.fieldLabel}>{tt('notify.url')}</span>
          <input
            className={css.input}
            value={draft.notify.url}
            placeholder="https://example.com/hooks/probe"
            onChange={event => updateNotify({ url: event.target.value })}
          />
          {draft.notify.enabled && !urlValid
            ? <span className={css.fieldError} role="alert">{tt('notify.invalidUrl')}</span>
            : <span className={css.hint}>{tt('notify.urlHint')}</span>}
        </label>
        <label className={css.check}>
          <input
            type="checkbox"
            checked={draft.notify.onResolve}
            onChange={event => updateNotify({ onResolve: event.target.checked })}
          />
          <span>{tt('notify.onResolve')}</span>
        </label>
        <div className={css.notifyTestRow}>
          <button
            type="button"
            className={css.ghostButton}
            disabled={testing || !urlValid}
            onClick={runTest}
          >
            {testing ? tt('notify.testing') : tt('notify.test')}
          </button>
          {testResult !== null && (
            <span className={testResult.ok ? css.tokenOk : css.tokenError} role="status">
              {testResult.ok
                ? tt('notify.testOk', { status: testResult.status ?? '-' })
                : tt('notify.testFail', { message: testResult.error ?? `HTTP ${testResult.status ?? '?'}` })}
            </span>
          )}
        </div>
      </div>

      <div className={css.saveRow}>
        <button type="button" className={css.primaryButton} disabled={saving || invalid} onClick={save}>
          {saving ? tt('action.saving') : tt('action.save')}
        </button>
        {saved && <span className={css.savedNote}>{tt('settings.saved')}</span>}
        {invalid && <span className={css.fieldError}>{tt('settings.invalid')}</span>}
        {versions !== undefined && (
          <span className={css.versionsNote}>{tt('about.versions', { panel: versions.panel, agent: versions.agent })}</span>
        )}
      </div>
    </div>
  )
}

/** Escape closes a dialog, Tab stays inside it, and its first control is focused. */
function useDialogFocus(onClose: () => void) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const root = ref.current
    if (root === null) return
    const focusables = (): HTMLElement[] => Array.from(
      root.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
    ).filter(element => !element.hasAttribute('disabled'))
    const preferred = root.querySelector<HTMLElement>('input, select, textarea') ?? focusables()[0]
    preferred?.focus()
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  return ref
}

/** The add/edit host dialog. */
function HostDialog({ mode, host, api, onClose, onSaved }: {
  mode: 'add' | 'edit'
  host?: ProbeHost
  api: ProbeApi
  onClose: () => void
  onSaved: (host: ProbeHost) => void
}) {
  const [name, setName] = useState(host?.name ?? '')
  const [tags, setTags] = useState((host?.tags ?? []).join(', '))
  const [location, setLocation] = useState(host?.location ?? '')
  const [note, setNote] = useState(host?.note ?? '')
  const [enabled, setEnabled] = useState(host?.enabled ?? true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const dialogRef = useDialogFocus(onClose)

  const submit = (): void => {
    if (name.trim() === '') {
      setError(tt('host.name') + ' *')
      return
    }
    setBusy(true)
    setError(null)
    const payload: ProbeHostInput = {
      name: name.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      location: location.trim(),
      note: note.trim(),
      enabled,
    }
    const task = mode === 'add' || host === undefined
      ? api.createHost(payload)
      : api.updateHost(host.id, payload)
    task.then(next => onSaved(next)).catch(caught => setError(errorMessage(caught))).finally(() => setBusy(false))
  }

  return (
    <div className={css.backdrop} role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <div className={css.modal} ref={dialogRef} role="dialog" aria-modal="true" aria-label={mode === 'add' ? tt('host.addTitle') : tt('host.editTitle')}>
        <div className={css.modalHeader}>
          <h3 className={css.modalTitle}>{mode === 'add' ? tt('host.addTitle') : tt('host.editTitle')}</h3>
          <button type="button" className={css.iconButton} aria-label={tt('action.close')} onClick={onClose}>×</button>
        </div>
        <div className={css.modalBody}>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('host.name')} *</span>
            <input
              className={css.input}
              autoFocus
              maxLength={60}
              value={name}
              placeholder={tt('host.namePlaceholder')}
              onChange={event => setName(event.target.value)}
              onKeyDown={event => { if (event.key === 'Enter') submit() }}
            />
          </label>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('host.tags')}</span>
            <input
              className={css.input}
              value={tags}
              placeholder={tt('host.tagsPlaceholder')}
              onChange={event => setTags(event.target.value)}
            />
          </label>
          <div className={css.fieldRow}>
            <label className={css.field}>
              <span className={css.fieldLabel}>{tt('host.location')}</span>
              <input
                className={css.input}
                maxLength={60}
                value={location}
                placeholder={tt('host.locationPlaceholder')}
                onChange={event => setLocation(event.target.value)}
              />
            </label>
            <label className={css.field}>
              <span className={css.fieldLabel}>{tt('host.note')}</span>
              <input
                className={css.input}
                maxLength={200}
                value={note}
                placeholder={tt('host.notePlaceholder')}
                onChange={event => setNote(event.target.value)}
              />
            </label>
          </div>
          <label className={css.check}>
            <input type="checkbox" checked={enabled} onChange={event => setEnabled(event.target.checked)} />
            <span>{tt('host.enabled')}</span>
          </label>
          {error !== null && <div className={css.errorBar}>{error}</div>}
        </div>
        <div className={css.modalFooter}>
          <button type="button" className={css.ghostButton} onClick={onClose}>{tt('action.cancel')}</button>
          <button type="button" className={css.primaryButton} disabled={busy} onClick={submit}>
            {busy ? tt('action.saving') : mode === 'add' ? tt('host.save') : tt('host.saveEdit')}
          </button>
        </div>
      </div>
    </div>
  )
}

/** Which agent flavor the install card composes commands for. */
type AgentKind = 'shell' | 'node'

/** Build the three install command blocks for one host. */
function installCommands(origin: string, host: ProbeHost, intervalSec: number, kind: AgentKind = 'shell') {
  const base = origin.replace(/\/+$/, '')
  const script = kind === 'shell' ? 'dsh-probe-agent.sh' : 'dsh-probe-agent.mjs'
  const env = [
    `DSPROBE_SERVER=${base}`,
    `DSPROBE_TOKEN=${host.token}`,
    `DSPROBE_NAME=${JSON.stringify(host.name)}`,
    `DSPROBE_INTERVAL=${intervalSec}`,
  ].join(' \\\n  ')
  const download = kind === 'shell'
    ? `curl -fsSL ${base}/auth/dsh-probe/agent.sh -o /usr/local/bin/${script} && chmod 755 /usr/local/bin/${script}`
    : `curl -fsSL ${base}/auth/dsh-probe/agent.mjs -o /usr/local/bin/${script}`
  const run = `${env} \\\n  ${kind === 'shell' ? '/bin/sh' : 'node'} /usr/local/bin/${script}`
  const execStart = kind === 'shell' ? `/bin/sh /usr/local/bin/${script}` : `/usr/bin/env node /usr/local/bin/${script}`
  const upgrade = `${download}\nsystemctl restart dsh-probe-agent`
  const systemd = `cat >/etc/systemd/system/dsh-probe-agent.service <<'EOF'
[Unit]
Description=DSH probe agent
After=network-online.target
Wants=network-online.target

[Service]
Environment=${envValue(`DSPROBE_SERVER=${base}`)}
Environment=${envValue(`DSPROBE_TOKEN=${host.token}`)}
Environment=${envValue(`DSPROBE_NAME=${host.name}`)}
Environment=${envValue(`DSPROBE_INTERVAL=${intervalSec}`)}
ExecStart=${execStart}
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload && systemctl enable --now dsh-probe-agent
journalctl -u dsh-probe-agent -n 20 --no-pager`
  return { download, run, systemd, upgrade }
}

/** The agent install dialog: origin, token, and copyable commands. */
function InstallDialog({ host, settings, api, latestAgent, onClose, onHostChange }: {
  host: ProbeHost
  settings: ProbeSettings | undefined
  api: ProbeApi
  latestAgent: string
  onClose: () => void
  onHostChange: (host: ProbeHost) => void
}) {
  const stored = (() => {
    try {
      return localStorage.getItem('dsh-probe.origin') ?? ''
    } catch {
      return ''
    }
  })()
  const [origin, setOrigin] = useState(stored !== '' ? stored : window.location.origin)
  const [kind, setKind] = useState<AgentKind>('shell')
  const [showToken, setShowToken] = useState(false)
  const [confirmRotate, setConfirmRotate] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dialogRef = useDialogFocus(onClose)

  useEffect(() => () => { if (timer.current !== null) clearTimeout(timer.current) }, [])

  const intervalSec = settings?.reportIntervalSec ?? 3
  const originValue = origin.trim().replace(/\/+$/, '')
  const originValid = /^https?:\/\/\S+$/.test(originValue)
  const commands = installCommands(originValue, host, intervalSec, kind)
  const all = `# 1. download\n${commands.download}\n\n# 2. foreground test\n${commands.run}\n\n# 3. systemd\n${commands.systemd}`
    + (host.agentOutdated ? `\n\n# upgrade\n${commands.upgrade}` : '')

  const rotate = (): void => {
    if (!confirmRotate) {
      setConfirmRotate(true)
      timer.current = setTimeout(() => setConfirmRotate(false), 4000)
      return
    }
    api.rotateToken(host.id).then(next => {
      onHostChange(next)
      setConfirmRotate(false)
    }).catch(caught => setError(errorMessage(caught)))
  }

  return (
    <div className={css.backdrop} role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <div className={css.modal} ref={dialogRef} data-wide="true" role="dialog" aria-modal="true" aria-label={tt('install.title', { name: host.name })}>
        <div className={css.modalHeader}>
          <h3 className={css.modalTitle}>{tt('install.title', { name: host.name })}</h3>
          <button type="button" className={css.iconButton} aria-label={tt('action.close')} onClick={onClose}>×</button>
        </div>
        <div className={css.modalBody}>
          <p className={css.hint}>{tt('install.desc')}</p>

          <div className={css.installStatus}>
            <span className={css.dot} data-status={host.status} aria-hidden="true" />
            <span>{statusLabel(host.status)}</span>
            <span className={css.muted}>
              {host.lastSeen === 0 ? tt('card.never') : tt('card.seen', { age: ago(host.lastSeen) })}
            </span>
          </div>

          {host.agentOutdated && (
            <div className={css.upgradeNote} role="status">
              <span>{tt('upgrade.agentOutdated', { from: host.current?.agentVersion ?? '?', to: latestAgent })}</span>
              <span className={css.muted}>{tt('upgrade.hint')}</span>
            </div>
          )}

          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('install.server')}</span>
            <input
              className={css.input}
              value={origin}
              onChange={event => {
                setOrigin(event.target.value)
                try { localStorage.setItem('dsh-probe.origin', event.target.value) } catch { /* ignore */ }
              }}
            />
            {originValid
              ? <span className={css.hint}>{tt('install.serverHint')}</span>
              : <span className={css.fieldError} role="alert">{tt('install.invalidOrigin')}</span>}
          </label>

          <div className={css.field}>
            <span className={css.fieldLabel}>{tt('install.kind')}</span>
            <div className={css.rangePills}>
              {(['shell', 'node'] as AgentKind[]).map(item => (
                <button
                  key={item}
                  type="button"
                  className={css.pill}
                  data-active={kind === item ? 'true' : undefined}
                  onClick={() => setKind(item)}
                >
                  {tt(`install.${item}` as ProbeKey)}
                </button>
              ))}
            </div>
            <span className={css.hint}>{tt(`install.${kind}Hint` as ProbeKey)}</span>
          </div>

          <div className={css.tokenBlock}>
            <span className={css.fieldLabel}>{tt('install.token')}</span>
            <div className={css.tokenRow}>
              <code className={css.tokenValue}>{showToken ? host.token : `${host.token.slice(0, 8)}${'•'.repeat(24)}`}</code>
              <button type="button" className={css.ghostButton} onClick={() => setShowToken(value => !value)}>
                {showToken ? tt('action.hide') : tt('action.show')}
              </button>
              <CopyButton text={host.token} label={tt('action.copy')} />
              <button type="button" className={css.dangerGhost} data-confirm={confirmRotate ? 'true' : undefined} onClick={rotate}>
                {confirmRotate ? tt('action.rotateConfirm') : tt('action.rotate')}
              </button>
            </div>
            <span className={css.hint}>{tt('install.tokenHint')} {tt('install.rotateHint')}</span>
          </div>

          {originValid && host.agentOutdated && (
            <CommandBlock title={tt('upgrade.title')} text={commands.upgrade} />
          )}
          {originValid && (
            <>
              <CommandBlock title={tt('install.step1')} text={commands.download} />
              <CommandBlock title={tt('install.step2')} text={commands.run} />
              <CommandBlock title={tt('install.step3')} text={commands.systemd} />
            </>
          )}
          {error !== null && <div className={css.errorBar} role="alert">{tt('error.action', { message: error })}</div>}
          <p className={host.status === 'waiting' ? css.waitingNote : css.liveNote}>
            {host.status === 'waiting' ? tt('install.waiting') : tt('install.online')}
          </p>
        </div>
        <div className={css.modalFooter}>
          {originValid && <CopyButton text={all} label={tt('install.copyAll')} primary />}
          <button type="button" className={css.ghostButton} onClick={onClose}>{tt('action.close')}</button>
        </div>
      </div>
    </div>
  )
}

/** One titled, copyable command block. */
function CommandBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className={css.commandBlock}>
      <div className={css.commandHeader}>
        <span className={css.commandTitle}>{title}</span>
        <CopyButton text={text} />
      </div>
      <pre className={css.commandText}>{text}</pre>
    </div>
  )
}

/** A copy button that reports success for a moment. */
function CopyButton({ text, label, primary = false }: { text: string; label?: string; primary?: boolean }) {
  const [done, setDone] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current !== null) clearTimeout(timer.current) }, [])
  return (
    <button
      type="button"
      className={primary ? css.primaryButton : css.ghostButton}
      onClick={() => {
        void copyText(text).then(ok => {
          if (!ok) return
          setDone(true)
          if (timer.current !== null) clearTimeout(timer.current)
          timer.current = setTimeout(() => setDone(false), 1500)
        })
      }}
    >
      {done ? tt('action.copied') : label ?? tt('action.copy')}
    </button>
  )
}

/** The compact token control shown on the detail page. */
function TokenPill({ host, api, onHostChange }: {
  host: ProbeHost
  api: ProbeApi
  onHostChange: (host: ProbeHost) => void
}) {
  const [showToken, setShowToken] = useState(false)
  const [confirmRotate, setConfirmRotate] = useState(false)
  const [rotated, setRotated] = useState(false)
  const [rotateError, setRotateError] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => {
    if (timer.current !== null) clearTimeout(timer.current)
    if (resetTimer.current !== null) clearTimeout(resetTimer.current)
  }, [])
  const rotate = (): void => {
    if (!confirmRotate) {
      setConfirmRotate(true)
      timer.current = setTimeout(() => setConfirmRotate(false), 4000)
      return
    }
    api.rotateToken(host.id).then(next => {
      onHostChange(next)
      setConfirmRotate(false)
      setRotateError(null)
      setRotated(true)
      if (resetTimer.current !== null) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setRotated(false), 3000)
    }).catch(caught => {
      setConfirmRotate(false)
      setRotateError(errorMessage(caught))
    })
  }
  return (
    <span className={css.tokenInline}>
      <code className={css.tokenValue}>{showToken ? host.token : `${host.token.slice(0, 6)}${'•'.repeat(12)}`}</code>
      <button type="button" className={css.ghostButton} onClick={() => setShowToken(value => !value)}>
        {showToken ? tt('action.hide') : tt('action.show')}
      </button>
      <CopyButton text={host.token} />
      <button type="button" className={css.dangerGhost} data-confirm={confirmRotate ? 'true' : undefined} onClick={rotate}>
        {confirmRotate ? tt('action.rotateConfirm') : tt('action.rotate')}
      </button>
      {(rotated || rotateError !== null) && (
        <span className={rotateError === null ? css.tokenOk : css.tokenError} role="status">
          {rotateError === null ? tt('token.rotated') : tt('error.action', { message: rotateError })}
        </span>
      )}
    </span>
  )
}

