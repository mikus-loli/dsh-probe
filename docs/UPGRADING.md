# 升级方案

面板端（DSH 插件）与 agent 端（`agent/agent.sh`、`agent/agent.mjs`）在同一个仓库、同一个版本号发布：`package.json`、`host/version.js` 与两个 agent 脚本里的版本必须一致（`test/versions.test.mjs` 会检查）。

## 版本从哪看

- 面板运行时：`GET /auth/dsh-probe/version.json` 返回 `{ panel, agent, schema, agents }`（公开、无密钥）。
- 面板界面：设置页底部显示「面板 x.y.z · Agent x.y.z」；每台主机的详情页显示该主机 agent 的版本。
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

agent 是单文件、无状态上报者，升级只需替换文件并重启服务，**令牌与 systemd 配置不变**：

```sh
curl -fsSL https://<你的DSH地址>/auth/dsh-probe/agent.sh -o /usr/local/bin/dsh-probe-agent.sh
chmod 755 /usr/local/bin/dsh-probe-agent.sh
systemctl restart dsh-probe-agent
```

面板里更省事：主机显示「可升级」时，打开该主机的「安装与令牌」，复制「升级 Agent（保留令牌）」一块命令即可。Node 版本把 URL 换成 `/auth/dsh-probe/agent.mjs`、启动命令换成 `node`。

批量升级（可选）：

```sh
for host in web-1 api-2 db-1; do
  ssh "$host" 'curl -fsSL https://dsh.example.com/auth/dsh-probe/agent.sh -o /usr/local/bin/dsh-probe-agent.sh && chmod 755 /usr/local/bin/dsh-probe-agent.sh && systemctl restart dsh-probe-agent'
done
```

升级后几秒内，面板上的「可升级」标记会消失；`sh agent.sh --version` / `node agent.mjs --version` 可确认版本。

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
