# dsh-probe agent

One small reporter per monitored server. Two implementations ship here:

| File | Runtime | Notes |
| --- | --- | --- |
| `agent.sh` | `sh`, `awk`, `df`, `curl` (or `wget`) | Recommended; no Node needed |
| `agent.mjs` | Node 18+ | Single file, no npm install |

Both read the same Linux counters (`/proc/stat`, `/proc/meminfo`, `/proc/loadavg`,
`/sys/class/net/*/statistics`, `df`) and POST one JSON report per interval to the
panel's ingest endpoint.

## Run

```sh
DSPROBE_SERVER=https://dsh.example.com \
DSPROBE_TOKEN=<per-host token from the Probe panel> \
DSPROBE_NAME=web-1 \
sh agent.sh
```

| Variable | Default | Meaning |
| --- | --- | --- |
| `DSPROBE_SERVER` | — (required) | DSH web origin, no trailing slash |
| `DSPROBE_TOKEN` | — (required) | Per-host token; rotates from the panel |
| `DSPROBE_NAME` | machine hostname | Display name for logs |
| `DSPROBE_INTERVAL` | `3` | Seconds between reports |
| `DSPROBE_DISK` | `/` | Mount whose usage is reported |
| `DSPROBE_ONCE` | `0` | Shell agent: set to `1` for one report and exit |

`--version` prints the agent version for both scripts. `agent.mjs` also accepts
`--server`, `--token`, `--name`, `--interval`, `--disk` and `--once` flags.

## systemd

```ini
[Unit]
Description=DSH probe agent
After=network-online.target
Wants=network-online.target

[Service]
Environment="DSPROBE_SERVER=https://dsh.example.com"
Environment="DSPROBE_TOKEN=<token>"
Environment="DSPROBE_NAME=web-1"
Environment="DSPROBE_INTERVAL=3"
ExecStart=/bin/sh /usr/local/bin/dsh-probe-agent.sh
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

## Upgrade

The panel shows an update badge when a host reports an older `agentVersion`.
Upgrade by replacing the script and restarting the service — the token and the
unit file stay unchanged:

```sh
curl -fsSL https://dsh.example.com/auth/dsh-probe/agent.sh -o /usr/local/bin/dsh-probe-agent.sh
chmod 755 /usr/local/bin/dsh-probe-agent.sh
systemctl restart dsh-probe-agent
```

The report schema is additive, so an older agent keeps working against a newer
panel (it simply will not report newer fields). The version each host runs is
visible in the panel's detail page and in `probe_list`.
