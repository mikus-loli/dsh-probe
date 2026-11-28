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

VERSION=0.4.0

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

# Read one /etc/os-release field, unquoting the value. Empty when absent.
os_release_field() {
  [ -r /etc/os-release ] || return 0
  sed -n "s/^$1=//p" /etc/os-release 2>/dev/null | head -n 1 \
    | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//"
}

# Join a distro name and version id, unless the name already repeats it.
_os_join() {
  case "$1" in
    *"$2"*) printf '%s' "$1" ;;
    *) printf '%s %s' "$1" "$2" ;;
  esac
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

# TCP established + UDP socket counts, the pair Komari reports as "connections".
conn_raw() {
  tcp=0
  udp=0
  for f in /proc/net/tcp /proc/net/tcp6; do
    [ -r "$f" ] || continue
    # Field 4 is the socket state; 01 is ESTABLISHED.
    n=$(awk 'NR > 1 && $4 == "01"' "$f" 2>/dev/null | wc -l)
    tcp=$((tcp + n))
  done
  for f in /proc/net/udp /proc/net/udp6; do
    [ -r "$f" ] || continue
    n=$(awk 'NR > 1' "$f" 2>/dev/null | wc -l)
    udp=$((udp + n))
  done
  printf '%s %s\n' "$tcp" "$udp"
}

# First GPU summary line, when nvidia-smi is installed. Empty otherwise: most
# hosts have no GPU, and a missing tool must not fail the report.
gpu_raw() {
  command -v nvidia-smi >/dev/null 2>&1 || return 0
  nvidia-smi --query-gpu=name,memory.total,memory.used,utilization.gpu,temperature.gpu     --format=csv,noheader,nounits 2>/dev/null | head -n 1
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
# ---------------------------------------------------------------------------
# Public address. The panel locates a host by its address, and a machine
# reporting to 127.0.0.1 (or through a LAN proxy) would otherwise never have
# one: the loopback source address carries no geography. So the agent asks for
# its own egress address, the same field Komari's basicInfo reports.
# ---------------------------------------------------------------------------

# Cached public address for the process lifetime; empty when unavailable.
public_ip_cached=''
public_ip_fetched=0

# Egress IPv4 of this machine, or empty. Cheap endpoints, short timeout, and
# attempted only once: a machine without internet access must not pay a lookup
# on every single report.
public_ip() {
  if [ "$public_ip_fetched" = "1" ]; then printf '%s' "$public_ip_cached"; return 0; fi
  public_ip_fetched=1
  # An explicitly configured address wins, for hosts behind NAT.
  if [ -n "${DSPROBE_PUBLIC_IP:-}" ]; then
    public_ip_cached=$(printf '%s' "$DSPROBE_PUBLIC_IP" | clean)
    printf '%s' "$public_ip_cached"
    return 0
  fi
  for url in https://api.ipify.org https://ifconfig.me/ip https://ipinfo.io/ip; do
    if command -v curl >/dev/null 2>&1; then
      answer=$(curl -fsS --max-time 4 "$url" 2>/dev/null)
    elif command -v wget >/dev/null 2>&1; then
      answer=$(wget -q -O - --timeout=4 "$url" 2>/dev/null)
    else
      return 0
    fi
    answer=$(printf '%s' "$answer" | clean)
    case "$answer" in
      *[!0-9.]*|'') continue ;;
      *.*.*.*) public_ip_cached=$answer; printf '%s' "$public_ip_cached"; return 0 ;;
    esac
  done
  return 0
}

report() {
  # Optional extra JSON members, already serialised (no leading comma).
  extra=${1:-}
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

  set -- $(conn_raw)
  conn_tcp=${1:-0}
  conn_udp=${2:-0}

  gpu_line=$(gpu_raw)

  set -- $(cut -d' ' -f1-3 /proc/loadavg 2>/dev/null)
  load1=${1:-0}
  load5=${2:-0}
  load15=${3:-0}

  uptime=$(cut -d. -f1 /proc/uptime 2>/dev/null || echo 0)
  hostname=$(hostname 2>/dev/null | clean)
  # Distro name, not just the kernel family: /etc/os-release carries the
  # human-readable identity (e.g. "Debian GNU/Linux 13 (trixie)"), while
  # `uname -s` only ever answers "Linux". Falls back through NAME+VERSION_ID
  # and finally the kernel family for systems without os-release.
  os=$(os_release_field PRETTY_NAME)
  if [ -z "$os" ]; then
    _os_name=$(os_release_field NAME)
    _os_ver=$(os_release_field VERSION_ID)
    if [ -n "$_os_name" ] && [ -n "$_os_ver" ]; then os="$(_os_join "$_os_name" "$_os_ver")"
    elif [ -n "$_os_name" ]; then os=$_os_name
    fi
  fi
  if [ -z "$os" ]; then os=$(uname -s 2>/dev/null | clean); fi
  os=$(printf '%s' "$os" | clean)
  kernel=$(uname -r 2>/dev/null | clean)
  arch=$(uname -m 2>/dev/null | clean)
  cores=$(cpu_count)
  cpu_model=$(awk -F': ' '/model name/ { print $2; exit }' /proc/cpuinfo 2>/dev/null | clean)
  disk_mount=$(printf '%s' "$DISK" | clean)

  # The reported address lets a loopback or proxied agent still be located.
  ip_json=''
  _ip=$(public_ip)
  if [ -n "$_ip" ]; then ip_json=",\"ip\":\"$_ip\""; fi

  # GPU is optional: only append the key when nvidia-smi produced a line.
  gpu_json=''
  if [ -n "$gpu_line" ]; then
    gpu_json=$(printf '%s' "$gpu_line" | awk -F', *' '{
      gsub(/"/, "", $1)
      printf ",\"gpu\":{\"name\":\"%s\",\"memTotal\":%d,\"memUsed\":%d,\"usage\":%s,\"temp\":%s}", $1, $2 * 1048576, $3 * 1048576, $4, $5
    }')
  fi

  printf '{"v":1,"agentVersion":"%s","hostname":"%s","os":"%s","arch":"%s","kernel":"%s","cores":%s,"cpuModel":"%s","uptime":%s,"cpu":%s,"mem":{"total":%s,"used":%s,"swapTotal":%s,"swapUsed":%s},"disk":{"mount":"%s","total":%s,"used":%s},"load":[%s,%s,%s],"net":{"rxRate":%s,"txRate":%s,"totalRx":%s,"totalTx":%s},"conn":{"tcp":%s,"udp":%s}%s%s,"reportedAt":%s%s}' \
    "$VERSION" "$hostname" "$os" "$arch" "$kernel" "$cores" "$cpu_model" "$uptime" \
    "$cpu_pct" "$mem_total" "$mem_used" "$swap_total" "$swap_used" \
    "$disk_mount" "$disk_total" "$disk_used" \
    "$load1" "$load5" "$load15" "$rx_rate" "$tx_rate" "$rx_2" "$tx_2" \
    "$conn_tcp" "$conn_udp" "$gpu_json" "$ip_json" \
    "$(date +%s)000" "$extra"
}

# POST one report. curl first, wget as the fallback.
# POST one report and print the response body.
# The body carries the server's queued commands (`events`), which is the only
# downstream channel a dial-out agent has.
post() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsS --max-time 10 -X POST "$URL" \
      -H 'content-type: application/json' \
      -H "x-probe-token: $TOKEN" \
      --data-binary "$1" 2>/dev/null
    return $?
  fi
  if command -v wget >/dev/null 2>&1; then
    wget -q -O - --header='content-type: application/json' \
      --header="x-probe-token: $TOKEN" --post-data="$1" "$URL" 2>/dev/null
    return $?
  fi
  log 'curl or wget is required to report'
  exit 3
}

# ---------------------------------------------------------------------------
# Latency probes. One task arrives as { taskId, type, target }; the result is
# reported back on the next regular report as `pings: [{taskId, ms}]`, where a
# null ms means the probe timed out (a loss, not a zero).
# ---------------------------------------------------------------------------

# Round-trip time in ms for one ICMP echo, or empty on failure.
probe_icmp() {
  target=$1
  if command -v ping >/dev/null 2>&1; then
    out=$(ping -c 1 -W 2 "$target" 2>/dev/null | sed -n 's/.*time=\([0-9.]*\) ms.*/\1/p' | head -n 1)
    printf '%s' "$out"
    return 0
  fi
  return 1
}

# Milliseconds for a TCP connect handshake, via curl's time_connect.
# `telnet://` makes curl perform only the connect and close, so the number is
# the handshake alone rather than including a request round trip.
probe_tcp() {
  target=$1
  case "$target" in
    *:*) host=${target%:*}; port=${target##*:} ;;
    *) host=$target; port=80 ;;
  esac
  command -v curl >/dev/null 2>&1 || return 1
  t=$(curl -sS -o /dev/null --max-time 3 -w '%{time_connect}' "telnet://$host:$port" 2>/dev/null)
  [ -z "$t" ] && return 1
  awk -v v="$t" 'BEGIN { printf "%.0f", v * 1000 }'
}

# Milliseconds for a full HTTP round trip (server response, not body).
probe_http() {
  url=$1
  t=$(curl -sS -o /dev/null --max-time 5 -w '%{time_total}' "$url" 2>/dev/null)
  [ -z "$t" ] && return 1
  awk -v v="$t" 'BEGIN { printf "%.0f", v * 1000 }'
}

# Run every queued probe and print them as a JSON array fragment.
# The caller embeds the result into the report's `pings` field.
run_pings() {
  events_json=$1
  [ -z "$events_json" ] && { printf '[]'; return 0; }
  # One JSON object per line, so a shell loop can walk them without a parser.
  printf '%s' "$events_json" | awk '
    { s = $0 }
    END {
      # Split on "},{": each element is a JSON object.
      gsub(/\{/, "\n{", s)
      print s
    }' | while IFS= read -r item; do
    id=$(printf '%s' "$item" | sed -n 's/.*"taskId":"\([^"]*\)".*/\1/p')
    type=$(printf '%s' "$item" | sed -n 's/.*"type":"\([^"]*\)".*/\1/p')
    target=$(printf '%s' "$item" | sed -n 's/.*"target":"\([^"]*\)".*/\1/p')
    [ -z "$id" ] && continue
    [ -z "$target" ] && continue
    case "$type" in
      icmp) ms=$(probe_icmp "$target") ;;
      tcp) ms=$(probe_tcp "$target") ;;
      http) ms=$(probe_http "$target") ;;
      *) ms='' ;;
    esac
    if [ -n "$ms" ]; then
      printf '{"taskId":"%s","ms":%s}\n' "$id" "$ms"
    else
      printf '{"taskId":"%s","ms":null}\n' "$id"
    fi
  done
}

# ---------------------------------------------------------------------------
# Self-upgrade. The panel cannot push code to a dial-out agent, so it queues an
# `agent.switchVersion` event that rides a report response. On receiving it the
# agent downloads the script from the panel it already reports to, checks that
# the version really changed, replaces itself atomically, and re-execs.
# ---------------------------------------------------------------------------

# Absolute path of this script, so the new copy lands in the same place.
self_path() {
  case "$0" in
    /*) printf '%s' "$0" ;;
    *) printf '%s/%s' "$(pwd)" "$0" ;;
  esac
}

# Run one upgrade. Returns non-zero when the agent should keep running as-is.
do_upgrade() {
  version=$1
  shell_url=$2
  [ -z "$version" ] && return 1
  # Nothing to do when the panel offers the version we already run.
  [ "$version" = "$VERSION" ] && { log "already at $VERSION"; return 1; }

  target=$(self_path)
  tmp="${target}.new.$$"
  url="${SERVER%/}/${shell_url#/}"

  log "upgrading $VERSION -> $version"
  if command -v curl >/dev/null 2>&1; then
    if ! curl -fsS --max-time 30 -o "$tmp" "$url"; then
      log "upgrade failed: download error"
      rm -f "$tmp"
      return 1
    fi
  elif command -v wget >/dev/null 2>&1; then
    if ! wget -q -O "$tmp" "$url"; then
      log "upgrade failed: download error"
      rm -f "$tmp"
      return 1
    fi
  else
    log "upgrade failed: curl or wget is required"
    return 1
  fi

  # Verify before replacing: a truncated download must never become the agent.
  remote_version=$(sh "$tmp" --version 2>/dev/null | awk '{print $2}')
  if [ "$remote_version" != "$version" ]; then
    log "upgrade failed: downloaded version is '${remote_version:-unknown}', expected $version"
    rm -f "$tmp"
    return 1
  fi

  chmod 755 "$tmp" 2>/dev/null || true
  # Atomic on the same filesystem, so a crash mid-upgrade still leaves a
  # runnable agent rather than a half-written script.
  if ! mv -f "$tmp" "$target"; then
    log "upgrade failed: could not replace $target"
    rm -f "$tmp"
    return 1
  fi

  log "upgraded to $version; restarting"
  # Re-exec in place: the supervisor (systemd) keeps the same PID lineage and
  # the new code starts with the old environment intact.
  exec "$target" "$@"
}

sent=0
failures=0
stopping=0
trap 'stopping=1' INT TERM

log "reporting $NAME -> $URL every ${INTERVAL}s"

# Probe results carried forward to the next report, and the ids the server can
# drop once it has them (its at-least-once delivery contract).
pending_pings='[]'
pending_acks=''

while [ "$stopping" -eq 0 ]; do

  # Probe results and acknowledgements ride this report as extra members.
  payload=$(report ",\"pings\":$pending_pings,\"ackEventIds\":[$pending_acks]")
  response=$(post "$payload")
  status=$?
  if [ "$status" -eq 0 ]; then
    sent=$((sent + 1))
    if [ "$sent" -eq 1 ]; then
      log "first report ok"
    fi
    # Commands queued by the server arrive here; run the probes now and report
    # the numbers on the next cycle.
    # grep -o is the reliable way to pull the array out of the response; a sed
    # s/// with a group re-wraps the brackets and yields "[...]" as "[ [...] ]".
    events=$(printf '%s' "$response" | grep -o '"events":\[[^]]*\]' | sed 's/^"events"://')
    [ "${DSPROBE_DEBUG:-}" = "1" ] && log "DEBUG response=${response}" && log "DEBUG events=${events}"
    # The results just delivered belong to the previous cycle; clear them only
    # after this report was accepted, then run whatever arrived in the response.
    delivered_pings=$pending_pings
    delivered_acks=$pending_acks
    pending_pings='[]'
    pending_acks=''
    if [ -n "$events" ] && [ "$events" != "[]" ]; then
      # A version switch takes effect immediately; every other event is a probe.
      switch=$(printf '%s' "$events" | grep -o '"method":"agent.switchVersion"[^}]*}[^}]*}' | head -n 1)
      if [ -n "$switch" ]; then
        want=$(printf '%s' "$switch" | sed -n 's/.*"version":"\([^"]*\)".*/\1/p')
        shell_url=$(printf '%s' "$switch" | sed -n 's/.*"shell":"\([^"]*\)".*/\1/p')
        do_upgrade "$want" "$shell_url" && continue
      fi
      # run_pings prints one object per line; join them with commas only.
      results=$(run_pings "$events" | paste -sd, - 2>/dev/null)
      if [ -n "$results" ]; then
        [ "${DSPROBE_DEBUG:-}" = "1" ] && log "DEBUG results=${results}"
        pending_pings="[$results]"
        # Ack every event we just handled, so the server stops re-sending them.
        pending_acks=$(printf '%s' "$events" | sed -n 's/.*"id":"\([^"]*\)".*/"\1",/p' | tr -d '\n' | sed 's/,$//')
        log "ran $(printf '%s' "$results" | tr -cd '{' | wc -c) probe(s)"
      fi
    fi
  else
    failures=$((failures + 1))
    if [ "$failures" -eq 1 ] || [ $((failures % 20)) -eq 0 ]; then
      log "report failed (${failures}x)"
    fi
    # A failed report means the results were never delivered: keep them.
  fi
  if [ "$ONCE" = "1" ]; then
    [ "$failures" -eq 0 ] && exit 0 || exit 1
  fi
  sleep "$INTERVAL"
done

exit 0
