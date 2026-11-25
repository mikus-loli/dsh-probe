/**
 * One source of truth for the two version numbers the project ships.
 *
 * The panel half and the agent scripts are released together: the panel tells
 * an operator that an agent is outdated by comparing the version an agent
 * reports against {@link AGENT_VERSION}, and /auth/dsh-probe/version.json
 * publishes the same pair. Keep this file, the two agent scripts and
 * package.json in step — test/versions.test.mjs fails the build otherwise.
 */

/** Version of the DSH plugin (panel half + host API). */
export const PANEL_VERSION = '0.2.0'

/** Version reported by agent.sh and agent.mjs. */
export const AGENT_VERSION = '0.2.0'

/** Current on-disk data schema (hosts.json / settings.json). */
export const SCHEMA_VERSION = 2
