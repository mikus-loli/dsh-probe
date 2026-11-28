package main

// report is the document POSTed to /auth/dsh-probe/ingest. Field names match the
// panel's normaliser exactly; anything it does not know is dropped there, so a
// rename here silently loses data.
type report struct {
	V            int        `json:"v"`
	AgentVersion string     `json:"agentVersion"`
	Hostname     string     `json:"hostname"`
	OS           string     `json:"os"`
	Arch         string     `json:"arch"`
	Kernel       string     `json:"kernel"`
	Cores        int        `json:"cores"`
	CPUModel     string     `json:"cpuModel"`
	Uptime       uint64     `json:"uptime"`
	CPU          float64    `json:"cpu"`
	Mem          memory     `json:"mem"`
	Disk         disk       `json:"disk"`
	Load         [3]float64 `json:"load"`
	Net          network    `json:"net"`
	Conn         conns      `json:"conn"`
	GPU          *gpu       `json:"gpu,omitempty"`
	IP           string     `json:"ip,omitempty"`
	ReportedAt   int64      `json:"reportedAt"`
	Pings        []pingOut  `json:"pings"`
	AckEventIDs  []string   `json:"ackEventIds"`
}

type memory struct {
	Total     uint64 `json:"total"`
	Used      uint64 `json:"used"`
	SwapTotal uint64 `json:"swapTotal"`
	SwapUsed  uint64 `json:"swapUsed"`
}

type disk struct {
	Mount string `json:"mount"`
	Total uint64 `json:"total"`
	Used  uint64 `json:"used"`
}

type network struct {
	RxRate  float64 `json:"rxRate"`
	TxRate  float64 `json:"txRate"`
	TotalRx uint64  `json:"totalRx"`
	TotalTx uint64  `json:"totalTx"`
}

type conns struct {
	TCP int `json:"tcp"`
	UDP int `json:"udp"`
}

type gpu struct {
	Name     string  `json:"name"`
	MemTotal uint64  `json:"memTotal"`
	MemUsed  uint64  `json:"memUsed"`
	Usage    float64 `json:"usage"`
	Temp     float64 `json:"temp"`
}

// pingOut is one probe result: ms is a pointer so a timeout reports null rather
// than 0, which the panel counts as a loss.
type pingOut struct {
	TaskID string   `json:"taskId"`
	MS     *float64 `json:"ms"`
}

// ingestReply is the response body, carrying whatever the panel queued for us.
type ingestReply struct {
	OK     bool    `json:"ok"`
	Host   string  `json:"host"`
	Events []event `json:"events"`
}

// event is one server-to-agent command.
type event struct {
	ID     string         `json:"id"`
	Method string         `json:"method"`
	Params map[string]any `json:"params"`
}
