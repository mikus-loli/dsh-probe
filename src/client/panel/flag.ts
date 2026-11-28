/**
 * Country flag rendering, ported from the Mikus theme's `utils/flag.js`.
 *
 * The flag is an image, not an emoji. A flag emoji is two regional indicator
 * letters, so on any host without an emoji font it degrades to exactly those
 * two letters — which is how "🇭🇰" turns into "HK". Upstream ships one SVG per
 * country and the panel serves those same files, so the crest is a real flag
 * everywhere.
 */

/** Path of the packaged flag directory on the panel's own origin. */
const FLAG_BASE = '/auth/dsh-probe/flags/'

/**
 * Whether a code names a country the flag set can render.
 * @param code - two-letter ISO 3166-1 alpha-2 code.
 */
export function hasFlag(code: string | undefined): boolean {
  return /^[a-z]{2}$/i.test((code ?? '').trim())
}

/**
 * URL of one country's flag.
 * @param code - two-letter ISO 3166-1 alpha-2 code, any case.
 * @returns the SVG URL, or an empty string when the code is unusable.
 */
export function flagUrl(code: string | undefined): string {
  const value = (code ?? '').trim().toLowerCase()
  if (!/^[a-z]{2}$/.test(value)) return ''
  return `${FLAG_BASE}${value}.svg`
}
