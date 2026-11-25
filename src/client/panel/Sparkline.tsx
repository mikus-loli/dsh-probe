/**
 * Chart primitives for the probe panel: a compact sparkline for host cards and
 * a multi-series trend chart for the detail view. Both are plain SVG sized by
 * the container, so they follow the theme through CSS custom properties and
 * never need a charting dependency.
 */
import { percent } from './format'
import { tt } from './helpers'
import css from './panel.module.css'

/** One downsampled history point (the host half's series shape). */
export interface TrendPoint {
  t: number
  c: number
  m: number
  d: number
  l: number
  r?: number
  x?: number
}

/** Tone for a sparkline: normal, warning, or critical. */
export type SparkTone = 'normal' | 'warn' | 'critical'

/** Axis label suited to the window: time for 1h, date+time for 24h, date for 7d. */
function axisLabel(timestamp: number, range: '1h' | '24h' | '7d'): string {
  const date = new Date(timestamp)
  const pad = (value: number): string => String(value).padStart(2, '0')
  if (range === '1h') return `${pad(date.getHours())}:${pad(date.getMinutes())}`
  if (range === '24h') return `${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
  return `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

/** Build a polyline path over a 0..100 x 0..100 viewBox. */
function sparkPath(values: number[]): string {
  if (values.length === 0) return ''
  if (values.length === 1) return `0,${100 - Math.min(100, Math.max(0, values[0]))} 100,${100 - Math.min(100, Math.max(0, values[0]))}`
  return values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100
    const y = 100 - Math.min(100, Math.max(0, value))
    return `${x.toFixed(2)},${y.toFixed(2)}`
  }).join(' ')
}

/** Compact area sparkline for a host card. */
export function Sparkline({ values, tone = 'normal' }: { values: number[]; tone?: SparkTone }) {
  const points = sparkPath(values)
  if (points === '') return <div className={`${css.spark} ${css.sparkEmpty}`} aria-hidden="true" />
  return (
    <svg className={css.spark} data-tone={tone} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <polygon className={css.sparkArea} points={`0,100 ${points} 100,100`} />
      <polyline className={css.sparkLine} points={points} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

/** One series drawn in the trend chart. */
interface Series {
  key: 'c' | 'm' | 'd'
  label: string
  color: string
  points: TrendPoint[]
}

/**
 * Multi-series trend chart with a 0-100 axis and range pills.
 * @param props.points - downsampled series points.
 * @param props.range - active range label.
 * @param props.onRange - range change handler.
 * @param props.loading - whether a range fetch is in flight.
 */
export function TrendChart({ points, range, onRange, loading, error, onRetry }: {
  points: TrendPoint[]
  range: '1h' | '24h' | '7d'
  onRange: (range: '1h' | '24h' | '7d') => void
  loading: boolean
  /** Set when the last range fetch failed; shown in place of the chart. */
  error?: string
  /** Retries the failed fetch. */
  onRetry?: () => void
}) {
  const ranges: Array<'1h' | '24h' | '7d'> = ['1h', '24h', '7d']
  const series: Series[] = [
    { key: 'c', label: tt('chart.cpu'), color: 'var(--dsw-alias-state-business-primary)', points },
    { key: 'm', label: tt('chart.mem'), color: 'var(--dsw-alias-chart-tools)', points },
    { key: 'd', label: tt('chart.disk'), color: 'var(--dsw-alias-state-warn-primary)', points },
  ]
  const width = 620
  const height = 190
  const top = 12
  const bottom = 22
  const usable = height - top - bottom
  const pathOf = (key: 'c' | 'm' | 'd'): string => {
    if (points.length === 0) return ''
    return points.map((point, index) => {
      const x = points.length === 1 ? width / 2 : (index / (points.length - 1)) * width
      const y = top + usable - (Math.min(100, Math.max(0, point[key])) / 100) * usable
      return `${x.toFixed(2)},${y.toFixed(2)}`
    }).join(' ')
  }
  const from = points.length === 0 ? undefined : points[0].t
  const to = points.length === 0 ? undefined : points[points.length - 1].t
  return (
    <div className={css.chartCard}>
      <div className={css.chartHeader}>
        <span className={css.sectionTitle}>{tt('detail.trend')}</span>
        <div className={css.rangePills} role="group">
          {ranges.map(item => (
            <button
              key={item}
              type="button"
              className={css.pill}
              data-active={item === range ? 'true' : undefined}
              onClick={() => onRange(item)}
            >
              {tt(`chart.${item}`)}
            </button>
          ))}
        </div>
      </div>
      {error !== undefined
        ? (
          <div className={css.chartError} role="alert">
            <span>{tt('error.load', { message: error })}</span>
            {onRetry !== undefined && (
              <button type="button" className={css.ghostButton} onClick={onRetry}>{tt('action.retry')}</button>
            )}
          </div>
        )
        : points.length === 0
          ? <div className={css.chartEmpty}>{loading ? tt('chart.loading') : tt('chart.noData')}</div>
          : (
            <div className={css.chartBody} data-loading={loading ? 'true' : undefined}>
            <svg className={css.chartSvg} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label={tt('detail.trend')}>
              {[0, 25, 50, 75, 100].map(value => {
                const y = top + usable - (value / 100) * usable
                return <line key={value} className={css.chartGrid} x1={0} x2={width} y1={y} y2={y} vectorEffect="non-scaling-stroke" />
              })}
              {series.map(item => (
                <polyline
                  key={item.key}
                  className={css.chartLine}
                  style={{ stroke: item.color }}
                  points={pathOf(item.key)}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
            <div className={css.chartAxis}>
              <span>{from === undefined ? '' : axisLabel(from, range)}</span>
              <span>{to === undefined ? '' : axisLabel(to, range)}</span>
            </div>
            <div className={css.legend}>
              {series.map(item => (
                <span key={item.key} className={css.legendItem}>
                  <span className={css.legendDot} style={{ background: item.color }} />
                  {item.label}
                  <strong>{percent(points.length === 0 ? 0 : item.points[item.points.length - 1][item.key])}</strong>
                </span>
              ))}
            </div>
            </div>
          )}
    </div>
  )
}
