/**
 * The probe console: a left rail of sections with the chosen one on the right.
 *
 * Upstream keeps this split — the Mikus theme is a read-only wall and every
 * mutation lives in Komari's own `/admin` surface. The probe follows the same
 * division: the wall shows numbers, and this page is where hosts, latency
 * probes, alert rules and settings are changed. Sections are not tabs inside the
 * wall; they are separate entries of this console.
 */
import { useState } from 'react'
import type { ProbeApi, ProbeHost, ProbeSnapshot } from '../api'
import type { ProbeKey } from '../locales'
import { tt } from './helpers'
import css from './panel.module.css'

/** The console's sections. */
type Section = 'hosts' | 'latency' | 'alerts' | 'settings'

/** One rail entry. */
interface RailItem {
  key: Section
  label: ProbeKey
  icon: React.ReactElement
}

const RAIL: RailItem[] = [
  {
    key: 'hosts',
    label: 'admin.hosts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </svg>
    ),
  },
  {
    key: 'latency',
    label: 'admin.latency',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2.5-7 5 14 2.5-7h4" />
      </svg>
    ),
  },
  {
    key: 'alerts',
    label: 'admin.alerts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    key: 'settings',
    label: 'admin.settings',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
]

/** The console page. */
export function AdminPage({ snapshot, api, section, onSection, onBack, onChanged, hosts, onAdd, onEdit, onInstall, onDeleted, sections }: {
  snapshot: ProbeSnapshot
  api: ProbeApi
  section: Section
  onSection: (section: Section) => void
  onBack: () => void
  onChanged: () => void
  hosts: ProbeHost[]
  onAdd: () => void
  onEdit: (host: ProbeHost) => void
  onInstall: (host: ProbeHost) => void
  onDeleted: () => void
  sections: Record<Section, React.ReactNode>
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={css.admin} data-dsh-probe-admin="">
      <header className={css.adminTopbar}>
        <button type="button" className={css.adminBack} onClick={onBack}>
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.6 3.2 4.8 8l4.8 4.8" />
          </svg>
          {tt('admin.back')}
        </button>
        <span className={css.adminTitle}>{tt('admin.title')}</span>
        <button
          type="button"
          className={css.adminMenu}
          aria-label={tt('admin.title')}
          onClick={() => { setOpen(current => !current) }}
        >
          <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
          </svg>
        </button>
      </header>

      <div className={css.adminBody}>
        <nav className={css.adminRail} data-open={open ? 'true' : undefined}>
          {RAIL.map(item => (
            <button
              key={item.key}
              type="button"
              className={css.adminRailItem}
              data-active={section === item.key ? 'true' : undefined}
              onClick={() => { onSection(item.key); setOpen(false) }}
            >
              <span className={css.adminRailIcon}>{item.icon}</span>
              <span>{tt(item.label)}</span>
              {item.key === 'alerts' && snapshot.alerts.active.length > 0 && (
                <span className={css.adminRailBadge}>{snapshot.alerts.active.length}</span>
              )}
            </button>
          ))}
        </nav>

        <div className={css.adminContent}>
          {sections[section]}
        </div>
      </div>
    </div>
  )
}
