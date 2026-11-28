/**
 * Line chart renderer, ported from the theme's `ui/charts/line.js`.
 *
 * The panel draws on canvas with the same geometry as upstream — dashed grid,
 * right-aligned percentage labels, a smoothed line, a vertical gradient fill
 * under it, sampled dots, and first/last time labels — because a hand-rolled SVG
 * polyline reads as a different product the moment the two sit side by side.
 *
 * Colours come from the theme's own variables, so light and dark both work
 * without a second palette here.
 */

/** One plotted record: a timestamp and a nullable value. */
export interface ChartRecord {
  time: number
  value: number | null
}

/** Everything needed to redraw and to hit-test the pointer. */
interface ChartState {
  padding: { top: number; right: number; bottom: number; left: number }
  points: number[]
  min: number
  max: number
  records: ChartRecord[]
  color: string
  suffix: string
  rangeHours: number
}

/** Cached font family, read once like upstream does. */
let fontFamily = ''

/**
 * Read one CSS variable from the element the theme is applied to.
 *
 * The ported theme declares its palette on the panel's own root, not on `:root`
 * (that is what keeps it from leaking into the GUI), so reading from
 * `document.documentElement` returns empty strings and every colour silently
 * becomes a bare alpha suffix.
 * @param name - custom property, e.g. `--accent`.
 * @param scope - element carrying the theme; defaults to the document root.
 */
export function cssVar(name: string, scope?: Element | null): string {
  if (typeof document === 'undefined') return ''
  const host = scope ?? document.querySelector('.probe-theme') ?? document.documentElement
  return getComputedStyle(host).getPropertyValue(name).trim()
}

/**
 * Append an alpha channel to a colour.
 *
 * The theme writes 8-digit hex (`#e8668a40`) on canvas, but a variable may also
 * resolve to `rgb(...)`; both forms are handled so a colour is never truncated
 * into a bare suffix.
 * @param colour - hex or rgb() colour.
 * @param alpha - 0..255 alpha.
 */
function alpha(colour: string, alphaValue: number): string {
  const hex = colour.trim()
  if (/^#[0-9a-f]{6}$/i.test(hex)) return `${hex}${alphaValue.toString(16).padStart(2, '0')}`
  const rgb = /^rgba?\(([^)]+)\)$/i.exec(hex)
  if (rgb !== null) {
    const [r, g, b] = rgb[1]!.split(/[,\s]+/).filter(Boolean)
    return `rgba(${r}, ${g}, ${b}, ${(alphaValue / 255).toFixed(3)})`
  }
  return hex
}

/** Format one y-axis label. */
function axisLabel(value: number, suffix: string): string {
  if (suffix === '%') return `${value.toFixed(0)}%`
  return `${value.toFixed(0)}${suffix}`
}

/** Short time label for the x axis. */
function timeLabel(time: number, rangeHours: number): string {
  const date = new Date(time)
  const pad = (value: number): string => String(value).padStart(2, '0')
  if (rangeHours <= 24) return `${pad(date.getHours())}:${pad(date.getMinutes())}`
  return `${date.getMonth() + 1}/${date.getDate()}`
}

/**
 * Draw one series into a canvas.
 * @param canvas - target canvas; its CSS size drives the backing store size.
 * @param records - plotted points in time order.
 * @param options - fixed range, colour, unit suffix and axis range.
 */
export function drawLineChart(
  canvas: HTMLCanvasElement,
  records: ChartRecord[],
  options: { min: number; max: number; color: string; suffix: string; rangeHours: number },
): void {
  // Resolve the palette against the theme root the canvas actually sits in.
  const themeHost = canvas.closest('.probe-theme')
  const colour = options.color.startsWith('--') ? cssVar(options.color, themeHost) : options.color
  const ctx = canvas.getContext('2d')
  if (ctx === null) return

  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  const targetW = Math.round(rect.width * dpr)
  const targetH = Math.round(rect.height * dpr)
  if (canvas.width !== targetW || canvas.height !== targetH) {
    canvas.width = targetW
    canvas.height = targetH
    ctx.scale(dpr, dpr)
  } else {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  const w = rect.width
  const h = rect.height
  const padding = { top: 24, right: 20, bottom: 32, left: 50 }
  const chartW = w - padding.left - padding.right
  const chartH = h - padding.top - padding.bottom

  ctx.clearRect(0, 0, w, h)
  if (chartW <= 0 || chartH <= 0) return

  const gridColor = cssVar('--chart-grid', themeHost)
  const textColor = cssVar('--chart-text', themeHost)
  const dotCenter = cssVar('--chart-dot-center', themeHost)
  if (fontFamily === '') fontFamily = getComputedStyle(document.body).fontFamily || 'sans-serif'

  // Dashed grid, drawn in one path.
  ctx.beginPath()
  ctx.strokeStyle = gridColor
  ctx.lineWidth = 1
  ctx.setLineDash([4, 4])
  for (let index = 0; index <= 4; index += 1) {
    const y = padding.top + (chartH / 4) * index
    ctx.moveTo(padding.left, y)
    ctx.lineTo(w - padding.right, y)
  }
  ctx.stroke()
  ctx.setLineDash([])

  ctx.font = `11px ${fontFamily}`
  ctx.fillStyle = textColor
  ctx.textAlign = 'right'
  for (let index = 0; index <= 4; index += 1) {
    const y = padding.top + (chartH / 4) * index
    const value = options.max - (options.max - options.min) * (index / 4)
    ctx.fillText(axisLabel(value, options.suffix), padding.left - 8, y + 4)
  }

  const range = options.max - options.min || 1
  const stepX = chartW / Math.max(records.length - 1, 1)
  const baseY = padding.top + chartH
  const points: number[] = []
  for (let index = 0; index < records.length; index += 1) {
    const value = records[index]?.value
    if (value === null || value === undefined || Number.isNaN(value)) continue
    const x = padding.left + index * stepX
    const normalized = Math.max(0, Math.min(1, (value - options.min) / range))
    points.push(x, baseY - normalized * chartH)
  }

  const count = points.length >> 1
  if (count > 1) {
    ctx.beginPath()
    ctx.moveTo(points[0]!, points[1]!)
    if (count > 50) {
      for (let index = 2; index < points.length; index += 2) {
        ctx.lineTo(points[index]!, points[index + 1]!)
      }
    } else {
      // Smoothed through midpoints, exactly as upstream does for short series.
      for (let index = 2; index < points.length; index += 2) {
        const prevX = points[index - 2]!
        const prevY = points[index - 1]!
        const currX = points[index]!
        const currY = points[index + 1]!
        const midX = (prevX + currX) * 0.5
        ctx.quadraticCurveTo(midX, prevY, midX, (prevY + currY) * 0.5)
        ctx.quadraticCurveTo(midX, currY, currX, currY)
      }
    }

    ctx.strokeStyle = colour
    ctx.lineWidth = 2.5
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.stroke()

    // Close the path down to the baseline and fill it with a fading gradient.
    ctx.lineTo(points[points.length - 2]!, baseY)
    ctx.lineTo(points[0]!, baseY)
    ctx.closePath()
    const gradient = ctx.createLinearGradient(0, padding.top, 0, baseY)
    gradient.addColorStop(0, alpha(colour, 0x40))
    gradient.addColorStop(0.5, alpha(colour, 0x15))
    gradient.addColorStop(1, alpha(colour, 0x02))
    ctx.fillStyle = gradient
    ctx.fill()

    const dotInterval = Math.ceil(count / 20)
    for (let index = 0; index < count; index += 1) {
      if (index % dotInterval !== 0 && index !== count - 1) continue
      const px = points[index * 2]!
      const py = points[index * 2 + 1]!
      ctx.beginPath()
      ctx.arc(px, py, 3, 0, Math.PI * 2)
      ctx.fillStyle = colour
      ctx.fill()
      ctx.beginPath()
      ctx.arc(px, py, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = dotCenter
      ctx.fill()
    }
  }

  // Only the first and last timestamps get a label, like upstream.
  if (records.length > 0) {
    ctx.fillStyle = textColor
    ctx.textAlign = 'center'
    ctx.font = `10px ${fontFamily}`
    const first = records[0]!
    const last = records[records.length - 1]!
    ctx.textAlign = 'left'
    ctx.fillText(timeLabel(first.time, options.rangeHours), padding.left, h - 10)
    ctx.textAlign = 'right'
    ctx.fillText(timeLabel(last.time, options.rangeHours), w - padding.right, h - 10)
  }

  const state: ChartState = {
    padding,
    points,
    min: options.min,
    max: options.max,
    records,
    color: colour,
    suffix: options.suffix,
    rangeHours: options.rangeHours,
  }
  canvas.dataset.chart = 'ready'
  ;(canvas as HTMLCanvasElement & { __chartState?: ChartState }).__chartState = state
}

/**
 * Nearest plotted sample to a canvas-relative x position.
 * @param canvas - the canvas that was drawn.
 * @param clientX - pointer position in viewport coordinates.
 * @returns the record and its pixel position, or null when there is no sample.
 */
export function nearestSample(
  canvas: HTMLCanvasElement,
  clientX: number,
): { record: ChartRecord; x: number; y: number } | null {
  const withState = canvas as HTMLCanvasElement & { __chartState?: ChartState }
  const state = withState.__chartState
  if (state === undefined || state.points.length === 0) return null
  const rect = canvas.getBoundingClientRect()
  const localX = clientX - rect.left
  let best = -1
  let bestDistance = Number.POSITIVE_INFINITY
  for (let index = 0; index < state.points.length; index += 2) {
    const distance = Math.abs(state.points[index]! - localX)
    if (distance < bestDistance) {
      bestDistance = distance
      best = index
    }
  }
  if (best < 0) return null
  const record = state.records[Math.round((state.points[best]! - state.padding.left) / Math.max(1, (rect.width - state.padding.left - state.padding.right) / Math.max(state.records.length - 1, 1)))]
  if (record === undefined) return null
  return { record, x: state.points[best]!, y: state.points[best + 1]! }
}

/** Format a tooltip line for one sample. */
export function tooltipText(sample: { record: ChartRecord }, suffix: string, rangeHours: number): string {
  const value = sample.record.value
  const shown = value === null ? '—' : `${value.toFixed(suffix === '%' ? 1 : 2)}${suffix}`
  return `${timeLabel(sample.record.time, rangeHours)} · ${shown}`
}
