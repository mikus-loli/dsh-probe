package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"syscall"
	"time"
)

// releaseBase is where published agent builds live. The install script and the
// agent's self-upgrade both resolve assets from here, so a monitored machine
// never needs the panel to be reachable to update itself.
const releaseBase = "https://github.com/mikus-loli/dsh-probe/releases/download"

// assetName is the release asset for this platform.
//
// It has to match what the release workflow uploads: Go reports `arm` for every
// 32-bit ARM build, but the matrix publishes `arm7` (the ABI this target is
// built for), so the name is normalised here rather than guessed at download
// time.
func assetName(version string) string {
	arch := runtime.GOARCH
	if arch == "arm" {
		arch = "arm7"
	}
	return fmt.Sprintf("dsh-probe-agent_%s_%s_%s", version, runtime.GOOS, arch)
}

// upgradeSelf replaces this binary with the requested release build.
//
// The download is verified before it can become the running agent: the new file
// must answer `--version` with the expected version, and the swap is a rename in
// the same directory so a crash mid-upgrade still leaves a working binary.
func upgradeSelf(target string) error {
	if target == "" || target == version {
		return nil
	}

	self, err := os.Executable()
	if err != nil {
		return fmt.Errorf("locate own binary: %w", err)
	}
	if resolved, err := filepath.EvalSymlinks(self); err == nil {
		self = resolved
	}

	url := fmt.Sprintf("%s/v%s/%s", releaseBase, target, assetName(target))
	client := &http.Client{Timeout: 60 * time.Second}
	response, err := client.Get(url)
	if err != nil {
		return fmt.Errorf("download %s: %w", url, err)
	}
	defer response.Body.Close()
	if response.StatusCode != http.StatusOK {
		return fmt.Errorf("download %s: HTTP %d", url, response.StatusCode)
	}

	temp := fmt.Sprintf("%s.new-%d", self, os.Getpid())
	file, err := os.OpenFile(temp, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0o755)
	if err != nil {
		return fmt.Errorf("create %s: %w", temp, err)
	}
	if _, err := io.Copy(file, response.Body); err != nil {
		file.Close()
		os.Remove(temp)
		return fmt.Errorf("write %s: %w", temp, err)
	}
	file.Close()

	// Verify the download really is the advertised build.
	out, err := exec.Command(temp, "--version").Output()
	if err != nil {
		os.Remove(temp)
		return fmt.Errorf("verify %s: %w", temp, err)
	}
	if !strings.HasSuffix(strings.TrimSpace(string(out)), target) {
		os.Remove(temp)
		return fmt.Errorf("downloaded version is %q, expected %s", strings.TrimSpace(string(out)), target)
	}

	if err := os.Rename(temp, self); err != nil {
		os.Remove(temp)
		return fmt.Errorf("replace %s: %w", self, err)
	}

	// Re-exec in place so the supervisor keeps the same unit.
	return syscall.Exec(self, os.Args, os.Environ())
}
