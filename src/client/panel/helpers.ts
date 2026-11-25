/**
 * Small panel helpers: the active-dictionary pick bound to the dsh-probe
 * interpolator, and an error-message extractor. All copy lives in locales.ts.
 */
import { en, t, zh, type ProbeKey } from '../locales'

/** Template values accepted by the interpolator. */
export type TranslateValues = Record<string, string | number>

/** Active dictionary, picked by the document language at call time. */
export function dictionary(): Record<string, string> {
  const lang = (typeof document !== 'undefined' && document.documentElement.lang !== '' ? document.documentElement.lang : 'zh').toLowerCase()
  return lang.startsWith('zh') ? { ...zh } : { ...en }
}

/** SDK translate seat wired by the browser apply() once ctx.locale is bound. */
let runtimeT: ((key: ProbeKey, values?: TranslateValues) => string) | undefined

/** Wire the SDK translate seat; pass undefined to restore the document-language pick. */
export function setRuntimeTranslate(translate: ((key: ProbeKey, values?: TranslateValues) => string) | undefined): void {
  runtimeT = translate
}

/** Translate a key with optional {name} template params (current language). */
export function tt(key: ProbeKey, values?: TranslateValues): string {
  if (runtimeT !== undefined) return runtimeT(key, values)
  return t(dictionary(), key, values)
}

/** Human-readable error text from an unknown thrown value. */
export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

/** Copy text to the clipboard, returning whether it worked. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard !== undefined) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const area = document.createElement('textarea')
    area.value = text
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(area)
    return ok
  } catch {
    return false
  }
}
