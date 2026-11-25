/**
 * Shared HTTP helpers for the probe's route family: one bounded JSON body
 * reader and one JSON writer. The routes carry small JSON documents only, so
 * the cap is deliberately tight.
 */

/** Body cap for every JSON route (a report or a panel mutation). */
const MAX_JSON_BYTES = 64 * 1024

/** Parse a request body of at most `maxBytes` as JSON. Throws past the cap. */
export async function readBoundedJson(req, maxBytes = MAX_JSON_BYTES) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    const buffer = chunk
    size += buffer.length
    if (size > maxBytes) throw new Error('body too large')
    chunks.push(buffer)
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

/** Parse a body as JSON, or null when it is empty, malformed, or past the cap. */
export async function readJsonBody(req, maxBytes = MAX_JSON_BYTES) {
  try {
    const value = await readBoundedJson(req, maxBytes)
    return value !== null && typeof value === 'object' && !Array.isArray(value) ? value : null
  } catch {
    return null
  }
}

/** Write one JSON response. */
export function writeJson(res, status, body, headers = {}) {
  const payload = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'referrer-policy': 'no-referrer',
    'cache-control': 'no-store',
    ...headers,
  })
  res.end(payload)
}
