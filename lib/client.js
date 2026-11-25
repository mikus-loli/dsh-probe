window.__ModuleLoader__.load({
	id: "@local/dsh-probe",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __export = (target, all) => {
		  for (var name in all)
		    __defProp(target, name, { get: all[name], enumerable: true });
		};
		var __copyProps = (to, from, except, desc) => {
		  if (from && typeof from === "object" || typeof from === "function") {
		    for (let key of __getOwnPropNames(from))
		      if (!__hasOwnProp.call(to, key) && key !== except)
		        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
		  }
		  return to;
		};
		var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
		
		// src/client/index.tsx
		var index_exports = {};
		__export(index_exports, {
		  PROBE_PANEL_ID: () => PROBE_PANEL_ID,
		  ProbePanelIcon: () => ProbePanelIcon,
		  apply: () => apply,
		  inject: () => inject
		});
		module.exports = __toCommonJS(index_exports);
		
		// src/client/locales.ts
		var zh = {
		  "entry.label": "\u63A2\u9488",
		  "page.title": "\u670D\u52A1\u5668\u63A2\u9488",
		  "page.subtitle": "{total} \u53F0\u4E3B\u673A \xB7 {online} \u53F0\u5728\u7EBF",
		  "page.subtitleEmpty": "\u8FD8\u6CA1\u6709\u88AB\u76D1\u63A7\u7684\u670D\u52A1\u5668",
		  "page.loading": "\u52A0\u8F7D\u4E2D\u2026",
		  "list.search": "\u641C\u7D22\u4E3B\u673A\u3001\u6807\u7B7E\u6216\u4F4D\u7F6E",
		  "list.filterAll": "\u5168\u90E8",
		  "list.filterOnline": "\u5728\u7EBF",
		  "list.filterOffline": "\u79BB\u7EBF",
		  "list.filterWaiting": "\u7B49\u5F85",
		  "list.empty": "\u6CA1\u6709\u5339\u914D\u7684\u4E3B\u673A",
		  "list.clear": "\u6E05\u9664\u7B5B\u9009",
		  "view.cards": "\u5361\u7247\u89C6\u56FE",
		  "view.table": "\u8868\u683C\u89C6\u56FE",
		  "stats.online": "\u5728\u7EBF\u4E3B\u673A",
		  "stats.alerts": "\u6D3B\u52A8\u544A\u8B66",
		  "stats.cpu": "\u5E73\u5747 CPU",
		  "stats.mem": "\u5E73\u5747\u5185\u5B58",
		  "table.status": "\u72B6\u6001",
		  "table.name": "\u4E3B\u673A",
		  "table.cpu": "CPU",
		  "table.mem": "\u5185\u5B58",
		  "table.disk": "\u78C1\u76D8",
		  "table.load": "\u8D1F\u8F7D/\u6838",
		  "table.net": "\u7F51\u7EDC",
		  "table.uptime": "\u8FD0\u884C",
		  "table.seen": "\u4E0A\u62A5",
		  "table.actions": "\u64CD\u4F5C",
		  "table.open": "\u8BE6\u60C5",
		  "tab.overview": "\u6982\u89C8",
		  "tab.alerts": "\u544A\u8B66",
		  "tab.settings": "\u8BBE\u7F6E",
		  "action.add": "\u6DFB\u52A0\u4E3B\u673A",
		  "action.refresh": "\u5237\u65B0",
		  "action.back": "\u8FD4\u56DE",
		  "action.edit": "\u7F16\u8F91",
		  "action.delete": "\u5220\u9664",
		  "action.deleteConfirm": "\u786E\u8BA4\u5220\u9664",
		  "action.rotate": "\u8F6E\u6362\u4EE4\u724C",
		  "action.rotateConfirm": "\u786E\u8BA4\u8F6E\u6362",
		  "action.copy": "\u590D\u5236",
		  "action.copied": "\u5DF2\u590D\u5236",
		  "action.save": "\u4FDD\u5B58",
		  "action.saving": "\u4FDD\u5B58\u4E2D\u2026",
		  "action.cancel": "\u53D6\u6D88",
		  "action.close": "\u5173\u95ED",
		  "action.details": "\u67E5\u770B\u8BE6\u60C5",
		  "action.show": "\u663E\u793A",
		  "action.hide": "\u9690\u85CF",
		  "action.enable": "\u542F\u7528",
		  "action.disable": "\u505C\u7528",
		  "action.clearRecent": "\u6E05\u7A7A\u5386\u53F2\u544A\u8B66",
		  "action.clearConfirm": "\u786E\u8BA4\u6E05\u7A7A",
		  "action.retry": "\u91CD\u8BD5",
		  "status.online": "\u5728\u7EBF",
		  "status.stale": "\u5EF6\u8FDF\u4E0A\u62A5",
		  "status.offline": "\u79BB\u7EBF",
		  "status.waiting": "\u7B49\u5F85\u9996\u62A5",
		  "status.disabled": "\u5DF2\u505C\u7528",
		  "status.muted": "\u9759\u9ED8\u4E2D",
		  "host.outdated": "\u53EF\u5347\u7EA7",
		  "status.online.short": "\u5728\u7EBF",
		  "status.waiting.short": "\u7B49\u5F85",
		  "status.stale.short": "\u5EF6\u8FDF",
		  "status.offline.short": "\u79BB\u7EBF",
		  "status.disabled.short": "\u5DF2\u505C\u7528",
		  "card.cpu": "CPU",
		  "card.mem": "\u5185\u5B58",
		  "card.disk": "\u78C1\u76D8",
		  "card.load": "\u8D1F\u8F7D",
		  "card.uptime": "\u8FD0\u884C",
		  "card.seen": "{age}\u4E0A\u62A5",
		  "card.never": "\u5C1A\u672A\u4E0A\u62A5",
		  "card.cores": "{count} \u6838",
		  "card.noData": "\u70B9\u51FB\u5361\u7247\u67E5\u770B\u5B89\u88C5\u547D\u4EE4",
		  "card.loadPerCore": "\u8D1F\u8F7D/\u6838",
		  "card.alerts": "{count} \u6761\u544A\u8B66",
		  "card.alertOne": "1 \u6761\u544A\u8B66",
		  "empty.title": "\u8FD8\u6CA1\u6709\u4E3B\u673A",
		  "empty.desc": "\u6DFB\u52A0\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u7136\u540E\u5728\u5B83\u4E0A\u9762\u8FD0\u884C\u4E00\u6761\u547D\u4EE4\uFF0C\u6307\u6807\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002",
		  "empty.action": "\u6DFB\u52A0\u7B2C\u4E00\u53F0\u4E3B\u673A",
		  "empty.waiting": "\u8FD9\u53F0\u4E3B\u673A\u8FD8\u6CA1\u6709\u4E0A\u62A5\u6570\u636E\u3002\u6253\u5F00\u8BE6\u60C5\u590D\u5236\u5B89\u88C5\u547D\u4EE4\uFF0C\u5728\u670D\u52A1\u5668\u4E0A\u8FD0\u884C\u5373\u53EF\u3002",
		  "alert.banner": "{count} \u6761\u544A\u8B66\u6B63\u5728\u89E6\u53D1",
		  "alert.bannerOne": "1 \u6761\u544A\u8B66\u6B63\u5728\u89E6\u53D1",
		  "alert.bannerList": "{names}",
		  "alerts.active": "\u6B63\u5728\u89E6\u53D1",
		  "alerts.activeCount": "{count} \u6761\u6B63\u5728\u89E6\u53D1",
		  "alerts.silent": "\u672A\u4E0A\u62A5 {value}s / \u9608\u503C {threshold}s",
		  "alerts.activeNone": "\u5F53\u524D\u6CA1\u6709\u544A\u8B66",
		  "alerts.recent": "\u6700\u8FD1\u89E3\u9664",
		  "alerts.recentNone": "\u8FD8\u6CA1\u6709\u5386\u53F2\u544A\u8B66",
		  "alerts.ending": "\u6301\u7EED {duration}",
		  "alerts.ended": "{ago}\u89E3\u9664 \xB7 \u6301\u7EED {duration}",
		  "alerts.rule.cpu": "CPU",
		  "alerts.rule.memory": "\u5185\u5B58",
		  "alerts.rule.disk": "\u78C1\u76D8",
		  "alerts.rule.load": "\u8D1F\u8F7D",
		  "alerts.rule.offline": "\u79BB\u7EBF",
		  "settings.title": "\u544A\u8B66\u4E0E\u5B58\u50A8",
		  "settings.desc": "\u540C\u4E00\u89C4\u5219\u6301\u7EED\u8D85\u8FC7\u9608\u503C\u7684\u65F6\u95F4\u8FBE\u5230\u201C\u6301\u7EED\u201D\u65F6\u957F\u624D\u4F1A\u544A\u8B66\uFF1B\u6062\u590D\u540E\u81EA\u52A8\u89E3\u9664\u3002",
		  "settings.threshold": "\u9608\u503C",
		  "settings.hold": "\u6301\u7EED",
		  "settings.enabled": "\u76D1\u63A7",
		  "settings.retention": "\u5386\u53F2\u4FDD\u7559",
		  "settings.retentionUnit": "\u5929",
		  "settings.retentionDesc": "\u6BCF\u5206\u949F\u4E00\u6863\uFF1B1 \u5C0F\u65F6\u5185\u7684\u539F\u59CB\u6570\u636E\u53EA\u5B58\u5728\u5185\u5B58\u91CC\u3002",
		  "settings.interval": "\u5EFA\u8BAE\u4E0A\u62A5\u95F4\u9694",
		  "settings.intervalUnit": "\u79D2",
		  "settings.intervalDesc": "\u4EC5\u7528\u4E8E\u751F\u6210\u5B89\u88C5\u547D\u4EE4\uFF1B\u6539\u5B8C\u8BF7\u5728\u670D\u52A1\u5668\u4E0A\u91CD\u542F agent\u3002",
		  "settings.saved": "\u8BBE\u7F6E\u5DF2\u4FDD\u5B58",
		  "settings.invalid": "\u9608\u503C\u81F3\u5C11\u4E3A 1\uFF0C\u6301\u7EED\u65F6\u95F4\u4E0D\u80FD\u4E3A\u8D1F\u3002",
		  "notify.title": "\u544A\u8B66\u901A\u77E5\uFF08Webhook\uFF09",
		  "notify.desc": "\u544A\u8B66\u5F00\u59CB\u6216\u89E3\u9664\u65F6\uFF0C\u5411\u8FD9\u4E2A\u5730\u5740 POST \u4E00\u6761 JSON\uFF08\u542B\u4E8B\u4EF6\u3001\u4E3B\u673A\u4E0E\u6570\u503C\uFF09\u3002",
		  "notify.enabled": "\u542F\u7528 Webhook \u901A\u77E5",
		  "notify.url": "Webhook \u5730\u5740",
		  "notify.urlHint": "\u652F\u6301 http/https\uFF1B\u7531\u5BBF\u4E3B\u8FDB\u7A0B\u76F4\u63A5\u8BF7\u6C42\uFF0C\u53EF\u6307\u5411\u5185\u7F51\u6216\u672C\u673A\u670D\u52A1\u3002",
		  "notify.onResolve": "\u89E3\u9664\u65F6\u4E5F\u901A\u77E5",
		  "notify.test": "\u53D1\u9001\u6D4B\u8BD5",
		  "notify.testing": "\u53D1\u9001\u4E2D\u2026",
		  "notify.testOk": "\u6D4B\u8BD5\u5DF2\u9001\u8FBE\uFF08HTTP {status}\uFF09",
		  "notify.testFail": "\u6D4B\u8BD5\u5931\u8D25\uFF1A{message}",
		  "notify.invalidUrl": "\u8BF7\u586B\u5199\u4EE5 http:// \u6216 https:// \u5F00\u5934\u7684\u5730\u5740\u3002",
		  "upgrade.title": "\u5347\u7EA7 Agent\uFF08\u4FDD\u7559\u4EE4\u724C\uFF09",
		  "upgrade.agentOutdated": "\u8FD9\u53F0\u4E3B\u673A\u7684 agent \u662F {from}\uFF0C\u6700\u65B0\u4E3A {to}\u3002\u6267\u884C\u4E0B\u9762\u7684\u5347\u7EA7\u547D\u4EE4\u5373\u53EF\uFF0C\u4EE4\u724C\u4E0E\u914D\u7F6E\u4E0D\u53D8\u3002",
		  "upgrade.hint": "\u66FF\u6362\u6587\u4EF6\u540E\u91CD\u542F\u670D\u52A1\uFF0C\u51E0\u79D2\u5185\u7248\u672C\u6807\u8BB0\u4F1A\u6D88\u5931\u3002",
		  "about.versions": "\u9762\u677F {panel} \xB7 Agent {agent}",
		  "settings.ruleCpu": "CPU \u4F7F\u7528\u7387",
		  "settings.ruleMemory": "\u5185\u5B58\u4F7F\u7528\u7387",
		  "settings.ruleDisk": "\u78C1\u76D8\u4F7F\u7528\u7387",
		  "settings.ruleLoad": "\u6BCF\u6838\u8D1F\u8F7D (1 \u5206\u949F)",
		  "settings.ruleOffline": "\u5931\u8054\u65F6\u957F",
		  "host.addTitle": "\u6DFB\u52A0\u4E3B\u673A",
		  "host.editTitle": "\u7F16\u8F91\u4E3B\u673A",
		  "host.name": "\u540D\u79F0",
		  "host.namePlaceholder": "\u4F8B\u5982 web-1 \u6216 \u4E1C\u4EAC \xB7 \u5EFA\u7AD9",
		  "host.tags": "\u6807\u7B7E",
		  "host.tagsPlaceholder": "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u4F8B\u5982 \u751F\u4EA7, \u65E5\u672C",
		  "host.location": "\u4F4D\u7F6E",
		  "host.locationPlaceholder": "\u4F8B\u5982 \u4E1C\u4EAC / \u963F\u91CC\u4E91",
		  "host.note": "\u5907\u6CE8",
		  "host.enabled": "\u542F\u7528\u4E0A\u62A5\uFF08\u5173\u95ED\u540E\u5FFD\u7565\u8BE5\u4E3B\u673A\u7684 agent \u4E0A\u62A5\uFF09",
		  "host.notePlaceholder": "\u53EF\u9009",
		  "host.save": "\u6DFB\u52A0",
		  "host.saveEdit": "\u4FDD\u5B58",
		  "install.title": "{name} \u7684\u5B89\u88C5\u547D\u4EE4",
		  "install.desc": "\u5728\u670D\u52A1\u5668\u4E0A\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u3002agent \u53EA\u8BFB\u53D6\u672C\u673A /proc \u8BA1\u6570\u4E0E df\uFF0C\u4E3B\u52A8\u4E0A\u62A5\u8FD9\u4E9B\u6570\u5B57\u3002",
		  "install.kind": "Agent \u7C7B\u578B",
		  "install.shell": "Shell\uFF08\u65E0\u4F9D\u8D56\uFF09",
		  "install.shellHint": "\u76EE\u6807\u673A\u6709 sh\u3001awk\u3001df \u548C curl \u5373\u53EF\uFF0C\u9002\u5408\u5927\u591A\u6570 Linux \u670D\u52A1\u5668\u3002",
		  "install.node": "Node \u811A\u672C",
		  "install.nodeHint": "\u76EE\u6807\u673A\u5DF2\u5B89\u88C5 Node 18+ \u65F6\u53EF\u7528\uFF1B\u5355\u6587\u4EF6\uFF0C\u65E0 npm \u4F9D\u8D56\u3002",
		  "install.server": "\u4E0A\u62A5\u5730\u5740",
		  "install.serverHint": "\u8FD9\u53F0\u670D\u52A1\u5668\u80FD\u8BBF\u95EE\u5230\u7684 DSH \u5730\u5740\uFF08\u516C\u7F51\u57DF\u540D\u6216\u5185\u7F51\u5730\u5740\uFF09\u3002\u672C\u673A\u6D4B\u8BD5\u65F6\u7528 http://127.0.0.1:3080 \u4E0D\u53EF\u884C\u2014\u2014\u8BF7\u586B\u670D\u52A1\u5668\u53EF\u8FBE\u7684\u5730\u5740\u3002",
		  "install.token": "Agent \u4EE4\u724C",
		  "install.tokenHint": "\u4EE4\u724C\u53EA\u5BF9\u8FD9\u53F0\u4E3B\u673A\u6709\u6548\uFF1B\u6CC4\u9732\u540E\u5728\u8FD9\u91CC\u8F6E\u6362\u5373\u53EF\u4F5C\u5E9F\u3002",
		  "install.open": "\u83B7\u53D6\u5B89\u88C5\u547D\u4EE4",
		  "install.step1": "1. \u4E0B\u8F7D agent",
		  "install.step2": "2. \u524D\u53F0\u8BD5\u8DD1\uFF08\u770B\u5230\u4E0A\u62A5\u6210\u529F\u5373\u53EF Ctrl+C\uFF09",
		  "install.step3": "3. \u5B89\u88C5\u4E3A\u7CFB\u7EDF\u670D\u52A1\uFF08\u63A8\u8350\uFF09",
		  "install.waiting": "\u6B63\u5728\u7B49\u5F85\u9996\u6B21\u4E0A\u62A5\u2026\u6267\u884C\u547D\u4EE4\u540E\u51E0\u79D2\u5185\u72B6\u6001\u4F1A\u81EA\u52A8\u53D8\u4E3A\u5728\u7EBF\u3002",
		  "install.online": "\u5DF2\u6536\u5230\u4E0A\u62A5\uFF0C\u63A2\u9488\u6B63\u5728\u5DE5\u4F5C\u3002",
		  "install.invalidOrigin": "\u8BF7\u586B\u5199\u4EE5 http:// \u6216 https:// \u5F00\u5934\u3001\u670D\u52A1\u5668\u80FD\u8BBF\u95EE\u5230\u7684\u5730\u5740\u3002",
		  "token.rotated": "\u4EE4\u724C\u5DF2\u8F6E\u6362",
		  "install.copyAll": "\u590D\u5236\u5168\u90E8\u547D\u4EE4",
		  "install.rotateHint": "\u8F6E\u6362\u4EE4\u724C\u540E\uFF0C\u670D\u52A1\u5668\u4E0A\u7684 agent \u9700\u8981\u6362\u6210\u65B0\u4EE4\u724C\u91CD\u542F\u3002",
		  "detail.metrics": "\u5B9E\u65F6\u6307\u6807",
		  "detail.cpu": "CPU",
		  "detail.mem": "\u5185\u5B58",
		  "detail.swap": "\u4EA4\u6362\u5206\u533A",
		  "detail.disk": "\u78C1\u76D8",
		  "detail.load": "\u8D1F\u8F7D",
		  "detail.net": "\u7F51\u7EDC",
		  "detail.conn": "\u8FDE\u63A5\u6570",
		  "detail.udp": "UDP",
		  "detail.traffic": "\u7D2F\u8BA1\u6D41\u91CF",
		  "detail.gpu": "GPU",
		  "detail.uptime": "\u8FD0\u884C\u65F6\u957F",
		  "detail.cores": "\u6838",
		  "detail.os": "\u7CFB\u7EDF",
		  "detail.agent": "Agent",
		  "detail.trend": "\u8D8B\u52BF",
		  "detail.alerts": "\u8FD9\u53F0\u4E3B\u673A\u7684\u544A\u8B66",
		  "detail.noAlerts": "\u6CA1\u6709\u544A\u8B66",
		  "detail.install": "\u5B89\u88C5\u4E0E\u4EE4\u724C",
		  "detail.mute": "\u9759\u9ED8 1 \u5C0F\u65F6",
		  "detail.unmute": "\u53D6\u6D88\u9759\u9ED8",
		  "detail.mutedChip": "\u7EF4\u62A4\u4E2D",
		  "chart.1h": "1 \u5C0F\u65F6",
		  "chart.24h": "24 \u5C0F\u65F6",
		  "chart.7d": "7 \u5929",
		  "chart.cpu": "CPU",
		  "chart.mem": "\u5185\u5B58",
		  "chart.disk": "\u78C1\u76D8",
		  "chart.noData": "\u8FD9\u4E2A\u65F6\u95F4\u7A97\u5185\u8FD8\u6CA1\u6709\u6570\u636E",
		  "chart.loading": "\u52A0\u8F7D\u4E2D\u2026",
		  "error.load": "\u52A0\u8F7D\u5931\u8D25\uFF1A{message}",
		  "error.action": "\u64CD\u4F5C\u5931\u8D25\uFF1A{message}",
		  "error.network": "\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u8FDB\u7A0B",
		  "time.never": "\u4ECE\u672A",
		  "time.justNow": "\u521A\u521A",
		  "unit.sec": "\u79D2"
		};
		var en = {
		  "entry.label": "Probe",
		  "page.title": "Server probe",
		  "page.subtitle": "{total} hosts \xB7 {online} online",
		  "page.subtitleEmpty": "No monitored servers yet",
		  "page.loading": "Loading\u2026",
		  "list.search": "Search name, tag or location",
		  "list.filterAll": "All",
		  "list.filterOnline": "Online",
		  "list.filterOffline": "Offline",
		  "list.filterWaiting": "Waiting",
		  "list.empty": "No hosts match",
		  "list.clear": "Clear filters",
		  "view.cards": "Card view",
		  "view.table": "Table view",
		  "stats.online": "Hosts online",
		  "stats.alerts": "Active alerts",
		  "stats.cpu": "Avg CPU",
		  "stats.mem": "Avg memory",
		  "table.status": "Status",
		  "table.name": "Host",
		  "table.cpu": "CPU",
		  "table.mem": "Memory",
		  "table.disk": "Disk",
		  "table.load": "Load/core",
		  "table.net": "Network",
		  "table.uptime": "Uptime",
		  "table.seen": "Reported",
		  "table.actions": "Actions",
		  "table.open": "Details",
		  "tab.overview": "Overview",
		  "tab.alerts": "Alerts",
		  "tab.settings": "Settings",
		  "action.add": "Add host",
		  "action.refresh": "Refresh",
		  "action.back": "Back",
		  "action.edit": "Edit",
		  "action.delete": "Delete",
		  "action.deleteConfirm": "Confirm delete",
		  "action.rotate": "Rotate token",
		  "action.rotateConfirm": "Confirm rotate",
		  "action.copy": "Copy",
		  "action.copied": "Copied",
		  "action.save": "Save",
		  "action.saving": "Saving\u2026",
		  "action.cancel": "Cancel",
		  "action.close": "Close",
		  "action.details": "Details",
		  "action.show": "Show",
		  "action.hide": "Hide",
		  "action.enable": "Enable",
		  "action.disable": "Disable",
		  "action.clearRecent": "Clear resolved alerts",
		  "action.clearConfirm": "Confirm clear",
		  "action.retry": "Retry",
		  "status.online": "Online",
		  "status.stale": "Delayed",
		  "status.offline": "Offline",
		  "status.waiting": "Waiting for first report",
		  "status.disabled": "Disabled",
		  "status.muted": "Muted",
		  "host.outdated": "Update",
		  "status.online.short": "Online",
		  "status.waiting.short": "Waiting",
		  "status.stale.short": "Delayed",
		  "status.offline.short": "Offline",
		  "status.disabled.short": "Disabled",
		  "card.cpu": "CPU",
		  "card.mem": "Memory",
		  "card.disk": "Disk",
		  "card.load": "Load",
		  "card.uptime": "Uptime",
		  "card.seen": "reported {age}",
		  "card.never": "never reported",
		  "card.cores": "{count} cores",
		  "card.noData": "Open the card for the install command",
		  "card.loadPerCore": "Load/core",
		  "card.alerts": "{count} alerts",
		  "card.alertOne": "1 alert",
		  "empty.title": "No hosts yet",
		  "empty.desc": "Add a server, run one command on it, and its metrics appear here.",
		  "empty.action": "Add the first host",
		  "empty.waiting": "This host has not reported yet. Open it, copy the install command, and run it on the server.",
		  "alert.banner": "{count} alerts firing",
		  "alert.bannerOne": "1 alert firing",
		  "alert.bannerList": "{names}",
		  "alerts.active": "Firing now",
		  "alerts.activeCount": "{count} firing",
		  "alerts.silent": "silent {value}s / limit {threshold}s",
		  "alerts.activeNone": "No active alerts",
		  "alerts.recent": "Recently resolved",
		  "alerts.recentNone": "No resolved alerts yet",
		  "alerts.ending": "For {duration}",
		  "alerts.ended": "Resolved {ago} \xB7 lasted {duration}",
		  "alerts.rule.cpu": "CPU",
		  "alerts.rule.memory": "Memory",
		  "alerts.rule.disk": "Disk",
		  "alerts.rule.load": "Load",
		  "alerts.rule.offline": "Offline",
		  "settings.title": "Alerts and retention",
		  "settings.desc": "A rule alerts only after the value stays above its threshold for the hold time, and clears when it recovers.",
		  "settings.threshold": "Threshold",
		  "settings.hold": "Hold",
		  "settings.enabled": "Monitor",
		  "settings.retention": "History retention",
		  "settings.retentionUnit": "days",
		  "settings.retentionDesc": "One sample per minute; raw samples cover the last hour in memory.",
		  "settings.interval": "Suggested report interval",
		  "settings.intervalUnit": "s",
		  "settings.intervalDesc": "Used only to compose the install command; restart the agent after changing it.",
		  "settings.saved": "Settings saved",
		  "settings.invalid": "Thresholds must be at least 1; hold times cannot be negative.",
		  "notify.title": "Alert webhook",
		  "notify.desc": "POSTs one JSON document (event, host, values) when an alert opens or resolves.",
		  "notify.enabled": "Enable webhook notifications",
		  "notify.url": "Webhook URL",
		  "notify.urlHint": "http/https; the host process calls it directly, so LAN and localhost targets work.",
		  "notify.onResolve": "Also notify on resolve",
		  "notify.test": "Send test",
		  "notify.testing": "Sending\u2026",
		  "notify.testOk": "Test delivered (HTTP {status})",
		  "notify.testFail": "Test failed: {message}",
		  "notify.invalidUrl": "Use an address that starts with http:// or https://.",
		  "upgrade.title": "Upgrade agent (token kept)",
		  "upgrade.agentOutdated": "This host runs agent {from}; the latest is {to}. Run the upgrade command below \u2014 token and config stay the same.",
		  "upgrade.hint": "Restart the service after replacing the file; the badge clears within seconds.",
		  "about.versions": "Panel {panel} \xB7 Agent {agent}",
		  "settings.ruleCpu": "CPU usage",
		  "settings.ruleMemory": "Memory usage",
		  "settings.ruleDisk": "Disk usage",
		  "settings.ruleLoad": "Load per core (1 min)",
		  "settings.ruleOffline": "Silence before offline",
		  "host.addTitle": "Add host",
		  "host.editTitle": "Edit host",
		  "host.name": "Name",
		  "host.namePlaceholder": "e.g. web-1 or Tokyo \xB7 site",
		  "host.tags": "Tags",
		  "host.tagsPlaceholder": "Comma separated, e.g. prod, jp",
		  "host.location": "Location",
		  "host.locationPlaceholder": "e.g. Tokyo / Aliyun",
		  "host.note": "Note",
		  "host.enabled": "Accept reports (off ignores this host's agent)",
		  "host.notePlaceholder": "Optional",
		  "host.save": "Add",
		  "host.saveEdit": "Save",
		  "install.title": "Install command for {name}",
		  "install.desc": "Run these commands on the server. The agent only reads local /proc counters and df, then reports these numbers.",
		  "install.kind": "Agent type",
		  "install.shell": "Shell (no runtime)",
		  "install.shellHint": "Needs only sh, awk, df and curl on the server; works on most Linux hosts.",
		  "install.node": "Node script",
		  "install.nodeHint": "For servers that already run Node 18+; one file, no npm install.",
		  "install.server": "Report URL",
		  "install.serverHint": "A DSH address this server can reach (public domain or LAN address). http://127.0.0.1:3080 will not work from another machine.",
		  "install.token": "Agent token",
		  "install.tokenHint": "The token authorizes reports for this host only; rotate it here to revoke a leaked one.",
		  "install.open": "Get install command",
		  "install.step1": "1. Download the agent",
		  "install.step2": "2. Try it in the foreground (Ctrl+C once a report succeeds)",
		  "install.step3": "3. Install as a system service (recommended)",
		  "install.waiting": "Waiting for the first report\u2026 the status turns online within seconds after you run the command.",
		  "install.online": "Reports are arriving; the probe is live.",
		  "install.invalidOrigin": "Use an address that starts with http:// or https:// and that the server can reach.",
		  "token.rotated": "Token rotated",
		  "install.copyAll": "Copy all commands",
		  "install.rotateHint": "After rotating, restart the agent on the server with the new token.",
		  "detail.metrics": "Live metrics",
		  "detail.cpu": "CPU",
		  "detail.mem": "Memory",
		  "detail.swap": "Swap",
		  "detail.disk": "Disk",
		  "detail.load": "Load",
		  "detail.net": "Network",
		  "detail.conn": "Connections",
		  "detail.udp": "UDP",
		  "detail.traffic": "Total traffic",
		  "detail.gpu": "GPU",
		  "detail.uptime": "Uptime",
		  "detail.cores": "cores",
		  "detail.os": "OS",
		  "detail.agent": "Agent",
		  "detail.trend": "Trend",
		  "detail.alerts": "Alerts for this host",
		  "detail.noAlerts": "No alerts",
		  "detail.install": "Install & token",
		  "detail.mute": "Mute 1 hour",
		  "detail.unmute": "Unmute",
		  "detail.mutedChip": "Muted",
		  "chart.1h": "1 hour",
		  "chart.24h": "24 hours",
		  "chart.7d": "7 days",
		  "chart.cpu": "CPU",
		  "chart.mem": "Memory",
		  "chart.disk": "Disk",
		  "chart.noData": "No data in this window",
		  "chart.loading": "Loading\u2026",
		  "error.load": "Failed to load: {message}",
		  "error.action": "Action failed: {message}",
		  "error.network": "Cannot reach the host process",
		  "time.never": "never",
		  "time.justNow": "just now",
		  "unit.sec": "s"
		};
		function t(dictionary2, key, values) {
		  const template = dictionary2[key] ?? zh[key] ?? key;
		  if (values === void 0) return template;
		  return template.replace(/\{(\w+)\}/g, (match, name) => {
		    const value = values[name];
		    return value === void 0 ? match : String(value);
		  });
		}
		
		// src/client/panel/helpers.ts
		function dictionary() {
		  const lang = (typeof document !== "undefined" && document.documentElement.lang !== "" ? document.documentElement.lang : "zh").toLowerCase();
		  return lang.startsWith("zh") ? { ...zh } : { ...en };
		}
		var runtimeT;
		function setRuntimeTranslate(translate) {
		  runtimeT = translate;
		}
		function tt(key, values) {
		  if (runtimeT !== void 0) return runtimeT(key, values);
		  return t(dictionary(), key, values);
		}
		function errorMessage(error) {
		  return error instanceof Error ? error.message : String(error);
		}
		async function copyText(text) {
		  try {
		    if (navigator.clipboard !== void 0) {
		      await navigator.clipboard.writeText(text);
		      return true;
		    }
		  } catch {
		  }
		  try {
		    const area = document.createElement("textarea");
		    area.value = text;
		    area.style.position = "fixed";
		    area.style.opacity = "0";
		    document.body.appendChild(area);
		    area.select();
		    const ok = document.execCommand("copy");
		    document.body.removeChild(area);
		    return ok;
		  } catch {
		    return false;
		  }
		}
		
		// src/client/api.ts
		var BASE = "/api/dsh-probe";
		var ProbeApiError = class extends Error {
		  constructor(message) {
		    super(message);
		    this.name = "ProbeApiError";
		  }
		};
		async function readJson(response) {
		  let body;
		  try {
		    body = await response.json();
		  } catch {
		    if (response.status === 404) throw new ProbeApiError(tt("error.network"));
		    throw new ProbeApiError(`HTTP ${response.status}`);
		  }
		  if (!response.ok) {
		    const message = typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : `HTTP ${response.status}`;
		    throw new ProbeApiError(message);
		  }
		  return body;
		}
		async function request(path, init = {}) {
		  const response = await fetch(BASE + path, {
		    credentials: "same-origin",
		    headers: init.body === void 0 ? void 0 : { "content-type": "application/json" },
		    ...init
		  });
		  return readJson(response);
		}
		var ProbeApi = class {
		  /** Current snapshot: hosts, alerts, settings. */
		  async snapshot() {
		    return request("/snapshot");
		  }
		  /** Create one host; the response carries its fresh agent token. */
		  async createHost(input) {
		    const body = await request("/hosts", { method: "POST", body: JSON.stringify(input) });
		    return body.host;
		  }
		  /** Patch one host. */
		  async updateHost(id, patch) {
		    const body = await request(`/hosts/${encodeURIComponent(id)}`, { method: "PATCH", body: JSON.stringify(patch) });
		    return body.host;
		  }
		  /** Remove one host and its history. */
		  async deleteHost(id) {
		    await request(`/hosts/${encodeURIComponent(id)}`, { method: "DELETE" });
		  }
		  /** Mint a new agent token for one host. */
		  async rotateToken(id) {
		    const body = await request(`/hosts/${encodeURIComponent(id)}/token`, { method: "POST" });
		    return body.host;
		  }
		  /** One host's trend for 1h / 24h / 7d. */
		  async history(id, range) {
		    return request(`/hosts/${encodeURIComponent(id)}/history?range=${range}`);
		  }
		  /** Silence a host's alerts for a window (0 unmutes). */
		  async setMute(id, minutes) {
		    const body = await request(`/hosts/${encodeURIComponent(id)}/mute`, {
		      method: "POST",
		      body: JSON.stringify({ minutes })
		    });
		    return body.host;
		  }
		  /** Send a test webhook and return the delivery outcome. */
		  async testNotify() {
		    const body = await request("/notify/test", { method: "POST" });
		    return body.delivery;
		  }
		  /** Save a settings patch. */
		  async updateSettings(patch) {
		    const body = await request("/settings", { method: "PATCH", body: JSON.stringify(patch) });
		    return body.settings;
		  }
		  /** The alert document. */
		  async alerts() {
		    return request("/alerts");
		  }
		  /** Drop resolved-alert history. */
		  async clearRecentAlerts() {
		    return request("/alerts/clear", { method: "POST" });
		  }
		};
		
		// src/client/panel/ProbePanel.tsx
		var import_react = require("react");
		
		// src/client/panel/format.ts
		function bytes(value) {
		  if (value === void 0 || !Number.isFinite(value) || value <= 0) return "0 B";
		  const units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"];
		  let index = 0;
		  let size = value;
		  while (size >= 1024 && index < units.length - 1) {
		    size /= 1024;
		    index += 1;
		  }
		  return `${size >= 100 ? Math.round(size) : size.toFixed(1)} ${units[index]}`;
		}
		function rate(value) {
		  return `${bytes(value)}/s`;
		}
		function percent(value) {
		  if (value === void 0 || !Number.isFinite(value)) return "\u2014";
		  return `${Math.round(value * 10) / 10}%`;
		}
		function load(value) {
		  if (value === void 0 || !Number.isFinite(value)) return "\u2014";
		  return value.toFixed(2);
		}
		function uptime(seconds) {
		  if (seconds === void 0 || !Number.isFinite(seconds) || seconds <= 0) return "\u2014";
		  return durationShort(seconds);
		}
		function durationShort(seconds) {
		  const total = Math.max(0, Math.round(seconds));
		  const days = Math.floor(total / 86400);
		  const hours = Math.floor(total % 86400 / 3600);
		  const minutes = Math.floor(total % 3600 / 60);
		  if (days > 0) return `${days}d ${hours}h`;
		  if (hours > 0) return `${hours}h ${minutes}m`;
		  if (minutes > 0) return `${minutes}m`;
		  return `${total}s`;
		}
		function ago(timestamp) {
		  if (timestamp === void 0 || timestamp === 0) return tt("time.never");
		  const seconds = Math.max(0, Math.round((Date.now() - timestamp) / 1e3));
		  if (seconds < 5) return tt("time.justNow");
		  if (seconds < 60) return `${seconds}${tt("unit.sec")}`;
		  if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
		  if (seconds < 86400) return `${Math.round(seconds / 3600)}h`;
		  return `${Math.round(seconds / 86400)}d`;
		}
		
		// css-module:./src/client/panel/panel.module.css
		var CSS = "/**\n * dsh-probe panel styles.\n *\n * Scoped by the build's class prefix (`probe_`) so nothing leaks into the rest\n * of the GUI; every color rides a `--dsw-alias-*` token so the panel follows\n * light, dark and skins. Layout language follows the other center-column\n * pages: a compact header, a segmented pill row, and bordered surfaces that\n * collapse to one column on a phone.\n */\n\n.probe_page {\n  --probe-accent: var(--dsw-alias-state-business-primary);\n  --probe-line: var(--dsw-alias-border-l1);\n  --probe-line-strong: var(--dsw-alias-border-l2);\n  --probe-mono: ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  height: 100%;\n  min-height: 0;\n  overflow: hidden;\n  padding: 18px 22px 20px;\n  background: var(--dsw-alias-bg-base);\n  color: var(--dsw-alias-label-primary);\n  font-family: var(--dsw-font-family);\n}\n\n.probe_page,\n.probe_page *,\n.probe_page *::before,\n.probe_page *::after {\n  box-sizing: border-box;\n}\n\n/* --- header ------------------------------------------------------------------ */\n\n.probe_header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  flex: none;\n}\n\n.probe_headerText {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n\n.probe_title {\n  margin: 0;\n  font-size: 19px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n}\n\n.probe_subtitle {\n  margin: 0;\n  font-size: 12.5px;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_headerActions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.probe_primaryButton {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 13px;\n  font-size: 12.5px;\n  font-weight: 500;\n  font-family: inherit;\n  color: var(--dsw-alias-label-primary-foreground);\n  background: var(--dsw-alias-button-primary-fill);\n  border: 1px solid transparent;\n  border-radius: 9px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s ease;\n}\n\n.probe_primaryButton:hover:not(:disabled) {\n  background: var(--dsw-alias-button-primary-hover);\n}\n\n.probe_primaryButton:disabled {\n  opacity: 0.55;\n  cursor: default;\n}\n\n.probe_ghostButton {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n  font-family: inherit;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  border: 1px solid var(--probe-line);\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s ease, color 0.13s ease;\n}\n\n.probe_ghostButton:hover {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.probe_dangerGhost {\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n  font-family: inherit;\n  color: var(--dsw-alias-state-error-primary);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.probe_dangerGhost:hover,\n.probe_dangerGhost[data-confirm='true'] {\n  background: var(--dsw-alias-interactive-bg-hover-danger);\n  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 35%, transparent);\n}\n\n.probe_iconButton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  font-size: 17px;\n  line-height: 1;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  border: none;\n  border-radius: 7px;\n  cursor: pointer;\n}\n\n.probe_iconButton:hover {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n/* --- tabs -------------------------------------------------------------------- */\n\n.probe_tabs {\n  display: inline-flex;\n  align-self: flex-start;\n  gap: 2px;\n  padding: 3px;\n  background: var(--dsw-specific-selector, var(--dsw-alias-bg-layer-2));\n  border-radius: 10px;\n  flex: none;\n}\n\n/* The only scrolling region: header and tabs stay put while hosts scroll. */\n.probe_body {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 1px 2px 8px 1px;\n}\n\n.probe_tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 28px;\n  padding: 0 13px;\n  font-size: 12.5px;\n  font-family: inherit;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  border: none;\n  border-radius: 7px;\n  cursor: pointer;\n}\n\n.probe_tab:hover {\n  color: var(--dsw-alias-label-primary);\n}\n\n.probe_tab[data-active='true'] {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-base);\n  box-shadow: var(--dsw-elevation-stroke);\n  font-weight: 500;\n}\n\n.probe_tabCount {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  font-size: 10.5px;\n  font-weight: 600;\n  color: var(--dsw-alias-label-primary-foreground);\n  background: var(--dsw-alias-state-error-primary);\n  border-radius: 8px;\n}\n\n/* --- shared bits -------------------------------------------------------------- */\n\n.probe_errorBar {\n  padding: 8px 12px;\n  font-size: 12.5px;\n  color: var(--dsw-alias-state-error-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 9%, transparent);\n  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 26%, transparent);\n  border-radius: 9px;\n}\n\n.probe_muted {\n  font-size: 12px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_hint {\n  margin: 0;\n  font-size: 11.5px;\n  line-height: 1.55;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_chipRow {\n  display: inline-flex;\n  gap: 4px;\n  flex: 0 0 auto;\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n\n.probe_chip {\n  display: inline-flex;\n  align-items: center;\n  height: 18px;\n  padding: 0 6px;\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-2);\n  border: 1px solid var(--probe-line);\n  border-radius: 5px;\n}\n\n.probe_statusChip {\n  display: inline-flex;\n  align-items: center;\n  height: 20px;\n  padding: 0 8px;\n  font-size: 11px;\n  border-radius: 10px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.probe_statusChip[data-status='online'] {\n  color: var(--dsw-alias-state-success-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 12%, transparent);\n}\n\n.probe_statusChip[data-status='stale'] {\n  color: var(--dsw-alias-state-warn-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 14%, transparent);\n}\n\n.probe_statusChip[data-status='offline'] {\n  color: var(--dsw-alias-state-error-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);\n}\n\n.probe_statusChip[data-status='muted'] {\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  border: 1px dashed var(--probe-line-strong);\n}\n\n.probe_dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex: none;\n  background: var(--dsw-alias-state-idle-primary);\n}\n\n.probe_dot[data-status='online'] {\n  background: var(--dsw-alias-state-success-primary);\n}\n\n.probe_dot[data-status='stale'] {\n  background: var(--dsw-alias-state-warn-primary);\n}\n\n.probe_dot[data-status='offline'] {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.probe_dot[data-status='waiting'],\n.probe_dot[data-status='disabled'] {\n  background: var(--dsw-alias-state-idle-primary);\n}\n\n/* --- alert banner ------------------------------------------------------------- */\n\n.probe_banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 13px;\n  text-align: left;\n  font-family: inherit;\n  font-size: 12.5px;\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 38%, transparent);\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.probe_banner:hover {\n  background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 16%, var(--dsw-alias-bg-base));\n}\n\n.probe_bannerIcon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  flex: none;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 45%, transparent);\n  border-radius: 50%;\n}\n\n.probe_bannerText {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n  min-width: 0;\n}\n\n.probe_bannerList {\n  font-size: 11.5px;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_bannerArrow {\n  margin-left: auto;\n  font-size: 18px;\n  line-height: 1;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n/* --- host grid ----------------------------------------------------------------- */\n\n.probe_grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(286px, 1fr));\n  gap: 12px;\n}\n\n.probe_card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px 15px 12px;\n  background: var(--dsw-alias-card-fill);\n  border: 1px solid var(--probe-line);\n  border-radius: 13px;\n  cursor: pointer;\n  transition: border-color 0.14s ease, background 0.14s ease, transform 0.14s ease;\n}\n\n.probe_card:hover {\n  background: var(--dsw-alias-card-fill-hover);\n  border-color: var(--probe-line-strong);\n}\n\n.probe_card:focus-visible {\n  outline: 2px solid var(--dsw-focus-ring-color, var(--probe-accent));\n  outline-offset: 2px;\n}\n\n.probe_card[data-status='waiting'] {\n  border-style: dashed;\n}\n\n.probe_card[data-status='offline'],\n.probe_card[data-status='disabled'] {\n  opacity: 0.86;\n}\n\n.probe_cardTop {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.probe_hostName {\n  font-size: 13.5px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n\n.probe_alertChip {\n  flex: none;\n  padding: 1px 6px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n  border-radius: 5px;\n}\n\n.probe_cardAge {\n  margin-left: auto;\n  flex: none;\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-tertiary);\n  white-space: nowrap;\n}\n\n.probe_cardMeta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 18px;\n  min-width: 0;\n}\n\n.probe_cardStatus {\n  flex: none;\n  padding: 1px 6px;\n  font-size: 10px;\n  border-radius: 5px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-2);\n  white-space: nowrap;\n}\n\n.probe_cardStatus[data-status='stale'] {\n  color: var(--dsw-alias-state-warn-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 14%, transparent);\n}\n\n.probe_cardStatus[data-status='offline'] {\n  color: var(--dsw-alias-state-error-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);\n}\n\n.probe_cardStatus[data-status='muted'] {\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  border: 1px dashed var(--probe-line-strong);\n}\n\n.probe_cardStatus[data-status='outdated'] {\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n}\n\n.probe_metaText {\n  flex: 1 1 auto;\n  font-size: 11.5px;\n  color: var(--dsw-alias-label-tertiary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n\n.probe_gaugeRow {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.probe_gauge {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.probe_gaugeHead {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 4px;\n}\n\n.probe_gaugeLabel {\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-tertiary);\n  letter-spacing: 0.02em;\n}\n\n.probe_gaugeValue {\n  font-size: 12px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.probe_gaugeTrack {\n  display: block;\n  height: 4px;\n  border-radius: 2px;\n  background: var(--dsw-alias-bg-layer-2);\n  overflow: hidden;\n}\n\n.probe_gaugeFill {\n  display: block;\n  height: 100%;\n  border-radius: 2px;\n  background: var(--probe-accent);\n  transition: width 0.35s ease;\n}\n\n.probe_gauge[data-tone='warn'] .probe_gaugeFill {\n  background: var(--dsw-alias-state-warn-primary);\n}\n\n.probe_gauge[data-tone='critical'] .probe_gaugeFill {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.probe_spark {\n  display: block;\n  width: 100%;\n  height: 32px;\n  overflow: visible;\n}\n\n.probe_sparkLine {\n  fill: none;\n  stroke: var(--probe-accent);\n  stroke-width: 1.5;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n\n.probe_sparkArea {\n  fill: color-mix(in srgb, var(--probe-accent) 12%, transparent);\n  stroke: none;\n}\n\n.probe_spark[data-tone='warn'] .probe_sparkLine {\n  stroke: var(--dsw-alias-state-warn-primary);\n}\n\n.probe_spark[data-tone='warn'] .probe_sparkArea {\n  fill: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 12%, transparent);\n}\n\n.probe_spark[data-tone='critical'] .probe_sparkLine {\n  stroke: var(--dsw-alias-state-error-primary);\n}\n\n.probe_spark[data-tone='critical'] .probe_sparkArea {\n  fill: color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);\n}\n\n.probe_sparkEmpty {\n  height: 32px;\n  border-bottom: 1px dashed var(--probe-line);\n}\n\n.probe_cardFoot {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  font-size: 11px;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_footItem {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 4px;\n  white-space: nowrap;\n}\n\n.probe_footLabel {\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_footValue {\n  font-variant-numeric: tabular-nums;\n}\n\n/* --- empty state --------------------------------------------------------------- */\n\n.probe_empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 54px 24px;\n  text-align: center;\n  border: 1px dashed var(--probe-line-strong);\n  border-radius: 14px;\n}\n\n.probe_emptyGlyph {\n  color: var(--dsw-alias-label-tertiary);\n  opacity: 0.85;\n}\n\n.probe_emptyTitle {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.probe_emptyText {\n  margin: 0;\n  max-width: 420px;\n  font-size: 12.5px;\n  line-height: 1.6;\n  color: var(--dsw-alias-label-secondary);\n}\n\n/* --- detail -------------------------------------------------------------------- */\n\n.probe_detail {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-width: 0;\n}\n\n.probe_detailMeta {\n  margin: -4px 0 0;\n  font-size: 11.5px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_detailHeader {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.probe_backButton {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  height: 28px;\n  padding: 0 8px 0 5px;\n  font-size: 12px;\n  font-family: inherit;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 7px;\n  cursor: pointer;\n}\n\n.probe_backButton:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.probe_detailTitleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  min-width: 0;\n}\n\n.probe_detailTitle {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.probe_detailActions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n\n.probe_waitingNote {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 10px 13px;\n  font-size: 12px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-2);\n  border: 1px dashed var(--probe-line-strong);\n  border-radius: 10px;\n}\n\n.probe_tiles {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));\n  gap: 8px;\n}\n\n.probe_tile {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 10px 12px;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--probe-line);\n  border-radius: 10px;\n  min-width: 0;\n}\n\n.probe_tileLabel {\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_tileValue {\n  font-size: 15px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.probe_tileSub {\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-tertiary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* --- chart ---------------------------------------------------------------------- */\n\n.probe_chartCard {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 14px 10px;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--probe-line);\n  border-radius: 12px;\n  min-width: 0;\n}\n\n.probe_chartHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.probe_sectionTitle {\n  font-size: 12.5px;\n  font-weight: 600;\n}\n\n.probe_rangePills {\n  display: inline-flex;\n  gap: 2px;\n  padding: 2px;\n  background: var(--dsw-alias-bg-layer-2);\n  border-radius: 8px;\n}\n\n.probe_pill {\n  height: 24px;\n  padding: 0 10px;\n  font-size: 11.5px;\n  font-family: inherit;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.probe_pill:hover {\n  color: var(--dsw-alias-label-primary);\n}\n\n.probe_pill[data-active='true'] {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-base);\n  box-shadow: var(--dsw-elevation-stroke);\n  font-weight: 500;\n}\n\n.probe_chartBody {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  transition: opacity 0.15s ease;\n}\n\n.probe_chartBody[data-loading='true'] {\n  opacity: 0.55;\n}\n\n.probe_chartError {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 12px;\n  font-size: 12px;\n  color: var(--dsw-alias-state-error-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent);\n  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 25%, transparent);\n  border-radius: 9px;\n}\n\n.probe_chartSvg {\n  display: block;\n  width: 100%;\n  height: 190px;\n}\n\n.probe_chartGrid {\n  stroke: var(--probe-line-strong);\n  stroke-width: 1;\n  stroke-dasharray: 3 4;\n}\n\n.probe_chartLine {\n  fill: none;\n  stroke-width: 1.6;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n\n.probe_chartAxis {\n  display: flex;\n  justify-content: space-between;\n  font-size: 10px;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n\n.probe_chartEmpty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 190px;\n  font-size: 12px;\n  color: var(--dsw-alias-label-tertiary);\n  border: 1px dashed var(--probe-line);\n  border-radius: 9px;\n}\n\n.probe_legend {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  font-size: 11px;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_legendItem {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.probe_legendItem strong {\n  font-weight: 600;\n  color: var(--dsw-alias-label-primary);\n  font-variant-numeric: tabular-nums;\n}\n\n.probe_legendDot {\n  width: 7px;\n  height: 7px;\n  border-radius: 2px;\n}\n\n/* --- stats + list toolbar ----------------------------------------------------------- */\n\n.probe_stats {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 8px;\n}\n\n.probe_stat {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 10px 12px;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--probe-line);\n  border-radius: 10px;\n  min-width: 0;\n}\n\n.probe_statLabel {\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-tertiary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.probe_statValue {\n  font-size: 17px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.probe_stat[data-tone='warn'] .probe_statValue {\n  color: var(--dsw-alias-state-warn-primary);\n}\n\n.probe_stat[data-tone='ok'] .probe_statValue {\n  color: var(--dsw-alias-state-success-primary);\n}\n\n.probe_listBar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.probe_searchWrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1 1 220px;\n  max-width: 320px;\n}\n\n.probe_searchGlyph {\n  position: absolute;\n  left: 9px;\n  display: flex;\n  color: var(--dsw-alias-label-tertiary);\n  pointer-events: none;\n}\n\n.probe_searchInput {\n  width: 100%;\n  height: 30px;\n  padding: 0 26px 0 28px;\n  font-size: 12.5px;\n  font-family: inherit;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-base);\n  border: 1px solid var(--probe-line-strong);\n  border-radius: 8px;\n  outline: none;\n}\n\n.probe_searchInput:focus {\n  border-color: var(--probe-accent);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--probe-accent) 18%, transparent);\n}\n\n.probe_searchClear {\n  position: absolute;\n  right: 3px;\n  width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  line-height: 1;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.probe_searchClear:hover {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.probe_filterPills {\n  display: inline-flex;\n  gap: 2px;\n  padding: 2px;\n  background: var(--dsw-alias-bg-layer-2);\n  border-radius: 8px;\n}\n\n.probe_viewToggle {\n  display: inline-flex;\n  gap: 2px;\n  padding: 2px;\n  margin-left: auto;\n  background: var(--dsw-alias-bg-layer-2);\n  border-radius: 8px;\n}\n\n.probe_viewButton {\n  width: 26px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.probe_viewButton:hover {\n  color: var(--dsw-alias-label-primary);\n}\n\n.probe_viewButton[data-active='true'] {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-base);\n  box-shadow: var(--dsw-elevation-stroke);\n}\n\n.probe_linkButton {\n  padding: 0;\n  font: inherit;\n  color: var(--dsw-alias-link);\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n/* --- table view ------------------------------------------------------------------- */\n\n.probe_tableWrap {\n  overflow-x: auto;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--probe-line);\n  border-radius: 12px;\n}\n\n.probe_table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  min-width: 640px;\n}\n\n.probe_table th {\n  padding: 8px 8px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--dsw-alias-label-tertiary);\n  white-space: nowrap;\n  border-bottom: 1px solid var(--probe-line);\n  background: color-mix(in srgb, var(--dsw-alias-label-primary) 2.5%, transparent);\n}\n\n.probe_table td {\n  padding: 9px 8px;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--probe-line);\n  color: var(--dsw-alias-label-primary);\n  font-variant-numeric: tabular-nums;\n}\n\n.probe_table tbody tr:last-child td {\n  border-bottom: none;\n}\n\n.probe_tableRow {\n  cursor: pointer;\n}\n\n.probe_tableRow:hover td {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.probe_sortButton {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0;\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.probe_sortButton:hover,\n.probe_sortButton[data-active='true'] {\n  color: var(--dsw-alias-label-primary);\n}\n\n.probe_statusCell {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_nameCell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 120px;\n}\n\n.probe_tableName {\n  font-weight: 600;\n}\n\n.probe_table td[data-tone='warn'] {\n  color: var(--dsw-alias-state-warn-primary);\n  font-weight: 600;\n}\n\n.probe_table td[data-tone='critical'] {\n  color: var(--dsw-alias-state-error-primary);\n  font-weight: 600;\n}\n\n.probe_netCell span {\n  display: block;\n  font-size: 11px;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_seenCell {\n  font-size: 11px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_rowChevron {\n  width: 28px;\n  padding-right: 8px !important;\n  text-align: right;\n}\n\n.probe_rowOpen {\n  padding: 2px 6px;\n  font-size: 16px;\n  line-height: 1;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.probe_rowOpen:hover {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n/* --- sections / alerts ------------------------------------------------------------ */\n\n.probe_section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 14px;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--probe-line);\n  border-radius: 12px;\n}\n\n.probe_sectionHeader {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.probe_sectionHint {\n  font-size: 11px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_alertRow {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  padding: 8px 10px;\n  background: var(--dsw-alias-bg-base);\n  border: 1px solid var(--probe-line);\n  border-radius: 9px;\n}\n\n.probe_alertRow[data-active='true'] {\n  border-color: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 40%, transparent);\n  background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 8%, var(--dsw-alias-bg-base));\n}\n\n.probe_alertDot {\n  width: 7px;\n  height: 7px;\n  margin-top: 5px;\n  flex: none;\n  border-radius: 50%;\n  background: var(--dsw-alias-label-tertiary);\n}\n\n.probe_alertDot[data-active='true'] {\n  background: var(--dsw-alias-state-warn-primary);\n}\n\n.probe_alertBody {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.probe_alertTitle {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n  font-size: 12px;\n}\n\n.probe_alertRule {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_alertValue {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n\n.probe_alertTime {\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_quietState {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--dsw-alias-label-tertiary);\n  border: 1px dashed var(--probe-line);\n  border-radius: 9px;\n}\n\n/* --- settings -------------------------------------------------------------------- */\n\n.probe_settingsGrid {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.probe_settingsRow {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 10px 12px;\n  background: var(--dsw-alias-bg-base);\n  border: 1px solid var(--probe-line);\n  border-radius: 9px;\n}\n\n.probe_settingsRow[data-disabled='true'] {\n  opacity: 0.55;\n}\n\n.probe_check {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  flex: 1 1 190px;\n  font-size: 12.5px;\n  cursor: pointer;\n}\n\n.probe_check input {\n  width: 14px;\n  height: 14px;\n  accent-color: var(--probe-accent);\n}\n\n.probe_field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.probe_fieldRow {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.probe_fieldLabel {\n  font-size: 11px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_inlineInput {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.probe_unit {\n  font-size: 11.5px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_input,\n.probe_field input[type='number'],\n.probe_field select {\n  height: 30px;\n  padding: 0 9px;\n  font-size: 12.5px;\n  font-family: inherit;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-base);\n  border: 1px solid var(--probe-line-strong);\n  border-radius: 7px;\n  outline: none;\n}\n\n.probe_input {\n  width: 100%;\n}\n\n.probe_field input[type='number'] {\n  width: 72px;\n  font-variant-numeric: tabular-nums;\n}\n\n.probe_field select {\n  padding-right: 4px;\n}\n\n.probe_input:focus,\n.probe_field input[type='number']:focus,\n.probe_field select:focus {\n  border-color: var(--probe-accent);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--probe-accent) 18%, transparent);\n}\n\n.probe_upgradeNote {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 10px 12px;\n  font-size: 12px;\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 35%, transparent);\n  border-radius: 9px;\n}\n\n.probe_outdatedMark {\n  padding: 0 5px;\n  font-size: 10px;\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n  border-radius: 4px;\n}\n\n.probe_versionsNote {\n  margin-left: auto;\n  font-size: 11px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.probe_notifySection {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  background: var(--dsw-alias-bg-base);\n  border: 1px solid var(--probe-line);\n  border-radius: 9px;\n}\n\n.probe_notifySection .probe_check,\n.probe_notifySection .probe_field {\n  flex: 0 0 auto;\n}\n\n.probe_notifyTestRow {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.probe_saveRow {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.probe_savedNote {\n  font-size: 12px;\n  color: var(--dsw-alias-state-success-primary);\n}\n\n/* --- dialogs ---------------------------------------------------------------------- */\n\n.probe_backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: var(--dsw-alias-bg-mask-1);\n  backdrop-filter: blur(2px);\n}\n\n.probe_modal {\n  display: flex;\n  flex-direction: column;\n  width: min(520px, 100%);\n  max-height: min(92vh, 820px);\n  background: var(--dsw-alias-bg-overlay);\n  border: 1px solid var(--probe-line-strong);\n  border-radius: 14px;\n  box-shadow: var(--dsw-elevation-prominent);\n  overflow: hidden;\n}\n\n.probe_modal[data-wide='true'] {\n  width: min(680px, 100%);\n}\n\n.probe_modalHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 14px 16px 10px;\n  flex: none;\n}\n\n.probe_modalTitle {\n  margin: 0;\n  font-size: 14.5px;\n  font-weight: 600;\n}\n\n.probe_modalBody {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 4px 16px 14px;\n  overflow-y: auto;\n  min-height: 0;\n}\n\n.probe_modalFooter {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 10px 16px 14px;\n  border-top: 1px solid var(--probe-line);\n  flex: none;\n}\n\n.probe_tokenBlock {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.probe_tokenRow,\n.probe_tokenInline {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.probe_tokenValue {\n  font-family: var(--probe-mono);\n  font-size: 11.5px;\n  padding: 5px 8px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-2);\n  border: 1px solid var(--probe-line);\n  border-radius: 6px;\n  word-break: break-all;\n}\n\n.probe_commandBlock {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.probe_commandHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.probe_commandTitle {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.probe_commandText {\n  margin: 0;\n  max-height: 220px;\n  overflow: auto;\n  padding: 10px 12px;\n  font-family: var(--probe-mono);\n  font-size: 11.5px;\n  line-height: 1.55;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-markdown-code-block);\n  border: 1px solid var(--probe-line);\n  border-radius: 8px;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.probe_installSummary {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.probe_installStatus {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 8px 10px;\n  font-size: 12px;\n  background: var(--dsw-alias-bg-layer-2);\n  border-radius: 8px;\n}\n\n.probe_liveNote {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 10px 13px;\n  font-size: 12px;\n  color: var(--dsw-alias-state-success-primary);\n  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 8%, var(--dsw-alias-bg-base));\n  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-success-primary) 30%, transparent);\n  border-radius: 10px;\n}\n\n.probe_fieldError {\n  font-size: 11.5px;\n  line-height: 1.5;\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.probe_tokenOk {\n  font-size: 11px;\n  color: var(--dsw-alias-state-success-primary);\n}\n\n.probe_tokenError {\n  flex: 1 1 100%;\n  font-size: 11px;\n  color: var(--dsw-alias-state-error-primary);\n}\n\n/* --- loading skeleton --------------------------------------------------------------- */\n\n.probe_skeletonCard {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px 15px;\n  background: var(--dsw-alias-card-fill);\n  border: 1px solid var(--probe-line);\n  border-radius: 13px;\n}\n\n.probe_skeletonLine {\n  display: block;\n  height: 10px;\n  border-radius: 5px;\n  background: var(--dsw-alias-bg-skeleton);\n  animation: probe-skeleton-shimmer 1.4s ease-in-out infinite;\n}\n\n.probe_skeletonLine[data-width='short'] {\n  width: 45%;\n}\n\n.probe_skeletonLine[data-width='tall'] {\n  height: 58px;\n}\n\n@keyframes probe-skeleton-shimmer {\n  0%, 100% { opacity: 0.55; }\n  50% { opacity: 1; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .probe_skeletonLine {\n    animation: none;\n  }\n}\n\n/* --- responsive ------------------------------------------------------------------- */\n\n@media (max-width: 760px) {\n  .probe_page {\n    padding: 12px 12px 12px;\n    gap: 12px;\n  }\n\n  .probe_body {\n    gap: 12px;\n  }\n\n  .probe_header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .probe_headerActions {\n    justify-content: flex-end;\n  }\n\n  .probe_grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .probe_stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .probe_listBar {\n    gap: 6px;\n  }\n\n  .probe_searchWrap {\n    flex: 1 1 100%;\n    max-width: none;\n  }\n\n  .probe_filterPills {\n    flex: 1 1 auto;\n    justify-content: space-between;\n  }\n\n  .probe_viewToggle {\n    margin-left: 0;\n  }\n\n  .probe_colNet {\n    display: none;\n  }\n\n  .probe_table {\n    min-width: 470px;\n  }\n\n  .probe_table th,\n  .probe_table td {\n    padding: 8px 7px;\n  }\n\n  .probe_nameCell {\n    min-width: 0;\n  }\n\n  .probe_nameCell .probe_chip {\n    display: none;\n  }\n\n  .probe_tiles {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .probe_tabs {\n    align-self: stretch;\n    justify-content: space-between;\n  }\n\n  .probe_tab {\n    flex: 1;\n    justify-content: center;\n    padding: 0 8px;\n  }\n\n  .probe_detailActions {\n    margin-left: 0;\n    width: 100%;\n  }\n\n  .probe_fieldRow {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .probe_modal {\n    max-height: 92vh;\n  }\n\n  .probe_backdrop {\n    padding: 10px;\n  }\n}\n";
		var TAG_ID = "@local/dsh-probe/panel.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(TAG_ID) + "]") === null) {
		  const tag = document.createElement("style");
		  tag.dataset.plugin = "@local/dsh-probe";
		  tag.dataset.pluginCss = TAG_ID;
		  tag.textContent = CSS;
		  document.head.appendChild(tag);
		}
		var panel_default = { "alertBody": "probe_alertBody", "alertChip": "probe_alertChip", "alertDot": "probe_alertDot", "alertRow": "probe_alertRow", "alertRule": "probe_alertRule", "alertTime": "probe_alertTime", "alertTitle": "probe_alertTitle", "alertValue": "probe_alertValue", "backButton": "probe_backButton", "backdrop": "probe_backdrop", "banner": "probe_banner", "bannerArrow": "probe_bannerArrow", "bannerIcon": "probe_bannerIcon", "bannerList": "probe_bannerList", "bannerText": "probe_bannerText", "body": "probe_body", "card": "probe_card", "cardAge": "probe_cardAge", "cardFoot": "probe_cardFoot", "cardMeta": "probe_cardMeta", "cardStatus": "probe_cardStatus", "cardTop": "probe_cardTop", "chartAxis": "probe_chartAxis", "chartBody": "probe_chartBody", "chartCard": "probe_chartCard", "chartEmpty": "probe_chartEmpty", "chartError": "probe_chartError", "chartGrid": "probe_chartGrid", "chartHeader": "probe_chartHeader", "chartLine": "probe_chartLine", "chartSvg": "probe_chartSvg", "check": "probe_check", "chip": "probe_chip", "chipRow": "probe_chipRow", "colNet": "probe_colNet", "commandBlock": "probe_commandBlock", "commandHeader": "probe_commandHeader", "commandText": "probe_commandText", "commandTitle": "probe_commandTitle", "dangerGhost": "probe_dangerGhost", "detail": "probe_detail", "detailActions": "probe_detailActions", "detailHeader": "probe_detailHeader", "detailMeta": "probe_detailMeta", "detailTitle": "probe_detailTitle", "detailTitleRow": "probe_detailTitleRow", "dot": "probe_dot", "empty": "probe_empty", "emptyGlyph": "probe_emptyGlyph", "emptyText": "probe_emptyText", "emptyTitle": "probe_emptyTitle", "errorBar": "probe_errorBar", "field": "probe_field", "fieldError": "probe_fieldError", "fieldLabel": "probe_fieldLabel", "fieldRow": "probe_fieldRow", "filterPills": "probe_filterPills", "footItem": "probe_footItem", "footLabel": "probe_footLabel", "footValue": "probe_footValue", "gauge": "probe_gauge", "gaugeFill": "probe_gaugeFill", "gaugeHead": "probe_gaugeHead", "gaugeLabel": "probe_gaugeLabel", "gaugeRow": "probe_gaugeRow", "gaugeTrack": "probe_gaugeTrack", "gaugeValue": "probe_gaugeValue", "ghostButton": "probe_ghostButton", "grid": "probe_grid", "header": "probe_header", "headerActions": "probe_headerActions", "headerText": "probe_headerText", "hint": "probe_hint", "hostName": "probe_hostName", "iconButton": "probe_iconButton", "inlineInput": "probe_inlineInput", "input": "probe_input", "installStatus": "probe_installStatus", "installSummary": "probe_installSummary", "legend": "probe_legend", "legendDot": "probe_legendDot", "legendItem": "probe_legendItem", "linkButton": "probe_linkButton", "listBar": "probe_listBar", "liveNote": "probe_liveNote", "metaText": "probe_metaText", "modal": "probe_modal", "modalBody": "probe_modalBody", "modalFooter": "probe_modalFooter", "modalHeader": "probe_modalHeader", "modalTitle": "probe_modalTitle", "muted": "probe_muted", "nameCell": "probe_nameCell", "netCell": "probe_netCell", "notifySection": "probe_notifySection", "notifyTestRow": "probe_notifyTestRow", "outdatedMark": "probe_outdatedMark", "page": "probe_page", "pill": "probe_pill", "primaryButton": "probe_primaryButton", "quietState": "probe_quietState", "rangePills": "probe_rangePills", "rowChevron": "probe_rowChevron", "rowOpen": "probe_rowOpen", "saveRow": "probe_saveRow", "savedNote": "probe_savedNote", "searchClear": "probe_searchClear", "searchGlyph": "probe_searchGlyph", "searchInput": "probe_searchInput", "searchWrap": "probe_searchWrap", "section": "probe_section", "sectionHeader": "probe_sectionHeader", "sectionHint": "probe_sectionHint", "sectionTitle": "probe_sectionTitle", "seenCell": "probe_seenCell", "settingsGrid": "probe_settingsGrid", "settingsRow": "probe_settingsRow", "skeletonCard": "probe_skeletonCard", "skeletonLine": "probe_skeletonLine", "sortButton": "probe_sortButton", "spark": "probe_spark", "sparkArea": "probe_sparkArea", "sparkEmpty": "probe_sparkEmpty", "sparkLine": "probe_sparkLine", "stat": "probe_stat", "statLabel": "probe_statLabel", "statValue": "probe_statValue", "stats": "probe_stats", "statusCell": "probe_statusCell", "statusChip": "probe_statusChip", "subtitle": "probe_subtitle", "tab": "probe_tab", "tabCount": "probe_tabCount", "table": "probe_table", "tableName": "probe_tableName", "tableRow": "probe_tableRow", "tableWrap": "probe_tableWrap", "tabs": "probe_tabs", "tile": "probe_tile", "tileLabel": "probe_tileLabel", "tileSub": "probe_tileSub", "tileValue": "probe_tileValue", "tiles": "probe_tiles", "title": "probe_title", "tokenBlock": "probe_tokenBlock", "tokenError": "probe_tokenError", "tokenInline": "probe_tokenInline", "tokenOk": "probe_tokenOk", "tokenRow": "probe_tokenRow", "tokenValue": "probe_tokenValue", "unit": "probe_unit", "upgradeNote": "probe_upgradeNote", "versionsNote": "probe_versionsNote", "viewButton": "probe_viewButton", "viewToggle": "probe_viewToggle", "waitingNote": "probe_waitingNote" };
		
		// src/client/panel/Sparkline.tsx
		var import_jsx_runtime = require("react/jsx-runtime");
		function axisLabel(timestamp, range) {
		  const date = new Date(timestamp);
		  const pad = (value) => String(value).padStart(2, "0");
		  if (range === "1h") return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
		  if (range === "24h") return `${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
		  return `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
		}
		function sparkPath(values) {
		  if (values.length === 0) return "";
		  if (values.length === 1) return `0,${100 - Math.min(100, Math.max(0, values[0]))} 100,${100 - Math.min(100, Math.max(0, values[0]))}`;
		  return values.map((value, index) => {
		    const x = index / (values.length - 1) * 100;
		    const y = 100 - Math.min(100, Math.max(0, value));
		    return `${x.toFixed(2)},${y.toFixed(2)}`;
		  }).join(" ");
		}
		function Sparkline({ values, tone = "normal" }) {
		  const points = sparkPath(values);
		  if (points === "") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${panel_default.spark} ${panel_default.sparkEmpty}`, "aria-hidden": "true" });
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { className: panel_default.spark, "data-tone": tone, viewBox: "0 0 100 100", preserveAspectRatio: "none", "aria-hidden": "true", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { className: panel_default.sparkArea, points: `0,100 ${points} 100,100` }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { className: panel_default.sparkLine, points, vectorEffect: "non-scaling-stroke" })
		  ] });
		}
		function TrendChart({ points, range, onRange, loading, error, onRetry }) {
		  const ranges = ["1h", "24h", "7d"];
		  const series = [
		    { key: "c", label: tt("chart.cpu"), color: "var(--dsw-alias-state-business-primary)", points },
		    { key: "m", label: tt("chart.mem"), color: "var(--dsw-alias-chart-tools)", points },
		    { key: "d", label: tt("chart.disk"), color: "var(--dsw-alias-state-warn-primary)", points }
		  ];
		  const width = 620;
		  const height = 190;
		  const top = 12;
		  const bottom = 22;
		  const usable = height - top - bottom;
		  const pathOf = (key) => {
		    if (points.length === 0) return "";
		    return points.map((point, index) => {
		      const x = points.length === 1 ? width / 2 : index / (points.length - 1) * width;
		      const y = top + usable - Math.min(100, Math.max(0, point[key])) / 100 * usable;
		      return `${x.toFixed(2)},${y.toFixed(2)}`;
		    }).join(" ");
		  };
		  const from = points.length === 0 ? void 0 : points[0].t;
		  const to = points.length === 0 ? void 0 : points[points.length - 1].t;
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: panel_default.chartCard, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: panel_default.chartHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: panel_default.sectionTitle, children: tt("detail.trend") }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: panel_default.rangePills, role: "group", children: ranges.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		        "button",
		        {
		          type: "button",
		          className: panel_default.pill,
		          "data-active": item === range ? "true" : void 0,
		          onClick: () => onRange(item),
		          children: tt(`chart.${item}`)
		        },
		        item
		      )) })
		    ] }),
		    error !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: panel_default.chartError, role: "alert", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tt("error.load", { message: error }) }),
		      onRetry !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onRetry, children: tt("action.retry") })
		    ] }) : points.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: panel_default.chartEmpty, children: loading ? tt("chart.loading") : tt("chart.noData") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: panel_default.chartBody, "data-loading": loading ? "true" : void 0, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { className: panel_default.chartSvg, viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: "none", role: "img", "aria-label": tt("detail.trend"), children: [
		        [0, 25, 50, 75, 100].map((value) => {
		          const y = top + usable - value / 100 * usable;
		          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { className: panel_default.chartGrid, x1: 0, x2: width, y1: y, y2: y, vectorEffect: "non-scaling-stroke" }, value);
		        }),
		        series.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		          "polyline",
		          {
		            className: panel_default.chartLine,
		            style: { stroke: item.color },
		            points: pathOf(item.key),
		            vectorEffect: "non-scaling-stroke"
		          },
		          item.key
		        ))
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: panel_default.chartAxis, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: from === void 0 ? "" : axisLabel(from, range) }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: to === void 0 ? "" : axisLabel(to, range) })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: panel_default.legend, children: series.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: panel_default.legendItem, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: panel_default.legendDot, style: { background: item.color } }),
		        item.label,
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: percent(points.length === 0 ? 0 : item.points[item.points.length - 1][item.key]) })
		      ] }, item.key)) })
		    ] })
		  ] });
		}
		
		// src/client/panel/ProbePanel.tsx
		var import_jsx_runtime2 = require("react/jsx-runtime");
		function toneFor(value) {
		  if (value === void 0 || !Number.isFinite(value)) return "normal";
		  if (value >= 90) return "critical";
		  if (value >= 75) return "warn";
		  return "normal";
		}
		function perCoreLoad(sample) {
		  if (sample === null || sample === void 0 || sample.load1 === void 0) return void 0;
		  return sample.load1 / Math.max(1, sample.cores ?? 1);
		}
		function statusLabel(status) {
		  return tt(`status.${status}`);
		}
		function ruleLabel(rule) {
		  return tt(`alerts.rule.${rule}`);
		}
		function envValue(value) {
		  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
		}
		function alertDuration(alert) {
		  const seconds = alert.endedAt === null ? Math.max(0, Math.round((Date.now() - alert.startedAt) / 1e3)) : alert.durationSec ?? Math.max(0, Math.round((alert.endedAt - alert.startedAt) / 1e3));
		  return durationShort(seconds);
		}
		function ProbePanel({ api }) {
		  const [snapshot, setSnapshot] = (0, import_react.useState)(null);
		  const [error, setError] = (0, import_react.useState)(null);
		  const [tab, setTab] = (0, import_react.useState)("overview");
		  const [selectedId, setSelectedId] = (0, import_react.useState)(null);
		  const [dialog, setDialog] = (0, import_react.useState)(null);
		  const [query, setQuery] = (0, import_react.useState)("");
		  const [filter, setFilter] = (0, import_react.useState)("all");
		  const [view, setView] = (0, import_react.useState)(() => {
		    try {
		      return localStorage.getItem("dsh-probe.view") === "table" ? "table" : "cards";
		    } catch {
		      return "cards";
		    }
		  });
		  const bodyRef = (0, import_react.useRef)(null);
		  (0, import_react.useEffect)(() => {
		    bodyRef.current?.scrollTo({ top: 0 });
		  }, [tab, selectedId]);
		  const load2 = (0, import_react.useCallback)(async (quiet) => {
		    try {
		      const next = await api.snapshot();
		      setSnapshot(next);
		      setError(null);
		    } catch (caught) {
		      if (!quiet) setError(errorMessage(caught));
		    }
		  }, [api]);
		  (0, import_react.useEffect)(() => {
		    void load2(false);
		  }, [load2]);
		  (0, import_react.useEffect)(() => {
		    const timer = setInterval(() => {
		      if (!document.hidden) void load2(true);
		    }, 5e3);
		    const onVisibility = () => {
		      if (!document.hidden) void load2(true);
		    };
		    document.addEventListener("visibilitychange", onVisibility);
		    return () => {
		      clearInterval(timer);
		      document.removeEventListener("visibilitychange", onVisibility);
		    };
		  }, [load2]);
		  const hosts = snapshot?.hosts ?? [];
		  const selected = selectedId === null ? void 0 : hosts.find((host) => host.id === selectedId);
		  const activeAlerts = snapshot?.alerts.active ?? [];
		  const onlineCount = hosts.filter((host) => host.status === "online" || host.status === "stale").length;
		  const visibleHosts = (0, import_react.useMemo)(() => {
		    const needle = query.trim().toLowerCase();
		    return hosts.filter((host) => {
		      if (needle !== "") {
		        const haystack = [host.name, host.location, host.current?.hostname ?? "", ...host.tags].join(" ").toLowerCase();
		        if (!haystack.includes(needle)) return false;
		      }
		      if (filter === "online") return host.status === "online" || host.status === "stale";
		      if (filter === "offline") return host.status === "offline";
		      if (filter === "waiting") return host.status === "waiting" || host.status === "disabled";
		      return true;
		    });
		  }, [hosts, query, filter]);
		  const changeView = (next) => {
		    setView(next);
		    try {
		      localStorage.setItem("dsh-probe.view", next);
		    } catch {
		    }
		  };
		  const replaceHost = (host) => {
		    setSnapshot((current) => {
		      if (current === null) return current;
		      const exists = current.hosts.some((candidate) => candidate.id === host.id);
		      const nextHosts = exists ? current.hosts.map((candidate) => candidate.id === host.id ? host : candidate) : [...current.hosts, host];
		      return { ...current, hosts: nextHosts };
		    });
		  };
		  const removeHost = (id) => {
		    setSnapshot((current) => current === null ? current : { ...current, hosts: current.hosts.filter((host) => host.id !== id) });
		    setSelectedId((current) => current === id ? null : current);
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.page, "data-dsh-probe-view": "", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: panel_default.header, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.headerText, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: panel_default.title, children: tt("page.title") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.subtitle, children: snapshot === null ? tt("page.loading") : hosts.length === 0 ? tt("page.subtitleEmpty") : tt("page.subtitle", { total: hosts.length, online: snapshot.counts.online }) })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.headerActions, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: () => void load2(false), children: tt("action.refresh") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: panel_default.primaryButton, onClick: () => setDialog({ kind: "host", mode: "add" }), children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: "+" }),
		          " ",
		          tt("action.add")
		        ] })
		      ] })
		    ] }),
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.errorBar, children: tt("error.load", { message: error }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: panel_default.tabs, role: "tablist", children: ["overview", "alerts", "settings"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
		      "button",
		      {
		        type: "button",
		        role: "tab",
		        "aria-selected": tab === item,
		        className: panel_default.tab,
		        "data-active": tab === item ? "true" : void 0,
		        onClick: () => {
		          setSelectedId(null);
		          setTab(item);
		        },
		        children: [
		          tt(`tab.${item}`),
		          item === "alerts" && activeAlerts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.tabCount, children: activeAlerts.length })
		        ]
		      },
		      item
		    )) }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.body, ref: bodyRef, children: [
		      tab === "overview" && snapshot === null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingState, {}),
		      tab === "overview" && selected !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        HostDetail,
		        {
		          api,
		          host: selected,
		          onBack: () => setSelectedId(null),
		          onEdit: () => setDialog({ kind: "host", mode: "edit", host: selected }),
		          onInstall: () => setDialog({ kind: "install", host: selected }),
		          onDeleted: () => removeHost(selected.id),
		          onHostChange: replaceHost
		        },
		        selected.id
		      ),
		      tab === "overview" && snapshot !== null && selected === void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
		        activeAlerts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: panel_default.banner, onClick: () => setTab("alerts"), children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.bannerIcon, "aria-hidden": "true", children: "!" }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.bannerText, children: [
		            activeAlerts.length === 1 ? tt("alert.bannerOne") : tt("alert.banner", { count: activeAlerts.length }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.bannerList, children: tt("alert.bannerList", { names: activeAlerts.slice(0, 2).map((alert) => alert.hostName).join(", ") }) })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.bannerArrow, "aria-hidden": "true", children: "\u203A" })
		        ] }),
		        hosts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(EmptyState, { onAdd: () => setDialog({ kind: "host", mode: "add" }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SummaryStrip, { hosts, online: onlineCount, activeAlerts: activeAlerts.length }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.listBar, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.searchWrap, children: [
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.searchGlyph, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", children: [
		                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "7", cy: "7", r: "4.4" }),
		                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10.4 10.4 14 14" })
		              ] }) }),
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		                "input",
		                {
		                  className: panel_default.searchInput,
		                  value: query,
		                  placeholder: tt("list.search"),
		                  onChange: (event) => setQuery(event.target.value)
		                }
		              ),
		              query !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.searchClear, "aria-label": tt("list.clear"), onClick: () => setQuery(""), children: "\xD7" })
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.filterPills, role: "group", children: [
		              ["all", tt("list.filterAll")],
		              ["online", tt("list.filterOnline")],
		              ["offline", tt("list.filterOffline")],
		              ["waiting", tt("list.filterWaiting")]
		            ].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		              "button",
		              {
		                type: "button",
		                className: panel_default.pill,
		                "data-active": filter === key ? "true" : void 0,
		                "aria-pressed": filter === key,
		                onClick: () => setFilter(key),
		                children: label
		              },
		              key
		            )) }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.viewToggle, role: "group", children: [
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		                "button",
		                {
		                  type: "button",
		                  className: panel_default.viewButton,
		                  "data-active": view === "cards" ? "true" : void 0,
		                  "aria-label": tt("view.cards"),
		                  title: tt("view.cards"),
		                  onClick: () => changeView("cards"),
		                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { viewBox: "0 0 16 16", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.4", children: [
		                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "2", y: "2", width: "5", height: "5", rx: "1" }),
		                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "9", y: "2", width: "5", height: "5", rx: "1" }),
		                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "2", y: "9", width: "5", height: "5", rx: "1" }),
		                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "9", y: "9", width: "5", height: "5", rx: "1" })
		                  ] })
		                }
		              ),
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		                "button",
		                {
		                  type: "button",
		                  className: panel_default.viewButton,
		                  "data-active": view === "table" ? "true" : void 0,
		                  "aria-label": tt("view.table"),
		                  title: tt("view.table"),
		                  onClick: () => changeView("table"),
		                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { viewBox: "0 0 16 16", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M2 4h12M2 8h12M2 12h12" }) })
		                }
		              )
		            ] })
		          ] }),
		          visibleHosts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.quietState, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: tt("list.empty") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.linkButton, onClick: () => {
		              setQuery("");
		              setFilter("all");
		            }, children: tt("list.clear") })
		          ] }) : view === "table" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(HostTable, { hosts: visibleHosts, onOpen: (id) => setSelectedId(id) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.grid, children: visibleHosts.map((host) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		            HostCard,
		            {
		              host,
		              onOpen: () => setSelectedId(host.id)
		            },
		            host.id
		          )) })
		        ] })
		      ] }),
		      tab === "alerts" && (snapshot === null ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingState, {}) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        AlertsTab,
		        {
		          alerts: snapshot.alerts,
		          api,
		          onChanged: () => void load2(true)
		        }
		      )),
		      tab === "settings" && (snapshot === null ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingState, {}) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        SettingsTab,
		        {
		          settings: snapshot.settings,
		          versions: snapshot.versions,
		          api,
		          onSaved: (next) => setSnapshot((current) => current === null ? current : { ...current, settings: next })
		        }
		      ))
		    ] }),
		    dialog !== null && dialog.kind === "host" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		      HostDialog,
		      {
		        mode: dialog.mode,
		        host: dialog.host,
		        api,
		        onClose: () => setDialog(null),
		        onSaved: (host) => {
		          replaceHost(host);
		          setSelectedId(host.id);
		          setDialog(dialog.mode === "add" ? { kind: "install", host } : null);
		          void load2(true);
		        }
		      }
		    ),
		    dialog !== null && dialog.kind === "install" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		      InstallDialog,
		      {
		        host: hosts.find((host) => host.id === dialog.host.id) ?? dialog.host,
		        settings: snapshot?.settings,
		        latestAgent: snapshot?.versions.agent ?? "",
		        api,
		        onClose: () => setDialog(null),
		        onHostChange: (host) => {
		          replaceHost(host);
		          setDialog({ kind: "install", host });
		        }
		      }
		    )
		  ] });
		}
		function SummaryStrip({ hosts, online, activeAlerts }) {
		  const samples = hosts.map((host) => host.current).filter((sample) => sample !== null);
		  const average = (pick) => samples.length === 0 ? void 0 : samples.reduce((sum, sample) => sum + pick(sample), 0) / samples.length;
		  const items = [
		    { label: tt("stats.online"), value: `${online} / ${hosts.length}`, tone: online === hosts.length ? "ok" : void 0 },
		    { label: tt("stats.alerts"), value: String(activeAlerts), tone: activeAlerts > 0 ? "warn" : void 0 },
		    { label: tt("stats.cpu"), value: percent(average((sample) => sample.cpu)) },
		    { label: tt("stats.mem"), value: percent(average((sample) => sample.memPct)) }
		  ];
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.stats, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.stat, "data-tone": item.tone, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.statLabel, children: item.label }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.statValue, children: item.value })
		  ] }, item.label)) });
		}
		function HostTable({ hosts, onOpen }) {
		  const [sort, setSort] = (0, import_react.useState)({ key: "name", dir: 1 });
		  const rows = (0, import_react.useMemo)(() => {
		    const value = (host) => {
		      if (sort.key === "name") return host.name.toLowerCase();
		      if (sort.key === "seen") return host.lastSeen;
		      if (sort.key === "cpu") return host.current?.cpu ?? -1;
		      if (sort.key === "mem") return host.current?.memPct ?? -1;
		      return host.current?.diskPct ?? -1;
		    };
		    return [...hosts].sort((left, right) => {
		      const a = value(left);
		      const b = value(right);
		      if (a < b) return -sort.dir;
		      if (a > b) return sort.dir;
		      return 0;
		    });
		  }, [hosts, sort]);
		  const header = (key, label) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
		    "button",
		    {
		      type: "button",
		      className: panel_default.sortButton,
		      "data-active": sort.key === key ? "true" : void 0,
		      onClick: () => setSort((current) => ({ key, dir: current.key === key && current.dir === 1 ? -1 : 1 })),
		      children: [
		        label,
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: sort.key === key ? sort.dir === 1 ? "\u2191" : "\u2193" : "" })
		      ]
		    }
		  ) });
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.tableWrap, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("table", { className: panel_default.table, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tr", { children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: tt("table.status") }),
		      header("name", tt("table.name")),
		      header("cpu", tt("table.cpu")),
		      header("mem", tt("table.mem")),
		      header("disk", tt("table.disk")),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: tt("table.load") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { className: panel_default.colNet, children: tt("table.net") }),
		      header("seen", tt("table.seen")),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { "aria-hidden": "true" })
		    ] }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tbody", { children: rows.map((host) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tr", { className: panel_default.tableRow, onClick: () => onOpen(host.id), children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.statusCell, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.dot, "data-status": host.status, "aria-hidden": "true" }),
		        tt(`status.${host.status}.short`)
		      ] }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.nameCell, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.tableName, children: host.name }),
		        host.muted && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.cardStatus, "data-status": "muted", children: tt("status.muted") }),
		        host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.cardStatus, "data-status": "outdated", children: tt("host.outdated") }),
		        host.tags.slice(0, 2).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.chip, children: tag }, tag))
		      ] }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { "data-tone": toneFor(host.current?.cpu), children: percent(host.current?.cpu) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { "data-tone": toneFor(host.current?.memPct), children: percent(host.current?.memPct) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { "data-tone": toneFor(host.current?.diskPct), children: percent(host.current?.diskPct) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: load(perCoreLoad(host.current)) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("td", { className: `${panel_default.colNet} ${panel_default.netCell}`, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
		          "\u2193 ",
		          rate(host.current?.rxRate)
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
		          "\u2191 ",
		          rate(host.current?.txRate)
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: panel_default.seenCell, children: host.lastSeen === 0 ? tt("card.never") : ago(host.lastSeen) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: panel_default.rowChevron, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        "button",
		        {
		          type: "button",
		          className: panel_default.rowOpen,
		          "aria-label": tt("table.open"),
		          onClick: (event) => {
		            event.stopPropagation();
		            onOpen(host.id);
		          },
		          children: "\u203A"
		        }
		      ) })
		    ] }, host.id)) })
		  ] }) });
		}
		function LoadingState() {
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.grid, "aria-busy": "true", "aria-label": tt("page.loading"), children: [0, 1, 2].map((index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.skeletonCard, "aria-hidden": "true", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.skeletonLine, "data-width": "short" }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.skeletonLine }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.skeletonLine, "data-width": "tall" })
		  ] }, index)) });
		}
		function EmptyState({ onAdd }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.empty, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.emptyGlyph, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { viewBox: "0 0 48 48", width: "44", height: "44", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "5", y: "9", width: "38", height: "13", rx: "2.5" }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "5", y: "27", width: "38", height: "13", rx: "2.5" }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M11 15.5h6M11 33.5h6" }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "37.5", cy: "15.5", r: "1.6", fill: "currentColor", stroke: "none" }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "37.5", cy: "33.5", r: "1.6", fill: "currentColor", stroke: "none" })
		    ] }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: panel_default.emptyTitle, children: tt("empty.title") }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.emptyText, children: tt("empty.desc") }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.primaryButton, onClick: onAdd, children: tt("empty.action") })
		  ] });
		}
		function HostCard({ host, onOpen }) {
		  const current = host.current;
		  const tags = host.tags;
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
		    "div",
		    {
		      className: panel_default.card,
		      "data-status": host.status,
		      role: "button",
		      tabIndex: 0,
		      onClick: onOpen,
		      onKeyDown: (event) => {
		        if (event.key === "Enter" || event.key === " ") {
		          event.preventDefault();
		          onOpen();
		        }
		      },
		      children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.cardTop, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.dot, "data-status": host.status, "aria-hidden": "true" }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.hostName, children: host.name }),
		          host.status !== "online" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.cardStatus, "data-status": host.status, children: tt(`status.${host.status}.short`) }),
		          host.muted && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.cardStatus, "data-status": "muted", children: tt("status.muted") }),
		          host.alerts.active.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.alertChip, children: host.alerts.active.length === 1 ? tt("card.alertOne") : tt("card.alerts", { count: host.alerts.active.length }) }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.cardAge, children: host.lastSeen === 0 ? tt("card.never") : tt("card.seen", { age: ago(host.lastSeen) }) })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.cardMeta, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.metaText, children: current !== null && current.hostname !== "" ? `${current.hostname} \xB7 ${current.os}` : host.location !== "" ? host.location : tt("card.noData") }),
		          (tags.length > 0 || host.agentOutdated) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.chipRow, children: [
		            host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.cardStatus, "data-status": "outdated", children: tt("host.outdated") }),
		            tags.slice(0, 3).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.chip, children: tag }, tag))
		          ] })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.gaugeRow, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Gauge, { label: tt("card.cpu"), value: current?.cpu }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Gauge, { label: tt("card.mem"), value: current?.memPct }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Gauge, { label: tt("card.disk"), value: current?.diskPct })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Sparkline, { values: host.spark?.cpu ?? [], tone: toneFor(current?.cpu) }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.cardFoot, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.footItem, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footLabel, children: tt("card.loadPerCore") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footValue, children: load(perCoreLoad(current)) })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.footItem, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footLabel, children: "\u2193" }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footValue, children: rate(current?.rxRate) })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.footItem, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footLabel, children: "\u2191" }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footValue, children: rate(current?.txRate) })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.footItem, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footLabel, children: tt("card.uptime") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.footValue, children: uptime(current?.uptime) })
		          ] })
		        ] })
		      ]
		    }
		  );
		}
		function Gauge({ label, value }) {
		  const tone = toneFor(value);
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.gauge, "data-tone": tone, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.gaugeHead, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.gaugeLabel, children: label }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.gaugeValue, children: percent(value) })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.gaugeTrack, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.gaugeFill, style: { width: `${Math.min(100, Math.max(0, value ?? 0))}%` } }) })
		  ] });
		}
		function HostDetail({ api, host, onBack, onEdit, onInstall, onDeleted, onHostChange }) {
		  const [range, setRange] = (0, import_react.useState)("1h");
		  const [history, setHistory] = (0, import_react.useState)(null);
		  const [loading, setLoading] = (0, import_react.useState)(false);
		  const [error, setError] = (0, import_react.useState)(null);
		  const [historyError, setHistoryError] = (0, import_react.useState)(null);
		  const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(false);
		  const [muteBusy, setMuteBusy] = (0, import_react.useState)(false);
		  const sequence = (0, import_react.useRef)(0);
		  const loadHistory = (0, import_react.useCallback)((nextRange) => {
		    const id = ++sequence.current;
		    setLoading(true);
		    setHistoryError(null);
		    setHistory(null);
		    api.history(host.id, nextRange).then((next) => {
		      if (id === sequence.current) setHistory(next);
		    }).catch((caught) => {
		      if (id === sequence.current) setHistoryError(errorMessage(caught));
		    }).finally(() => {
		      if (id === sequence.current) setLoading(false);
		    });
		  }, [api, host.id]);
		  (0, import_react.useEffect)(() => {
		    loadHistory(range);
		  }, [loadHistory, range]);
		  (0, import_react.useEffect)(() => {
		    const timer = setInterval(() => {
		      if (document.hidden) return;
		      const id = ++sequence.current;
		      api.history(host.id, range).then((next) => {
		        if (id !== sequence.current) return;
		        setHistory(next);
		        setHistoryError(null);
		      }).catch((caught) => {
		        if (id === sequence.current) setHistoryError(errorMessage(caught));
		      });
		    }, 15e3);
		    return () => clearInterval(timer);
		  }, [api, host.id, range]);
		  const current = host.current;
		  const points = history?.points ?? [];
		  const confirmTimer = (0, import_react.useRef)(null);
		  (0, import_react.useEffect)(() => () => {
		    if (confirmTimer.current !== null) clearTimeout(confirmTimer.current);
		  }, []);
		  const toggleMute = () => {
		    setMuteBusy(true);
		    api.setMute(host.id, host.muted ? 0 : 60).then((next) => onHostChange(next)).catch((caught) => setError(errorMessage(caught))).finally(() => setMuteBusy(false));
		  };
		  const remove = () => {
		    if (!confirmDelete) {
		      setConfirmDelete(true);
		      confirmTimer.current = setTimeout(() => setConfirmDelete(false), 4e3);
		      return;
		    }
		    api.deleteHost(host.id).then(() => onDeleted()).catch((caught) => setError(errorMessage(caught)));
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.detail, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.detailHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: panel_default.backButton, onClick: onBack, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: "\u2039" }),
		        " ",
		        tt("action.back")
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.detailTitleRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.dot, "data-status": host.status, "aria-hidden": "true" }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: panel_default.detailTitle, children: host.name }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.statusChip, "data-status": host.status, children: statusLabel(host.status) }),
		        host.muted && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.statusChip, "data-status": "muted", children: tt("detail.mutedChip") }),
		        host.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.chip, children: tag }, tag))
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.detailActions, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onEdit, children: tt("action.edit") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, disabled: muteBusy, onClick: toggleMute, children: host.muted ? tt("detail.unmute") : tt("detail.mute") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onInstall, children: tt("detail.install") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.dangerGhost, onClick: remove, "data-confirm": confirmDelete ? "true" : void 0, children: confirmDelete ? tt("action.deleteConfirm") : tt("action.delete") })
		      ] })
		    ] }),
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.errorBar, role: "alert", children: tt("error.action", { message: error }) }),
		    (host.location !== "" || host.note !== "") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: panel_default.detailMeta, children: [
		      host.location,
		      host.location !== "" && host.note !== "" ? " \xB7 " : "",
		      host.note
		    ] }),
		    current === null && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.waitingNote, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: tt("empty.waiting") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onInstall, children: tt("detail.install") })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.tiles, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tile, { label: tt("detail.cpu"), value: percent(current?.cpu), sub: current === null ? void 0 : `${current.cores} ${tt("detail.cores")}` }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tile, { label: tt("detail.mem"), value: percent(current?.memPct), sub: current === null ? void 0 : `${bytes(current.memUsed)} / ${bytes(current.memTotal)}` }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tile, { label: tt("detail.swap"), value: percent(current?.swapPct), sub: current === null ? void 0 : `${bytes(current.swapUsed)} / ${bytes(current.swapTotal)}` }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tile, { label: tt("detail.disk"), value: percent(current?.diskPct), sub: current === null ? void 0 : `${bytes(current.diskUsed)} / ${bytes(current.diskTotal)}` }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        Tile,
		        {
		          label: tt("card.loadPerCore"),
		          value: load(perCoreLoad(current)),
		          sub: current === null ? void 0 : `${load(current.load5 / Math.max(1, current.cores))} / ${load(current.load15 / Math.max(1, current.cores))}`
		        }
		      ),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tile, { label: tt("detail.net"), value: `\u2193 ${rate(current?.rxRate)}`, sub: `\u2191 ${rate(current?.txRate)}` }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        Tile,
		        {
		          label: tt("detail.conn"),
		          value: current === null ? "\u2014" : String(current.connTcp),
		          sub: current === null ? void 0 : `${tt("detail.udp")} ${current.connUdp}`
		        }
		      ),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        Tile,
		        {
		          label: tt("detail.traffic"),
		          value: `\u2193 ${bytes(current?.totalRx)}`,
		          sub: `\u2191 ${bytes(current?.totalTx)}`
		        }
		      ),
		      current !== null && current.gpuName !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        Tile,
		        {
		          label: tt("detail.gpu"),
		          value: percent(current.gpuUsage),
		          sub: `${current.gpuName} \xB7 ${bytes(current.gpuMemUsed)} / ${bytes(current.gpuMemTotal)}${Number.isFinite(current.gpuTemp) && current.gpuTemp > 0 ? ` \xB7 ${Math.round(current.gpuTemp)}\xB0C` : ""}`
		        }
		      ),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tile, { label: tt("detail.uptime"), value: uptime(current?.uptime), sub: host.lastSeen === 0 ? tt("card.never") : ago(host.lastSeen) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tile, { label: tt("detail.os"), value: current?.os ?? "\u2014", sub: current === null ? void 0 : `${current.arch} \xB7 ${current.kernel}` })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		      TrendChart,
		      {
		        points,
		        range,
		        onRange: setRange,
		        loading,
		        error: historyError ?? void 0,
		        onRetry: () => loadHistory(range)
		      }
		    ),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.section, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("detail.alerts") }),
		        host.alerts.active.length === 0 && host.alerts.recent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionHint, children: tt("detail.noAlerts") }),
		        host.alerts.active.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionHint, children: tt("alerts.activeCount", { count: host.alerts.active.length }) })
		      ] }),
		      host.alerts.active.length === 0 && host.alerts.recent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.muted, children: tt("alerts.recentNone") }),
		      (host.alerts.active.length > 0 ? host.alerts.active : []).map((alert) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertRow, { alert, active: true }, alert.id)),
		      host.alerts.active.length === 0 && host.alerts.recent.slice(0, 5).map((alert) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertRow, { alert, active: false }, alert.id))
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.section, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("detail.install") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.sectionHint, children: [
		          tt("detail.agent"),
		          current === null ? "" : ` ${current.agentVersion}`,
		          host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.outdatedMark, children: [
		            " ",
		            tt("host.outdated")
		          ] }),
		          current !== null && current.cpuModel !== "" ? ` \xB7 ${current.cpuModel}` : ""
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.installSummary, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TokenPill, { host, api, onHostChange }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.primaryButton, onClick: onInstall, children: tt("install.open") })
		      ] })
		    ] })
		  ] });
		}
		function Tile({ label, value, sub }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.tile, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.tileLabel, children: label }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.tileValue, children: value }),
		    sub !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.tileSub, children: sub })
		  ] });
		}
		function AlertRow({ alert, active }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.alertRow, "data-active": active ? "true" : void 0, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.alertDot, "data-active": active ? "true" : void 0, "aria-hidden": "true" }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.alertBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.alertTitle, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: alert.hostName }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.alertRule, children: ruleLabel(alert.rule) }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.alertValue, children: [
		          alert.rule === "offline" ? tt("alerts.silent", { value: Math.round(alert.value), threshold: Math.round(alert.threshold) }) : `${Math.round(alert.value * 10) / 10}${alert.unit === "%" ? "%" : "\xD7"}`,
		          alert.rule !== "offline" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.muted, children: [
		            " / ",
		            alert.threshold,
		            alert.unit === "%" ? "%" : "\xD7"
		          ] })
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.alertTime, children: active ? tt("alerts.ending", { duration: alertDuration(alert) }) : tt("alerts.ended", { duration: alertDuration(alert), ago: ago(alert.endedAt ?? alert.startedAt) }) })
		    ] })
		  ] });
		}
		function AlertsTab({ alerts, api, onChanged }) {
		  const [confirmClear, setConfirmClear] = (0, import_react.useState)(false);
		  const [error, setError] = (0, import_react.useState)(null);
		  const timer = (0, import_react.useRef)(null);
		  (0, import_react.useEffect)(() => () => {
		    if (timer.current !== null) clearTimeout(timer.current);
		  }, []);
		  const clear = () => {
		    if (!confirmClear) {
		      setConfirmClear(true);
		      timer.current = setTimeout(() => setConfirmClear(false), 4e3);
		      return;
		    }
		    api.clearRecentAlerts().then(() => onChanged()).catch((caught) => setError(errorMessage(caught)));
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.section, children: [
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.errorBar, children: tt("error.action", { message: error }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("alerts.active") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionHint, children: alerts.active.length === 0 ? tt("alerts.activeNone") : String(alerts.active.length) })
		    ] }),
		    alerts.active.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.quietState, children: tt("alerts.activeNone") }) : alerts.active.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertRow, { alert, active: true }, alert.id)),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("alerts.recent") }),
		      alerts.recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, "data-confirm": confirmClear ? "true" : void 0, onClick: clear, children: confirmClear ? tt("action.clearConfirm") : tt("action.clearRecent") })
		    ] }),
		    alerts.recent.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.quietState, children: tt("alerts.recentNone") }) : alerts.recent.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertRow, { alert, active: false }, alert.id))
		  ] });
		}
		function withSettingsDefaults(settings) {
		  if (settings === void 0) return void 0;
		  return {
		    ...settings,
		    notify: settings.notify ?? { enabled: false, url: "", onResolve: true }
		  };
		}
		function SettingsTab({ settings, api, versions, onSaved }) {
		  const [draft, setDraft] = (0, import_react.useState)(withSettingsDefaults(settings));
		  const [dirty, setDirty] = (0, import_react.useState)(false);
		  const [saving, setSaving] = (0, import_react.useState)(false);
		  const [saved, setSaved] = (0, import_react.useState)(false);
		  const [error, setError] = (0, import_react.useState)(null);
		  const [testing, setTesting] = (0, import_react.useState)(false);
		  const [testResult, setTestResult] = (0, import_react.useState)(null);
		  const savedTimer = (0, import_react.useRef)(null);
		  (0, import_react.useEffect)(() => {
		    if (!dirty) setDraft(withSettingsDefaults(settings));
		  }, [settings, dirty]);
		  (0, import_react.useEffect)(() => () => {
		    if (savedTimer.current !== null) clearTimeout(savedTimer.current);
		  }, []);
		  if (draft === void 0) {
		    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.section, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.muted, children: tt("chart.loading") }) });
		  }
		  const updateRule = (key, field, value) => {
		    setDirty(true);
		    setDraft((current) => {
		      if (current === void 0) return current;
		      const rules = { ...current.rules };
		      const rule = { ...rules[key] };
		      rule[field] = value;
		      rules[key] = rule;
		      return { ...current, rules };
		    });
		  };
		  const updateNotify = (patch) => {
		    setDirty(true);
		    setDraft((current) => current === void 0 ? current : { ...current, notify: { ...current.notify, ...patch } });
		  };
		  const urlValid = /^https?:\/\/\S+$/.test(draft.notify.url.trim());
		  const runTest = () => {
		    setTesting(true);
		    setTestResult(null);
		    api.updateSettings({ notify: draft.notify }).then(() => api.testNotify()).then((result) => setTestResult(result)).catch((caught) => setTestResult({ ok: false, at: Date.now(), error: errorMessage(caught) })).finally(() => setTesting(false));
		  };
		  const save = () => {
		    setSaving(true);
		    setError(null);
		    api.updateSettings({
		      rules: draft.rules,
		      retentionDays: draft.retentionDays,
		      reportIntervalSec: draft.reportIntervalSec,
		      notify: draft.notify
		    }).then((next) => {
		      setDraft(next);
		      setDirty(false);
		      onSaved(next);
		      setSaved(true);
		      if (savedTimer.current !== null) clearTimeout(savedTimer.current);
		      savedTimer.current = setTimeout(() => setSaved(false), 2500);
		    }).catch((caught) => setError(errorMessage(caught))).finally(() => setSaving(false));
		  };
		  const ruleRows = [
		    { key: "cpu", label: tt("settings.ruleCpu"), unit: "%", step: 5 },
		    { key: "memory", label: tt("settings.ruleMemory"), unit: "%", step: 5 },
		    { key: "disk", label: tt("settings.ruleDisk"), unit: "%", step: 5 },
		    { key: "load", label: tt("settings.ruleLoad"), unit: "\xD7", step: 0.5 }
		  ];
		  const invalid = ruleRows.some((row) => {
		    const rule = draft.rules[row.key];
		    return !(rule.threshold >= 1) || !(rule.holdSec >= 0);
		  }) || !(draft.rules.offline.holdSec >= 1) || !(draft.reportIntervalSec >= 1) || draft.notify.enabled && !urlValid;
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.section, children: [
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.errorBar, children: tt("error.action", { message: error }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("settings.title") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionHint, children: tt("settings.desc") })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.settingsGrid, children: [
		      ruleRows.map((row) => {
		        const rule = draft.rules[row.key];
		        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.settingsRow, "data-disabled": rule.enabled ? void 0 : "true", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.check, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		              "input",
		              {
		                type: "checkbox",
		                checked: rule.enabled,
		                onChange: (event) => updateRule(row.key, "enabled", event.target.checked)
		              }
		            ),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: row.label })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.threshold") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.inlineInput, children: [
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		                "input",
		                {
		                  type: "number",
		                  min: 1,
		                  max: row.key === "load" ? 64 : 100,
		                  step: row.step,
		                  value: rule.threshold,
		                  onChange: (event) => updateRule(row.key, "threshold", Number(event.target.value)),
		                  onBlur: () => {
		                    if (!(rule.threshold >= 1)) updateRule(row.key, "threshold", 1);
		                  }
		                }
		              ),
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.unit, children: row.unit })
		            ] })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.hold") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.inlineInput, children: [
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		                "input",
		                {
		                  type: "number",
		                  min: 0,
		                  max: 3600,
		                  step: 10,
		                  value: rule.holdSec,
		                  onChange: (event) => updateRule(row.key, "holdSec", Number(event.target.value))
		                }
		              ),
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.unit, children: tt("unit.sec") })
		            ] })
		          ] })
		        ] }, row.key);
		      }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.settingsRow, "data-disabled": draft.rules.offline.enabled ? void 0 : "true", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.check, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		            "input",
		            {
		              type: "checkbox",
		              checked: draft.rules.offline.enabled,
		              onChange: (event) => updateRule("offline", "enabled", event.target.checked)
		            }
		          ),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: tt("settings.ruleOffline") })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.hold") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.inlineInput, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		              "input",
		              {
		                type: "number",
		                min: 10,
		                max: 3600,
		                step: 10,
		                value: draft.rules.offline.holdSec,
		                onChange: (event) => updateRule("offline", "holdSec", Number(event.target.value)),
		                onBlur: () => {
		                  if (!(draft.rules.offline.holdSec >= 1)) updateRule("offline", "holdSec", 1);
		                }
		              }
		            ),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.unit, children: tt("unit.sec") })
		          ] })
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.settingsRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.retention") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.inlineInput, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		              "select",
		              {
		                value: draft.retentionDays,
		                onChange: (event) => {
		                  setDirty(true);
		                  setDraft({ ...draft, retentionDays: Number(event.target.value) });
		                },
		                children: [1, 3, 7, 14, 30].map((days) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: days, children: days }, days))
		              }
		            ),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.unit, children: tt("settings.retentionUnit") })
		          ] })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.hint, children: tt("settings.retentionDesc") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.settingsRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.interval") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.inlineInput, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		              "input",
		              {
		                type: "number",
		                min: 1,
		                max: 60,
		                step: 1,
		                value: draft.reportIntervalSec,
		                onChange: (event) => {
		                  setDirty(true);
		                  setDraft({ ...draft, reportIntervalSec: Number(event.target.value) });
		                },
		                onBlur: () => {
		                  if (!(draft.reportIntervalSec >= 1)) setDraft({ ...draft, reportIntervalSec: 1 });
		                }
		              }
		            ),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.unit, children: tt("settings.intervalUnit") })
		          ] })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.hint, children: tt("settings.intervalDesc") })
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.notifySection, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("notify.title") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionHint, children: tt("notify.desc") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.check, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "input",
		          {
		            type: "checkbox",
		            checked: draft.notify.enabled,
		            onChange: (event) => updateNotify({ enabled: event.target.checked })
		          }
		        ),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: tt("notify.enabled") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("notify.url") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "input",
		          {
		            className: panel_default.input,
		            value: draft.notify.url,
		            placeholder: "https://example.com/hooks/probe",
		            onChange: (event) => updateNotify({ url: event.target.value })
		          }
		        ),
		        draft.notify.enabled && !urlValid ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldError, role: "alert", children: tt("notify.invalidUrl") }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.hint, children: tt("notify.urlHint") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.check, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "input",
		          {
		            type: "checkbox",
		            checked: draft.notify.onResolve,
		            onChange: (event) => updateNotify({ onResolve: event.target.checked })
		          }
		        ),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: tt("notify.onResolve") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.notifyTestRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "button",
		          {
		            type: "button",
		            className: panel_default.ghostButton,
		            disabled: testing || !urlValid,
		            onClick: runTest,
		            children: testing ? tt("notify.testing") : tt("notify.test")
		          }
		        ),
		        testResult !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: testResult.ok ? panel_default.tokenOk : panel_default.tokenError, role: "status", children: testResult.ok ? tt("notify.testOk", { status: testResult.status ?? "-" }) : tt("notify.testFail", { message: testResult.error ?? `HTTP ${testResult.status ?? "?"}` }) })
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.saveRow, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.primaryButton, disabled: saving || invalid, onClick: save, children: saving ? tt("action.saving") : tt("action.save") }),
		      saved && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.savedNote, children: tt("settings.saved") }),
		      invalid && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldError, children: tt("settings.invalid") }),
		      versions !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.versionsNote, children: tt("about.versions", { panel: versions.panel, agent: versions.agent }) })
		    ] })
		  ] });
		}
		function useDialogFocus(onClose) {
		  const ref = (0, import_react.useRef)(null);
		  (0, import_react.useEffect)(() => {
		    const root = ref.current;
		    if (root === null) return;
		    const focusables = () => Array.from(
		      root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
		    ).filter((element) => !element.hasAttribute("disabled"));
		    const preferred = root.querySelector("input, select, textarea") ?? focusables()[0];
		    preferred?.focus();
		    const onKey = (event) => {
		      if (event.key === "Escape") {
		        onClose();
		        return;
		      }
		      if (event.key !== "Tab") return;
		      const items = focusables();
		      if (items.length === 0) return;
		      const first = items[0];
		      const last = items[items.length - 1];
		      const active = document.activeElement;
		      if (event.shiftKey && active === first) {
		        event.preventDefault();
		        last.focus();
		      } else if (!event.shiftKey && active === last) {
		        event.preventDefault();
		        first.focus();
		      }
		    };
		    document.addEventListener("keydown", onKey);
		    return () => document.removeEventListener("keydown", onKey);
		  }, [onClose]);
		  return ref;
		}
		function HostDialog({ mode, host, api, onClose, onSaved }) {
		  const [name, setName] = (0, import_react.useState)(host?.name ?? "");
		  const [tags, setTags] = (0, import_react.useState)((host?.tags ?? []).join(", "));
		  const [location, setLocation] = (0, import_react.useState)(host?.location ?? "");
		  const [note, setNote] = (0, import_react.useState)(host?.note ?? "");
		  const [enabled, setEnabled] = (0, import_react.useState)(host?.enabled ?? true);
		  const [busy, setBusy] = (0, import_react.useState)(false);
		  const [error, setError] = (0, import_react.useState)(null);
		  const dialogRef = useDialogFocus(onClose);
		  const submit = () => {
		    if (name.trim() === "") {
		      setError(tt("host.name") + " *");
		      return;
		    }
		    setBusy(true);
		    setError(null);
		    const payload = {
		      name: name.trim(),
		      tags: tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !== ""),
		      location: location.trim(),
		      note: note.trim(),
		      enabled
		    };
		    const task = mode === "add" || host === void 0 ? api.createHost(payload) : api.updateHost(host.id, payload);
		    task.then((next) => onSaved(next)).catch((caught) => setError(errorMessage(caught))).finally(() => setBusy(false));
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.backdrop, role: "presentation", onMouseDown: (event) => {
		    if (event.target === event.currentTarget) onClose();
		  }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modal, ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-label": mode === "add" ? tt("host.addTitle") : tt("host.editTitle"), children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: panel_default.modalTitle, children: mode === "add" ? tt("host.addTitle") : tt("host.editTitle") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.iconButton, "aria-label": tt("action.close"), onClick: onClose, children: "\xD7" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.fieldLabel, children: [
		          tt("host.name"),
		          " *"
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "input",
		          {
		            className: panel_default.input,
		            autoFocus: true,
		            maxLength: 60,
		            value: name,
		            placeholder: tt("host.namePlaceholder"),
		            onChange: (event) => setName(event.target.value),
		            onKeyDown: (event) => {
		              if (event.key === "Enter") submit();
		            }
		          }
		        )
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("host.tags") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "input",
		          {
		            className: panel_default.input,
		            value: tags,
		            placeholder: tt("host.tagsPlaceholder"),
		            onChange: (event) => setTags(event.target.value)
		          }
		        )
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.fieldRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("host.location") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		            "input",
		            {
		              className: panel_default.input,
		              maxLength: 60,
		              value: location,
		              placeholder: tt("host.locationPlaceholder"),
		              onChange: (event) => setLocation(event.target.value)
		            }
		          )
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("host.note") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		            "input",
		            {
		              className: panel_default.input,
		              maxLength: 200,
		              value: note,
		              placeholder: tt("host.notePlaceholder"),
		              onChange: (event) => setNote(event.target.value)
		            }
		          )
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.check, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "checkbox", checked: enabled, onChange: (event) => setEnabled(event.target.checked) }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: tt("host.enabled") })
		      ] }),
		      error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.errorBar, children: error })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalFooter, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onClose, children: tt("action.cancel") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.primaryButton, disabled: busy, onClick: submit, children: busy ? tt("action.saving") : mode === "add" ? tt("host.save") : tt("host.saveEdit") })
		    ] })
		  ] }) });
		}
		function installCommands(origin, host, intervalSec, kind = "shell") {
		  const base = origin.replace(/\/+$/, "");
		  const script = kind === "shell" ? "dsh-probe-agent.sh" : "dsh-probe-agent.mjs";
		  const env = [
		    `DSPROBE_SERVER=${base}`,
		    `DSPROBE_TOKEN=${host.token}`,
		    `DSPROBE_NAME=${JSON.stringify(host.name)}`,
		    `DSPROBE_INTERVAL=${intervalSec}`
		  ].join(" \\\n  ");
		  const download = kind === "shell" ? `curl -fsSL ${base}/auth/dsh-probe/agent.sh -o /usr/local/bin/${script} && chmod 755 /usr/local/bin/${script}` : `curl -fsSL ${base}/auth/dsh-probe/agent.mjs -o /usr/local/bin/${script}`;
		  const run = `${env} \\
		  ${kind === "shell" ? "/bin/sh" : "node"} /usr/local/bin/${script}`;
		  const execStart = kind === "shell" ? `/bin/sh /usr/local/bin/${script}` : `/usr/bin/env node /usr/local/bin/${script}`;
		  const upgrade = `${download}
		systemctl restart dsh-probe-agent`;
		  const systemd = `cat >/etc/systemd/system/dsh-probe-agent.service <<'EOF'
		[Unit]
		Description=DSH probe agent
		After=network-online.target
		Wants=network-online.target
		
		[Service]
		Environment=${envValue(`DSPROBE_SERVER=${base}`)}
		Environment=${envValue(`DSPROBE_TOKEN=${host.token}`)}
		Environment=${envValue(`DSPROBE_NAME=${host.name}`)}
		Environment=${envValue(`DSPROBE_INTERVAL=${intervalSec}`)}
		ExecStart=${execStart}
		Restart=always
		RestartSec=5
		
		[Install]
		WantedBy=multi-user.target
		EOF
		systemctl daemon-reload && systemctl enable --now dsh-probe-agent
		journalctl -u dsh-probe-agent -n 20 --no-pager`;
		  return { download, run, systemd, upgrade };
		}
		function InstallDialog({ host, settings, api, latestAgent, onClose, onHostChange }) {
		  const stored = (() => {
		    try {
		      return localStorage.getItem("dsh-probe.origin") ?? "";
		    } catch {
		      return "";
		    }
		  })();
		  const [origin, setOrigin] = (0, import_react.useState)(stored !== "" ? stored : window.location.origin);
		  const [kind, setKind] = (0, import_react.useState)("shell");
		  const [showToken, setShowToken] = (0, import_react.useState)(false);
		  const [confirmRotate, setConfirmRotate] = (0, import_react.useState)(false);
		  const [error, setError] = (0, import_react.useState)(null);
		  const timer = (0, import_react.useRef)(null);
		  const dialogRef = useDialogFocus(onClose);
		  (0, import_react.useEffect)(() => () => {
		    if (timer.current !== null) clearTimeout(timer.current);
		  }, []);
		  const intervalSec = settings?.reportIntervalSec ?? 3;
		  const originValue = origin.trim().replace(/\/+$/, "");
		  const originValid = /^https?:\/\/\S+$/.test(originValue);
		  const commands = installCommands(originValue, host, intervalSec, kind);
		  const all = `# 1. download
		${commands.download}
		
		# 2. foreground test
		${commands.run}
		
		# 3. systemd
		${commands.systemd}` + (host.agentOutdated ? `
		
		# upgrade
		${commands.upgrade}` : "");
		  const rotate = () => {
		    if (!confirmRotate) {
		      setConfirmRotate(true);
		      timer.current = setTimeout(() => setConfirmRotate(false), 4e3);
		      return;
		    }
		    api.rotateToken(host.id).then((next) => {
		      onHostChange(next);
		      setConfirmRotate(false);
		    }).catch((caught) => setError(errorMessage(caught)));
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.backdrop, role: "presentation", onMouseDown: (event) => {
		    if (event.target === event.currentTarget) onClose();
		  }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modal, ref: dialogRef, "data-wide": "true", role: "dialog", "aria-modal": "true", "aria-label": tt("install.title", { name: host.name }), children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: panel_default.modalTitle, children: tt("install.title", { name: host.name }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.iconButton, "aria-label": tt("action.close"), onClick: onClose, children: "\xD7" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.hint, children: tt("install.desc") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.installStatus, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.dot, "data-status": host.status, "aria-hidden": "true" }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: statusLabel(host.status) }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.muted, children: host.lastSeen === 0 ? tt("card.never") : tt("card.seen", { age: ago(host.lastSeen) }) })
		      ] }),
		      host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.upgradeNote, role: "status", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: tt("upgrade.agentOutdated", { from: host.current?.agentVersion ?? "?", to: latestAgent }) }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.muted, children: tt("upgrade.hint") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("install.server") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "input",
		          {
		            className: panel_default.input,
		            value: origin,
		            onChange: (event) => {
		              setOrigin(event.target.value);
		              try {
		                localStorage.setItem("dsh-probe.origin", event.target.value);
		              } catch {
		              }
		            }
		          }
		        ),
		        originValid ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.hint, children: tt("install.serverHint") }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldError, role: "alert", children: tt("install.invalidOrigin") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("install.kind") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.rangePills, children: ["shell", "node"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		          "button",
		          {
		            type: "button",
		            className: panel_default.pill,
		            "data-active": kind === item ? "true" : void 0,
		            onClick: () => setKind(item),
		            children: tt(`install.${item}`)
		          },
		          item
		        )) }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.hint, children: tt(`install.${kind}Hint`) })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.tokenBlock, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("install.token") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.tokenRow, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("code", { className: panel_default.tokenValue, children: showToken ? host.token : `${host.token.slice(0, 8)}${"\u2022".repeat(24)}` }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: () => setShowToken((value) => !value), children: showToken ? tt("action.hide") : tt("action.show") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CopyButton, { text: host.token, label: tt("action.copy") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.dangerGhost, "data-confirm": confirmRotate ? "true" : void 0, onClick: rotate, children: confirmRotate ? tt("action.rotateConfirm") : tt("action.rotate") })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.hint, children: [
		          tt("install.tokenHint"),
		          " ",
		          tt("install.rotateHint")
		        ] })
		      ] }),
		      originValid && host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandBlock, { title: tt("upgrade.title"), text: commands.upgrade }),
		      originValid && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandBlock, { title: tt("install.step1"), text: commands.download }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandBlock, { title: tt("install.step2"), text: commands.run }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandBlock, { title: tt("install.step3"), text: commands.systemd })
		      ] }),
		      error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.errorBar, role: "alert", children: tt("error.action", { message: error }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: host.status === "waiting" ? panel_default.waitingNote : panel_default.liveNote, children: host.status === "waiting" ? tt("install.waiting") : tt("install.online") })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalFooter, children: [
		      originValid && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CopyButton, { text: all, label: tt("install.copyAll"), primary: true }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onClose, children: tt("action.close") })
		    ] })
		  ] }) });
		}
		function CommandBlock({ title, text }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.commandBlock, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.commandHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.commandTitle, children: title }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CopyButton, { text })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: panel_default.commandText, children: text })
		  ] });
		}
		function CopyButton({ text, label, primary = false }) {
		  const [done, setDone] = (0, import_react.useState)(false);
		  const timer = (0, import_react.useRef)(null);
		  (0, import_react.useEffect)(() => () => {
		    if (timer.current !== null) clearTimeout(timer.current);
		  }, []);
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		    "button",
		    {
		      type: "button",
		      className: primary ? panel_default.primaryButton : panel_default.ghostButton,
		      onClick: () => {
		        void copyText(text).then((ok) => {
		          if (!ok) return;
		          setDone(true);
		          if (timer.current !== null) clearTimeout(timer.current);
		          timer.current = setTimeout(() => setDone(false), 1500);
		        });
		      },
		      children: done ? tt("action.copied") : label ?? tt("action.copy")
		    }
		  );
		}
		function TokenPill({ host, api, onHostChange }) {
		  const [showToken, setShowToken] = (0, import_react.useState)(false);
		  const [confirmRotate, setConfirmRotate] = (0, import_react.useState)(false);
		  const [rotated, setRotated] = (0, import_react.useState)(false);
		  const [rotateError, setRotateError] = (0, import_react.useState)(null);
		  const timer = (0, import_react.useRef)(null);
		  const resetTimer = (0, import_react.useRef)(null);
		  (0, import_react.useEffect)(() => () => {
		    if (timer.current !== null) clearTimeout(timer.current);
		    if (resetTimer.current !== null) clearTimeout(resetTimer.current);
		  }, []);
		  const rotate = () => {
		    if (!confirmRotate) {
		      setConfirmRotate(true);
		      timer.current = setTimeout(() => setConfirmRotate(false), 4e3);
		      return;
		    }
		    api.rotateToken(host.id).then((next) => {
		      onHostChange(next);
		      setConfirmRotate(false);
		      setRotateError(null);
		      setRotated(true);
		      if (resetTimer.current !== null) clearTimeout(resetTimer.current);
		      resetTimer.current = setTimeout(() => setRotated(false), 3e3);
		    }).catch((caught) => {
		      setConfirmRotate(false);
		      setRotateError(errorMessage(caught));
		    });
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.tokenInline, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("code", { className: panel_default.tokenValue, children: showToken ? host.token : `${host.token.slice(0, 6)}${"\u2022".repeat(12)}` }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: () => setShowToken((value) => !value), children: showToken ? tt("action.hide") : tt("action.show") }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CopyButton, { text: host.token }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.dangerGhost, "data-confirm": confirmRotate ? "true" : void 0, onClick: rotate, children: confirmRotate ? tt("action.rotateConfirm") : tt("action.rotate") }),
		    (rotated || rotateError !== null) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: rotateError === null ? panel_default.tokenOk : panel_default.tokenError, role: "status", children: rotateError === null ? tt("token.rotated") : tt("error.action", { message: rotateError }) })
		  ] });
		}
		
		// src/client/index.tsx
		var import_jsx_runtime3 = require("react/jsx-runtime");
		var NS = "dsh-probe";
		var PROBE_PANEL_ID = "probe";
		var PANEL_ORDER = 45;
		var inject = ["slots", "locale"];
		function ProbePanelIcon({ size }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
		    "svg",
		    {
		      "data-dsh-panel-entry": PROBE_PANEL_ID,
		      viewBox: "0 0 16 16",
		      width: size,
		      height: size,
		      fill: "none",
		      stroke: "currentColor",
		      strokeWidth: "1.5",
		      strokeLinecap: "round",
		      strokeLinejoin: "round",
		      "aria-hidden": "true",
		      children: [
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "1.6", y: "2.4", width: "12.8", height: "9.4", rx: "1.6" }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3.4 7.6h2l1.1-2.6 1.6 5 1.3-3.6 1 1.2h2.2" }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.6 14.2h4.8" })
		      ]
		    }
		  );
		}
		function ProbePage({ api }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ProbePanel, { api });
		}
		function apply(ctx) {
		  ctx.effect(() => {
		    try {
		      return ctx.locale.register(NS, { zh, en });
		    } catch {
		      return () => {
		      };
		    }
		  }, "dsh-probe: dictionaries");
		  try {
		    setRuntimeTranslate(ctx.locale.bind(NS));
		  } catch {
		  }
		  const api = new ProbeApi();
		  const slots = ctx.slots;
		  const disposers = [];
		  try {
		    disposers.push(slots.inject("sidebar.panellist", () => slots.register({
		      name: "sidebar.panellist",
		      id: PROBE_PANEL_ID,
		      order: PANEL_ORDER,
		      // The shell resolves this through the active locale on every change.
		      label: () => tt("entry.label")
		    }, ProbePanelIcon)));
		    disposers.push(slots.inject("main", () => slots.register({
		      name: "main",
		      key: PROBE_PANEL_ID,
		      inject: () => ({ api })
		    }, ProbePage)));
		  } catch (error) {
		    console.warn("[dsh-probe] panel registration failed:", error);
		  }
		  ctx.effect(() => () => {
		    for (const dispose of disposers.splice(0)) dispose();
		  }, "dsh-probe: ui mounts");
		}
		
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
