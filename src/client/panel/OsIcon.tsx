/**
 * The distro glyph drawn beside a host name, ported from the komari-mikus card
 * header. The stylesheet carries every icon as a `--probe-os-<key>` CSS
 * background (inlined data URI), so the component only picks the variable —
 * no extra network request and no asset route to configure.
 */
import type { OsIconKey } from './os-icon.ts'
import css from './panel.module.css'

/** One OS glyph. */
export function OsIcon({ icon }: { icon: OsIconKey }) {
  return <span className={css.osIcon} data-os={icon} aria-hidden="true" />
}
