/**
 * Node detail modal — the upstream `modal.css` shell, filled from the probe.
 *
 * Markup mirrors `index.html`: `.modal-overlay > .modal` with a scroll
 * indicator, drag handle, header, tab bar, and `.modal-page` bodies. The info
 * grid reproduces `modal-overview.js` item-for-item, so a host reads the same
 * way it does in the theme. Charts are drawn as inline SVG because the probe has
 * no canvas chart module; they use the theme's own colour variables so the
 * palette still matches.
 */
import { useEffect, useMemo, useState } from 'react'
import type { ProbeApi, ProbeHistory, ProbeHost } from '../api'
import type { ProbeKey } from '../locales'
import { bytes, durationShort, load, percent, rate } from './format'
import { formatOs } from './os-icon'
import { flagUrl, hasFlag } from './flag'
import { tt } from './helpers'

/** Ranges the time control offers, matching the upstream buttons. */
const RANGES: Array<{ key: '1h' | '24h' | '7d'; label: string }> = [
  { key: '1h', label: '1h' },
  { key: '24h', label: '24h' },
  { key: '7d', label: '7d' },
]

/** One labelled figure in the info grid — upstream `buildInfoItem`. */
function InfoItem({ label, value, nowrap }: { label: string; value: string; nowrap?: boolean }) {
  return (
    <div className="modal-info-item">
      <div className="modal-info-label">{label}</div>
      <div className={`modal-info-value${nowrap === true ? ' modal-info-value-nowrap' : ''}`}>{value}</div>
    </div>
  )
}

/** One chart section with an inline SVG trend. */
function ChartSection({ title, values, colour, ceiling }: { title: string; values: number[]; colour: string; ceiling?: number }) {
  const points = useMemo(() => {
    if (values.length < 2) return ''
    // Percentages are measured against 100 so a steady 58% sits mid-scale
    // instead of pinning to the top of its own local range.
    const max = ceiling ?? Math.max(...values, 1)
    const step = 1000 / (values.length - 1)
    return values.map((value, index) => `${index === 0 ? 'M' : 'L'}${(index * step).toFixed(1)} ${(200 - (Math.min(value, max) / max) * 190).toFixed(1)}`).join(' ')
  }, [values])

  return (
    <div className="chart-section">
      <h3>{title}</h3>
      {points === ''
        ? <div className="chart-empty">{tt('chart.loading')}</div>
        : (
          <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ width: '100%', height: 180 }}>
            <path d={points} fill="none" stroke={colour} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          </svg>
        )}
    </div>
  )
}

/** The modal. */
export function NodeModal({ api, host, onClose }: { api: ProbeApi; host: ProbeHost; onClose: () => void }) {
  const [range, setRange] = useState<'1h' | '24h' | '7d'>('1h')
  const [history, setHistory] = useState<ProbeHistory | null>(null)
  const sample = host.current
  const os = sample === null ? null : formatOs(sample.os)

  useEffect(() => {
    let live = true
    api.history(host.id, range)
      .then(next => { if (live) setHistory(next) })
      .catch(() => { if (live) setHistory(null) })
    return () => { live = false }
  }, [api, host.id, range])

  // Escape closes, and the body must not scroll behind the overlay.
  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  const cpu = history?.points.map(point => point.c) ?? []
  const mem = history?.points.map(point => point.m) ?? []
  const disk = history?.points.map(point => point.d) ?? []

  return (
    <div className="probe-theme">
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={event => { event.stopPropagation() }}>
        <div className="modal-scroll-indicator" />
        <div className="modal-drag-handle" />
        <div className="modal-header">
          <h2>
            {hasFlag(host.regionCode) && (
              <span
                className="node-card-flag"
                style={{ backgroundImage: `url("${flagUrl(host.regionCode)}")`, display: 'inline-block', marginRight: 8, verticalAlign: 'middle' }}
              />
            )}
            {host.name}
          </h2>
          <button type="button" className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="modal-page modal-page-overview active">
            <div className="modal-info">
              <InfoItem label={tt('table.os')} value={os?.name ?? '-'} />
              <InfoItem label="CPU" value={sample?.cpuModel !== undefined && sample.cpuModel !== '' ? sample.cpuModel : '-'} />
              <InfoItem label="Arch" value={sample?.arch ?? '-'} />
              <InfoItem label="Kernel" value={sample?.kernel ?? '-'} />
              <InfoItem label={tt('card.mem')} value={sample === null ? '-' : `${bytes(sample.memUsed)} / ${bytes(sample.memTotal)}`} />
              <InfoItem label={tt('card.swap')} value={sample === null || sample.swapTotal <= 0 ? '-' : `${bytes(sample.swapUsed)} / ${bytes(sample.swapTotal)}`} />
              <InfoItem label={tt('card.disk')} value={sample === null ? '-' : `${bytes(sample.diskUsed)} / ${bytes(sample.diskTotal)}`} />
              <InfoItem label={tt('card.loadShort')} value={`${load(sample?.load1)} / ${load(sample?.load5)} / ${load(sample?.load15)}`} />
              <InfoItem label={tt('detail.conn')} value={`TCP: ${sample?.connTcp ?? 0} / UDP: ${sample?.connUdp ?? 0}`} />
              <InfoItem label={tt('card.uptime')} value={sample === undefined || sample === null ? '-' : durationShort(sample.uptime)} />
              <InfoItem label={tt('card.region')} value={host.regionName !== '' ? host.regionName : '-'} />
              <InfoItem
                label={tt('detail.traffic')}
                value={`↑ ${bytes(sample?.totalTx)} / ↓ ${bytes(sample?.totalRx)}`}
                nowrap
              />
            </div>

            <div className="time-range-controls">
              <div className="time-range-label">{tt('detail.range')}</div>
              {RANGES.map(item => (
                <button
                  key={item.key}
                  type="button"
                  className={`time-range-btn${range === item.key ? ' active' : ''}`}
                  onClick={() => { setRange(item.key) }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="modal-charts">
              <ChartSection title={`CPU ${percent(sample?.cpu)}`} values={cpu} colour="var(--accent)" ceiling={100} />
              <ChartSection title={`${tt('card.mem')} ${percent(sample?.memPct)}`} values={mem} colour="var(--success)" ceiling={100} />
              <ChartSection title={`${tt('card.disk')} ${percent(sample?.diskPct)}`} values={disk} colour="var(--info)" ceiling={100} />
            </div>

            <div className="modal-info" style={{ marginTop: 12 }}>
              <InfoItem label={tt('detail.net')} value={`↑ ${rate(sample?.txRate)} / ↓ ${rate(sample?.rxRate)}`} nowrap />
              <InfoItem label={tt('card.seen')} value={host.lastSeen === 0 ? tt('card.never') : new Date(host.lastSeen).toLocaleString()} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

/** Re-export so callers do not need the key type. */
export type NodeModalKey = ProbeKey
