/**
 * The probe's visual theme, taken from the Komari Mikus repository.
 *
 * The stylesheets are the upstream files, concatenated in the order the upstream
 * page loads them and re-rooted under the panel element by the build (see
 * `themeBundlePlugin`). Components use the theme's own class names — `node-card`,
 * `metric-bar-fill`, `modal-overlay` — so the two cannot drift apart.
 */
import themeCss from 'virtual:mikus-theme'
import mascotUrl from './QWQ.webp'

const STYLE_ID = 'dsh-probe/theme.css'

/** The mascot shown in the welcome band. */
export const MASCOT: string = mascotUrl

/** The concatenated, scoped stylesheet. */
export const THEME_CSS: string = themeCss

/**
 * Inject the theme once per document.
 *
 * A plugin reload replaces the stylesheet instead of stacking a second copy, so
 * edits show up without a full page reload.
 */
export function importTheme(): void {
  if (typeof document === 'undefined') return
  const existing = document.querySelector<HTMLStyleElement>(`style[data-plugin-css="${STYLE_ID}"]`)
  if (existing !== null) {
    if (existing.textContent !== THEME_CSS) existing.textContent = THEME_CSS
    return
  }
  const tag = document.createElement('style')
  tag.dataset.plugin = '@local/dsh-probe'
  tag.dataset.pluginCss = STYLE_ID
  tag.textContent = THEME_CSS
  document.head.appendChild(tag)
}
