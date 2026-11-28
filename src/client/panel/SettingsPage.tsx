/**
 * The probe settings page.
 *
 * Deliberately a separate surface from the monitoring panel rather than another
 * tab inside it: thresholds, retention and delivery are configuration, not
 * observation, and mixing the two is what made the old layout feel crowded. The
 * sidebar row is registered by `index.tsx`, so this renders as its own page with
 * its own header.
 */
import { useEffect, useRef, useState } from 'react'
import type { ProbeApi, ProbeDelivery, ProbeSettings } from '../api'
import type { ProbeKey } from '../locales'
import { errorMessage, tt } from './helpers'
import css from './panel.module.css'

/** Fill in the fields older settings documents do not carry yet. */
function withSettingsDefaults(settings: ProbeSettings | undefined): ProbeSettings | undefined {
  if (settings === undefined) return undefined
  return {
    ...settings,
    notify: settings.notify ?? { enabled: false, url: '', onResolve: true },
  }
}

const ruleRows: Array<{ key: 'cpu' | 'memory' | 'disk' | 'load'; label: string; unit: string; step: number }> = [
  { key: 'cpu', label: tt('settings.ruleCpu'), unit: '%', step: 5 },
  { key: 'memory', label: tt('settings.ruleMemory'), unit: '%', step: 5 },
  { key: 'disk', label: tt('settings.ruleDisk'), unit: '%', step: 5 },
  { key: 'load', label: tt('settings.ruleLoad'), unit: '×', step: 0.5 },
]

/**
 * The settings page shell: loads the snapshot, renders its own header, and
 * hands the settings down to the form body.
 */
export function SettingsPage({ api, onBack }: { api: ProbeApi; onBack: () => void }) {
  const [snapshot, setSnapshot] = useState<{ settings: ProbeSettings; versions: { panel: string; agent: string } } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = async (): Promise<void> => {
    try {
      const next = await api.snapshot()
      setSnapshot({ settings: next.settings, versions: next.versions })
      setError(null)
    } catch (cause) {
      setError(errorMessage(cause))
    }
  }

  useEffect(() => { void load() }, [])

  return (
    <div className={css.page} data-dsh-probe-settings="">
      <header className={css.topbar}>
        <div className={css.brand}>
          <button type="button" className={css.backButton} onClick={onBack}>
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.6 3.2 4.8 8l4.8 4.8" />
            </svg>
            {tt('action.back')}
          </button>
          <span className={css.brandMark} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3.2" />
              <path d="M19.4 15a1.7 1.7 0 0 0 0.3 1.9l0.1 0.1a2 2 0 1 1-2.8 2.8l-0.1-0.1a1.7 1.7 0 0 0-1.9-0.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-0.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9 0.3l-0.1 0.1a2 2 0 1 1-2.8-2.8l0.1-0.1a1.7 1.7 0 0 0 0.3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h0.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-0.3-1.9l-0.1-0.1a2 2 0 1 1 2.8-2.8l0.1 0.1a1.7 1.7 0 0 0 1.9 0.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v0.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-0.3l0.1-0.1a2 2 0 1 1 2.8 2.8l-0.1 0.1a1.7 1.7 0 0 0-0.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-0.1a1.7 1.7 0 0 0-1.5 1z" />
            </svg>
          </span>
          <span className={css.brandName}>{tt('settings.page')}</span>
        </div>
        <div className={css.topbarActions}>
          <button type="button" className={css.ghostButton} onClick={() => { void load() }}>
            {tt('action.refresh')}
          </button>
        </div>
      </header>

      {error !== null && <div className={css.errorBar}>{tt('error.load', { message: error })}</div>}

      <div className={css.body}>
        {snapshot === null
          ? <div className={css.section}><p className={css.muted}>{tt('chart.loading')}</p></div>
          : (
            <SettingsBody
              settings={snapshot.settings}
              versions={snapshot.versions}
              api={api}
              onSaved={next => { setSnapshot(current => current === null ? current : { ...current, settings: next }) }}
            />
          )}
        <GeoSection api={api} />
        <footer className={css.footer}>
          <span>Powered by DSH Probe</span>
          {snapshot !== null && (
            <span className={css.footerMeta}>
              {tt('footer.panel')} {snapshot.versions.panel} · {tt('footer.agent')} {snapshot.versions.agent}
            </span>
          )}
        </footer>
      </div>
    </div>
  )
}

/** Region lookup configuration: provider choice plus the offline database. */
function GeoSection({ api }: { api: ProbeApi }) {
  const [status, setStatus] = useState<{ provider: string; database: { present: boolean; bytes: number; updatedAt: number } } | null>(null)
  const [provider, setProvider] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [note, setNote] = useState<string | null>(null)

  const load = async (): Promise<void> => {
    try {
      const next = await api.geoStatus()
      setStatus(next)
      setError(null)
    } catch (cause) {
      setError(errorMessage(cause))
    }
  }

  useEffect(() => { void load() }, [])

  const download = async (): Promise<void> => {
    setBusy(true)
    setError(null)
    setNote(null)
    try {
      const result = await api.downloadGeoDatabase()
      if (result.ok) {
        setNote(tt('geo.downloaded'))
        await load()
      } else {
        setError(result.error ?? tt('geo.downloadFailed'))
      }
    } catch (cause) {
      setError(errorMessage(cause))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={css.section}>
      <div className={css.sectionHeader}>
        <span className={css.sectionTitle}>{tt('geo.title')}</span>
        <span className={css.sectionHint}>{tt('geo.desc')}</span>
      </div>

      <div className={css.settingsRow}>
        <label className={css.field}>
          <span className={css.fieldLabel}>{tt('geo.provider')}</span>
          <span className={css.inlineInput}>
            <select value={provider} onChange={event => { setProvider(event.target.value) }}>
              <option value="">{tt('geo.auto')}</option>
              <option value="mmdb">mmdb</option>
              <option value="ip-api">ip-api</option>
              <option value="geojs">geojs</option>
              <option value="ipinfo">ipinfo</option>
              <option value="none">{tt('geo.none')}</option>
            </select>
          </span>
        </label>
        <span className={css.field}>
          <span className={css.fieldLabel}>{tt('geo.active')}</span>
          <span className={css.mono}>{status?.provider ?? '—'}</span>
        </span>
      </div>

      <div className={css.settingsRow}>
        <span className={css.field}>
          <span className={css.fieldLabel}>{tt('geo.database')}</span>
          <span className={css.mono}>
            {status?.database.present
              ? tt('geo.databaseSize', { size: Math.round(status.database.bytes / 1024 / 1024) })
              : tt('geo.databaseMissing')}
          </span>
        </span>
        <button type="button" className={css.ghostButton} disabled={busy} onClick={() => { void download() }}>
          {busy ? tt('geo.downloading') : tt('geo.download')}
        </button>
      </div>

      {note !== null && <p className={css.savedNote}>{note}</p>}
      {error !== null && <div className={css.errorBar}>{tt('error.action', { message: error })}</div>}
      <p className={css.hint}>{tt('geo.hint')}</p>
    </div>
  )
}

export function SettingsBody({ settings, api, versions, onSaved }: {
  settings: ProbeSettings | undefined
  api: ProbeApi
  versions: { panel: string; agent: string } | undefined
  onSaved: (settings: ProbeSettings) => void
}) {
  const [draft, setDraft] = useState<ProbeSettings | undefined>(withSettingsDefaults(settings))
  const [dirty, setDirty] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<ProbeDelivery | null>(null)
  const savedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // A poll must not overwrite values the user is editing; only an untouched
  // draft follows the snapshot, and Save clears the flag.
  useEffect(() => { if (!dirty) setDraft(withSettingsDefaults(settings)) }, [settings, dirty])
  useEffect(() => () => { if (savedTimer.current !== null) clearTimeout(savedTimer.current) }, [])

  if (draft === undefined) {
    return <div className={css.section}><p className={css.muted}>{tt('chart.loading')}</p></div>
  }

  const updateRule = (key: keyof ProbeSettings['rules'], field: 'enabled' | 'threshold' | 'holdSec', value: boolean | number): void => {
    setDirty(true)
    setDraft(current => {
      if (current === undefined) return current
      const rules = { ...current.rules } as ProbeSettings['rules']
      const rule = { ...(rules[key] as Record<string, unknown>) }
      rule[field] = value
      rules[key] = rule as never
      return { ...current, rules }
    })
  }

  const updateNotify = (patch: Partial<ProbeSettings['notify']>): void => {
    setDirty(true)
    setDraft(current => current === undefined ? current : ({ ...current, notify: { ...current.notify, ...patch } }))
  }

  const urlValid = /^https?:\/\/\S+$/.test(draft.notify.url.trim())

  // The test must use the values on screen, so save the notify block first and
  // then ask the host to deliver one payload.
  const runTest = (): void => {
    setTesting(true)
    setTestResult(null)
    api.updateSettings({ notify: draft.notify })
      .then(() => api.testNotify())
      .then(result => setTestResult(result))
      .catch(caught => setTestResult({ ok: false, at: Date.now(), error: errorMessage(caught) }))
      .finally(() => setTesting(false))
  }

  const save = (): void => {
    setSaving(true)
    setError(null)
    api.updateSettings({
      rules: draft.rules,
      retentionDays: draft.retentionDays,
      reportIntervalSec: draft.reportIntervalSec,
      notify: draft.notify,
    })
      .then(next => {
        setDraft(next)
        setDirty(false)
        onSaved(next)
        setSaved(true)
        if (savedTimer.current !== null) clearTimeout(savedTimer.current)
        savedTimer.current = setTimeout(() => setSaved(false), 2500)
      })
      .catch(caught => setError(errorMessage(caught)))
      .finally(() => setSaving(false))
  }

  const ruleRows: Array<{ key: 'cpu' | 'memory' | 'disk' | 'load'; label: string; unit: string; step: number }> = [
    { key: 'cpu', label: tt('settings.ruleCpu'), unit: '%', step: 5 },
    { key: 'memory', label: tt('settings.ruleMemory'), unit: '%', step: 5 },
    { key: 'disk', label: tt('settings.ruleDisk'), unit: '%', step: 5 },
    { key: 'load', label: tt('settings.ruleLoad'), unit: '×', step: 0.5 },
  ]

  // The number inputs report 0 for an empty field; refuse to save that instead
  // of silently writing a threshold the user never chose.
  const invalid = ruleRows.some(row => {
    const rule = draft.rules[row.key]
    return !(rule.threshold >= 1) || !(rule.holdSec >= 0)
  }) || !(draft.rules.offline.holdSec >= 1) || !(draft.reportIntervalSec >= 1)
    || (draft.notify.enabled && !urlValid)

  return (
    <div className={css.section}>
      {error !== null && <div className={css.errorBar}>{tt('error.action', { message: error })}</div>}
      <div className={css.sectionHeader}>
        <span className={css.sectionTitle}>{tt('settings.title')}</span>
        <span className={css.sectionHint}>{tt('settings.desc')}</span>
      </div>

      <div className={css.settingsGrid}>
        {ruleRows.map(row => {
          const rule = draft.rules[row.key]
          return (
            <div key={row.key} className={css.settingsRow} data-disabled={rule.enabled ? undefined : 'true'}>
              <label className={css.check}>
                <input
                  type="checkbox"
                  checked={rule.enabled}
                  onChange={event => updateRule(row.key, 'enabled', event.target.checked)}
                />
                <span>{row.label}</span>
              </label>
              <label className={css.field}>
                <span className={css.fieldLabel}>{tt('settings.threshold')}</span>
                <span className={css.inlineInput}>
                  <input
                    type="number"
                    min={1}
                    max={row.key === 'load' ? 64 : 100}
                    step={row.step}
                    value={rule.threshold}
                    onChange={event => updateRule(row.key, 'threshold', Number(event.target.value))}
                    onBlur={() => { if (!(rule.threshold >= 1)) updateRule(row.key, 'threshold', 1) }}
                  />
                  <span className={css.unit}>{row.unit}</span>
                </span>
              </label>
              <label className={css.field}>
                <span className={css.fieldLabel}>{tt('settings.hold')}</span>
                <span className={css.inlineInput}>
                  <input
                    type="number"
                    min={0}
                    max={3600}
                    step={10}
                    value={rule.holdSec}
                    onChange={event => updateRule(row.key, 'holdSec', Number(event.target.value))}
                  />
                  <span className={css.unit}>{tt('unit.sec')}</span>
                </span>
              </label>
            </div>
          )
        })}
        <div className={css.settingsRow} data-disabled={draft.rules.offline.enabled ? undefined : 'true'}>
          <label className={css.check}>
            <input
              type="checkbox"
              checked={draft.rules.offline.enabled}
              onChange={event => updateRule('offline', 'enabled', event.target.checked)}
            />
            <span>{tt('settings.ruleOffline')}</span>
          </label>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('settings.hold')}</span>
            <span className={css.inlineInput}>
              <input
                type="number"
                min={10}
                max={3600}
                step={10}
                value={draft.rules.offline.holdSec}
                onChange={event => updateRule('offline', 'holdSec', Number(event.target.value))}
                onBlur={() => { if (!(draft.rules.offline.holdSec >= 1)) updateRule('offline', 'holdSec', 1) }}
              />
              <span className={css.unit}>{tt('unit.sec')}</span>
            </span>
          </label>
        </div>

        <div className={css.settingsRow}>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('settings.retention')}</span>
            <span className={css.inlineInput}>
              <select
                value={draft.retentionDays}
                onChange={event => {
                  setDirty(true)
                  setDraft({ ...draft, retentionDays: Number(event.target.value) })
                }}
              >
                {[1, 3, 7, 14, 30].map(days => <option key={days} value={days}>{days}</option>)}
              </select>
              <span className={css.unit}>{tt('settings.retentionUnit')}</span>
            </span>
          </label>
          <p className={css.hint}>{tt('settings.retentionDesc')}</p>
        </div>

        <div className={css.settingsRow}>
          <label className={css.field}>
            <span className={css.fieldLabel}>{tt('settings.interval')}</span>
            <span className={css.inlineInput}>
              <input
                type="number"
                min={1}
                max={60}
                step={1}
                value={draft.reportIntervalSec}
                onChange={event => {
                  setDirty(true)
                  setDraft({ ...draft, reportIntervalSec: Number(event.target.value) })
                }}
                onBlur={() => { if (!(draft.reportIntervalSec >= 1)) setDraft({ ...draft, reportIntervalSec: 1 }) }}
              />
              <span className={css.unit}>{tt('settings.intervalUnit')}</span>
            </span>
          </label>
          <p className={css.hint}>{tt('settings.intervalDesc')}</p>
        </div>
      </div>

      <div className={css.notifySection}>
        <div className={css.sectionHeader}>
          <span className={css.sectionTitle}>{tt('notify.title')}</span>
          <span className={css.sectionHint}>{tt('notify.desc')}</span>
        </div>
        <label className={css.check}>
          <input
            type="checkbox"
            checked={draft.notify.enabled}
            onChange={event => updateNotify({ enabled: event.target.checked })}
          />
          <span>{tt('notify.enabled')}</span>
        </label>
        <label className={css.field}>
          <span className={css.fieldLabel}>{tt('notify.url')}</span>
          <input
            className={css.input}
            value={draft.notify.url}
            placeholder="https://example.com/hooks/probe"
            onChange={event => updateNotify({ url: event.target.value })}
          />
          {draft.notify.enabled && !urlValid
            ? <span className={css.fieldError} role="alert">{tt('notify.invalidUrl')}</span>
            : <span className={css.hint}>{tt('notify.urlHint')}</span>}
        </label>
        <label className={css.check}>
          <input
            type="checkbox"
            checked={draft.notify.onResolve}
            onChange={event => updateNotify({ onResolve: event.target.checked })}
          />
          <span>{tt('notify.onResolve')}</span>
        </label>
        <div className={css.notifyTestRow}>
          <button
            type="button"
            className={css.ghostButton}
            disabled={testing || !urlValid}
            onClick={runTest}
          >
            {testing ? tt('notify.testing') : tt('notify.test')}
          </button>
          {testResult !== null && (
            <span className={testResult.ok ? css.tokenOk : css.tokenError} role="status">
              {testResult.ok
                ? tt('notify.testOk', { status: testResult.status ?? '-' })
                : tt('notify.testFail', { message: testResult.error ?? `HTTP ${testResult.status ?? '?'}` })}
            </span>
          )}
        </div>
      </div>

      <div className={css.saveRow}>
        <button type="button" className={css.primaryButton} disabled={saving || invalid} onClick={save}>
          {saving ? tt('action.saving') : tt('action.save')}
        </button>
        {saved && <span className={css.savedNote}>{tt('settings.saved')}</span>}
        {invalid && <span className={css.fieldError}>{tt('settings.invalid')}</span>}
        {versions !== undefined && (
          <span className={css.versionsNote}>{tt('about.versions', { panel: versions.panel, agent: versions.agent })}</span>
        )}
      </div>
    </div>
  )
}
