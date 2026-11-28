# Changelog

All notable changes to this project are documented here. The panel and the agent
are released together; their versions always match (`host/version.js` and
`agent/go/version.go`). Entries that mention `agent.sh` / `agent.mjs` describe
releases from before 0.4.0, when the agent was still a script.

## 0.4.0 — 2026-11-29

The panel becomes a reproduction of the Komari Mikus theme, and the agent becomes
a real program published from this repository.

### Agent — now a binary

- `agent/go/` replaces `agent.sh` and `agent.mjs`. One static binary, no runtime
  dependency, about 5.8 MB after stripping.
- Published per release as `dsh-probe-agent_<version>_linux_{amd64,arm64,arm7,386}`
  with `SHA256SUMS`, built by `.github/workflows/release.yml` on a `v*` tag.
- `install.sh` resolves the latest release, verifies the checksum, installs
  `/usr/local/bin/dsh-probe-agent` and registers the systemd unit. A monitored
  machine needs outbound HTTPS only — never the panel.
- The panel no longer serves agent sources; `version.json` points at the release
  channel instead.
- Self-upgrade downloads the matching release asset, verifies `--version`, and
  replaces itself in place (same event, new source).
- Latency probes (ICMP / TCP / HTTP) moved into the binary; the TCP probe now
  measures the handshake directly instead of shelling out to curl.

### Panel — the theme, ported

- The theme's own stylesheets ship with the plugin: 13 files, re-rooted under the
  panel element at build time so they cannot repaint the GUI. Keyframes are
  renamed and their `animation` references rewritten in one pass.
- The monitoring page emits the upstream DOM: `.header`, `.welcome-section` with
  the mascot and sakura petals, `.stats-bar` with the group filter,
  `.nodes-grid`, `.nodes-table-container`, footer.
- Clicking a card opens the upstream node modal: 12-item `.modal-info` grid,
  time-range control, and the theme's canvas charts (grid, gradient fill, dots,
  first/last time labels, hover tooltip).
- The table view is the theme's `.table-card` list, not a `<table>`.
- Real SVG flags served from `/auth/dsh-probe/flags/<cc>.svg`; the theme's OS
  icons are inlined as data URIs so they survive the lack of a base URL.
- The invented tab bar is gone. Monitoring reads; the console (left rail: hosts,
  latency, alerts, settings) mutates.
- Theme toggle with a persisted choice; the detail modal follows it.

### Backend

- Region detection follows Komari: mmdb (offline), ip-api, geojs, ipinfo, with
  automatic fallback and a per-provider cache.
- Agents report their own egress address, so a host reporting over loopback is
  still located.
- Server-to-agent event queue (ack + TTL) carries latency probes and version
  switches.
- Latency tasks (ICMP / TCP / HTTP) with per-host sample rings.

### Fixes

- The theme's `* { margin:0; padding:0 }` outranked single-class rules and zeroed
  the console's padding; the theme scope is now the wall only.
- Keyframe references pointed at renamed frames, leaving the modal's info items
  at `opacity: 0` — present in the DOM, invisible on screen.
- The modal rendered outside the theme subtree and never received
  `position: fixed`.
- `syscall.Utsname` is `[65]int8` on amd64 but `[65]uint8` on arm, which broke
  only the armv7 release build.

## 0.3.0 — 2026-11-26

Komari-alignment, part 1: the report now carries the fields an operator
actually reads after CPU/memory.

### Agent (both `agent.sh` and `agent.mjs`)

- **Connections**: established TCP sockets plus open UDP sockets, counted from
  `/proc/net/tcp{,6}` (state `01`) and `/proc/net/udp{,6}`.
- **Cumulative traffic**: `totalRx` / `totalTx` alongside the existing rates, so
  monthly traffic accounting becomes a subtraction instead of a guess. Values
  are the interface counters already summed for the rate calculation.
- **GPU** (optional): one `nvidia-smi` line when the tool exists —
  name, VRAM total/used, utilisation, temperature. Absent on hosts without a
  GPU, and a missing/failing `nvidia-smi` never fails the report.
- Distro identity from `/etc/os-release` (`PRETTY_NAME`), falling back to
  `NAME`+`VERSION_ID` and finally `uname -s`.

### Panel

- Host detail gains three tiles: **Connections** (TCP count, UDP in the
  sub-line), **Total traffic** (cumulative down/up) and **GPU** (only when the
  host reports one: utilisation, VRAM, temperature).
- Minute history rows now carry the average TCP/UDP connection counts
  (`tc` / `uc`) for trend use; older rows simply lack the keys.

### Tools

- `probe_status` text now prints `conn tcp N udp M` and cumulative traffic;
  both `probe_list` and `probe_status` schemas declare the new sample fields.

### Fixes

- An absent GPU stored `NaN`, which made the tool layer reject the payload as
  not losslessly serialisable. Absent values are now `0`, and the panel keys
  off `gpuName !== ''` to decide whether to render the tile.
- `agentOutdated` compared versions by inequality, so an agent newer than the
  panel was flagged "update available" pointing *backwards*. Only a strictly
  older version is flagged now.

## 0.2.1 — 2026-11-25

- Fix: the committed `lib/client.js` is now independent of the checkout path
  (esbuild used to embed the absolute CSS-module path), so a rebuild on GitHub
  Actions is byte-identical and the CI bundle check passes.

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
