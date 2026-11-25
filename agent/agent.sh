#!/bin/sh
# dsh-probe-agent.sh — zero-runtime metric reporter for the DSH Probe panel.
#
# Reads the Linux counters that already exist (/proc/stat, /proc/meminfo,
# /proc/loadavg, /sys/class/net/*/statistics) plus `df`, then POSTs one JSON
# report per interval to the DSH instance that issued its token. The only
# external tools are the shell itself, `awk`, `df` and `curl` (or `wget`) — no
# Node, Python or package install on the monitored server.
#
# Configure through the environment (the panel's install card writes it):
#   DSPROBE_SERVER    https://dsh.example.com (the DSH web origin)
#   DSPROBE_TOKEN     per-host agent token from the Probe panel
#   DSPROBE_NAME      display name (defaults to the machine hostname)
#   DSPROBE_INTERVAL  report cadence in seconds, default 3
#   DSPROBE_DISK      mount to report disk usage for, default /
#   DSPROBE_ONCE      set to 1 to send a single report and exit

set -u

VERSION=0.2.0

case "${1:-}" in
  --version|-v)
    printf 'dsh-probe-agent %s\n' "$VERSION"
    exit 0
    ;;
esac

SERVER=${DSPROBE_SERVER:-}
TOKEN=${DSPROBE_TOKEN:-}
NAME=${DSPROBE_NAME:-$(hostname 2>/dev/null || echo unknown)}
INTERVAL=${DSPROBE_INTERVAL:-3}
DISK=${DSPROBE_DISK:-/}
ONCE=${DSPROBE_ONCE:-0}

if [ -z "$SERVER" ] || [ -z "$TOKEN" ]; then
  echo "dsh-probe-agent: DSPROBE_SERVER and DSPROBE_TOKEN are required" >&2
  exit 2
fi

# Normalize the server origin and build the ingest URL.
SERVER=${SERVER%/}
URL="$SERVER/auth/dsh-probe/ingest"

log() {
  printf '[dsh-probe-agent] %s\n' "$*" >&2
}

# Strip characters that would break the JSON string literal.
clean() {
  tr -d '\n\r"\\' | cut -c1-120
}

# Sample CPU tick counters: total and idle+io-wait.
cpu_raw() {
  awk '/^cpu / {
    total = 0
    for (i = 2; i <= NF; i++) total += $i
    idle = $5 + $6
    printf "%.0f %.0f\n", total, idle
  }' /proc/stat
}

# Sum network byte counters over every interface except loopback.
net_raw() {
  rx=0
  tx=0
  for dir in /sys/class/net/*; do
    [ -e "$dir/statistics/rx_bytes" ] || continue
    [ "$(basename "$dir")" = "lo" ] && continue
    r=$(cat "$dir/statistics/rx_bytes" 2>/dev/null || echo 0)
    t=$(cat "$dir/statistics/tx_bytes" 2>/dev/null || echo 0)
    rx=$((rx + r))
    tx=$((tx + t))
  done
  printf '%s %s\n' "$rx" "$tx"
}

# Memory numbers in bytes: total, used, swap total, swap used.
mem_raw() {
  awk '
    /^MemTotal:/ { total = $2 }
    /^MemAvailable:/ { available = $2 }
    /^MemFree:/ { free = $2 }
    /^SwapTotal:/ { swap_total = $2 }
    /^SwapFree:/ { swap_free = $2 }
    END {
      if (available == "") available = free
      printf "%.0f %.0f %.0f %.0f\n", total * 1024, (total - available) * 1024, swap_total * 1024, (swap_total - swap_free) * 1024
    }' /proc/meminfo
}

# Disk numbers in bytes for the configured mount.
disk_raw() {
  df -kP "$DISK" 2>/dev/null | awk 'NR == 2 { printf "%.0f %.0f\n", $2 * 1024, $3 * 1024 }'
}

# Total CPU count.
cpu_count() {
  count=$(getconf _NPROCESSORS_ONLN 2>/dev/null || true)
  if [ -z "$count" ] || [ "$count" -lt 1 ] 2>/dev/null; then
    count=$(grep -c '^processor' /proc/cpuinfo 2>/dev/null || echo 1)
  fi
  echo "$count"
}

# One report body. A 1 s gap between the two counter reads yields the CPU
# percentage and the network rates without keeping any state on disk.
report() {
  set -- $(cpu_raw)
  cpu_total_1=$1
  cpu_idle_1=$2
  set -- $(net_raw)
  rx_1=$1
  tx_1=$2

  sleep 1

  set -- $(cpu_raw)
  cpu_total_2=$1
  cpu_idle_2=$2
  set -- $(net_raw)
  rx_2=$1
  tx_2=$2

  cpu_pct=$(awk -v t1="$cpu_total_1" -v i1="$cpu_idle_1" -v t2="$cpu_total_2" -v i2="$cpu_idle_2" 'BEGIN {
    dt = t2 - t1
    di = i2 - i1
    if (dt <= 0) { print "0.0"; exit }
    p = 100 * (dt - di) / dt
    if (p < 0) p = 0
    if (p > 100) p = 100
    printf "%.1f", p
  }')
  # The two reads are exactly one second apart, so the byte deltas are rates.
  set -- $(awk -v r1="$rx_1" -v x1="$tx_1" -v r2="$rx_2" -v x2="$tx_2" 'BEGIN {
    dr = r2 - r1
    dx = x2 - x1
    if (dr < 0) dr = 0
    if (dx < 0) dx = 0
    printf "%.0f %.0f", dr, dx
  }')
  rx_rate=$1
  tx_rate=$2

  set -- $(mem_raw)
  mem_total=$1
  mem_used=$2
  swap_total=$3
  swap_used=$4

  set -- $(disk_raw)
  disk_total=${1:-0}
  disk_used=${2:-0}

  set -- $(cut -d' ' -f1-3 /proc/loadavg 2>/dev/null)
  load1=${1:-0}
  load5=${2:-0}
  load15=${3:-0}

  uptime=$(cut -d. -f1 /proc/uptime 2>/dev/null || echo 0)
  hostname=$(hostname 2>/dev/null | clean)
  os=$(uname -s 2>/dev/null | clean)
  kernel=$(uname -r 2>/dev/null | clean)
  arch=$(uname -m 2>/dev/null | clean)
  cores=$(cpu_count)
  cpu_model=$(awk -F': ' '/model name/ { print $2; exit }' /proc/cpuinfo 2>/dev/null | clean)
  disk_mount=$(printf '%s' "$DISK" | clean)

  printf '{"v":1,"agentVersion":"%s","hostname":"%s","os":"%s %s","arch":"%s","kernel":"%s","cores":%s,"cpuModel":"%s","uptime":%s,"cpu":%s,"mem":{"total":%s,"used":%s,"swapTotal":%s,"swapUsed":%s},"disk":{"mount":"%s","total":%s,"used":%s},"load":[%s,%s,%s],"net":{"rxRate":%s,"txRate":%s},"reportedAt":%s}' \
    "$VERSION" "$hostname" "$os" "$kernel" "$arch" "$kernel" "$cores" "$cpu_model" "$uptime" \
    "$cpu_pct" "$mem_total" "$mem_used" "$swap_total" "$swap_used" \
    "$disk_mount" "$disk_total" "$disk_used" \
    "$load1" "$load5" "$load15" "$rx_rate" "$tx_rate" \
    "$(date +%s)000"
}

# POST one report. curl first, wget as the fallback.
post() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsS --max-time 10 -o /dev/null -X POST "$URL" \
      -H 'content-type: application/json' \
      -H "x-probe-token: $TOKEN" \
      --data-binary "$1"
    return $?
  fi
  if command -v wget >/dev/null 2>&1; then
    wget -q -O /dev/null --header='content-type: application/json' \
      --header="x-probe-token: $TOKEN" --post-data="$1" "$URL"
    return $?
  fi
  log 'curl or wget is required to report'
  exit 3
}

sent=0
failures=0
stopping=0
trap 'stopping=1' INT TERM

log "reporting $NAME -> $URL every ${INTERVAL}s"

while [ "$stopping" -eq 0 ]; do
  payload=$(report)
  if post "$payload"; then
    sent=$((sent + 1))
    if [ "$sent" -eq 1 ]; then
      log "first report ok"
    fi
  else
    failures=$((failures + 1))
    if [ "$failures" -eq 1 ] || [ $((failures % 20)) -eq 0 ]; then
      log "report failed (${failures}x)"
    fi
  fi
  if [ "$ONCE" = "1" ]; then
    [ "$failures" -eq 0 ] && exit 0 || exit 1
  fi
  sleep "$INTERVAL"
done

exit 0
