# Changelog

All notable changes to this project are documented here. The panel and the
agent scripts are released together; their versions always match
(`host/version.js`).

## 0.2.0 — 2026-11-25

### Panel

- Overview upgraded from a card wall to a manageable list: fleet summary
  (online / active alerts / average CPU / average memory), search over name,
  tag, location and hostname, status filters (all / online / offline /
  waiting), card ↔ table view switch (remembered in `localStorage`), sortable
  table columns, and an empty-filter state.
- Per-host maintenance mute: silence a host for an hour from the detail page
  (or `probe_manage` `mute` / `unmute`). Metrics keep flowing, alerts stay
  quiet, active alerts close silently.
- Alert webhook: optional HTTP POST on alert open/resolve with a JSON body
  (`source`, `event`, `text`, `host`, `alert`), a "send test" button, and a
  toggle for resolve notifications.
- Agent update visibility: a host reporting an older `agentVersion` gets an
  "update" badge and an upgrade command that keeps its token.
- Settings draft is no longer reset by the five-second poll; invalid numbers
  block saving.

### Agent

- `--version` for both agents.
- Version is reported with every sample, so the panel can spot outdated hosts.

### Data and delivery

- Data schema is now versioned (schema 2). A v1 data directory is migrated with
  a timestamped `.bak` copy; a document written by a newer panel is read-only
  rather than downgraded.
- Public `/auth/dsh-probe/version.json` publishes the panel and agent versions.
- Test suite (`node --test`) and GitHub Actions CI (build + tests).
- Agent sources moved to `agent/` to keep the panel and agent halves separate.

## 0.1.0 — 2026-11-25

- First release: DSH web panel with host cards, 1h/24h/7d trends, threshold
  alerts, agent install cards, shell and Node agents, and `probe_*` tools.
