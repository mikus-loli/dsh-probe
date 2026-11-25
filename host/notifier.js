/**
 * Optional webhook delivery for probe alerts.
 *
 * A webhook is deliberately the only outbound channel: it fits every chat
 * system, ticketing bridge and automation the user already runs, and it keeps
 * the plugin free of SMTP / vendor SDKs. Delivery is best effort and never
 * blocks metric ingest or the alert engine: one short-lived POST per event,
 * with the last result kept for the settings page.
 *
 * The URL comes from the user's own settings and is called by the host process,
 * so the panel (which is already fenced) is the trust boundary. Only http(s)
 * URLs are accepted.
 */

/** Convert one alert into the webhook body. */
function alertBody(event, alert, host) {
  return {
    source: 'dsh-probe',
    event,
    at: Date.now(),
    text: `[dsh-probe] ${alert.message}`,
    host: host === undefined ? null : { id: host.id, name: host.name },
    alert: {
      id: alert.id,
      rule: alert.rule,
      value: alert.value,
      threshold: alert.threshold,
      unit: alert.unit,
      startedAt: alert.startedAt,
      endedAt: alert.endedAt ?? null,
      durationSec: alert.durationSec ?? null,
      message: alert.message,
    },
  }
}

/**
 * Best-effort webhook sender for alert open / close events.
 */
export class WebhookNotifier {
  /**
   * @param options.store - probe store (settings + host lookup).
   * @param options.log - optional logger `(level, message)`.
   */
  constructor(options) {
    this.store = options.store
    this.log = options.log
    /** Last delivery outcome, or null before the first attempt. */
    this.last = null
  }

  /** Send one webhook payload and record the outcome. */
  async #post(payload) {
    const settings = this.store.getSettings().notify
    if (settings.enabled !== true) return { ok: false, error: 'notifications are disabled', at: Date.now(), event: payload.event }
    if (!/^https?:\/\/\S+$/i.test(settings.url)) {
      this.last = { ok: false, error: 'webhook URL is invalid', at: Date.now(), event: payload.event }
      return this.last
    }
    try {
      const response = await fetch(settings.url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(6000),
      })
      // Drain the body so the socket is reusable; the status is what matters.
      await response.text().catch(() => '')
      this.last = { ok: response.ok, status: response.status, at: Date.now(), event: payload.event }
      if (!response.ok) this.log?.('warn', `webhook answered ${response.status}`)
      return this.last
    } catch (error) {
      this.last = {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
        at: Date.now(),
        event: payload.event,
      }
      this.log?.('warn', `webhook delivery failed: ${this.last.error}`)
      return this.last
    }
  }

  /**
   * Deliver one alert event, honoring the enabled flag and the resolve toggle.
   * @param phase - 'open' or 'close'.
   * @param alert - the alert that changed.
   */
  notify(phase, alert) {
    const settings = this.store.getSettings().notify
    if (settings.enabled !== true) return
    if (alert.silent === true) return
    if (phase === 'close' && settings.onResolve !== true) return
    const host = this.store.find(alert.hostId)
    if (host === undefined) return
    void this.#post(alertBody(phase === 'open' ? 'alert.open' : 'alert.close', alert, host))
  }

  /** Send a test payload and return the delivery result. */
  async test() {
    const settings = this.store.getSettings().notify
    const result = await this.#post({
      source: 'dsh-probe',
      event: 'test',
      at: Date.now(),
      text: '[dsh-probe] test notification — the probe webhook is configured correctly.',
      host: null,
      alert: null,
      target: settings.url,
    })
    return result
  }
}
