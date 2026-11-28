/**
 * Operating-system identity for the panel, ported from the komari-mikus theme
 * (`utils/format.js#formatOS` and `utils/ui-helpers.js#getShortOs`).
 *
 * The agent reports the full `PRETTY_NAME` from `/etc/os-release` — e.g.
 * "Debian GNU/Linux 13 (trixie)". A card should read `Debian`, not that whole
 * string, and it should carry the distro's glyph. Matching is by keyword
 * against the lowercased string, exactly as the theme does it, so an agent on
 * any distro lands on the right row without a lookup table keyed by exact name.
 */

/** The icon keys the stylesheet declares `--probe-os-<key>` backgrounds for. */
export type OsIconKey =
  | 'windows' | 'ubuntu' | 'debian' | 'centos' | 'rhel' | 'fedora' | 'arch'
  | 'suse' | 'alpine' | 'openwrt' | 'freebsd' | 'macos' | 'rocky' | 'alma'
  | 'mint' | 'gentoo' | 'nix' | 'qnap' | 'unraid' | 'huawei' | 'orange-pi'
  | 'linux' | 'unknown'

/** A resolved OS identity: the short display name and which glyph to draw. */
export interface OsInfo {
  name: string
  icon: OsIconKey
}

/**
 * Map a raw OS string onto a short name plus an icon key.
 * Order matters: the first keyword hit wins, so more specific distros
 * (almalinux before "linux") are tested before generic ones.
 * @param os - raw OS string as reported by the agent, or undefined.
 * @returns the short display name and the icon key to render.
 */
export function formatOs(os: string | undefined): OsInfo {
  if (os === undefined || os === '') return { name: '-', icon: 'unknown' }
  const s = os.toLowerCase()
  const hit = (needle: string): boolean => s.includes(needle)

  if (hit('windows')) return { name: 'Windows', icon: 'windows' }
  if (hit('ubuntu')) return { name: 'Ubuntu', icon: 'ubuntu' }
  if (hit('debian')) return { name: 'Debian', icon: 'debian' }
  if (hit('centos')) return { name: 'CentOS', icon: 'centos' }
  if (hit('rocky')) return { name: 'Rocky', icon: 'rocky' }
  if (hit('alma')) return { name: 'Alma', icon: 'alma' }
  if (hit('red hat') || hit('rhel')) return { name: 'RHEL', icon: 'rhel' }
  if (hit('fedora')) return { name: 'Fedora', icon: 'fedora' }
  if (hit('manjaro')) return { name: 'Manjaro', icon: 'arch' }
  if (hit('arch')) return { name: 'Arch', icon: 'arch' }
  if (hit('mint')) return { name: 'Mint', icon: 'mint' }
  if (hit('gentoo')) return { name: 'Gentoo', icon: 'gentoo' }
  if (hit('nixos') || hit('nix')) return { name: 'Nix', icon: 'nix' }
  if (hit('opensuse') || hit('suse')) return { name: 'openSUSE', icon: 'suse' }
  if (hit('alpine')) return { name: 'Alpine', icon: 'alpine' }
  if (hit('openwrt')) return { name: 'OpenWrt', icon: 'openwrt' }
  if (hit('freebsd')) return { name: 'FreeBSD', icon: 'freebsd' }
  if (hit('macos') || hit('mac os') || hit('darwin')) return { name: 'macOS', icon: 'macos' }
  if (hit('android')) return { name: 'Android', icon: 'linux' }
  if (hit('armbian')) return { name: 'Armbian', icon: 'debian' }
  if (hit('kali')) return { name: 'Kali', icon: 'debian' }
  if (hit('huawei') || hit('openeuler') || hit('euler')) return { name: 'Euler', icon: 'huawei' }
  if (hit('unraid')) return { name: 'Unraid', icon: 'unraid' }
  if (hit('qnap')) return { name: 'QNAP', icon: 'qnap' }
  if (hit('orangepi') || hit('orange pi')) return { name: 'OrangePi', icon: 'orange-pi' }
  if (hit('proxmox')) return { name: 'Proxmox', icon: 'debian' }
  if (hit('synology')) return { name: 'Synology', icon: 'unknown' }
  if (hit('alibaba') || hit('aliyun')) return { name: 'Alibaba', icon: 'unknown' }
  if (hit('opencloudos')) return { name: 'OpenCloudOS', icon: 'unknown' }
  if (hit('linux')) return { name: 'Linux', icon: 'linux' }
  // Unknown distro: keep the first word so the card still says something useful.
  const first = os.trim().split(/\s+/)[0] ?? ''
  return { name: first === '' ? '-' : first, icon: 'unknown' }
}
