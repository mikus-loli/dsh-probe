/**
 * Latency page: the tasks the probe runs, where each one stands per host, and
 * the round-trip trend for the selected target.
 *
 * A latency task is one probe (ICMP / TCP / HTTP) against one target, run by a
 * chosen set of hosts on an interval. The server queues an `agent.ping` event
 * when a host is due; the agent answers on its next report cycle, so the
 * freshest sample is always roughly one interval old.
 */
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ProbeApi } from '../api'
import type { ProbePingTask, ProbePingResult } from '../api'
import type { ProbeKey } from '../locales'
import { errorMessage, tt } from './helpers'
import { LatencyChart, seriesColor, type LatencySeries } from './LatencyChart'
import css from './panel.module.css'

/** Chart windows offered for a latency series. */
const WINDOWS: Array<{ key: string; label: string; ms: number }> = [
  { key: '15m', label: '15m', ms: 15 * 60 * 1000 },
  { key: '1h', label: '1h', ms: 60 * 60 * 1000 },
  { key: '6h', label: '6h', ms: 6 * 60 * 60 * 1000 },
]

/** Format one measured value. */
function ms(value: number | null | undefined): string {
  if (value === null || value === undefined) return '—'
  if (value >= 1000) return `${(value / 1000).toFixed(2)}s`
  return `${value.toFixed(1)}ms`
}

/** Loss percentage with a tone. */
function lossTone(loss: number | null): 'ok' | 'warn' | 'bad' {
  if (loss === null || loss === 0) return 'ok'
  return loss >= 10 ? 'bad' : 'warn'
}

/** The latency page. */
export function LatencyTab({ api, hosts }: { api: ProbeApi; hosts: Array<{ id: string; name: string }> }) {
  const [tasks, setTasks] = useState<ProbePingTask[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [windowMs, setWindowMs] = useState<number>(WINDOWS[1]!.ms)
  const [series, setSeries] = useState<LatencySeries[]>([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState<ProbePingTask | null>(null)
  const [creating, setCreating] = useState(false)

  const load = useCallback(async (): Promise<void> => {
    try {
      const next = await api.listPingTasks()
      setTasks(next)
      setError(null)
      setSelected(current => current !== null && next.some(task => task.id === current) ? current : (next[0]?.id ?? null))
    } catch (cause) {
      setError(errorMessage(cause))
    }
  }, [api])

  useEffect(() => { void load() }, [load])

  // Poll for fresh figures: the agent answers on its next report, so a short
  // refresh keeps the table close to live without a websocket.
  useEffect(() => {
    const timer = setInterval(() => { void load() }, 5000)
    return () => clearInterval(timer)
  }, [load])

  const task = useMemo(() => tasks?.find(item => item.id === selected) ?? null, [tasks, selected])

  // Load one series per host of the selected task, for the chart.
  const loadSeries = useCallback(async (): Promise<void> => {
    if (task === null) { setSeries([]); return }
    setLoading(true)
    try {
      const rows = await Promise.all(task.hosts.map(async hostId => {
        const points = await api.pingSeries(task.id, hostId, windowMs)
        const hostName = task.results.find(result => result.hostId === hostId)?.hostName ?? hostId
        return { hostId, hostName, points }
      }))
      setSeries(rows.filter(row => row.points.length > 0))
      setError(null)
    } catch (cause) {
      setError(errorMessage(cause))
    } finally {
      setLoading(false)
    }
  }, [api, task, windowMs])

  useEffect(() => {
    void loadSeries()
    const timer = setInterval(() => { void loadSeries() }, 10_000)
    return () => clearInterval(timer)
  }, [loadSeries])

  const remove = async (id: string): Promise<void> => {
    try {
      await api.deletePingTask(id)
      await load()
    } catch (cause) {
      setError(errorMessage(cause))
    }
  }

  return (
    <div className={css.tabBody}>
      <div className={css.section}>
        {error !== null && <div className={css.errorBar}>{tt('error.action', { message: error })}</div>}
        <div className={css.sectionHeader}>
          <span className={css.sectionTitle}>{tt('latency.title')}</span>
          <span className={css.sectionHint}>{tt('latency.desc')}</span>
        </div>

        <div className={css.saveRow}>
          <button type="button" className={css.primaryButton} onClick={() => { setCreating(true) }}>
            <span aria-hidden="true">+</span> {tt('latency.add')}
          </button>
        </div>

        {tasks !== null && tasks.length === 0 && <p className={css.muted}>{tt('latency.empty')}</p>}

        {tasks !== null && tasks.length > 0 && (
          <div className={css.taskList}>
            {tasks.map(item => (
              <button
                key={item.id}
                type="button"
                className={css.taskRow}
                data-active={item.id === selected ? 'true' : undefined}
                onClick={() => { setSelected(item.id) }}
              >
                <span className={css.taskKind} data-kind={item.type}>{item.type.toUpperCase()}</span>
                <span className={css.taskMain}>
                  <span className={css.taskName}>{item.name}</span>
                  <span className={css.taskTarget}>{item.target}</span>
                </span>
                <span className={css.taskMeta}>{tt('latency.interval', { sec: item.intervalSec })}</span>
                <span className={css.taskMeta}>{tt('latency.hostCount', { count: item.hosts.length })}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {task !== null && (
        <>
          <div className={css.section}>
            <div className={css.sectionHeader}>
              <span className={css.sectionTitle}>{tt('latency.results')}</span>
              <div className={css.rangePills}>
                {WINDOWS.map(window => (
                  <button
                    key={window.key}
                    type="button"
                    className={css.pill}
                    data-active={windowMs === window.ms ? 'true' : undefined}
                    onClick={() => { setWindowMs(window.ms) }}
                  >
                    {window.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={css.tableWrap}>
              <table className={css.table}>
                <thead>
                  <tr>
                    <th>{tt('latency.col.host')}</th>
                    <th>{tt('latency.col.latest')}</th>
                    <th>{tt('latency.col.avg')}</th>
                    <th>{tt('latency.col.loss')}</th>
                    <th>{tt('latency.col.samples')}</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {task.results.map((result: ProbePingResult, index: number) => (
                    <tr key={result.hostId}>
                      <td>
                        <span className={css.metric}>
                          <span className={css.legendDot} style={{ background: seriesColor(index) }} />
                          {result.hostName}
                        </span>
                      </td>
                      <td className={css.mono}>{ms(result.latest)}</td>
                      <td className={css.mono}>{ms(result.avg)}</td>
                      <td>
                        <span className={`${css.badge} ${css.lossBadge}`} data-tone={lossTone(result.loss)}>
                          {result.loss === null ? '—' : `${result.loss}%`}
                        </span>
                      </td>
                      <td className={css.mono}>{result.count}</td>
                      <td className={css.rowOpen}>
                        <button
                          type="button"
                          className={css.linkButton}
                          onClick={() => { setEditing(task) }}
                        >
                          {tt('action.edit')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={css.chartCard}>
            <div className={css.chartHeader}>
              <span className={css.sectionTitle}>{tt('latency.chart')}</span>
              <div className={css.legend}>
                {series.map((line, index) => (
                  <span key={line.hostId} className={css.legendItem}>
                    <span className={css.legendDot} style={{ background: seriesColor(index) }} />
                    {line.hostName}
                  </span>
                ))}
              </div>
            </div>
            {loading && series.length === 0
              ? <div className={css.chartEmpty}>{tt('chart.loading')}</div>
              : <LatencyChart series={series} />}
          </div>

          <div className={css.saveRow}>
            <button
              type="button"
              className={`${css.ghostButton} ${css.dangerGhost}`}
              onClick={() => { void remove(task.id) }}
            >
              {tt('latency.delete')}
            </button>
          </div>
        </>
      )}

      {(creating || editing !== null) && (
        <PingTaskDialog
          api={api}
          hosts={hosts}
          task={editing}
          onClose={() => { setCreating(false); setEditing(null) }}
          onSaved={() => { setCreating(false); setEditing(null); void load() }}
        />
      )}
    </div>
  )
}

/** Create/edit one latency task. */
function PingTaskDialog({ api, hosts, task, onClose, onSaved }: {
  api: ProbeApi
  hosts: Array<{ id: string; name: string }>
  task: ProbePingTask | null
  onClose: () => void
  onSaved: () => void
}) {
  const [name, setName] = useState(task?.name ?? '')
  const [type, setType] = useState<'icmp' | 'tcp' | 'http'>(task?.type ?? 'icmp')
  const [target, setTarget] = useState(task?.target ?? '')
  const [intervalSec, setIntervalSec] = useState(task?.intervalSec ?? 60)
  const [picked, setPicked] = useState<string[]>(task?.hosts ?? [])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey) }
  }, [onClose])

  const save = async (): Promise<void> => {
    if (name.trim() === '' || target.trim() === '') {
      setError(tt('latency.required'))
      return
    }
    setSaving(true)
    setError(null)
    const payload = { name: name.trim(), type, target: target.trim(), intervalSec, hosts: picked, enabled: true }
    try {
      if (task === null) await api.createPingTask(payload)
      else await api.updatePingTask(task.id, payload)
      onSaved()
    } catch (cause) {
      setError(errorMessage(cause))
      setSaving(false)
    }
  }

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} role="dialog" aria-modal="true" onClick={event => { event.stopPropagation() }}>
        <div className={css.modalHeader}>
          <h3 className={css.modalTitle}>{task === null ? tt('latency.form.create') : tt('latency.form.edit')}</h3>
          <button type="button" className={css.iconButton} aria-label={tt('form.cancel')} onClick={onClose}>×</button>
        </div>
        <div className={css.modalBody}>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('latency.form.name')}</span>
            <input className={css.input} value={name} onChange={event => { setName(event.target.value) }} />
          </label>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('latency.form.type')}</span>
            <select className={css.input} value={type} onChange={event => { setType(event.target.value as 'icmp' | 'tcp' | 'http') }}>
              <option value="icmp">ICMP</option>
              <option value="tcp">TCP</option>
              <option value="http">HTTP</option>
            </select>
            <span className={css.hint}>{tt('latency.form.typeHint')}</span>
          </label>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('latency.form.target')}</span>
            <input className={css.input} value={target} placeholder={type === 'http' ? 'https://example.com' : type === 'tcp' ? 'host:443' : '1.1.1.1'} onChange={event => { setTarget(event.target.value) }} />
          </label>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('latency.form.interval')}</span>
            <input className={css.input} type="number" min={10} value={intervalSec} onChange={event => { setIntervalSec(Number(event.target.value) || 60) }} />
          </label>
          <div className={css.field}>
            <span className={css.fieldLabel}>{tt('latency.form.hosts')}</span>
            <div className={css.hostPicker}>
              {hosts.map(host => (
                <label key={host.id} className={css.check}>
                  <input
                    type="checkbox"
                    checked={picked.includes(host.id)}
                    onChange={event => {
                      setPicked(current => event.target.checked
                        ? [...current, host.id]
                        : current.filter(id => id !== host.id))
                    }}
                  />
                  <span>{host.name}</span>
                </label>
              ))}
            </div>
          </div>
          {error !== null && <p className={css.formError}>{error}</p>}
        </div>
        <div className={css.modalFooter}>
          <button type="button" className={css.ghostButton} disabled={saving} onClick={onClose}>{tt('form.cancel')}</button>
          <button type="button" className={css.primaryButton} disabled={saving} onClick={() => { void save() }}>{tt('form.save')}</button>
        </div>
      </div>
    </div>
  )
}
