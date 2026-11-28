package main

import (
	"bufio"
	"os"
	"os/exec"
	"strconv"
	"strings"
	"syscall"
)

// cpuSample is one reading of the aggregate /proc/stat line.
type cpuSample struct {
	idle  uint64
	total uint64
}

// readCPU parses the first ("cpu") line of /proc/stat.
func readCPU() (cpuSample, bool) {
	file, err := os.Open("/proc/stat")
	if err != nil {
		return cpuSample{}, false
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	if !scanner.Scan() {
		return cpuSample{}, false
	}
	fields := strings.Fields(scanner.Text())
	if len(fields) < 5 || fields[0] != "cpu" {
		return cpuSample{}, false
	}
	var total, idle uint64
	for index, raw := range fields[1:] {
		value, err := strconv.ParseUint(raw, 10, 64)
		if err != nil {
			continue
		}
		// Fields 3 and 4 are idle and iowait; both count as not busy.
		if index == 3 || index == 4 {
			idle += value
		}
		total += value
	}
	return cpuSample{idle: idle, total: total}, true
}

// cpuPercent turns two samples into a busy percentage.
func cpuPercent(prev, next cpuSample) float64 {
	totalDelta := float64(next.total - prev.total)
	if totalDelta <= 0 {
		return 0
	}
	idleDelta := float64(next.idle - prev.idle)
	value := (1 - idleDelta/totalDelta) * 100
	if value < 0 {
		return 0
	}
	if value > 100 {
		return 100
	}
	return value
}

// readMemory reads /proc/meminfo, reporting bytes.
func readMemory() memory {
	values := map[string]uint64{}
	file, err := os.Open("/proc/meminfo")
	if err != nil {
		return memory{}
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fields := strings.Fields(scanner.Text())
		if len(fields) < 2 {
			continue
		}
		key := strings.TrimSuffix(fields[0], ":")
		value, err := strconv.ParseUint(fields[1], 10, 64)
		if err != nil {
			continue
		}
		values[key] = value * 1024 // meminfo is in kB
	}

	total := values["MemTotal"]
	available, ok := values["MemAvailable"]
	if !ok {
		available = values["MemFree"] + values["Buffers"] + values["Cached"]
	}
	used := uint64(0)
	if total > available {
		used = total - available
	}
	swapTotal := values["SwapTotal"]
	swapFree := values["SwapFree"]
	swapUsed := uint64(0)
	if swapTotal > swapFree {
		swapUsed = swapTotal - swapFree
	}
	return memory{Total: total, Used: used, SwapTotal: swapTotal, SwapUsed: swapUsed}
}

// readLoad reads the three load averages from /proc/loadavg.
func readLoad() [3]float64 {
	var out [3]float64
	raw, err := os.ReadFile("/proc/loadavg")
	if err != nil {
		return out
	}
	fields := strings.Fields(string(raw))
	for index := 0; index < 3 && index < len(fields); index++ {
		out[index], _ = strconv.ParseFloat(fields[index], 64)
	}
	return out
}

// readDisk reports the filesystem holding mount, in bytes.
func readDisk(mount string) disk {
	var stat syscall.Statfs_t
	if err := syscall.Statfs(mount, &stat); err != nil {
		return disk{Mount: mount}
	}
	blockSize := uint64(stat.Bsize)
	total := stat.Blocks * blockSize
	// Used counts space available to root, which is what df shows as "Use%".
	used := (stat.Blocks - stat.Bfree) * blockSize
	return disk{Mount: mount, Total: total, Used: used}
}

// readNetwork sums every non-loopback interface's counters.
func readNetwork() network {
	var out network
	entries, err := os.ReadDir("/sys/class/net")
	if err != nil {
		return out
	}
	for _, entry := range entries {
		name := entry.Name()
		if name == "lo" {
			continue
		}
		base := "/sys/class/net/" + name + "/statistics/"
		rx, okRx := readUintFile(base + "rx_bytes")
		tx, okTx := readUintFile(base + "tx_bytes")
		if !okRx || !okTx {
			continue
		}
		out.TotalRx += rx
		out.TotalTx += tx
	}
	return out
}

// readUintFile parses a single unsigned integer file.
func readUintFile(path string) (uint64, bool) {
	raw, err := os.ReadFile(path)
	if err != nil {
		return 0, false
	}
	value, err := strconv.ParseUint(strings.TrimSpace(string(raw)), 10, 64)
	if err != nil {
		return 0, false
	}
	return value, true
}

// readConns counts established TCP sockets and open UDP sockets, matching what
// the panel shows next to the traffic figures.
func readConns() conns {
	return conns{
		TCP: countSockets("/proc/net/tcp", "01"),
		UDP: countSockets("/proc/net/udp", "07", "01"),
	}
}

// countSockets counts entries in a /proc/net table whose state matches any of
// the wanted codes (TCP established is 01, UDP's "open" is 07).
func countSockets(path string, wanted ...string) int {
	file, err := os.Open(path)
	if err != nil {
		return 0
	}
	defer file.Close()

	allowed := map[string]bool{}
	for _, code := range wanted {
		allowed[code] = true
	}

	count := 0
	scanner := bufio.NewScanner(file)
	scanner.Scan() // header
	for scanner.Scan() {
		fields := strings.Fields(scanner.Text())
		if len(fields) < 4 {
			continue
		}
		if allowed[fields[3]] {
			count++
		}
	}
	return count
}

// readOS prefers the distribution's pretty name, then its name, then the kernel
// family — the panel shows this next to the distro icon.
func readOS() string {
	values := map[string]string{}
	raw, err := os.ReadFile("/etc/os-release")
	if err == nil {
		for _, line := range strings.Split(string(raw), "\n") {
			key, value, ok := strings.Cut(line, "=")
			if !ok {
				continue
			}
			values[key] = strings.Trim(value, `"`)
		}
	}
	if pretty := values["PRETTY_NAME"]; pretty != "" {
		return pretty
	}
	if name := values["NAME"]; name != "" {
		if id := values["VERSION_ID"]; id != "" {
			return name + " " + id
		}
		return name
	}
	var uts syscall.Utsname
	if err := syscall.Uname(&uts); err == nil {
		return charsToString(uts.Sysname[:])
	}
	return "Linux"
}

// readKernel returns the running kernel release.
func readKernel() string {
	var uts syscall.Utsname
	if err := syscall.Uname(&uts); err != nil {
		return ""
	}
	return charsToString(uts.Release[:])
}

// readArch returns the machine architecture.
func readArch() string {
	var uts syscall.Utsname
	if err := syscall.Uname(&uts); err != nil {
		return ""
	}
	return charsToString(uts.Machine[:])
}

// readHostname returns the machine name.
func readHostname() string {
	name, err := os.Hostname()
	if err != nil {
		return "unknown"
	}
	return name
}

// readCores counts processing units from /proc/cpuinfo.
func readCores() int {
	raw, err := os.ReadFile("/proc/cpuinfo")
	if err != nil {
		return 1
	}
	count := strings.Count(string(raw), "processor\t")
	if count == 0 {
		count = strings.Count(string(raw), "processor ")
	}
	if count == 0 {
		return 1
	}
	return count
}

// readCPUModel returns the first model name in /proc/cpuinfo.
func readCPUModel() string {
	file, err := os.Open("/proc/cpuinfo")
	if err != nil {
		return ""
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		key, value, ok := strings.Cut(scanner.Text(), ":")
		if ok && strings.TrimSpace(key) == "model name" {
			return strings.TrimSpace(value)
		}
	}
	return ""
}

// readUptime returns seconds since boot.
func readUptime() uint64 {
	raw, err := os.ReadFile("/proc/uptime")
	if err != nil {
		return 0
	}
	// The file is "<seconds>.<centiseconds> <idle>" — ParseUint rejects the
	// fractional form outright, so take the part before the dot.
	first := strings.Fields(string(raw))
	if len(first) == 0 {
		return 0
	}
	whole, _, _ := strings.Cut(first[0], ".")
	seconds, err := strconv.ParseUint(whole, 10, 64)
	if err != nil {
		return 0
	}
	return seconds
}

// readGPU reports the first NVIDIA GPU when nvidia-smi is present.
func readGPU() *gpu {
	path, err := exec.LookPath("nvidia-smi")
	if err != nil {
		return nil
	}
	raw, err := exec.Command(path,
		"--query-gpu=name,memory.total,memory.used,utilization.gpu,temperature.gpu",
		"--format=csv,noheader,nounits").Output()
	if err != nil {
		return nil
	}
	line := strings.TrimSpace(strings.Split(string(raw), "\n")[0])
	parts := strings.Split(line, ",")
	if len(parts) < 5 {
		return nil
	}
	toFloat := func(raw string) float64 {
		value, _ := strconv.ParseFloat(strings.TrimSpace(raw), 64)
		return value
	}
	return &gpu{
		Name:     strings.TrimSpace(parts[0]),
		MemTotal: uint64(toFloat(parts[1])) * 1024 * 1024,
		MemUsed:  uint64(toFloat(parts[2])) * 1024 * 1024,
		Usage:    toFloat(parts[3]),
		Temp:     toFloat(parts[4]),
	}
}

// charsToString trims a NUL-terminated C char array.
//
// syscall.Utsname declares these arrays as [65]int8 on most architectures but
// [65]uint8 on arm, so the conversion is generic rather than typed to one of
// them — otherwise the arm release build fails while amd64 passes.
func charsToString[T int8 | uint8](raw []T) string {
	out := make([]byte, 0, len(raw))
	for _, value := range raw {
		if value == 0 {
			break
		}
		out = append(out, byte(value))
	}
	return string(out)
}
