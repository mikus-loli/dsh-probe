package main

import (
	"context"
	"net"
	"net/http"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
	"time"
)

// runProbe executes one latency probe and returns the round-trip time.
//
// A nil result means a loss, which the panel records separately from a zero
// latency: ICMP uses the system `ping` (setuid on every mainstream distro, so no
// privileges here), TCP measures the connect handshake, HTTP times a full
// request.
func runProbe(kind, target string) *float64 {
	switch kind {
	case "icmp":
		return probeICMP(target)
	case "tcp":
		return probeTCP(target)
	case "http":
		return probeHTTP(target)
	}
	return nil
}

var pingTimePattern = regexp.MustCompile(`time=([0-9.]+)\s*ms`)

// probeICMP shells out to ping and parses its reported time.
func probeICMP(target string) *float64 {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	out, err := exec.CommandContext(ctx, "ping", "-c", "1", "-W", "2", target).Output()
	if err != nil {
		return nil
	}
	match := pingTimePattern.FindSubmatch(out)
	if match == nil {
		return nil
	}
	value, err := strconv.ParseFloat(string(match[1]), 64)
	if err != nil {
		return nil
	}
	return &value
}

// probeTCP times a TCP connect, defaulting to port 80 when none is given.
func probeTCP(target string) *float64 {
	address := target
	if _, _, err := net.SplitHostPort(target); err != nil {
		address = net.JoinHostPort(target, "80")
	}
	start := time.Now()
	conn, err := net.DialTimeout("tcp", address, 3*time.Second)
	if err != nil {
		return nil
	}
	elapsed := float64(time.Since(start).Microseconds()) / 1000
	conn.Close()
	return &elapsed
}

// probeHTTP times a complete request, discarding the body.
func probeHTTP(target string) *float64 {
	client := &http.Client{Timeout: 5 * time.Second}
	start := time.Now()
	response, err := client.Get(target)
	if err != nil {
		return nil
	}
	elapsed := float64(time.Since(start).Microseconds()) / 1000
	response.Body.Close()
	return &elapsed
}

// publicIP asks for this machine's egress address.
//
// The panel locates a host by address, and an agent reporting to a loopback URL
// has no geography at all, so the address travels with the report (the same
// field Komari's basicInfo carries).
func publicIP() string {
	if override := strings.TrimSpace(env("DSPROBE_PUBLIC_IP", "")); override != "" {
		return override
	}
	client := &http.Client{Timeout: 5 * time.Second}
	for _, url := range []string{
		"https://api.ipify.org",
		"https://ifconfig.me/ip",
		"https://ipinfo.io/ip",
	} {
		response, err := client.Get(url)
		if err != nil {
			continue
		}
		body, err := readLimited(response, 64)
		if err != nil || net.ParseIP(body) == nil || strings.Contains(body, ":") {
			continue
		}
		return body
	}
	return ""
}
