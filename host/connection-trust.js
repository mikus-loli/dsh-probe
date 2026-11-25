/**
 * Optional bridge to the Host connection trust decision, so a remote browser
 * that was admitted by the deployment's remote-access plugin (for example
 * `@xgone/dsh-remote`) can reach the panel routes without the loopback fence.
 * A missing or throwing bridge is not an admission: the fence stays.
 */

/** Lazily read the connection service captured in the plugin's dependency scope. */
export function resolveConnection(ctx) {
  try {
    const candidate = typeof ctx.get === 'function'
      ? (ctx.get('connection', false) ?? ctx.get('connection'))
      : ctx.connection
    return candidate !== undefined && candidate !== null && (
      typeof candidate.admit === 'function' || typeof candidate.requestRejection === 'function'
    )
      ? candidate
      : undefined
  } catch {
    return undefined
  }
}

/** Whether the Host's own authenticated/trusted-host decision admits a request. */
export function connectionAdmits(connection, request) {
  if (connection === undefined) return false
  try {
    if (typeof connection.admit === 'function') {
      const admission = connection.admit(request)
      return admission.rejection === undefined && 'peer' in admission && admission.peer !== undefined
    }
    if (typeof connection.requestRejection === 'function') return connection.requestRejection(request) === undefined
    return false
  } catch {
    return false
  }
}

/**
 * Capture the connection service in a scope that also injects its
 * authentication half; the returned reader re-resolves when available.
 */
export function captureConnection(ctx, effectName) {
  let captured
  const inject = ctx.inject
  if (typeof inject === 'function') {
    inject.call(ctx, ['connection', 'connection.authentication'], (scoped) => {
      scoped.effect(() => {
        captured = resolveConnection(scoped)
        return () => {
          captured = undefined
        }
      }, effectName)
    })
  }
  return () => captured ?? resolveConnection(ctx)
}
