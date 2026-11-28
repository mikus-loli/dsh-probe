# dsh-probe agent

One small reporter per monitored server.

`agent/go/` builds one static binary — the only implementation. It is installed
from a GitHub release, not from the panel, so a monitored machine only needs
outbound HTTPS, and it upgrades itself from the same release channel.

```sh
curl -fsSL https://raw.githubusercontent.com/mikus-loli/dsh-probe/main/install.sh \
  | sudo DSPROBE_SERVER=https://dsh.example.com DSPROBE_TOKEN=<host token> sh
```

Releasing: `git tag v0.4.0 && git push origin v0.4.0` builds linux
amd64/arm64/armv7/386, writes `SHA256SUMS`, and attaches them to the release.

Both read the same Linux counters (`/proc/stat`, `/proc/meminfo`, `/proc/loadavg`,
`/sys/class/net/*/statistics`, `df`) and POST one JSON report per interval to the
panel's ingest endpoint.

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/mikus-loli/dsh-probe/main/install.sh \
  | sudo DSPROBE_SERVER=https://dsh.example.com DSPROBE_TOKEN=<host token> sh
```

The script resolves the latest release, verifies `SHA256SUMS`, installs
`/usr/local/bin/dsh-probe-agent`, and writes and starts the systemd unit.

| Variable | Default | Meaning |
| --- | --- | --- |
| `DSPROBE_SERVER` | — (required) | DSH web origin, no trailing slash |
| `DSPROBE_TOKEN` | — (required) | Per-host token; rotates from the panel |
| `DSPROBE_NAME` | machine hostname | Display name for the host |
| `DSPROBE_INTERVAL` | `3` | Seconds between reports |
| `DSPROBE_DISK` | `/` | Mount whose usage is reported |
| `DSPROBE_PUBLIC_IP` | detected | Egress address used for region lookup; set it on NATed hosts |
| `DSPROBE_AGENT_VERSION` | latest release | Pin a version when installing |

`dsh-probe-agent --version` prints the running version.

## Upgrade

The panel shows an update badge when a host reports an older `agentVersion`.
Clicking it queues an `agent.switchVersion` event: the agent downloads the
matching release asset, verifies `--version`, renames it into place and re-execs
itself. Re-running the installer does the same thing by hand.

The report schema is additive, so an older agent keeps working against a newer
panel (it simply will not report newer fields).
