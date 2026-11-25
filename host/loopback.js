/**
 * Loopback trust fence for the panel's own route family.
 *
 * A route registered directly on the web server does not pass through the
 * browser-session gate that owns `/api`, so the route must fence itself. A
 * reverse proxy in front of the host dials 127.0.0.1 and rewrites the Host
 * header, so both halves of the fence still hold for a proxied local request;
 * a request that carries a forwarding header is refused because a hop stood in
 * between (unless the deployment's own Caddy entry strips those headers for
 * this path family, as the shipped configuration does for every fenced UI
 * route).
 */

import { isIPv4Loopback } from './ip.js'

/** Whether a socket address names the loopback range (127/8, ::1, IPv4-mapped). */
export function isLoopbackAddress(address) {
  if (address === undefined) return false
  const normalized = address.toLowerCase()
  if (normalized === '::1') return true
  if (normalized.startsWith('::ffff:')) return isIPv4Loopback(normalized.slice('::ffff:'.length))
  return isIPv4Loopback(normalized)
}

/** Whether a normalized URL hostname names the loopback authority. */
export function isLoopbackHostname(hostname) {
  if (hostname === 'localhost' || hostname === '[::1]') return true
  return isIPv4Loopback(hostname)
}

/** Whether a reverse proxy stood between the client and this host. */
export function isProxiedRequest(request) {
  return request.headers['cf-connecting-ip'] !== undefined
    || request.headers['x-forwarded-for'] !== undefined
}

/** Request-level loopback fence: loopback socket, loopback Host, same-origin browser markers. */
export function isLoopbackRequest(request) {
  if (!isLoopbackAddress(request.socket.remoteAddress)) return false
  if (isProxiedRequest(request)) return false
  const host = request.headers.host
  if (typeof host !== 'string') return false
  let hostUrl
  try {
    hostUrl = new URL('http://' + host)
  } catch {
    return false
  }
  if (!isLoopbackHostname(hostUrl.hostname)) return false
  if (request.headers['sec-fetch-site'] === 'cross-site') return false
  const origin = request.headers.origin
  if (origin === undefined) return true
  try {
    return new URL(origin).host === hostUrl.host
  } catch {
    return false
  }
}
