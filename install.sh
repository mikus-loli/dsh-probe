#!/bin/sh
# dsh-probe-agent installer.
#
# Downloads a published build from GitHub releases and registers it as a systemd
# service. Nothing here needs the panel to be reachable: a monitored machine can
# install with outbound HTTPS only, and the agent later upgrades itself from the
# same place.
#
# Usage:
#   curl -fsSL https://github.com/mikus-loli/dsh-probe/releases/latest/download/install.sh | \
#     sudo DSPROBE_SERVER=https://dsh.example.com DSPROBE_TOKEN=<host token> sh
#
# Environment:
#   DSPROBE_SERVER           panel origin (required)
#   DSPROBE_TOKEN            per-host agent token (required)
#   DSPROBE_NAME             display name, defaults to the machine hostname
#   DSPROBE_INTERVAL         report cadence in seconds, default 3
#   DSPROBE_AGENT_VERSION    pin a version instead of the latest release
#   DSPROBE_INSTALL_PATH     binary location, default /usr/local/bin/dsh-probe-agent
set -eu

REPO=${DSPROBE_REPO:-mikus-loli/dsh-probe}
SERVER=${DSPROBE_SERVER:-}
TOKEN=${DSPROBE_TOKEN:-}
NAME=${DSPROBE_NAME:-$(hostname 2>/dev/null || echo unknown)}
INTERVAL=${DSPROBE_INTERVAL:-3}
TARGET=${DSPROBE_INSTALL_PATH:-/usr/local/bin/dsh-probe-agent}

if [ -z "$SERVER" ] || [ -z "$TOKEN" ]; then
  echo "dsh-probe-agent: DSPROBE_SERVER and DSPROBE_TOKEN are required" >&2
  exit 2
fi

# Map the kernel's machine name onto the release matrix's architecture names.
machine=$(uname -m)
case "$machine" in
  x86_64|amd64) arch=amd64 ;;
  aarch64|arm64) arch=arm64 ;;
  armv7l|armv7) arch=arm7 ;;
  armv6l|armv6) arch=arm6 ;;
  i386|i486|i586|i686) arch=386 ;;
  *) echo "dsh-probe-agent: unsupported architecture $machine" >&2; exit 1 ;;
esac

if [ "$(uname -s)" != "Linux" ]; then
  echo "dsh-probe-agent: only Linux is supported" >&2
  exit 1
fi

# Resolve the version to install: an explicit pin, else the latest release tag.
version=${DSPROBE_AGENT_VERSION:-}
if [ -z "$version" ]; then
  latest=$(curl -fsSL "https://api.github.com/repos/$REPO/releases/latest" 2>/dev/null \
    | sed -n 's/.*"tag_name": *"v\{0,1\}\([^"]*\)".*/\1/p' | head -n 1)
  if [ -z "$latest" ]; then
    echo "dsh-probe-agent: could not resolve the latest release; set DSPROBE_AGENT_VERSION" >&2
    exit 1
  fi
  version=$latest
fi

asset="dsh-probe-agent_${version}_linux_${arch}"
base="https://github.com/$REPO/releases/download/v${version}"

echo "dsh-probe-agent: installing ${version} (${arch}) -> ${TARGET}"
tmp="${TARGET}.download"
if ! curl -fsSL "$base/$asset" -o "$tmp"; then
  echo "dsh-probe-agent: download failed: $base/$asset" >&2
  rm -f "$tmp"
  exit 1
fi

# Verify when the release published a checksum list.
if curl -fsSL "$base/SHA256SUMS" -o /tmp/dsh-probe-SHA256SUMS 2>/dev/null; then
  expected=$(awk -v name="$asset" '$2 == name { print $1 }' /tmp/dsh-probe-SHA256SUMS)
  if [ -n "$expected" ]; then
    actual=$(sha256sum "$tmp" | awk '{ print $1 }')
    if [ "$expected" != "$actual" ]; then
      echo "dsh-probe-agent: checksum mismatch (expected $expected, got $actual)" >&2
      rm -f "$tmp"
      exit 1
    fi
  fi
fi

chmod 755 "$tmp"
mv -f "$tmp" "$TARGET"
"$TARGET" --version

cat >/etc/systemd/system/dsh-probe-agent.service <<UNIT
[Unit]
Description=DSH probe agent
After=network-online.target
Wants=network-online.target

[Service]
Environment=DSPROBE_SERVER=$SERVER
Environment=DSPROBE_TOKEN=$TOKEN
Environment="DSPROBE_NAME=$NAME"
Environment=DSPROBE_INTERVAL=$INTERVAL
ExecStart=$TARGET
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
UNIT

chmod 600 /etc/systemd/system/dsh-probe-agent.service
systemctl daemon-reload
systemctl enable --now dsh-probe-agent
echo "dsh-probe-agent: started; follow with: journalctl -u dsh-probe-agent -f"
