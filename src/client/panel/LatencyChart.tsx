/**
 * Latency trend: one polyline per host over the task's recent samples.
 *
 * The probe's own chart style is reused deliberately — same grid, same tick
 * treatment — so a latency curve sits beside the CPU curve without looking like
 * a second product. A lost sample (`ms: null`) breaks the line instead of
 * plotting at zero, which is what makes packet loss visible at a glance.
 */
import { useMemo } from 'react'
import css from './panel.module.css'

/** One sample: a timestamp and a round trip, or null for a loss. */
export interface LatencyPoint {
  t: number
  ms: number | null
}

/** One host's series on the chart. */
export interface LatencySeries {
  hostId: string
  hostName: string
  points: LatencyPoint[]
}

/** Palette shared with the metric bars so colours mean the same thing. */
const COLORS = [
  '#e8668a',
  '#5c9ced',
  '#4caf7d',
  '#f5a623',
  '#a78bfa',
  '#34d399',
]

/** Format one millisecond value for the axis. */
function tick(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}s`
  if (value >= 10) return `${Math.round(value)}ms`
  return `${value.toFixed(1)}ms`
}

/**
 * Render the latency chart.
 * @param props.series - one line per host.
 * @param props.height - drawing height in CSS pixels.
 */
export function LatencyChart({ series, height = 220 }: { series: LatencySeries[]; height?: number }) {
  const view = useMemo(() => {
    const all = series.flatMap(line => line.points)
    if (all.length < 2) return null
    const from = Math.min(...all.map(point => point.t))
    const to = Math.max(...all.map(point => point.t))
    const values = all.map(point => point.ms).filter((ms): ms is number => ms !== null)
    // A chart of only losses still needs a vertical scale to draw against.
    const maxMs = values.length === 0 ? 100 : Math.max(...values)
    const ceiling = maxMs <= 1 ? 1 : Math.ceil(maxMs * 1.15)
    const span = Math.max(1, to - from)
    const width = 1000
    const padY = 10
    const plot = height - 28
    const x = (t: number): number => ((t - from) / span) * width
    const y = (ms: number): number => padY + (1 - Math.min(ms, ceiling) / ceiling) * (plot - padY)
    return { from, to, ceiling, width, height: plot, x, y, span }
  }, [series, height])

  if (view === null) {
    return <div className={css.chartEmpty}>Not enough samples yet</div>
  }

  const gridValues = [0, 0.25, 0.5, 0.75, 1].map(ratio => view.ceiling * ratio)

  return (
    <div className={css.chartBody}>
      <svg className={css.chartSvg} viewBox={`0 0 ${view.width} ${view.height}`} preserveAspectRatio="none" role="img">
        {gridValues.map(value => (
          <line
            key={value}
            className={css.chartGrid}
            x1={0}
            x2={view.width}
            y1={view.y(value)}
            y2={view.y(value)}
          />
        ))}
        {series.map((line, index) => {
          // Walk the samples and break the path at every loss, so a gap in the
          // line reads as a gap in reachability.
          const segments: string[] = []
          let current = ''
          for (const point of line.points) {
            if (point.ms === null) {
              if (current !== '') segments.push(current)
              current = ''
              continue
            }
            const command = current === '' ? 'M' : 'L'
            current += `${command}${view.x(point.t).toFixed(1)} ${view.y(point.ms).toFixed(1)} `
          }
          if (current !== '') segments.push(current)
          return segments.map((path, segment) => (
            <path
              key={`${line.hostId}-${segment}`}
              className={css.chartLine}
              style={{ stroke: COLORS[index % COLORS.length] }}
              d={path.trim()}
            />
          ))
        })}
      </svg>
      <div className={css.chartScale} aria-hidden="true">
        <span>{tick(view.ceiling)}</span>
        <span>{tick(view.ceiling / 2)}</span>
        <span>0</span>
      </div>
    </div>
  )
}

/** Colour for one host's legend swatch. */
export function seriesColor(index: number): string {
  return COLORS[index % COLORS.length]
}
