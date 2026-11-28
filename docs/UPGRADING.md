# 升级方案

面板端（DSH 插件）与 agent 端（`agent/go/`，编译为单个静态二进制）在同一个仓库、同一个版本号发布：`package.json`、`host/version.js` 与 `agent/go/version.go` 里的版本必须一致（`test/versions.test.mjs` 会检查）。

## 版本从哪看

- 面板运行时：`GET /auth/dsh-probe/version.json` 返回 `{ panel, agent, schema, agentDownload }`（公开、无密钥）。
- 面板界面：监控墙底部显示「Panel x.y.z · Agent x.y.z」；点节点卡片弹出的详情里显示该主机 agent 的版本。
- 主机列表/表格：agent 版本落后时显示「可升级」标记。

## 面板端升级

### 本机 link 安装（开发/自用）

```sh
cd /path/to/dsh-probe
git pull
pnpm install          # 依赖有变化时才需要
node build.mjs        # 重新生成 lib/client.js
```

然后在 **Plugins** 页把 `Probe` 行关掉再打开（或者重启 `dsh web`），让 Host 侧的新代码生效；浏览器刷新页面即可加载新的前端 bundle。只改了前端时，刷新页面就够了。

### 从 GitHub 安装

```sh
dsh plugin --profile web add github:mikus-loli/dsh-probe
# 重启 dsh web
```

仓库里提交了构建好的 `lib/client.js`，所以无需在服务器上装 esbuild；如果要自己构建，`pnpm install && node build.mjs`。

### 回滚

```sh
cd /path/to/dsh-probe
git checkout v0.1.0       # 或上一个可用 tag
pnpm install
node build.mjs
```

再按上面的方式重载插件。数据文件不会因为回滚被删除；如果新版本已经写入更高的数据 schema，旧面板会以只读方式读取，不会覆盖（见下）。

## 数据迁移与兼容

- `hosts.json`、`settings.json` 都有版本（当前 schema 2）。
- 从 0.1.0（schema 1）升级时，插件启动会自动迁移：
  - 先复制一份 `hosts.json.bak-<时间戳>` / `settings.json.bak-<时间戳>`；
  - 补上 `mutedUntil`、`notify` 等新字段；
  - 写回 schema 2。
- 数据文件由**更新**的面板写过后，旧面板只读运行，修改类操作会明确报错，避免降级写坏数据。
- 历史目录 `history/*.jsonl` 与旧版本完全兼容，不会重写。

## Agent 端升级

agent 是无状态上报程序，升级只替换二进制并重启，**令牌与 systemd 配置不变**。

### 从面板触发（推荐）

主机显示「可升级」时，打开该主机的「安装与令牌」，点「升级 agent」或复制其中的命令。
面板会下发 `agent.switchVersion` 事件，agent 自己完成：按版本拼出对应平台的 Release 资产 URL →
下载 → 执行 `--version` 校验 → 原地原子替换 → `exec` 重启。

### 在服务器上手动升级

重跑安装脚本即可，它会解析最新 Release 并覆盖安装：

```sh
curl -fsSL https://raw.githubusercontent.com/mikus-loli/dsh-probe/main/install.sh \
  | sudo DSPROBE_SERVER=https://dsh.example.com DSPROBE_TOKEN=<该主机令牌> sh
```

只想固定到某个版本时加 `DSPROBE_AGENT_VERSION=0.4.0`。

批量升级（可选，令牌按主机各不相同）：

```sh
for host in web-1 api-2 db-1; do
  ssh "$host" 'sudo systemctl restart dsh-probe-agent'   # 若已配好自动升级
done
```

升级后几秒内面板上的「可升级」标记消失；`dsh-probe-agent --version` 可确认版本。

### 发布新版本

```sh
# 三处版本号改成同一个值：package.json、host/version.js、agent/go/version.go
node build.mjs && node --test test/*.test.mjs
git commit -am "chore(release): v0.4.1"
git tag v0.4.1 && git push origin main --tags
```

tag 会触发 `.github/workflows/release.yml`：矩阵编译 linux amd64/arm64/arm7/386、生成
`SHA256SUMS`、连同 Release Notes 一起发布。**版本号没对齐时测试会先失败**，避免发出去一个
资产名对不上的版本。

## 兼容策略

- 上报协议只做**新增字段**：旧 agent 上报的数据新面板能读（缺少的字段显示为默认值）；旧面板遇到新字段会忽略。
- 面板 API `/api/dsh-probe/*` 与 `/auth/dsh-probe/*` 的路径在 0.x 内保持稳定；破坏性变更会升 minor 并在 CHANGELOG 标明。
- 不支持「新 agent + 很旧的面板」组合使用新字段，但基础指标始终兼容。

## 发布清单（维护者）

1. 改 `host/version.js` 里的 `PANEL_VERSION` / `AGENT_VERSION`，并同步 `package.json`、两个 agent 脚本。
2. `node build.mjs`，提交 `lib/client.js`。
3. `node --test test/*.test.mjs` 全绿。
4. 更新 `CHANGELOG.md`。
5. 打 tag（如 `v0.2.0`）并推送；GitHub Actions 会再跑一遍构建与测试。
