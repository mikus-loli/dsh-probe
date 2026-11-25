/**
 * Browser-half entry for the dsh-probe plugin — runs inside the dsh web GUI.
 *
 * Registers the probe locale dictionaries and contributes the sidebar entry
 * row and the center-column panel. Both seats belong to shell plugins this
 * package does not depend on at runtime, so each registration goes through
 * `ctx.slots.inject`: the callback runs only after the owning shell entry
 * declares the seat, and a shell that never declares it leaves the panel
 * absent instead of failing the GUI boot.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
// Type-only: pulls the locale plugin's Context merge (ctx.locale).
import type {} from '@deepseek-ai/dsh-client-locale/client'
// Type-only: pulls the renderer's ctx.slots merge.
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
// Type-only: pulls the LocaleNamespaceMap merge table.
import type {} from '@deepseek-ai/dsh-client-ui-slots'
import { ProbeApi } from './api'
import { en, zh, type ProbeKey } from './locales'
import { setRuntimeTranslate, tt } from './panel/helpers'
import { ProbePanel } from './panel/ProbePanel'

/** Locale namespace this plugin owns. */
const NS = 'dsh-probe'

/** The panel id shared by the sidebar row and the main-slot occupant. */
export const PROBE_PANEL_ID = 'probe'

/** Row order among the shell's global panel rows (Plugins 0, Schedule 10, SSH 40). */
const PANEL_ORDER = 45

/** Required client services. */
export const inject = ['slots', 'locale']

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** dsh-probe surface copy. */
    'dsh-probe': ProbeKey
  }
}

/** The sidebar row glyph, drawn at the shell's requested size. */
export function ProbePanelIcon({ size }: { size: number; active: boolean }): React.ReactElement {
  return (
    <svg
      data-dsh-panel-entry={PROBE_PANEL_ID}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1.6" y="2.4" width="12.8" height="9.4" rx="1.6" />
      <path d="M3.4 7.6h2l1.1-2.6 1.6 5 1.3-3.6 1 1.2h2.2" />
      <path d="M5.6 14.2h4.8" />
    </svg>
  )
}

/** The main-slot page. */
function ProbePage({ api }: { api: ProbeApi }): React.ReactElement {
  return <ProbePanel api={api} />
}

/**
 * Mount the probe panel.
 * @param ctx - client root context (slots + locale).
 */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => {
    try {
      return ctx.locale.register(NS, { zh, en })
    } catch {
      return () => {}
    }
  }, 'dsh-probe: dictionaries')

  // The panel's plain-text callers read the active locale through this seat.
  try { setRuntimeTranslate(ctx.locale.bind(NS)) } catch { /* document-language fallback stays */ }

  const api = new ProbeApi()
  const slots = ctx.slots as {
    inject(key: string, callback: () => () => void): () => void
    register(options: Record<string, unknown>, component: unknown): () => void
  }
  const disposers: Array<() => void> = []
  try {
    disposers.push(slots.inject('sidebar.panellist', () => slots.register({
      name: 'sidebar.panellist',
      id: PROBE_PANEL_ID,
      order: PANEL_ORDER,
      // The shell resolves this through the active locale on every change.
      label: () => tt('entry.label'),
    }, ProbePanelIcon)))

    disposers.push(slots.inject('main', () => slots.register({
      name: 'main',
      key: PROBE_PANEL_ID,
      inject: () => ({ api }),
    }, ProbePage as never)))
  } catch (error) {
    // Registration failures degrade the panel, never the GUI.
    console.warn('[dsh-probe] panel registration failed:', error)
  }
  ctx.effect(() => () => {
    for (const dispose of disposers.splice(0)) dispose()
  }, 'dsh-probe: ui mounts')
}
