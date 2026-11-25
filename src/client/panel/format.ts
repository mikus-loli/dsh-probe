/** Formatting helpers shared by the probe panel: sizes, percents, ages, uptime. */
import { tt } from './helpers'

/** Format a byte count with binary units. */
export function bytes(value: number | undefined): string {
  if (value === undefined || !Number.isFinite(value) || value <= 0) return '0 B'
  const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB']
  let index = 0
  let size = value
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024
    index += 1
  }
  return `${size >= 100 ? Math.round(size) : size.toFixed(1)} ${units[index]}`
}

/** Format a rate in bytes/second. */
export function rate(value: number | undefined): string {
  return `${bytes(value)}/s`
}

/** Format a percentage. */
export function percent(value: number | undefined): string {
  if (value === undefined || !Number.isFinite(value)) return '—'
  return `${Math.round(value * 10) / 10}%`
}

/** Format a load average. */
export function load(value: number | undefined): string {
  if (value === undefined || !Number.isFinite(value)) return '—'
  return value.toFixed(2)
}

/** Format an uptime in seconds as a compact human duration. */
export function uptime(seconds: number | undefined): string {
  if (seconds === undefined || !Number.isFinite(seconds) || seconds <= 0) return '—'
  return durationShort(seconds)
}

/** Format a duration in seconds as `3d 4h`, `2h 5m`, `42m`, `12s`. */
export function durationShort(seconds: number): string {
  const total = Math.max(0, Math.round(seconds))
  const days = Math.floor(total / 86400)
  const hours = Math.floor((total % 86400) / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  if (minutes > 0) return `${minutes}m`
  return `${total}s`
}

/** Format how long ago a timestamp was. */
export function ago(timestamp: number | undefined): string {
  if (timestamp === undefined || timestamp === 0) return tt('time.never')
  const seconds = Math.max(0, Math.round((Date.now() - timestamp) / 1000))
  if (seconds < 5) return tt('time.justNow')
  if (seconds < 60) return `${seconds}${tt('unit.sec')}`
  if (seconds < 3600) return `${Math.round(seconds / 60)}m`
  if (seconds < 86400) return `${Math.round(seconds / 3600)}h`
  return `${Math.round(seconds / 86400)}d`
}

