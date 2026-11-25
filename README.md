# DSH 探针（dsh-probe）

像 Komari 一样的服务器探针，长在 DeepSeek Harness 里：左侧栏多一个「探针」页面，显示每台服务器的实时指标与趋势；智能体也能用同一份数据。

- 仓库：<https://github.com/mikus-loli/dsh-probe>
- 当前版本：面板 0.2.1 / Agent 0.2.1（两者同版本发布）
- 许可：MIT

仓库同时包含**面板端**（`host/` + `src/client/`）与 **agent 端**（`agent/`）：

```
panel:  host/          DSH 插件宿主侧：存储、指标、告警、路由、工具
        src/client/    Web 面板（React + CSS modules）
        lib/client.js  构建产物（已提交，克隆即可用）
agent:  agent/agent.sh  零运行时 Shell 上报器（推荐）
        agent/agent.mjs Node 单文件上报器
shared: test/ 文档  docs/UPGRADING.md  CI  .github/workflows/ci.yml
```

## 界面

概览（汇总、搜索筛选、卡片视图）：

![概览](docs/overview.png)

表格视图（可排序，窄屏自动隐藏次要列）：

![表格](docs/table.png)

Webhook 告警通知与测试：

![通知](docs/notify.png)

## 安装 / 升级

本机开发用 link 安装；也可以直接从 GitHub 装：

```sh
dsh plugin --profile web add github:mikus-loli/dsh-probe
# 重启 dsh web，然后在 Plugins 页确认 Probe 行已启用
```

升级面板与 agent 的完整步骤、数据迁移、回滚与兼容策略见 **[docs/UPGRADING.md](docs/UPGRADING.md)**。

![升级 Agent](docs/upgrade.png)
简单说：面板用 `git pull` + `node build.mjs` 后重载插件；agent 在面板里点「可升级」拿到升级命令，替换文件并重启服务即可，令牌不变。

## 它做什么

- **轻量 agent 主动上报**：每台被监控服务器跑一个单文件 agent（默认 `agent.sh`：只要 `sh`、`awk`、`df`、`curl`；也可选 `agent.mjs`：Node 18+，零 npm 依赖），读取本机 `/proc`、`/sys/class/net` 与 `df` 后 POST 给 DSH。目标机不需要开 SSH 端口，也无需安装运行时以外的任何东西。
- **实时卡片与表格**：卡片显示 CPU / 内存 / 磁盘三条进度条、CPU 迷你曲线、负载、上下行速率、运行时长与在线状态；也可以切到表格视图按列排序。顶部汇总在线主机、活动告警、平均 CPU / 内存，支持按名称/标签/位置搜索和按在线状态筛选。
- **趋势**：最近 1 小时的原始采样（内存环形缓冲）+ 每分钟一档、保留 7 天的磁盘历史（可调 1–30 天）。
- **告警**：CPU / 内存 / 磁盘 / 每核负载持续超过阈值、或主机停止上报时触发；恢复后自动解除。规则、阈值、持续时长在「设置」里改；支持按主机「静默 1 小时」（维护窗口，期间照常收集指标但不告警）。
- **Webhook 通知**：设置里填一个 http/https 地址，告警开始/解除时 POST 一条 JSON（事件、主机、规则、数值、消息），可「发送测试」验证；由宿主进程直接请求，可指向内网或本机服务（如飞书/钉钉的中转 bot）。
- **给智能体的工具**：`probe_list`、`probe_status`、`probe_history`、`probe_alerts`、`probe_manage`。面板上的增删改与工具调用走同一套 Host 操作；`probe_manage` 还能静默/取消静默主机（`mute` / `unmute`）并测试 Webhook（`test_notify`）。

## 使用

1. 在左侧栏打开「探针」，点「添加主机」。
2. 跳到安装卡片：确认「上报地址」是服务器能访问到的 DSH 地址（公网域名或内网地址；`http://127.0.0.1:3080` 只适合本机）。
3. 在服务器上依次执行卡片里的三条命令：下载 agent、前台试跑、装成 systemd 服务。
4. 几秒内卡片会从「等待首报」变为「在线」；点开卡片可看趋势、告警与令牌。

## Agent

- 只支持 Linux（读取 `/proc/stat`、`/proc/meminfo`、`/proc/loadavg`、`/sys/class/net`，磁盘用 `df`）。
- 两种形态，安装卡片里可切换：
  - **Shell（推荐）**：`agent.sh`，依赖 `sh`、`awk`、`df` 和 `curl`（没有 curl 时退回 `wget`）。每次上报先用 1 秒采样两次计数器，因此 CPU 百分比与网络速率无需落盘状态。
  - **Node 脚本**：`agent.mjs`，单文件、零 npm 依赖，适合已装 Node 18+ 的机器。
- 配置：`DSPROBE_SERVER`、`DSPROBE_TOKEN`、`DSPROBE_NAME`、`DSPROBE_INTERVAL`（默认 3 秒）、`DSPROBE_DISK`（默认 `/`）。
- 令牌只对一台主机有效；泄露后在面板「轮换令牌」即可作废，然后在服务器上换新令牌重启 agent。
- agent 源码就在仓库的 `agent/` 目录，同时由插件直接提供下载（`/auth/dsh-probe/agent.sh`、`/auth/dsh-probe/agent.mjs`），不含任何密钥。
- 版本：`sh agent.sh --version` / `node agent.mjs --version`；面板通过每次上报的 `agentVersion` 判断某台主机是否需要升级。
- 上报协议只新增字段，旧 agent 可以继续配合新面板工作。

## 数据与安全

- 数据在 `$DSH_HOME/dsh-probe/`（默认 `~/.dsh`）：`hosts.json`（含 agent 令牌）、`settings.json`、`alerts.json`、`history/<id>.jsonl`。目录 0700，文件 0600；数据 schema 版本化，升级时自动备份为 `*.bak-<时间戳>`。
- 公开版本清单：`GET /auth/dsh-probe/version.json`（只有版本号，无密钥）。
- 面板 API `/api/dsh-probe/*` 只接受本机回环或宿主连接信任的请求；反向代理部署需要像其他 UI 插件一样把该路径的 `Host`/`Origin` 改写成回环并去掉转发头。
- 上报入口 `/auth/dsh-probe/*` 不需要浏览器会话（服务器上的 agent 没有会话），由每台主机的令牌鉴权；它不提供任何查询能力。

## 开发

```sh
pnpm install
node build.mjs          # 生成 lib/client.js
node --test test/*.test.mjs
```

CI（GitHub Actions）会执行同样的构建与测试，并检查提交的 `lib/client.js` 与源码一致。

## 限制

- 一台主机一个磁盘挂载点（默认 `/`），不做多盘聚合。
- 外部通知只有通用 Webhook，没有内置的邮件/IM 平台适配；不同平台需要的 JSON 结构可在中转服务里转换。
- 历史是每分钟平均值，重启 DSH 后最近一小时的内存数据会丢失，磁盘历史保留。
- 关闭插件（或停用行）后路由、工具与页面一起消失。
