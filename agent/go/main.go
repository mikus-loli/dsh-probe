// dsh-probe-agent reports Linux metrics to a DSH Probe panel.
//
// A single static binary with no runtime dependency: it reads the counters that
// already exist under /proc and /sys, POSTs one JSON report per interval, and
// executes whatever the panel queues on the response (latency probes, or a
// version switch). Installation and upgrades both come from GitHub releases, so
// a monitored machine only needs outbound HTTPS.
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"
)

func main() {
	if len(os.Args) > 1 && (os.Args[1] == "--version" || os.Args[1] == "-v") {
		fmt.Printf("dsh-probe-agent %s\n", version)
		return
	}

	server := env("DSPROBE_SERVER", "")
	token := env("DSPROBE_TOKEN", "")
	if server == "" || token == "" {
		fmt.Fprintln(os.Stderr, "dsh-probe-agent: DSPROBE_SERVER and DSPROBE_TOKEN are required")
		os.Exit(2)
	}

	agent := &agent{
		server:   strings.TrimRight(server, "/"),
		token:    token,
		name:     env("DSPROBE_NAME", readHostname()),
		interval: durationEnv("DSPROBE_INTERVAL", 3),
		disk:     env("DSPROBE_DISK", "/"),
		once:     env("DSPROBE_ONCE", "0") == "1",
		client:   &http.Client{Timeout: 15 * time.Second},
	}
	agent.run()
}

// agent holds everything one reporting loop needs.
type agent struct {
	server   string
	token    string
	name     string
	interval time.Duration
	disk     string
	once     bool
	client   *http.Client

	mu          sync.Mutex
	prevCPU     cpuSample
	prevNet     network
	prevNetTime time.Time
	publicIP    string
	ipFetched   bool
	pending     []pingOut
	pendingAck  []string
}

// run is the reporting loop: one report per interval, until interrupted.
func (a *agent) run() {
	fmt.Printf("dsh-probe-agent %s reporting %s -> %s every %s\n", version, a.name, a.server+ingestPath, a.interval)

	failures := 0
	for {
		payload := a.sample()
		events, err := a.post(payload)
		if err != nil {
			failures++
			if failures == 1 || failures%20 == 0 {
				fmt.Fprintf(os.Stderr, "dsh-probe-agent: report failed (%dx): %v\n", failures, err)
			}
		} else {
			if failures > 0 {
				fmt.Printf("dsh-probe-agent: reporting recovered after %d failure(s)\n", failures)
			}
			failures = 0
			// The report was accepted, so what it carried is now the panel's;
			// whatever it queued becomes this cycle's work.
			a.mu.Lock()
			a.pending = nil
			a.pendingAck = nil
			a.mu.Unlock()
			a.handleEvents(events)
		}

		if a.once {
			if failures > 0 {
				os.Exit(1)
			}
			return
		}
		time.Sleep(a.interval)
	}
}

// ingestPath is the panel's agent endpoint.
const ingestPath = "/auth/dsh-probe/ingest"

// sample builds one report from the current counters.
func (a *agent) sample() report {
	a.mu.Lock()
	defer a.mu.Unlock()

	current, ok := readCPU()
	cpu := 0.0
	if ok && a.prevCPU.total != 0 {
		cpu = cpuPercent(a.prevCPU, current)
	}
	if ok {
		a.prevCPU = current
	}

	netNow := readNetwork()
	rxRate, txRate := 0.0, 0.0
	now := time.Now()
	if !a.prevNetTime.IsZero() {
		elapsed := now.Sub(a.prevNetTime).Seconds()
		if elapsed > 0 {
			rxRate = float64(netNow.TotalRx-a.prevNet.TotalRx) / elapsed
			txRate = float64(netNow.TotalTx-a.prevNet.TotalTx) / elapsed
			if rxRate < 0 {
				rxRate = 0
			}
			if txRate < 0 {
				txRate = 0
			}
		}
	}
	a.prevNet = netNow
	a.prevNetTime = now

	// The egress address never changes often enough to ask on every report.
	if !a.ipFetched {
		a.ipFetched = true
		a.publicIP = publicIP()
	}

	out := report{
		V:            1,
		AgentVersion: version,
		Hostname:     a.name,
		OS:           readOS(),
		Arch:         readArch(),
		Kernel:       readKernel(),
		Cores:        readCores(),
		CPUModel:     readCPUModel(),
		Uptime:       readUptime(),
		CPU:          cpu,
		Mem:          readMemory(),
		Disk:         readDisk(a.disk),
		Load:         readLoad(),
		Net: network{
			RxRate:  rxRate,
			TxRate:  txRate,
			TotalRx: netNow.TotalRx,
			TotalTx: netNow.TotalTx,
		},
		Conn:       readConns(),
		GPU:        readGPU(),
		IP:         a.publicIP,
		ReportedAt: now.UnixMilli(),
		Pings:      a.pending,
		AckEventIDs: a.pendingAck,
	}
	if out.Pings == nil {
		out.Pings = []pingOut{}
	}
	if out.AckEventIDs == nil {
		out.AckEventIDs = []string{}
	}
	return out
}

// post sends one report and returns the events the panel queued.
func (a *agent) post(payload report) ([]event, error) {
	body, err := json.Marshal(payload)
	if err != nil {
		return nil, err
	}
	request, err := http.NewRequest(http.MethodPost, a.server+ingestPath, bytes.NewReader(body))
	if err != nil {
		return nil, err
	}
	request.Header.Set("content-type", "application/json")
	request.Header.Set("x-probe-token", a.token)
	request.Header.Set("x-probe-name", a.name)

	response, err := a.client.Do(request)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()
	raw, err := io.ReadAll(io.LimitReader(response.Body, 64*1024))
	if err != nil {
		return nil, err
	}
	if response.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("HTTP %d %s", response.StatusCode, strings.TrimSpace(string(raw)))
	}

	var reply ingestReply
	if err := json.Unmarshal(raw, &reply); err != nil {
		// A panel that answered 200 with something unexpected is not fatal: the
		// metrics landed, only the command channel is unclear.
		return nil, nil
	}
	return reply.Events, nil
}

// handleEvents runs whatever the panel queued.
func (a *agent) handleEvents(events []event) {
	for _, item := range events {
		switch item.Method {
		case "agent.ping":
			taskID, _ := item.Params["taskId"].(string)
			kind, _ := item.Params["type"].(string)
			target, _ := item.Params["target"].(string)
			if taskID == "" || target == "" {
				continue
			}
			ms := runProbe(kind, target)
			a.mu.Lock()
			a.pending = append(a.pending, pingOut{TaskID: taskID, MS: ms})
			a.pendingAck = append(a.pendingAck, item.ID)
			a.mu.Unlock()
			if ms != nil {
				fmt.Printf("dsh-probe-agent: %s %s -> %.2fms\n", kind, target, *ms)
			} else {
				fmt.Printf("dsh-probe-agent: %s %s -> loss\n", kind, target)
			}
		case "agent.switchVersion":
			target, _ := item.Params["version"].(string)
			if target == "" || target == version {
				continue
			}
			fmt.Printf("dsh-probe-agent: upgrading %s -> %s\n", version, target)
			if err := upgradeSelf(target); err != nil {
				fmt.Fprintf(os.Stderr, "dsh-probe-agent: upgrade failed: %v\n", err)
			}
		}
	}
}

// env reads an environment variable with a fallback.
func env(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok && value != "" {
		return value
	}
	return fallback
}

// durationEnv reads an integer number of seconds.
func durationEnv(key string, fallback int) time.Duration {
	raw := env(key, "")
	if raw == "" {
		return time.Duration(fallback) * time.Second
	}
	value, err := strconv.Atoi(raw)
	if err != nil || value < 1 {
		return time.Duration(fallback) * time.Second
	}
	return time.Duration(value) * time.Second
}

// readLimited reads a small response body and trims it.
func readLimited(response *http.Response, limit int64) (string, error) {
	raw, err := io.ReadAll(io.LimitReader(response.Body, limit))
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(raw)), nil
}
