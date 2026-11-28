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
		  "table.os": "\u7CFB\u7EDF",
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
		  "greeting.morning": "\u65E9\u4E0A\u597D",
		  "greeting.afternoon": "\u4E0B\u5348\u597D",
		  "greeting.evening": "\u665A\u4E0A\u597D",
		  "greeting.night": "\u591C\u6DF1\u4E86",
		  "summary.total": "\u4E3B\u673A\u603B\u6570",
		  "summary.offline": "\u79BB\u7EBF",
		  "summary.online": "\u5728\u7EBF",
		  "summary.alerts": "\u6D3B\u52A8\u544A\u8B66",
		  "card.region": "\u5730\u533A",
		  "detail.range": "\u65F6\u95F4\u8303\u56F4\uFF1A",
		  "theme.dark": "\u5207\u6362\u5230\u6DF1\u8272",
		  "theme.light": "\u5207\u6362\u5230\u6D45\u8272",
		  "wall.welcome": "\u6B22\u8FCE\u56DE\u6765\uFF0C\u4E00\u5207\u6B63\u5E38\u8FD0\u884C\u4E2D",
		  "admin.title": "\u63A2\u9488\u7BA1\u7406\u53F0",
		  "admin.back": "\u8FD4\u56DE\u76D1\u63A7",
		  "admin.hosts": "\u4E3B\u673A",
		  "admin.latency": "\u5EF6\u8FDF\u76D1\u6D4B",
		  "admin.alerts": "\u544A\u8B66",
		  "admin.settings": "\u8BBE\u7F6E",
		  "tab.overview": "\u6982\u89C8",
		  "tab.latency": "\u5EF6\u8FDF",
		  "latency.title": "\u5EF6\u8FDF\u76D1\u6D4B",
		  "latency.desc": "\u5BF9\u4E00\u4E2A\u76EE\u6807\u5B9A\u671F\u505A ICMP / TCP / HTTP \u63A2\u6D4B\uFF0C\u6309\u4E3B\u673A\u6C47\u603B\u5F80\u8FD4\u65F6\u95F4\u4E0E\u4E22\u5305\u7387\u3002",
		  "latency.add": "\u65B0\u589E\u76D1\u6D4B",
		  "latency.empty": "\u8FD8\u6CA1\u6709\u5EF6\u8FDF\u4EFB\u52A1\u3002\u65B0\u589E\u4E00\u4E2A\u6765\u5F00\u59CB\u6D4B\u91CF\u7F51\u7EDC\u8D28\u91CF\u3002",
		  "latency.results": "\u5404\u4E3B\u673A\u7ED3\u679C",
		  "latency.chart": "\u5EF6\u8FDF\u8D8B\u52BF",
		  "latency.delete": "\u5220\u9664\u6B64\u4EFB\u52A1",
		  "latency.interval": "\u6BCF {sec}s",
		  "latency.hostCount": "{count} \u53F0\u4E3B\u673A",
		  "latency.required": "\u8BF7\u586B\u5199\u540D\u79F0\u4E0E\u76EE\u6807\u5730\u5740\u3002",
		  "latency.col.host": "\u4E3B\u673A",
		  "latency.col.latest": "\u6700\u65B0",
		  "latency.col.avg": "\u5E73\u5747",
		  "latency.col.loss": "\u4E22\u5305",
		  "latency.col.samples": "\u6837\u672C",
		  "latency.form.create": "\u65B0\u589E\u5EF6\u8FDF\u4EFB\u52A1",
		  "latency.form.edit": "\u7F16\u8F91\u5EF6\u8FDF\u4EFB\u52A1",
		  "latency.form.name": "\u540D\u79F0",
		  "latency.form.type": "\u63A2\u6D4B\u65B9\u5F0F",
		  "latency.form.typeHint": "ICMP \u6D4B ping\uFF0CTCP \u53EA\u6D4B\u63E1\u624B\uFF0CHTTP \u6D4B\u5B8C\u6574\u8BF7\u6C42\u5F80\u8FD4\u3002",
		  "latency.form.target": "\u76EE\u6807",
		  "latency.form.interval": "\u95F4\u9694\uFF08\u79D2\uFF09",
		  "latency.form.hosts": "\u53C2\u4E0E\u7684\u4E3B\u673A",
		  "tab.alerts": "\u544A\u8B66",
		  "settings.page": "\u63A2\u9488\u8BBE\u7F6E",
		  "entry.settings": "\u63A2\u9488\u8BBE\u7F6E",
		  "geo.title": "\u5730\u533A\u8BC6\u522B",
		  "geo.desc": "\u4E3B\u673A\u6240\u5728\u5730\u533A\u7531\u4E0A\u62A5\u6765\u6E90 IP \u81EA\u52A8\u8BC6\u522B\uFF0C\u65E0\u9700\u624B\u5DE5\u586B\u5199\u3002",
		  "geo.provider": "\u8BC6\u522B\u65B9\u5F0F",
		  "geo.auto": "\u81EA\u52A8\uFF08\u6709\u79BB\u7EBF\u5E93\u5219\u7528\u79BB\u7EBF\u5E93\uFF09",
		  "geo.none": "\u5173\u95ED",
		  "geo.active": "\u5F53\u524D\u751F\u6548",
		  "geo.database": "\u79BB\u7EBF\u6570\u636E\u5E93",
		  "geo.databaseSize": "\u5DF2\u4E0B\u8F7D \xB7 {size} MB",
		  "geo.databaseMissing": "\u672A\u4E0B\u8F7D",
		  "geo.download": "\u4E0B\u8F7D\u79BB\u7EBF\u5E93",
		  "geo.downloading": "\u4E0B\u8F7D\u4E2D\u2026",
		  "geo.downloaded": "\u79BB\u7EBF\u5E93\u5DF2\u4E0B\u8F7D\uFF0C\u4E4B\u540E\u7684\u8BC6\u522B\u4E0D\u518D\u9700\u8981\u8054\u7F51\u3002",
		  "geo.downloadFailed": "\u4E0B\u8F7D\u5931\u8D25",
		  "geo.hint": "\u79BB\u7EBF\u5E93\u7EA6 3.4 MB\uFF0C\u8986\u76D6\u5168\u90E8\u56FD\u5BB6\u3002\u4E0B\u8F7D\u540E\u5373\u4F7F\u6240\u6709\u7B2C\u4E09\u65B9 API \u90FD\u4E0D\u53EF\u7528\uFF0C\u5730\u533A\u8BC6\u522B\u4ECD\u80FD\u5DE5\u4F5C\u3002",
		  "tab.settings": "\u8BBE\u7F6E",
		  "action.add": "\u6DFB\u52A0\u4E3B\u673A",
		  "action.refresh": "\u5237\u65B0",
		  "action.back": "\u8FD4\u56DE",
		  "action.token": "\u5B89\u88C5\u4E0E\u4EE4\u724C",
		  "tab.manage": "\u7BA1\u7406",
		  "footer.panel": "\u9762\u677F",
		  "footer.agent": "Agent",
		  "manage.title": "\u4E3B\u673A\u7BA1\u7406",
		  "manage.desc": "\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u4E3B\u673A\uFF0C\u6216\u67E5\u770B\u5B89\u88C5\u547D\u4EE4\u4E0E\u4EE4\u724C\u3002\u76D1\u63A7\u9875\u53EA\u5C55\u793A\u6570\u636E\u3002",
		  "manage.empty": "\u8FD8\u6CA1\u6709\u4E3B\u673A\u3002\u70B9\u51FB\u300C\u6DFB\u52A0\u4E3B\u673A\u300D\u63A5\u5165\u7B2C\u4E00\u53F0\u670D\u52A1\u5668\u3002",
		  "manage.upgrade": "\u5347\u7EA7 agent",
		  "manage.upgrading": "\u5347\u7EA7\u4E2D\u2026",
		  "manage.upgradeHint": "\u8BA9\u8BE5\u4E3B\u673A\u7684 agent \u81EA\u52A8\u5347\u7EA7\u5230 {version}",
		  "manage.deleteConfirm": "\u786E\u5B9A\u5220\u9664\u4E3B\u673A\u300C{name}\u300D\uFF1F\u5176\u5386\u53F2\u6570\u636E\u4E0E\u544A\u8B66\u4F1A\u4E00\u5E76\u79FB\u9664\u3002",
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
		  "card.swap": "\u4EA4\u6362",
		  "card.loadShort": "\u8D1F\u8F7D",
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
		  "table.os": "OS",
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
		  "greeting.morning": "Good Morning",
		  "greeting.afternoon": "Good Afternoon",
		  "greeting.evening": "Good Evening",
		  "greeting.night": "Good Night",
		  "summary.offline": "Offline",
		  "summary.total": "Total Hosts",
		  "summary.online": "Online",
		  "summary.alerts": "Active Alerts",
		  "card.region": "Region",
		  "detail.range": "Range:",
		  "theme.dark": "Switch to dark",
		  "theme.light": "Switch to light",
		  "wall.welcome": "Welcome back \u2014 everything is running",
		  "admin.title": "Probe console",
		  "admin.back": "Back to wall",
		  "admin.hosts": "Hosts",
		  "admin.latency": "Latency",
		  "admin.alerts": "Alerts",
		  "admin.settings": "Settings",
		  "tab.overview": "Overview",
		  "tab.latency": "Latency",
		  "latency.title": "Latency monitoring",
		  "latency.desc": "Probe one target over ICMP / TCP / HTTP on a schedule, and summarise round-trip time and loss per host.",
		  "latency.add": "New probe",
		  "latency.empty": "No latency tasks yet. Add one to start measuring network quality.",
		  "latency.results": "Per-host results",
		  "latency.chart": "Latency trend",
		  "latency.delete": "Delete this task",
		  "latency.interval": "every {sec}s",
		  "latency.hostCount": "{count} hosts",
		  "latency.required": "Name and target are required.",
		  "latency.col.host": "Host",
		  "latency.col.latest": "Latest",
		  "latency.col.avg": "Average",
		  "latency.col.loss": "Loss",
		  "latency.col.samples": "Samples",
		  "latency.form.create": "New latency task",
		  "latency.form.edit": "Edit latency task",
		  "latency.form.name": "Name",
		  "latency.form.type": "Probe type",
		  "latency.form.typeHint": "ICMP pings the host, TCP measures the handshake only, HTTP times a full request.",
		  "latency.form.target": "Target",
		  "latency.form.interval": "Interval (seconds)",
		  "latency.form.hosts": "Hosts",
		  "tab.alerts": "Alerts",
		  "settings.page": "Probe settings",
		  "entry.settings": "Probe settings",
		  "geo.title": "Region detection",
		  "geo.desc": "A host is located by the address its report arrives from \u2014 nothing to fill in by hand.",
		  "geo.provider": "Resolver",
		  "geo.auto": "Automatic (offline database when available)",
		  "geo.none": "Off",
		  "geo.active": "Active",
		  "geo.database": "Offline database",
		  "geo.databaseSize": "Downloaded \xB7 {size} MB",
		  "geo.databaseMissing": "Not downloaded",
		  "geo.download": "Download database",
		  "geo.downloading": "Downloading\u2026",
		  "geo.downloaded": "Database downloaded; lookups no longer need the network.",
		  "geo.downloadFailed": "Download failed",
		  "geo.hint": "The database is about 3.4 MB and covers every country. Once it is in place, region detection keeps working even if every third-party API is down.",
		  "tab.settings": "Settings",
		  "action.add": "Add host",
		  "action.refresh": "Refresh",
		  "action.back": "Back",
		  "action.token": "Install & token",
		  "tab.manage": "Manage",
		  "footer.panel": "Panel",
		  "footer.agent": "Agent",
		  "manage.title": "Host management",
		  "manage.desc": "Add, edit or remove hosts, and get install commands and tokens. The monitoring page only reads data.",
		  "manage.empty": 'No hosts yet. Use "Add host" to connect the first server.',
		  "manage.upgrade": "Upgrade agent",
		  "manage.upgrading": "Upgrading\u2026",
		  "manage.upgradeHint": "Have this host upgrade its agent to {version}",
		  "manage.deleteConfirm": 'Delete host "{name}"? Its history and alerts are removed too.',
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
		  "card.swap": "Swap",
		  "card.loadShort": "Load",
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
		  /**
		   * Ask one host's agent to replace itself with this panel's build.
		   *
		   * Queues an `agent.switchVersion` event; the agent picks it up on its next
		   * report, downloads the script, verifies it and re-execs.
		   */
		  async upgradeAgent(id) {
		    return request(
		      `/hosts/${encodeURIComponent(id)}/upgrade`,
		      { method: "POST" }
		    );
		  }
		  /** Region provider status and the local database's size and age. */
		  async geoStatus() {
		    return request("/geo");
		  }
		  /** Download the offline GeoIP database and switch to it. */
		  async downloadGeoDatabase() {
		    return request("/geo/download", { method: "POST" });
		  }
		  /** Every latency task with its per-host summary. */
		  async listPingTasks() {
		    const body = await request("/pings");
		    return body.tasks ?? [];
		  }
		  /** Create a latency task. */
		  async createPingTask(payload) {
		    const body = await request("/pings", { method: "POST", body: JSON.stringify(payload) });
		    return body.task;
		  }
		  /** Patch one latency task. */
		  async updatePingTask(id, payload) {
		    const body = await request(`/pings/${encodeURIComponent(id)}`, {
		      method: "PATCH",
		      body: JSON.stringify(payload)
		    });
		    return body.task;
		  }
		  /** Delete one latency task and its samples. */
		  async deletePingTask(id) {
		    await request(`/pings/${encodeURIComponent(id)}`, { method: "DELETE" });
		  }
		  /** Samples for one task/host pair over a window. */
		  async pingSeries(taskId, hostId, windowMs) {
		    const body = await request(
		      `/pings/${encodeURIComponent(taskId)}/${encodeURIComponent(hostId)}?window=${windowMs}`
		    );
		    return body.series ?? [];
		  }
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
		var import_react7 = require("react");
		
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
		
		// src/client/panel/LatencyTab.tsx
		var import_react2 = require("react");
		
		// src/client/panel/LatencyChart.tsx
		var import_react = require("react");
		
		// css-module:./src/client/panel/panel.module.css
		var CSS = `/**
		 * dsh-probe panel styles \u2014 visual language borrowed wholesale from the
		 * \`komari-mikus\` theme (sakura purple, soft cards, metric bars).
		 *
		 * Scoped by the build's \`probe_\` class prefix so nothing leaks into the GUI.
		 * The Mikus palette is applied through local \`--probe-*\` variables declared on
		 * \`.probe_page\`, with a \`[data-probe-theme="dark"]\` override so the panel follows the
		 * host GUI's dark mode without touching the host's own tokens.
		 *
		 * Layout: sticky translucent header, welcome band, stat bar, then a responsive
		 * card grid (auto-fill minmax 320px) that collapses to one column under 768px.
		 */
		
		.probe_page {
		  /* Mikus light palette */
		  --probe-bg-primary: #f8f6f9;
		  --probe-bg-secondary: #ffffff;
		  --probe-bg-tertiary: #f0edf3;
		  --probe-bg-card: #ffffff;
		  --probe-bg-card-rgb: 255, 255, 255;
		  --probe-bg-card-hover: #faf8fc;
		  --probe-bg-overlay: rgba(0, 0, 0, 0.4);
		  --probe-text-primary: #2d1b3d;
		  --probe-text-secondary: #6b5a7d;
		  --probe-text-tertiary: #9b8aad;
		  --probe-text-inverse: #ffffff;
		  --probe-border: #e8e0f0;
		  --probe-border-rgb: 232, 224, 240;
		  --probe-border-light: #f0eaf5;
		  --probe-accent: #e8668a;
		  --probe-accent-light: #fce4ec;
		  --probe-accent-hover: #d44a72;
		  --probe-success: #4caf7d;
		  --probe-success-light: #e8f5e9;
		  --probe-warning: #f5a623;
		  --probe-warning-light: #fff8e1;
		  --probe-danger: #e74c5e;
		  --probe-danger-light: #fde8eb;
		  --probe-info: #5c9ced;
		  --probe-info-light: #e3f0ff;
		  --probe-sakura-1: #ffb7c5;
		  --probe-sakura-2: #ff8fa3;
		  --probe-sakura-3: #e8668a;
		  --probe-chart-cpu: #e8668a;
		  --probe-chart-ram: #4caf7d;
		  --probe-chart-disk: #7ab3f7;
		  --probe-chart-net-down: #5c9ced;
		  --probe-chart-net-up: #f5a623;
		  --probe-chart-grid: #ede6f3;
		  --probe-chart-text: #9b8aad;
		  --probe-shadow-sm: 0 1px 3px rgba(45, 27, 61, 0.06);
		  --probe-shadow-md: 0 4px 12px rgba(45, 27, 61, 0.08);
		  --probe-shadow-lg: 0 8px 30px rgba(45, 27, 61, 0.12);
		  --probe-shadow-card: 0 2px 8px rgba(45, 27, 61, 0.05);
		  --probe-r-sm: 8px;
		  --probe-r-md: 12px;
		  --probe-r-lg: 16px;
		  --probe-r-xl: 20px;
		  --probe-ease: cubic-bezier(0.4, 0, 0.2, 1);
		  --probe-t-fast: 0.15s var(--probe-ease);
		  --probe-t: 0.25s var(--probe-ease);
		  --probe-t-slow: 0.4s var(--probe-ease);
		  --probe-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
		  --probe-mono: "SF Mono", "Fira Code", "Cascadia Code", Consolas, monospace;
		
		  /* OS icons inlined from komari-mikus/dist/assets/logo */
		  --probe-os-alma: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYyLjA2MTcgMzkuN0M2NC42NTkzIDM5LjUwMDIgNjYuNzU3NCA0MS4xOTg2IDY2Ljk1NzIgNDMuNzk2MkM2Ny4xNTcgNDYuNDkzNyA2NS4yNTg4IDQ4LjY5MTcgNjIuNjYxMiA0OC44OTE1QzYwLjE2MzUgNDkuMDkxMyA1Ny45NjU2IDQ3LjE5MyA1Ny43NjU3IDQ0LjY5NTRDNTcuNTY1OSA0MS45OTc5IDU5LjM2NDMgMzkuOTk5NyA2Mi4wNjE3IDM5LjdaIiBmaWxsPSIjODZEQTJGIi8+CjxwYXRoIGQ9Ik0zMC40OTEgNjAuOTgwMkMzMC40OTEgNTguMzgyNiAzMi40ODkyIDU2LjM4NDUgMzQuODg2OSA1Ni4zODQ1QzM3LjI4NDcgNTYuMzg0NSAzOS41ODI2IDU4LjU4MjQgMzkuNTgyNiA2MS4wODAxQzM5LjU4MjYgNjMuNDc3OSAzNy41ODQ0IDY1LjU3NTkgMzUuMjg2NiA2NS42NzU4QzMyLjM4OTMgNjUuNjc1OCAzMC40OTEgNjMuODc3NSAzMC40OTEgNjAuOTgwMloiIGZpbGw9IiMyNEMyRkYiLz4KPHBhdGggZD0iTTM3LjU4NDUgMzEuODA3M0MzNy4xODQ5IDMyLjAwNzEgMzYuOTg1MSAzMS43MDc0IDM2Ljg4NTIgMzEuNDA3N0MzMy4xODg2IDI0LjUxNDEgMzQuMjg3NiAxNS44MjIxIDQwLjc4MTYgMTAuNjI3QzQyLjQ4IDkuMjI4MjggNDUuNjc3IDguOTI4NTUgNDcuMDc1NyAxMC4zMjczQzQ3LjY3NTIgMTAuODI2OCA0Ny43NzUxIDExLjQyNjIgNDcuODc1IDEyLjEyNTZDNDguMDc0OCAxMy42MjQyIDQ4LjM3NDUgMTUuMTIyOCA0OS4zNzM2IDE2LjMyMTdDNTAuNDcyNiAxNy42MjA1IDUxLjg3MTMgMTguMTIgNTMuNDY5OCAxOC4wMjAxQzU0Ljg2ODUgMTguMDIwMSA1Ni4yNjcyIDE3LjgyMDMgNTcuMTY2NCAxOS40MTg4QzU3LjY2NTkgMjAuMzE4IDU3LjQ2NjEgMjMuODE0NyA1Ni42NjY4IDI0LjUxNDFDNTYuMjY3MiAyNC44MTM4IDU1Ljk2NzUgMjQuNjE0IDU1LjY2NzcgMjQuNTE0MUM1My4zNjk5IDIzLjYxNDkgNTAuOTcyMSAyMy42MTQ5IDQ4LjU3NDMgMjQuMDE0NUM0Ny43NzUxIDI0LjExNDQgNDcuMzc1NCAyMy45MTQ2IDQ3LjM3NTQgMjMuMDE1NUM0Ny4yNzU1IDIxLjUxNjkgNDYuOTc1OCAyMC4xMTgyIDQ2LjE3NjYgMTguODE5NEM0NC42NzggMTYuMTIxOSA0MS44ODA1IDE2LjAyMiA0MC4wODIyIDE4LjUxOTZDMzguNTgzNiAyMC41MTc4IDM4LjE4NCAyMi45MTU2IDM3Ljc4NDQgMjUuMzEzM0MzNy4zODQ3IDI3LjQxMTQgMzcuNDg0NiAyOS42MDkzIDM3LjU4NDUgMzEuODA3M0MzNy40ODQ2IDMxLjgwNzMgMzcuNTg0NSAzMS44MDczIDM3LjU4NDUgMzEuODA3M1oiIGZpbGw9IiNGRkNCMTIiLz4KPHBhdGggZD0iTTQwLjA4MjIgMzMuMzA1OUMzOS44ODI0IDMzLjAwNjEgMzkuOTgyMyAzMi43MDY0IDQwLjI4MiAzMi41MDY2QzQ1Ljk3NjcgMjcuMzExNCA1NC40Njg4IDI2LjMxMjQgNjEuMDYyNyAzMS40MDc2QzYyLjc2MTEgMzIuODA2MyA2My44NjAxIDM1LjcwMzYgNjIuOTYwOSAzNy40MDIxQzYyLjU2MTMgMzguMTAxNCA2Mi4wNjE3IDM4LjQwMTEgNjEuNDYyMyAzOC42MDA5QzYwLjA2MzYgMzkuMjAwNCA1OC43NjQ4IDM5Ljc5OTggNTcuODY1NiA0MS4wOTg2QzU2Ljk2NjUgNDIuMzk3NCA1Ni43NjY3IDQzLjg5NiA1Ny4xNjYzIDQ1LjQ5NDVDNTcuNDY2IDQ2Ljc5MzMgNTcuOTY1NiA0OC4xOTIgNTYuNjY2OCA0OS4zOTA5QzU1Ljk2NzQgNTAuMDkwMyA1Mi41NzA2IDUwLjY4OTcgNTEuNjcxNCA1MC4wOTAzQzUxLjI3MTggNDkuNzkwNiA1MS4zNzE3IDQ5LjQ5MDggNTEuNDcxNiA0OS4wOTEyQzUxLjc3MTMgNDYuNTkzNSA1MS4xNzE5IDQ0LjI5NTcgNTAuMjcyNyA0Mi4wOTc3QzQ5Ljk3MyA0MS4yOTg0IDUwLjA3MjkgNDAuODk4OCA1MC44NzIxIDQwLjY5OUM1Mi4yNzA4IDQwLjI5OTQgNTMuNTY5NiAzOS42IDU0LjU2ODcgMzguNjAwOUM1Ni43NjY3IDM2LjUwMjkgNTYuMjY3MSAzMy44MDU0IDUzLjM2OTggMzIuNjA2NUM1MS4wNzIgMzEuNjA3NCA0OC42NzQyIDMxLjgwNzMgNDYuMzc2MyAzMi4wMDcxQzQ0LjE3ODQgMzIuMTA3IDQyLjA4MDMgMzIuNzA2NCA0MC4wODIyIDMzLjMwNTlaIiBmaWxsPSIjODZEQTJGIi8+CjxwYXRoIGQ9Ik0zOC43ODMzIDM1LjkwMzVDMzkuMDgzMSAzNS42MDM4IDM5LjI4MjkgMzUuNzAzNyAzOS41ODI2IDM1LjkwMzVDNDYuMTc2NSAzOS44OTk4IDQ5LjU3MzMgNDcuNzkyNSA0Ni41NzYxIDU1LjQ4NTNDNDUuNzc2OCA1Ny40ODM1IDQzLjE3OTMgNTkuNDgxNiA0MS4yODEgNTguOTgyMUM0MC40ODE4IDU4Ljc4MjMgNDAuMDgyMSA1OC4zODI2IDM5LjY4MjUgNTcuODgzMUMzOC43ODMzIDU2LjY4NDIgMzcuNzg0MyA1NS41ODUyIDM2LjI4NTcgNTUuMDg1N0MzNC42ODcxIDU0LjU4NjIgMzMuMjg4NCA1NC44ODU5IDMxLjg4OTcgNTUuNjg1MUMzMC42OTA5IDU2LjM4NDUgMjkuNDkyIDU3LjI4MzcgMjcuOTkzNCA1Ni4zODQ1QzI3LjA5NDIgNTUuODg1IDI1LjU5NTYgNTIuNzg3OCAyNS44OTUzIDUxLjc4ODhDMjYuMDk1MSA1MS4zODkxIDI2LjQ5NDcgNTEuMzg5MSAyNi44OTQ0IDUxLjM4OTFDMjkuMzkyMSA1MC45ODk1IDMxLjM5MDIgNDkuNzkwNiAzMy4yODg0IDQ4LjE5MjFDMzMuODg3OSA0Ny42OTI2IDM0LjM4NzQgNDcuNjkyNiAzNC44ODcgNDguMzkxOUMzNS42ODYyIDQ5LjU5MDggMzYuNjg1MyA1MC41ODk5IDM3Ljk4NDEgNTEuMjg5MkM0MC41ODE3IDUyLjc4NzggNDMuMDc5MyA1MS40ODkgNDMuMzc5MSA0OC40OTE4QzQzLjY3ODggNDUuOTk0MSA0Mi43Nzk2IDQzLjc5NjIgNDEuOTgwNCA0MS41OTgyQzQxLjA4MTIgMzkuNjAwMSAzOS45ODIyIDM3LjcwMTggMzguNzgzMyAzNS45MDM1WiIgZmlsbD0iIzI0QzJGRiIvPgo8cGF0aCBkPSJNMzUuNTg2NCAzNi41MDNDMzUuMTg2NyAzOC41MDExIDM0LjI4NzYgNDAuMzk5NCAzMy4wODg3IDQyLjA5NzhDMjkuNDkyIDQ3LjQ5MjggMjQuMjk2OCA0OS42OTA3IDE3LjkwMjggNDkuMDkxM0MxNS42MDQ5IDQ4Ljg5MTUgMTMuNzA2NyA0Ni45OTMyIDEzLjUwNjkgNDUuMDk1QzEzLjQwNyA0NC4yOTU3IDEzLjYwNjggNDMuNjk2MyAxNC4xMDYzIDQzLjA5NjhDMTQuODA1NyA0Mi4xOTc3IDE1LjQwNTEgNDEuMzk4NCAxNS43MDQ4IDQwLjI5OTRDMTYuMzA0MyAzOC4xMDE1IDE1LjUwNSAzNi4zMDMyIDEzLjkwNjUgMzQuNzA0NkMxMS43MDg1IDMyLjUwNjcgMTIuMDA4MyAzMC41MDg1IDE0LjYwNTggMjguOTFDMTQuOTA1NiAyOC43MTAyIDE1LjMwNTIgMjguNTEwNCAxNS43MDQ4IDI4LjMxMDZDMTYuMzA0MyAyOC4wMTA5IDE2LjgwMzggMjguMDEwOSAxNy4wMDM2IDI4LjcxMDJDMTcuOTAyOCAzMS4wMDgxIDE5LjcwMTEgMzIuNzA2NSAyMS42OTkzIDM0LjEwNTJDMjIuMzk4NiAzNC43MDQ2IDIyLjM5ODYgMzUuMTA0MyAyMS43OTkyIDM1LjgwMzZDMjAuNjAwMyAzNy4xMDI0IDE5LjkwMDkgMzguNzAwOSAxOS44MDEgNDAuNDk5M0MxOS42MDEyIDQyLjY5NzIgMjAuOSA0NC4wOTU5IDIzLjA5OCA0NC4wOTU5QzI0LjQ5NjcgNDQuMDk1OSAyNS43OTU1IDQzLjU5NjQgMjYuOTk0MyA0Mi45OTY5QzMwLjA5MTUgNDEuMzk4NCAzMi40ODkyIDM5LjEwMDYgMzQuNzg3MSAzNi43MDI4QzM1LjA4NjggMzYuNjAyOSAzNS4xODY3IDM2LjQwMzEgMzUuNTg2NCAzNi41MDNaIiBmaWxsPSIjMDA2OURBIi8+CjxwYXRoIGQ9Ik0xOS4yMDE2IDE1LjUyMjRDMTkuNDAxNCAxNS41MjI0IDE5LjkwMDkgMTUuNjIyNCAyMC40MDA0IDE1LjcyMjNDMjQuMDk3IDE2LjQyMTYgMjYuMzk0OSAxNS4xMjI4IDI3LjU5MzggMTEuNjI2MUMyOC4zOTMgOS4zMjgyIDMwLjA5MTQgOC42Mjg4NSAzMi4yODk0IDkuODI3NzNDMzIuMzg5MyA5LjgyNzczIDMyLjM4OTMgOS45Mjc2NCAzMi40ODkyIDkuOTI3NjRDMzQuNzg3MSAxMS4yMjY0IDM0Ljc4NzEgMTEuNDI2MiAzMy4zODg0IDEzLjQyNDRDMzIuMTg5NSAxNS4wMjI5IDMxLjU5IDE2LjgyMTIgMzEuMjkwMyAxOC43MTk1QzMxLjA5MDUgMTkuODE4NSAzMC42OTA5IDIwLjAxODMgMjkuNjkxOCAxOS42MTg2QzI4LjA5MzMgMTkuMDE5MiAyNi4zOTQ5IDE5LjAxOTIgMjQuNjk2NSAxOS42MTg2QzIyLjc5ODIgMjAuMjE4MSAyMS45OTkgMjEuOTE2NSAyMi41OTg0IDIzLjgxNDdDMjMuMzk3NyAyNi4zMTI0IDI1LjU5NTYgMjcuNDExNCAyNy40OTM5IDI4LjcxMDJDMjkuMzkyMSAzMC4wMDkgMzEuNTkgMzAuNzA4MyAzMy42ODgxIDMxLjYwNzVDMzMuOTg3OCAzMS43MDc0IDM0LjQ4NzQgMzEuNzA3NCAzNC4zODc0IDMyLjIwNjlDMzQuMjg3NSAzMi41MDY3IDMzLjg4NzkgMzIuNTA2NyAzMy40ODgzIDMyLjUwNjdDMjguOTkyNSAzMi43MDY1IDI0LjY5NjUgMzIuMDA3MSAyMS4xOTk3IDI5LjAwOTlDMTcuOTAyOCAyNi4zMTI0IDE1LjUwNSAyMy4wMTU1IDE1LjkwNDYgMTguNDE5OEMxNi4yMDQzIDE2LjkyMTEgMTcuMzAzMyAxNS44MjIyIDE5LjIwMTYgMTUuNTIyNFoiIGZpbGw9IiNGRjQ2NDkiLz4KPHBhdGggZD0iTTExLjAwOTIgNDMuNTk2NEM4LjYxMTM5IDQzLjg5NjEgNi4yMTM2MiA0MS44OTc5IDYuMDEzODEgMzkuNDAwM0M1LjgxMzk5IDM3LjAwMjUgNy44MTIxNCAzNC42MDQ3IDEwLjExIDM0LjQwNDlDMTIuNzA3NiAzNC4xMDUyIDE1LjEwNTQgMzUuOTAzNSAxNS4zMDUyIDM4LjMwMTNDMTUuNDA1MSA0MC41OTkyIDEzLjkwNjUgNDMuMzk2NiAxMS4wMDkyIDQzLjU5NjRaIiBmaWxsPSIjMDA2OURBIi8+CjxwYXRoIGQ9Ik01Mi45NzAyIDguMDI5MzhDNTUuNDY3OSA3LjgyOTU3IDU3Ljg2NTcgOS44Mjc3MSA1OC4wNjU1IDEyLjMyNTRDNTguMjY1MyAxNC43MjMyIDU2LjI2NzEgMTcuMDIxIDUzLjg2OTQgMTcuMjIwOEM1MS4yNzE4IDE3LjQyMDcgNDguOTczOSAxNS41MjI0IDQ4Ljc3NDEgMTMuMDI0N0M0OC41NzQzIDEwLjUyNzEgNTAuMzcyNiA4LjIyOTIgNTIuOTcwMiA4LjAyOTM4WiIgZmlsbD0iI0ZGQ0IxMiIvPgo8cGF0aCBkPSJNMjYuODk0NCA5LjkyNzYzQzI3LjE5NDEgMTIuNTI1MiAyNS4zOTU3IDE0LjcyMzIgMjIuNjk4MiAxNS4xMjI4QzIwLjQwMDQgMTUuNDIyNSAxOC4wMDI2IDEzLjUyNDMgMTcuNzAyOSAxMS4zMjYzQzE3LjQwMzIgOC40MjkwMiAxOS4wMDE3IDYuMzMwOTcgMjEuNjk5MiA2LjAzMTI1QzI0LjE5NjkgNS43MzE1MyAyNi41OTQ2IDcuNjI5NzYgMjYuODk0NCA5LjkyNzYzWiIgZmlsbD0iI0ZGNDY0OSIvPgo8L3N2Zz4K");
		  --probe-os-arch: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI5NnB4IiBoZWlnaHQ9Ijk2cHgiIGJhc2VQcm9maWxlPSJiYXNpYyI+PHBhdGggZmlsbD0iIzFlODhlNSIgZD0iTTI4LjQ2NSwzOC42MTFjMC40MTktMS4xMDUsMC42NjQtMi4zNjUsMC42NjQtMy43MTRjMC00LjEzMy0yLjIxMS03LjQ5NC00LjkyOS03LjQ5NAljLTIuNzQxLDAtNC45NTEsMy4zNjEtNC45NTEsNy40OTRjMCwxLjMyNiwwLjIyMSwyLjU4NiwwLjY0MSwzLjY2OWMtOS4wNDEsMC45NTEtMTUuNDA3LDQuNzMxLTE3Ljk5Myw2LjQzMgljNC4zNTUtNi4yNzgsOC45MDktMTMuNjM4LDEzLjI2Mi0yMi4xMDVjMS4wODMtMi4xMDEsMi4xMDEtNC4xNzgsMy4wNS02LjIxMWMwLjM3NSwwLjI0MywwLjc1MSwwLjUwOSwxLjE3MSwwLjc3NQljMS45NDUsMS4yMTUsMy43NTksMS44NzksNS4wODQsMi4yMzNjLTAuOTczLTAuNzMtMi4wMzMtMS42MTMtMy4xMTYtMi42OTdjLTAuODE3LTAuODE3LTEuNTQ3LTEuNjM3LTIuMTY3LTIuNDMzCUMyMS4wMTYsMTAuNTM4LDIyLjYwOCw2LjY2OSwyNCwzYzIuMzIsNi4xNDQsNS4yMTcsMTIuODQyLDguODQxLDE5Ljg5M2MyLjM0Myw0LjUzMSw0LjczMSw4Ljc1NCw3LjExNywxMi42NDQJYy0wLjY4NS0wLjM3NS0xLjQzNy0wLjczLTIuMjMzLTEuMDM5Yy0xLjM3MS0wLjUzLTIuNjUyLTAuODYyLTMuNzU5LTEuMDZjMS41MDMsMC43NTEsMy4yNSwxLjc0Nyw1LjA4NCwzLjA3MwljMS4xOTQsMC44ODUsMi4yNTQsMS43NjksMy4xNjEsMi42MzFjMC4wMjEsMC4wMjEsMC4wMjEsMC4wMjEsMC4wNDUsMC4wNDVjMS4yNiwyLjA1NiwyLjU2NSwzLjk1NywzLjg0Niw1LjgxMwlDNDMuNTYxLDQzLjMxOSwzNy4zMDYsMzkuNjA1LDI4LjQ2NSwzOC42MTF6Ii8+PC9zdmc+");
		  --probe-os-centos: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC44MTc5IDMzLjU5ODZMMzMuMTk3NCAzNS45NjQxTDMwLjgxNzkgMzguMzI5NkgxNC4wNzA1VjQ2LjIxMTZMMy44NTcxMiAzNS45NjQxTDE0LjA3MDUgMjUuODg5M1YzMy41OTg2TDMwLjgxNzkgMzMuNTk4NloiIGZpbGw9IiM5MzIyNzkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC40MDE1IDMwLjgxODFMMzYuMDM2IDMzLjE5NzVMMzMuNjcwNSAzMC44MTgxVjE0LjA3MDZIMjUuNzg4NkwzNi4wMzYgMy44NTcxNUw0Ni4xMTA4IDE0LjA3MDZIMzguNDAxNUwzOC40MDE1IDMwLjgxODFaIiBmaWxsPSIjRUZBNzI0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMTgyIDM4LjQwMDJMMzguODAyNiAzNi4wMzQ2TDQxLjE4MiAzMy42NjkxSDU3LjkyOTVWMjUuNzg3Mkw2OC4xNDI4IDM2LjAzNDZMNTcuOTI5NSA0Ni4xMDk0VjM4LjQwMDJMNDEuMTgyIDM4LjQwMDJaIiBmaWxsPSIjMjYyNTc3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuNTk3MiA0MS4xODA3TDM1Ljk2MjggMzguODAxMkwzOC4zMjgzIDQxLjE4MDdWNTcuOTI4Mkg0Ni4yMTAyTDM1Ljk2MjggNjguMTQxNkwyNS44ODggNTcuOTI4MkgzMy41OTcyTDMzLjU5NzIgNDEuMTgwN1oiIGZpbGw9IiM5Q0NEMkEiLz4KPHBhdGggZD0iTTEzLjQ3MDggMTMuNDcyM0gzMy44MlYzMy44MjE3SDEzLjQ3MDhWMTMuNDcyM1oiIGZpbGw9IiM5Q0NEMkEiIHN0cm9rZT0id2hpdGUiLz4KPHBhdGggZD0iTTM4LjE4MDQgMTMuNDcyM0g1OC41Mjk2VjMzLjgyMTZIMzguMTgwNFYxMy40NzIzWiIgZmlsbD0iIzkzMjI3OSIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzguMTgwNSAzOC4xODQ2SDU4LjUyOTdWNTguNTMzOUgzOC4xODA1VjM4LjE4NDZaIiBmaWxsPSIjRUZBNzI0IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMy40NzA4IDM4LjE4NDZIMzMuODJWNTguNTMzOUgxMy40NzA4VjM4LjE4NDZaIiBmaWxsPSIjMjYyNTc3IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik00LjEzNzc2IDM2TDE4LjUyNjggMjEuNjEwOUwzMi45MTU5IDM2TDE4LjUyNjggNTAuMzg5Mkw0LjEzNzc2IDM2WiIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjEuNjEwOCAxOC41MjQ4TDM1Ljk5OTkgNC4xMzU2OEw1MC4zODkgMTguNTI0OEwzNS45OTk5IDMyLjkxMzlMMjEuNjEwOCAxOC41MjQ4WiIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzkuMDgyMyAzNS45OTY0TDUzLjQ3MTQgMjEuNjA3Mkw2Ny44NjA1IDM1Ljk5NjRMNTMuNDcxNCA1MC4zODU1TDM5LjA4MjMgMzUuOTk2NFoiIHN0cm9rZT0id2hpdGUiLz4KPHBhdGggZD0iTTIxLjYxMDcgNTMuNDc0TDM1Ljk5OTggMzkuMDg0OEw1MC4zODg5IDUzLjQ3NEwzNS45OTk4IDY3Ljg2MzFMMjEuNjEwNyA1My40NzRaIiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo=");
		  --probe-os-debian: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM5Ljg2NTYgMzYuNTMxMkMzOC44MDA0IDM2LjU0NiA0MC4wNjcyIDM3LjA4MDEgNDEuNDU3OCAzNy4yOTQxQzQxLjg0MTkgMzYuOTk0MiA0Mi4xOTA1IDM2LjY5MDcgNDIuNTAxMSAzNi4zOTU0QzQxLjYzNSAzNi42MDc3IDQwLjc1MzYgMzYuNjEyNCAzOS44NjU2IDM2LjUzMTJaIiBmaWxsPSIjQTgwMDMwIi8+CjxwYXRoIGQ9Ik00NS41ODE2IDM1LjEwNzRDNDYuMjE1OSAzNC4yMzE5IDQ2LjY3ODIgMzMuMjczNCA0Ni44NDEyIDMyLjI4MjNDNDYuNjk5IDMyLjk4ODggNDYuMzE1NSAzMy41OTg4IDQ1Ljk1NDUgMzQuMjQyNkM0My45NjMzIDM1LjQ5NjMgNDUuNzY3MSAzMy40OTggNDUuOTUzMyAzMi43Mzg3QzQzLjgxMjIgMzUuNDMzNCA0NS42NTkzIDM0LjM1NDYgNDUuNTgxNiAzNS4xMDc0WiIgZmlsbD0iI0E4MDAzMCIvPgo8cGF0aCBkPSJNNDcuNjkzNSAyOS42MTk3QzQ3LjgyMjIgMjcuNzAxNSA0Ny4zMTU5IDI4LjMwNzkgNDcuMTQ1OCAyOS4wNEM0Ny4zNDQ0IDI5LjE0MzEgNDcuNTAxNSAzMC4zOTIxIDQ3LjY5MzUgMjkuNjE5N1oiIGZpbGw9IiNBODAwMzAiLz4KPHBhdGggZD0iTTM1LjgyNjIgMy40MDI1N0MzNi4zOTQ3IDMuNTA0NTMgMzcuMDU0NSAzLjU4Mjc4IDM2Ljk2MiAzLjcxODUyQzM3LjU4MzggMy41ODIxOCAzNy43MjQ5IDMuNDU2NTEgMzUuODI2MiAzLjQwMjU3WiIgZmlsbD0iI0E4MDAzMCIvPgo8cGF0aCBkPSJNMzYuOTYwNSAzLjcyMDI4TDM2LjU1ODYgMy44MDMyN0wzNi45MzI2IDMuNzcwMDdMMzYuOTYwNSAzLjcyMDI4WiIgZmlsbD0iI0E4MDAzMCIvPgo8cGF0aCBkPSJNNTQuNjg2NiAzMC4zNDY0QzU0Ljc1IDMyLjA2OSA1NC4xODI3IDMyLjkwNDggNTMuNjcxMiAzNC4zODQ0TDUyLjc1MDYgMzQuODQ0NEM1MS45OTcyIDM2LjMwNzQgNTIuODIzNSAzNS43NzMzIDUyLjI4NDEgMzYuOTM2OUM1MS4xMDggMzcuOTgyNSA0OC43MTUgNDAuMjA5IDQ3Ljk0OTEgNDAuNDEyM0M0Ny4zOTAxIDQwLjM5OTkgNDguMzI3OSAzOS43NTI1IDQ4LjQ1MDYgMzkuNDk4OEM0Ni44NzYyIDQwLjU4MDEgNDcuMTg3NCA0MS4xMjE4IDQ0Ljc3OTYgNDEuNzc4Nkw0NC43MDkgNDEuNjIyMUMzOC43NzA2IDQ0LjQxNTkgMzAuNTIxNiAzOC44Nzk0IDMwLjYzMDEgMzEuMzI1MUMzMC41NjY3IDMxLjgwNDYgMzAuNDQ5OSAzMS42ODQ5IDMwLjMxODMgMzEuODc4N0MzMC4wMTE4IDI3Ljk5MTkgMzIuMTEzMiAyNC4wODc5IDM1LjY1NzQgMjIuNDk0QzM5LjEyMzkgMjAuNzc3OSA0My4xODggMjEuNDgyMSA0NS42NzExIDIzLjc5NjNDNDQuMzA3MSAyMi4wMDk3IDQxLjU5MjIgMjAuMTE1OCAzOC4zNzQ3IDIwLjI5M0MzNS4yMjI5IDIwLjM0MjggMzIuMjc0NCAyMi4zNDU4IDMxLjI5MDQgMjQuNTIwMUMyOS42NzU3IDI1LjUzNjcgMjkuNDg4NCAyOC40Mzg5IDI4Ljc4NDggMjguOTdDMjcuODM4MSAzNS45Mjc0IDMwLjU2NTUgMzguOTMzMyAzNS4xNzkgNDIuNDY5MkMzNS45MDUyIDQyLjk1ODkgMzUuMzgzNSA0My4wMzI5IDM1LjQ4MTkgNDMuNDA1OEMzMy45NDkgNDIuNjg4IDMyLjU0NTMgNDEuNjA0NCAzMS4zOTEyIDQwLjI3NzdDMzIuMDAzNSA0MS4xNzQgMzIuNjY0NSA0Mi4wNDU0IDMzLjUxODcgNDIuNzNDMzIuMDczNSA0Mi4yNDA0IDMwLjE0MjggMzkuMjI3OSAyOS41NzkxIDM5LjEwNTJDMzIuMDcwNSA0My41NjU5IDM5LjY4NzEgNDYuOTI4MSA0My42NzUyIDQ1LjI2QzQxLjgyOTkgNDUuMzI4MiAzOS40ODU1IDQ1LjI5NzkgMzcuNDEyIDQ0LjUzMTVDMzYuNTQxMiA0NC4wODMzIDM1LjM1NjkgNDMuMTU1MSAzNS41Njg1IDQyLjk4MTRDNDEuMDExMyA0NS4wMTQ2IDQ2LjYzMzggNDQuNTIxNCA1MS4zNDMzIDQwLjc0NkM1Mi41NDEzIDM5LjgxMyA1My44NTAyIDM4LjIyNTYgNTQuMjI4NCAzOC4yMDM2QzUzLjY1ODcgMzkuMDYwMiA1NC4zMjU2IDM4LjYxNTYgNTMuODg4MSAzOS4zNzJDNTUuMDgyIDM3LjQ0NjcgNTMuMzY5NCAzOC41ODgzIDU1LjEyMjMgMzYuMDQ3MUw1NS43Njk2IDM2LjkzODdDNTUuNTI4OSAzNS4zNDA1IDU3Ljc1NDIgMzMuMzk5OCA1Ny41MjgzIDMwLjg3MjJDNTguMDM4NyAzMC4wOTkyIDU4LjA5OCAzMS43MDM5IDU3LjU1NjIgMzMuNDgyMkM1OC4zMDc4IDMxLjUwOTQgNTcuNzU0MiAzMS4xOTIzIDU3Ljk0NzQgMjkuNTY0NkM1OC4xNTYxIDMwLjExMTcgNTguNDI5OSAzMC42OTMyIDU4LjU3MDQgMzEuMjcwNkM1OC4wODA4IDI5LjM2NDIgNTkuMDczMSAyOC4wNjAxIDU5LjMxODUgMjYuOTUyMkM1OS4wNzY3IDI2Ljg0NDkgNTguNTYyNyAyNy43OTUxIDU4LjQ0NTQgMjUuNTQzMkM1OC40NjI2IDI0LjU2NTEgNTguNzE3NCAyNS4wMzA0IDU4LjgxNTggMjQuNzg5OEM1OC42MjM4IDI0LjY3OTUgNTguMTE5OSAyMy45Mjk3IDU3LjgxMzUgMjIuNDkxNkM1OC4wMzU4IDIyLjE1MzcgNTguNDA3NCAyMy4zNjc3IDU4LjcwOTcgMjMuNDE3NUM1OC41MTUzIDIyLjI3NCA1OC4xODA0IDIxLjQwMjEgNTguMTY2OCAyMC41MjQ4QzU3LjI4MzUgMTguNjc4OSA1Ny44NTQ0IDIwLjc3MDggNTcuMTM3NyAxOS43MzIyQzU2LjE5NzYgMTYuNzk5OCA1Ny45MTc4IDE5LjA1MTcgNTguMDM0IDE3LjcxOTJDNTkuNDU5IDE5Ljc4MzggNjAuMjcxNyAyMi45ODM2IDYwLjY0NDUgMjQuMzA5QzYwLjM2IDIyLjY5MzEgNTkuOSAyMS4xMjc2IDU5LjMzODcgMTkuNjEzMUM1OS43NzE0IDE5Ljc5NTEgNTguNjQxNiAxNi4yODgyIDU5LjkwMTIgMTguNjEwN0M1OC41NTU2IDEzLjY1OTkgNTQuMTQyNCA5LjAzMzg2IDUwLjA4MjUgNi44NjMxM0M1MC41NzkzIDcuMzE3NzggNTEuMjA2NCA3Ljg4ODYyIDUwLjk4MTIgNy45NzgxM0M0OC45NjIyIDYuNzc1OTkgNDkuMzE3MiA2LjY4MjMzIDQ5LjAyOCA2LjE3NDMyQzQ3LjM4MyA1LjUwNTA4IDQ3LjI3NTIgNi4yMjgyNyA0Ni4xODU2IDYuMTc1NTFDNDMuMDg1NCA0LjUzMTE2IDQyLjQ4NzkgNC43MDYwMyAzOS42MzQ5IDMuNjc1NzlMMzkuNzY0NyA0LjI4MjE5QzM3LjcxMDggMy41OTgxMyAzNy4zNzE3IDQuNTQxODMgMzUuMTUxOCA0LjI4NDU2QzM1LjAxNjYgNC4xNzkwNSAzNS44NjMxIDMuOTAyODIgMzYuNTU5NiAzLjgwMTQ1QzM0LjU3MzggNC4wNjM0NiAzNC42NjY5IDMuNDEwMjIgMzIuNzIzOCAzLjg3Mzc3QzMzLjIwMjcgMy41Mzc2NyAzMy43MDg5IDMuMzE1MzggMzQuMjE5OSAzLjAyOTY2QzMyLjYwMDUgMy4xMjgwNiAzMC4zNTM5IDMuOTcyMTcgMzEuMDQ3NCAzLjIwNDUzQzI4LjQwNiA0LjM4Mjk2IDIzLjcxNDggNi4wMzczOSAyMS4wODIzIDguNTA1N0wyMC45OTkzIDcuOTUyNjRDMTkuNzkzIDkuNDAwNzkgMTUuNzM5IDEyLjI3NzUgMTUuNDE2IDE0LjE1M0wxNS4wOTM1IDE0LjIyODNDMTQuNDY1OCAxNS4yOTEyIDE0LjA1OTcgMTYuNDk1NyAxMy41NjE4IDE3LjU4OTRDMTIuNzQwOCAxOC45ODgzIDEyLjM1ODUgMTguMTI3NiAxMi40NzUyIDE4LjM0NjlDMTAuODYwNSAyMS42MjA4IDEwLjA1ODUgMjQuMzcxOSA5LjM2NTU0IDI2LjYyOEM5Ljg1OTMyIDI3LjM2NiA5LjM3NzM5IDMxLjA3MDggOS41NjQxMiAzNC4wMzU4QzguNzUzMjEgNDguNjc5NyAxOS44NDE2IDYyLjg5OCAzMS45NjIgNjYuMTgwN0MzMy43Mzg2IDY2LjgxNjIgMzYuMzgwNiA2Ni43OTE5IDM4LjYyNzggNjYuODU3MUMzNS45NzYzIDY2LjA5ODkgMzUuNjMzNyA2Ni40NTUyIDMzLjA1MSA2NS41NTQ4QzMxLjE4NzkgNjQuNjc3NSAzMC43Nzk1IDYzLjY3NTcgMjkuNDYgNjIuNTMwNEwyOS45ODIyIDYzLjQ1MzRDMjcuMzk0MSA2Mi41Mzc2IDI4LjQ3NzEgNjIuMzIgMjYuMzcxNiA2MS42NTMxTDI2LjkyOTQgNjAuOTI0NkMyNi4wOTA2IDYwLjg2MTIgMjQuNzA3NyA1OS41MTA5IDI0LjMyOTUgNTguNzYzNEwyMy40MTE5IDU4Ljc5OTVDMjIuMzA5MyA1Ny40MzkxIDIxLjcyMTkgNTYuNDU4NyAyMS43NjQ2IDU1LjY5OTNMMjEuNDY4MiA1Ni4yMjc1QzIxLjEzMjEgNTUuNjUwNyAxNy40MTE4IDUxLjEyNTUgMTkuMzQxOSA1Mi4xNzg4QzE4Ljk4MzMgNTEuODUxIDE4LjUwNjcgNTEuNjQ1NCAxNy45ODk4IDUwLjcwNjRMMTguMzgyOCA1MC4yNTcxQzE3LjQ1MzkgNDkuMDYyIDE2LjY3MzIgNDcuNTMwMyAxNi43MzI1IDQ3LjAxOTlDMTcuMjI4MSA0Ny42ODkyIDE3LjU3MTkgNDcuODE0MyAxNy45MTIxIDQ3LjkyODdDMTUuNTY2NSA0Mi4xMDg4IDE1LjQzNDkgNDcuNjA4IDEzLjY1ODQgNDIuMDA0NUwxNC4wMzQyIDQxLjk3NDNDMTMuNzQ2MSA0MS41NDAzIDEzLjU3MTMgNDEuMDY5MSAxMy4zMzk1IDQwLjYwNjdMMTMuNTAzMSAzOC45NzY2QzExLjgxNDMgMzcuMDI0IDEzLjAzMDcgMzAuNjc0MiAxMy4yNzQzIDI3LjE5MTdDMTMuNDQzMiAyNS43NzU2IDE0LjY4MzkgMjQuMjY4MSAxNS42Mjc2IDIxLjkwNDFMMTUuMDUyNiAyMS44MDUyQzE2LjE1MTYgMTkuODg4MSAyMS4zMjc3IDE0LjEwNjIgMjMuNzI0OSAxNC40MDM4QzI0Ljg4NjEgMTIuOTQ1IDIzLjQ5NDMgMTQuMzk4NSAyMy4yNjczIDE0LjAzMDlDMjUuODE4IDExLjM5MTMgMjYuNjIgMTIuMTY2MSAyOC4zNDE0IDExLjY5MTNDMzAuMTk4IDEwLjU4OTMgMjYuNzQ4IDEyLjEyMSAyNy42MjgzIDExLjI3MUMzMC44Mzc2IDEwLjQ1MTIgMjkuOTAyOCA5LjQwNzMxIDM0LjA4OTUgOC45OTExOEMzNC41MzExIDkuMjQyNTIgMzMuMDY0NiA5LjM3OTQ1IDMyLjY5NjUgOS43MDU0N0MzNS4zNzA1IDguMzk3MjIgNDEuMTU4MyA4LjY5NDggNDQuOTE3NyAxMC40MzE2QzQ5LjI3OTkgMTIuNDcwMiA1NC4xODEgMTguNDk2MyA1NC4zNzQyIDI0LjE2NjJMNTQuNTk0MSAyNC4yMjU0QzU0LjQ4MjcgMjYuNDc5MiA1NC45MzkxIDI5LjA4NTYgNTQuMTQ4MyAzMS40Nzk4TDU0LjY4NjYgMzAuMzQ2NFoiIGZpbGw9IiNBODAwMzAiLz4KPHBhdGggZD0iTTI4LjIzNzMgMzcuOTk2NEwyOC4wODggMzguNzQzMkMyOC43ODggMzkuNjk0IDI5LjM0MzQgNDAuNzI0MyAzMC4yMzczIDQxLjQ2NzZDMjkuNTk0MiA0MC4yMTIxIDI5LjExNjQgMzkuNjkzNSAyOC4yMzczIDM3Ljk5NjRaIiBmaWxsPSIjQTgwMDMwIi8+CjxwYXRoIGQ9Ik0yOS44OTQ3IDM3LjkzNTRDMjkuNTI0MiAzNy41MjU4IDI5LjMwNDkgMzcuMDMyNiAyOS4wNTk0IDM2LjU0MTJDMjkuMjk0MiAzNy40MDQ5IDI5Ljc3NDkgMzguMTQ3IDMwLjIyMjUgMzguOTAxNkwyOS44OTQ3IDM3LjkzNTRaIiBmaWxsPSIjQTgwMDMwIi8+CjxwYXRoIGQ9Ik01OS4xNzg5IDMxLjU3MjhMNTkuMDIyNCAzMS45NjUyQzU4LjczNTUgMzQuMDAzMiA1OC4xMTYxIDM2LjAxOTggNTcuMTY2NCAzNy44ODk0QzU4LjIxNTcgMzUuOTE2NiA1OC44OTQ0IDMzLjc1ODkgNTkuMTc4OSAzMS41NzI4WiIgZmlsbD0iI0E4MDAzMCIvPgo8cGF0aCBkPSJNMzYuMDM2MSAyLjg4OTc0QzM2Ljc1NjMgMi42MjU5NiAzNy44MDY3IDIuNzQ1MTEgMzguNTcwOCAyLjU3MTQzQzM3LjU3NDkgMi42NTUwMSAzNi41ODM4IDIuNzA0OCAzNS42MDUxIDIuODMxMDZMMzYuMDM2MSAyLjg4OTc0WiIgZmlsbD0iI0E4MDAzMCIvPgo8cGF0aCBkPSJNMTAuNzUwMyAxNi4zMzAxQzEwLjkxNjMgMTcuODY2NiA5LjU5NDM4IDE4LjQ2MjkgMTEuMDQzMSAxNy40NDk4QzExLjgxOTcgMTUuNzAwNiAxMC43Mzk2IDE2Ljk2NjcgMTAuNzUwMyAxNi4zMzAxWiIgZmlsbD0iI0E4MDAzMCIvPgo8cGF0aCBkPSJNOS4wNDg2NyAyMy40NDY3QzkuMzgyNCAyMi40MjI0IDkuNDQyODcgMjEuODA3MSA5LjU3MDMxIDIxLjIxNDNDOC42NDc5NiAyMi4zOTMzIDkuMTQ1ODkgMjIuNjQ0NyA5LjA0ODY3IDIzLjQ0NjdaIiBmaWxsPSIjQTgwMDMwIi8+Cjwvc3ZnPgo=");
		  --probe-os-fedora: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB3aWR0aD0iNTEyLjA0MSIKICAgaGVpZ2h0PSI1MDIuNDM5IgogICB2aWV3Qm94PSIwIDAgMTM1LjQ3NzUyIDEzMi45MzY5OSIKICAgdmVyc2lvbj0iMS4xIj4KICA8Zz4KICAgIDxwYXRoCiAgICAgICBmaWxsPSIjNTFBMkRBIgogICAgICAgZD0iTSA2Ny43NzQ4MywwIEMgMzAuMzY2NjUsMCAwLjA3ODc4LDI5LjczMjAwMiAwLjAxMjYsNjYuNDM4NzUyIEggMCB2IDUxLjQzMDQ3OCBoIDAuMDEyNiBjIDAuMDE3NCw4LjMyNDcgNi45MDE5NCwxNS4wNjc4MiAxNS4zOTIwOSwxNS4wNjc4MiBoIDUyLjM3Njc2IGMgMzcuNDE0ODEsLTAuMDIzOCA2Ny42OTYwNiwtMjkuNzUxODcgNjcuNjk2MDYsLTY2LjQzODczOSA1ZS01LC0zNi43MDY3NSAtMzAuMzIwOTUsLTY2LjQzODc1NSAtNjcuNzYyMjQsLTY2LjQzODc1NSB6IiAvPgogICAgPHBhdGgKICAgICAgIGZpbGw9IiNGRkZGRkYiCiAgICAgICBkPSJtIDgxLjU0NjI5LDI3LjMzNzg3NyBjIC0xMC41Njc5OSwwIC0xOS45MDMyNCw3LjgwMTU2MiAtMjEuMTk1NjEsMTguMDM4Njk0IC0wLjA4NjgsMC44NTY5NDggLTAuMTExNzksMS40NzQ2NTIgLTAuMTE2NzksMi4yNTE1NCBsIDAuMDEyNCw0MS44NTQ4MTIgYyAwLDguMDI4OSAtNi4xMjc4MiwxMy40OTMyMjcgLTEzLjc4NDE4LDEzLjQ5MzIyNyAtNy42NjY5MSwwIC0xMy44NDM2LC02LjAwODYzNyAtMTMuODQzNiwtMTMuNTA2MTQ3IDAuMTI1NzQsLTguMjMwNzI4IDYuODQyNjcsLTEzLjQ1MDg2NyAxNC42Nzc2NiwtMTMuNjc4MjM3IGggMC4wNDE5IGwgNy45NTQwNCwtMC4wNzE4MyBWIDY0LjY2ODkzMSBsIC03Ljk1NDA0LDAuMDU4OTEgYyAtMTQuMjYwNSwtMC4xMjU3NCAtMjUuNTc5NzgsMTAuODI1ODggLTI1Ljk5MzI0LDI0Ljc0ODg3MiAwLDEzLjUzOTIwNyAxMS4zNDIzNiwyNC41NzY3OTcgMjUuMTEzMTksMjQuNTc2Nzk3IDEyLjk4OTk2LDAgMjMuODAwMzUsLTkuOTUyNDMgMjQuOTgwOSwtMjIuNDA2Mzg3IDAuMTcwMiwtNC4yMzkxMDcgMC4wODczLC05LjgzMzUwMyAwLjA4NzMsLTkuODMzNTAzIDAuMDIzOCwtMi4zMDM1MTEgLTAuMDM2NSwtMS40NzYzMjggLTAuMDEyNCwtNi4wNTAyNzggbCA5Ljg2NjU5LC0wLjA3MTgzIGMgNy42MzQ0LDAuMDUyOTUgNy41NDg2MywtMTEuMjI1ODAyIC0wLjA4NzksLTExLjA3MDY0MyBsIC05Ljc4MDgsMC4wNzEzMSBjIDAsLTUuNjc3NzM5IDAuMDkxMSwtMTEuMzIwMzc1IDAsLTE3LjAwNjcxMyAwLjAwNywtNC45MTgwNTYgNC43NTYzLC05LjI2NDAzMyAxMC4wMjU3NCwtOS4yNjQwMzMgNS4yNzA3NywwIDEwLjg0NTg1LDIuNTgwNDU3IDEwLjg0NTg1LDkuMjY0MDMzIDAsMC45NTQ4ODkgLTAuMDE5NSwxLjUxMDcyMyAtMC4wNzM0LDEuODY0NDg0IC0wLjU4ODI5LDMuMDk5NTk0IDEuNTcwNjYsNi4wNjE5NjIgNC43NTE2NSw2LjUwOTE2NiAzLjE4MDk4LDAuNDQyMDM5IDYuMTAyMDEsLTEuODExMTQyIDYuNDE3MTgsLTQuOTQ2NDcgMC4xODI2MSwtMS4yMzk0NDEgMC4xNzU3LC0yLjMzMjk0NSAwLjE3NTcsLTMuNDI2MTQ4IDAsLTExLjc4NTU5MiAtMTAuNzQwMTMsLTIwLjMyODk5IC0yMi4xMTU0NSwtMjAuMzI4OTkgeiIgLz4KICA8L2c+Cjwvc3ZnPgo=");
		  --probe-os-freebsd: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+Cjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIC0yIDI1NiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgoJPGcgZmlsbD0iI0I1MDEwRiI+CgkJPHBhdGggZD0iTTI1Mi43MjI5NjMsNS4xMDkyMzk3NiBDMjY2LjIzMDcyMSwxOC42MTA2NzkzIDIyOC43ODQyODUsNzcuOTU4MjU2MiAyMjIuNDUzNzA5LDg0LjI5MTk5MTkgQzIxNi4xMjMxMzIsOTAuNjEzMDkxNyAyMDAuMDQzOTczLDg0Ljc5NzQyNzIgMTg2LjU0MjUzMyw3MS4yOTI4Mjg3IEMxNzMuMDM0Nzc2LDU3Ljc5MTM4OTIgMTY3LjIxNTk1Miw0MS43MDkwNzA5IDE3My41NDY1MjksMzUuMzc4NDk0MiBDMTc5Ljg3Mzk0NywyOS4wNDQ3NTg1IDIzOS4yMTgzNjUsLTguMzk4NTE3NjkgMjUyLjcyMjk2Myw1LjEwOTIzOTc2Ij4KDTwvcGF0aD4KCQk8cGF0aCBkPSJNNjMuMzA0Nzc5NywxOS4zOTQxMDM5IEM0Mi42ODMwMjA5LDcuNjkzMjc3NTUgMTMuMzM5MzQ0OCwtNS4zMjE2ODA1MiA0LjAwNDU4NzI5LDQuMDEzMDc3MDMgQy01LjQ1MzM3MDEsMTMuNDY3ODc1NCA4LjAzODU5MjUsNDMuNDcxNzc2MyAxOS44NjI2MTg3LDY0LjEzMTQ0MjggQzMwLjM4NTE0OTEsNDUuODM3ODQ1MiA0NS4zNTIzNTA5LDMwLjQzNzg2NDUgNjMuMzA0Nzc5NywxOS4zOTQxMDM5Ij4KDTwvcGF0aD4KCQk8cGF0aCBkPSJNMjMyLjEyMzMxNyw3OS42MzU2Njk1IEMyMzQuMDIxODU4LDg2LjA3NjgxMDIgMjMzLjY4MDY4OSw5MS4zOTY1MTYzIDIzMC42MDA2OTMsOTQuNDcwMTk0NSBDMjIzLjQwNzcxOCwxMDEuNjY2MzI5IDIwMy45NzY4OTEsOTQuMDA1ODI1OSAxODYuNDYwNCw3Ny4zMzU5MzkxIEMxODUuMjM3ODc4LDc2LjIzOTc3NjMgMTg0LjAyNDgzNCw3NS4xMDI1NDcgMTgyLjgzMzkwMiw3My45MDg0NTYyIEMxNzYuNTAwMTY2LDY3LjU3MTU2MTYgMTcxLjU3MjE3Miw2MC44MjcxNTk3IDE2OC40MTk1Miw1NC42MTY2MjM5IEMxNjIuMjg0Nzk5LDQzLjYxMDc3MSAxNjAuNzQ5NTQsMzMuODkwNjE5MSAxNjUuMzg2OTA4LDI5LjI1MzI1MDYgQzE2Ny45MTQwODUsMjYuNzI5MjMzMiAxNzEuOTU3NTY3LDI2LjA0MDU3NzcgMTc2Ljg4ODcyLDI2LjkyODI0ODMgQzE4MC4xMDQ1NTEsMjQuODkzODcxNCAxODMuOTAxNjM0LDIyLjYyODg4OTYgMTg4LjA2NTE1NywyMC4zMDcwNDY0IEMxNzEuMTM2MjM0LDExLjQ3NzcyNDEgMTUxLjg4ODYyOCw2LjQ4OTcwOTgyIDEzMS40NzIyMDIsNi40ODk3MDk4MiBDNjMuNzUzMzUzNSw2LjQ4OTcwOTgyIDguODUzNjA2ODYsNjEuMzc5OTc5NiA4Ljg1MzYwNjg2LDEyOS4xMDUxNDYgQzguODUzNjA2ODYsMTk2LjgxNzY3NyA2My43NTMzNTM1LDI1MS43MTQyNjQgMTMxLjQ3MjIwMiwyNTEuNzE0MjY0IEMxOTkuMTkxMDUxLDI1MS43MTQyNjQgMjU0LjA4NzYzOCwxOTYuODE3Njc3IDI1NC4wODc2MzgsMTI5LjEwNTE0NiBDMjU0LjA4NzYzOCwxMDcuMjM1NTk0IDI0OC4zNDc3ODksODYuNzI3NTU4MSAyMzguMzIxMjE3LDY4Ljk0ODg3MjcgQzIzNi4xNTQxNjMsNzIuOTAzOTAzNiAyMzQuMDQ3MTMsNzYuNTI3MjQyNiAyMzIuMTIzMzE3LDc5LjYzNTY2OTUiPgoNPC9wYXRoPgoJPC9nPgo8L3N2Zz4=");
		  --probe-os-gentoo: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTk0LjciIGhlaWdodD0iNjIyLjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+Cjx0aXRsZT5HZW50b28gTGludXggbG9nbyAobWF0dGUpPC90aXRsZT4KIDxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0idmxwYSI+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmYiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojZmZmIiBvZmZzZXQ9Ii4zNDIxIi8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiZWJkZjMiIG9mZnNldD0iLjUyIi8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM4ZjgyZjkiIG9mZnNldD0iLjc1NDEiLz4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzlmOTljNyIgb2Zmc2V0PSIuODcxMSIvPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojNTI0Yzc2IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0idmxwZSIgeDE9IjQ2NCIgeDI9IjM2OC42IiB5MT0iNjk3LjQiIHkyPSIyNjkuNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjIzNyAwIDAgMS4yMzcgLTE2MS4xIC0zNzcuMykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjdmxwYSIvPgogIDxsaW5lYXJHcmFkaWVudCBpZD0idmxwZCIgeDE9Ijc4My45IiB4Mj0iMTEwMCIgeTE9Ii0zMTMuNSIgeTI9IjEzNDEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4yMzcgMCAwIDEuMjM3IC0xMDM3IC0xMDEwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiN2bHBhIi8+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJ2bHBjIiBjeD0iMzMyLjciIGN5PSI1OTAuNiIgcj0iMjE4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0uMDY2MDQgNC4xOSAtMy41NzQgLS4wNTYyNyAyMTY4IC0xMTcxKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiN2bHBhIi8+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJ2bHBiIiBjeD0iNDkuNTMiIGN5PSIzMjAuMSIgcj0iMzEuOTUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMy4yODcgMCAwIDIuNTIgMTExLjcgLTY0Mi43KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiN2bHBhIi8+CiA8L2RlZnM+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUuNjkgLTI1LjUyKSI+CiAgPHBhdGggZD0ibTI1Ljc2IDUyMS45YzAuMDY4MTgtMjYuMjYgMjIuMzktNjIuOTIgNTQuMTEtOTYuMjMgMjEuMi0yMi4yNiA0Mi43My00MS44IDg5LjY2LTgxLjgxLTMyLjQ2LTE3LjgxLTgyLjk1LTM5LjMtMTA4LjMtNjcuNDUtOS4zNzQtMTAuNDEtMjYuMzYtMzQuMDEtMjMuMDctNjUuNTMgNi43MTYtNjQuMjUgODYuMDEtMTYxLjcgMTk4LjctMTgyLjQgMzcuNS02Ljg1OSA4MC41Ni0xLjkwOCAxMTYgMTQuMDIgMTExLjIgNDkuOTggMjQ3LjEgMTc0LjIgMjYzLjkgMjM0LjggNS44ODggMjEuMzQgNC43NTcgNTUuMzYtNS4zOTUgNzQuMzItMTIuNTggMjMuNS01Ni4xNCA3MS4yMi0xMTUuNyAxMjAuNS05My41IDc3LjI3LTIyNC41IDE2MC4yLTMyMi40IDE3NC4yLTMxLjYxIDQuNTExLTYzLjkxLTAuMTk0LTg2LjU3LTEyLjk4LTM1LjQ2LTIwLjAxLTQ3LjIzLTQ2LjcyLTUxLjM3LTU0LjczLTExLTIxLjI5LTkuNjM3LTQ4LjI3LTkuNjEzLTU2Ljczem0yNjMuMS0yOTVjMS4yMDctMTQuODkgNTkuNTktMC4wNjU3NyA1NS45IDExLjczLTMuODkyIDEyLjQ0LTU3LjI5IDUuMzU1LTU1LjktMTEuNzN6IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDp1cmwoI3ZscGQpIi8+CiAgPHBhdGggZD0ibTIwMS4xIDMxOS4zYy0zMC43MiAyNS45NC01MS4xNSA0My40My03Ni43NiA2Ni44NC02MS42OCA1Ni4zNy0xMDMuNiA5OS4yOC04MS45OCAxNTcuOSAyNC45MiA2Ny42NiA3OS41NiA2NC4yMyAxNDMuNiA1MS42NSAxNjUuMS0zMi41NyA0MzYuNi0yNDEuMyA0MjIuOC0zMTguMy0xMS4yLTYyLjM3LTE2Mi45LTE4Ni40LTI1Mi42LTIzMC41LTI4LjA1LTEzLjc5LTYwLjM4LTIwLjkxLTkyLjgxLTE5LjM5LTEyMy41IDUuODI4LTIxOS45IDExOC4yLTIxNSAxNzkuMiA0Ljc5MiA1OS4yNiAxNTQuNiAxMTAuOSAxNTIuOCAxMTIuN3ptLTE4LjUzLTIwNi45Yy0zNy4xNSA0MS4zNC0xMy40IDEyMS4zIDQ4LjIxIDE2NC45IDcyLjEgNTEuMDEgMTg4LjggNjAuMjQgMjEyLjEgMjAuOTEgNDMuMzQtNzMuMzctMy45OC0xNTEtNzQuNjEtMTg1LjYtNjkuOC0zNC4yLTE2Mi41LTI2LjAxLTE4NS43LTAuMjQ1eiIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCN2bHBlKSIvPgogIDxwYXRoIGQ9Im0zMDkuMyAyNzUuNmM1Mi4xNiA3LjI1IDk3LjEyLTEzLjY0IDEwNC4xLTY1LjE0IDUuMzU1LTM5LjIzLTU0LjY5LTgyLjEtOTAuNzktOTEuOTktMzAuMTUtOC4yNTYtOTUuNiAyLjM2LTEwMCA1OS4zOC00LjU4NyA1OS4yNyA1Ni4yNCA5My41MyA4Ni42NSA5Ny43NXptLTI1LjU0LTk4LjU4Yy0zNC4yOCA1My4xIDQ5Ljc3IDY5LjQzIDYyLjY0IDU5Ljc1IDU1LjQ4LTQxLjc1LTQ3LjU0LTgzLjE0LTYyLjY0LTU5Ljc1eiIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCN2bHBiKSIvPgogIDxwYXRoIGQ9Im0yNTMuNCA0MS41N2MtNjAuNjMgNi4zOS03Mi4yNSAxNC4xOS0xMjcuMiA1NS43NS0xOC40MSAxMy45My01Mi4yOSA0Ny44Mi02MC45OCA4OC4wMy0zLjMwNyAxNS4zMSAwLjYwMTkgMjguNTMgMTEuNjMgMzcuOCAzNS4zMSAyOS42OSA5NC40MiA1My43NyAxNDIuOSA3Ny4wNiAxNC4yIDYuODIgNC43OTkgMTkuMTktMTguMSAzOS4wMS01Ny43OSA1MC4wMy0xMzUuOSAxMTAuOS0xNDEuNCAxNTcuMy0yLjU3IDIxLjg3IDQuOTE2IDUxLjU4IDMxLjQ2IDY2Ljc5IDMxLjAxIDE3Ljc2IDk1LjM3IDYuMTcgMTM4LjQtOS44MzUgNjIuODEtMjMuMzkgMTQ1LjMtNzUgMjEwLjgtMTI1LjcgNjguMTEtNTIuNzYgMTMxLjQtMTE5LjggMTM0LjYtMTMwLjcgMy44NDctMTMuNDIgMy40NjMtMjUuODItMy45Ni00MC4wNy0xMS42Ni0yMi4zOC0yNy4yNC0zOS4wMS00My45OC01Ny42My00NC45LTQ3LjM0LTkyLjQxLTg4LjkzLTE0OS4zLTEyMC44LTQxLjA1LTIzLjAyLTc3LjE2LTQyLjAzLTEyNC45LTM3em04OS4wNyAxMDYuMWM0My44MSAyMS4xOCA4OC43OSA3Ni44MS0wLjM5MDQgMTA4LjgtMjQuMjUgOC43MDYtMTAxLjItMjEuMzgtOTguOC02Mi40NCAzLjQzMy02MC42NiA0NS43MS03Mi4yNCA5OS4xOS00Ni4zOHoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjdmxwYykiLz4KIDwvZz4KPC9zdmc+Cg==");
		  --probe-os-huawei: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzQuNjQ2IiBoZWlnaHQ9IjEzNi45MjEiIHZpZXdCb3g9IjAgMCAzNS42MjUgMzYuMjI3Ij48ZGVmcz48cGF0aCBpZD0iYiIgZD0iTS0xMTY3LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2N3oiLz48cGF0aCBpZD0iYyIgZD0iTS0xMTY2LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2NnoiLz48cGF0aCBpZD0iZCIgZD0iTS0xMTY3LTE4Ny43aDI1NTkuOXY2MDkuMUgtMTE2N3oiLz48cGF0aCBpZD0iZSIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0iZiIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0iZyIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0iaCIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0iaSIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0iaiIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0iayIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0ibCIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0ibSIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0ibiIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0ibyIgZD0iTS0xMTY4LTE4OC43aDI1NTkuOXY2MDkuMUgtMTE2OHoiLz48cGF0aCBpZD0icCIgZD0iTS0xMTM0LTE4OS43aDI1NTkuOXY2MDkuMUgtMTEzNHoiLz48cGF0aCBpZD0icSIgZD0iTS0xMTM0LTE4OS43aDI1NTkuOXY2MDkuMUgtMTEzNHoiLz48Y2xpcFBhdGggaWQ9ImEiIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjIuMTQyIDE0LjY0OXMtNS41MzQtMi45NTktOC4zOTUtNC44ODN2LS4wMDFsLS4wMzMtLjA5NC4wNjctLjA0OHYtLjAwMWMxLjAyNC0uMDAyIDQuOTAyLS4wMDYgNSAuMDEyIDAgMCAuNTAxLjAxOSAxLjEyMS4yNTYgMCAwIDEuMzc5LjQzNyAyLjA5NCAxLjk5OSAwIDAgLjY0IDEuMjczLjE0NiAyLjc2Ii8+PC9jbGlwUGF0aD48L2RlZnM+PHBhdGggZD0iTTMyLjAwOCAxNTIuMTMzdjMuMzg2YzAgLjk2Mi0uNDc3IDEuNDc1LTEuMzQ0IDEuNDc1LS44NzIgMC0xLjM1Mi0uNTI4LTEuMzUyLTEuNTE2di0zLjM0aC0xLjJ2My4zODFjMCAxLjY2NC45MjQgMi42MTggMi41MzYgMi42MTggMS42MjcgMCAyLjU2LS45NzIgMi41Ni0yLjY2N3YtMy4zMzd6bTQuNDE0IDAtMi42MDYgNS45MTFoMS4yMjVsLjUwMy0xLjE0NC4wMzYtLjA4NmgyLjcwNmwuNTMxIDEuMjNoMS4yNThsLTIuNTgxLTUuODc2LS4wMjMtLjAzNXptNy4xMzMgMC0xLjM0MyA0LjA2OC0xLjMwNy00LjA2NWgtMS4yNzdsMi4wNjEgNS45MTJoLjk5NGwxLjM0NS0zLjg4MyAxLjM0NCAzLjg4M2gxLjAwMmwyLjA1Ni01LjkxMmgtMS4yNDRsLTEuMzEgNC4wNjUtMS4zNDMtNC4wNjh6bTExLjc0IDB2NS45MDZoMS4xODN2LTUuOTA2em0tMzMuOTU2IDB2NS45MTVoMS4ydi0yLjQwMmgyLjcxdjIuNDAyaDEuMnYtNS45MTRoLTEuMnYyLjM4NmgtMi43MXYtMi4zODZ6bTI4LjA1OC4wMDV2NS45MDZoNC40Njd2LTEuMDc3SDUwLjU4di0xLjQ2NWgyLjE4M3YtMS4wNzdINTAuNTh2LTEuMjFoMy4xNjh2LTEuMDc3ek0zNi45MyAxNTMuNjNsLjg1NiAxLjk4aC0uMDAzbC4wNTguMTM3aC0xLjgxNWwuMDU3LS4xMzd6IiBzdHlsZT0iZmlsbDojMjMyNTI3O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDouNjEwMjAwMzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMS4wNyAtMTIxLjkxKSIvPjxwYXRoIGQ9Ik0zNi4yODIgMTIxLjkxYy0uNDc2LjA0Mi0xLjc2Mi4zMzQtMS43NjIuMzM0LTIuOS43NS0zLjU4NSAzLjM4LTMuNTg1IDMuMzhhNSA1IDAgMCAwLS4yMjUgMS4zMjN2LjU4MmE3IDcgMCAwIDAgLjIzOCAxLjU2OWMuOTY5IDQuMjk0IDUuNzMgMTEuMzUgNi43NTMgMTIuODMxLjA3My4wNzIuMTMxLjA0Ni4xMzEuMDQ2LjExLS4wMy4xMDItLjEzNi4xMDItLjEzNmguMDAyYzEuNTc2LTE1Ljc1NC0xLjY1NC0xOS45My0xLjY1NC0xOS45M201LjIwOCAwcy0zLjI0NSA0LjE3OC0xLjY2NyAxOS45NGguMDAyYy4wMTIuMS4wODMuMTIyLjA4My4xMjIuMTA2LjA0LjE2LS4wNi4xNi0uMDYgMS4wNS0xLjUyIDUuNzg0LTguNTM3IDYuNzQ4LTEyLjgxNCAwIDAgLjUyMy0yLjA3LjAxOC0zLjQ3NCAwIDAtLjcxNi0yLjY3MS0zLjYyLTMuMzc3IDAgMC0uODM2LS4yMTMtMS43MjQtLjMzOG0tMTQuOTY1IDQuNzI5cy0yLjc2MiAyLjYyMi0yLjkgNS40MDFoLjAwMXYuNDIxbC4wMDYuMDk2Yy4xMiAyLjI0MiAxLjgwNSAzLjU2OCAxLjgwNSAzLjU2OCAyLjcxNyAyLjY0OCA5LjI5NSA1Ljk5IDEwLjgyMyA2Ljc0OS4wMjIuMDA4LjEuMDM0LjE0Ny0uMDI1IDAgMCAuMDI0LS4wMTguMDM1LS4wNTF2LS4wN3EtLjAwMS0uMDA2LS4wMDUtLjAxMmMtNC4xODUtOS4xNDUtOS45MTItMTYuMDc3LTkuOTEyLTE2LjA3N20yNC43MTUgMHMtNS43MSA2LjkxLTkuODkzIDE2LjAzN2guMDAxcy0uMDUuMTA1LjAzLjE3M2MwIDAgLjAyNS4wMTguMDU4LjAyNmguMDU4YS4xLjEgMCAwIDAgLjAzMi0uMDE1di4wMDFjMS41Ny0uNzggOC4wOTctNC4xIDEwLjgwMS02LjczNSAwIDAgMS43MTItMS4zNzYgMS44MDItMy41ODMuMTk4LTMuMDY2LTIuODg5LTUuOTA0LTIuODg5LTUuOTA0em01LjEzOSA5LjA3OHMtOS4zMDggNC45OTUtMTQuMTIgOC4yNDJ2LjAwMXMtLjA4Ni4wNTctLjA1Ni4xNmMwIDAgLjA0Ni4wODMuMTEyLjA4MyAxLjcyNC4wMDMgOC4yNDcuMDEgOC40MS0uMDIgMCAwIC44NDQtLjAzNCAxLjg4Ni0uNDM0IDAgMCAyLjMyLS43MzggMy41MjYtMy4zNzIgMCAwIC41NS0xLjEwMS41NTgtMi42NDl2LS4wNjZhNi4zIDYuMyAwIDAgMC0uMzE2LTEuOTQ1bS0zNC45OTUuMDI0Yy0uODQ3IDIuNjIxLjI5MyA0LjczNC4yOTUgNC43MzcgMS4xODggMi41MSAzLjQ1NiAzLjI3MSAzLjQ1NiAzLjI3MSAxLjA0Ny40MyAyLjA5NC40NiAyLjA5NC40Ni4xNjQuMDMgNi41MTMuMDAzIDguMjE0LS4wMDUuMDcyIDAgLjExMi0uMDczLjExMi0uMDczbC4wMTEtLjAyM3YtLjA2NWEuMi4yIDAgMCAwLS4wNTEtLjA3NWMtNC44MS0zLjI0Ni0xNC4xMzEtOC4yMjctMTQuMTMxLTguMjI3Wm0xMy44NjUgOS4yNy0xMC45NS4zODNjMS4xODggMi4xMTcgMy4xODcgMy43NjIgNS4yNyAzLjI1NyAxLjQzOC0uMzYgNC42OTUtMi42MzEgNS43Ny0zLjM5OWwtLjAwMy0uMDAzYy4wODMtLjA3NS4wNTMtLjEzNS4wNTMtLjEzNS0uMDI3LS4wOTgtLjE0LS4wOTgtLjE0LS4wOTh6bTcuMjUyLjAwN3YuMDA0cy0uMDk3LjAxMy0uMTI0LjA4NWMwIDAtLjAyMy4wOTguMDQxLjE0NyAxLjA0OC43NTMgNC4yMjYgMi45NzQgNS43NTcgMy40MDYgMCAwIC4yMzIuMDc5LjYyLjA5M2guMjM0YzEuMDI2LS4wMzYgMi44MTItLjU2MyA0LjQzNi0zLjM1M3oiIHN0eWxlPSJmaWxsOiNjZjBhMmM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOi42MTAyMDAyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxLjA3IC0xMjEuOTEpIi8+PC9zdmc+");
		  --probe-os-macos: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTguNzEgMTkuNUMxNy44OCAyMC43NCAxNyAyMS45NSAxNS42NiAyMS45N0MxNC4zMiAyMiAxMy44OSAyMS4xOCAxMi4zNyAyMS4xOEMxMC44NCAyMS4xOCAxMC4zNyAyMS45NSA5LjA5OTk3IDIyQzcuNzg5OTcgMjIuMDUgNi43OTk5NyAyMC42OCA1Ljk1OTk3IDE5LjQ3QzQuMjQ5OTcgMTcgMi45Mzk5NyAxMi40NSA0LjY5OTk3IDkuMzlDNS41Njk5NyA3Ljg3IDcuMTI5OTcgNi45MSA4LjgxOTk3IDYuODhDMTAuMSA2Ljg2IDExLjMyIDcuNzUgMTIuMTEgNy43NUMxMi44OSA3Ljc1IDE0LjM3IDYuNjggMTUuOTIgNi44NEMxNi41NyA2Ljg3IDE4LjM5IDcuMSAxOS41NiA4LjgyQzE5LjQ3IDguODggMTcuMzkgMTAuMSAxNy40MSAxMi42M0MxNy40NCAxNS42NSAyMC4wNiAxNi42NiAyMC4wOSAxNi42N0MyMC4wNiAxNi43NCAxOS42NyAxOC4xMSAxOC43MSAxOS41Wk0xMyAzLjVDMTMuNzMgMi42NyAxNC45NCAyLjA0IDE1Ljk0IDJDMTYuMDcgMy4xNyAxNS42IDQuMzUgMTQuOSA1LjE5QzE0LjIxIDYuMDQgMTMuMDcgNi43IDExLjk1IDYuNjFDMTEuOCA1LjQ2IDEyLjM2IDQuMjYgMTMgMy41WiIvPgo8L3N2Zz4=");
		  --probe-os-mint: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTYgMjU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzY5QjUzRjt9Cgkuc3Qye2ZpbGw6I0Y4RjhGODt9Cjwvc3R5bGU+CjxnPgoJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTI4IiBjeT0iMTI4IiByPSIxMjgiLz4KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjEyOCIgY3k9IjEyOCIgcj0iMTA4Ii8+Cgk8cGF0aCBpZD0iX3gzQ19QYXRoX3gzRV8iIGNsYXNzPSJzdDIiIGQ9Ik01OCw2M3Y5MGMwLjEsMjIuMSwxNy45LDM5LjksNDAsNDBoNjBjMjIuMS0wLjEsMzkuOS0xNy45LDQwLTQwdi01MAoJCWMtMC4xLTE2LjUtMTMuNS0yOS45LTMwLTMwYy03LjQsMC0xNC41LDIuOC0yMCw3LjljLTUuNS01LTEyLjYtNy44LTIwLTcuOWMtMTYuNSwwLjEtMjkuOSwxMy41LTMwLDMwdjUwaDIwdi01MAoJCWMwLTUuNSw0LjUtMTAsMTAtMTBjNS41LDAsMTAsNC41LDEwLDEwdjUwaDIwdi01MGMwLTUuNSw0LjUtMTAsMTAtMTBzMTAsNC41LDEwLDEwdjUwYzAuMSwxMS04LjgsMTkuOS0xOS43LDIwYy0wLjEsMC0wLjIsMC0wLjMsMAoJCUg5OGMtMTEsMC4xLTE5LjktOC44LTIwLTE5LjdjMC0wLjEsMC0wLjIsMC0wLjNWNjNINTh6Ii8+CjwvZz4KPC9zdmc+Cg==");
		  --probe-os-nix: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2MCA2MCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIHhsaW5rOmhyZWY9IiNCIiBmaWxsPSIjNTI3N2MzIi8+PHBhdGggZD0iTTIzLjU4IDIwLjIxNEw4Ljk2NCA0NS41MjggNS41NSAzOS43NDNsMy45NC02Ljc4LTcuODIzLS4wMkwwIDMwLjA1MmwxLjcwMy0yLjk1NiAxMS4xMzUuMDM1IDQuMDAyLTYuOXpNMjQuNyA0MC40NWgyOS4yM2wtMy4zMDIgNS44NS03Ljg0LS4wMjIgMy44OTQgNi43ODUtMS42NyAyLjktMy40MTIuMDA0LTUuNTM3LTkuNjYtNy45NzYtLjAxNnptMTcuMDE0LTExLjA5MkwyNy4xIDQuMDQzbDYuNzE2LS4wNjMgMy45MDIgNi44IDMuOTMtNi43NjUgMy4zMzcuMDAyIDEuNyAyLjk1My01LjU5OCA5LjYyNiAzLjk3NCA2LjkxNnoiIGZpbGw9IiM3ZWJhZTQiLz48ZyBmaWxsPSIjNTI3N2MzIj48dXNlIHhsaW5rOmhyZWY9IiNCIi8+PHBhdGggZD0iTTM1LjI4IDE5LjQ4NmwtMjkuMjMtLjAwMiAzLjMwMy01Ljg0OCA3Ljg0LjAyMkwxMy4zIDYuODczbDEuNjctMi45IDMuNDEyLS4wMDQgNS41MzcgOS42NiA3Ljk3Ni4wMTZ6bTEuMTQgMjAuMjk0bDE0LjYxNi0yNS4zMTMgMy40MTMgNS43ODUtMy45NCA2Ljc4IDcuODIzLjAyIDEuNjY4IDIuOS0xLjcwMyAyLjk1Ni0xMS4xMzUtLjAzNS00LjAwMiA2Ljl6Ii8+PC9nPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0xOC4zMDUgMzAuNjQyTDMyLjkyIDU1Ljk1NmwtNi43MTYuMDYzLTMuOTAyLTYuOC0zLjkzIDYuNzY1LTMuMzM3LS4wMDItMS43MS0yLjk1MyA1LjU5OC05LjYyNi0zLjk3NC02LjkxNnoiLz48L2RlZnM+PC9zdmc+");
		  --probe-os-openwrt: url("data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+T3BlbldydDwvdGl0bGU+PHBhdGggZD0ibTEyIDBjLTMuOTA2IDAtNy40NDY1IDEuNTk0OS0xMC4wMDYgNC4xNTQzbDEuNjk1MyAxLjY5NTNjMi4xMjc4LTIuMTI3OCA1LjA2OS0zLjQzOTUgOC4zMTA1LTMuNDM5NSAzLjI0MTYgMCA2LjE4MzMgMS4zMTIyIDguMzEwNSAzLjQzOTVsMS42OTUzLTEuNjk1M2MtMi41Ni0yLjU1OTQtNi4wOTk5LTQuMTU0My0xMC4wMDYtNC4xNTQzem0wIDQuMzIwM2MtMi43MDkxIDAtNS4xNjg1IDEuMTEzOC02Ljk0NzMgMi44OTI2bDEuNjk1MyAxLjY5NTNjMS4zNDYtMS4zNDYgMy4yMDc5LTIuMTc3NyA1LjI1Mi0yLjE3NzcgMi4wNDM1IDAgMy45MDUzIDAuODMxNzIgNS4yNTIgMi4xNzc3bDEuNjk1My0xLjY5NTNjLTEuNzc4Mi0xLjc3ODItNC4yMzgxLTIuODkyNi02Ljk0NzMtMi44OTI2em0tNy43Mjg1IDMuNzU1OWMtMS4zMjk1IDEuNjc5Mi0yLjExMTMgMy43OTA2LTIuMTExMyA2LjA4NCAwIDUuNDE4OSA0LjQyMTYgOS44Mzk4IDkuODM5OCA5LjgzOTggNS40MTgzIDAgOS44Mzk4LTQuNDIwOSA5LjgzOTgtOS44Mzk4IDAtMi4yOTM0LTAuNzk4MzMtNC40MDQ4LTIuMTExMy02LjA4NGwtMS43MTI5IDEuNzEyOWMwLjg5NzQgMS4yMjk4IDEuNDI5NyAyLjc0MjcgMS40Mjk3IDQuMzcxMSAwIDQuMTA1My0zLjM0IDcuNDQ3My03LjQ0NTMgNy40NDczLTQuMTA1MiAwLTcuNDQ3My0zLjM0Mi03LjQ0NzMtNy40NDczIDAtMS42Mjg0IDAuNTMxNzQtMy4xNDEzIDEuNDI5Ny00LjM3MTFsLTEuNzEwOS0xLjcxMjl6bTcuNzI4NSAwLjU2NjQxYy0xLjUxMjggMC0yLjg5MjggMC42MTYzMy0zLjkwNjIgMS42MTMzbDEuNjk1MyAxLjY5NTNjMS4yMjE5LTEuMjE5NSAzLjIwMDYtMS4yMTk1IDQuNDIxOSAwbDEuNjk1My0xLjY5NTNjLTEuMDM1NC0xLjAzNjEtMi40NDE2LTEuNjE3Ni0zLjkwNjItMS42MTMzem0wIDMuODg4N2MtMC44OTk3IDAtMS42Mjg5IDAuNzI5MTEtMS42Mjg5IDEuNjI4OSAwIDAuODk5MiAwLjcyOTIxIDEuNjI4OSAxLjYyODkgMS42Mjg5IDAuODk5OCAwIDEuNjI4OS0wLjcyOTcxIDEuNjI4OS0xLjYyODktMC4wMDE5LTAuODk5Mi0wLjcyOTcxLTEuNjI3Ny0xLjYyODktMS42Mjg5eiIvPjwvc3ZnPg==");
		  --probe-os-rhel: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaWQ9ImI2YmRkMmI0LTUyYWItNDg4YS05YTMwLTFlNmQxZDdkZDJkNCIKICAgZGF0YS1uYW1lPSJMYXllciAxIgogICB2aWV3Qm94PSIwIDAgMTkyLjMwMDAxIDE0NiIKICAgdmVyc2lvbj0iMS4xIgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2dvLnN2ZyIKICAgd2lkdGg9IjE5Mi4zIgogICBoZWlnaHQ9IjE0NiIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi41ICgyMDYwZWMxZjlmLCAyMDIwLTA0LTA4KSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDA3IgogICAgIGlkPSJuYW1lZHZpZXcxMyIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjEiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMSIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMSIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjEiCiAgICAgaW5rc2NhcGU6em9vbT0iMC40NTkzMDA0MyIKICAgICBpbmtzY2FwZTpjeD0iMzA2Ljg5OTk5IgogICAgIGlua3NjYXBlOmN5PSI3MyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImI2YmRkMmI0LTUyYWItNDg4YS05YTMwLTFlNmQxZDdkZDJkNCIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8c3R5bGUKICAgICAgIGlkPSJzdHlsZTIiPi5hNzM3NDU5Yy1lOGM3LTRhZmEtODAwOC1mNmNmZDE1Y2NkYTJ7ZmlsbDojZTAwO308L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aAogICAgIGNsYXNzPSJhNzM3NDU5Yy1lOGM3LTRhZmEtODAwOC1mNmNmZDE1Y2NkYTIiCiAgICAgZD0ibSAxMjgsODQgYyAxMi41LDAgMzAuNiwtMi42IDMwLjYsLTE3LjUgYSAxOS41MywxOS41MyAwIDAgMCAtMC4zLC0zLjQgTCAxNTAuOSwzMC43IEMgMTQ5LjIsMjMuNiAxNDcuNywyMC4zIDEzNS4yLDE0LjEgMTI1LjUsOS4xIDEwNC40LDEgOTguMSwxIDkyLjIsMSA5MC41LDguNSA4My42LDguNSA3Ni45LDguNSA3MiwyLjkgNjUuNywyLjkgYyAtNiwwIC05LjksNC4xIC0xMi45LDEyLjUgMCwwIC04LjQsMjMuNyAtOS41LDI3LjIgYSA2LjE1LDYuMTUgMCAwIDAgLTAuMiwxLjkgQyA0Myw1My43IDc5LjMsODMuOSAxMjgsODQgbSAzMi41LC0xMS40IGMgMS43LDguMiAxLjcsOS4xIDEuNywxMC4xIDAsMTQgLTE1LjcsMjEuOCAtMzYuNCwyMS44IEMgNzksMTA0LjUgMzguMSw3Ny4xIDM4LjEsNTkgYSAxOC4zNSwxOC4zNSAwIDAgMSAxLjUsLTcuMyBDIDIyLjgsNTIuNSAxLDU1LjUgMSw3NC43IDEsMTA2LjIgNzUuNiwxNDUgMTM0LjYsMTQ1IGMgNDUuMywwIDU2LjcsLTIwLjUgNTYuNywtMzYuNyAwLC0xMi43IC0xMSwtMjcuMSAtMzAuOCwtMzUuNyIKICAgICBpZD0icGF0aDgiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzdHlsZT0iZmlsbDojZWUwMDAwIiAvPgogIDxwYXRoCiAgICAgZD0ibSAxNjAuNSw3Mi42IGMgMS43LDguMiAxLjcsOS4xIDEuNywxMC4xIDAsMTQgLTE1LjcsMjEuOCAtMzYuNCwyMS44IEMgNzksMTA0LjUgMzguMSw3Ny4xIDM4LjEsNTkgYSAxOC4zNSwxOC4zNSAwIDAgMSAxLjUsLTcuMyBsIDMuNywtOS4xIGEgNi4xNSw2LjE1IDAgMCAwIC0wLjIsMS45IGMgMCw5LjIgMzYuMywzOS40IDg0LjksMzkuNCAxMi41LDAgMzAuNiwtMi42IDMwLjYsLTE3LjUgQSAxOS41MywxOS41MyAwIDAgMCAxNTguMyw2MyBaIgogICAgIGlkPSJwYXRoMTAiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KPC9zdmc+Cg==");
		  --probe-os-rocky: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAuMjggNzk5Ljk5IDc5OS40NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNDk3Ij48cGF0aCBkPSJNNzc3LjczIDUzMS44MmMxNC40Mi00MS4yNyAyMi4yNi04NS42MyAyMi4yNi0xMzEuODJDNzk5Ljk5IDE3OS4yNCA2MjAuOS4yOCAzOTkuOTkuMjhTMCAxNzkuMjQgMCA0MDBjMCAxMDkuMjMgNDMuODUgMjA4LjIzIDExNC45MSAyODAuMzhsNDA1Ljc0LTQwNS40NyAxMDAuMTcgMTAwLjExem0tNzMuMDYgMTI3LjE5TDUyMC42NSA0NzUuMTIgMjMyLjQ5IDc2My4wOWM1MC45NSAyMy41MSAxMDcuNjkgMzYuNjMgMTY3LjUgMzYuNjMgMTIyLjA0IDAgMjMxLjMxLTU0LjYxIDMwNC42OC0xNDAuNzF6IiBmaWxsPSIjMTBiOTgxIi8+PC9zdmc+");
		  --probe-os-suse: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCAwIDEyOCAxMjgiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzExODIiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im9wZW5zdXNlLW9yaWdpbmFsLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjIgKGI4ZTI1YmU4LCAyMDIyLTAyLTA1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTE4NiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzExODQiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iNi44MjAzMTI1IgogICAgIGlua3NjYXBlOmN4PSI2NCIKICAgICBpbmtzY2FwZTpjeT0iNjUuNzU5NDUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjk2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwODEiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI1IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTE4MiIgLz4KICA8ZwogICAgIGZpbGw9IiM3M2JhMjUiCiAgICAgaWQ9ImcxMTgwIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMjQuMDAwMDQ1KSI+CiAgICA8cGF0aAogICAgICAgZD0ibSAxMDkuNDM0LDIyLjkwMiBhIDQuNjE0LDQuNjE0IDAgMCAwIC0zLjMyOSwxLjIzIDQuNTMsNC41MyAwIDAgMCAtMS40NjgsMy4yIGMgLTAuMDg2LDIuNTQgMS45MjIsNC42NzYgNC40OCw0Ljc3IGEgNC42OCw0LjY4IDAgMCAwIDMuMzM2LC0xLjIzOSA0LjUzMiw0LjUzMiAwIDAgMCAxLjQ2NSwtMy4xOTkgYyAwLjA5LC0yLjUzOSAtMS45MTgsLTQuNjcyIC00LjQ4NCwtNC43NjIgeiBtIDAuNzYxLDUuMDMyIGMgLTEuMTQsMCAtMi4wNjIsLTAuNjE0IC0yLjA2MiwtMS4zNiAwLC0wLjc1OCAwLjkyMiwtMS4zNjMgMi4wNjIsLTEuMzYzIDEuMTM3LDAgMi4wNjMsMC42MDUgMi4wNjMsMS4zNjMgMCwwLjc0NiAtMC45MjYsMS4zNiAtMi4wNjMsMS4zNiB6IG0gMTAuODI1LDUuNDggYyAwLjAzNSwtMC4wMjMgMC4xMTMsLTAuMDk0IDAuMTAxLC0wLjE1NiAtMC4yNTgsLTEuNTk0IC0yLjY1MiwtOS4zMTcgLTQuNDY5LC0xMS4xNzIgLTAuNSwtMC41MDggLTAuODk4LC0xLjAwNCAtMS43MDcsLTEuNDc3IC02LjU2MiwtMy43ODUgLTIyLjEzMiwtNi4wNyAtMjIuODYsLTYuMTcyIDAsMCAtMC4wNzMsLTAuMDE1IC0wLjEyNCwwLjAzMiAtMC4wNCwwLjAzOSAtMC4wNDcsMC4xMTMgLTAuMDQ3LDAuMTEzIGwgLTAuMDcsMy41NSBjIC0xLjU5LC0wLjUzIC0xMy4xNDksLTQuMjI2IC0yMy45OCwtNC41OTcgLTkuMTkyLC0wLjMyIC0yMi41NzEsLTEuNDk2IC00MC4zMDUsOS4yOTcgbCAtMC41MjQsMC4zMjQgQyAxOC42OTEsMjguMzEgMTIuOTM0LDM0LjY2IDkuOTIyLDQyLjA0MyBjIC0wLjk0NSwyLjMyIC0yLjIxNSw3LjU2MiAtMC45NTcsMTIuNDkyIDAuNTQzLDIuMTU2IDEuNTU1LDQuMzI0IDIuOTE4LDYuMjYyIDMuMDc4LDQuMzgzIDguMjUsNy4yODkgMTMuODE2LDcuNzgxIDcuODYsMC42OTUgMTMuODA5LC0yLjggMTUuOTI2LC05LjM0NCAxLjQ1MywtNC41MTUgMCwtMTEuMTQgLTUuNTc4LC0xNC41MiAtNC41NCwtMi43NSAtOS40MTgsLTIuMTI0IC0xMi4yNSwtMC4yNzMgLTIuNDUzLDEuNjE0IC0zLjg0NCw0LjExOCAtMy44Miw2Ljg3MSAwLjA1NCw0Ljg4IDQuMyw3LjQ3MyA3LjM1NSw3LjQ4MSAwLjg4NywwIDEuNzc3LC0wLjE1MiAyLjc4MSwtMC40NzcgMC4zNiwtMC4xMDkgMC42OTYsLTAuMjQyIDEuMDY3LC0wLjQ2OCBsIDAuMTEzLC0wLjA2NyAwLjA3NCwtMC4wNSAtMC4wMjMsMC4wMTUgYSAyLjQ4MiwyLjQ4MiAwIDAgMCAxLjExMywtMi4wNSBjIDAsLTAuMjIzIC0wLjAzMSwtMC40NSAtMC4wOTgsLTAuNjggLTAuMzU5LC0xLjIzNSAtMS41OTMsLTEuOTggLTIuODcsLTEuNzUgbCAtMC4xNzMsMC4wMzkgLTAuMjM0LDAuMDcgLTAuMzQsMC4xMTcgYyAtMC42OTksMC4xNjggLTEuMjI2LDAuMTg0IC0xLjM0LDAuMTg4IC0wLjM1OSwtMC4wMjQgLTIuMTEzLC0wLjU0MyAtMi4xMTMsLTIuNDUgdiAtMC4wMjMgYyAwLC0wLjcwMyAwLjI4MSwtMS4xOTEgMC40MzgsLTEuNDYgMC41NDYsLTAuODQ5IDIuMDQzLC0xLjY4IDQuMDY2LC0xLjUwOSAyLjY1MiwwLjIyNyA0LjU2NiwxLjU3NSA1LjgzNiw0LjExNyAxLjE3NiwyLjM2NCAwLjg2Nyw1LjI3IC0wLjc5Myw3LjM5OSAtMS42NTIsMi4xMSAtNC41OSwzLjAwOCAtOC40OTYsMi41OSAtMy45NDIsLTAuNDMgLTcuMjc0LC0yLjY3NiAtOS4xMzcsLTYuMTY4IC0xLjgyOCwtMy40MTggLTEuOTI2LC03LjQ2OSAtMC4yNTgsLTEwLjU3OCAzLjk4OSwtNy40NTcgMTEuNTIsLTcuMzggMTUuNjUzLC02LjY3MiA2LjExMywxLjA1IDEzLjA2Niw2LjYzMyAxNS41MzUsMTMuMDc4IDAuMzk4LDEuMDI3IDAuNjAxLDEuODQ0IDAuNzc3LDIuNTkgbCAwLjI2NiwxLjExMyA2LjkwNiwzLjMzNiBjIDAuMTQ4LDAuMDc0IDAuMiwwLjA5OCAwLjI1OCwwLjA1NSAwLjA3NCwtMC4wNTUgMC4wMzEsLTAuMiAwLjAzMSwtMC4yIC0wLjA0MywtMC4xNTIgLTAuMTQ0LC0wLjI5MyAtMC4zLC0yLjIwNyAtMC4xMzMsLTEuNjk5IC0wLjQsLTYuMzQ3IDEuOTY0LC04LjY0OCAwLjkxOCwtMC45MDIgMi4zMTcsLTEuNzA3IDMuNDIyLC0xLjk2MSA0LjUyMywtMS4wOTggOS44MzIsLTAuMzQgMTQuODUyLDUuNDEgMi41OTcsMi45NjkgMy44NjMsNC4zMjQgNC41LDQuOTMgMCwwIDAuMTQ0LDAuMTM3IDAuMjIyLDAuMiAwLjA4MiwwLjA3IDAuMTM3LDAuMTI0IDAuMjYyLDAuMTk0IDAuMjA3LDAuMTE0IDguNjI5LDMuOTU0IDguNjI5LDMuOTU0IDAsMCAwLjA5OCwwLjA0NiAwLjE3MiwtMC4wNDMgMC4wNzQsLTAuMDkgMC4wMDQsLTAuMTggMC4wMDQsLTAuMTggLTAuMDU1LC0wLjA2MyAtNS4zMzYsLTYuODIgLTQuMzk5LC0xMi4zODcgMC43NDIsLTQuNDMgNC4zMDUsLTQuMDMxIDkuMjM1LC0zLjQ4IDEuNjA5LDAuMTg3IDMuNDQxLDAuMzk0IDUuMzM2LDAuNDM3IDUuMjk2LDAuMDM1IDExLC0wLjkzMyAxNC41MTUsLTIuNDU3IDIuMjc0LC0wLjk3NiAzLjcyMywtMS42MjkgNC42MzMsLTIuNDUgMC4zMjgsLTAuMjY1IDAuNDk2LC0wLjcwMiAwLjY3MiwtMS4xNyBsIDAuMTI1LC0wLjMxIGMgMC4xNDgsLTAuMzc4IDAuMzYzLC0xLjE4IDAuNDU3LC0xLjYyIDAuMDM5LC0wLjE5MiAwLjA4NiwtMC4zODMgLTAuMDc4LC0wLjUwNSAtMC4xNDUsLTAuMTEzIC0wLjQ4NSwwLjA5IC0wLjQ4NSwwLjA5IC0xLjU0MywwLjkxOCAtNS40MDIsMi42NiAtOS4wMTEsMi43MzUgLTQuNDc3LDAuMDkgLTEzLjU1NSwtNC40ODkgLTE0LjQ5MywtNC45NzMgLTAuNjMyLC0xLjQ4NCAtMS4yNTcsLTIuOTY5IC0xLjg5OCwtNC40NDUgNi40OTIsNC4yMzQgMTEuODc5LDYuNTc0IDE2LDYuOTM3IDQuNTksMC40MDMgOC4xNjgsLTIuMDc0IDkuNzE5LC0zLjEwNSAwLjIwMywtMC4xMzcgMC40MDYsLTAuMjg1IDAuNTk0LC0wLjQzIHogTSAxMDIuNjAyLDI3LjMyIGEgNi41NTYsNi41NTYgMCAwIDEgMi4xMDksLTQuNTkzIDYuNyw2LjcgMCAwIDEgNC43ODEsLTEuNzY2IGMgMy42NjgsMC4xMjkgNi41NTEsMy4xOTUgNi40MjYsNi44MjQgYSA2LjU0OSw2LjU0OSAwIDAgMSAtMi4xMSw0LjU5IDYuNjQ0LDYuNjQ0IDAgMCAxIC00Ljc4NSwxLjc3MyBjIC0zLjY2NCwtMC4xMzIgLTYuNTQzLC0zLjE5NSAtNi40MjEsLTYuODI4IHogbSAwLDAiCiAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICBpZD0icGF0aDExNzYiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibSA5Mi40OTYsNTcuODYzIGMgMC44MDUsMCAxLjQ0NSwwLjY0NSAxLjQ0NSwxLjQ1MyAwLDAuODIgLTAuNjQsMS40NjEgLTEuNDQ5LDEuNDYxIGEgMS40NSwxLjQ1IDAgMCAxIC0xLjQ1NywtMS40NiBjIDAsLTAuODEgMC42NTMsLTEuNDU0IDEuNDU3LC0xLjQ1NCB6IG0gLTAuMDA0LDAuMjI3IGMgLTAuNjQ4LDAgLTEuMTc2LDAuNTQ3IC0xLjE3NiwxLjIyNiAwLDAuNjkyIDAuNTI4LDEuMjM1IDEuMTgsMS4yMzUgMC42NTIsMC4wMDggMS4xNzYsLTAuNTQzIDEuMTc2LC0xLjIyNyAwLC0wLjY4NyAtMC41MjQsLTEuMjM0IC0xLjE3NiwtMS4yMzQgeiBtIC0wLjI3NywyLjA3NCBoIC0wLjI2MiB2IC0xLjYyMSBjIDAuMTQsLTAuMDIgMC4yNywtMC4wNCAwLjQ2NSwtMC4wNCAwLjI1LDAgMC40MSwwLjA1MiAwLjUwOCwwLjEyMiAwLjEwMSwwLjA3IDAuMTUyLDAuMTggMC4xNTIsMC4zMzYgMCwwLjIxIC0wLjE0NCwwLjM0NCAtMC4zMiwwLjM5NCB2IDAuMDEyIGMgMC4xNDQsMC4wMjggMC4yNDIsMC4xNTYgMC4yNzMsMC4zOTUgMC4wNDMsMC4yNTQgMC4wNzgsMC4zNTEgMC4xMDYsMC40MDIgaCAtMC4yNzQgYyAtMC4wMzksLTAuMDUgLTAuMDc4LC0wLjIgLTAuMTEsLTAuNDE0IC0wLjA0MiwtMC4yMDcgLTAuMTQ0LC0wLjI4NSAtMC4zNTUsLTAuMjg1IGggLTAuMTgzIHogbSAwLC0wLjg5OCBoIDAuMTkxIGMgMC4yMTUsMCAwLjM5OSwtMC4wNzggMC4zOTksLTAuMjc4IDAsLTAuMTQ0IC0wLjEwNiwtMC4yODUgLTAuMzk5LC0wLjI4NSAtMC4wODYsMCAtMC4xNDQsMC4wMDQgLTAuMTkxLDAuMDEyIHogbSAwLDAiCiAgICAgICBpZD0icGF0aDExNzgiIC8+CiAgPC9nPgo8L3N2Zz4K");
		  --probe-os-ubuntu: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2IDY1LjU3MTRDNTIuMzMxOSA2NS41NzE0IDY1LjU3MTQgNTIuMzMxOCA2NS41NzE0IDM2QzY1LjU3MTQgMTkuNjY4MSA1Mi4zMzE5IDYuNDI4NTcgMzYgNi40Mjg1N0MxOS42NjgyIDYuNDI4NTcgNi40Mjg1OSAxOS42NjgxIDYuNDI4NTkgMzZDNi40Mjg1OSA1Mi4zMzE4IDE5LjY2ODIgNjUuNTcxNCAzNiA2NS41NzE0WiIgZmlsbD0iI0RENDgxNCIvPgo8cGF0aCBkPSJNMTUuODkwNyAzOS45NTAxQzE4LjA3MDkgMzkuOTUwMSAxOS44MzgzIDM4LjE4MjcgMTkuODM4MyAzNi4wMDI1QzE5LjgzODMgMzMuODIyMyAxOC4wNzA5IDMyLjA1NDkgMTUuODkwNyAzMi4wNTQ5QzEzLjcxMDUgMzIuMDU0OSAxMS45NDMxIDMzLjgyMjMgMTEuOTQzMSAzNi4wMDI1QzExLjk0MzEgMzguMTgyNyAxMy43MTA1IDM5Ljk1MDEgMTUuODkwNyAzOS45NTAxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI2LjQ4MzkgNTAuMjY3N0MyMi45NzU3IDQ3LjkyODEgMjAuNDUwNyA0NC4zNzk4IDE5LjM5IDQwLjI5ODZDMjAuMDI4OSAzOS43Nzg4IDIwLjU0MzkgMzkuMTIzMSAyMC44OTc2IDM4LjM3OTJDMjEuMjUxNCAzNy42MzU0IDIxLjQzNDkgMzYuODIyMSAyMS40MzQ5IDM1Ljk5ODRDMjEuNDM0OSAzNS4xNzQ3IDIxLjI1MTQgMzQuMzYxNCAyMC44OTc2IDMzLjYxNzZDMjAuNTQzOSAzMi44NzM3IDIwLjAyODkgMzIuMjE4IDE5LjM5IDMxLjY5ODJDMjAuNDUwNyAyNy42MTcgMjIuOTc1NyAyNC4wNjg3IDI2LjQ4MzkgMjEuNzI5MUwyOS4zNzE2IDI2LjU2MzRDMjcuODU2MyAyNy42MjY2IDI2LjYxOTQgMjkuMDM5IDI1Ljc2NTQgMzAuNjgxM0MyNC45MTE1IDMyLjMyMzYgMjQuNDY1NyAzNC4xNDc0IDI0LjQ2NTcgMzUuOTk4NEMyNC40NjU3IDM3Ljg0OTQgMjQuOTExNSAzOS42NzMyIDI1Ljc2NTQgNDEuMzE1NUMyNi42MTk0IDQyLjk1NzggMjcuODU2MyA0NC4zNzAyIDI5LjM3MTYgNDUuNDMzNEwyNi40ODM5IDUwLjI2NzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDYuMDUzOCAyMi41MzUyQzQ4LjIzMzkgMjIuNTM1MiA1MC4wMDEzIDIwLjc2NzggNTAuMDAxMyAxOC41ODc3QzUwLjAwMTMgMTYuNDA3NSA0OC4yMzM5IDE0LjY0MDEgNDYuMDUzOCAxNC42NDAxQzQzLjg3MzYgMTQuNjQwMSA0Mi4xMDYyIDE2LjQwNzUgNDIuMTA2MiAxOC41ODc3QzQyLjEwNjIgMjAuNzY3OCA0My44NzM2IDIyLjUzNTIgNDYuMDUzOCAyMi41MzUyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI4LjM5OSAyMC42MjU5QzMyLjE3OTYgMTguNzU4MyAzNi41MTUgMTguMzQ2MiA0MC41Nzk4IDE5LjQ2NzlDNDAuNzEwOSAyMC4yODEgNDEuMDIxNCAyMS4wNTQ4IDQxLjQ4ODggMjEuNzMyOUM0MS45NTYzIDIyLjQxMSA0Mi41Njg5IDIyLjk3NjUgNDMuMjgyMSAyMy4zODgyQzQzLjk5NTQgMjMuOCA0NC43OTE1IDI0LjA0NzggNDUuNjEyNCAyNC4xMTM1QzQ2LjQzMzQgMjQuMTc5MiA0Ny4yNTg3IDI0LjA2MTIgNDguMDI4NCAyMy43NjgxQzUxLjAzMiAyNi43MjczIDUyLjg0MjUgMzAuNjg3NiA1My4xMTUyIDM0Ljg5NTJMNDcuNDgxOCAzNC45Nzg2QzQ3LjMxODIgMzMuMTM0OSA0Ni43MTMxIDMxLjM1NzYgNDUuNzE3NiAyOS43OTdDNDQuNzIyMSAyOC4yMzY1IDQzLjM2NTYgMjYuOTM4NiA0MS43NjI2IDI2LjAxM0M0MC4xNTk2IDI1LjA4NzQgMzguMzU3NCAyNC41NjEzIDM2LjUwODIgMjQuNDc5M0MzNC42NTkgMjQuMzk3MiAzMi44MTcyIDI0Ljc2MTYgMzEuMTM4NiAyNS41NDE2TDI4LjM5OSAyMC42MjU5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ2LjA1MzggNTcuMzY1QzQ4LjIzMzkgNTcuMzY1IDUwLjAwMTMgNTUuNTk3NyA1MC4wMDEzIDUzLjQxNzVDNTAuMDAxMyA1MS4yMzczIDQ4LjIzMzkgNDkuNDY5OSA0Ni4wNTM4IDQ5LjQ2OTlDNDMuODczNiA0OS40Njk5IDQyLjEwNjIgNTEuMjM3MyA0Mi4xMDYyIDUzLjQxNzVDNDIuMTA2MiA1NS41OTc3IDQzLjg3MzYgNTcuMzY1IDQ2LjA1MzggNTcuMzY1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUzLjExNDkgMzcuMTA4QzUyLjg0MjIgNDEuMzE1NiA1MS4wMzE3IDQ1LjI3NTkgNDguMDI4MSA0OC4yMzUxQzQ3LjI1ODQgNDcuOTQyIDQ2LjQzMzEgNDcuODI0IDQ1LjYxMjEgNDcuODg5N0M0NC43OTEyIDQ3Ljk1NTQgNDMuOTk1MSA0OC4yMDMyIDQzLjI4MTggNDguNjE0OUM0Mi41Njg2IDQ5LjAyNjcgNDEuOTU2IDQ5LjU5MjIgNDEuNDg4NSA1MC4yNzAzQzQxLjAyMTEgNTAuOTQ4NCA0MC43MTA1IDUxLjcyMjEgNDAuNTc5NSA1Mi41MzUyQzM2LjUxNDcgNTMuNjU3IDMyLjE3OTMgNTMuMjQ0OCAyOC4zOTg3IDUxLjM3NzNMMzEuMTQyNCA0Ni40NjE2QzMyLjgyMTEgNDcuMjQxNiAzNC42NjI4IDQ3LjYwNiAzNi41MTIgNDcuNTIzOUMzOC4zNjEyIDQ3LjQ0MTkgNDAuMTYzNSA0Ni45MTU4IDQxLjc2NjUgNDUuOTkwMkM0My4zNjk0IDQ1LjA2NDYgNDQuNzI2IDQzLjc2NjcgNDUuNzIxNSA0Mi4yMDYxQzQ2LjcxNjkgNDAuNjQ1NiA0Ny4zMjIgMzguODY4MyA0Ny40ODU2IDM3LjAyNDVMNTMuMTE0OSAzNy4xMDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
		  --probe-os-unknown: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48IS0tIEljb24gZnJvbSBUYWJsZXIgSWNvbnMgYnkgUGF3ZcWCIEt1bmEgLSBodHRwczovL2dpdGh1Yi5jb20vdGFibGVyL3RhYmxlci1pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFIC0tPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTMgMTJhOSA5IDAgMSAwIDE4IDBhOSA5IDAgMSAwLTE4IDBtOSA1di4wMSIvPjxwYXRoIGQ9Ik0xMiAxMy41YTEuNSAxLjUgMCAwIDEgMS0xLjVhMi42IDIuNiAwIDEgMC0zLTQiLz48L2c+PC9zdmc+");
		  --probe-os-unraid: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjIuNCAxMzkuOCI+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE0Ni43MDAwMDAwMDAwMDAwMiAxMzAuMkgxMzVsLTMgOWgtNi41bDEzLjQtMzguNWg4bDEzLjQgMzguNWgtNy4xbC0xMC42LTMxLjYtNS44IDE2LjloOC4ybDEuNyA1Ljd6TTI5LjcgMTAwLjh2MjUuNGMwIDguOS01LjggMTMuNi0xNC45IDEzLjYtOSAwLTE0LjgtNC43LTE0LjgtMTMuNnYtMjUuNGg2LjV2MjUuNGMwIDUuMiAzLjIgNy45IDguMiA3LjkgNS4yIDAgOC40LTIuNyA4LjQtNy45di0yNS40aDYuNnpNNTAuOSAxMTIuN3YyNi41aC02LjV2LTM4LjVoNi4xbDE3IDI2LjV2LTI2LjVINzR2MzguNWgtNi4xbC0xNy0yNi41ek0xNzEuMyAxMDAuOGg2LjV2MzguNWgtNi41di0zOC41ek0yMjIuNCAxMjUuNGMwIDktNS45IDEzLjgtMTUuMiAxMy44aC0xNC41di0zOC41aDE0LjZjOS4yIDAgMTUuMSA0LjggMTUuMSAxMy44djEwLjl6bS02LjYtMTAuOGMwLTUuMy0zLjMtOC4xLTguNS04LjFoLTguMXYyNy4xaDhjNS4zIDAgOC42LTIuOCA4LjYtOC4xdi0xMC45ek0xMDguMyAxMjQuN2M0LjMtMS42IDYuOS01LjMgNi45LTExLjUgMC04LjctNS4xLTEyLjQtMTIuOC0xMi40SDg4Ljh2MzguNWg2LjV2LTMyLjhoNi45YzMuOCAwIDYuMiAxLjggNi4yIDYuN3MtMi40IDYuOC02LjIgNi44aC0zLjRsOS4yIDE5LjRoNy41bC03LjItMTQuN3oiIGNsYXNzPSJzdDAiPjwvcGF0aD4KICA8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiB4MT0iNjguMDciIHgyPSIxNTQuMDczIiB5MT0iODEuNDg5IiB5Mj0iLTQuNTE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlMzI5MjkiPjwvc3RvcD4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmOGQzMCI+PC9zdG9wPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHBhdGggZmlsbD0idXJsKCNTVkdJRF8xXykiIGQ9Ik0xMDcuOCAxOS4yaDYuNXYzOC41aC02LjVWMTkuMnpNNTAuOSA1Ny43aC02LjVWMTkuMmg2LjV2MzguNXptMjUuMiA0LjZoNi41Vjc3aC02LjVWNjIuM3pNNjAuMiA0NS44aDYuNXYyMy44aC02LjVWNDUuOHptMzEuNyAwaDYuNXYyMy44aC02LjVWNDUuOHptNzkuNC0yNi42aDYuNXYzOC41aC02LjVWMTkuMnptLTI1LjItNC41aC02LjVWMGg2LjV2MTQuN3pNMTYyIDMxLjFoLTYuNVY3LjRoNi41djIzLjd6bS0zMS44IDBoLTYuNVY3LjRoNi41djIzLjd6Ij48L3BhdGg+Cjwvc3ZnPgo=");
		  --probe-os-windows: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODc1IDQ4NzUiPjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik0wIDBoMjMxMXYyMzEwSDB6bTI1NjQgMGgyMzExdjIzMTBIMjU2NHpNMCAyNTY0aDIzMTF2MjMxMUgwem0yNTY0IDBoMjMxMXYyMzExSDI1NjQiLz48L3N2Zz4=");
		
		  display: flex;
		  flex-direction: column;
		  gap: 16px;
		  height: 100%;
		  min-height: 0;
		  padding: 18px 20px 22px;
		  overflow: hidden;
		  background: var(--probe-bg-primary);
		  color: var(--probe-text-primary);
		  font-family: var(--probe-font);
		  -webkit-font-smoothing: antialiased;
		}
		
		/* Dark palette: the host GUI sets data-dsw-theme on <html>; the panel mirrors
		   the same signal through its own attribute so the two never fight. */
		.probe_page[data-probe-theme='dark'],
		:global([data-dsw-theme='dark']) .probe_page {
		  --probe-bg-primary: #0f0a15;
		  --probe-bg-secondary: #1a1225;
		  --probe-bg-tertiary: #241a32;
		  --probe-bg-card: #1e1530;
		  --probe-bg-card-rgb: 30, 21, 48;
		  --probe-bg-card-hover: #261c3a;
		  --probe-bg-overlay: rgba(0, 0, 0, 0.6);
		  --probe-text-primary: #e8dff0;
		  --probe-text-secondary: #a899b8;
		  --probe-text-tertiary: #7a6b8a;
		  --probe-text-inverse: #0f0a15;
		  --probe-border: #2d2040;
		  --probe-border-rgb: 45, 32, 64;
		  --probe-border-light: #241a32;
		  --probe-accent: #ff8fa3;
		  --probe-accent-light: #3d1a2a;
		  --probe-accent-hover: #ffb7c5;
		  --probe-success: #5ec492;
		  --probe-success-light: #1a2e22;
		  --probe-warning: #f5b84a;
		  --probe-warning-light: #2e2818;
		  --probe-danger: #ff6b7a;
		  --probe-danger-light: #2e1a1e;
		  --probe-info: #7ab3f7;
		  --probe-info-light: #1a2230;
		  --probe-sakura-1: #ff8fa3;
		  --probe-sakura-2: #ffb7c5;
		  --probe-sakura-3: #e8668a;
		  --probe-chart-cpu: #ff8fa3;
		  --probe-chart-ram: #5ec492;
		  --probe-chart-disk: #93bbfd;
		  --probe-chart-net-down: #7ab3f7;
		  --probe-chart-net-up: #f5b84a;
		  --probe-chart-grid: #2d2040;
		  --probe-chart-text: #7a6b8a;
		  --probe-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.2);
		  --probe-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
		  --probe-shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.4);
		  --probe-shadow-card: 0 2px 8px rgba(0, 0, 0, 0.2);
		}
		
		.probe_page *,
		.probe_page *::before,
		.probe_page *::after {
		  box-sizing: border-box;
		}
		
		/* ==========================================================================
		   Page frame
		   ========================================================================== */
		
		.probe_header {
		  display: flex;
		  align-items: flex-end;
		  justify-content: space-between;
		  gap: 16px;
		  flex: none;
		  flex-wrap: wrap;
		}
		
		.probe_headerText {
		  display: flex;
		  flex-direction: column;
		  gap: 3px;
		  min-width: 0;
		}
		
		.probe_title {
		  margin: 0;
		  font-size: 1.5rem;
		  font-weight: 700;
		  letter-spacing: -0.02em;
		  line-height: 1.2;
		  color: var(--probe-text-primary);
		}
		
		.probe_subtitle {
		  font-size: 0.8rem;
		  font-weight: 500;
		  color: var(--probe-text-secondary);
		}
		
		.probe_headerActions {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex: none;
		}
		
		.probe_body {
		  display: flex;
		  flex-direction: column;
		  gap: 16px;
		  flex: 1;
		  min-height: 0;
		  overflow-y: auto;
		  padding-bottom: 4px;
		  scrollbar-width: thin;
		}
		
		.probe_body::-webkit-scrollbar { width: 8px; }
		.probe_body::-webkit-scrollbar-thumb {
		  background: var(--probe-border);
		  border-radius: 4px;
		}
		.probe_body::-webkit-scrollbar-thumb:hover { background: var(--probe-text-tertiary); }
		
		/* ==========================================================================
		   Segmented tab row (pill)
		   ========================================================================== */
		
		.probe_tabs {
		  display: inline-flex;
		  gap: 4px;
		  flex: none;
		  align-self: flex-start;
		  max-width: 100%;
		  padding: 4px;
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  box-shadow: var(--probe-shadow-sm);
		}
		
		.probe_tab {
		  display: inline-flex;
		  align-items: center;
		  gap: 6px;
		  padding: 8px 16px;
		  font-size: 0.82rem;
		  font-weight: 600;
		  color: var(--probe-text-secondary);
		  background: transparent;
		  border: none;
		  border-radius: var(--probe-r-sm);
		  cursor: pointer;
		  white-space: nowrap;
		  transition: background var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_tab:hover {
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-tertiary);
		}
		
		.probe_tab[data-active] {
		  color: var(--probe-text-inverse);
		  background: var(--probe-accent);
		  box-shadow: 0 2px 8px rgba(232, 102, 138, 0.25);
		}
		
		.probe_tabCount {
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		  min-width: 18px;
		  height: 18px;
		  padding: 0 5px;
		  font-size: 0.68rem;
		  font-weight: 700;
		  font-variant-numeric: tabular-nums;
		  border-radius: 9px;
		  background: var(--probe-danger);
		  color: #fff;
		}
		
		/* ==========================================================================
		   Welcome band (mikus welcome-section)
		   ========================================================================== */
		
		.probe_quietState {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 14px;
		  padding: 16px 20px;
		  background: linear-gradient(135deg, var(--probe-bg-secondary), var(--probe-bg-tertiary));
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		  box-shadow: var(--probe-shadow-card);
		}
		
		.probe_quietState .probe_liveNote { flex: 1; }
		
		.probe_liveNote {
		  font-size: 0.8rem;
		  font-weight: 500;
		  color: var(--probe-text-secondary);
		}
		
		/* ==========================================================================
		   Stats bar
		   ========================================================================== */
		
		.probe_stats {
		  display: flex;
		  gap: 12px;
		  flex: none;
		  flex-wrap: wrap;
		}
		
		.probe_stat {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  padding: 10px 20px;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  box-shadow: var(--probe-shadow-card);
		  transition: box-shadow var(--probe-t), transform var(--probe-t);
		}
		
		.probe_stat:hover {
		  box-shadow: var(--probe-shadow-md);
		  transform: translateY(-2px);
		}
		
		.probe_statLabel {
		  font-size: 0.85rem;
		  font-weight: 500;
		  color: var(--probe-text-secondary);
		}
		
		.probe_statValue {
		  font-size: 1.25rem;
		  font-weight: 700;
		  font-family: var(--probe-mono);
		  font-variant-numeric: tabular-nums;
		  color: var(--probe-text-primary);
		}
		
		.probe_stat[data-tone='ok'] .probe_statValue { color: var(--probe-success); }
		.probe_stat[data-tone='warn'] .probe_statValue { color: var(--probe-warning); }
		.probe_stat[data-tone='danger'] .probe_statValue { color: var(--probe-danger); }
		
		/* ==========================================================================
		   List bar: search + filters + view toggle
		   ========================================================================== */
		
		.probe_listBar {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  flex: none;
		  flex-wrap: wrap;
		}
		
		.probe_searchWrap {
		  position: relative;
		  display: flex;
		  align-items: center;
		  flex: 1 1 240px;
		  min-width: 180px;
		}
		
		.probe_searchGlyph {
		  position: absolute;
		  left: 12px;
		  display: inline-flex;
		  width: 15px;
		  height: 15px;
		  color: var(--probe-text-tertiary);
		  pointer-events: none;
		}
		
		.probe_searchInput {
		  width: 100%;
		  height: 38px;
		  padding: 0 32px 0 36px;
		  font-size: 0.82rem;
		  font-family: inherit;
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  outline: none;
		  transition: border-color var(--probe-t-fast), box-shadow var(--probe-t-fast);
		}
		
		.probe_searchInput::placeholder { color: var(--probe-text-tertiary); }
		
		.probe_searchInput:focus {
		  border-color: var(--probe-accent);
		  box-shadow: 0 0 0 3px rgba(232, 102, 138, 0.15);
		}
		
		.probe_searchClear {
		  position: absolute;
		  right: 8px;
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		  width: 22px;
		  height: 22px;
		  padding: 0;
		  font-size: 0.9rem;
		  color: var(--probe-text-tertiary);
		  background: transparent;
		  border: none;
		  border-radius: 50%;
		  cursor: pointer;
		}
		
		.probe_searchClear:hover {
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-tertiary);
		}
		
		.probe_filterPills,
		.probe_rangePills {
		  display: inline-flex;
		  gap: 3px;
		  padding: 3px;
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-sm);
		}
		
		.probe_pill {
		  padding: 5px 12px;
		  font-size: 0.75rem;
		  font-weight: 600;
		  color: var(--probe-text-secondary);
		  background: transparent;
		  border: none;
		  border-radius: 6px;
		  cursor: pointer;
		  white-space: nowrap;
		  transition: background var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_pill:hover {
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-tertiary);
		}
		
		.probe_pill[data-active] {
		  color: var(--probe-text-inverse);
		  background: var(--probe-accent);
		}
		
		.probe_viewToggle {
		  display: inline-flex;
		  gap: 3px;
		  padding: 3px;
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-sm);
		}
		
		.probe_viewButton {
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		  width: 30px;
		  height: 28px;
		  padding: 0;
		  color: var(--probe-text-tertiary);
		  background: transparent;
		  border: none;
		  border-radius: 6px;
		  cursor: pointer;
		  transition: background var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_viewButton svg { width: 15px; height: 15px; }
		
		.probe_viewButton:hover {
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-tertiary);
		}
		
		.probe_viewButton[data-active] {
		  color: var(--probe-accent);
		  background: var(--probe-accent-light);
		}
		
		/* ==========================================================================
		   Card grid \u2014 the mikus node-card, one for one
		   ========================================================================== */
		
		.probe_grid {
		  display: grid;
		  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		  gap: 20px;
		  flex: none;
		}
		
		.probe_card {
		  position: relative;
		  display: flex;
		  flex-direction: column;
		  gap: 14px;
		  padding: 20px;
		  overflow: hidden;
		  cursor: pointer;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
		  transition: transform var(--probe-t), box-shadow var(--probe-t), border-color var(--probe-t);
		}
		
		/* Sakura top bar, revealed on hover (mikus ::before) */
		.probe_card::before {
		  content: '';
		  position: absolute;
		  top: 0;
		  left: 0;
		  right: 0;
		  height: 3px;
		  background: linear-gradient(90deg, var(--probe-sakura-1), var(--probe-sakura-2), var(--probe-sakura-3));
		  opacity: 0;
		  transition: opacity var(--probe-t);
		}
		
		/* Mikus diagonal sheen, drawn above the surface but below the content. */
		.probe_card::after {
		  content: '';
		  position: absolute;
		  inset: 0;
		  pointer-events: none;
		  border-radius: inherit;
		  background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.03) 100%);
		}
		
		.probe_card:hover {
		  transform: translateY(-4px);
		  border-color: var(--probe-accent);
		  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04);
		}
		
		.probe_card:hover::before { opacity: 1; }
		
		.probe_card:active { transform: translateY(-2px); transition: transform 0.1s ease; }
		
		/* Offline cards desaturate and dim (mikus .probe_node-card.probe_offline) */
		.probe_card[data-status='offline'],
		.probe_card[data-status='disabled'] {
		  opacity: 0.65;
		  filter: saturate(0.8);
		}
		
		.probe_card[data-status='offline']:hover,
		.probe_card[data-status='disabled']:hover { opacity: 0.85; }
		
		.probe_card[data-status='offline']::before,
		.probe_card[data-status='disabled']::before {
		  background: linear-gradient(90deg, var(--probe-danger), #ff8a95);
		}
		
		.probe_cardTop {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex-wrap: wrap;
		  padding-bottom: 12px;
		  border-bottom: 1px solid var(--probe-border-light);
		}
		
		/* Mikus .probe_node-card-header + .probe_node-card-subtitle */
		.probe_cardHeader {
		  display: flex;
		  align-items: center;
		  gap: 14px;
		  padding-bottom: 12px;
		  border-bottom: 1px solid var(--probe-border-light);
		}
		
		/* Mikus .probe_node-card-flag: a small plate on the left of the identity block.
		   The probe derives the country from the agent's source address, so this holds
		   a real flag emoji; an unresolved host keeps the grey "?" placeholder Mikus
		   uses. */
		.probe_cardCrest {
		  display: grid;
		  place-items: center;
		  flex: none;
		  width: 32px;
		  height: 24px;
		  overflow: hidden;
		  font-size: 0.75rem;
		  font-weight: 600;
		  line-height: 1;
		  border-radius: 4px;
		  background-color: var(--probe-bg-tertiary);
		  background-size: cover;
		  background-position: center;
		  background-repeat: no-repeat;
		  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		  transition: transform 0.2s ease;
		}
		
		.probe_card:hover .probe_cardCrest { transform: scale(1.05); }
		
		.probe_cardCrestEmpty {
		  font-size: 0.75rem;
		  font-weight: 600;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_cardInfo {
		  display: flex;
		  flex-direction: column;
		  gap: 4px;
		  flex: 1;
		  min-width: 0;
		}
		
		.probe_cardNameRow {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex-wrap: wrap;
		  min-width: 0;
		}
		
		.probe_cardSubtitle {
		  display: flex;
		  align-items: center;
		  gap: 6px;
		  flex-wrap: nowrap;
		  overflow: hidden;
		}
		
		.probe_cardOs {
		  display: inline-flex;
		  align-items: center;
		  gap: 5px;
		  min-width: 0;
		  font-size: 0.72rem;
		  font-weight: 500;
		  color: var(--probe-text-tertiary);
		  white-space: nowrap;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		/* Pulse status dot */
		.probe_dot {
		  flex: none;
		  width: 10px;
		  height: 10px;
		  border-radius: 50%;
		  background: var(--probe-success);
		  box-shadow: 0 0 8px rgba(76, 175, 125, 0.4);
		  animation: probePulse 2s ease-in-out infinite;
		}
		
		.probe_dot[data-status='offline'],
		.probe_dot[data-status='disabled'] {
		  background: var(--probe-danger);
		  box-shadow: 0 0 8px rgba(232, 102, 138, 0.4);
		  animation: none;
		}
		
		.probe_dot[data-status='stale'],
		.probe_dot[data-status='waiting'] {
		  background: var(--probe-warning);
		  box-shadow: 0 0 8px rgba(245, 166, 35, 0.4);
		}
		
		@keyframes probePulse {
		  0%, 100% { opacity: 1; transform: scale(1); }
		  50% { opacity: 0.6; transform: scale(0.9); }
		}
		
		.probe_hostName {
		  font-size: 1rem;
		  font-weight: 600;
		  line-height: 1.4;
		  color: var(--probe-text-primary);
		  overflow: hidden;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		  max-width: 100%;
		}
		
		.probe_cardAge {
		  margin-left: auto;
		  font-size: 0.7rem;
		  font-weight: 500;
		  font-variant-numeric: tabular-nums;
		  color: var(--probe-text-tertiary);
		  white-space: nowrap;
		}
		
		.probe_cardStatus {
		  display: inline-flex;
		  align-items: center;
		  padding: 2px 8px;
		  font-size: 0.68rem;
		  font-weight: 600;
		  white-space: nowrap;
		  border-radius: 4px;
		  color: var(--probe-text-secondary);
		  background: var(--probe-bg-tertiary);
		}
		
		.probe_cardStatus[data-status='offline'],
		.probe_cardStatus[data-status='disabled'] {
		  color: var(--probe-danger);
		  background: var(--probe-danger-light);
		}
		
		.probe_cardStatus[data-status='stale'],
		.probe_cardStatus[data-status='waiting'] {
		  color: var(--probe-warning);
		  background: var(--probe-warning-light);
		}
		
		.probe_cardStatus[data-status='muted'] {
		  color: var(--probe-info);
		  background: var(--probe-info-light);
		}
		
		.probe_cardStatus[data-status='outdated'] {
		  color: var(--probe-accent);
		  background: var(--probe-accent-light);
		}
		
		.probe_alertChip {
		  display: inline-flex;
		  align-items: center;
		  padding: 2px 8px;
		  font-size: 0.68rem;
		  font-weight: 700;
		  white-space: nowrap;
		  border-radius: 4px;
		  color: var(--probe-danger);
		  background: var(--probe-danger-light);
		}
		
		.probe_cardMeta {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex-wrap: wrap;
		  min-width: 0;
		}
		
		.probe_metaText {
		  font-size: 0.72rem;
		  font-weight: 500;
		  color: var(--probe-text-tertiary);
		  overflow: hidden;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		  max-width: 100%;
		}
		
		.probe_chipRow {
		  display: inline-flex;
		  align-items: center;
		  gap: 5px;
		  flex-wrap: wrap;
		}
		
		.probe_chip {
		  display: inline-flex;
		  align-items: center;
		  padding: 2px 8px;
		  font-size: 0.68rem;
		  font-weight: 600;
		  line-height: 1.5;
		  white-space: nowrap;
		  border-radius: 4px;
		  color: var(--probe-info);
		  background: var(--probe-info-light);
		  flex-shrink: 0;
		  transition: transform var(--probe-t-fast), box-shadow var(--probe-t-fast);
		}
		
		/* Mikus colours a tag by a trailing <colour> marker; the probe keeps the same
		   palette so a tagged host looks the same as it does upstream. */
		.probe_chip[data-tag-color='green'] { color: var(--probe-success); background: var(--probe-success-light); }
		.probe_chip[data-tag-color='red'] { color: var(--probe-danger); background: var(--probe-danger-light); }
		.probe_chip[data-tag-color='blue'] { color: var(--probe-info); background: var(--probe-info-light); }
		.probe_chip[data-tag-color='yellow'],
		.probe_chip[data-tag-color='orange'] { color: var(--probe-warning); background: var(--probe-warning-light); }
		.probe_chip[data-tag-color='purple'],
		.probe_chip[data-tag-color='pink'] { color: var(--probe-accent); background: var(--probe-accent-light); }
		.probe_chip[data-tag-color='gray'] { color: var(--probe-text-secondary); background: var(--probe-bg-tertiary); }
		
		.probe_card:hover .probe_chip { transform: translateY(-1px); }
		
		/* ==========================================================================
		   Metric bars (mikus .probe_metric / .probe_metric-bar / .probe_metric-bar-fill)
		   ========================================================================== */
		
		.probe_gaugeRow,
		.probe_metricGrid {
		  display: grid;
		  grid-template-columns: 1fr 1fr;
		  gap: 14px;
		}
		
		.probe_gauge,
		.probe_metric {
		  display: flex;
		  flex-direction: column;
		  gap: 6px;
		  min-width: 0;
		}
		
		.probe_gaugeLabel {
		  font-size: 0.72rem;
		  font-weight: 600;
		  letter-spacing: 0.08em;
		  text-transform: uppercase;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_gaugeValue,
		.probe_metricValue {
		  font-size: 0.88rem;
		  font-weight: 700;
		  font-family: var(--probe-mono);
		  font-variant-numeric: tabular-nums;
		  color: var(--probe-success);
		  transition: color var(--probe-t);
		}
		
		.probe_gaugeValue[data-tone='warn'] { color: var(--probe-warning); }
		.probe_gaugeValue[data-tone='critical'] { color: var(--probe-danger); }
		
		.probe_gaugeTrack {
		  display: block;
		  height: 8px;
		  overflow: hidden;
		  background: var(--probe-bg-tertiary);
		  border-radius: 4px;
		  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
		}
		
		.probe_gaugeFill {
		  display: block;
		  position: relative;
		  height: 100%;
		  border-radius: 4px;
		  background: linear-gradient(90deg, var(--probe-success), #6dd5a0);
		  transition: width 0.6s var(--probe-ease), background 0.3s ease;
		}
		
		/* Glossy top half, like mikus .probe_metric-bar-fill::after */
		.probe_gaugeFill::after {
		  content: '';
		  position: absolute;
		  top: 0;
		  left: 0;
		  right: 0;
		  height: 50%;
		  border-radius: 4px 4px 0 0;
		  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);
		}
		
		.probe_gaugeFill[data-tone='warn'] {
		  background: linear-gradient(90deg, var(--probe-warning), #f7c948);
		}
		
		.probe_gaugeFill[data-tone='critical'] {
		  background: linear-gradient(90deg, var(--probe-danger), #ff8a95);
		}
		
		/* ==========================================================================
		   Sparkline
		   ========================================================================== */
		
		.probe_spark {
		  position: relative;
		  height: 34px;
		  flex: none;
		}
		
		.probe_sparkSvg {
		  display: block;
		  width: 100%;
		  height: 100%;
		  overflow: visible;
		}
		
		.probe_sparkLine {
		  fill: none;
		  stroke: var(--probe-chart-cpu);
		  stroke-width: 1.6;
		  stroke-linecap: round;
		  stroke-linejoin: round;
		  vector-effect: non-scaling-stroke;
		}
		
		.probe_sparkArea { fill: url(#probeSparkFill); opacity: 0.18; }
		
		.probe_sparkEmpty {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  height: 100%;
		  font-size: 0.68rem;
		  color: var(--probe-text-tertiary);
		}
		
		/* ==========================================================================
		   Card footer
		   ========================================================================== */
		
		.probe_cardFoot {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  flex-wrap: wrap;
		  margin-top: auto;
		  padding-top: 12px;
		  border-top: 1px solid var(--probe-border-light);
		}
		
		.probe_footItem {
		  display: inline-flex;
		  align-items: baseline;
		  gap: 4px;
		  font-size: 0.7rem;
		  white-space: nowrap;
		}
		
		.probe_footLabel {
		  font-weight: 500;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_footValue {
		  font-weight: 600;
		  font-variant-numeric: tabular-nums;
		  font-family: var(--probe-mono);
		  color: var(--probe-text-secondary);
		}
		
		/* ==========================================================================
		   Empty / loading
		   ========================================================================== */
		
		.probe_empty {
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  justify-content: center;
		  gap: 12px;
		  flex: 1;
		  min-height: 260px;
		  padding: 48px 24px;
		  text-align: center;
		  background: var(--probe-bg-card);
		  border: 1px dashed var(--probe-border);
		  border-radius: var(--probe-r-lg);
		}
		
		.probe_emptyGlyph {
		  display: grid;
		  place-items: center;
		  width: 56px;
		  height: 56px;
		  color: var(--probe-text-tertiary);
		  background: var(--probe-bg-tertiary);
		  border-radius: var(--probe-r-md);
		}
		
		.probe_emptyGlyph svg { width: 26px; height: 26px; }
		
		.probe_emptyTitle {
		  margin: 0;
		  font-size: 0.95rem;
		  font-weight: 700;
		  color: var(--probe-text-primary);
		}
		
		.probe_emptyText {
		  margin: 0;
		  max-width: 400px;
		  font-size: 0.8rem;
		  line-height: 1.6;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_skeletonCard {
		  display: flex;
		  flex-direction: column;
		  gap: 10px;
		  padding: 20px;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		}
		
		.probe_skeletonLine {
		  height: 10px;
		  border-radius: 5px;
		  background: linear-gradient(90deg, var(--probe-bg-tertiary) 25%, var(--probe-border) 50%, var(--probe-bg-tertiary) 75%);
		  background-size: 200% 100%;
		  animation: probeShimmer 1.4s ease-in-out infinite;
		}
		
		@keyframes probeShimmer {
		  0% { background-position: 200% 0; }
		  100% { background-position: -200% 0; }
		}
		
		.probe_muted {
		  color: var(--probe-text-tertiary);
		  font-size: 0.8rem;
		}
		
		.probe_hint {
		  margin: 0;
		  font-size: 0.75rem;
		  line-height: 1.5;
		  color: var(--probe-text-tertiary);
		}
		
		/* ==========================================================================
		   Table view
		   ========================================================================== */
		
		.probe_tableWrap {
		  flex: none;
		  overflow: auto;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		  box-shadow: var(--probe-shadow-card);
		}
		
		.probe_table {
		  width: 100%;
		  border-collapse: collapse;
		  font-size: 0.8rem;
		}
		
		.probe_table thead th {
		  position: sticky;
		  top: 0;
		  z-index: 1;
		  padding: 12px 14px;
		  text-align: left;
		  font-size: 0.7rem;
		  font-weight: 600;
		  letter-spacing: 0.08em;
		  text-transform: uppercase;
		  color: var(--probe-text-tertiary);
		  background: var(--probe-bg-secondary);
		  border-bottom: 1px solid var(--probe-border);
		  white-space: nowrap;
		}
		
		.probe_table tbody td {
		  padding: 11px 14px;
		  border-bottom: 1px solid var(--probe-border-light);
		  color: var(--probe-text-secondary);
		  vertical-align: middle;
		}
		
		.probe_table tbody tr:last-child td { border-bottom: none; }
		
		.probe_table tbody tr {
		  cursor: pointer;
		  transition: background var(--probe-t-fast);
		}
		
		.probe_table tbody tr:hover td { background: var(--probe-bg-card-hover); }
		
		.probe_tableName {
		  display: inline-flex;
		  align-items: center;
		  gap: 8px;
		  font-weight: 600;
		  color: var(--probe-text-primary);
		}
		
		.probe_nameCell { min-width: 160px; }
		.probe_statusCell { width: 100px; }
		.probe_netCell, .probe_colNet { white-space: nowrap; font-family: var(--probe-mono); font-size: 0.75rem; }
		.probe_seenCell { white-space: nowrap; color: var(--probe-text-tertiary); }
		
		.probe_statusChip {
		  display: inline-flex;
		  align-items: center;
		  padding: 2px 9px;
		  font-size: 0.68rem;
		  font-weight: 600;
		  border-radius: 4px;
		  color: var(--probe-success);
		  background: var(--probe-success-light);
		  white-space: nowrap;
		}
		
		.probe_statusChip[data-status='offline'],
		.probe_statusChip[data-status='disabled'] {
		  color: var(--probe-danger);
		  background: var(--probe-danger-light);
		}
		
		.probe_statusChip[data-status='stale'],
		.probe_statusChip[data-status='waiting'] {
		  color: var(--probe-warning);
		  background: var(--probe-warning-light);
		}
		
		.probe_rowChevron {
		  color: var(--probe-text-tertiary);
		  font-size: 0.9rem;
		}
		
		.probe_rowOpen { text-align: right; }
		
		/* ==========================================================================
		   Buttons
		   ========================================================================== */
		
		.probe_primaryButton {
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		  gap: 6px;
		  height: 38px;
		  padding: 0 18px;
		  font-size: 0.82rem;
		  font-weight: 600;
		  font-family: inherit;
		  color: #fff;
		  background: var(--probe-accent);
		  border: none;
		  border-radius: var(--probe-r-md);
		  cursor: pointer;
		  white-space: nowrap;
		  transition: background var(--probe-t-fast), box-shadow var(--probe-t-fast), transform var(--probe-t-fast);
		}
		
		.probe_primaryButton:hover:not(:disabled) {
		  background: var(--probe-accent-hover);
		  box-shadow: 0 4px 14px rgba(232, 102, 138, 0.3);
		  transform: translateY(-1px);
		}
		
		.probe_primaryButton:active:not(:disabled) { transform: translateY(0); }
		
		.probe_primaryButton:disabled {
		  opacity: 0.5;
		  cursor: default;
		}
		
		.probe_ghostButton {
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		  gap: 6px;
		  height: 38px;
		  padding: 0 16px;
		  font-size: 0.82rem;
		  font-weight: 600;
		  font-family: inherit;
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  cursor: pointer;
		  white-space: nowrap;
		  transition: background var(--probe-t-fast), border-color var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_ghostButton:hover:not(:disabled) {
		  background: var(--probe-bg-card-hover);
		  border-color: var(--probe-accent);
		  color: var(--probe-accent);
		}
		
		.probe_ghostButton:disabled {
		  opacity: 0.45;
		  cursor: default;
		}
		
		.probe_dangerGhost {
		  color: var(--probe-danger);
		  border-color: rgba(231, 76, 94, 0.35);
		}
		
		.probe_dangerGhost:hover:not(:disabled) {
		  color: #fff;
		  background: var(--probe-danger);
		  border-color: var(--probe-danger);
		}
		
		.probe_iconButton {
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		  width: 32px;
		  height: 32px;
		  padding: 0;
		  font-size: 0.9rem;
		  color: var(--probe-text-tertiary);
		  background: transparent;
		  border: none;
		  border-radius: var(--probe-r-sm);
		  cursor: pointer;
		  transition: background var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_iconButton:hover {
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-tertiary);
		}
		
		.probe_backButton {
		  display: inline-flex;
		  align-items: center;
		  gap: 4px;
		  height: 32px;
		  padding: 0 12px 0 8px;
		  font-size: 0.78rem;
		  font-weight: 600;
		  font-family: inherit;
		  color: var(--probe-text-secondary);
		  background: transparent;
		  border: 1px solid transparent;
		  border-radius: var(--probe-r-sm);
		  cursor: pointer;
		  white-space: nowrap;
		  transition: background var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_backButton:hover {
		  color: var(--probe-accent);
		  background: var(--probe-accent-light);
		}
		
		.probe_linkButton {
		  padding: 0;
		  font-size: 0.78rem;
		  font-weight: 600;
		  font-family: inherit;
		  color: var(--probe-accent);
		  background: none;
		  border: none;
		  cursor: pointer;
		  white-space: nowrap;
		}
		
		.probe_linkButton:hover:not(:disabled) { text-decoration: underline; }
		.probe_linkButton:disabled { opacity: 0.45; cursor: default; }
		
		.probe_sortButton {
		  display: inline-flex;
		  align-items: center;
		  gap: 4px;
		  padding: 0;
		  font: inherit;
		  font-size: inherit;
		  font-weight: inherit;
		  letter-spacing: inherit;
		  text-transform: inherit;
		  color: inherit;
		  background: none;
		  border: none;
		  cursor: pointer;
		}
		
		.probe_sortButton:hover { color: var(--probe-accent); }
		
		/* ==========================================================================
		   Banner / error
		   ========================================================================== */
		
		.probe_banner {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  flex: none;
		  padding: 12px 16px;
		  font-size: 0.8rem;
		  line-height: 1.5;
		  color: var(--probe-text-secondary);
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  box-shadow: var(--probe-shadow-sm);
		  cursor: pointer;
		  transition: box-shadow var(--probe-t-fast);
		}
		
		.probe_banner:hover { box-shadow: var(--probe-shadow-md); }
		
		.probe_banner[data-tone='danger'] {
		  color: var(--probe-danger);
		  background: var(--probe-danger-light);
		  border-color: rgba(231, 76, 94, 0.3);
		}
		
		.probe_banner[data-tone='warn'] {
		  color: var(--probe-warning);
		  background: var(--probe-warning-light);
		  border-color: rgba(245, 166, 35, 0.3);
		}
		
		.probe_bannerIcon {
		  display: inline-flex;
		  flex: none;
		  font-size: 1rem;
		  line-height: 1;
		}
		
		.probe_bannerText { flex: 1; min-width: 0; }
		
		.probe_bannerArrow {
		  flex: none;
		  font-size: 1rem;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_bannerList {
		  margin: 4px 0 0;
		  padding-left: 18px;
		  font-size: 0.75rem;
		  line-height: 1.6;
		}
		
		.probe_errorBar {
		  padding: 10px 14px;
		  font-size: 0.78rem;
		  color: var(--probe-danger);
		  background: var(--probe-danger-light);
		  border: 1px solid rgba(231, 76, 94, 0.3);
		  border-radius: var(--probe-r-sm);
		}
		
		/* ==========================================================================
		   Detail view
		   ========================================================================== */
		
		.probe_detail {
		  display: flex;
		  flex-direction: column;
		  gap: 16px;
		  flex: none;
		}
		
		.probe_detailHeader {
		  display: flex;
		  align-items: flex-start;
		  justify-content: space-between;
		  gap: 16px;
		  flex-wrap: wrap;
		}
		
		.probe_detailTitleRow {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  flex-wrap: wrap;
		  min-width: 0;
		}
		
		.probe_detailTitle {
		  margin: 0;
		  font-size: 1.3rem;
		  font-weight: 700;
		  letter-spacing: -0.02em;
		  color: var(--probe-text-primary);
		}
		
		.probe_detailMeta {
		  margin: 6px 0 0;
		  font-size: 0.78rem;
		  line-height: 1.5;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_detailActions {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex-wrap: wrap;
		}
		
		.probe_tiles {
		  display: grid;
		  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		  gap: 12px;
		}
		
		.probe_tile {
		  display: flex;
		  flex-direction: column;
		  gap: 4px;
		  min-width: 0;
		  padding: 14px 16px;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  box-shadow: var(--probe-shadow-card);
		  transition: box-shadow var(--probe-t-fast), transform var(--probe-t-fast);
		}
		
		.probe_tile:hover {
		  box-shadow: var(--probe-shadow-md);
		  transform: translateY(-2px);
		}
		
		.probe_tile[data-wide] { grid-column: span 2; }
		
		.probe_tile[data-wide] .probe_tileValue,
		.probe_tile[data-wide] .probe_tileSub {
		  white-space: normal;
		  overflow-wrap: anywhere;
		  text-overflow: clip;
		}
		
		.probe_tileLabel {
		  font-size: 0.7rem;
		  font-weight: 600;
		  letter-spacing: 0.08em;
		  text-transform: uppercase;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_tileValue {
		  font-size: 1rem;
		  font-weight: 700;
		  font-family: var(--probe-mono);
		  font-variant-numeric: tabular-nums;
		  color: var(--probe-text-primary);
		  white-space: nowrap;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		.probe_tileSub {
		  font-size: 0.7rem;
		  font-weight: 500;
		  color: var(--probe-text-tertiary);
		  white-space: nowrap;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		/* ==========================================================================
		   Sections
		   ========================================================================== */
		
		.probe_section {
		  display: flex;
		  flex-direction: column;
		  gap: 12px;
		  flex: none;
		  padding: 18px 20px;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		  box-shadow: var(--probe-shadow-card);
		}
		
		.probe_sectionHeader {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 12px;
		  flex-wrap: wrap;
		}
		
		.probe_sectionTitle {
		  margin: 0;
		  font-size: 0.92rem;
		  font-weight: 700;
		  color: var(--probe-text-primary);
		}
		
		.probe_sectionHint {
		  margin: 0;
		  font-size: 0.75rem;
		  color: var(--probe-text-tertiary);
		}
		
		/* ==========================================================================
		   Chart
		   ========================================================================== */
		
		.probe_chartCard {
		  display: flex;
		  flex-direction: column;
		  gap: 12px;
		  padding: 18px 20px;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		  box-shadow: var(--probe-shadow-card);
		}
		
		.probe_chartHeader {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 12px;
		  flex-wrap: wrap;
		}
		
		.probe_chartBody {
		  position: relative;
		  min-height: 200px;
		}
		
		.probe_chartSvg {
		  display: block;
		  width: 100%;
		  height: 200px;
		  overflow: visible;
		}
		
		.probe_chartGrid { stroke: var(--probe-chart-grid); stroke-width: 1; }
		.probe_chartAxis { fill: var(--probe-chart-text); font-size: 10px; font-family: var(--probe-mono); }
		
		.probe_chartLine {
		  fill: none;
		  stroke-width: 2;
		  stroke-linecap: round;
		  stroke-linejoin: round;
		  vector-effect: non-scaling-stroke;
		}
		
		.probe_chartEmpty,
		.probe_chartError {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  min-height: 200px;
		  font-size: 0.8rem;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_chartError { color: var(--probe-danger); }
		
		.probe_legend {
		  display: flex;
		  align-items: center;
		  gap: 14px;
		  flex-wrap: wrap;
		}
		
		.probe_legendItem {
		  display: inline-flex;
		  align-items: center;
		  gap: 5px;
		  font-size: 0.72rem;
		  font-weight: 600;
		  color: var(--probe-text-secondary);
		}
		
		.probe_legendDot {
		  width: 8px;
		  height: 8px;
		  border-radius: 50%;
		  background: currentColor;
		}
		
		/* ==========================================================================
		   Alerts
		   ========================================================================== */
		
		.probe_alertRow {
		  display: flex;
		  align-items: flex-start;
		  gap: 12px;
		  padding: 12px 14px;
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  transition: box-shadow var(--probe-t-fast);
		}
		
		.probe_alertRow[data-active] {
		  background: var(--probe-warning-light);
		  border-color: rgba(245, 166, 35, 0.35);
		}
		
		.probe_alertRow + .probe_alertRow { margin-top: 8px; }
		
		.probe_alertDot {
		  flex: none;
		  width: 8px;
		  height: 8px;
		  margin-top: 6px;
		  border-radius: 50%;
		  background: var(--probe-text-tertiary);
		}
		
		.probe_alertRow[data-active] .probe_alertDot {
		  background: var(--probe-warning);
		  animation: probePulse 2s ease-in-out infinite;
		}
		
		.probe_alertBody {
		  display: flex;
		  flex-direction: column;
		  gap: 3px;
		  flex: 1;
		  min-width: 0;
		}
		
		.probe_alertTitle {
		  display: flex;
		  align-items: baseline;
		  gap: 8px;
		  flex-wrap: wrap;
		  font-size: 0.82rem;
		  font-weight: 600;
		  color: var(--probe-text-primary);
		}
		
		.probe_alertRule {
		  font-size: 0.7rem;
		  font-weight: 700;
		  letter-spacing: 0.06em;
		  text-transform: uppercase;
		  color: var(--probe-accent);
		}
		
		.probe_alertValue {
		  font-family: var(--probe-mono);
		  font-size: 0.75rem;
		  color: var(--probe-text-secondary);
		}
		
		.probe_alertTime {
		  font-size: 0.7rem;
		  color: var(--probe-text-tertiary);
		  white-space: nowrap;
		}
		
		/* ==========================================================================
		   Forms
		   ========================================================================== */
		
		.probe_settingsGrid {
		  display: flex;
		  flex-direction: column;
		  gap: 8px;
		}
		
		.probe_settingsRow {
		  display: flex;
		  align-items: center;
		  gap: 14px;
		  flex-wrap: wrap;
		  padding: 12px 14px;
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-sm);
		}
		
		.probe_settingsRow[data-disabled='true'] {
		  opacity: 0.55;
		}
		
		.probe_fieldRow {
		  display: grid;
		  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		  gap: 12px;
		}
		
		.probe_field {
		  display: flex;
		  flex-direction: column;
		  gap: 5px;
		  min-width: 0;
		}
		
		.probe_fieldLabel {
		  font-size: 0.72rem;
		  font-weight: 600;
		  color: var(--probe-text-secondary);
		}
		
		.probe_fieldError {
		  margin: 0;
		  font-size: 0.72rem;
		  color: var(--probe-danger);
		}
		
		.probe_input {
		  width: 100%;
		  height: 36px;
		  padding: 0 11px;
		  font-size: 0.82rem;
		  font-family: inherit;
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-sm);
		  outline: none;
		  transition: border-color var(--probe-t-fast), box-shadow var(--probe-t-fast);
		}
		
		/* A number field plus its unit, sharing one outlined shell. */
		.probe_inlineInput {
		  display: inline-flex;
		  align-items: center;
		  gap: 6px;
		  height: 34px;
		  padding: 0 10px;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-sm);
		  transition: border-color var(--probe-t-fast), box-shadow var(--probe-t-fast);
		}
		
		.probe_inlineInput:focus-within {
		  border-color: var(--probe-accent);
		  box-shadow: 0 0 0 3px rgba(232, 102, 138, 0.15);
		}
		
		.probe_inlineInput input {
		  width: 68px;
		  height: 100%;
		  padding: 0;
		  font-size: 0.82rem;
		  font-family: var(--probe-mono);
		  font-variant-numeric: tabular-nums;
		  color: var(--probe-text-primary);
		  background: transparent;
		  border: none;
		  outline: none;
		}
		
		.probe_input:focus,
		.probe_inlineInput:focus {
		  border-color: var(--probe-accent);
		  box-shadow: 0 0 0 3px rgba(232, 102, 138, 0.15);
		}
		
		.probe_input::placeholder { color: var(--probe-text-tertiary); }
		.probe_input:disabled { opacity: 0.55; }
		
		.probe_check {
		  display: inline-flex;
		  align-items: center;
		  gap: 7px;
		  flex: 1 1 190px;
		  font-size: 0.8rem;
		  font-weight: 600;
		  color: var(--probe-text-primary);
		  cursor: pointer;
		}
		
		.probe_check input {
		  flex: none;
		  width: 15px;
		  height: 15px;
		  accent-color: var(--probe-accent);
		  cursor: pointer;
		}
		
		.probe_saveRow {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  flex-wrap: wrap;
		}
		
		.probe_savedNote {
		  font-size: 0.75rem;
		  font-weight: 600;
		  color: var(--probe-success);
		}
		
		.probe_field input[type='number'],
		.probe_field input[type='text'],
		.probe_field select {
		  width: 100%;
		  height: 34px;
		  padding: 0 10px;
		  font-size: 0.82rem;
		  font-family: inherit;
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-sm);
		  outline: none;
		}
		
		.probe_field input[type='number']:focus,
		.probe_field input[type='text']:focus,
		.probe_field select:focus {
		  border-color: var(--probe-accent);
		  box-shadow: 0 0 0 3px rgba(232, 102, 138, 0.15);
		}
		
		.probe_unit {
		  flex: none;
		  font-size: 0.72rem;
		  font-weight: 600;
		  color: var(--probe-text-tertiary);
		}
		
		/* ==========================================================================
		   Modal
		   ========================================================================== */
		
		.probe_backdrop {
		  position: fixed;
		  inset: 0;
		  z-index: 60;
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  padding: 20px;
		  background: var(--probe-bg-overlay);
		  backdrop-filter: blur(3px);
		}
		
		.probe_modal {
		  display: flex;
		  flex-direction: column;
		  gap: 16px;
		  width: min(600px, calc(100vw - 40px));
		  max-height: calc(100vh - 80px);
		  overflow: hidden;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-xl);
		  box-shadow: var(--probe-shadow-lg);
		  color: var(--probe-text-primary);
		}
		
		.probe_modalHeader {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 12px;
		  flex: none;
		  padding: 20px 22px 14px;
		  border-bottom: 1px solid var(--probe-border-light);
		}
		
		.probe_modalTitle {
		  margin: 0;
		  font-size: 1.05rem;
		  font-weight: 700;
		  color: var(--probe-text-primary);
		}
		
		.probe_modalBody {
		  display: flex;
		  flex-direction: column;
		  gap: 14px;
		  flex: 1;
		  min-height: 0;
		  overflow-y: auto;
		  padding: 18px 22px;
		}
		
		.probe_modalFooter {
		  display: flex;
		  justify-content: flex-end;
		  gap: 10px;
		  flex: none;
		  padding: 14px 22px 20px;
		  border-top: 1px solid var(--probe-border-light);
		}
		
		/* ==========================================================================
		   Install / token blocks
		   ========================================================================== */
		
		.probe_installSummary {
		  display: flex;
		  flex-direction: column;
		  gap: 6px;
		  padding: 14px 16px;
		  background: var(--probe-bg-tertiary);
		  border-radius: var(--probe-r-md);
		}
		
		.probe_installStatus {
		  font-size: 0.78rem;
		  font-weight: 600;
		  color: var(--probe-text-secondary);
		}
		
		.probe_commandBlock {
		  display: flex;
		  flex-direction: column;
		  gap: 8px;
		}
		
		.probe_commandHeader {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 10px;
		}
		
		.probe_commandTitle {
		  font-size: 0.72rem;
		  font-weight: 600;
		  letter-spacing: 0.06em;
		  text-transform: uppercase;
		  color: var(--probe-text-tertiary);
		}
		
		.probe_commandText {
		  margin: 0;
		  padding: 12px 14px;
		  overflow-x: auto;
		  font-family: var(--probe-mono);
		  font-size: 0.72rem;
		  line-height: 1.65;
		  color: #d6deeb;
		  background: #16101f;
		  border: 1px solid rgba(255, 255, 255, 0.08);
		  border-radius: var(--probe-r-sm);
		  white-space: pre-wrap;
		  word-break: break-all;
		}
		
		.probe_tokenBlock {
		  display: flex;
		  flex-direction: column;
		  gap: 8px;
		  padding: 14px 16px;
		  background: var(--probe-bg-tertiary);
		  border-radius: var(--probe-r-md);
		}
		
		.probe_tokenRow {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex-wrap: wrap;
		}
		
		.probe_tokenValue {
		  flex: 1;
		  min-width: 140px;
		  font-family: var(--probe-mono);
		  font-size: 0.72rem;
		  color: var(--probe-text-secondary);
		  word-break: break-all;
		}
		
		.probe_tokenInline {
		  display: inline-flex;
		  align-items: center;
		  padding: 2px 8px;
		  font-family: var(--probe-mono);
		  font-size: 0.72rem;
		  color: var(--probe-text-secondary);
		  background: var(--probe-bg-tertiary);
		  border-radius: 4px;
		}
		
		.probe_tokenOk {
		  color: var(--probe-success);
		  font-weight: 600;
		}
		
		.probe_tokenError {
		  color: var(--probe-danger);
		  font-weight: 600;
		}
		
		.probe_versionsNote,
		.probe_upgradeNote,
		.probe_waitingNote,
		.probe_notifySection,
		.probe_notifyTestRow {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  flex-wrap: wrap;
		  font-size: 0.78rem;
		  color: var(--probe-text-secondary);
		}
		
		.probe_notifySection {
		  flex-direction: column;
		  align-items: stretch;
		  gap: 12px;
		  padding: 16px;
		  background: var(--probe-bg-tertiary);
		  border-radius: var(--probe-r-md);
		}
		
		.probe_notifyTestRow { justify-content: space-between; }
		
		/* ==========================================================================
		   Responsive
		   ========================================================================== */
		
		/* ==========================================================================
		   Late additions: classes referenced by the table view and status marks
		   ========================================================================== */
		
		.probe_colNet,
		.probe_netCell {
		  white-space: nowrap;
		  font-family: var(--probe-mono);
		  font-size: 0.75rem;
		  color: var(--probe-text-secondary);
		}
		
		.probe_tableRow {
		  cursor: pointer;
		  transition: background var(--probe-t-fast);
		}
		
		.probe_tableRow:hover td { background: var(--probe-bg-card-hover); }
		
		/* Small dot/caret marking a host whose agent build is behind the panel. */
		.probe_outdatedMark {
		  display: inline-flex;
		  align-items: center;
		  gap: 4px;
		  padding: 2px 7px;
		  font-size: 0.66rem;
		  font-weight: 700;
		  white-space: nowrap;
		  border-radius: 4px;
		  color: var(--probe-accent);
		  background: var(--probe-accent-light);
		}
		
		.probe_outdatedMark::before {
		  content: '';
		  width: 5px;
		  height: 5px;
		  border-radius: 50%;
		  background: currentColor;
		}
		
		/* ==========================================================================
		   OS glyph \u2014 one CSS background per distro, all inlined as data URIs above.
		   Cards and the detail header both use this so a host reads as
		   "[icon] Debian" rather than "Debian GNU/Linux 13 (trixie)".
		   ========================================================================== */
		
		.probe_osIcon {
		  display: inline-block;
		  flex: none;
		  width: 15px;
		  height: 15px;
		  background-size: contain;
		  background-position: center;
		  background-repeat: no-repeat;
		  vertical-align: -2px;
		}
		
		.probe_osIcon[data-os='windows'] { background-image: var(--probe-os-windows); }
		.probe_osIcon[data-os='ubuntu'] { background-image: var(--probe-os-ubuntu); }
		.probe_osIcon[data-os='debian'] { background-image: var(--probe-os-debian); }
		.probe_osIcon[data-os='centos'] { background-image: var(--probe-os-centos); }
		.probe_osIcon[data-os='rhel'] { background-image: var(--probe-os-rhel); }
		.probe_osIcon[data-os='fedora'] { background-image: var(--probe-os-fedora); }
		.probe_osIcon[data-os='arch'] { background-image: var(--probe-os-arch); }
		.probe_osIcon[data-os='suse'] { background-image: var(--probe-os-suse); }
		.probe_osIcon[data-os='alpine'] { background-image: var(--probe-os-unknown); }
		.probe_osIcon[data-os='openwrt'] { background-image: var(--probe-os-openwrt); }
		.probe_osIcon[data-os='freebsd'] { background-image: var(--probe-os-freebsd); }
		.probe_osIcon[data-os='macos'] { background-image: var(--probe-os-macos); }
		.probe_osIcon[data-os='rocky'] { background-image: var(--probe-os-rocky); }
		.probe_osIcon[data-os='alma'] { background-image: var(--probe-os-alma); }
		.probe_osIcon[data-os='mint'] { background-image: var(--probe-os-mint); }
		.probe_osIcon[data-os='gentoo'] { background-image: var(--probe-os-gentoo); }
		.probe_osIcon[data-os='nix'] { background-image: var(--probe-os-nix); }
		.probe_osIcon[data-os='qnap'] { background-image: var(--probe-os-unknown); }
		.probe_osIcon[data-os='unraid'] { background-image: var(--probe-os-unraid); }
		.probe_osIcon[data-os='huawei'] { background-image: var(--probe-os-huawei); }
		.probe_osIcon[data-os='orange-pi'] { background-image: var(--probe-os-unknown); }
		.probe_osIcon[data-os='unknown'] { background-image: var(--probe-os-unknown); }
		
		/* The Linux glyph is the widest asset; only reference it when a host actually
		   reports plain "Linux", keeping the common path light. */
		.probe_osIcon[data-os='linux'] { background-image: var(--probe-os-unknown); }
		
		/* Card header line: [icon] Debian \xB7 hostname */
		.probe_osLine {
		  display: inline-flex;
		  align-items: center;
		  gap: 5px;
		  min-width: 0;
		  font-size: 0.72rem;
		  font-weight: 500;
		  color: var(--probe-text-tertiary);
		  white-space: nowrap;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		/* ==========================================================================
		   Mikus top bar + welcome band + stat cards
		   Ported from komari-mikus \`header.probe_css\` / \`welcome.probe_css\` / \`stats.probe_css\`.
		   ========================================================================== */
		
		.probe_topbar {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 16px;
		  flex: none;
		  height: 56px;
		  /* A flex row never shrinks below its content unless told to: without this the
		     header's buttons define the page width and the whole panel overflows on a
		     phone. */
		  min-width: 0;
		  padding: 0 18px;
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		  box-shadow: var(--probe-shadow-card);
		}
		
		.probe_brand {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  min-width: 0;
		  flex: 1 1 auto;
		  overflow: hidden;
		}
		
		.probe_brandMark {
		  display: grid;
		  place-items: center;
		  flex: none;
		  width: 34px;
		  height: 34px;
		  color: #fff;
		  background: linear-gradient(135deg, var(--probe-sakura-2), var(--probe-accent));
		  border-radius: var(--probe-r-sm);
		  transition: transform var(--probe-t);
		}
		
		.probe_brandMark svg { width: 18px; height: 18px; }
		
		.probe_brand:hover .probe_brandMark { transform: rotate(-10deg) scale(1.08); }
		
		.probe_brandName {
		  font-size: 1.15rem;
		  font-weight: 700;
		  letter-spacing: -0.02em;
		  color: var(--probe-text-primary);
		  white-space: nowrap;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		.probe_topbarActions {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex: none;
		  min-width: 0;
		}
		
		/* --- welcome band ---------------------------------------------------------- */
		
		.probe_welcome {
		  position: relative;
		  flex: none;
		  /* Mikus reserve: the mascot hangs above the band, so the band itself must
		     not clip and must leave room for it (\`margin-top: 60px\` upstream). */
		  overflow: visible;
		  margin-top: 60px;
		  padding: 28px 32px;
		  background: linear-gradient(135deg, var(--probe-bg-card) 0%, var(--probe-bg-tertiary) 50%, var(--probe-bg-card) 100%);
		  background-size: 200% 200%;
		  animation: probeGradientShift 8s ease infinite;
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-lg);
		  box-shadow: var(--probe-shadow-card);
		}
		
		@keyframes probeGradientShift {
		  0%, 100% { background-position: 0% 50%; }
		  50% { background-position: 100% 50%; }
		}
		
		.probe_welcomeDeco {
		  position: absolute;
		  inset: 0;
		  pointer-events: none;
		  overflow: hidden;
		  border-radius: inherit;
		}
		
		.probe_decoCircle {
		  position: absolute;
		  border-radius: 50%;
		  opacity: 0.1;
		}
		
		.probe_decoCircle[data-i='1'] {
		  width: 200px; height: 200px;
		  top: -80px; right: -50px;
		  background: var(--probe-accent);
		  animation: probeFloat 6s ease-in-out infinite;
		}
		
		.probe_decoCircle[data-i='2'] {
		  width: 150px; height: 150px;
		  bottom: -60px; left: -40px;
		  background: var(--probe-info);
		  animation: probeFloat 8s ease-in-out infinite reverse;
		}
		
		.probe_decoCircle[data-i='3'] {
		  width: 100px; height: 100px;
		  top: 50%; right: 20%;
		  background: var(--probe-success);
		  animation: probeFloat 7s ease-in-out infinite 1s;
		}
		
		@keyframes probeFloat {
		  0%, 100% { transform: translateY(0) scale(1); }
		  50% { transform: translateY(-20px) scale(1.05); }
		}
		
		/* Falling sakura petals \u2014 the signature Mikus flourish. */
		.probe_sakuraPetal {
		  position: absolute;
		  width: 12px;
		  height: 12px;
		  border-radius: 50% 0 50% 50%;
		  background: var(--probe-sakura-1);
		  opacity: 0.4;
		  animation: probeSakuraFall 10s linear infinite;
		}
		
		.probe_sakuraPetal[data-i='0'] { left: 10%; animation-delay: 0s; animation-duration: 12s; }
		.probe_sakuraPetal[data-i='1'] { left: 30%; animation-delay: 2s; animation-duration: 10s; }
		.probe_sakuraPetal[data-i='2'] { left: 50%; animation-delay: 4s; animation-duration: 14s; }
		.probe_sakuraPetal[data-i='3'] { left: 70%; animation-delay: 1s; animation-duration: 11s; }
		.probe_sakuraPetal[data-i='4'] { left: 88%; animation-delay: 3s; animation-duration: 13s; }
		.probe_sakuraPetal[data-i='5'] { left: 20%; animation-delay: 6s; animation-duration: 16s; }
		
		@keyframes probeSakuraFall {
		  0% { transform: translateY(-20px) rotate(0deg) scale(0.8); opacity: 0; }
		  10% { opacity: 0.5; }
		  90% { opacity: 0.3; }
		  100% { transform: translateY(140px) rotate(360deg) scale(0.6); opacity: 0; }
		}
		
		.probe_welcomeContent {
		  position: relative;
		  z-index: 1;
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 20px;
		}
		
		.probe_welcomeGreeting {
		  display: flex;
		  align-items: center;
		  gap: 16px;
		  min-width: 0;
		  padding-left: 96px;
		}
		
		/* The mascot overflows the band's top-left corner, exactly as Mikus places it. */
		.probe_greetingMascot {
		  position: absolute;
		  top: -80px;
		  left: -60px;
		  width: 180px;
		  height: 180px;
		  object-fit: contain;
		  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
		  animation: probeBounce 2s ease-in-out infinite;
		  transform-origin: bottom center;
		  will-change: transform;
		  z-index: 10;
		}
		
		@keyframes probeBounce {
		  0%, 100% { transform: translateY(0); }
		  50% { transform: translateY(-8px); }
		}
		
		.probe_greetingInfo {
		  display: flex;
		  flex-direction: column;
		  gap: 4px;
		  min-width: 0;
		}
		
		.probe_greetingText {
		  font-size: 1.7rem;
		  font-weight: 700;
		  letter-spacing: -0.02em;
		  background: linear-gradient(135deg, var(--probe-text-primary) 0%, var(--probe-accent) 100%);
		  -webkit-background-clip: text;
		  background-clip: text;
		  -webkit-text-fill-color: transparent;
		}
		
		.probe_greetingSubtitle {
		  font-size: 0.85rem;
		  font-weight: 400;
		  color: var(--probe-text-secondary);
		}
		
		.probe_welcomeTime {
		  display: flex;
		  flex-direction: column;
		  align-items: flex-end;
		  gap: 4px;
		  flex: none;
		}
		
		.probe_timeLabel {
		  font-size: 0.85rem;
		  font-weight: 500;
		  color: var(--probe-text-secondary);
		}
		
		.probe_timeValue {
		  font-size: 1.9rem;
		  font-weight: 700;
		  font-family: var(--probe-mono);
		  font-variant-numeric: tabular-nums;
		  letter-spacing: 0.05em;
		  background: linear-gradient(135deg, var(--probe-accent) 0%, var(--probe-sakura-2) 100%);
		  -webkit-background-clip: text;
		  background-clip: text;
		  -webkit-text-fill-color: transparent;
		}
		
		.probe_trafficText {
		  font-size: 0.72rem;
		  font-weight: 500;
		  color: var(--probe-text-secondary);
		  white-space: nowrap;
		}
		
		/* --- stat cards ------------------------------------------------------------ */
		
		.probe_stats {
		  display: flex;
		  gap: 14px;
		  flex: none;
		  flex-wrap: wrap;
		}
		
		.probe_stat {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  padding: 12px 22px;
		  background: var(--probe-bg-card);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  box-shadow: var(--probe-shadow-card);
		  transition: box-shadow var(--probe-t), transform var(--probe-t);
		}
		
		.probe_stat:hover {
		  transform: translateY(-2px);
		  box-shadow: var(--probe-shadow-md);
		}
		
		/* --- welcome / stats responsive -------------------------------------------- */
		
		/* ==========================================================================
		   Manage tab \u2014 host CRUD lives here, not on the monitoring page
		   ========================================================================== */
		
		.probe_manageList {
		  display: flex;
		  flex-direction: column;
		  gap: 10px;
		}
		
		.probe_manageRow {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 16px;
		  flex-wrap: wrap;
		  padding: 14px 16px;
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  transition: box-shadow var(--probe-t-fast);
		}
		
		.probe_manageRow:hover { box-shadow: var(--probe-shadow-sm); }
		
		.probe_manageMain {
		  display: flex;
		  flex-direction: column;
		  gap: 5px;
		  flex: 1 1 240px;
		  min-width: 0;
		}
		
		.probe_manageTop {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex-wrap: wrap;
		  min-width: 0;
		}
		
		.probe_manageName {
		  font-size: 0.9rem;
		  font-weight: 600;
		  color: var(--probe-text-primary);
		  overflow: hidden;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		}
		
		.probe_manageMeta {
		  display: flex;
		  align-items: center;
		  gap: 10px;
		  flex-wrap: wrap;
		  font-size: 0.72rem;
		  color: var(--probe-text-tertiary);
		  min-width: 0;
		}
		
		.probe_manageMeta .probe_mono {
		  font-family: var(--probe-mono);
		  font-size: 0.68rem;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		  max-width: 180px;
		}
		
		.probe_manageActions {
		  display: flex;
		  align-items: center;
		  gap: 8px;
		  flex: none;
		  flex-wrap: wrap;
		}
		
		.probe_manageActions .probe_ghostButton {
		  height: 32px;
		  padding: 0 12px;
		  font-size: 0.76rem;
		}
		
		/* ==========================================================================
		   Top-bar search + view toggle (mikus \`.probe_search-box\` / \`.probe_view-toggle\`)
		   ========================================================================== */
		
		.probe_topSearch {
		  position: relative;
		  display: flex;
		  align-items: center;
		  flex: 1 1 auto;
		  max-width: 280px;
		  min-width: 130px;
		}
		
		.probe_topSearchIcon {
		  position: absolute;
		  left: 11px;
		  width: 15px;
		  height: 15px;
		  color: var(--probe-text-tertiary);
		  pointer-events: none;
		  z-index: 1;
		}
		
		.probe_topSearchInput {
		  width: 100%;
		  height: 34px;
		  padding: 0 12px 0 34px;
		  font-size: 0.82rem;
		  font-family: inherit;
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-tertiary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-sm);
		  outline: none;
		  transition: border-color var(--probe-t-fast), background var(--probe-t-fast), box-shadow var(--probe-t-fast);
		}
		
		.probe_topSearchInput::placeholder { color: var(--probe-text-tertiary); }
		
		.probe_topSearchInput:focus {
		  border-color: var(--probe-accent);
		  background: var(--probe-bg-secondary);
		  box-shadow: 0 0 0 3px rgba(232, 102, 138, 0.15);
		}
		
		.probe_topViewToggle {
		  display: flex;
		  align-items: center;
		  gap: 2px;
		  flex: none;
		  padding: 4px;
		  background: var(--probe-bg-tertiary);
		  border-radius: var(--probe-r-sm);
		}
		
		.probe_topViewButton {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  padding: 6px;
		  color: var(--probe-text-tertiary);
		  background: transparent;
		  border: none;
		  border-radius: 6px;
		  cursor: pointer;
		  transition: color var(--probe-t-fast), background var(--probe-t-fast), transform var(--probe-t-fast);
		}
		
		.probe_topViewButton:hover {
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-secondary);
		}
		
		.probe_topViewButton:active { transform: scale(0.9); }
		
		.probe_topViewButton[data-active] {
		  color: var(--probe-accent);
		  background: var(--probe-bg-secondary);
		}
		
		/* The top bar must not squeeze the search away on narrow screens. */
		/* ==========================================================================
		   Footer (mikus \`footer.probe_css\`): quiet attribution line under the content
		   ========================================================================== */
		
		.probe_footer {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  gap: 12px;
		  flex: none;
		  flex-wrap: wrap;
		  margin-top: auto;
		  padding: 14px 4px 2px;
		  font-size: 0.72rem;
		  color: var(--probe-text-tertiary);
		  border-top: 1px solid var(--probe-border-light);
		}
		
		.probe_footerMeta {
		  font-family: var(--probe-mono);
		  font-size: 0.68rem;
		}
		
		/* ==========================================================================
		   Mikus card entrance + hover micro-interactions
		   (nodes.probe_css: fadeInUp 0.4s with a 50ms stagger per card)
		   ========================================================================== */
		
		.probe_card[data-enter] {
		  opacity: 0;
		  animation: probeFadeInUp 0.4s ease forwards;
		}
		
		.probe_card:nth-child(1)[data-enter] { animation-delay: 0.05s; }
		.probe_card:nth-child(2)[data-enter] { animation-delay: 0.1s; }
		.probe_card:nth-child(3)[data-enter] { animation-delay: 0.15s; }
		.probe_card:nth-child(4)[data-enter] { animation-delay: 0.2s; }
		.probe_card:nth-child(5)[data-enter] { animation-delay: 0.25s; }
		.probe_card:nth-child(6)[data-enter] { animation-delay: 0.3s; }
		.probe_card:nth-child(7)[data-enter] { animation-delay: 0.35s; }
		.probe_card:nth-child(8)[data-enter] { animation-delay: 0.4s; }
		.probe_card:nth-child(9)[data-enter] { animation-delay: 0.45s; }
		.probe_card:nth-child(10)[data-enter] { animation-delay: 0.5s; }
		
		@keyframes probeFadeInUp {
		  from { opacity: 0; transform: translateY(20px); }
		  to { opacity: 1; transform: translateY(0); }
		}
		
		/* The status dot swells slightly under the pointer, like Mikus. */
		.probe_card:hover .probe_dot { transform: scale(1.2); }
		
		.probe_card:active { transform: scale(0.98); transition: transform 0.1s ease; }
		
		/* ==========================================================================
		   Latency page
		   ========================================================================== */
		
		.probe_taskList {
		  display: flex;
		  flex-direction: column;
		  gap: 8px;
		}
		
		.probe_taskRow {
		  display: flex;
		  align-items: center;
		  gap: 12px;
		  width: 100%;
		  padding: 12px 14px;
		  text-align: left;
		  font: inherit;
		  color: var(--probe-text-primary);
		  background: var(--probe-bg-secondary);
		  border: 1px solid var(--probe-border);
		  border-radius: var(--probe-r-md);
		  cursor: pointer;
		  transition: border-color var(--probe-t-fast), box-shadow var(--probe-t-fast);
		}
		
		.probe_taskRow:hover { box-shadow: var(--probe-shadow-sm); }
		
		.probe_taskRow[data-active] {
		  border-color: var(--probe-accent);
		  box-shadow: 0 0 0 3px var(--probe-accent-light);
		}
		
		.probe_taskKind {
		  flex: none;
		  padding: 2px 7px;
		  font-family: var(--probe-mono);
		  font-size: 0.66rem;
		  font-weight: 700;
		  letter-spacing: 0.04em;
		  border-radius: 4px;
		  color: var(--probe-accent);
		  background: var(--probe-accent-light);
		}
		
		.probe_taskKind[data-kind='tcp'] { color: var(--probe-info); background: var(--probe-info-light); }
		.probe_taskKind[data-kind='http'] { color: var(--probe-success); background: var(--probe-success-light); }
		
		.probe_taskMain {
		  display: flex;
		  flex-direction: column;
		  gap: 2px;
		  flex: 1;
		  min-width: 0;
		}
		
		.probe_taskName {
		  font-size: 0.86rem;
		  font-weight: 600;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		}
		
		.probe_taskTarget {
		  font-family: var(--probe-mono);
		  font-size: 0.7rem;
		  color: var(--probe-text-tertiary);
		  overflow: hidden;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		}
		
		.probe_taskMeta {
		  flex: none;
		  font-size: 0.7rem;
		  color: var(--probe-text-tertiary);
		  white-space: nowrap;
		}
		
		.probe_lossBadge[data-tone='ok'] { color: var(--probe-success); background: var(--probe-success-light); }
		.probe_lossBadge[data-tone='warn'] { color: var(--probe-warning); background: var(--probe-warning-light); }
		.probe_lossBadge[data-tone='bad'] { color: var(--probe-danger); background: var(--probe-danger-light); }
		
		.probe_hostPicker {
		  display: flex;
		  flex-wrap: wrap;
		  gap: 10px 16px;
		  padding: 12px 14px;
		  background: var(--probe-bg-tertiary);
		  border-radius: var(--probe-r-sm);
		}
		
		.probe_hostPicker .probe_check { flex: 0 1 auto; }
		
		/* Y-axis labels drawn over the chart's left edge. */
		.probe_chartScale {
		  position: absolute;
		  top: 10px;
		  left: 4px;
		  display: flex;
		  flex-direction: column;
		  justify-content: space-between;
		  height: calc(100% - 38px);
		  pointer-events: none;
		  font-family: var(--probe-mono);
		  font-size: 0.62rem;
		  color: var(--probe-text-tertiary);
		}
		
		
		/* ==========================================================================
		   Responsive rules.
		
		   Every media query in this file lives here, after all base rules. They used to
		   be appended next to the component they belonged to, which let a base rule
		   defined later silently override a breakpoint (that is how the mobile view
		   toggle stayed visible). Keeping them in one ordered block makes the cascade
		   predictable.
		   ========================================================================== */
		@media (max-width: 900px) {
		  .probe_welcome { padding: 20px 20px 18px; }
		  .probe_welcomeGreeting { padding-left: 78px; gap: 12px; }
		  .probe_greetingMascot { width: 150px; height: 150px; top: -70px; left: -50px; }
		  .probe_greetingText { font-size: 1.35rem; }
		  .probe_timeValue { font-size: 1.4rem; }
		}
		
		@media (max-width: 900px) {
		  .probe_topSearch { max-width: 180px; }
		}
		
		@media (max-width: 768px) {
		  .probe_page {
		    padding: 12px 12px 16px;
		    gap: 12px;
		  }
		
		  .probe_title { font-size: 1.25rem; }
		
		  .probe_grid {
		    grid-template-columns: 1fr;
		    gap: 14px;
		    min-width: 0;
		  }
		
		  .probe_card {
		    padding: 16px;
		    border-radius: var(--probe-r-md);
		  }
		
		  /* Touch: the hover lift is meaningless, so settle the shadow back down. */
		  .probe_card:hover,
		  .probe_card:active {
		    transform: none;
		    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		    border-color: var(--probe-border);
		  }
		
		  .probe_tiles { grid-template-columns: repeat(2, minmax(0, 1fr)); }
		  .probe_tile[data-wide] { grid-column: 1 / -1; }
		
		  .probe_stats {
		    display: grid;
		    grid-template-columns: repeat(2, minmax(0, 1fr));
		    gap: 8px;
		  }
		
		  .probe_stat { padding: 8px 12px; }
		
		  .probe_statValue { font-size: 1.05rem; }
		
		  .probe_listBar { gap: 8px; }
		
		  .probe_searchWrap { flex: 1 1 100%; }
		
		  .probe_filterPills,
		  .probe_rangePills {
		    flex: 1 1 auto;
		    overflow-x: auto;
		    scrollbar-width: none;
		  }
		
		  /* Four tabs do not fit at 457px; scroll them instead of wrapping, which would
		     push the whole content down. */
		  .probe_tabs {
		    display: flex;
		    max-width: 100%;
		    overflow-x: auto;
		    scrollbar-width: none;
		  }
		
		  .probe_tabs::-webkit-scrollbar { display: none; }
		
		  .probe_tab { flex: none; }
		
		  .probe_filterPills::-webkit-scrollbar,
		  .probe_rangePills::-webkit-scrollbar { display: none; }
		
		  .probe_modal {
		    width: calc(100vw - 20px);
		    max-height: calc(100vh - 24px);
		    border-radius: var(--probe-r-lg);
		  }
		
		  .probe_modalHeader { padding: 16px 16px 12px; }
		  .probe_modalBody { padding: 14px 16px; }
		  .probe_modalFooter {
		    padding: 12px 16px 16px;
		    flex-wrap: wrap;
		  }
		
		  .probe_modalFooter > button { flex: 1 1 auto; }
		
		  .probe_metricGrid { gap: 10px; }
		
		  .probe_section,
		  .probe_chartCard { padding: 14px 16px; }
		
		  .probe_detailTitle { font-size: 1.15rem; }
		
		  .probe_queryState,
		  .probe_quietState {
		    flex-direction: column;
		    align-items: flex-start;
		    gap: 10px;
		  }
		
		  .probe_tableWrap { font-size: 0.75rem; }
		  .probe_table thead th,
		  .probe_table tbody td { padding: 9px 10px; }
		}
		
		@media (max-width: 640px) {
		  .probe_topbar {
		    height: auto;
		    min-height: 50px;
		    padding: 8px 12px;
		    gap: 8px;
		    border-radius: var(--probe-r-md);
		  }
		  .probe_brandName { font-size: 1rem; }
		  .probe_brandMark { width: 28px; height: 28px; }
		  /* The row cannot hold a search box, two view buttons, Refresh and the gear at
		     this width; the search is already hidden below 640px, so drop the view
		     toggle and the Refresh label here and keep the gear reachable. */
		  .probe_topViewToggle { display: none; }
		  .probe_topbarActions .probe_ghostButton { display: none; }
		  .probe_topbarActions .probe_iconButton { width: 34px; height: 34px; }
		
		  /* Room for the mascot above the band; without it the figure lands on the
		     header. Upstream uses 40px at this breakpoint. */
		  .probe_welcome {
		    margin-top: 44px;
		    padding: 14px;
		    border-radius: var(--probe-r-md);
		    min-width: 0;
		  }
		
		  /* Upstream hides the petals and glow discs below 768px, matching the band. */
		  .probe_sakuraPetal,
		  .probe_decoCircle { display: none; }
		
		  /* A phone cannot hold the greeting and the clock side by side: the greeting
		     column collapses to about 70px and wraps to two lines. Stack them instead,
		     greeting first, and let the mascot keep the corner above the band. */
		  .probe_welcomeContent {
		    flex-direction: column;
		    align-items: flex-start;
		    gap: 8px;
		    min-width: 0;
		  }
		
		  .probe_welcomeGreeting {
		    padding-left: 82px;
		    flex-direction: column;
		    align-items: flex-start;
		    gap: 2px;
		    flex: none;
		    min-width: 0;
		    width: 100%;
		  }
		
		  .probe_greetingMascot {
		    width: 74px;
		    height: 74px;
		    top: -42px;
		    left: -4px;
		  }
		
		  .probe_greetingText { font-size: 1.2rem; }
		  .probe_greetingSubtitle { font-size: 0.75rem; }
		
		  .probe_welcomeTime {
		    align-items: flex-start;
		    width: 100%;
		    min-width: 0;
		  }
		
		  .probe_timeLabel { font-size: 0.75rem; }
		  .probe_timeValue { font-size: 1.35rem; }
		  .probe_trafficText { font-size: 0.68rem; }
		
		  .probe_stats { gap: 8px; }
		
		  .probe_stat {
		    flex: 1 1 auto;
		    justify-content: space-between;
		    padding: 9px 14px;
		  }
		
		  .probe_statLabel { font-size: 0.75rem; }
		  .probe_statValue { font-size: 1rem; }
		}
		
		@media (max-width: 640px) {
		  .probe_manageRow { padding: 12px; gap: 10px; }
		  .probe_manageActions {
		    width: 100%;
		    justify-content: flex-end;
		  }
		  .probe_manageActions .probe_ghostButton { flex: 1 1 auto; }
		}
		
		@media (max-width: 640px) {
		  .probe_topSearch { display: none; }
		}
		
		@media (max-width: 640px) {
		  .probe_taskRow { flex-wrap: wrap; gap: 8px; }
		  .probe_taskMeta { display: none; }
		  .probe_hostPicker { flex-direction: column; }
		}
		
		@media (max-width: 480px) {
		  .probe_card { padding: 12px; }
		  .probe_metricGrid { gap: 10px; }
		  .probe_gaugeLabel { font-size: 0.62rem; letter-spacing: 0.04em; }
		  .probe_gaugeValue { font-size: 0.78rem; }
		  .probe_stats { grid-template-columns: 1fr; }
		  .probe_tab { padding: 7px 12px; font-size: 0.76rem; }
		}
		
		@media (prefers-reduced-motion: reduce) {
		  .probe_dot,
		  .probe_alertRow[data-active] .probe_alertDot,
		  .probe_skeletonLine { animation: none; }
		  .probe_card,
		  .probe_stat,
		  .probe_tile { transition: none; }
		  .probe_card:hover { transform: none; }
		}
		
		@media (prefers-reduced-motion: reduce) {
		  .probe_welcome { animation: none; }
		  .probe_sakuraPetal,
		  .probe_decoCircle,
		  .probe_greetingMascot { animation: none; }
		}
		
		@media (prefers-reduced-motion: reduce) {
		  .probe_card[data-enter] { animation: none; opacity: 1; }
		  .probe_card:active { transform: none; }
		  .probe_card:hover .probe_dot { transform: none; }
		}
		
		/* ==========================================================================
		   Phone layout: the two summary strips and the card body need explicit grids.
		
		   Appended after the consolidated block above, at the same breakpoint, so these
		   win by being later in the file rather than by specificity games.
		   ========================================================================== */
		
		@media (max-width: 640px) {
		  /* Total / Online / Alerts: three pills across 457px clips the last one, so
		     give them two per row and let the third take the free half. */
		  .probe_stats {
		    display: grid;
		    grid-template-columns: repeat(2, minmax(0, 1fr));
		    gap: 8px;
		  }
		
		  .probe_stat {
		    justify-content: space-between;
		    padding: 9px 12px;
		    min-width: 0;
		  }
		
		  .probe_statLabel { font-size: 0.75rem; }
		  .probe_statValue { font-size: 1.05rem; }
		
		  /* Both summary strips share \`.probe_stats\`, so the grid above covers the in-panel
		     one (hosts online / alerts / avg cpu / avg memory) as well. */
		
		  /* A card must size to its content: an inherited flex stretch was leaving a
		     large empty area under the metric grid. */
		  .probe_card {
		    height: auto;
		    align-self: start;
		  }
		
		  .probe_cardFoot { gap: 8px 10px; }
		}
		
		@media (max-width: 640px) {
		  /* Three summary figures into two columns leaves a half-empty row; let an odd
		     last card take the full width so the strip reads as a deliberate grid. */
		  .probe_stats > .probe_stat:nth-child(odd):last-child {
		    grid-column: 1 / -1;
		  }
		}
		
		@media (max-width: 640px) {
		  /* A settings row holds a label plus one or two number fields. Wrapping them
		     flexibly reads as a staircase on a phone (Threshold right, Hold left on the
		     next line), so switch to a two-column grid: label across the top, then the
		     fields side by side. */
		  .probe_settingsRow {
		    display: grid;
		    grid-template-columns: repeat(2, minmax(0, 1fr));
		    align-items: end;
		    gap: 10px 12px;
		    padding: 12px;
		  }
		
		  .probe_settingsRow > .probe_check {
		    grid-column: 1 / -1;
		    flex: none;
		  }
		
		  .probe_settingsRow > .probe_field {
		    min-width: 0;
		  }
		
		  /* A single field (the offline rule) should not stretch across both columns. */
		  .probe_settingsRow > .probe_field:only-of-type {
		    grid-column: 1 / 2;
		  }
		
		  .probe_inlineInput { width: 100%; }
		
		  .probe_inlineInput input {
		    flex: 1;
		    width: auto;
		    min-width: 0;
		  }
		
		  /* The geo section's provider picker and its status line stack instead. */
		  .probe_settingsRow > .probe_field select {
		    width: 100%;
		    max-width: none;
		  }
		
		  .probe_fieldRow { grid-template-columns: 1fr; }
		}
		
		@media (max-width: 640px) {
		  /* Explanatory text under a settings row belongs on its own line, not in the
		     second grid column beside the control. */
		  .probe_settingsRow > .probe_hint,
		  .probe_settingsRow > .probe_muted,
		  .probe_settingsRow > .probe_fieldError {
		    grid-column: 1 / -1;
		  }
		}
		
		/* ==========================================================================
		   Console shell (admin page)
		   The theme has no equivalent \u2014 upstream keeps management in Komari's own
		   /admin, which is exactly the split this page follows.
		   ========================================================================== */
		
		.probe_admin {
		  display: flex;
		  flex-direction: column;
		  height: 100%;
		  min-height: 0;
		  overflow: hidden;
		  background: var(--probe-bg-primary);
		}
		
		.probe_adminTopbar {
		  display: flex;
		  align-items: center;
		  gap: 12px;
		  flex: none;
		  height: 54px;
		  padding: 0 16px;
		  background: var(--probe-bg-secondary);
		  border-bottom: 1px solid var(--probe-border);
		}
		
		.probe_adminBack {
		  display: inline-flex;
		  align-items: center;
		  gap: 5px;
		  height: 32px;
		  padding: 0 11px 0 7px;
		  font: inherit;
		  font-size: 0.8rem;
		  font-weight: 600;
		  color: var(--probe-text-secondary);
		  background: transparent;
		  border: 1px solid transparent;
		  border-radius: var(--probe-r-sm);
		  cursor: pointer;
		  transition: background var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_adminBack:hover { color: var(--probe-accent); background: var(--probe-accent-light); }
		
		.probe_adminTitle {
		  font-size: 1rem;
		  font-weight: 700;
		  letter-spacing: -0.01em;
		  color: var(--probe-text-primary);
		}
		
		.probe_adminMenu {
		  display: none;
		  align-items: center;
		  justify-content: center;
		  width: 32px;
		  height: 32px;
		  margin-left: auto;
		  color: var(--probe-text-secondary);
		  background: transparent;
		  border: none;
		  border-radius: var(--probe-r-sm);
		  cursor: pointer;
		}
		
		.probe_adminBody {
		  display: flex;
		  flex: 1;
		  min-height: 0;
		  overflow: hidden;
		}
		
		.probe_adminRail {
		  display: flex;
		  flex-direction: column;
		  gap: 2px;
		  flex: none;
		  width: 184px;
		  padding: 12px 10px;
		  overflow-y: auto;
		  background: var(--probe-bg-secondary);
		  border-right: 1px solid var(--probe-border);
		}
		
		.probe_adminRailItem {
		  display: flex;
		  align-items: center;
		  gap: 9px;
		  width: 100%;
		  padding: 9px 11px;
		  font: inherit;
		  font-size: 0.82rem;
		  font-weight: 600;
		  text-align: left;
		  color: var(--probe-text-secondary);
		  background: transparent;
		  border: none;
		  border-radius: var(--probe-r-sm);
		  cursor: pointer;
		  white-space: nowrap;
		  transition: background var(--probe-t-fast), color var(--probe-t-fast);
		}
		
		.probe_adminRailItem:hover { color: var(--probe-text-primary); background: var(--probe-bg-tertiary); }
		
		.probe_adminRailItem[data-active] {
		  color: var(--probe-accent);
		  background: var(--probe-accent-light);
		}
		
		.probe_adminRailIcon {
		  display: inline-flex;
		  flex: none;
		  width: 17px;
		  height: 17px;
		}
		
		.probe_adminRailIcon svg { width: 17px; height: 17px; }
		
		.probe_adminRailBadge {
		  margin-left: auto;
		  padding: 0 6px;
		  font-size: 0.68rem;
		  font-weight: 700;
		  line-height: 18px;
		  border-radius: 9px;
		  color: #fff;
		  background: var(--probe-danger);
		}
		
		.probe_adminContent {
		  flex: 1;
		  min-width: 0;
		  min-height: 0;
		  overflow-y: auto;
		  padding: 18px;
		}
		
		.probe_adminContent > * { max-width: 100%; }
		
		@media (max-width: 760px) {
		  .probe_adminRail {
		    position: absolute;
		    top: 54px;
		    left: 0;
		    bottom: 0;
		    z-index: 5;
		    width: 200px;
		    transform: translateX(-100%);
		    transition: transform var(--probe-t);
		    box-shadow: var(--probe-shadow-lg);
		  }
		
		  .probe_adminRail[data-open] { transform: translateX(0); }
		  .probe_adminMenu { display: inline-flex; }
		  .probe_adminBody { position: relative; }
		  .probe_adminContent { padding: 12px; }
		}
		`;
		var TAG_ID = "@local/dsh-probe/panel.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(TAG_ID) + "]") === null) {
		  const tag = document.createElement("style");
		  tag.dataset.plugin = "@local/dsh-probe";
		  tag.dataset.pluginCss = TAG_ID;
		  tag.textContent = CSS;
		  document.head.appendChild(tag);
		}
		var panel_default = { "admin": "probe_admin", "adminBack": "probe_adminBack", "adminBody": "probe_adminBody", "adminContent": "probe_adminContent", "adminMenu": "probe_adminMenu", "adminRail": "probe_adminRail", "adminRailBadge": "probe_adminRailBadge", "adminRailIcon": "probe_adminRailIcon", "adminRailItem": "probe_adminRailItem", "adminTitle": "probe_adminTitle", "adminTopbar": "probe_adminTopbar", "alertBody": "probe_alertBody", "alertChip": "probe_alertChip", "alertDot": "probe_alertDot", "alertRow": "probe_alertRow", "alertRule": "probe_alertRule", "alertTime": "probe_alertTime", "alertTitle": "probe_alertTitle", "alertValue": "probe_alertValue", "backButton": "probe_backButton", "backdrop": "probe_backdrop", "banner": "probe_banner", "bannerArrow": "probe_bannerArrow", "bannerIcon": "probe_bannerIcon", "bannerList": "probe_bannerList", "bannerText": "probe_bannerText", "body": "probe_body", "brand": "probe_brand", "brandMark": "probe_brandMark", "brandName": "probe_brandName", "card": "probe_card", "cardAge": "probe_cardAge", "cardCrest": "probe_cardCrest", "cardCrestEmpty": "probe_cardCrestEmpty", "cardFoot": "probe_cardFoot", "cardHeader": "probe_cardHeader", "cardInfo": "probe_cardInfo", "cardMeta": "probe_cardMeta", "cardNameRow": "probe_cardNameRow", "cardOs": "probe_cardOs", "cardStatus": "probe_cardStatus", "cardSubtitle": "probe_cardSubtitle", "cardTop": "probe_cardTop", "chartAxis": "probe_chartAxis", "chartBody": "probe_chartBody", "chartCard": "probe_chartCard", "chartEmpty": "probe_chartEmpty", "chartError": "probe_chartError", "chartGrid": "probe_chartGrid", "chartHeader": "probe_chartHeader", "chartLine": "probe_chartLine", "chartScale": "probe_chartScale", "chartSvg": "probe_chartSvg", "check": "probe_check", "chip": "probe_chip", "chipRow": "probe_chipRow", "colNet": "probe_colNet", "commandBlock": "probe_commandBlock", "commandHeader": "probe_commandHeader", "commandText": "probe_commandText", "commandTitle": "probe_commandTitle", "css": "probe_css", "dangerGhost": "probe_dangerGhost", "decoCircle": "probe_decoCircle", "detail": "probe_detail", "detailActions": "probe_detailActions", "detailHeader": "probe_detailHeader", "detailMeta": "probe_detailMeta", "detailTitle": "probe_detailTitle", "detailTitleRow": "probe_detailTitleRow", "dot": "probe_dot", "empty": "probe_empty", "emptyGlyph": "probe_emptyGlyph", "emptyText": "probe_emptyText", "emptyTitle": "probe_emptyTitle", "errorBar": "probe_errorBar", "field": "probe_field", "fieldError": "probe_fieldError", "fieldLabel": "probe_fieldLabel", "fieldRow": "probe_fieldRow", "filterPills": "probe_filterPills", "footItem": "probe_footItem", "footLabel": "probe_footLabel", "footValue": "probe_footValue", "footer": "probe_footer", "footerMeta": "probe_footerMeta", "gauge": "probe_gauge", "gaugeFill": "probe_gaugeFill", "gaugeLabel": "probe_gaugeLabel", "gaugeRow": "probe_gaugeRow", "gaugeTrack": "probe_gaugeTrack", "gaugeValue": "probe_gaugeValue", "ghostButton": "probe_ghostButton", "greetingInfo": "probe_greetingInfo", "greetingMascot": "probe_greetingMascot", "greetingSubtitle": "probe_greetingSubtitle", "greetingText": "probe_greetingText", "grid": "probe_grid", "header": "probe_header", "headerActions": "probe_headerActions", "headerText": "probe_headerText", "hint": "probe_hint", "hostName": "probe_hostName", "hostPicker": "probe_hostPicker", "iconButton": "probe_iconButton", "inlineInput": "probe_inlineInput", "input": "probe_input", "installStatus": "probe_installStatus", "installSummary": "probe_installSummary", "legend": "probe_legend", "legendDot": "probe_legendDot", "legendItem": "probe_legendItem", "linkButton": "probe_linkButton", "listBar": "probe_listBar", "liveNote": "probe_liveNote", "lossBadge": "probe_lossBadge", "manageActions": "probe_manageActions", "manageList": "probe_manageList", "manageMain": "probe_manageMain", "manageMeta": "probe_manageMeta", "manageName": "probe_manageName", "manageRow": "probe_manageRow", "manageTop": "probe_manageTop", "metaText": "probe_metaText", "metric": "probe_metric", "metric-bar": "probe_metric-bar", "metric-bar-fill": "probe_metric-bar-fill", "metricGrid": "probe_metricGrid", "metricValue": "probe_metricValue", "modal": "probe_modal", "modalBody": "probe_modalBody", "modalFooter": "probe_modalFooter", "modalHeader": "probe_modalHeader", "modalTitle": "probe_modalTitle", "mono": "probe_mono", "muted": "probe_muted", "nameCell": "probe_nameCell", "netCell": "probe_netCell", "node-card": "probe_node-card", "node-card-flag": "probe_node-card-flag", "node-card-header": "probe_node-card-header", "node-card-subtitle": "probe_node-card-subtitle", "notifySection": "probe_notifySection", "notifyTestRow": "probe_notifyTestRow", "offline": "probe_offline", "osIcon": "probe_osIcon", "osLine": "probe_osLine", "outdatedMark": "probe_outdatedMark", "page": "probe_page", "pill": "probe_pill", "primaryButton": "probe_primaryButton", "queryState": "probe_queryState", "quietState": "probe_quietState", "rangePills": "probe_rangePills", "rowChevron": "probe_rowChevron", "rowOpen": "probe_rowOpen", "sakuraPetal": "probe_sakuraPetal", "saveRow": "probe_saveRow", "savedNote": "probe_savedNote", "search-box": "probe_search-box", "searchClear": "probe_searchClear", "searchGlyph": "probe_searchGlyph", "searchInput": "probe_searchInput", "searchWrap": "probe_searchWrap", "section": "probe_section", "sectionHeader": "probe_sectionHeader", "sectionHint": "probe_sectionHint", "sectionTitle": "probe_sectionTitle", "seenCell": "probe_seenCell", "settingsGrid": "probe_settingsGrid", "settingsRow": "probe_settingsRow", "skeletonCard": "probe_skeletonCard", "skeletonLine": "probe_skeletonLine", "sortButton": "probe_sortButton", "spark": "probe_spark", "sparkArea": "probe_sparkArea", "sparkEmpty": "probe_sparkEmpty", "sparkLine": "probe_sparkLine", "sparkSvg": "probe_sparkSvg", "stat": "probe_stat", "statLabel": "probe_statLabel", "statValue": "probe_statValue", "stats": "probe_stats", "statusCell": "probe_statusCell", "statusChip": "probe_statusChip", "subtitle": "probe_subtitle", "tab": "probe_tab", "tabCount": "probe_tabCount", "table": "probe_table", "tableName": "probe_tableName", "tableRow": "probe_tableRow", "tableWrap": "probe_tableWrap", "tabs": "probe_tabs", "taskKind": "probe_taskKind", "taskList": "probe_taskList", "taskMain": "probe_taskMain", "taskMeta": "probe_taskMeta", "taskName": "probe_taskName", "taskRow": "probe_taskRow", "taskTarget": "probe_taskTarget", "tile": "probe_tile", "tileLabel": "probe_tileLabel", "tileSub": "probe_tileSub", "tileValue": "probe_tileValue", "tiles": "probe_tiles", "timeLabel": "probe_timeLabel", "timeValue": "probe_timeValue", "title": "probe_title", "tokenBlock": "probe_tokenBlock", "tokenError": "probe_tokenError", "tokenInline": "probe_tokenInline", "tokenOk": "probe_tokenOk", "tokenRow": "probe_tokenRow", "tokenValue": "probe_tokenValue", "topSearch": "probe_topSearch", "topSearchIcon": "probe_topSearchIcon", "topSearchInput": "probe_topSearchInput", "topViewButton": "probe_topViewButton", "topViewToggle": "probe_topViewToggle", "topbar": "probe_topbar", "topbarActions": "probe_topbarActions", "trafficText": "probe_trafficText", "unit": "probe_unit", "upgradeNote": "probe_upgradeNote", "versionsNote": "probe_versionsNote", "view-toggle": "probe_view-toggle", "viewButton": "probe_viewButton", "viewToggle": "probe_viewToggle", "waitingNote": "probe_waitingNote", "welcome": "probe_welcome", "welcomeContent": "probe_welcomeContent", "welcomeDeco": "probe_welcomeDeco", "welcomeGreeting": "probe_welcomeGreeting", "welcomeTime": "probe_welcomeTime" };
		
		// src/client/panel/LatencyChart.tsx
		var import_jsx_runtime = require("react/jsx-runtime");
		var COLORS = [
		  "#e8668a",
		  "#5c9ced",
		  "#4caf7d",
		  "#f5a623",
		  "#a78bfa",
		  "#34d399"
		];
		function tick(value) {
		  if (value >= 1e3) return `${(value / 1e3).toFixed(1)}s`;
		  if (value >= 10) return `${Math.round(value)}ms`;
		  return `${value.toFixed(1)}ms`;
		}
		function LatencyChart({ series, height = 220 }) {
		  const view = (0, import_react.useMemo)(() => {
		    const all = series.flatMap((line) => line.points);
		    if (all.length < 2) return null;
		    const from = Math.min(...all.map((point) => point.t));
		    const to = Math.max(...all.map((point) => point.t));
		    const values = all.map((point) => point.ms).filter((ms2) => ms2 !== null);
		    const maxMs = values.length === 0 ? 100 : Math.max(...values);
		    const ceiling = maxMs <= 1 ? 1 : Math.ceil(maxMs * 1.15);
		    const span = Math.max(1, to - from);
		    const width = 1e3;
		    const padY = 10;
		    const plot = height - 28;
		    const x = (t2) => (t2 - from) / span * width;
		    const y = (ms2) => padY + (1 - Math.min(ms2, ceiling) / ceiling) * (plot - padY);
		    return { from, to, ceiling, width, height: plot, x, y, span };
		  }, [series, height]);
		  if (view === null) {
		    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: panel_default.chartEmpty, children: "Not enough samples yet" });
		  }
		  const gridValues = [0, 0.25, 0.5, 0.75, 1].map((ratio) => view.ceiling * ratio);
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: panel_default.chartBody, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { className: panel_default.chartSvg, viewBox: `0 0 ${view.width} ${view.height}`, preserveAspectRatio: "none", role: "img", children: [
		      gridValues.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		        "line",
		        {
		          className: panel_default.chartGrid,
		          x1: 0,
		          x2: view.width,
		          y1: view.y(value),
		          y2: view.y(value)
		        },
		        value
		      )),
		      series.map((line, index) => {
		        const segments = [];
		        let current2 = "";
		        for (const point of line.points) {
		          if (point.ms === null) {
		            if (current2 !== "") segments.push(current2);
		            current2 = "";
		            continue;
		          }
		          const command = current2 === "" ? "M" : "L";
		          current2 += `${command}${view.x(point.t).toFixed(1)} ${view.y(point.ms).toFixed(1)} `;
		        }
		        if (current2 !== "") segments.push(current2);
		        return segments.map((path, segment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		          "path",
		          {
		            className: panel_default.chartLine,
		            style: { stroke: COLORS[index % COLORS.length] },
		            d: path.trim()
		          },
		          `${line.hostId}-${segment}`
		        ));
		      })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: panel_default.chartScale, "aria-hidden": "true", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tick(view.ceiling) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tick(view.ceiling / 2) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0" })
		    ] })
		  ] });
		}
		function seriesColor(index) {
		  return COLORS[index % COLORS.length];
		}
		
		// src/client/panel/LatencyTab.tsx
		var import_jsx_runtime2 = require("react/jsx-runtime");
		var WINDOWS = [
		  { key: "15m", label: "15m", ms: 15 * 60 * 1e3 },
		  { key: "1h", label: "1h", ms: 60 * 60 * 1e3 },
		  { key: "6h", label: "6h", ms: 6 * 60 * 60 * 1e3 }
		];
		function ms(value) {
		  if (value === null || value === void 0) return "\u2014";
		  if (value >= 1e3) return `${(value / 1e3).toFixed(2)}s`;
		  return `${value.toFixed(1)}ms`;
		}
		function lossTone(loss) {
		  if (loss === null || loss === 0) return "ok";
		  return loss >= 10 ? "bad" : "warn";
		}
		function LatencyTab({ api, hosts }) {
		  const [tasks, setTasks] = (0, import_react2.useState)(null);
		  const [error, setError] = (0, import_react2.useState)(null);
		  const [selected, setSelected] = (0, import_react2.useState)(null);
		  const [windowMs, setWindowMs] = (0, import_react2.useState)(WINDOWS[1].ms);
		  const [series, setSeries] = (0, import_react2.useState)([]);
		  const [loading, setLoading] = (0, import_react2.useState)(false);
		  const [editing, setEditing] = (0, import_react2.useState)(null);
		  const [creating, setCreating] = (0, import_react2.useState)(false);
		  const load3 = (0, import_react2.useCallback)(async () => {
		    try {
		      const next = await api.listPingTasks();
		      setTasks(next);
		      setError(null);
		      setSelected((current2) => current2 !== null && next.some((task2) => task2.id === current2) ? current2 : next[0]?.id ?? null);
		    } catch (cause) {
		      setError(errorMessage(cause));
		    }
		  }, [api]);
		  (0, import_react2.useEffect)(() => {
		    void load3();
		  }, [load3]);
		  (0, import_react2.useEffect)(() => {
		    const timer = setInterval(() => {
		      void load3();
		    }, 5e3);
		    return () => clearInterval(timer);
		  }, [load3]);
		  const task = (0, import_react2.useMemo)(() => tasks?.find((item) => item.id === selected) ?? null, [tasks, selected]);
		  const loadSeries = (0, import_react2.useCallback)(async () => {
		    if (task === null) {
		      setSeries([]);
		      return;
		    }
		    setLoading(true);
		    try {
		      const rows = await Promise.all(task.hosts.map(async (hostId) => {
		        const points = await api.pingSeries(task.id, hostId, windowMs);
		        const hostName = task.results.find((result) => result.hostId === hostId)?.hostName ?? hostId;
		        return { hostId, hostName, points };
		      }));
		      setSeries(rows.filter((row) => row.points.length > 0));
		      setError(null);
		    } catch (cause) {
		      setError(errorMessage(cause));
		    } finally {
		      setLoading(false);
		    }
		  }, [api, task, windowMs]);
		  (0, import_react2.useEffect)(() => {
		    void loadSeries();
		    const timer = setInterval(() => {
		      void loadSeries();
		    }, 1e4);
		    return () => clearInterval(timer);
		  }, [loadSeries]);
		  const remove = async (id) => {
		    try {
		      await api.deletePingTask(id);
		      await load3();
		    } catch (cause) {
		      setError(errorMessage(cause));
		    }
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.tabBody, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.section, children: [
		      error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.errorBar, children: tt("error.action", { message: error }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("latency.title") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionHint, children: tt("latency.desc") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.saveRow, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: panel_default.primaryButton, onClick: () => {
		        setCreating(true);
		      }, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: "+" }),
		        " ",
		        tt("latency.add")
		      ] }) }),
		      tasks !== null && tasks.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.muted, children: tt("latency.empty") }),
		      tasks !== null && tasks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.taskList, children: tasks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
		        "button",
		        {
		          type: "button",
		          className: panel_default.taskRow,
		          "data-active": item.id === selected ? "true" : void 0,
		          onClick: () => {
		            setSelected(item.id);
		          },
		          children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.taskKind, "data-kind": item.type, children: item.type.toUpperCase() }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.taskMain, children: [
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.taskName, children: item.name }),
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.taskTarget, children: item.target })
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.taskMeta, children: tt("latency.interval", { sec: item.intervalSec }) }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.taskMeta, children: tt("latency.hostCount", { count: item.hosts.length }) })
		          ]
		        },
		        item.id
		      )) })
		    ] }),
		    task !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.section, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.sectionHeader, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("latency.results") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.rangePills, children: WINDOWS.map((window2) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		            "button",
		            {
		              type: "button",
		              className: panel_default.pill,
		              "data-active": windowMs === window2.ms ? "true" : void 0,
		              onClick: () => {
		                setWindowMs(window2.ms);
		              },
		              children: window2.label
		            },
		            window2.key
		          )) })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.tableWrap, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("table", { className: panel_default.table, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tr", { children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: tt("latency.col.host") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: tt("latency.col.latest") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: tt("latency.col.avg") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: tt("latency.col.loss") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: tt("latency.col.samples") }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", {})
		          ] }) }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tbody", { children: task.results.map((result, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tr", { children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.metric, children: [
		              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.legendDot, style: { background: seriesColor(index) } }),
		              result.hostName
		            ] }) }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: panel_default.mono, children: ms(result.latest) }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: panel_default.mono, children: ms(result.avg) }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `${panel_default.badge} ${panel_default.lossBadge}`, "data-tone": lossTone(result.loss), children: result.loss === null ? "\u2014" : `${result.loss}%` }) }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: panel_default.mono, children: result.count }),
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: panel_default.rowOpen, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		              "button",
		              {
		                type: "button",
		                className: panel_default.linkButton,
		                onClick: () => {
		                  setEditing(task);
		                },
		                children: tt("action.edit")
		              }
		            ) })
		          ] }, result.hostId)) })
		        ] }) })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.chartCard, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.chartHeader, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.sectionTitle, children: tt("latency.chart") }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.legend, children: series.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: panel_default.legendItem, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.legendDot, style: { background: seriesColor(index) } }),
		            line.hostName
		          ] }, line.hostId)) })
		        ] }),
		        loading && series.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.chartEmpty, children: tt("chart.loading") }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LatencyChart, { series })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.saveRow, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		        "button",
		        {
		          type: "button",
		          className: `${panel_default.ghostButton} ${panel_default.dangerGhost}`,
		          onClick: () => {
		            void remove(task.id);
		          },
		          children: tt("latency.delete")
		        }
		      ) })
		    ] }),
		    (creating || editing !== null) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		      PingTaskDialog,
		      {
		        api,
		        hosts,
		        task: editing,
		        onClose: () => {
		          setCreating(false);
		          setEditing(null);
		        },
		        onSaved: () => {
		          setCreating(false);
		          setEditing(null);
		          void load3();
		        }
		      }
		    )
		  ] });
		}
		function PingTaskDialog({ api, hosts, task, onClose, onSaved }) {
		  const [name, setName] = (0, import_react2.useState)(task?.name ?? "");
		  const [type, setType] = (0, import_react2.useState)(task?.type ?? "icmp");
		  const [target, setTarget] = (0, import_react2.useState)(task?.target ?? "");
		  const [intervalSec, setIntervalSec] = (0, import_react2.useState)(task?.intervalSec ?? 60);
		  const [picked, setPicked] = (0, import_react2.useState)(task?.hosts ?? []);
		  const [saving, setSaving] = (0, import_react2.useState)(false);
		  const [error, setError] = (0, import_react2.useState)(null);
		  (0, import_react2.useEffect)(() => {
		    const onKey = (event) => {
		      if (event.key === "Escape") onClose();
		    };
		    document.addEventListener("keydown", onKey);
		    return () => {
		      document.removeEventListener("keydown", onKey);
		    };
		  }, [onClose]);
		  const save = async () => {
		    if (name.trim() === "" || target.trim() === "") {
		      setError(tt("latency.required"));
		      return;
		    }
		    setSaving(true);
		    setError(null);
		    const payload = { name: name.trim(), type, target: target.trim(), intervalSec, hosts: picked, enabled: true };
		    try {
		      if (task === null) await api.createPingTask(payload);
		      else await api.updatePingTask(task.id, payload);
		      onSaved();
		    } catch (cause) {
		      setError(errorMessage(cause));
		      setSaving(false);
		    }
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.backdrop, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modal, role: "dialog", "aria-modal": "true", onClick: (event) => {
		    event.stopPropagation();
		  }, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: panel_default.modalTitle, children: task === null ? tt("latency.form.create") : tt("latency.form.edit") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.iconButton, "aria-label": tt("form.cancel"), onClick: onClose, children: "\xD7" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("latency.form.name") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { className: panel_default.input, value: name, onChange: (event) => {
		          setName(event.target.value);
		        } })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("latency.form.type") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("select", { className: panel_default.input, value: type, onChange: (event) => {
		          setType(event.target.value);
		        }, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "icmp", children: "ICMP" }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "tcp", children: "TCP" }),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "http", children: "HTTP" })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.hint, children: tt("latency.form.typeHint") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("latency.form.target") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { className: panel_default.input, value: target, placeholder: type === "http" ? "https://example.com" : type === "tcp" ? "host:443" : "1.1.1.1", onChange: (event) => {
		          setTarget(event.target.value);
		        } })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("latency.form.interval") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { className: panel_default.input, type: "number", min: 10, value: intervalSec, onChange: (event) => {
		          setIntervalSec(Number(event.target.value) || 60);
		        } })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: panel_default.fieldLabel, children: tt("latency.form.hosts") }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: panel_default.hostPicker, children: hosts.map((host) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: panel_default.check, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		            "input",
		            {
		              type: "checkbox",
		              checked: picked.includes(host.id),
		              onChange: (event) => {
		                setPicked((current2) => event.target.checked ? [...current2, host.id] : current2.filter((id) => id !== host.id));
		              }
		            }
		          ),
		          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: host.name })
		        ] }, host.id)) })
		      ] }),
		      error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: panel_default.formError, children: error })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: panel_default.modalFooter, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.ghostButton, disabled: saving, onClick: onClose, children: tt("form.cancel") }),
		      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: panel_default.primaryButton, disabled: saving, onClick: () => {
		        void save();
		      }, children: tt("form.save") })
		    ] })
		  ] }) });
		}
		
		// src/client/panel/MonitorPage.tsx
		var import_react3 = require("react");
		
		// src/client/panel/os-icon.ts
		function formatOs(os) {
		  if (os === void 0 || os === "") return { name: "-", icon: "unknown" };
		  const s = os.toLowerCase();
		  const hit = (needle) => s.includes(needle);
		  if (hit("windows")) return { name: "Windows", icon: "windows" };
		  if (hit("ubuntu")) return { name: "Ubuntu", icon: "ubuntu" };
		  if (hit("debian")) return { name: "Debian", icon: "debian" };
		  if (hit("centos")) return { name: "CentOS", icon: "centos" };
		  if (hit("rocky")) return { name: "Rocky", icon: "rocky" };
		  if (hit("alma")) return { name: "Alma", icon: "alma" };
		  if (hit("red hat") || hit("rhel")) return { name: "RHEL", icon: "rhel" };
		  if (hit("fedora")) return { name: "Fedora", icon: "fedora" };
		  if (hit("manjaro")) return { name: "Manjaro", icon: "arch" };
		  if (hit("arch")) return { name: "Arch", icon: "arch" };
		  if (hit("mint")) return { name: "Mint", icon: "mint" };
		  if (hit("gentoo")) return { name: "Gentoo", icon: "gentoo" };
		  if (hit("nixos") || hit("nix")) return { name: "Nix", icon: "nix" };
		  if (hit("opensuse") || hit("suse")) return { name: "openSUSE", icon: "suse" };
		  if (hit("alpine")) return { name: "Alpine", icon: "alpine" };
		  if (hit("openwrt")) return { name: "OpenWrt", icon: "openwrt" };
		  if (hit("freebsd")) return { name: "FreeBSD", icon: "freebsd" };
		  if (hit("macos") || hit("mac os") || hit("darwin")) return { name: "macOS", icon: "macos" };
		  if (hit("android")) return { name: "Android", icon: "linux" };
		  if (hit("armbian")) return { name: "Armbian", icon: "debian" };
		  if (hit("kali")) return { name: "Kali", icon: "debian" };
		  if (hit("huawei") || hit("openeuler") || hit("euler")) return { name: "Euler", icon: "huawei" };
		  if (hit("unraid")) return { name: "Unraid", icon: "unraid" };
		  if (hit("qnap")) return { name: "QNAP", icon: "qnap" };
		  if (hit("orangepi") || hit("orange pi")) return { name: "OrangePi", icon: "orange-pi" };
		  if (hit("proxmox")) return { name: "Proxmox", icon: "debian" };
		  if (hit("synology")) return { name: "Synology", icon: "unknown" };
		  if (hit("alibaba") || hit("aliyun")) return { name: "Alibaba", icon: "unknown" };
		  if (hit("opencloudos")) return { name: "OpenCloudOS", icon: "unknown" };
		  if (hit("linux")) return { name: "Linux", icon: "linux" };
		  const first = os.trim().split(/\s+/)[0] ?? "";
		  return { name: first === "" ? "-" : first, icon: "unknown" };
		}
		
		// src/client/panel/flag.ts
		var FLAG_BASE = "/auth/dsh-probe/flags/";
		function hasFlag(code) {
		  return /^[a-z]{2}$/i.test((code ?? "").trim());
		}
		function flagUrl(code) {
		  const value = (code ?? "").trim().toLowerCase();
		  if (!/^[a-z]{2}$/.test(value)) return "";
		  return `${FLAG_BASE}${value}.svg`;
		}
		
		// theme-bundle:mikus-theme
		var mikus_theme_default = `[data-dsh-probe-view] .probe-theme{
		    --bg-primary: #f8f6f9;
		    --bg-secondary: #ffffff;
		    --bg-tertiary: #f0edf3;
		    --bg-card: #ffffff;
		    --bg-card-rgb: 255, 255, 255;
		    --bg-card-hover: #faf8fc;
		    --bg-modal: #ffffff;
		    --bg-overlay: rgba(0, 0, 0, 0.4);
		    --text-primary: #2d1b3d;
		    --text-secondary: #6b5a7d;
		    --text-tertiary: #9b8aad;
		    --text-inverse: #ffffff;
		    --border-color: #e8e0f0;
		    --border-color-rgb: 232, 224, 240;
		    --border-light: #f0eaf5;
		    --accent: #e8668a;
		    --accent-rgb: 232, 102, 138;
		    --accent-light: #fce4ec;
		    --accent-hover: #d44a72;
		    --success: #4caf7d;
		    --success-light: #e8f5e9;
		    --warning: #f5a623;
		    --warning-light: #fff8e1;
		    --danger: #e74c5e;
		    --danger-light: #fde8eb;
		    --info: #5c9ced;
		    --info-light: #e3f0ff;
		    --shadow-sm: 0 1px 3px rgba(45, 27, 61, 0.06);
		    --shadow-md: 0 4px 12px rgba(45, 27, 61, 0.08);
		    --shadow-lg: 0 8px 30px rgba(45, 27, 61, 0.12);
		    --shadow-card: 0 2px 8px rgba(45, 27, 61, 0.05);
		    --radius-sm: 8px;
		    --radius-md: 12px;
		    --radius-lg: 16px;
		    --radius-xl: 20px;
		    --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
		    --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		    --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		    --transition-bounce: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
		    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', sans-serif;
		    --font-mono: 'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
		    --header-height: 64px;
		    --sakura-1: #ffb7c5;
		    --sakura-2: #ff8fa3;
		    --sakura-3: #e8668a;
		    --sakura-4: #c94064;
		    --chart-cpu: #e8668a;
		    --chart-ram: #4caf7d;
		    --chart-network-down: #5c9ced;
		    --chart-network-up: #f5a623;
		    --chart-disk: #7ab3f7;
		    --chart-process: #ff8fa3;
		    --chart-connections: #a78bfa;
		    --chart-connections-udp: #34d399;
		    --chart-bg: #faf8fc;
		    --chart-grid: #ede6f3;
		    --chart-text: #9b8aad;
		    --chart-empty-text: #c4b8d0;
		    --chart-latency-grid: #ede6f3;
		    --chart-latency-text: #9b8aad;
		    --chart-loss-line: #f5a623;
		    --chart-hint-text: rgba(155, 138, 173, 0.6);
		    --chart-dot-center: #ffffff;
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"]{
		    --bg-primary: #0f0a15;
		    --bg-secondary: #1a1225;
		    --bg-tertiary: #241a32;
		    --bg-card: #1e1530;
		    --bg-card-rgb: 30, 21, 48;
		    --bg-card-hover: #261c3a;
		    --bg-modal: #1e1530;
		    --bg-overlay: rgba(0, 0, 0, 0.6);
		    --text-primary: #e8dff0;
		    --text-secondary: #a899b8;
		    --text-tertiary: #7a6b8a;
		    --text-inverse: #0f0a15;
		    --border-color: #2d2040;
		    --border-color-rgb: 45, 32, 64;
		    --border-light: #241a32;
		    --accent: #ff8fa3;
		    --accent-light: #3d1a2a;
		    --accent-hover: #ffb7c5;
		    --success: #5ec492;
		    --success-light: #1a2e22;
		    --warning: #f5b84a;
		    --warning-light: #2e2818;
		    --danger: #ff6b7a;
		    --danger-light: #2e1a1e;
		    --info: #7ab3f7;
		    --info-light: #1a2230;
		    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.2);
		    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
		    --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.4);
		    --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.2);
		    --chart-cpu: #ff8fa3;
		    --chart-ram: #5ec492;
		    --chart-network-down: #7ab3f7;
		    --chart-network-up: #f5b84a;
		    --chart-disk: #93bbfd;
		    --chart-process: #ffb7c5;
		    --chart-connections: #c4b5fd;
		    --chart-connections-udp: #6ee7b7;
		    --chart-bg: #1a1225;
		    --chart-grid: #2d2040;
		    --chart-text: #7a6b8a;
		    --chart-empty-text: #4a3d5c;
		    --chart-latency-grid: #2d2040;
		    --chart-latency-text: #7a6b8a;
		    --chart-loss-line: #f5b84a;
		    --chart-hint-text: rgba(122, 107, 138, 0.6);
		    --chart-dot-center: #1e1530;
		}[data-dsh-probe-view] .probe-theme .custom-background{
		    position: fixed;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    z-index: -1;
		    pointer-events: none;
		    background-size: cover;
		    background-position: center;
		    background-repeat: no-repeat;
		    background-attachment: fixed;
		    transition: opacity 0.5s ease, filter 0.3s ease;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .custom-background video{
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    min-width: 100%;
		    min-height: 100%;
		    width: auto;
		    height: auto;
		    transform: translate(-50%, -50%);
		    object-fit: cover;
		}[data-dsh-probe-view] .probe-theme .custom-background.hidden{
		    opacity: 0;
		}[data-dsh-probe-view] .probe-theme .custom-background.hidden video{
		    display: none;
		}[data-dsh-probe-view] .probe-theme.has-custom-background{
		    background: transparent;
		}[data-dsh-probe-view] .probe-theme.has-custom-background::before{
		    display: none;
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body.has-custom-background .welcome-section{
		    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
		                0 2px 8px rgba(0, 0, 0, 0.12);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body.has-custom-background .node-card{
		    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15),
		                0 1px 4px rgba(0, 0, 0, 0.1);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body.has-custom-background .node-card:hover{
		    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25),
		                0 4px 8px rgba(0, 0, 0, 0.15);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body.has-custom-background .stat-item{
		    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body.has-custom-background .stat-item:hover{
		    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body.has-custom-background .table-card{
		    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body.has-custom-background .table-card:hover{
		    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
		}[data-dsh-probe-view] .probe-theme *{
		    margin: 0;
		    padding: 0;
		    box-sizing: border-box;
		}[data-dsh-probe-view] .probe-theme{
		    font-size: 16px;
		    -webkit-text-size-adjust: 100%;
		}[data-dsh-probe-view] .probe-theme{
		    font-family: var(--font-sans);
		    background: var(--bg-primary);
		    color: var(--text-primary);
		    line-height: 1.6;
		    min-height: 100vh;
		    transition: background var(--transition), color var(--transition);
		    overflow-x: hidden;
		}[data-dsh-probe-view] .probe-theme::before{
		    content: '';
		    position: fixed;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    background:
		        radial-gradient(ellipse at 20% 20%, rgba(232, 102, 138, 0.04) 0%, transparent 50%),
		        radial-gradient(ellipse at 80% 80%, rgba(92, 156, 237, 0.03) 0%, transparent 50%);
		    pointer-events: none;
		    z-index: 0;
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] body::before{
		    background:
		        radial-gradient(ellipse at 20% 20%, rgba(232, 102, 138, 0.06) 0%, transparent 50%),
		        radial-gradient(ellipse at 80% 80%, rgba(92, 156, 237, 0.04) 0%, transparent 50%);
		}[data-dsh-probe-view] .probe-theme #app{
		    position: relative;
		    z-index: 1;
		    min-height: 100vh;
		    display: flex;
		    flex-direction: column;
		}[data-dsh-probe-view] .probe-theme .main-content{
		    flex: 1;
		    padding: 24px;
		    max-width: 1440px;
		    margin: 0 auto;
		    width: 100%;
		}[data-dsh-probe-view] .probe-theme .loading-container{
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		    justify-content: center;
		    padding: 80px 24px;
		    gap: 16px;
		}[data-dsh-probe-view] .probe-theme .loading-spinner{
		    width: 40px;
		    height: 40px;
		    border: 3px solid var(--border-color);
		    border-top-color: var(--accent);
		    border-radius: 50%;
		    animation: probe_spin 0.8s linear infinite;
		}[data-dsh-probe-view] .probe-theme .loading-text{
		    font-size: 0.9rem;
		    color: var(--text-tertiary);
		}[data-dsh-probe-view] .probe-theme .empty-state{
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		    justify-content: center;
		    padding: 80px 24px;
		    gap: 12px;
		    color: var(--text-tertiary);
		}[data-dsh-probe-view] .probe-theme .empty-state svg{
		    width: 48px;
		    height: 48px;
		    opacity: 0.5;
		}[data-dsh-probe-view] .probe-theme .empty-state p{
		    font-size: 0.95rem;
		}[data-dsh-probe-view] .probe-theme ::-webkit-scrollbar{
		    width: 6px;
		    height: 6px;
		}[data-dsh-probe-view] .probe-theme ::-webkit-scrollbar-track{
		    background: transparent;
		}[data-dsh-probe-view] .probe-theme ::-webkit-scrollbar-thumb{
		    background: var(--border-color);
		    border-radius: 3px;
		}[data-dsh-probe-view] .probe-theme ::-webkit-scrollbar-thumb:hover{
		    background: var(--text-tertiary);
		}[data-dsh-probe-view] .probe-theme ::selection{
		    background: var(--accent);
		    color: var(--text-inverse);
		}@keyframes probe_fadeIn{
		    from { opacity: 0; }
		    to { opacity: 1; }
		}@keyframes probe_fadeInUp{
		    from {
		        opacity: 0;
		        transform: translateY(20px);
		    }
		    to {
		        opacity: 1;
		        transform: translateY(0);
		    }
		}@keyframes probe_fadeInDown{
		    from {
		        opacity: 0;
		        transform: translateY(-20px);
		    }
		    to {
		        opacity: 1;
		        transform: translateY(0);
		    }
		}@keyframes probe_fadeInScale{
		    from {
		        opacity: 0;
		        transform: scale(0.95);
		    }
		    to {
		        opacity: 1;
		        transform: scale(1);
		    }
		}@keyframes probe_slideInLeft{
		    from {
		        opacity: 0;
		        transform: translateX(-30px);
		    }
		    to {
		        opacity: 1;
		        transform: translateX(0);
		    }
		}@keyframes probe_slideInRight{
		    from {
		        opacity: 0;
		        transform: translateX(30px);
		    }
		    to {
		        opacity: 1;
		        transform: translateX(0);
		    }
		}@keyframes probe_pulse{
		    0%, 100% { transform: scale(1); }
		    50% { transform: scale(1.05); }
		}@keyframes probe_shimmer{
		    0% { background-position: -200% 0; }
		    100% { background-position: 200% 0; }
		}@keyframes probe_spin{
		    from { transform: rotate(0deg); }
		    to { transform: rotate(360deg); }
		}@keyframes probe_staggerFadeIn{
		    from {
		        opacity: 0;
		        transform: translateY(12px) scale(0.97);
		    }
		    to {
		        opacity: 1;
		        transform: translateY(0) scale(1);
		    }
		}@keyframes probe_chartReveal{
		    from {
		        opacity: 0;
		        transform: translateY(16px);
		    }
		    to {
		        opacity: 1;
		        transform: translateY(0);
		    }
		}@keyframes probe_cardSlideIn{
		    from {
		        opacity: 0;
		        transform: translateX(-16px);
		    }
		    to {
		        opacity: 1;
		        transform: translateX(0);
		    }
		}@keyframes probe_bounce{
		    0%, 100% { transform: translateY(0); }
		    50% { transform: translateY(-10px); }
		}@keyframes probe_bounceCenter{
		    0%, 100% { transform: translateX(-50%) translateY(0); }
		    50% { transform: translateX(-50%) translateY(-10px); }
		}@keyframes probe_shake{
		    0%, 100% { transform: translateX(0); }
		    25% { transform: translateX(-5px); }
		    75% { transform: translateX(5px); }
		}[data-dsh-probe-view] .probe-theme .animate-fade-in{
		    animation: probe_fadeIn var(--transition-slow) ease forwards;
		}[data-dsh-probe-view] .probe-theme .animate-fade-in-up{
		    animation: probe_fadeInUp var(--transition-slow) ease forwards;
		}[data-dsh-probe-view] .probe-theme .animate-fade-in-down{
		    animation: probe_fadeInDown var(--transition-slow) ease forwards;
		}[data-dsh-probe-view] .probe-theme .animate-fade-in-scale{
		    animation: probe_fadeInScale var(--transition-slow) ease forwards;
		}[data-dsh-probe-view] .probe-theme .animate-slide-in-left{
		    animation: probe_slideInLeft var(--transition-slow) ease forwards;
		}[data-dsh-probe-view] .probe-theme .animate-slide-in-right{
		    animation: probe_slideInRight var(--transition-slow) ease forwards;
		}[data-dsh-probe-view] .probe-theme .animate-pulse{
		    animation: probe_pulse 2s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .animate-shimmer{
		    background: linear-gradient(90deg, var(--bg-tertiary) 25%, var(--bg-card) 50%, var(--bg-tertiary) 75%);
		    background-size: 200% 100%;
		    animation: probe_shimmer 1.5s infinite;
		}[data-dsh-probe-view] .probe-theme .animate-spin{
		    animation: probe_spin 1s linear infinite;
		}[data-dsh-probe-view] .probe-theme .animate-bounce{
		    animation: probe_bounce 1s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .skeleton{
		    background: linear-gradient(90deg, var(--bg-tertiary) 25%, var(--bg-card) 50%, var(--bg-tertiary) 75%);
		    background-size: 200% 100%;
		    animation: probe_shimmer 1.5s infinite;
		    border-radius: var(--radius-sm);
		}[data-dsh-probe-view] .probe-theme .skeleton-text{
		    height: 1em;
		    margin: 0.5em 0;
		    border-radius: 4px;
		}[data-dsh-probe-view] .probe-theme .skeleton-title{
		    height: 1.5em;
		    width: 60%;
		    margin-bottom: 0.5em;
		    border-radius: 4px;
		}[data-dsh-probe-view] .probe-theme .skeleton-avatar{
		    width: 40px;
		    height: 40px;
		    border-radius: 50%;
		}[data-dsh-probe-view] .probe-theme .skeleton-card{
		    height: 200px;
		    border-radius: var(--radius-md);
		}[data-dsh-probe-view] .probe-theme .loading-spinner{
		    width: 24px;
		    height: 24px;
		    border: 3px solid var(--border-color);
		    border-top-color: var(--accent);
		    border-radius: 50%;
		    animation: probe_spin 0.8s linear infinite;
		}[data-dsh-probe-view] .probe-theme .loading-dots{
		    display: inline-flex;
		    gap: 4px;
		}[data-dsh-probe-view] .probe-theme .loading-dots span{
		    width: 6px;
		    height: 6px;
		    background: var(--accent);
		    border-radius: 50%;
		    animation: probe_bounce 1.4s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .loading-dots span:nth-child(1){ animation-delay: 0s; }[data-dsh-probe-view] .probe-theme .loading-dots span:nth-child(2){ animation-delay: 0.2s; }[data-dsh-probe-view] .probe-theme .loading-dots span:nth-child(3){ animation-delay: 0.4s; }[data-dsh-probe-view] .probe-theme .btn-ripple{
		    position: relative;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .btn-ripple::after{
		    content: '';
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    width: 0;
		    height: 0;
		    background: rgba(255, 255, 255, 0.3);
		    border-radius: 50%;
		    transform: translate(-50%, -50%);
		    transition: width 0.6s ease, height 0.6s ease;
		}[data-dsh-probe-view] .probe-theme .btn-ripple:active::after{
		    width: 200px;
		    height: 200px;
		}[data-dsh-probe-view] .probe-theme *{
		    -webkit-tap-highlight-color: transparent;
		}[data-dsh-probe-view] .probe-theme input,[data-dsh-probe-view] .probe-theme button,[data-dsh-probe-view] .probe-theme select,[data-dsh-probe-view] .probe-theme textarea{
		    font-size: 16px;
		}[data-dsh-probe-view] .probe-theme .node-card,[data-dsh-probe-view] .probe-theme .filter-btn,[data-dsh-probe-view] .probe-theme .modal-tab,[data-dsh-probe-view] .probe-theme .view-btn,[data-dsh-probe-view] .probe-theme .theme-toggle,[data-dsh-probe-view] .probe-theme .lang-toggle,[data-dsh-probe-view] .probe-theme .login-btn{
		    -webkit-user-select: none;
		    user-select: none;
		    touch-action: manipulation;
		}[data-dsh-probe-view] .probe-theme .status-dot,[data-dsh-probe-view] .probe-theme .node-status-dot{
		    transition: all var(--transition);
		}[data-dsh-probe-view] .probe-theme .status-dot.online,[data-dsh-probe-view] .probe-theme .node-status-dot:not(.offline){
		    animation: probe_pulse 2s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .metric-bar{
		    transition: width var(--transition-slow) ease;
		}[data-dsh-probe-view] .probe-theme .metric-value{
		    transition: all var(--transition);
		}@media (max-width: 768px){[data-dsh-probe-view] .probe-theme .main-content{
		        padding: 12px;
		    }
		}@media (prefers-reduced-motion: reduce){[data-dsh-probe-view] .probe-theme *,[data-dsh-probe-view] .probe-theme *::before,[data-dsh-probe-view] .probe-theme *::after{
		        animation-duration: 0.01ms !important;
		        animation-iteration-count: 1 !important;
		        transition-duration: 0.01ms !important;
		    }
		}[data-dsh-probe-view] .probe-theme .header{
		    position: sticky;
		    top: 0;
		    z-index: 100;
		    height: var(--header-height);
		    background: var(--bg-secondary);
		    border-bottom: 1px solid var(--border-color);
		    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
		    backdrop-filter: blur(20px) saturate(180%);
		    -webkit-backdrop-filter: blur(20px) saturate(180%);
		    display: flex;
		    align-items: center;
		    padding: 0 24px;
		    gap: 16px;
		    transition: background var(--transition), border-color var(--transition);
		    contain: layout style;
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] .header{
		    background: rgba(26, 18, 37, 0.85);
		}[data-dsh-probe-view] .probe-theme .header-left{
		    display: flex;
		    align-items: center;
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme .logo{
		    display: flex;
		    align-items: center;
		    gap: 10px;
		    cursor: pointer;
		}[data-dsh-probe-view] .probe-theme .logo-icon{
		    width: 36px;
		    height: 36px;
		    border-radius: var(--radius-sm);
		    object-fit: contain;
		    flex-shrink: 0;
		    transition: transform var(--transition);
		}[data-dsh-probe-view] .probe-theme .logo:hover .logo-icon{
		    transform: rotate(-10deg) scale(1.1);
		}[data-dsh-probe-view] .probe-theme .site-name{
		    font-size: 1.25rem;
		    font-weight: 700;
		    color: var(--text-primary);
		    letter-spacing: -0.02em;
		    transition: color var(--transition);
		}[data-dsh-probe-view] .probe-theme .logo:hover .site-name{
		    color: var(--accent);
		}[data-dsh-probe-view] .probe-theme .header-center{
		    flex: 1;
		    display: flex;
		    justify-content: center;
		    overflow-x: auto;
		    scrollbar-width: none;
		}[data-dsh-probe-view] .probe-theme .header-center::-webkit-scrollbar{
		    display: none;
		}[data-dsh-probe-view] .probe-theme .header-right{
		    display: flex;
		    align-items: center;
		    gap: 8px;
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme .header-right-end{
		    display: flex;
		    align-items: center;
		    gap: 4px;
		    margin-left: auto;
		}[data-dsh-probe-view] .probe-theme .search-box{
		    position: relative;
		    display: flex;
		    align-items: center;
		    flex: 1;
		    max-width: 280px;
		    min-width: 120px;
		}[data-dsh-probe-view] .probe-theme .search-icon{
		    position: absolute;
		    left: 10px;
		    width: 16px;
		    height: 16px;
		    color: var(--text-tertiary);
		    pointer-events: none;
		    z-index: 1;
		}[data-dsh-probe-view] .probe-theme .search-box input{
		    padding: 7px 12px 7px 34px;
		    border: 1px solid var(--border-color);
		    border-radius: var(--radius-sm);
		    background: var(--bg-tertiary);
		    color: var(--text-primary);
		    font-size: 0.85rem;
		    width: 100%;
		    transition: border-color var(--transition), background var(--transition), box-shadow var(--transition);
		    font-family: var(--font-sans);
		    outline: none;
		}[data-dsh-probe-view] .probe-theme .search-box input:focus{
		    border-color: var(--accent);
		    background: var(--bg-secondary);
		    box-shadow: 0 0 0 3px rgba(232, 102, 138, 0.15);
		}[data-dsh-probe-view] .probe-theme .search-box input::placeholder{
		    color: var(--text-tertiary);
		}[data-dsh-probe-view] .probe-theme .view-toggle{
		    display: flex;
		    align-items: center;
		    gap: 2px;
		    padding: 4px;
		    background: var(--bg-tertiary);
		    border-radius: var(--radius-sm);
		}[data-dsh-probe-view] .probe-theme .view-btn,[data-dsh-probe-view] .probe-theme .theme-toggle,[data-dsh-probe-view] .probe-theme .lang-toggle,[data-dsh-probe-view] .probe-theme .login-btn{
		    padding: 6px;
		    border: none;
		    background: transparent;
		    color: var(--text-tertiary);
		    border-radius: 6px;
		    cursor: pointer;
		    transition: color var(--transition), background var(--transition), transform var(--transition-fast);
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    will-change: transform;
		    -webkit-user-select: none;
		    user-select: none;
		    touch-action: manipulation;
		}[data-dsh-probe-view] .probe-theme .view-btn svg,[data-dsh-probe-view] .probe-theme .theme-toggle svg,[data-dsh-probe-view] .probe-theme .lang-toggle svg,[data-dsh-probe-view] .probe-theme .login-btn svg{
		    width: 18px;
		    height: 18px;
		}[data-dsh-probe-view] .probe-theme .view-btn:hover,[data-dsh-probe-view] .probe-theme .theme-toggle:hover,[data-dsh-probe-view] .probe-theme .lang-toggle:hover,[data-dsh-probe-view] .probe-theme .login-btn:hover{
		    color: var(--text-primary);
		    background: var(--bg-secondary);
		}[data-dsh-probe-view] .probe-theme .view-btn:active,[data-dsh-probe-view] .probe-theme .theme-toggle:active,[data-dsh-probe-view] .probe-theme .lang-toggle:active,[data-dsh-probe-view] .probe-theme .login-btn:active{
		    transform: scale(0.9);
		}[data-dsh-probe-view] .probe-theme .view-btn.active{
		    background: var(--accent);
		    color: var(--text-inverse);
		}[data-dsh-probe-view] .probe-theme .login-btn{
		    text-decoration: none;
		}[data-dsh-probe-view] .probe-theme .theme-toggle .moon-icon{
		    display: none;
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] .theme-toggle .sun-icon{
		    display: none;
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] .theme-toggle .moon-icon{
		    display: block;
		}[data-dsh-probe-view] .probe-theme.has-custom-background .header{
		    background: rgba(var(--bg-card-rgb), var(--custom-card-alpha, 0.7));
		    border-color: rgba(var(--border-color-rgb), 0.4);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .search-box input{
		    background: rgba(var(--bg-card-rgb), 0.7);
		    border-color: rgba(var(--border-color-rgb), 0.4);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .search-box input:focus{
		    background: rgba(var(--bg-card-rgb), 0.88);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .view-toggle{
		    background: rgba(var(--bg-card-rgb), 0.65);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .view-btn:hover,[data-dsh-probe-view] .probe-theme.has-custom-background .theme-toggle:hover,[data-dsh-probe-view] .probe-theme.has-custom-background .lang-toggle:hover,[data-dsh-probe-view] .probe-theme.has-custom-background .login-btn:hover{
		    background: rgba(var(--bg-card-rgb), 0.8);
		}@media (max-width: 768px){[data-dsh-probe-view] .probe-theme .header{
		        height: auto;
		        padding: 10px 12px;
		        flex-wrap: wrap;
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .header-center{
		        display: none;
		    }[data-dsh-probe-view] .probe-theme .header-right{
		        gap: 4px;
		        flex-wrap: wrap;
		        flex: 1;
		    }[data-dsh-probe-view] .probe-theme .header-right > *:not(.search-box):not(.header-right-end){
		        order: 0;
		    }[data-dsh-probe-view] .probe-theme .header-right-end{
		        order: 1;
		        margin-left: auto;
		        flex-shrink: 0;
		    }[data-dsh-probe-view] .probe-theme .search-box{
		        order: 10;
		        max-width: none;
		        min-width: 0;
		        width: 100%;
		        margin-top: 4px;
		    }[data-dsh-probe-view] .probe-theme .search-box input{
		        width: 100%;
		    }[data-dsh-probe-view] .probe-theme .search-box input:focus{
		        width: 100%;
		    }[data-dsh-probe-view] .probe-theme .site-name{
		        font-size: 1rem;
		    }[data-dsh-probe-view] .probe-theme .logo-icon{
		        width: 28px;
		        height: 28px;
		    }[data-dsh-probe-view] .probe-theme .view-toggle,[data-dsh-probe-view] .probe-theme .lang-toggle{
		        display: none;
		    }
		}@media (max-width: 480px){[data-dsh-probe-view] .probe-theme .header{
		        padding: 8px 10px;
		    }[data-dsh-probe-view] .probe-theme .header-right{
		        flex: 1;
		    }[data-dsh-probe-view] .probe-theme .header-right-end{
		        margin-left: auto;
		    }[data-dsh-probe-view] .probe-theme .search-box{
		        display: none;
		    }[data-dsh-probe-view] .probe-theme .login-btn svg{
		        width: 18px;
		        height: 18px;
		    }
		}@media (min-width: 769px) and (max-width: 1024px){[data-dsh-probe-view] .probe-theme .search-box{
		        max-width: 200px;
		        min-width: 100px;
		    }
		}@media (hover: none){[data-dsh-probe-view] .probe-theme .view-btn:hover,[data-dsh-probe-view] .probe-theme .theme-toggle:hover,[data-dsh-probe-view] .probe-theme .lang-toggle:hover,[data-dsh-probe-view] .probe-theme .login-btn:hover{
		        transform: none;
		        background: transparent;
		        color: var(--text-tertiary);
		    }[data-dsh-probe-view] .probe-theme .logo:hover .logo-icon{
		        transform: none;
		    }[data-dsh-probe-view] .probe-theme .logo:hover .site-name{
		        color: var(--text-primary);
		    }
		}[data-dsh-probe-view] .probe-theme .welcome-section{
		    position: relative;
		    margin-bottom: 24px;
		    margin-top: 60px;
		    padding: 28px 32px;
		    background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 50%, var(--bg-card) 100%);
		    background-size: 200% 200%;
		    animation: probe_gradientShift 8s ease infinite;
		    border: 1px solid var(--border-color);
		    border-radius: var(--radius-lg);
		    box-shadow: var(--shadow-card);
		    overflow: visible;
		}@keyframes probe_gradientShift{
		    0%, 100% { background-position: 0% 50%; }
		    50% { background-position: 100% 50%; }
		}[data-dsh-probe-view] .probe-theme .welcome-decoration{
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    pointer-events: none;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .deco-circle{
		    position: absolute;
		    border-radius: 50%;
		    opacity: 0.1;
		}[data-dsh-probe-view] .probe-theme .deco-1{
		    width: 200px;
		    height: 200px;
		    background: var(--accent);
		    top: -80px;
		    right: -50px;
		    animation: probe_float 6s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .deco-2{
		    width: 150px;
		    height: 150px;
		    background: var(--info);
		    bottom: -60px;
		    left: -40px;
		    animation: probe_float 8s ease-in-out infinite reverse;
		}[data-dsh-probe-view] .probe-theme .deco-3{
		    width: 100px;
		    height: 100px;
		    background: var(--success);
		    top: 50%;
		    right: 20%;
		    animation: probe_float 7s ease-in-out infinite 1s;
		}@keyframes probe_float{
		    0%, 100% { transform: translateY(0) scale(1); }
		    50% { transform: translateY(-20px) scale(1.05); }
		}[data-dsh-probe-view] .probe-theme .sakura-petal{
		    position: absolute;
		    width: 12px;
		    height: 12px;
		    background: var(--sakura-1);
		    border-radius: 50% 0 50% 50%;
		    opacity: 0.4;
		    animation: probe_sakuraFall 10s linear infinite;
		}[data-dsh-probe-view] .probe-theme .sakura-petal:nth-child(4){ left: 10%; animation-delay: 0s; animation-duration: 12s; }[data-dsh-probe-view] .probe-theme .sakura-petal:nth-child(5){ left: 30%; animation-delay: 2s; animation-duration: 10s; }[data-dsh-probe-view] .probe-theme .sakura-petal:nth-child(6){ left: 50%; animation-delay: 4s; animation-duration: 14s; }[data-dsh-probe-view] .probe-theme .sakura-petal:nth-child(7){ left: 70%; animation-delay: 1s; animation-duration: 11s; }[data-dsh-probe-view] .probe-theme .sakura-petal:nth-child(8){ left: 90%; animation-delay: 3s; animation-duration: 13s; }@keyframes probe_sakuraFall{
		    0% {
		        transform: translateY(-20px) rotate(0deg) scale(0.8);
		        opacity: 0;
		    }
		    10% { opacity: 0.5; }
		    90% { opacity: 0.3; }
		    100% {
		        transform: translateY(120px) rotate(360deg) scale(0.6);
		        opacity: 0;
		    }
		}[data-dsh-probe-view] .probe-theme .welcome-content{
		    position: relative;
		    z-index: 1;
		    display: flex;
		    justify-content: space-between;
		    align-items: center;
		}[data-dsh-probe-view] .probe-theme .welcome-greeting{
		    display: flex;
		    align-items: center;
		    gap: 16px;
		    padding-left: 100px;
		}[data-dsh-probe-view] .probe-theme .greeting-icon{
		    width: 180px;
		    height: 180px;
		    object-fit: contain;
		    animation: probe_bounce 2s ease-in-out infinite;
		    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
		    position: absolute;
		    top: -80px;
		    left: -60px;
		    z-index: 10;
		    transform-origin: bottom center;
		    will-change: transform;
		}[data-dsh-probe-view] .probe-theme .greeting-icon.no-bounce{
		    animation: none;
		}[data-dsh-probe-view] .probe-theme .welcome-greeting.no-mascot{
		    padding-left: 0 !important;
		}@media (min-width: 1025px) and (max-width: 1440px){[data-dsh-probe-view] .probe-theme .greeting-icon{
		        width: 150px;
		        height: 150px;
		        top: -70px;
		        left: -50px;
		    }
		}@media (min-width: 769px) and (max-width: 1024px){[data-dsh-probe-view] .probe-theme .greeting-icon{
		        width: 120px;
		        height: 120px;
		        top: -55px;
		        left: -40px;
		    }
		}@keyframes probe_wave{
		    0%, 100% { transform: rotate(0deg); }
		    10% { transform: rotate(14deg); }
		    20% { transform: rotate(-8deg); }
		    30% { transform: rotate(14deg); }
		    40% { transform: rotate(-4deg); }
		    50% { transform: rotate(10deg); }
		    60%, 100% { transform: rotate(0deg); }
		}[data-dsh-probe-view] .probe-theme .greeting-info{
		    display: flex;
		    flex-direction: column;
		    gap: 4px;
		}[data-dsh-probe-view] .probe-theme .greeting-text{
		    font-size: 1.75rem;
		    font-weight: 700;
		    color: var(--text-primary);
		    letter-spacing: -0.02em;
		    background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
		    -webkit-background-clip: text;
		    -webkit-text-fill-color: transparent;
		    background-clip: text;
		}[data-dsh-probe-view] .probe-theme .greeting-subtitle{
		    font-size: 0.85rem;
		    color: var(--text-secondary);
		    font-weight: 400;
		}[data-dsh-probe-view] .probe-theme .welcome-time{
		    display: flex;
		    flex-direction: column;
		    align-items: flex-end;
		    gap: 4px;
		}[data-dsh-probe-view] .probe-theme .time-label{
		    font-size: 0.9rem;
		    color: var(--text-secondary);
		    font-weight: 500;
		}[data-dsh-probe-view] .probe-theme .time-value{
		    font-size: 2rem;
		    font-weight: 700;
		    font-family: var(--font-mono);
		    background: linear-gradient(135deg, var(--accent) 0%, var(--sakura-2) 100%);
		    -webkit-background-clip: text;
		    -webkit-text-fill-color: transparent;
		    background-clip: text;
		    letter-spacing: 0.05em;
		    text-shadow: 0 2px 10px rgba(232, 102, 138, 0.2);
		}[data-dsh-probe-view] .probe-theme .traffic-text{
		    font-size: 0.75rem;
		    color: var(--text-secondary);
		    font-weight: 500;
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    max-width: 100%;
		}[data-dsh-probe-view] .probe-theme.has-custom-background .welcome-section{
		    background: rgba(var(--bg-card-rgb), var(--custom-card-alpha, 0.75));
		    border-color: rgba(var(--border-color-rgb), 0.45);
		    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08),
		                0 2px 8px rgba(0, 0, 0, 0.04);
		    animation: none;
		}@media (max-width: 768px){[data-dsh-probe-view] .probe-theme .welcome-section{
		        padding: 16px 16px 16px 16px;
		        margin-top: 40px;
		    }[data-dsh-probe-view] .probe-theme .welcome-content{
		        flex-direction: row;
		        gap: 0;
		        text-align: left;
		    }[data-dsh-probe-view] .probe-theme .welcome-greeting{
		        padding-left: 70px;
		        flex-direction: column;
		        align-items: flex-start;
		        flex: 1;
		    }[data-dsh-probe-view] .probe-theme .greeting-icon{
		        width: 80px;
		        height: 80px;
		        top: -40px;
		        left: 0;
		        transform: none;
		        filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));
		        animation: probe_bounce 2s ease-in-out infinite;
		    }[data-dsh-probe-view] .probe-theme .greeting-text{
		        font-size: 1.2rem;
		    }[data-dsh-probe-view] .probe-theme .greeting-subtitle{
		        font-size: 0.72rem;
		    }[data-dsh-probe-view] .probe-theme .welcome-time{
		        align-items: flex-end;
		        flex-shrink: 0;
		    }[data-dsh-probe-view] .probe-theme .time-value{
		        font-size: 1.2rem;
		    }[data-dsh-probe-view] .probe-theme .time-label{
		        font-size: 0.72rem;
		    }[data-dsh-probe-view] .probe-theme .sakura-petal{
		        display: none;
		    }[data-dsh-probe-view] .probe-theme .deco-circle{
		        display: none;
		    }
		}@media (max-width: 480px){[data-dsh-probe-view] .probe-theme .welcome-section{
		        padding: 12px 12px 12px 12px;
		        margin-top: 35px;
		    }[data-dsh-probe-view] .probe-theme .greeting-icon{
		        width: 100px;
		        height: 100px;
		        top: -50px;
		        left: -20px;
		        transform: none;
		        filter: drop-shadow(0 2px 6px rgba(0,0,0,0.08));
		        animation: probe_bounce 2s ease-in-out infinite;
		    }[data-dsh-probe-view] .probe-theme .welcome-greeting{
		        padding-left: 70px;
		    }[data-dsh-probe-view] .probe-theme .greeting-text{
		        font-size: 1.05rem;
		    }[data-dsh-probe-view] .probe-theme .greeting-subtitle{
		        font-size: 0.68rem;
		    }[data-dsh-probe-view] .probe-theme .time-value{
		        font-size: 1.05rem;
		    }[data-dsh-probe-view] .probe-theme .time-label{
		        font-size: 0.68rem;
		    }[data-dsh-probe-view] .probe-theme .traffic-text{
		        font-size: 0.6rem;
		    }
		}@media (orientation: landscape) and (max-height: 500px){[data-dsh-probe-view] .probe-theme .welcome-section{
		        margin-top: 0;
		        padding: 12px 16px;
		    }[data-dsh-probe-view] .probe-theme .greeting-icon{
		        width: 65px;
		        height: 65px;
		        top: -32px;
		        left: -15px;
		        transform: none;
		        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));
		    }[data-dsh-probe-view] .probe-theme .welcome-content{
		        flex-direction: row;
		    }[data-dsh-probe-view] .probe-theme .welcome-greeting{
		        flex-direction: row;
		        padding-left: 40px;
		    }
		}[data-dsh-probe-view] .probe-theme .stats-bar{
		    display: flex;
		    gap: 16px;
		    margin-bottom: 24px;
		}[data-dsh-probe-view] .probe-theme .stat-item{
		    display: flex;
		    align-items: center;
		    gap: 8px;
		    padding: 10px 20px;
		    background: var(--bg-card);
		    border: 1px solid var(--border-color);
		    border-radius: var(--radius-md);
		    box-shadow: var(--shadow-card);
		    transition: all var(--transition);
		}[data-dsh-probe-view] .probe-theme .stat-item:hover{
		    box-shadow: var(--shadow-md);
		}[data-dsh-probe-view] .probe-theme .stat-label{
		    font-size: 0.85rem;
		    color: var(--text-secondary);
		    font-weight: 500;
		}[data-dsh-probe-view] .probe-theme .stat-value{
		    font-size: 1.25rem;
		    font-weight: 700;
		    font-family: var(--font-mono);
		}[data-dsh-probe-view] .probe-theme .stat-item.online .stat-value{
		    color: var(--success);
		}[data-dsh-probe-view] .probe-theme .stat-item.offline .stat-value{
		    color: var(--danger);
		}[data-dsh-probe-view] .probe-theme .group-filter{
		    display: flex;
		    flex-wrap: nowrap;
		    gap: 4px;
		    padding: 4px;
		    background: var(--bg-tertiary);
		    border-radius: var(--radius-md);
		    margin-left: auto;
		    max-width: 100%;
		    min-width: 0;
		    overflow-x: auto;
		    overflow-y: hidden;
		    scrollbar-width: none;
		    -webkit-overflow-scrolling: touch;
		    overscroll-behavior-x: contain;
		}[data-dsh-probe-view] .probe-theme .group-filter::-webkit-scrollbar{
		    display: none;
		}[data-dsh-probe-view] .probe-theme .group-filter .filter-btn{
		    flex: 0 0 auto;
		}[data-dsh-probe-view] .probe-theme .filter-btn{
		    padding: 6px 16px;
		    border: none;
		    background: transparent;
		    color: var(--text-secondary);
		    font-size: 0.85rem;
		    font-weight: 500;
		    border-radius: var(--radius-sm);
		    cursor: pointer;
		    transition: color var(--transition), background var(--transition), transform var(--transition-fast);
		    white-space: nowrap;
		    font-family: var(--font-sans);
		    will-change: transform;
		}[data-dsh-probe-view] .probe-theme .filter-btn:hover{
		    color: var(--text-primary);
		    background: var(--bg-secondary);
		}[data-dsh-probe-view] .probe-theme .filter-btn:active{
		    transform: scale(0.95);
		}[data-dsh-probe-view] .probe-theme .filter-btn.active{
		    background: var(--accent);
		    color: var(--text-inverse);
		    box-shadow: var(--shadow-sm);
		}[data-dsh-probe-view] .probe-theme .stat-item{
		    transition: transform var(--transition), box-shadow var(--transition);
		}[data-dsh-probe-view] .probe-theme .stat-item.animate-in{
		    animation: probe_fadeInScale 0.3s ease forwards;
		    opacity: 0;
		}[data-dsh-probe-view] .probe-theme .stat-item:nth-child(1).animate-in{ animation-delay: 0.1s; }[data-dsh-probe-view] .probe-theme .stat-item:nth-child(2).animate-in{ animation-delay: 0.15s; }[data-dsh-probe-view] .probe-theme .stat-item:nth-child(3).animate-in{ animation-delay: 0.2s; }[data-dsh-probe-view] .probe-theme .stats-bar .group-filter.animate-in{ 
		    animation: probe_fadeInScale 0.3s ease forwards;
		    opacity: 0;
		    animation-delay: 0.25s; 
		}[data-dsh-probe-view] .probe-theme .filter-btn{
		    transition: all var(--transition);
		}[data-dsh-probe-view] .probe-theme .filter-btn:hover{
		    transform: translateY(-2px);
		}[data-dsh-probe-view] .probe-theme .filter-btn:active{
		    transform: translateY(0) scale(0.98);
		}[data-dsh-probe-view] .probe-theme .filter-btn.active{
		    animation: probe_fadeInScale 0.3s ease forwards;
		}[data-dsh-probe-view] .probe-theme.has-custom-background .stat-item{
		    background: rgba(var(--bg-card-rgb), var(--custom-card-alpha, 0.7));
		    border-color: rgba(var(--border-color-rgb), 0.4);
		    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .stat-item:hover{
		    background: rgba(var(--bg-card-rgb), 0.85);
		    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .group-filter{
		    background: rgba(var(--bg-card-rgb), 0.65);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .filter-btn:hover{
		    background: rgba(var(--bg-card-rgb), 0.8);
		}[data-dsh-probe-view] .probe-theme.view-table .welcome-section,[data-dsh-probe-view] .probe-theme.view-table .stats-bar,[data-dsh-probe-view] .probe-theme.view-table .nodes-table-container{
		    max-width: 1214px;
		    margin-left: auto;
		    margin-right: auto;
		}[data-dsh-probe-view] .probe-theme.view-table .group-filter{
		    max-width: 1214px;
		}[data-dsh-probe-view] .probe-theme.view-table .stats-bar{
		    justify-content: flex-start;
		}[data-dsh-probe-view] .probe-theme.view-table .stats-bar .group-filter{
		    margin-left: auto;
		    margin-right: 0;
		}[data-dsh-probe-view] .probe-theme.view-table .stat-item{
		    flex: 0 0 auto;
		    padding: 8px 14px;
		    gap: 6px;
		}[data-dsh-probe-view] .probe-theme.view-table .stat-label{
		    font-size: 0.75rem;
		}[data-dsh-probe-view] .probe-theme.view-table .stat-value{
		    font-size: 1.1rem;
		}@media (max-width: 768px){[data-dsh-probe-view] .probe-theme .stats-bar{
		        gap: 8px;
		        flex-wrap: wrap;
		    }[data-dsh-probe-view] .probe-theme .stat-item{
		        padding: 8px 12px;
		        flex: 1;
		        min-width: 80px;
		    }[data-dsh-probe-view] .probe-theme .stat-label{
		        font-size: 0.72rem;
		    }[data-dsh-probe-view] .probe-theme .stat-value{
		        font-size: 1rem;
		    }[data-dsh-probe-view] .probe-theme .stats-bar .group-filter{
		        margin-left: 0;
		        width: 100%;
		        justify-content: flex-start;
		        margin-top: 8px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stats-bar{
		        flex-wrap: nowrap;
		    }[data-dsh-probe-view] .probe-theme.view-table .stats-bar .group-filter{
		        margin-left: auto;
		        margin-right: 0;
		        width: auto;
		        margin-top: 0;
		    }[data-dsh-probe-view] .probe-theme .filter-btn{
		        padding: 6px 12px;
		        font-size: 0.8rem;
		    }[data-dsh-probe-view] .probe-theme.view-table .welcome-section,[data-dsh-probe-view] .probe-theme.view-table .stats-bar,[data-dsh-probe-view] .probe-theme.view-table .nodes-table-container{
		        max-width: 854px;
		    }[data-dsh-probe-view] .probe-theme.view-table .group-filter{
		        max-width: 854px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-item{
		        padding: 6px 12px;
		        gap: 5px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-label{
		        font-size: 0.7rem;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-value{
		        font-size: 1rem;
		    }
		}@media (max-width: 480px){[data-dsh-probe-view] .probe-theme .stats-bar{
		        gap: 6px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stats-bar{
		        gap: 4px;
		    }[data-dsh-probe-view] .probe-theme .stat-item{
		        padding: 6px 10px;
		        min-width: 70px;
		    }[data-dsh-probe-view] .probe-theme .stat-label{
		        font-size: 0.68rem;
		    }[data-dsh-probe-view] .probe-theme .stat-value{
		        font-size: 0.9rem;
		    }[data-dsh-probe-view] .probe-theme.view-table .welcome-section,[data-dsh-probe-view] .probe-theme.view-table .stats-bar,[data-dsh-probe-view] .probe-theme.view-table .nodes-table-container{
		        max-width: 500px;
		    }[data-dsh-probe-view] .probe-theme.view-table .group-filter{
		        max-width: 500px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-item{
		        padding: 4px 8px;
		        gap: 3px;
		        min-width: auto;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-label{
		        font-size: 0.6rem;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-value{
		        font-size: 0.85rem;
		    }[data-dsh-probe-view] .probe-theme.view-table .stats-bar{
		        flex-wrap: wrap;
		        gap: 4px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stats-bar .group-filter{
		        margin-left: 0;
		        margin-right: 0;
		        width: 100%;
		        margin-top: 4px;
		        justify-content: flex-start;
		    }[data-dsh-probe-view] .probe-theme.view-table .filter-btn{
		        padding: 4px 8px;
		        font-size: 0.65rem;
		    }[data-dsh-probe-view] .probe-theme .filter-btn{
		        padding: 5px 10px;
		        font-size: 0.75rem;
		    }
		}@media (min-width: 769px) and (max-width: 1024px){[data-dsh-probe-view] .probe-theme.view-table .welcome-section,[data-dsh-probe-view] .probe-theme.view-table .stats-bar,[data-dsh-probe-view] .probe-theme.view-table .nodes-table-container{
		        max-width: 1000px;
		    }[data-dsh-probe-view] .probe-theme.view-table .group-filter{
		        max-width: 1000px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-item{
		        padding: 7px 12px;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-label{
		        font-size: 0.7rem;
		    }[data-dsh-probe-view] .probe-theme.view-table .stat-value{
		        font-size: 1rem;
		    }
		}@media (hover: none){[data-dsh-probe-view] .probe-theme .filter-btn:hover{
		        transform: none;
		    }
		}[data-dsh-probe-view] .probe-theme .nodes-grid{
		    display: grid;
		    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		    gap: 20px;
		}[data-dsh-probe-view] .probe-theme .node-card{
		    background: var(--bg-card);
		    border: 1px solid var(--border-color);
		    border-radius: 16px;
		    padding: 20px;
		    cursor: pointer;
		    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
		                box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
		                border-color 0.25s ease;
		    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 
		                0 1px 2px rgba(0, 0, 0, 0.06);
		    position: relative;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .node-card::before{
		    content: '';
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    height: 3px;
		    background: linear-gradient(90deg, var(--sakura-1), var(--sakura-2), var(--sakura-3));
		    opacity: 0;
		    transition: opacity 0.25s ease;
		}[data-dsh-probe-view] .probe-theme .node-card::after{
		    content: '';
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.03) 100%);
		    pointer-events: none;
		}[data-dsh-probe-view] .probe-theme .node-card:hover{
		    transform: translateY(-4px);
		    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08), 
		                0 4px 8px rgba(0, 0, 0, 0.04);
		    border-color: var(--accent);
		}[data-dsh-probe-view] .probe-theme .node-card:hover::before{
		    opacity: 1;
		}[data-dsh-probe-view] .probe-theme .node-card:active{
		    transform: translateY(-2px);
		    transition: transform 0.1s ease;
		}[data-dsh-probe-view] .probe-theme .node-card.offline{
		    opacity: 0.65;
		    filter: saturate(0.8);
		}[data-dsh-probe-view] .probe-theme .node-card.offline:hover{
		    opacity: 0.85;
		}[data-dsh-probe-view] .probe-theme .node-card.offline::before{
		    background: linear-gradient(90deg, var(--danger), #ff8a95);
		}[data-dsh-probe-view] .probe-theme .node-card-header{
		    display: flex;
		    align-items: center;
		    gap: 14px;
		    margin-bottom: 16px;
		    padding-bottom: 12px;
		    border-bottom: 1px solid var(--border-light);
		}[data-dsh-probe-view] .probe-theme .node-card-flag{
		    width: 32px;
		    height: 24px;
		    flex-shrink: 0;
		    border-radius: 4px;
		    overflow: hidden;
		    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		    transition: transform 0.2s ease;
		    background-size: cover;
		    background-position: center;
		    background-repeat: no-repeat;
		    image-rendering: -webkit-optimize-contrast;
		    image-rendering: crisp-edges;
		}[data-dsh-probe-view] .probe-theme .node-card:hover .node-card-flag{
		    transform: scale(1.05);
		}[data-dsh-probe-view] .probe-theme .node-card-flag-placeholder{
		    background: var(--bg-tertiary);
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    color: var(--text-tertiary);
		    font-size: 0.75rem;
		    font-weight: 600;
		}[data-dsh-probe-view] .probe-theme .node-card-info{
		    flex: 1;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .node-card-name{
		    display: flex;
		    align-items: center;
		    gap: 10px;
		    font-weight: 600;
		    font-size: 1rem;
		    color: var(--text-primary);
		    flex-wrap: wrap;
		    line-height: 1.4;
		}[data-dsh-probe-view] .probe-theme .node-name-text{
		    overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		    word-break: break-all;
		}[data-dsh-probe-view] .probe-theme .node-card-os{
		    display: inline-flex;
		    align-items: center;
		    gap: 4px;
		    font-size: 0.75rem;
		    color: var(--text-tertiary);
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    font-weight: 500;
		}[data-dsh-probe-view] .probe-theme .node-card-os .os-icon{
		    width: 12px;
		    height: 12px;
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme .node-card-subtitle{
		    display: flex;
		    align-items: center;
		    gap: 6px;
		    margin-top: 4px;
		    flex-wrap: nowrap;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .node-api-tag{
		    display: inline-flex;
		    align-items: center;
		    padding: 2px 8px;
		    font-size: 0.68rem;
		    font-weight: 600;
		    color: var(--info);
		    background: var(--info-light);
		    border-radius: 4px;
		    white-space: nowrap;
		    flex-shrink: 0;
		    transition: transform 0.2s ease, box-shadow 0.2s ease;
		}[data-dsh-probe-view] .probe-theme .node-card:hover .node-api-tag{
		    transform: translateY(-1px);
		    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		}[data-dsh-probe-view] .probe-theme .node-api-tag.tag-green,[data-dsh-probe-view] .probe-theme .node-api-tag.tag-success{
		    color: var(--success);
		    background: var(--success-light);
		}[data-dsh-probe-view] .probe-theme .node-api-tag.tag-red,[data-dsh-probe-view] .probe-theme .node-api-tag.tag-danger{
		    color: var(--danger);
		    background: var(--danger-light);
		}[data-dsh-probe-view] .probe-theme .node-api-tag.tag-blue,[data-dsh-probe-view] .probe-theme .node-api-tag.tag-info{
		    color: var(--info);
		    background: var(--info-light);
		}[data-dsh-probe-view] .probe-theme .node-api-tag.tag-yellow,[data-dsh-probe-view] .probe-theme .node-api-tag.tag-warning,[data-dsh-probe-view] .probe-theme .node-api-tag.tag-orange{
		    color: var(--warning);
		    background: var(--warning-light);
		}[data-dsh-probe-view] .probe-theme .node-api-tag.tag-purple,[data-dsh-probe-view] .probe-theme .node-api-tag.tag-pink{
		    color: var(--accent);
		    background: var(--accent-light);
		}[data-dsh-probe-view] .probe-theme .node-api-tag.tag-cyan{
		    color: #0891b2;
		    background: #cffafe;
		}[data-dsh-probe-view] .probe-theme .node-api-tag.tag-gray{
		    color: var(--text-secondary);
		    background: var(--bg-tertiary);
		}[data-dsh-probe-view] .probe-theme .node-region{
		    font-size: 1.1rem;
		}[data-dsh-probe-view] .probe-theme .node-status-dot{
		    width: 10px;
		    height: 10px;
		    border-radius: 50%;
		    background: var(--success);
		    flex-shrink: 0;
		    animation: probe_pulse 2s ease-in-out infinite;
		    box-shadow: 0 0 8px rgba(76, 175, 125, 0.4);
		}[data-dsh-probe-view] .probe-theme .node-status-dot.offline{
		    background: var(--danger);
		    animation: none;
		    box-shadow: 0 0 8px rgba(232, 102, 138, 0.4);
		}@keyframes probe_pulse{
		    0%, 100% { 
		        opacity: 1; 
		        transform: scale(1);
		    }
		    50% { 
		        opacity: 0.6; 
		        transform: scale(0.9);
		    }
		}[data-dsh-probe-view] .probe-theme .node-card-metrics{
		    display: grid;
		    grid-template-columns: 1fr 1fr;
		    gap: 14px;
		}[data-dsh-probe-view] .probe-theme .metric{
		    display: flex;
		    flex-direction: column;
		    gap: 6px;
		}[data-dsh-probe-view] .probe-theme .metric-label{
		    font-size: 0.72rem;
		    color: var(--text-tertiary);
		    font-weight: 600;
		    text-transform: uppercase;
		    letter-spacing: 0.08em;
		}[data-dsh-probe-view] .probe-theme .metric-bar{
		    height: 8px;
		    background: var(--bg-tertiary);
		    border-radius: 4px;
		    overflow: hidden;
		    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
		}[data-dsh-probe-view] .probe-theme .metric-bar-fill{
		    height: 100%;
		    border-radius: 4px;
		    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;
		    position: relative;
		}[data-dsh-probe-view] .probe-theme .metric-bar-fill::after{
		    content: '';
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    height: 50%;
		    background: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent);
		    border-radius: 4px 4px 0 0;
		}[data-dsh-probe-view] .probe-theme .metric-bar-fill.level-normal{
		    background: linear-gradient(90deg, var(--success), #6dd5a0);
		}[data-dsh-probe-view] .probe-theme .metric-bar-fill.level-warning{
		    background: linear-gradient(90deg, var(--warning), #f7c948);
		}[data-dsh-probe-view] .probe-theme .metric-bar-fill.level-danger{
		    background: linear-gradient(90deg, var(--danger), #ff8a95);
		}[data-dsh-probe-view] .probe-theme .metric-value{
		    font-size: 0.88rem;
		    font-weight: 700;
		    font-family: var(--font-mono);
		    color: var(--text-primary);
		    transition: color 0.3s ease;
		}[data-dsh-probe-view] .probe-theme .metric-value.level-normal{ color: var(--success); }[data-dsh-probe-view] .probe-theme .metric-value.level-warning{ color: var(--warning); }[data-dsh-probe-view] .probe-theme .metric-value.level-danger{ color: var(--danger); }[data-dsh-probe-view] .probe-theme .metric-full{
		    grid-column: 1 / -1;
		}[data-dsh-probe-view] .probe-theme .node-card-footer{
		    margin-top: 16px;
		    padding-top: 12px;
		    border-top: 1px solid var(--border-light);
		    display: flex;
		    flex-direction: column;
		    gap: 8px;
		    align-items: flex-start;
		    font-size: 0.72rem;
		    color: var(--text-tertiary);
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .node-info-row{
		    display: inline-flex;
		    align-items: center;
		    gap: 6px;
		    flex-wrap: nowrap;
		    max-width: 100%;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .node-uptime{
		    display: inline-flex;
		    align-items: center;
		    gap: 2px;
		    font-weight: 500;
		    font-size: 0.68rem;
		    padding: 2px 6px;
		    border-radius: 6px;
		    background: rgba(var(--border-color-rgb), 0.25);
		    color: var(--text-secondary);
		    flex-shrink: 1;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .node-expiry{
		    display: inline-flex;
		    align-items: center;
		    gap: 2px;
		    font-size: 0.68rem;
		    font-weight: 600;
		    padding: 2px 6px;
		    border-radius: 6px;
		    transition: transform 0.2s ease;
		    flex-shrink: 1;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .node-price{
		    display: inline-flex;
		    align-items: center;
		    gap: 2px;
		    font-size: 0.68rem;
		    font-weight: 600;
		    padding: 2px 6px;
		    border-radius: 6px;
		    background: rgba(232, 102, 138, 0.15);
		    color: var(--accent);
		    flex-shrink: 1;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .node-card:hover .node-expiry{
		    transform: translateY(-1px);
		}[data-dsh-probe-view] .probe-theme .node-expiry.level-normal{
		    color: var(--text-secondary);
		    background: var(--bg-tertiary);
		}[data-dsh-probe-view] .probe-theme .node-expiry.level-warning{
		    color: var(--warning);
		    background: var(--warning-light);
		}[data-dsh-probe-view] .probe-theme .node-expiry.level-danger{
		    color: var(--danger);
		    background: var(--danger-light);
		}[data-dsh-probe-view] .probe-theme .node-expiry.level-expired{
		    color: #fff;
		    background: var(--danger);
		}[data-dsh-probe-view] .probe-theme .node-network{
		    display: inline-flex;
		    align-items: center;
		    gap: 8px;
		    margin-left: auto;
		    font-weight: 500;
		}[data-dsh-probe-view] .probe-theme .node-network-row{
		    display: inline-flex;
		    align-items: center;
		    gap: 6px;
		    font-weight: 500;
		    max-width: 100%;
		    flex-wrap: nowrap;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .node-network-speed{
		    display: inline-flex;
		    align-items: center;
		    gap: 6px;
		    flex-shrink: 1;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .node-traffic-tag{
		    display: inline-flex;
		    align-items: center;
		    gap: 2px;
		    font-size: 0.65rem;
		    font-weight: 600;
		    padding: 2px 6px;
		    border-radius: 6px;
		    transition: transform 0.2s ease;
		    white-space: nowrap;
		    flex-shrink: 1;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .node-card:hover .node-traffic-tag{
		    transform: translateY(-1px);
		}[data-dsh-probe-view] .probe-theme .node-traffic-tag.traffic-tag-up{
		    background: rgba(76, 175, 125, 0.25);
		    color: #2e9b6a;
		}[data-dsh-probe-view] .probe-theme .node-traffic-tag.traffic-tag-down{
		    background: rgba(92, 156, 237, 0.25);
		    color: #3d7dd8;
		}[data-dsh-probe-view] .probe-theme .node-traffic-tag.traffic-tag-remaining{
		    background: rgba(232, 102, 138, 0.25);
		    color: var(--accent);
		}[data-dsh-probe-view] .probe-theme .node-ping{
		    font-family: var(--font-mono);
		    font-weight: 700;
		    padding: 3px 8px;
		    border-radius: 6px;
		    font-size: 0.72rem;
		    transition: transform 0.2s ease;
		}[data-dsh-probe-view] .probe-theme .node-card:hover .node-ping{
		    transform: translateY(-1px);
		}[data-dsh-probe-view] .probe-theme .node-ping.level-normal{
		    color: var(--success);
		    background: var(--success-light);
		}[data-dsh-probe-view] .probe-theme .node-ping.level-warning{
		    color: var(--warning);
		    background: var(--warning-light);
		}[data-dsh-probe-view] .probe-theme .node-ping.level-danger{
		    color: var(--danger);
		    background: var(--danger-light);
		}[data-dsh-probe-view] .probe-theme .network-dir{
		    display: inline-flex;
		    align-items: center;
		    gap: 2px;
		    font-family: var(--font-mono);
		    font-size: 0.7rem;
		}[data-dsh-probe-view] .probe-theme .network-dir .arrow-up{
		    color: var(--success);
		}[data-dsh-probe-view] .probe-theme .network-dir .arrow-down{
		    color: var(--info);
		}[data-dsh-probe-view] .probe-theme .node-card{
		    transition: transform var(--transition), box-shadow var(--transition);
		}[data-dsh-probe-view] .probe-theme .node-card.animate-in{
		    animation: probe_fadeInUp 0.4s ease forwards;
		    opacity: 0;
		}[data-dsh-probe-view] .probe-theme .node-card:nth-child(1).animate-in{ animation-delay: 0.05s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(2).animate-in{ animation-delay: 0.1s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(3).animate-in{ animation-delay: 0.15s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(4).animate-in{ animation-delay: 0.2s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(5).animate-in{ animation-delay: 0.25s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(6).animate-in{ animation-delay: 0.3s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(7).animate-in{ animation-delay: 0.35s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(8).animate-in{ animation-delay: 0.4s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(9).animate-in{ animation-delay: 0.45s; }[data-dsh-probe-view] .probe-theme .node-card:nth-child(10).animate-in{ animation-delay: 0.5s; }[data-dsh-probe-view] .probe-theme .node-card:hover .status-dot,[data-dsh-probe-view] .probe-theme .node-card:hover .node-status-dot{
		    transform: scale(1.2);
		}[data-dsh-probe-view] .probe-theme .node-card:active{
		    transform: scale(0.98);
		    transition: transform 0.1s ease;
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-card{
		    background: rgba(var(--bg-card-rgb), var(--custom-card-alpha, 0.75));
		    border-color: rgba(var(--border-color-rgb), 0.4);
		    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06),
		                0 1px 4px rgba(0, 0, 0, 0.04);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-card:hover{
		    background: rgba(var(--bg-card-rgb), 0.88);
		    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1),
		                0 4px 8px rgba(0, 0, 0, 0.06);
		    border-color: rgba(var(--accent-rgb), 0.5);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-card::after{
		    background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.06) 100%);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .table-card{
		    background: rgba(var(--bg-card-rgb), var(--custom-card-alpha, 0.7));
		    border-color: rgba(var(--border-color-rgb), 0.4);
		    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .table-card:hover{
		    background: rgba(var(--bg-card-rgb), 0.85);
		    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		    border-color: rgba(var(--accent-rgb), 0.5);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-card-header{
		    border-bottom-color: rgba(var(--border-color-rgb), 0.35);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-card-footer{
		    border-top-color: rgba(var(--border-color-rgb), 0.35);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag{
		    background: rgba(var(--bg-card-rgb), 0.55);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-green,[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-success{
		    background: rgba(76, 175, 125, 0.15);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-red,[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-danger{
		    background: rgba(231, 76, 94, 0.15);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-blue,[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-info{
		    background: rgba(92, 156, 237, 0.15);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-yellow,[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-warning,[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-orange{
		    background: rgba(245, 166, 35, 0.15);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-purple,[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-pink{
		    background: rgba(232, 102, 138, 0.15);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-cyan{
		    background: rgba(8, 145, 178, 0.15);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-api-tag.tag-gray{
		    background: rgba(var(--border-color-rgb), 0.25);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-expiry.level-normal{
		    background: rgba(var(--bg-card-rgb), 0.5);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-ping.level-normal{
		    background: rgba(76, 175, 125, 0.12);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-ping.level-warning{
		    background: rgba(245, 166, 35, 0.12);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-ping.level-danger{
		    background: rgba(231, 76, 94, 0.12);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .table-card-metric-bar{
		    background: rgba(var(--border-color-rgb), 0.25);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .table-card-status{
		    box-shadow: 0 0 8px rgba(76, 175, 125, 0.6);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .table-card-status.offline{
		    box-shadow: 0 0 8px rgba(231, 76, 94, 0.6);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .node-card-flag-placeholder{
		    background: rgba(var(--bg-card-rgb), 0.5);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .table-flag-placeholder{
		    background: rgba(var(--bg-card-rgb), 0.5);
		}@media (max-width: 768px){[data-dsh-probe-view] .probe-theme .nodes-grid{
		        grid-template-columns: 1fr;
		        gap: 14px;
		    }[data-dsh-probe-view] .probe-theme .node-card{
		        padding: 16px;
		        border-radius: 14px;
		    }[data-dsh-probe-view] .probe-theme .node-card:active{
		        transform: scale(0.98);
		        transition: transform 0.1s ease;
		    }[data-dsh-probe-view] .probe-theme .node-card::before{
		        height: 2px;
		    }[data-dsh-probe-view] .probe-theme .node-card-header{
		        gap: 12px;
		        margin-bottom: 14px;
		        padding-bottom: 10px;
		    }[data-dsh-probe-view] .probe-theme .node-card-flag{
		        width: 28px;
		        height: 20px;
		    }[data-dsh-probe-view] .probe-theme .node-card-name{
		        font-size: 0.95rem;
		    }[data-dsh-probe-view] .probe-theme .node-name-text{
		        -webkit-line-clamp: 2;
		    }[data-dsh-probe-view] .probe-theme .node-status-dot{
		        width: 8px;
		        height: 8px;
		    }[data-dsh-probe-view] .probe-theme .node-card-metrics{
		        gap: 12px;
		    }[data-dsh-probe-view] .probe-theme .metric-label{
		        font-size: 0.7rem;
		    }[data-dsh-probe-view] .probe-theme .metric-value{
		        font-size: 0.82rem;
		    }[data-dsh-probe-view] .probe-theme .metric-bar{
		        height: 6px;
		    }[data-dsh-probe-view] .probe-theme .node-card-footer{
		        margin-top: 14px;
		        padding-top: 10px;
		        gap: 6px 10px;
		        font-size: 0.7rem;
		    }[data-dsh-probe-view] .probe-theme .node-expiry{
		        font-size: 0.65rem;
		        padding: 2px 6px;
		    }[data-dsh-probe-view] .probe-theme .node-ping{
		        font-size: 0.68rem;
		        padding: 2px 6px;
		    }[data-dsh-probe-view] .probe-theme .network-dir{
		        font-size: 0.65rem;
		    }[data-dsh-probe-view] .probe-theme .nodes-table-container{
		        overflow: visible;
		    }[data-dsh-probe-view] .probe-theme .table-cards{
		        grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
		        gap: 10px;
		    }[data-dsh-probe-view] .probe-theme .table-card{
		        padding: 10px 14px;
		        gap: 8px;
		        min-height: 110px;
		    }[data-dsh-probe-view] .probe-theme .table-card-header{
		        gap: 6px;
		    }[data-dsh-probe-view] .probe-theme .table-card-flag-wrap{
		        min-width: 16px;
		    }[data-dsh-probe-view] .probe-theme .table-card-flag{
		        width: 16px;
		        height: 11px;
		    }[data-dsh-probe-view] .probe-theme .table-card-name{
		        font-size: 0.72rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-info{
		        gap: 4px;
		        margin-top: 1px;
		    }[data-dsh-probe-view] .probe-theme .table-card-price,[data-dsh-probe-view] .probe-theme .table-card-expiry{
		        font-size: 0.58rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-metrics{
		        grid-template-columns: repeat(6, 1fr);
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-label{
		        font-size: 0.6rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-value{
		        font-size: 0.7rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-bar{
		        height: 3px;
		    }
		}@media (max-width: 480px){[data-dsh-probe-view] .probe-theme .node-card{
		        padding: 12px;
		    }[data-dsh-probe-view] .probe-theme .table-cards{
		        grid-template-columns: 1fr;
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .table-card{
		        padding: 10px 12px;
		        gap: 6px;
		        min-height: 100px;
		    }[data-dsh-probe-view] .probe-theme .table-card-header{
		        gap: 5px;
		    }[data-dsh-probe-view] .probe-theme .table-card-flag-wrap{
		        min-width: 15px;
		    }[data-dsh-probe-view] .probe-theme .table-card-flag{
		        width: 15px;
		        height: 10px;
		    }[data-dsh-probe-view] .probe-theme .table-card-name{
		        font-size: 0.7rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-info{
		        gap: 3px;
		        margin-top: 1px;
		    }[data-dsh-probe-view] .probe-theme .table-card-price,[data-dsh-probe-view] .probe-theme .table-card-expiry{
		        font-size: 0.55rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-metrics{
		        grid-template-columns: repeat(6, 1fr);
		        gap: 6px;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-label{
		        font-size: 0.55rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-value{
		        font-size: 0.65rem;
		    }[data-dsh-probe-view] .probe-theme .os-icon{
		        width: 10px;
		        height: 10px;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-bar{
		        height: 2px;
		    }[data-dsh-probe-view] .probe-theme .node-card-metrics{
		        grid-template-columns: 1fr 1fr;
		        gap: 6px;
		    }[data-dsh-probe-view] .probe-theme .node-card-name{
		        font-size: 0.85rem;
		    }[data-dsh-probe-view] .probe-theme .node-name-text{
		        -webkit-line-clamp: 2;
		    }[data-dsh-probe-view] .probe-theme .node-api-tag{
		        font-size: 0.6rem;
		        padding: 1px 4px;
		    }[data-dsh-probe-view] .probe-theme .metric-label{
		        font-size: 0.65rem;
		    }[data-dsh-probe-view] .probe-theme .metric-value{
		        font-size: 0.75rem;
		    }[data-dsh-probe-view] .probe-theme .node-card-footer{
		        font-size: 0.65rem;
		    }
		}@media (min-width: 769px) and (max-width: 1024px){[data-dsh-probe-view] .probe-theme .nodes-grid{
		        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		    }[data-dsh-probe-view] .probe-theme .table-cards{
		        grid-template-columns: repeat(2, 1fr);
		        gap: 10px;
		    }[data-dsh-probe-view] .probe-theme .table-card{
		        padding: 10px 14px;
		        gap: 6px;
		        min-height: 110px;
		    }[data-dsh-probe-view] .probe-theme .table-card-name{
		        font-size: 0.72rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-price,[data-dsh-probe-view] .probe-theme .table-card-expiry{
		        font-size: 0.62rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-metrics{
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-label{
		        font-size: 0.62rem;
		    }[data-dsh-probe-view] .probe-theme .table-card-metric-value{
		        font-size: 0.72rem;
		    }
		}@media (hover: none){[data-dsh-probe-view] .probe-theme .node-card:hover{
		        transform: none;
		        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 
		                    0 1px 2px rgba(0, 0, 0, 0.06);
		        border-color: var(--border-color);
		    }[data-dsh-probe-view] .probe-theme .node-card:hover::before{
		        opacity: 0;
		    }[data-dsh-probe-view] .probe-theme .node-card:active{
		        transform: scale(0.98);
		        border-color: var(--accent);
		    }[data-dsh-probe-view] .probe-theme .node-card:active::before{
		        opacity: 1;
		    }[data-dsh-probe-view] .probe-theme .node-card:hover .node-card-flag,[data-dsh-probe-view] .probe-theme .node-card:hover .node-api-tag,[data-dsh-probe-view] .probe-theme .node-card:hover .node-expiry,[data-dsh-probe-view] .probe-theme .node-card:hover .node-ping{
		        transform: none;
		    }[data-dsh-probe-view] .probe-theme .node-card:active .node-card-flag{
		        transform: scale(1.02);
		    }[data-dsh-probe-view] .probe-theme .node-card:hover{
		        transform: none;
		        box-shadow: var(--shadow-card);
		    }[data-dsh-probe-view] .probe-theme .node-card::before{
		        display: none;
		    }[data-dsh-probe-view] .probe-theme .metric-value{
		        transform: none !important;
		    }
		}[data-dsh-probe-view] .probe-theme .nodes-table-container{
		    background: transparent;
		    border: none;
		    border-radius: 0;
		    overflow: visible;
		    box-shadow: none;
		}[data-dsh-probe-view] .probe-theme .nodes-table{
		    display: none;
		}[data-dsh-probe-view] .probe-theme #nodesTableBody{
		    width: 100%;
		}[data-dsh-probe-view] .probe-theme .table-cards{
		    display: grid;
		    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
		    gap: 14px;
		    width: 100%;
		    justify-content: center;
		}[data-dsh-probe-view] .probe-theme .table-card{
		    display: flex;
		    flex-direction: column;
		    background: var(--bg-card);
		    border: 1px solid var(--border-color);
		    border-radius: var(--radius-lg);
		    padding: 12px 16px;
		    cursor: pointer;
		    min-height: 120px;
		    transition: all var(--transition);
		    box-shadow: var(--shadow-card);
		    position: relative;
		    overflow: hidden;
		    min-width: 0;
		    gap: 8px;
		}[data-dsh-probe-view] .probe-theme .table-card:hover{
		    transform: translateY(-2px);
		    box-shadow: var(--shadow-md);
		    border-color: var(--accent);
		}[data-dsh-probe-view] .probe-theme .table-card.offline{
		    opacity: 0.7;
		}[data-dsh-probe-view] .probe-theme .table-card-header{
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		    gap: 2px;
		    width: 100%;
		}[data-dsh-probe-view] .probe-theme .table-card-status{
		    width: 8px;
		    height: 8px;
		    border-radius: 50%;
		    background: var(--success);
		    box-shadow: 0 0 6px rgba(76, 175, 125, 0.5);
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme .table-card-status.offline{
		    background: var(--danger);
		    box-shadow: 0 0 6px rgba(231, 76, 94, 0.5);
		}[data-dsh-probe-view] .probe-theme .table-card-flag-wrap{
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    min-width: 17px;
		}[data-dsh-probe-view] .probe-theme .table-card-flag{
		    width: 17px;
		    height: 12px;
		    border-radius: 2px;
		    background-size: cover;
		    background-position: center;
		    background-repeat: no-repeat;
		    image-rendering: crisp-edges;
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme .table-card-name-wrap{
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    gap: 6px;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .table-card-name{
		    font-weight: 700;
		    font-size: 0.75rem;
		    color: var(--text-primary);
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    letter-spacing: -0.01em;
		    text-align: center;
		}[data-dsh-probe-view] .probe-theme .table-card-info{
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    gap: 8px;
		    margin-top: 0;
		}[data-dsh-probe-view] .probe-theme .table-card-price{
		    font-size: 0.65rem;
		    color: var(--success);
		    font-weight: 600;
		}[data-dsh-probe-view] .probe-theme .table-card-expiry{
		    font-size: 0.65rem;
		    color: var(--text-tertiary);
		}[data-dsh-probe-view] .probe-theme .table-card-expiry.level-warning{
		    color: var(--warning);
		}[data-dsh-probe-view] .probe-theme .table-card-expiry.level-danger{
		    color: var(--danger);
		}[data-dsh-probe-view] .probe-theme .table-card-expiry.level-expired{
		    color: var(--danger);
		}[data-dsh-probe-view] .probe-theme .table-card-metrics{
		    display: grid;
		    grid-template-columns: repeat(6, 1fr);
		    gap: 12px;
		    width: 100%;
		}[data-dsh-probe-view] .probe-theme .table-card-tags{
		    display: flex;
		    flex-wrap: wrap;
		    gap: 3px;
		}[data-dsh-probe-view] .probe-theme .table-card-metric-tags{
		    grid-column: 1 / -1;
		}[data-dsh-probe-view] .probe-theme .table-card-metric-tags .table-card-metric-label{
		    margin-bottom: 2px;
		}[data-dsh-probe-view] .probe-theme .table-card-tag{
		    font-size: 0.6rem;
		    padding: 2px 6px;
		    border-radius: 4px;
		    background: var(--bg-secondary);
		    color: var(--text-tertiary);
		    white-space: nowrap;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-green,[data-dsh-probe-view] .probe-theme .table-card-tag.tag-success,[data-dsh-probe-view] .probe-theme .table-card-tag.tag-upload{
		    background: rgba(76, 175, 125, 0.25);
		    color: #2e9b6a;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-red,[data-dsh-probe-view] .probe-theme .table-card-tag.tag-danger{
		    background: rgba(231, 76, 94, 0.25);
		    color: #d63041;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-blue,[data-dsh-probe-view] .probe-theme .table-card-tag.tag-info,[data-dsh-probe-view] .probe-theme .table-card-tag.tag-download{
		    background: rgba(92, 156, 237, 0.25);
		    color: #3d7dd8;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-yellow,[data-dsh-probe-view] .probe-theme .table-card-tag.tag-warning{
		    background: rgba(245, 166, 35, 0.25);
		    color: #d99a0f;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-orange{
		    background: rgba(255, 152, 0, 0.25);
		    color: #e68a00;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-purple{
		    background: rgba(156, 92, 224, 0.25);
		    color: #8a4ad5;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-pink{
		    background: rgba(232, 102, 138, 0.25);
		    color: #d64a7a;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-remaining{
		    background: rgba(156, 92, 224, 0.25);
		    color: #8a4ad5;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-cyan{
		    background: rgba(0, 188, 212, 0.25);
		    color: #00a5bb;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-gray{
		    background: rgba(128, 128, 128, 0.25);
		    color: #666666;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-ip{
		    font-weight: 600;
		    font-size: 0.55rem;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-ipv4{
		    background: rgba(92, 156, 237, 0.25);
		    color: #3d7dd8;
		}[data-dsh-probe-view] .probe-theme .table-card-tag.tag-ipv6{
		    background: rgba(156, 92, 224, 0.25);
		    color: #8a4ad5;
		}[data-dsh-probe-view] .probe-theme .table-card-metric{
		    display: flex;
		    flex-direction: column;
		    gap: 2px;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .table-card-metric.table-card-system .table-card-metric-value{
		    font-weight: 600;
		    display: flex;
		    align-items: center;
		    gap: 4px;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .table-card-metric.table-card-system .table-card-metric-value .os-icon{
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme .os-icon{
		    display: inline-block;
		    width: 14px;
		    height: 14px;
		    border-radius: 2px;
		    flex-shrink: 0;
		    background-size: contain;
		    background-repeat: no-repeat;
		    background-position: center;
		}[data-dsh-probe-view] .probe-theme .os-icon-windows{ background-image: url('../logo/os-windows.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-ubuntu{ background-image: url('../logo/os-ubuntu.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-debian{ background-image: url('../logo/os-debian.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-centos{ background-image: url('../logo/os-centos.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-rhel{ background-image: url('../logo/os-redhat.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-fedora{ background-image: url('../logo/os-fedora.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-arch{ background-image: url('../logo/os-arch.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-suse{ background-image: url('../logo/os-openSUSE.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-alpine{ background-image: url('../logo/os-alpine.webp'); }[data-dsh-probe-view] .probe-theme .os-icon-openwrt{ background-image: url('../logo/os-openwrt.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-freebsd{ background-image: url('../logo/os-freebsd.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-macos{ background-image: url('../logo/os-macos.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-android{ background-image: url('../logo/linux.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-linux{ background-image: url('../logo/linux.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-rocky{ background-image: url('../logo/os-rocky.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-alma{ background-image: url('../logo/os-alma.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-mint{ background-image: url('../logo/os-mint.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-manjaro{ background-image: url('../logo/os-manjaro-.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-gentoo{ background-image: url('../logo/os-gentoo.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-nix{ background-image: url('../logo/os-nix.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-qnap{ background-image: url('../logo/os-qnap.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-unraid{ background-image: url('../logo/os-unraid.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-armbian{ background-image: url('../logo/os-armbian.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-kail{ background-image: url('../logo/os-kail.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-huawei{ background-image: url('../logo/os-huawei.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-orange-pi{ background-image: url('../logo/os-orange-pi.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-fnos{ background-image: url('../logo/os-fnos.ico'); }[data-dsh-probe-view] .probe-theme .os-icon-opencloudos{ background-image: url('../logo/os-OpenCloudOS.png'); }[data-dsh-probe-view] .probe-theme .os-icon-istore{ background-image: url('../logo/os-istore.png'); }[data-dsh-probe-view] .probe-theme .os-icon-proxmox{ background-image: url('../logo/os-proxmox.ico'); }[data-dsh-probe-view] .probe-theme .os-icon-synology{ background-image: url('../logo/os-synology.ico'); }[data-dsh-probe-view] .probe-theme .os-icon-astar{ background-image: url('../logo/os-astar.png'); }[data-dsh-probe-view] .probe-theme .os-icon-alibaba{ background-image: url('../logo/alibabacloud-color.svg'); }[data-dsh-probe-view] .probe-theme .os-icon-unknown{ background-image: url('../logo/TablerHelp.svg'); }[data-dsh-probe-view] .probe-theme .table-card-metric-label{
		    font-size: 0.65rem;
		    color: var(--text-tertiary);
		}[data-dsh-probe-view] .probe-theme .table-card-metric-value{
		    font-size: 0.75rem;
		    font-weight: 600;
		    color: var(--text-primary);
		}[data-dsh-probe-view] .probe-theme .table-card-metric-bar{
		    height: 3px;
		    background: var(--bg-tertiary);
		    border-radius: 2px;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .table-card-metric-fill{
		    height: 100%;
		    border-radius: 2px;
		    transition: width 0.5s ease;
		    position: relative;
		}[data-dsh-probe-view] .probe-theme .table-card-metric-fill::after{
		    content: '';
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    height: 50%;
		    background: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent);
		    border-radius: 2px 2px 0 0;
		}[data-dsh-probe-view] .probe-theme .table-card-metric-fill.level-excellent{ background: var(--success); }[data-dsh-probe-view] .probe-theme .table-card-metric-fill.level-normal{ background: var(--info); }[data-dsh-probe-view] .probe-theme .table-card-metric-fill.level-warning{ background: var(--warning); }[data-dsh-probe-view] .probe-theme .table-card-metric-fill.level-danger{ background: var(--danger); }[data-dsh-probe-view] .probe-theme .table-card-metric-value.level-excellent{ color: var(--success); }[data-dsh-probe-view] .probe-theme .table-card-metric-value.level-normal{ color: var(--info); }[data-dsh-probe-view] .probe-theme .table-card-metric-value.level-warning{ color: var(--warning); }[data-dsh-probe-view] .probe-theme .table-card-metric-value.level-danger{ color: var(--danger); }[data-dsh-probe-view] .probe-theme .table-card-tags{
		    display: flex;
		    gap: 4px;
		    align-items: center;
		    flex-wrap: nowrap;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .table-card:hover .node-api-tag{
		    transform: none;
		}[data-dsh-probe-view] .probe-theme .table-status{
		    display: inline-flex;
		    align-items: center;
		    gap: 6px;
		}[data-dsh-probe-view] .probe-theme .table-status .node-status-dot{
		    width: 6px;
		    height: 6px;
		}[data-dsh-probe-view] .probe-theme .table-name{
		    font-weight: 600;
		}[data-dsh-probe-view] .probe-theme .table-region{
		    display: inline-flex;
		    align-items: center;
		    justify-content: center;
		}[data-dsh-probe-view] .probe-theme .table-flag{
		    width: 24px;
		    height: 16px;
		    border-radius: 2px;
		    object-fit: cover;
		    vertical-align: middle;
		    image-rendering: -webkit-optimize-contrast;
		    image-rendering: crisp-edges;
		}[data-dsh-probe-view] .probe-theme .table-flag-placeholder{
		    display: inline-flex;
		    align-items: center;
		    justify-content: center;
		    width: 24px;
		    height: 16px;
		    border-radius: 2px;
		    background: var(--bg-tertiary);
		    color: var(--text-tertiary);
		    font-size: 0.65rem;
		    font-weight: 600;
		}[data-dsh-probe-view] .probe-theme .table-metric{
		    display: flex;
		    align-items: center;
		    gap: 8px;
		}[data-dsh-probe-view] .probe-theme .table-metric-bar{
		    width: 60px;
		    height: 4px;
		    background: var(--bg-tertiary);
		    border-radius: 2px;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .table-metric-bar-fill{
		    height: 100%;
		    border-radius: 2px;
		    transition: width 0.6s ease;
		}[data-dsh-probe-view] .probe-theme .table-metric-bar-fill.level-normal{ background: var(--success); }[data-dsh-probe-view] .probe-theme .table-metric-bar-fill.level-warning{ background: var(--warning); }[data-dsh-probe-view] .probe-theme .table-metric-bar-fill.level-danger{ background: var(--danger); }[data-dsh-probe-view] .probe-theme .table-metric-value{
		    font-family: var(--font-mono);
		    font-size: 0.82rem;
		    font-weight: 600;
		}[data-dsh-probe-view] .probe-theme .table-metric-value.level-normal{ color: var(--success); }[data-dsh-probe-view] .probe-theme .table-metric-value.level-warning{ color: var(--warning); }[data-dsh-probe-view] .probe-theme .table-metric-value.level-danger{ color: var(--danger); }[data-dsh-probe-view] .probe-theme .table-network{
		    font-family: var(--font-mono);
		    font-size: 0.78rem;
		    white-space: nowrap;
		}[data-dsh-probe-view] .probe-theme .table-network .arrow-up,[data-dsh-probe-view] .probe-theme .table-network .arrow-down{
		    margin: 0 2px;
		}[data-dsh-probe-view] .probe-theme .table-ping{
		    font-family: var(--font-mono);
		    font-size: 0.82rem;
		    font-weight: 600;
		}[data-dsh-probe-view] .probe-theme .table-ping.level-normal{ color: var(--success); }[data-dsh-probe-view] .probe-theme .table-ping.level-warning{ color: var(--warning); }[data-dsh-probe-view] .probe-theme .table-ping.level-danger{ color: var(--danger); }[data-dsh-probe-view] .probe-theme .table-uptime{
		    font-family: var(--font-mono);
		    font-size: 0.82rem;
		    color: var(--text-secondary);
		}[data-dsh-probe-view] .probe-theme .modal-overlay{
		    position: fixed;
		    inset: 0;
		    background: var(--bg-overlay);
		    backdrop-filter: blur(4px);
		    -webkit-backdrop-filter: blur(4px);
		    z-index: 200;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    padding: 24px;
		    opacity: 0;
		    visibility: hidden;
		    transition: opacity 0.25s ease, visibility 0.25s ease;
		    -webkit-overflow-scrolling: touch;
		    pointer-events: none;
		}[data-dsh-probe-view] .probe-theme .modal-overlay.active{
		    opacity: 1;
		    visibility: visible;
		    pointer-events: auto;
		}[data-dsh-probe-view] .probe-theme .modal-overlay.closing{
		    opacity: 0;
		    visibility: hidden;
		    pointer-events: none;
		}[data-dsh-probe-view] .probe-theme .modal{
		    background: var(--bg-modal);
		    border-radius: var(--radius-xl);
		    width: 100%;
		    max-width: 1200px;
		    max-height: 90vh;
		    overflow-y: auto;
		    overflow-x: hidden;
		    box-shadow: var(--shadow-lg);
		    border: 1px solid var(--border-color);
		    will-change: transform, opacity;
		    transform: scale(0.95) translateY(20px);
		    opacity: 0;
		    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
		    -webkit-overflow-scrolling: touch;
		    overscroll-behavior: contain;
		}[data-dsh-probe-view] .probe-theme .modal.dragging{
		    cursor: grabbing;
		    user-select: none;
		}[data-dsh-probe-view] .probe-theme .modal-overlay.active .modal{
		    transform: scale(1) translateY(0);
		    opacity: 1;
		}[data-dsh-probe-view] .probe-theme .modal-scroll-indicator{
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    height: 3px;
		    background: linear-gradient(to right, var(--accent), var(--accent-light, rgba(232, 102, 138, 0.5)));
		    transform-origin: left;
		    transform: scaleX(0);
		    transition: transform 0.1s ease;
		    z-index: 20;
		    pointer-events: none;
		}[data-dsh-probe-view] .probe-theme .modal-scroll-indicator.visible{
		    transform: scaleX(var(--scroll-progress, 0));
		}[data-dsh-probe-view] .probe-theme .modal-header{
		    display: flex;
		    align-items: center;
		    justify-content: space-between;
		    padding: 20px 24px;
		    border-bottom: 1px solid var(--border-color);
		    position: sticky;
		    top: 0;
		    background: var(--bg-modal);
		    z-index: 10;
		}[data-dsh-probe-view] .probe-theme .modal-header h2{
		    font-size: 1.2rem;
		    font-weight: 700;
		    color: var(--text-primary);
		    margin: 0;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    flex: 1;
		    margin-right: 16px;
		}[data-dsh-probe-view] .probe-theme .modal-close{
		    width: 36px;
		    height: 36px;
		    border: none;
		    background: var(--bg-tertiary);
		    color: var(--text-secondary);
		    border-radius: var(--radius-sm);
		    cursor: pointer;
		    font-size: 1.3rem;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    flex-shrink: 0;
		    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
		    will-change: transform;
		}[data-dsh-probe-view] .probe-theme .modal-close:hover{
		    background: var(--danger-light);
		    color: var(--danger);
		    transform: rotate(90deg);
		}[data-dsh-probe-view] .probe-theme .modal-close:active{
		    transform: rotate(90deg) scale(0.95);
		}[data-dsh-probe-view] .probe-theme .modal-tabs{
		    display: flex;
		    gap: 6px;
		    padding: 12px 20px 0;
		    background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
		    border-bottom: 1px solid var(--border-color);
		    overflow-x: auto;
		    scrollbar-width: none;
		    -ms-overflow-style: none;
		    position: relative;
		}[data-dsh-probe-view] .probe-theme .modal-tabs::before{
		    content: '';
		    position: absolute;
		    bottom: 0;
		    left: 0;
		    right: 0;
		    height: 1px;
		    background: linear-gradient(90deg, transparent, var(--border-color) 20%, var(--border-color) 80%, transparent);
		}[data-dsh-probe-view] .probe-theme .modal-tabs::-webkit-scrollbar{
		    display: none;
		}[data-dsh-probe-view] .probe-theme .modal-tab{
		    padding: 10px 18px;
		    border: none;
		    background: transparent;
		    color: var(--text-tertiary);
		    font-size: 0.875rem;
		    font-weight: 500;
		    cursor: pointer;
		    border-radius: 10px 10px 0 0;
		    font-family: var(--font-sans);
		    margin-bottom: -1px;
		    white-space: nowrap;
		    position: relative;
		    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		    letter-spacing: 0.01em;
		}[data-dsh-probe-view] .probe-theme .modal-tab::before{
		    content: '';
		    position: absolute;
		    inset: 0;
		    border-radius: 10px 10px 0 0;
		    background: var(--bg-secondary);
		    opacity: 0;
		    transition: opacity 0.25s ease;
		    z-index: -1;
		}[data-dsh-probe-view] .probe-theme .modal-tab::after{
		    content: '';
		    position: absolute;
		    bottom: 0;
		    left: 50%;
		    width: 0;
		    height: 3px;
		    background: linear-gradient(90deg, var(--accent), var(--accent-hover, var(--accent)));
		    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		    transform: translateX(-50%);
		    border-radius: 3px 3px 0 0;
		    box-shadow: 0 -2px 8px rgba(var(--accent-rgb, 139, 92, 246), 0.4);
		}[data-dsh-probe-view] .probe-theme .modal-tab:hover{
		    color: var(--text-primary);
		    transform: translateY(-1px);
		}[data-dsh-probe-view] .probe-theme .modal-tab:hover::before{
		    opacity: 1;
		}[data-dsh-probe-view] .probe-theme .modal-tab:active{
		    transform: translateY(0);
		}[data-dsh-probe-view] .probe-theme .modal-tab.active{
		    color: var(--accent);
		    background: var(--bg-secondary);
		    font-weight: 600;
		    text-shadow: 0 0 20px rgba(var(--accent-rgb, 139, 92, 246), 0.3);
		}[data-dsh-probe-view] .probe-theme .modal-tab.active::before{
		    opacity: 1;
		    background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
		    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
		}[data-dsh-probe-view] .probe-theme .modal-tab.active::after,[data-dsh-probe-view] .probe-theme .modal-tab:hover::after{
		    width: calc(100% - 16px);
		}[data-dsh-probe-view] .probe-theme .modal-body{
		    padding: 24px;
		    position: relative;
		    -webkit-overflow-scrolling: touch;
		}[data-dsh-probe-view] .probe-theme .modal-page{
		    display: none;
		    opacity: 0;
		    transform: translateX(20px);
		    transition: opacity 0.25s ease, transform 0.25s ease;
		    will-change: opacity, transform;
		}[data-dsh-probe-view] .probe-theme .modal-page.active{
		    display: block;
		    opacity: 1;
		    transform: translateX(0);
		}[data-dsh-probe-view] .probe-theme .modal-page.slide-out{
		    opacity: 0;
		    transform: translateX(-20px);
		}[data-dsh-probe-view] .probe-theme .modal.dragging .modal-body{
		    pointer-events: none;
		}[data-dsh-probe-view] .probe-theme .modal-drag-handle{
		    display: none;
		    width: 40px;
		    height: 4px;
		    background: var(--border-color);
		    border-radius: 2px;
		    margin: 8px auto 0;
		    cursor: grab;
		}[data-dsh-probe-view] .probe-theme .modal-info{
		    display: grid;
		    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		    gap: 12px;
		    margin-bottom: 24px;
		}[data-dsh-probe-view] .probe-theme .time-range-controls{
		    display: flex;
		    align-items: center;
		    gap: 8px;
		    margin-bottom: 16px;
		    padding: 12px;
		    background: var(--bg-tertiary);
		    border-radius: var(--radius-sm);
		}[data-dsh-probe-view] .probe-theme .time-range-label{
		    font-size: 0.85rem;
		    color: var(--text-secondary);
		    font-weight: 500;
		    margin-right: 8px;
		}[data-dsh-probe-view] .probe-theme .time-range-btn{
		    padding: 6px 12px;
		    border: none;
		    background: transparent;
		    color: var(--text-secondary);
		    border-radius: 6px;
		    cursor: pointer;
		    transition: all 0.2s ease;
		    font-size: 0.85rem;
		    font-weight: 500;
		}[data-dsh-probe-view] .probe-theme .time-range-btn:hover{
		    background: rgba(var(--accent-rgb), 0.1);
		    color: var(--text-primary);
		}[data-dsh-probe-view] .probe-theme .time-range-btn.active{
		    background: var(--accent);
		    color: white;
		    box-shadow: 0 2px 8px rgba(var(--accent-rgb), 0.3);
		}[data-dsh-probe-view] .probe-theme .time-range-btn.active:hover{
		    background: var(--accent);
		    color: white;
		}[data-dsh-probe-view] .probe-theme .modal-info-item{
		    padding: 12px;
		    background: var(--bg-tertiary);
		    border-radius: var(--radius-sm);
		    transition: transform 0.2s ease, box-shadow 0.2s ease;
		    opacity: 0;
		    animation: probe_staggerFadeIn 0.35s ease forwards;
		}[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(1){ animation-delay: 0.03s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(2){ animation-delay: 0.06s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(3){ animation-delay: 0.09s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(4){ animation-delay: 0.12s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(5){ animation-delay: 0.15s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(6){ animation-delay: 0.18s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(7){ animation-delay: 0.21s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(8){ animation-delay: 0.24s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(9){ animation-delay: 0.27s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(10){ animation-delay: 0.30s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(11){ animation-delay: 0.33s; }[data-dsh-probe-view] .probe-theme .modal-info-item:nth-child(12){ animation-delay: 0.36s; }[data-dsh-probe-view] .probe-theme .modal-info-item:hover{
		    transform: translateY(-2px);
		    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		}[data-dsh-probe-view] .probe-theme .modal-info-label{
		    font-size: 0.75rem;
		    color: var(--text-tertiary);
		    margin-bottom: 4px;
		    text-transform: uppercase;
		    letter-spacing: 0.05em;
		}[data-dsh-probe-view] .probe-theme .modal-info-value{
		    font-size: 0.9rem;
		    font-weight: 600;
		    color: var(--text-primary);
		    overflow-wrap: break-word;
		    line-height: 1.4;
		}[data-dsh-probe-view] .probe-theme .modal-info-value-nowrap{
		    white-space: nowrap;
		    overflow-wrap: normal;
		}[data-dsh-probe-view] .probe-theme .modal-charts{
		    display: flex;
		    flex-wrap: wrap;
		    gap: 20px;
		}[data-dsh-probe-view] .probe-theme .modal-charts .chart-section{
		    flex: 1 1 calc(33.333% - 14px);
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .chart-section{
		    position: relative;
		    opacity: 0;
		    animation: probe_chartReveal 0.4s ease forwards;
		}[data-dsh-probe-view] .probe-theme .chart-section:nth-child(1){ animation-delay: 0.05s; }[data-dsh-probe-view] .probe-theme .chart-section:nth-child(2){ animation-delay: 0.10s; }[data-dsh-probe-view] .probe-theme .chart-section:nth-child(3){ animation-delay: 0.15s; }[data-dsh-probe-view] .probe-theme .chart-section:nth-child(4){ animation-delay: 0.20s; }[data-dsh-probe-view] .probe-theme .chart-section:nth-child(5){ animation-delay: 0.25s; }[data-dsh-probe-view] .probe-theme .chart-section:nth-child(6){ animation-delay: 0.30s; }[data-dsh-probe-view] .probe-theme .chart-header{
		    display: flex;
		    align-items: center;
		    justify-content: space-between;
		    margin-bottom: 10px;
		    gap: 12px;
		}[data-dsh-probe-view] .probe-theme .chart-header h3,[data-dsh-probe-view] .probe-theme .chart-section > h3{
		    margin: 0;
		    font-size: 0.9rem;
		    font-weight: 600;
		    color: var(--text-primary);
		    display: flex;
		    align-items: center;
		    gap: 8px;
		    position: relative;
		    padding-left: 12px;
		}[data-dsh-probe-view] .probe-theme .chart-header h3::before,[data-dsh-probe-view] .probe-theme .chart-section > h3::before{
		    content: '';
		    position: absolute;
		    left: 0;
		    top: 50%;
		    transform: translateY(-50%);
		    width: 3px;
		    height: 16px;
		    background: linear-gradient(180deg, var(--accent), var(--accent-hover));
		    border-radius: 2px;
		    box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
		}[data-dsh-probe-view] .probe-theme .chart-header h3::after,[data-dsh-probe-view] .probe-theme .chart-section > h3::after{
		    content: '';
		    width: 6px;
		    height: 6px;
		    background: var(--accent);
		    border-radius: 50%;
		    opacity: 0.6;
		    animation: probe_pulse-dot 2s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .chart-section > h3{
		    margin-bottom: 10px;
		}[data-dsh-probe-view] .probe-theme .chart-legend{
		    display: flex;
		    align-items: center;
		    gap: 16px;
		    font-size: 0.78rem;
		}[data-dsh-probe-view] .probe-theme .legend-item{
		    display: flex;
		    align-items: center;
		    gap: 6px;
		    color: var(--text-secondary);
		}[data-dsh-probe-view] .probe-theme .legend-dot{
		    width: 8px;
		    height: 8px;
		    border-radius: 50%;
		    display: inline-block;
		}[data-dsh-probe-view] .probe-theme .legend-up .legend-dot{
		    background: var(--legend-up-color, #95E1D3);
		}[data-dsh-probe-view] .probe-theme .legend-down .legend-dot{
		    background: var(--legend-down-color, #5BB85B);
		}[data-dsh-probe-view] .probe-theme .chart-section canvas{
		    width: 100%;
		    height: 160px;
		    border-radius: var(--radius-sm);
		    background: var(--bg-tertiary);
		    cursor: crosshair;
		    display: block;
		    touch-action: none;
		}[data-dsh-probe-view] .probe-theme .chart-highlight-dot{
		    position: absolute;
		    pointer-events: none;
		    display: none;
		    z-index: 11;
		    width: 10px;
		    height: 10px;
		    border-radius: 50%;
		    border: 2px solid var(--bg-card, #fff);
		    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
		    transform: translate(-50%, -50%);
		}[data-dsh-probe-view] .probe-theme .chart-section canvas.chart-loading{
		    opacity: 0.5;
		    animation: probe_pulse 1.5s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .chart-section.loading,[data-dsh-probe-view] .probe-theme .latency-chart-container.loading{
		    position: relative;
		}[data-dsh-probe-view] .probe-theme .chart-section.loading::after,[data-dsh-probe-view] .probe-theme .latency-chart-container.loading::after{
		    content: '';
		    position: absolute;
		    inset: 0;
		    background: rgba(var(--bg-card-rgb), 0.6);
		    backdrop-filter: blur(2px);
		    -webkit-backdrop-filter: blur(2px);
		    border-radius: var(--radius-md);
		    z-index: 5;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    animation: probe_chartLoadingFadeIn 0.2s ease forwards;
		}[data-dsh-probe-view] .probe-theme .chart-section.loading::before,[data-dsh-probe-view] .probe-theme .latency-chart-container.loading::before{
		    content: '';
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    width: 24px;
		    height: 24px;
		    border: 2.5px solid rgba(var(--border-color-rgb), 0.3);
		    border-top-color: var(--accent);
		    border-radius: 50%;
		    z-index: 6;
		    animation: probe_chartSpin 0.6s linear infinite;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip{
		    position: fixed;
		    padding: 0;
		    background: rgba(var(--bg-card-rgb), 0.92);
		    backdrop-filter: blur(12px) saturate(180%);
		    -webkit-backdrop-filter: blur(12px) saturate(180%);
		    border: 1px solid rgba(var(--border-color-rgb), 0.6);
		    border-radius: var(--radius-md);
		    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18),
		                0 2px 8px rgba(0, 0, 0, 0.12);
		    font-size: 0.85rem;
		    font-family: var(--font-sans);
		    pointer-events: none;
		    z-index: 1000;
		    opacity: 0;
		    transform: translateY(4px) scale(0.96);
		    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
		                transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		    max-width: 320px;
		    min-width: 140px;
		    overflow: hidden;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip.visible{
		    opacity: 1;
		    transform: translateY(0) scale(1);
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-glass{
		    padding: 12px 14px;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-time{
		    font-size: 0.75rem;
		    font-weight: 500;
		    color: var(--text-secondary);
		    margin-bottom: 10px;
		    padding-bottom: 8px;
		    border-bottom: 1px solid rgba(var(--border-color-rgb), 0.35);
		    letter-spacing: 0.02em;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-content{
		    display: flex;
		    flex-direction: column;
		    gap: 6px;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-row{
		    display: flex;
		    align-items: center;
		    gap: 8px;
		    padding: 2px 0;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-indicator{
		    width: 10px;
		    height: 10px;
		    border-radius: 3px;
		    flex-shrink: 0;
		    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-label{
		    font-size: 0.8rem;
		    color: var(--text-secondary);
		    flex: 1;
		    min-width: 60px;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-value{
		    font-size: 0.85rem;
		    font-weight: 600;
		    color: var(--text-primary);
		    font-family: var(--font-mono);
		    text-align: right;
		    display: flex;
		    align-items: baseline;
		    gap: 4px;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-value strong{
		    font-size: 0.9rem;
		    font-weight: 700;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-original{
		    font-size: 0.7rem;
		    color: var(--text-tertiary);
		    font-weight: 400;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-hint{
		    font-size: 0.7rem;
		    color: var(--text-tertiary);
		    margin-bottom: 6px;
		    padding: 4px 8px;
		    background: rgba(var(--border-color-rgb), 0.25);
		    border-radius: var(--radius-sm);
		    text-align: center;
		}[data-dsh-probe-view] .probe-theme .chart-tooltip-value{
		    font-weight: 600;
		    color: var(--text-primary);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] .chart-tooltip{
		    background: rgba(30, 21, 48, 0.95);
		    border-color: rgba(45, 32, 64, 0.7);
		    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35),
		                0 2px 8px rgba(0, 0, 0, 0.25);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] .chart-tooltip-time{
		    border-bottom-color: rgba(45, 32, 64, 0.5);
		}[data-dsh-probe-view] .probe-theme[data-theme="dark"] .chart-tooltip-indicator{
		    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
		}[data-dsh-probe-view] .probe-theme .latency-summary{
		    display: grid;
		    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		    gap: 12px;
		    margin-bottom: 20px;
		}[data-dsh-probe-view] .probe-theme .latency-stat{
		    padding: 16px;
		    background: var(--bg-tertiary);
		    border-radius: var(--radius-md);
		    text-align: center;
		    transition: transform 0.2s ease, box-shadow 0.2s ease;
		    opacity: 0;
		    animation: probe_staggerFadeIn 0.35s ease forwards;
		}[data-dsh-probe-view] .probe-theme .latency-stat:nth-child(1){ animation-delay: 0.03s; }[data-dsh-probe-view] .probe-theme .latency-stat:nth-child(2){ animation-delay: 0.08s; }[data-dsh-probe-view] .probe-theme .latency-stat:nth-child(3){ animation-delay: 0.13s; }[data-dsh-probe-view] .probe-theme .latency-stat:hover{
		    transform: translateY(-3px);
		    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
		}[data-dsh-probe-view] .probe-theme .latency-stat-value{
		    font-size: 1.5rem;
		    font-weight: 700;
		    font-family: var(--font-mono);
		    margin-bottom: 4px;
		    transition: color 0.2s ease;
		}[data-dsh-probe-view] .probe-theme .latency-stat-value.level-normal{ color: var(--success); }[data-dsh-probe-view] .probe-theme .latency-stat-value.level-warning{ color: var(--warning); }[data-dsh-probe-view] .probe-theme .latency-stat-value.level-danger{ color: var(--danger); }[data-dsh-probe-view] .probe-theme .latency-stat-label{
		    font-size: 0.75rem;
		    color: var(--text-tertiary);
		    text-transform: uppercase;
		    letter-spacing: 0.05em;
		}[data-dsh-probe-view] .probe-theme .latency-tasks{
		    margin-bottom: 20px;
		    display: grid;
		    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		    gap: 10px;
		}[data-dsh-probe-view] .probe-theme .latency-tasks-title{
		    grid-column: 1 / -1;
		    font-size: 0.9rem;
		    font-weight: 600;
		    color: var(--text-primary);
		    margin-bottom: 4px;
		    display: flex;
		    align-items: center;
		    gap: 8px;
		    position: relative;
		    padding-left: 12px;
		}[data-dsh-probe-view] .probe-theme .latency-empty{
		    grid-column: 1 / -1;
		    text-align: center;
		    padding: 40px 20px;
		    color: var(--text-tertiary);
		    font-size: 0.9rem;
		}[data-dsh-probe-view] .probe-theme .latency-tasks-title::before{
		    content: '';
		    position: absolute;
		    left: 0;
		    top: 50%;
		    transform: translateY(-50%);
		    width: 3px;
		    height: 16px;
		    background: linear-gradient(180deg, var(--accent), var(--accent-hover));
		    border-radius: 2px;
		    box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
		}[data-dsh-probe-view] .probe-theme .latency-tasks-title::after{
		    content: '';
		    width: 6px;
		    height: 6px;
		    background: var(--accent);
		    border-radius: 50%;
		    opacity: 0.6;
		    animation: probe_pulse-dot 2s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .latency-task-card{
		    display: grid;
		    grid-template-columns: 1fr auto;
		    align-items: center;
		    padding: 10px 12px;
		    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
		    border-radius: var(--radius-md);
		    border-left: 4px solid var(--accent);
		    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		    position: relative;
		    gap: 6px;
		    overflow: hidden;
		    opacity: 0;
		    animation: probe_cardSlideIn 0.35s ease forwards;
		}[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(1){ animation-delay: 0.02s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(2){ animation-delay: 0.04s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(3){ animation-delay: 0.06s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(4){ animation-delay: 0.08s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(5){ animation-delay: 0.10s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(6){ animation-delay: 0.12s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(7){ animation-delay: 0.14s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(8){ animation-delay: 0.16s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(9){ animation-delay: 0.18s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(10){ animation-delay: 0.20s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(11){ animation-delay: 0.22s; }[data-dsh-probe-view] .probe-theme .latency-task-card:nth-child(12){ animation-delay: 0.24s; }[data-dsh-probe-view] .probe-theme .latency-task-card::before{
		    content: '';
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    background: linear-gradient(90deg, transparent 0%, rgba(var(--accent-rgb), 0.03) 50%, transparent 100%);
		    opacity: 0;
		    transition: opacity 0.3s ease;
		}[data-dsh-probe-view] .probe-theme .latency-task-card:hover{
		    transform: translateY(-2px);
		    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(var(--accent-rgb), 0.1);
		    border-left-width: 5px;
		}[data-dsh-probe-view] .probe-theme .latency-task-card:hover::before{
		    opacity: 1;
		}[data-dsh-probe-view] .probe-theme .latency-task-card:active{
		    transform: translateY(0) scale(0.98);
		}[data-dsh-probe-view] .probe-theme .latency-task-name{
		    font-weight: 600;
		    color: var(--text-primary);
		    font-size: 0.82rem;
		    display: flex;
		    align-items: center;
		    gap: 6px;
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    min-width: 0;
		}[data-dsh-probe-view] .probe-theme .latency-task-name::before{
		    content: '';
		    width: 5px;
		    height: 5px;
		    border-radius: 50%;
		    background: var(--accent);
		    box-shadow: 0 0 4px rgba(var(--accent-rgb), 0.5);
		    animation: probe_blink-dot 1.5s ease-in-out infinite;
		    flex-shrink: 0;
		    margin-right: 6px;
		    margin-left: 2px;
		}[data-dsh-probe-view] .probe-theme .latency-task-info{
		    display: flex;
		    align-items: center;
		    gap: 6px;
		    white-space: nowrap;
		    justify-content: flex-end;
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme .latency-task-ping{
		    font-family: var(--font-mono);
		    font-weight: 700;
		    font-size: 0.78rem;
		    padding: 2px 6px;
		    border-radius: 4px;
		    transition: all 0.2s ease;
		    position: relative;
		}[data-dsh-probe-view] .probe-theme .latency-task-ping.level-excellent{
		    color: var(--success);
		    background: rgba(76, 175, 125, 0.1);
		}[data-dsh-probe-view] .probe-theme .latency-task-ping.level-normal{
		    color: var(--info);
		    background: rgba(92, 156, 237, 0.1);
		}[data-dsh-probe-view] .probe-theme .latency-task-ping.level-warning{
		    color: var(--warning);
		    background: rgba(245, 166, 35, 0.1);
		}[data-dsh-probe-view] .probe-theme .latency-task-ping.level-danger{
		    color: var(--danger);
		    background: rgba(231, 76, 94, 0.1);
		}[data-dsh-probe-view] .probe-theme .latency-task-loss{
		    font-size: 0.68rem;
		    color: var(--text-tertiary);
		    padding: 2px 5px;
		    background: var(--bg-primary);
		    border-radius: 4px;
		    font-weight: 500;
		    white-space: nowrap;
		}[data-dsh-probe-view] .probe-theme .latency-chart-container{
		    background: var(--bg-tertiary);
		    border-radius: var(--radius-md);
		    padding: 16px;
		    opacity: 0;
		    animation: probe_chartReveal 0.4s ease 0.25s forwards;
		}[data-dsh-probe-view] .probe-theme .latency-chart-header{
		    display: flex;
		    align-items: center;
		    justify-content: space-between;
		    margin-bottom: 12px;
		    flex-wrap: wrap;
		    gap: 8px;
		}[data-dsh-probe-view] .probe-theme .latency-chart-header h3{
		    font-size: 0.9rem;
		    font-weight: 600;
		    color: var(--text-primary);
		    margin: 0;
		    display: flex;
		    align-items: center;
		    gap: 8px;
		    position: relative;
		    padding-left: 12px;
		}[data-dsh-probe-view] .probe-theme .latency-chart-header h3::before{
		    content: '';
		    position: absolute;
		    left: 0;
		    top: 50%;
		    transform: translateY(-50%);
		    width: 3px;
		    height: 16px;
		    background: linear-gradient(180deg, var(--accent), var(--accent-hover));
		    border-radius: 2px;
		    box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
		}[data-dsh-probe-view] .probe-theme .latency-chart-header h3::after{
		    content: '';
		    width: 6px;
		    height: 6px;
		    background: var(--accent);
		    border-radius: 50%;
		    opacity: 0.6;
		    animation: probe_pulse-dot 2s ease-in-out infinite;
		}[data-dsh-probe-view] .probe-theme .latency-legend{
		    display: flex;
		    gap: 10px;
		    flex-wrap: wrap;
		    max-width: 100%;
		}[data-dsh-probe-view] .probe-theme .latency-chart-controls{
		    display: flex;
		    align-items: center;
		    gap: 12px;
		}[data-dsh-probe-view] .probe-theme .chart-smooth-btn{
		    padding: 6px 10px;
		    border: none;
		    background: rgba(var(--accent-rgb), 0.1);
		    color: var(--text-secondary);
		    border-radius: 6px;
		    cursor: pointer;
		    transition: all 0.2s ease;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    min-width: 32px;
		    height: 32px;
		}[data-dsh-probe-view] .probe-theme .chart-smooth-btn:hover{
		    background: rgba(var(--accent-rgb), 0.2);
		    color: var(--text-primary);
		}[data-dsh-probe-view] .probe-theme .chart-smooth-btn.active{
		    background: rgba(var(--accent-rgb), 0.2);
		    color: var(--accent);
		    box-shadow: 0 0 0 1px rgba(var(--accent-rgb), 0.3);
		}[data-dsh-probe-view] .probe-theme .chart-smooth-btn svg{
		    transition: transform 0.2s ease;
		}[data-dsh-probe-view] .probe-theme .chart-smooth-btn:hover svg{
		    transform: scale(1.1);
		}[data-dsh-probe-view] .probe-theme .latency-legend-item{
		    display: flex;
		    align-items: center;
		    gap: 6px;
		    font-size: 0.75rem;
		    color: var(--text-secondary);
		    padding: 2px 6px;
		    background: var(--bg-secondary);
		    border-radius: var(--radius-sm);
		    transition: background 0.2s ease;
		}[data-dsh-probe-view] .probe-theme .latency-legend-item:hover{
		    background: var(--bg-tertiary);
		}[data-dsh-probe-view] .probe-theme .latency-legend-color{
		    width: 14px;
		    height: 3px;
		    border-radius: 2px;
		    flex-shrink: 0;
		}[data-dsh-probe-view] .probe-theme #latencyChart{
		    width: 100%;
		    height: 250px;
		    border-radius: var(--radius-sm);
		}@keyframes probe_pulse-dot{
		    0%, 100% {
		        opacity: 0.4;
		        transform: scale(1);
		    }
		    50% {
		        opacity: 0.8;
		        transform: scale(1.2);
		    }
		}@keyframes probe_chartSpin{
		    to { transform: translate(-50%, -50%) rotate(360deg); }
		    from { transform: translate(-50%, -50%) rotate(0deg); }
		}@keyframes probe_chartLoadingFadeIn{
		    from { opacity: 0; }
		    to { opacity: 1; }
		}@keyframes probe_blink-dot{
		    0%, 100% {
		        opacity: 1;
		    }
		    50% {
		        opacity: 0.4;
		    }
		}[data-dsh-probe-view] .probe-theme.has-custom-background .modal{
		    background: rgba(var(--bg-card-rgb), 0.92);
		    border-color: rgba(var(--border-color-rgb), 0.5);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .modal-header{
		    background: rgba(var(--bg-card-rgb), 0.95);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .modal-tabs{
		    background: rgba(var(--bg-card-rgb), 0.85);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .modal-info-item{
		    background: rgba(var(--bg-card-rgb), 0.6);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .metric-bar{
		    background: rgba(var(--border-color-rgb), 0.3);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .modal-close{
		    background: rgba(var(--bg-card-rgb), 0.6);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .modal-close:hover{
		    background: rgba(var(--danger-light), 0.8);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .modal-tab::before{
		    background: rgba(var(--bg-card-rgb), 0.7);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .latency-task-card{
		    background: rgba(var(--bg-card-rgb), 0.7);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .latency-stat{
		    background: rgba(var(--bg-card-rgb), 0.65);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .latency-chart-container{
		    background: rgba(var(--bg-card-rgb), 0.65);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .chart-section canvas{
		    background: rgba(var(--bg-card-rgb), 0.5);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .latency-task-loss{
		    background: rgba(var(--bg-card-rgb), 0.5);
		}[data-dsh-probe-view] .probe-theme.has-custom-background .latency-legend-item{
		    background: rgba(var(--bg-card-rgb), 0.55);
		}@media (hover: none) and (pointer: coarse){[data-dsh-probe-view] .probe-theme .modal-body{
		        touch-action: pan-y;
		    }
		}@media (prefers-reduced-motion: reduce){[data-dsh-probe-view] .probe-theme .chart-section.loading::before,[data-dsh-probe-view] .probe-theme .latency-chart-container.loading::before{
		        animation: none;
		        border-top-color: var(--accent);
		        border-right-color: var(--accent);
		    }[data-dsh-probe-view] .probe-theme .chart-section.loading::after,[data-dsh-probe-view] .probe-theme .latency-chart-container.loading::after{
		        animation: none;
		    }
		}@media (max-width: 768px){[data-dsh-probe-view] .probe-theme .modal-overlay{
		        padding: 0;
		        align-items: flex-end;
		        padding-bottom: env(safe-area-inset-bottom);
		    }[data-dsh-probe-view] .probe-theme .modal{
		        border-radius: 20px 20px 0 0;
		        max-height: 92vh;
		        max-width: 100%;
		        width: 100%;
		    }[data-dsh-probe-view] .probe-theme .modal-scroll-indicator{
		        height: 3px;
		    }[data-dsh-probe-view] .probe-theme .modal-drag-handle{
		        display: block;
		        width: 36px;
		        height: 5px;
		        background: var(--border-color);
		        border-radius: 3px;
		        margin: 10px auto 0;
		    }[data-dsh-probe-view] .probe-theme .modal-header{
		        padding: 14px 16px;
		        gap: 12px;
		    }[data-dsh-probe-view] .probe-theme .modal-header h2{
		        font-size: 1.1rem;
		        line-height: 1.3;
		    }[data-dsh-probe-view] .probe-theme .modal-close{
		        width: 44px;
		        height: 44px;
		        font-size: 1.4rem;
		        border-radius: var(--radius-md);
		    }[data-dsh-probe-view] .probe-theme .modal-tabs{
		        padding: 10px 12px 0;
		        gap: 4px;
		    }[data-dsh-probe-view] .probe-theme .modal-tab{
		        padding: 12px 16px;
		        font-size: 0.9rem;
		        min-height: 48px;
		        border-radius: 12px 12px 0 0;
		    }[data-dsh-probe-view] .probe-theme .modal-tab::after{
		        height: 3px;
		        border-radius: 3px 3px 0 0;
		    }[data-dsh-probe-view] .probe-theme .modal-body{
		        padding: 16px;
		        padding-bottom: calc(16px + env(safe-area-inset-bottom));
		    }[data-dsh-probe-view] .probe-theme .modal-info{
		        grid-template-columns: 1fr 1fr;
		        gap: 10px;
		    }[data-dsh-probe-view] .probe-theme .modal-info-item{
		        padding: 12px;
		        border-radius: var(--radius-md);
		    }[data-dsh-probe-view] .probe-theme .modal-info-label{
		        font-size: 0.72rem;
		        margin-bottom: 6px;
		    }[data-dsh-probe-view] .probe-theme .modal-info-value{
		        font-size: 0.88rem;
		        line-height: 1.4;
		    }[data-dsh-probe-view] .probe-theme .modal-charts{
		        gap: 16px;
		    }[data-dsh-probe-view] .probe-theme .modal-charts .chart-section{
		        flex: 1 1 100%;
		    }[data-dsh-probe-view] .probe-theme .chart-header{
		        flex-wrap: wrap;
		    }[data-dsh-probe-view] .probe-theme .chart-header h3,[data-dsh-probe-view] .probe-theme .chart-section > h3{
		        font-size: 0.88rem;
		        margin-bottom: 0;
		    }[data-dsh-probe-view] .probe-theme .chart-header h3::before,[data-dsh-probe-view] .probe-theme .chart-section > h3::before,[data-dsh-probe-view] .probe-theme .latency-chart-header h3::before{
		        height: 14px;
		    }[data-dsh-probe-view] .probe-theme .chart-header h3::after,[data-dsh-probe-view] .probe-theme .chart-section > h3::after,[data-dsh-probe-view] .probe-theme .latency-chart-header h3::after{
		        width: 5px;
		        height: 5px;
		    }[data-dsh-probe-view] .probe-theme .chart-legend{
		        font-size: 0.72rem;
		        gap: 12px;
		    }[data-dsh-probe-view] .probe-theme .chart-section canvas{
		        width: 100% !important;
		        height: 140px !important;
		        border-radius: var(--radius-md);
		    }[data-dsh-probe-view] .probe-theme .latency-summary{
		        grid-template-columns: repeat(3, 1fr);
		        gap: 10px;
		        margin-bottom: 16px;
		    }[data-dsh-probe-view] .probe-theme .latency-stat{
		        padding: 12px 8px;
		        border-radius: var(--radius-md);
		    }[data-dsh-probe-view] .probe-theme .latency-stat-value{
		        font-size: 1.2rem;
		        margin-bottom: 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-stat-label{
		        font-size: 0.7rem;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks{
		        margin-bottom: 16px;
		        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks-title{
		        font-size: 0.88rem;
		        margin-bottom: 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks-title::before{
		        height: 14px;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks-title::after{
		        width: 5px;
		        height: 5px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-card{
		        padding: 8px 10px;
		        border-radius: var(--radius-md);
		        border-left-width: 4px;
		        gap: 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-name{
		        font-size: 0.8rem;
		        gap: 5px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-name::before{
		        width: 5px;
		        height: 5px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-info{
		        gap: 5px;
		        white-space: nowrap;
		    }[data-dsh-probe-view] .probe-theme .latency-task-ping{
		        font-size: 0.75rem;
		        padding: 2px 5px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-loss{
		        font-size: 0.65rem;
		        padding: 1px 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-container{
		        padding: 14px;
		        border-radius: var(--radius-md);
		    }[data-dsh-probe-view] .probe-theme .latency-chart-header{
		        flex-direction: column;
		        align-items: flex-start;
		        gap: 10px;
		        margin-bottom: 12px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-header h3{
		        font-size: 0.88rem;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-header h3::before{
		        height: 14px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-header h3::after{
		        width: 5px;
		        height: 5px;
		    }[data-dsh-probe-view] .probe-theme .latency-legend{
		        display: flex;
		        flex-wrap: wrap;
		        gap: 6px;
		        width: 100%;
		    }[data-dsh-probe-view] .probe-theme .latency-legend-item{
		        font-size: 0.7rem;
		        padding: 4px 8px;
		        border-radius: var(--radius-sm);
		    }[data-dsh-probe-view] .probe-theme .latency-legend-color{
		        width: 12px;
		        height: 3px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-container canvas{
		        width: 100% !important;
		        height: 200px !important;
		    }[data-dsh-probe-view] .probe-theme .modal-drag-handle{
		        display: block;
		    }
		}@media (max-width: 480px){[data-dsh-probe-view] .probe-theme .modal-overlay{
		        padding: 0;
		    }[data-dsh-probe-view] .probe-theme .modal{
		        border-radius: 16px 16px 0 0;
		        max-height: 95vh;
		    }[data-dsh-probe-view] .probe-theme .modal-header{
		        padding: 12px 14px;
		    }[data-dsh-probe-view] .probe-theme .modal-header h2{
		        font-size: 1rem;
		    }[data-dsh-probe-view] .probe-theme .modal-close{
		        width: 40px;
		        height: 40px;
		        font-size: 1.2rem;
		    }[data-dsh-probe-view] .probe-theme .modal-tabs{
		        padding: 8px 10px 0;
		        gap: 2px;
		    }[data-dsh-probe-view] .probe-theme .modal-tab{
		        padding: 10px 12px;
		        font-size: 0.85rem;
		        min-height: 44px;
		        border-radius: 10px 10px 0 0;
		    }[data-dsh-probe-view] .probe-theme .modal-tab::after{
		        height: 2px;
		    }[data-dsh-probe-view] .probe-theme .modal-body{
		        padding: 14px;
		        padding-bottom: calc(14px + env(safe-area-inset-bottom));
		    }[data-dsh-probe-view] .probe-theme .modal-info{
		        grid-template-columns: 1fr;
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .modal-info-item{
		        padding: 10px;
		        display: flex;
		        justify-content: space-between;
		        align-items: center;
		        flex-wrap: wrap;
		        gap: 4px;
		    }[data-dsh-probe-view] .probe-theme .modal-info-label{
		        font-size: 0.7rem;
		        margin-bottom: 0;
		    }[data-dsh-probe-view] .probe-theme .modal-info-value{
		        font-size: 0.82rem;
		        text-align: right;
		    }[data-dsh-probe-view] .probe-theme .chart-header h3,[data-dsh-probe-view] .probe-theme .chart-section > h3,[data-dsh-probe-view] .probe-theme .latency-chart-header h3{
		        font-size: 0.82rem;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-header h3::before{
		        height: 12px;
		        width: 2px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-header h3::after{
		        width: 4px;
		        height: 4px;
		    }[data-dsh-probe-view] .probe-theme .chart-header h3::before,[data-dsh-probe-view] .probe-theme .chart-section > h3::before,[data-dsh-probe-view] .probe-theme .latency-chart-header h3::before{
		        height: 12px;
		        width: 2px;
		    }[data-dsh-probe-view] .probe-theme .chart-header h3::after,[data-dsh-probe-view] .probe-theme .chart-section > h3::after,[data-dsh-probe-view] .probe-theme .latency-chart-header h3::after{
		        width: 4px;
		        height: 4px;
		    }[data-dsh-probe-view] .probe-theme .chart-legend{
		        font-size: 0.68rem;
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .chart-section canvas{
		        height: 120px !important;
		    }[data-dsh-probe-view] .probe-theme .latency-summary{
		        grid-template-columns: repeat(3, 1fr);
		        gap: 8px;
		        margin-bottom: 14px;
		    }[data-dsh-probe-view] .probe-theme .latency-stat{
		        padding: 10px 6px;
		    }[data-dsh-probe-view] .probe-theme .latency-stat-value{
		        font-size: 1.1rem;
		    }[data-dsh-probe-view] .probe-theme .latency-stat-label{
		        font-size: 0.65rem;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks{
		        margin-bottom: 14px;
		        grid-template-columns: repeat(2, 1fr);
		        gap: 8px;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks-title{
		        font-size: 0.82rem;
		        margin-bottom: 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks-title::before{
		        height: 12px;
		        width: 2px;
		    }[data-dsh-probe-view] .probe-theme .latency-tasks-title::after{
		        width: 4px;
		        height: 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-card{
		        padding: 8px 10px;
		        grid-template-columns: 1fr;
		        gap: 6px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-name{
		        font-size: 0.75rem;
		        white-space: normal;
		        overflow-wrap: break-word;
		        overflow: visible;
		        text-overflow: unset;
		        gap: 4px;
		        padding-left: 10px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-name::before{
		        width: 4px;
		        height: 4px;
		        left: 2px;
		        position: absolute;
		    }[data-dsh-probe-view] .probe-theme .latency-task-info{
		        justify-content: space-between;
		        gap: 4px;
		        padding-left: 10px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-ping{
		        font-size: 0.72rem;
		        padding: 1px 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-task-loss{
		        font-size: 0.62rem;
		        padding: 1px 3px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-container{
		        padding: 12px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-header h3{
		        font-size: 0.82rem;
		    }[data-dsh-probe-view] .probe-theme .latency-legend{
		        gap: 4px;
		    }[data-dsh-probe-view] .probe-theme .latency-legend-item{
		        font-size: 0.65rem;
		        padding: 3px 6px;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-container canvas{
		        height: 180px !important;
		    }[data-dsh-probe-view] .probe-theme .chart-section canvas{
		        height: 120px !important;
		    }
		}@media (orientation: landscape) and (max-height: 500px){[data-dsh-probe-view] .probe-theme .modal{
		        max-height: 98vh;
		    }[data-dsh-probe-view] .probe-theme .modal-overlay{
		        padding: 8px;
		    }
		}@media (max-width: 768px) and (orientation: landscape){[data-dsh-probe-view] .probe-theme .modal{
		        max-height: 95vh;
		        border-radius: var(--radius-md);
		        margin: auto;
		    }[data-dsh-probe-view] .probe-theme .modal-overlay{
		        padding: 10px;
		        align-items: center;
		    }[data-dsh-probe-view] .probe-theme .modal-body{
		        max-height: calc(95vh - 120px);
		        overflow-y: auto;
		    }[data-dsh-probe-view] .probe-theme .chart-section canvas{
		        height: 100px !important;
		    }[data-dsh-probe-view] .probe-theme .latency-chart-container canvas{
		        height: 150px !important;
		    }
		}@supports (padding: max(0px)){[data-dsh-probe-view] .probe-theme .modal-body{
		        padding-bottom: max(16px, env(safe-area-inset-bottom));
		    }[data-dsh-probe-view] .probe-theme .modal-header{
		        padding-top: max(14px, env(safe-area-inset-top));
		    }@media (max-width: 480px){[data-dsh-probe-view] .probe-theme .modal-body{
		            padding-bottom: max(14px, env(safe-area-inset-bottom));
		        }
		    }
		}@media (hover: hover) and (pointer: fine){[data-dsh-probe-view] .probe-theme .modal-info-item:hover{
		        transform: translateY(-2px);
		        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		    }[data-dsh-probe-view] .probe-theme .latency-stat:hover{
		        transform: translateY(-3px);
		        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
		    }[data-dsh-probe-view] .probe-theme .latency-task-card:hover{
		        transform: translateY(-2px);
		        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(var(--accent-rgb), 0.1);
		    }
		}@media (hover: none){[data-dsh-probe-view] .probe-theme .modal-info-item,[data-dsh-probe-view] .probe-theme .latency-stat,[data-dsh-probe-view] .probe-theme .latency-task-card,[data-dsh-probe-view] .probe-theme .modal-close:hover{
		        transition: none;
		        transform: none;
		    }[data-dsh-probe-view] .probe-theme .modal-info-item:active,[data-dsh-probe-view] .probe-theme .latency-stat:active,[data-dsh-probe-view] .probe-theme .latency-task-card:active{
		        background: var(--bg-secondary);
		        transform: scale(0.98);
		    }[data-dsh-probe-view] .probe-theme .latency-task-card:active::before{
		        opacity: 1;
		    }[data-dsh-probe-view] .probe-theme .modal-close:active{
		        background: var(--danger-light);
		        color: var(--danger);
		        transform: scale(0.95);
		    }[data-dsh-probe-view] .probe-theme .modal-tab:active{
		        background: var(--bg-secondary);
		        transform: scale(0.98);
		    }[data-dsh-probe-view] .probe-theme .modal-tab:active::before{
		        opacity: 1;
		    }[data-dsh-probe-view] .probe-theme .chart-tooltip{
		        max-width: 200px;
		        font-size: 0.75rem;
		        padding: 8px 10px;
		    }
		}[data-dsh-probe-view] .probe-theme .footer{
		    text-align: center;
		    padding: 20px 24px;
		    font-size: 0.82rem;
		    color: var(--text-tertiary);
		    background: transparent;
		    border-top: 1px solid var(--border-light);
		    display: flex;
		    justify-content: center;
		    gap: 8px;
		    flex-wrap: wrap;
		}[data-dsh-probe-view] .probe-theme.has-custom-background .footer{
		    background: transparent;
		    backdrop-filter: none;
		    -webkit-backdrop-filter: none;
		    border-top-color: rgba(var(--border-color-rgb), 0.3);
		}@media (max-width: 768px){[data-dsh-probe-view] .probe-theme .footer{
		        padding: 16px 12px;
		        font-size: 0.72rem;
		        flex-direction: column;
		        gap: 4px;
		        text-align: center;
		    }
		}
		`;
		
		// src/client/theme/QWQ.webp
		var QWQ_default = "data:image/webp;base64,UklGRkjyAABXRUJQVlA4WAoAAAAQAAAAuAIAhQMAQUxQSJYLAAABDzD/ERECc7NtsW3b+RGScU3X9bghnAgODsVh1AbXYZxUyMS45aZxzZUwX2OOOSd8/7/m3q6kiP5PgPw/mT9YNeBtGsBlEW6dORP3wZiC55ctDS8mUxpezZY0vO7s6HjT2zHeCXasd6IdePcyo7yVzKhmtbeyGf0tmDHfc1as97wVeD8YUTZEI+qGy4i2IRnRN2Qj5gYYsXY4G7DTm1C2BBPqlmhC23KZMLYkE+aWbMLaAhOw1xlQN3kD2qZgwNgUDZibLgOwOekru7K+tgv6ullzm9NWsN1r6/uCtrkvasP+S1k1qx9IytaBrKvgpK52xKkaR7yqZVXB0aCpn4ma5plLE84mReVQVtQOQdE45fSsU14PTgc15VhUU49datqxZFZW04/BLnf3gz3+7ke6cS7clGxPvGkGXTcddPNcupkG5RsYhIcKOHuciHSTvIgMwNsTRGSZFEUEChbBJVIBBJOaTUmkmzVsyiITQDRpmQWbIMWs+hAMcu0hsoGiW+XHpxXmw2VQXJ9Eobhg1U9m3f//C/G710UmnwKcTQ1AsAi3zpyE+8uc55ll8cGbFc26zMokUwGY/pXMEf0VmScKgytwrBspVJEDd5Xqoig30aD6pFElimZWv7mkU2WKYdZ60szBbZJKBYbyTKxpZg0ljmCahWfFmPLkMqc98eb0uyzmjLsoUo1Zd94e3CYxp9wFEWm2tJss9vSboECOj4ckBvUHZ1EDstx3W+Sfghj1Klf+CMY3TfoIJtX1ccWPYFGFj8t/AgXUjql+BsLcqDJV/wiSWRfV+AiiWYFqfgTeLEe1PgKxKnOBOX0EjeqiWlSRqYA6MDWzOpdnmlyOCdxCXLkyUzdrcCWmxXURFXBHokYWiAaZJ5pkjgjkwlvJMlEnS0SD7CJaZJGngDzwVDbP09kcz2QT3kWWeQrIL57GFnk6W+CZbI5nsQltAXnmqWwXT2eLPIPN80w2xwPyLLSFLfE0tounswWeweZ4FlkW2gLyi6eyBZ7G5ngGWRLeSRaJFpnjKeDOwlvJIlEnc0SDKwnx5ApMi0uIC6gvpsrlmRpVFuZBFagmUxbqxRSoCoiTUFemi6sxOa7OJNyD5i+QjXJIRsmKVk1P1lmy0DezKkviK2bJIrkUDJKooJtVSYICsWtyeA2dw2koZsmkEJXVLGkEWYkUs2T93Krb9nH1E/hMxneD+d1gncgfVZ5A0oXdcVjlrcqiruyKD1lV3eUfoKrtcvr6Gaeh4FjX0hFuxi4vDYDXsHDdzF1BqpICpJu1ryhpQL7BPgEQFHQAx5aOAcCJSDFnIsCLSN0W1SzICCLSzEGWfgwqCpLUKCL9kNdwSXkYB4qOikuEwWmIIr8nIvOQ8LeH3xGRdaACWUUQ+Y1zScsPIgJr+sPPRMqhrMJTQFE1yHE4JSLSvqKiYzwZ+64br2eeEC1yu44sFfMJjkwV467Y0+Ee2pmlJDwMs+aBJAIl1wOOFB0NSUTqmaoFTmTZFKTjTAMQ+CqOJ+mmxc+hsFyfg7Akg7KaRdAA5A9iElSzipJBIEr6MYgsHY1hmtV1VIYGJAWFoQJQIAwCwCtYJEHBPJVFFoCooJ8rAHApaKeSNC3l1CVDi6xD8S5qGIeConLIK5J5xt0FFeNIFk3zyPXEq8DRqKmccU+chnYkiaZx5BKRrmYdSapwNGuqZ6CpHXIiTcs45EWqlnkoKsLhpKecynrqKTwR/n7MqxnHwk1WMI/Fm6RgHbtuLgU4nrTUc1mKjnYOWjqBk6FinMkLgJeuYh6aAIKSdSYNAFGGChzqesqpBuDSUU/Vm6mhnSoAko5+KIuecWwB+SHSzWNTzTqEB+gAzcVWeHLxXPWYGwDcBADH1czqDHmqGMf8g78RYyby8ANAJptEiWwdCy9cZDi3kLvvACJXYWkAgkkVgOeqBHgm3O1cBNJNJuvnfrpp+PllVfNk4xyAa7iRhX2yrGRSHG5edItjuuHpQBmmE34W4S8cfimoJLDKaWgcJVtVNXSK3JKCQZG6Vde8FEyKuMxCVLAofkKgaUhU4CkA8h1IPcsCgEDlSCoe00MhyUI6bsCUWHAfRKSSRJL65CIKJP1JFpFGIqTzCXgyC547kc6R5Fcpygue6Ncp6guBJkuk6K8NDvwFx9CAQDFfiCLTkqXCU8Cq8solslgcQ9UhjE1FpuhvgDQZ9Y+IFENBgKeYT3zFJYUjCueTJLJoLpJ1F0UmTSLBvRMZJmUR6ZdUjsxR7pKINJMiFTjqXXiI0uzxXI6iqfBMzrZAEyj6ndx1m7o3KJNFivFKcwalG5Fh0x/wXBTzlZ+ZJTyJ6DJvkmSK9cYyC6x8xaxqCV5rZnWzhlmTJfMtlsRQ7tIdWC+6YlaliXSNJhDlm07j6QaNEIEr802WSOUeFounqK+BVai8iBSWzBVEpLIkrsh0cV0i0lgiVxKRzuK5ICKDRci8yCTJbNEsuA6jiL9Rmgb33cB/NwjfJlVD/G5wfVyJo3wL5Y8LHPJN5L62pcF/m0wN4WsbGqJZF0f/JBJHM6tqyBzNrK4BHMssqHQM1aymwzN0HYFhmrV0RAbovAiKWVVJImhK8hfWlYBgaHFm+XPTrKUliHizwiFojSK/Z9Ml8qNZf3qmqEki82uqarLIcCZBZPjPyp1qeryM8FkFGdGmeKp/HpfMy6Zk2DIqGwajUM36B7PwgaXvIuPj6t9U13ev+MX9vYJAUqyKGvyR9ixoEA5f+RKJU3CRSDMqm5U0pDP1hW7UpSFzRBmfA86UJ8GwqcDJHx6QJ14JnE2+wTMsDZPBqfg7IBxYmkAh9sxn+KyyQePj6jdJyjdfUxaPXWquA/VJVZLMygfKxyXKEM2C37e0ZbOwb35c4+Pq6pxZWf58U1MHwO2pFnizwp5iXVMV94hdC0CSbtYwaN5Mg8YNVF+bOoBcdKUT1aIGAF1X3lQf/ksXNpUH7ZvErmWA2zTNGgb4Td2qX2gGhD2/V61azYC4Cd9g19cyLUhfy3jnP1VcFP9sR38jNxWRIekIe9oblyH1jVBVRAavI+0pb4gOuC3yWtIS9qyXohQdcc94yWtJe/pLIqIDe6oJbkt5Z+kIW2Q+/OtD1hP3dAC5PZs60h4BEG6SnrypIcvNJSJDB9yex/qsK/GHoog0JfFQEJGi5CKQqSPtK9pwyGtyX448OE3+61nagllx3wQgmq59w6yuLe1rZlWzira8T9YTmDMALyJFCw7Uu2qPjCwi0iwKD12NO3A/zJpmLTX+GKwqesKpalYzq5s19MRT06xlFvReh4pZ1az2gaRD3axh1jRrKcqHYFUxq35cTRPOdLOGWfPjWqrcEVhVPq5qVjOr6/Jf0TBrflzLLHxbhRNLVz4xdcGZ5Q8MZdGs60BXlg4MZdksHJjanFl+3/pUwj5o919OMauqu2bY1PTh2tTVAXnTMACbpgVuz7LA74GFYUsxq5oQtzSzugnXlmHWNCFugYnXjmIDwoZqBDY0K8J73Yr03jBrWnG9t8yClemtalYza5i1zMhvwapqVjdrmLXMglXVrGZWN2uYNQ1JbyyzYOj1WjWrWRJf65aE14ZZ0xL/2rLEmSVWZbOuLwKGJrPyx5XeWIZcZoU3piH+jWFIMMu/0c0ahjir/lmMyvJV9I+rmZE+rvhWNSOY5d8qH4+8b0XesIxIG4YRsrGb4GTnNEF2VliYtnQLkmydFsQ9OOyFImwph7KISD/nttQ9UUTqQ3yQcky2ti2XPDYA/kZO5T19R5L7gSz3S8PYkGXjPJRY3I6uob8nW5uG9pbbUw5de+o7UTYvBfKO3zXPxE3jtSy725mwSV7z24qK9kqU/fOI21VfyHL2R+lvZRGpyLJ9PclCON5I8vjr+8qdE8Z+869PrpujALJwNgA/vyqP/L6wFiCJyJNIQDwRReQP102wZCCIiMwbZ8nT9pDF4gcxeSCJ0TVa9b+HAVZQOCCM5gAAUMwCnQEquQKGAz5tMpVIJCKiISW02oCADYllbvw9iIl4wVeQ4gzvI8wi+IKxRIsfP/6vc6zH7K/w/5X00eP/A/6L+M/fnxff3e133b/q+e/09+mfbp/2vVN/aPUG/sXpa9HXmF/dz1o/+36uv8p6iv9V/3fpz+yL/pP/H///cl/bX//+1H6uH+Q6QD//+2N/AP//1h/pX9W/un99/VX3q/Nf13/Gf4H/Of6n+7+pPkT9NfvH+a/2P94+Yj8b/1/8Z4nPVf6L/w/57/Y+zX8n+7v6P+8/5v/v/5b52fyv/R/xnin8rP8b/F/lh8gv5b/Rf9H/gP3N/wvyP/b/+n/K/6Lvjtp/2f/J/y3sC+0P1L/U/4H/Wf93+5fEd9D/x/8p6n/u3+Z/3f+H/x37S/YD/RP7R/tf8f+8n+X////r/C/+H/4/9R5NH4H/mfs/8AX84/tv/K/wf+X/cD6bv6P/uf5b/X/uL7X/0D/Ef9r/Kf6b9xPsI/l39b/4X98/0X7Uf/////eL/9P9v8C/24/937i///6Uf2E/+n+j/4f//K13Obuc3c5u5zdzm7nN3Obuc3c5u5zdzm7nN3Obuc3c5u5swqv4EWRenzTy26/MyEtImsNpp+Be3ezr3p190n96RldcMl8pL5SXykvlJfKS+Ul8pL5Nje1U6gY6lEwcEO37vkeLuMHyVSuWFdFu6Ld0W7ot3Rbui3dFgBNmkPChrQHyHokPP9/lSeCeFh46LYZTtKS+Ul8pL5SXykvlHX0W3NkQCC/ds89qniruc3b6N0Mo+yb6jgAO0pL5SXykvlJfKS+UdwaZHmcp2vq6Ld0V/lQ+ESUZzfK+rZi+QJZGgwPYsHih6JD0SHokPRIeiJKRi+7ovedwQ7ghbt6vawDTeK+oyKp97Mu8SFmRIW5SXykvlJfKS+UljW5Fnn8rWBmKkow8VRC/zm6ivy+G4KvZLc9H5bBL5PkkZftYDgcAPDj5SXykvlJfKS+SP1d7zyLKkOORCr8s9eTEK87uIiNH4dTcoHukmUhAa2O+xfod2j8N01HqjnEpOdUom/vwOPe8axvutnsGHOkX74XIgM6g3Chd4OG9YNkPRIeiQ9Eh6BFEoA6Tqjx8u4a1PszCWL/7LteTgj4iT//ckysviedr9RKHj+YGs4ALbTNTj7VpZYY02f5TZpu+TE5JDn/DI/tQLhQ2gjbOdLD6odLttS6GGqakvlJfKS+UdVE6yga7MyFDHvgpiebCC522osTJsAAG0sgdtgta//dC3x0Zl8DVyEzLvaKdP+0ln/glXu2BGhVMv/0FVoqKHvEqn/7H7i9sX+TufNtEpWcs8D/ZszBDrLQb784MQ3GcuRPbk3h+88K/ig3iBvEDeIEOVOyrQb7yZd4s1UPRQHag5XwW66Jzv2BtWPvalX3MJf3+wv+bn8eS+R1AD//0qH8LldR6EfsGBH/Md1Y4ixxVNxr79+rfXfzvIUOJTsSXGSuhnv1K+e0ySqLeIG8QN4gbxA3eEx8mA4TKxT69P//eHD+TSXyY9FsSf3Pz/+QmPTU6wFKkxVmA/J7GhczSOVLgx+lXIPLHmKNUqwyByqXbmzVNTAVlIvJEZ7a1LwgC3loy1/NVrRpRHrj/L8s21vV47gh3BDuCHcEK+czpxn3Cnp6M1GrW7ubHt4i01uTOsFP8YCLcULszZUcXYRkJtKkC2Gkl14if7KHFb+aA4wuvp2C3zRzWp8NrOoLqBO4LHsCxonag/zHsRfuZvOovK3vbUREWzP5uX3DlFO0pL5SXykvkg0r+mS569U3LuCGOi//8sDPf6mz3z8jhudPlnIvDwMVu7LErgrWbSGnHFfgWSYxNIZWS9WPnGm5zpRl0dJ7L5Q3czvjtrET0G0W0YYLWERziW8XX4eZOlCI+Y8+GslFu6Ld0W7or+BIafjeQjtI8/5f/bAYqCfcAUFOa6D8D8qnZ694aYQyHhRNtBG3KdeFU57byKqfPj81UyFef1j0v+7u32iCPGmbilPW6OYW+Fv1Msj+uXEmjeeXbrW2it+PAb5+Xgh3BDuCHcELClIYai9MePkfKKC2mdm4mneL9zacS//DrStoU7UtHOKrXSkT6hkPM2Ji2fsHGXWPXfrSjPDt3ZeBfwaN+CMkXKzM5AnXwaF5CGl/UGVLhoowUIYn721vMjMN9ztvc0/upIlJfKS+Ul8pL2LNqA5jTyWMVSzxX6sQ1P/4Cu+mARHeE2XZFbVjSGtQZAsxHjd3WffMBe+1ZDanUZ4SDE4wZZBsLzqxUpuWg/sGT7yijSHicQ7oTOTfWQ9Eh6JD0SHokKlLmscX5vRn1UPYpvQZMHNGFXGr4NPl50eQNpV0nEiWMmIYWhjV+uIwf30CX03Gf801U1aceH8ApEMvDYXk7a3wRStM5lYsN88MPsVVAAwAdSM+8Sjv3dFu6Ld0W7ot3RXyxHAcSdjh4xR5N0Wy52Sj8z844WE1xLN1o5p74nd8RFZv/Coz9ZMiSd/PANjPpze3jC+4tKaGdwEm7YL72cS+bS/IDGP3f8pFb3Nd2BpSXykvlJfKS+UbtQ88sBLgdjbWf5I6DoqSaDeDsj3DGSB08EVWzSwjLXPjgRf9N8aaQb5435uvFPMQQLiF28dWZwCfCFLZilpIWsxKCwCSuS2pvcoURwa6YEf+E4zJ4hyfX1f24QO/A13YGlJfKS+Ul8pL5RuhDETpetyfsuLeoHJOMUe6Tco4v6lal1hSVNjfpMI2KklSJUNWGfT7bZ/vS4xd8xHvLxzUuAHxSgegZ0BFx6yOg8ZXveKrO/v7NWxBm0bmIXxOSlyvGI0BeiX9M/Wo3JBN+oBIlQe1vEDeIG8QN4gbxA2DZn06mBiZE+wyI0WM+sMcFeZifXLtHYUOlcflIAUcSuBTor/BqmBwMugK0olWac9pPrzW3R5++8jiGHJwb1sZKyMFSdQO6MNkTY4kBTkTBv+WYfspK4iBrtSg7SkvlJfKS+Ul8pLRu6tjLhVFm8GrDD/Z0qTUDlk3KlSTK+cLudcY7FSyQo7SdBuXg19yzoR/l2HztphdDbbVLToYp4JIOZmyI6bKx2cU6fNw3H+iYMbW+kNsI3XRMf5FkiYDiemotkPRIeiQ9Eh6JD0SEVGY7wm2+EvBmTw4Slsz+A1wgT3FhUCAVk6r2ooNPf3O4tTCq15Z2v/S7UykuaVw2py/UVi6ReWZPMIeb81QMb+bRdajoClIYVwH7o1QZPwSNe0Ih5zdzm7nN3Obuc3LXHDjwiYjLAQCKpdFiZh/C0zKwn8z12EGMBomMtcRGg/LUO3q9w3ede9GV/z8mzZFAyn6R/hOflsdLp10BUSas9rMZ2CLxwroBbf4hwiS6c3c5u5zdzm7nMjvQXkJCIRJJFAnLwMbpM8b1FWLMe8afBygSnaDQQEd/bUV873u4DaRkyffHk3th57TVePD8HkeeaTPmw4Yc4ZqYmAPfFiYPYkeUXYZfnuRlU23cQ053ducfKS+Ul8o6Ru4AHFeZ6hD42W3t0Jyv2XwhtnbUZx1OtfrZUBt77FfQ1pPWM0Xz2o41iKZa6cxZKcCrzfIqDrq4Y+aIOqZBIYthFNEUg99cg7VMBT8OyCXdqHXHjUl2Ebt3Rbui3dFfwIpxFRR+L2lj6re/gOJ2V/NckgeGeMbgAQi0ucQcrjtx950MvUuqTAXecVxYwA3J0pcdvJ6OQfQ//x9PCHjv2+sV3KTJqFVxqyYpXGfVs9MupoeN8lIafzEHj8lbCSQo+gb6rK9iURcolFu6Ld0W3s1woXbIvnVlf2tNAUUf/8Q1TcPjbaQyqkkTnkuEs0CAuYbjRku1t4bDhote03/KaEuLJR7UbINz1vSvUwf88jQl32WnXw74IgqA21PBWwvd+EyWqPTW6rmU5e6HRfeWXpD0SHokPRFDf4fZPEcwdSD0vKayyGI7zAmo2fG7VtU/PaPX42etmRgt0luwPJf/8q5NIztxSAL4h3BxXfvyvb2fHgA3IA6ucrMxql1/zmvF9PBlfKDUhzRUrDOgHY93+87gh3BDuBkKPScfCe14iNFZgqwy58rxAnmBvsJrCf5ALLnZGu6uSAli5nKLV+9mgRt094+Wplr/E+jtLBIBKibLK8Ku5T2kw+WwcL9zE9rJYzqpSo81K4Vf8XPHH1yXdxTm7nN3OblcmnRGKZKa4p5206ClXykEccLFrs3Lc4PVpe9/t+c4TY59mRo5WXpnzvj502RPyFHrIiqTxe5bD2kms+1bFblEcgC70q++RMXif+VLO7D010HqvydK1zFrFdZM9wd++USi3dFu6LCSw/hu9xtmiK1Hou1YCzmCd2qQ5Ws1H93ywr5QpB8nakMtRpwqYVp/RwvOU4qIB6Nhy1g0m7L5+8EbDNgkDh3cQe20iFA4mwMQ9HWala5GwTHTh3BDuCHXc3VoXCvoKO3ZtQgmxez1/XsQGdfeH6/sWkkXnE5dCorYdfq9th35DBsoAY0vQ7YUa5iXRpUscSU4Ib+zEYjjDVnRQbgVrwjJ/61DGQUjoGWkeEIVC1PcS8rRA3iBvEDYU4C8bqr+Xj1K6DSMgsH5qQjhJAYRVXDxYAic90QTq9bxwc0WuwUrmFCUf1/qCheR64+c9RXsHeeBhOID1BdcHGgS2qReAsHHiHebLT+OrN7Krot3Rbug+If4qm1KPbRIQKR+M8T+UM7dC4xFcjY/MiLlKXtrvuKkxoj+P0bb+R8wNMoFd3rGvv02Znj9a3skm+sJZune7LeRzbMmqg7XUZJKVo/LtIw0uXOnxeBIOdm8gtm+Ul8pL5JA7PYtvL37jf//G8nueHQXJF9beOJ8hJtJbAWCb2Evy2SnZUISV32O93i0qbfTEsC0dhtjVa6os+dotxSZcIDngCC2A0Bm+Kf8nptsvAeurVUUNEh6JD0SEhZRoeH3J/0ukJMTADb4SpIQK7l54njpc478k+CzlBdSGd/WuyUqnxzEyy0/mfxC4aAghV+Purr+aTBb/pLo9I0Hnv2vACF2iiSxM174SzJ0C//1rFPBTVk8kvNyvMlf8C6nnN3ObubSXsVMDrXrs10n2tFRypoJR8sjgSRhEk5npNVQG+nqqwpieKApEXZb1tp27p4Dtiw9mfwflsjmHKzYJY5fVEsuQQI4KG3CxE7Ew5YDMolaFZZCUtMEaY/2j8//3vetCv/Qkkty/lm71LnS3jjD0SHokPRE/KavjqLZRMsPgNBBNyV1+MdvC36B40GElTFUSTiLzEnL7QXUk/7XEBB2sPm4wdNjLJtA/jEoy2OLDTQPXPbRZCGpOkfGTQ+JSgTucw+HyD8Kr0NdjBzuoIb9Q7+Oprcf37W/CLrBB4gtV4kpnZ7WS8pHZ7rYfnN3ObubKEnywo4F1Fp1OF3ade3ZJo/crt3zahTZRl9mE4rbCaSconMaR5eRLHHrAslnbOu5TDvKdcWrr8o02QYJ/cR4OgD/54U4QTKpgLcOBkHxbOYRe1TrL+9umZPPnZmR3lIAC5UzOBWSQnP7C+FB4uIoNQbAZjXXxNE5u1Xyp5ngaUl8o2Uwl12Su2gtkx8ddzZvXdkUboV3l+MSuc2yI8PHnqg3bWQ9Eh5/vlT3qa07SfI94ujAMFa9wP5HX4nHsl6YoS522HeSHejPHoF7xRth1KE7xQVXats7ugQjEjyKxDJRbui2+MEKiG/kDTxIptdV8W9pUELyF/1/o1Ow1rLaleyWUBQjFplZ73bohtj4r3dFu6Clej41OhjeHZ4y5/VgCFvWCGdiCavRi8Ej9S+bQ70dJOx681IAy3bo7rIDwgED5qCStwnmeUJtUpcKKqOnN3OZtPoDekT+/q524819+JCBoMuaohCBEU26zR798W/mg98FHarPPSzm7nN2+Zg+EW0gmP6wy4mrLmSEAwPdCYdpVsukr9yTKdUvOJT9VgEBQ1R3Ckr6zF296wu4kO4IdwQuUfER+NduCEH/Jm9l2MhcWGR030VCaR4Ah+l6iHZ4yP4ABjKgJsFObklIukfP8oyQlUNzont2wAj3kPXPVbna3t0gcKoWlpPLuqCsdIcLwHaUdJWLaNq2zdvRIeiQ9ESDyzDyemNI0baXEborPVFNQYAC7//+8TnvJrlOGW6YSzPlNSzduAmDPONmffJfgfDFbbSspmuSXyRUdI10H2HsSgRDAbJPMeY8iTqoERVDvfqsA3QcxewtKIEEfoknLYM4pL5R5GaJmqO9Fu6Ld0W33hTTGaWlXq0qAa6vBdTJwQCMtop5ktXFVi+017ckk6rfs0XVbxkL6escQ757woeFScLjhq92g8BjQQ4HzhkMVXm5rhU/YmHBYm7k/Tw3TA8CTAlCQl3MGlmmDtYueHykvlJfIuDhaEsSHK7U0b52Th5VEBwpMPuautx81c5oecGq4BNzc/VQ+LEfYCBKtQznK3BX13fvVxSWeHq6IqTsA5hWczrvqcBKNAtcPnDt5D8QTFanI/p30ciPgvD1kbQHSri3dFu3zAShsWQI0rDMGNA+jUBtwqj/UdGu6PqIZvgsOWOJQMXo9u2pmlWCXdQYSOkq1i27jm4ALzEPd0SgL5B78ixo6tVD/BCJfKS+Ul8pCSTTHwTdR6HT7IlwsGYxeZjYA8LOugYDi5SXyQCx0wH4x++XXhX0Z1WJhDffNvMHETAqVc0vDWyhe6aHUhN9eGruzeEku90oyVF4FV9+Ff/x29nceOen9+aJiPQpGSsFWO2PUSCXykvkwAt/M/p8ln721Pd4FA7zv7fzYLoHfpvI5Uh71HEBx2YkwScPThka3c///+szvxXgEfBuBbrDrKpmf7TrMzB/ZClIIEy8DKu6f3jLEYDBcrPHLqh7YQlUfF+D4iHoeMeHvm9/jbm5WDxK4VQ3hz13V6uSDIz0Al7n3KqTvrmjPQx8TQ+W9VwwmsfOQxi8XNxbiTiJXnye6drG2q2bnBKl521jfC8/dZX/cHLFi7jXyQviw7J3Ep+dOReUL1liCFg7QPduRdZbIR6T5F3f8dz/RK+wpnRfXWwvQmRkACZ/mwsV0Y7oFk4Cxm/Yzv2kxElvH+9P7q4pdfJ5Kc7tKbl3ISQObKVMm+Wt+7OhWAQJ8HVJW+zzx2p7B8Jpc7tsDJbuhGDbjgI03Jyx5ftAQgnUiW/6EpKXmM+tNWzxkNP+tNc0yuSU1VyJQrKWgJthLb//vtN3C8rhJ79sxdndQocdgSLGr5f0gQMsz6IUnORVnIDbQL53fIw1uquMmn8A33G+YaE/tCY7SqwCh4H0jJx4gN9LgzlijmoWI2RVk6BEZNggd3Xmjs6qFa+etZu+1OM1VNT4eXbqoaWlJe2FWQTQCkOcHWM42li8YGYjQhseFR6rQ8h/7KfsFnxhklQpcp+7LuDUp0z9wU+/RK18NJ80mbuo7KbaRaFYr7RLF5W7uWxhviol8OISQUItm/IiBHynXVJg74va5IsDXVlpghSAC7QrJzU1iC1e0E9f4eZD73puZTrwar+yO11kUSXF3dzm57Syrd+LHXVTv/78zu3SCmu30uZmuQbjh8pL5LLpYRN+5aT4pro0tIrzc7r+cuWt14XmY3EEDGn123T7ys+6WFZv/GEQrZ98VyAFHgSnf45C1sU7SkvlJfKS+Ul8pL5SX31dFu6FM46+Ul8pL1AAAP72HWAAAAAACDQr7PYP+d6zOeA6rwM9OOF7YvPCc7I28apaLmB8rFe8i2iTyHbS3oNvug/10WIvPikgFK61mWxRnuyrbvkNQeetDCMrod4K798XWnelMXLtmT/0gSoM3Hic20LhPAa+PJlEAvDRkMNEIntqan+1CvAMqM8t2njNMhOo0KF/OkefLhFnWkqGavcrfmu1j6oOLR2ZD7EzR0GAPBo/niDNEP10wzdYm6wFAKL4HtXAQ6iG2CknEKfBHdeG2/oyd+HC7fsOerM/v8iqPhBaz7mZXdnOOqC4dAPJKArJ7OYKOZP3L5sAT6iCnAUE2A+GfOaaMgDtOxlNQ2KAgdcrY4AAAAaY0nVEtLjE8qq+MoO9DP73CgWrAwdqHq10dwCdgZLIV+pODg5ukRd0Kz6hzrDjteW3jqZcd46L71my8AGe7ZnunmFCJc79pXIrAzbURRSEpeyhkE4MnW+H5nXesg3Re8uRxl4GLxvMqAAAEMOsXMInh10ONdmmii8RA2f+1cK6LVS/xlrC9qrdxOskRSTFX6gNbQAtWTOd1Xk4HeYLaIdVh5osykevEaIPBiieSdNAhWm5hI9ejDdFAADaUAj+X6HtWwrSjWZY+q3kilze5uFaGHIUz79h/TGPJAAduT345UmTcAAAE7gSv7ShWecYlhieehDzBHudOndt4UVWsjHggmmc4y9VX+JrEz6v+fyT1YLW47YW56z4MJAZY5kjc6yBlaHxY0oxvgKuF+hqPcDhO3ccILniaScJB+APbbYAJBbfKsBSuvGFbdWD650RdAjKzYdMfa2Aefrs7uw1y9C7JQd3jvCAJDDqHIAACS/ib+KzZ0P6Ir6Gps9zWe1fGzEEO8tMiEDNa9RG+pD4Je3/WlWy0zA4ixEReI2DQAAAcAEJRgR5jyjkdGLiWgFVb97GKq9Cep3302Wq0syYY/R1ZIzOhd6dLkJXUO9PKKVqBH1RDzG0qW1Wn1nsf46+k/CI+9HYgKqTRSLXqvJQGY8H1hgaxdsRn87i5vy51Y4iu6zz/wefZiBs95ZL2wWMsFuHUxHErHcr+XuaHSABE/HbtR3VPjA5vtUGqy8SetH+J33iXGkLWwXWZgAAbJQ9gwGE9JKwjfRvwvZTqd4mKNlMObdMSsABqvpr1p92IAbVxQAt0oQnRDhXhjRTdVyE0FseEuf9BWxTZrajweO3PY7PmkOS0x1BsNcylWmqW36jLQ1UuHSx+V6Rqd3G5o/C9WOfjvK0aDjKigytIifwStlfAgvCXmt+oX4VuTwCL6+ihPQjNRuiiPL8Wc9NngqlbWnik5KcJoyaiGFFDqNK4cFy2JlvIJk67Cgc/8nUcQsAAbary/SgFlYL9mAadZih45SR8JZsCYjn30ucBfhH5ZyHHw2EdEhbEzCU2b2HKSvSlgpsOGlx6YThqehvZC7nlihIzKpRByVqy3kICuOBja1w448sFeNBwBlCwUBOPlCjaJnNM8IYdPqsU7lKUWBeR3rMZuBkrcHy7R2VU4EpMc40xljD0XsHAmutzeoOrC7oJFkp3bZ8YvNXzDibkc6a2Ugtsjk5tE9MKjs2jmIXbqPBNSBC2ZOfOlOVk8SMJL3XyRT/wOUbqbJf5Zlt9f4rYQOuZZdrM1FhYS/DhMOovVupHVmqXSfibS3NXQuT+00OkXJtJpiZ/bJAwAABaFx1W0oFTC7Z2qbR+SJernj22JKrPBH3Ghw/xG/RujKUu9IzHVibTWuhHVIRVBihVHx3IUH2pzQ4PozVbD4xPdHQwDNfbavEjb7TE1LtAYd9yy4TJjrMgG2D94iyVrcXvGzhSr/wxNEjKE0SEapnZBYU6Uku5Rw5YXU6C1tN+zSJCWjO2yqXOTnhzU3bta+AvxkHGLsHkH5s0VWpkyDH4KBr/lv2g/hbw+KlxECSVSggbzNxqAQhqR3/FWvDb8cPtvKOY1D47RyYpMrOdR5K//gouk1irpl0+n/EPR7QqznV6Wp1i42kHn6TItVUJYfqWMwBSvB1YbnL0E4qCsS0ChubNWWMCVhs33ZN8MvlQeBPR9Ycl9Xq3mzkS3nwM/STEY/ZxufnHVuxhWp5AYDFeJAHX0d94C8CrdWevUMSGg1AxY1sDVbmWHeSzZKpez8vEL2z2GGhy5WQtZG4Ud6myrAcUvT3QxSyxcwBp0lw7RAuE5eEgWzczZrVbDVHgbCVkfcSoesxwr04EkMpB/uzXQxFGv5puRQOl+oq1RyNj68cnv3PzbrJI8Ltj4yWiveCQL5zovwXGKoaTLkHfG1jIz7VcC3NfNRpz1/13j+fYurv8CxLDM65hcXACAE4hVYL+Bws2jcWRyZ6uEV1ExF5b5bh2Gegy4Fs/1SkQaiw59/oF1rBhMcZ17/rJkij6VSi3mou8fNZwSUJ4WMjCyxgEsESC/bfBWbXQfIQdY/xFsow8IbVZBIHspdGgxjHwthxt+/2eudmiLgEnpyEXneP4lDUn4l1zo3K5awGGkoFlMoypnM8WFUIZ/sBrVz1blYFCgbgcOZuI/vSEGsu4IjKpHdKOAGk8XEzxMYJrwjOoxCxRGikM8OIU99qmo6uJYMk8KVl+LNv+tBOhIwTen72FTsjX8vgsYqu7RkJ7aqAtLltAivvUfwALVrTjxUfA5fdnM0uC9rLa9sVOSFkigP2pLHZed6r/iRMhFEAA/ifqLmbSJlZ/O26EKl2dikoJn4Gfp/Skj5ng0cc7MZ2xKlpyJOdfJfMC6v934w4i1rdHGa5Hd39A/iCtO0Qc6YRqiuoI+l5e6CrzQcX+2a0FFbHVYjVQ6+aswMHN1/OOUsNqQYRDPsLVf3JYQ5J/BLT12Spg3bkPFm2SWuoqpAZXSfeaqYZcDxyhy3ViJ90QqpwUs0AAPUAe+L7vWuxbrm1L6MVG2mLHK5MsQ2SYzGB5xwZy8gZ6x1KwiLZIBtMlIvrT3TFiyTqJM7FX/8iVK9teD/pyAVHx2Urw19psrvZ4CaD+UjosxghNlzzbnnkc1WkJeGASbsGVEj7FjZUR5YX6I6kXCoUYrHejy+bcA5gkNZHLc49o9HGIfpBkxhMbqVF2uXAg8YrMW2ACtHbdBvaLALwjeQbaqc3udnMVTQuDXs2q9W+j7blWhi63npcm9mJw3HBE9RdsaCOQ3fPAJoAiYs9BEm8mLPPsQVY4Hd149OVyTEhZd893CgwtMKlSRf8E3J9WfZzNT8J2R2Uj6u6kxNXPpXILMrsyRqKUVZ9uR+iKBjOPX+bxrP0zQA8IaKl18gq4A1VwlMVKjmPSvrjcHLxnTRPj+dA4/h9jBQ114l5ZhVtaoWCD0RlZtKXNhUf2Dzqx6JwDRnjDXYphyPg/1Gpxkn7vAk+vd3M7FOd8ax7Q/J3b6PFcfJI44zt2dcZtEhftOnkSBQvko+qzqNpfZscvLjZncL0nehQdeaDvTtXis/ODe2NJk4QqqlXCIppWlWTdmQkcqyyQPrdmLj1ggdcbMJGIhvTA0FmCAJuoeMKG/zpSUiVHfxA8zsPg690B0kDIaTid1ePVyg7qYYR9CPerSjfF3QGlX6kmyRnKaDgCWZsEbUk4LrAtcNMzTAkPtwSgUlG2XbLiC+fzKBTO9XM9r6qwAFhESnrMwJRnIyEAyP8JsesB75VKEsuuwoVioxUZKOs8Z+1+wGsOF+PjfN1GNuz4Q5nKfFbPgIc7fyuvKdD/5ozk+I+qMFfAPf0Bpy9t3n7IYHGcNDn2qxtlQPeoeC8gcIB5C2hN4sfzFjENsWSzDMSUuXotEZwTfLUAxRsWQvz9yj1ODm+CcD/QszjE+BvJQilEikzZQ1SIOqcNyA17gGF2JtCiN1rjP8rXc0Op++lY9nxoKCBWs/oSVYy+o2LgN9zgfGPJV+nG+xsh2+BQIWhGSp2WDkFNFTRcYxr2gk6bvl9nuiRwS8/M87mH8py0zMtrEaQy6NCr2bkff48fjXaS2w7DfB1brpDZzdbw1RDOqs1+3l6kvvpUCzYxwPkkHbT5xzokeeufpVOPJHo9iQLKePrYzDCzibwyXzFE+FT6Ra5gxAIAtR+dLJoiMHngxkujDB7vdR9oqw1aHltn/a71CWd6khd9BQRDexVX8bPQ4xIEyabU8Mf6/Vg+7ieh4V7axgr0X2ucJeYD0vpUBEH4yU7vKPG5GIr3z7wTBBheKidgwsNA1cPzVY5usr/kel8Jr7wGD+kpnkyJoghfpwr5sc6Nhu3skbDxP/CYbapx1oDE23kcSl8jPb7TEQ8FSScA1nUzTB6bEOn2wzAjEzU4AXkZkVVcmgSw8ZqxD5C82wreKnYo2R6+U9MPJDKJj59zNbeHRn/iz54ETujQixuG9DjeqNiUEUGDboiHXm9ddeYzG1aCsFI4pFoiTG5Xeg8JnwjVMIZAEdGaq6VB6u1FmLqpgkuTSjVHoy2XQzCNBVud/gQpVBD+zyiKhhuosBgFJ1IOc5y6zbwO5nXf7ivI+7p2R8QNm0pAF2y0lytTnqFFsEgpBv/zA+IYdbD7HI5h60bUnYQvjfahzRSreUhGFkAFpnYf/k6nPQA97sn6cZl1vChw3zTb3Opx7meMnE9EQ7ms9Tynn3Xv6eQ7Sxc+oYYg8oojzS4/5urjIp83YRzvWZixvG9oPoVmOzlLHHkYdLHQdw+VKGWJk4/ZdxMc/gFT7Eu1B2jcIOBUXzMBlIzb2Ah0p/V2EdFdr/EsVXEDFEe68X4/0+oX48QJH/JBrSCQiWQf9E22TN/HGzIvtnQcXpax6d2QvUqIZhb4kA89cxqmLp37rO5OCvr5vpXVMSYd2idAoQWwzZnfmuNCj9MkSzYaz+hu137SpQ2m6/KnRiOoij8PL6Iia3znpx0FNFF5XAsvdELxQxjA32QzS1cYNVqKg+wNrRsJNUR2ZkJi90VsNGw0sJTH1T6PIjlqAWW/sq73PyMXNkWRfmHcqmKnvUPUknRUlzZ6YOKoueNIsHMhs6iUq3xNMhhl4syhpIYuYcaoCHy+AhAiky2fmrhDRfVMXuy1MNFNhIjYVuhP2xmBBJeh7TXPcN/k/0tE5FssPLsVAL+gBVoSqFdMQUTIXxuDVa5plTBEZFfewCY9HCBGMSSleEXS+aOW74mkERPUEKS4BUroUDmW5EbyHuHno4KP9RQgHw+fhx1K8eUtfNNm7jiXjgbFSaC3E9KHrJ8wt9MDeeSqVzMuCpgYgBu8ORGB9QC9tbTTxWuivg4k8Tv1GxvXhlKq8kNvWSVsc5ClZBhxhn14rqpQOFJozIrkHfgTb8zaN81m0qnfTQsWnU+A3ig3rdBsUly0+0AeZBOs6XevdkMebGQSsN4QrjCAFcDu+61r/J5y/7jYYY8jWqWoDet8W1FHxUaGpm9CpY8E/VEIstDj0hdgIa1kezIBIDxVbbIM3WksR1sHrqTQi1nZO+8BWUJnI5O/mA68LFJ9IV/RH1yrazbtYnsMRFak7/FUbsoGvCknERhz6tBGPINhuioBWF8tsBHso/U+FkaIh9tJOD+fHiCAabohhmG4eXFjkcDi3oCEDp093wAsC8Wvbfb+i8fkJaGukatSv1UQuCuBaw9UqOKowRDxRJ30kBj7+NI22vKH1hITxdmg8sCnrD0SZhX8nhzT9L5X+rPkj0/s6GWtpY0Z7fbfEXUQihGDFN4o27w72O09IyHVoWYG2WgyXwV+nahbu5SgQrfaVDiiWkGOWs9o3jZ/5L1bnx7Ylh9UZWcfL8H5p3u8xdFZSyBwUDjUzYU5F8bcvxfJ1l7MAVoGVknDjig1hjBR6/bN4kAY4TE15we4ZjcrtRTzNLXJZ5GcKU6iz6kbXHmv/0UfTmfk6A2VJjOk7IvwrmBCm3IuIh/50wzqrRQ7GV7jNUuKEyMbU4ga5Q5DO3RzyUrJNk4KCgFOGu6322dVmAX7bDs5zeTGqmj6xJvvpxUNIL2OE5NOP4UF5rpqbLO9kUF96RZPBru4uijS39aj+o903iPSXanwBnhVT0DgYq0dvZF29aToyGxhHPQG0oyoiKc/YnLUjj92P5GXMqeBkBGpFIga/EfRAuROOb9VZVxbzTYaME72uWB2GWpoojiURqmwT0HW/Ns/Pfh4/TOHxvbSMKnP/UqFOq3ftD0KyMTBcXHpvIOT+6LqszyqRPwi1YO6qIhb45RvIFV605Xe3MJ2ASz8MlsgwHgrXIDNQc2HI4bs5c5/K1OEAGETf0p1c3jU09gUu9QHbQXLPsqa5QDkh8i7Bjd7dMGeZEjDNHiDXSp/oQpDjHWzvvFVhEWY0xiJrvjhr9pmrrpn8feRNWXqal8CXT+Ky36PCke6+Y2UjYDLsqTBJWBBiDfLjA328cepY/hGJMBF/2gQAHjosxvqIxtG8KTq8ZQxR/Fu7ttEVS8AnRU5rj01Z3/bMJHknLl0NFP8rjJkE0rxZCwarElQbVeaO/8/dExrSBSv3wMbxXrgeG+T0p4QwfIKpK4pbi+s8D0rf1jVJQvVxqN6oAAZc9qzM8fMhkVNUQ0ZTNwaDCWNqyIPEbFvi2taDHV/EuoexFDYZYxWpJfNjE4MCXsM4tbBNA8DbjbDrhtpFDBzy7eraeJQV/eiN9RIV2/2DM68k7aVtme7ofzVsiOHe/+itqSrO0X1zMDkyRqIOZyH9wZCfWVkVcJlwJkRd/El95gozBoFGno0C1jz7yAIz9HNnxwencH/YWMWPEomsW0dpO4Aq1yq+zNcFq5jdOceNaNdaXjTUiUbbOqBNzG9ySu6D7AF8QcQrJ48WymO3ajlMxFgXr/WJLONzrnbOLuLJ8z54wCvLSwPrOqQX3SOfD+ve9xf+zk6JSjHKR7VEwgsWQbudQcXm4MiET9hYFQdRyjJpSbf5OlTnF9T3E47UNapEOz7ErGxuZxQg1iuQ3pfaaiJW2p1mclKVAr8jF3YSIbfnlo+Y0eW/5/rVpUjcMYj2fK11bBj7iNhl2Si3tJL1zBsE+ruVeue7IQhJ0Amcl5udoa28JnpROHGMMyoNO4H06kfN9f2k/3u0jkh07zTteCT7Wk8lCEAco8LqD6vAPrUmo8PNHBP7BXuXYfpoWTDNVRywxe7LPMP1Qw88ppwg/TUrfpKkg7nyBOoWTawjbH/ZQpQBKKu/3zu8MO8OdIMS8V+Zzs6MWZzyvdZGWBYyIPohyZhCcdIHEG0cqofJOcSra9jdz63Cg3MXibK6i5zrGt2xQasKU7uCLelCr9bBH2EAmtnWRbiBAjz4f+pdKVwGiPyutHQGSXALb0WyMwmrdIDz1Y7qHy9peBTeIw19oPnR3Pnvc6p8Cf35XTOX6UkD1QBEpysV1r3fF1/QCvcmc9jNfFBZ1C4a+e9tBscbn7RfA8wtnYeNVN1lsKJvXDK8nqUMRSD/W6X0t57LZ4tu0o5VSP3tr6x494/jqlA8hjO6A0h0Bce0BVCftRMjRe1Qqdy0stELGe3GOCrmj9GAUrn6IA5POQrXnxfqB1SKjZm0HfWexaYr88v9A36Ksw7qvEayNnR3OwEpLxogAh1FmxnSzFpyhNYqse8RQtc8m9Fwo+fqtLHxGXNyrVTdRAqlGmWBGAeiV4iOIUqNvlFv7b7h1taSM2G/hly6XBEb/LFXl97YNjJysPQdOh8bjIRyakWrAz3g+WWA3HDbKuqJ3BADHL5drvxNdLDB7jIUor774jfE/bu+RK6GLGV/NXyFmWceHjNTi77KSZr369ypfEV+bmKC9Vb8/botMBDF0COa3qQ4DP6QbS617g59gRKgidDmnxbZK3K2rM/goGmQqUOgoV6flm4CTkRro8pRxiCH4NA06obM75EOsNiPSW2th78SWcctm0Ny6HlnLCICmLUenTAxpBomGMjQ4nmj+6XBVDsNAUX3eUQcz/obuUDJKJpoT1GhJq78QRwMW2I0VWSd4cprLSAABhZQ3ACt/hg2goZw8zMOKQlACtDFAJGf3/2FlVsOR//PE9UE5VLFMaFtOSNBFDoTU9cC6R1E3DOZqqPE9JFIhxubvnlbwnWPWX3Fyi1q2CApe8W8CDGacuAAsMysckUnTZPpAc6YnE4kCj0JBsj5Rau8nf3QNbYqJ2xId6z6tiF+cMWWFOaZJkHgayZaqvPkkpq9/Jb+rVqXl3Vnx7dVM7C/D3GwPn69ZaygNQE6XMAKku7DkFlIkT3GxclCSb9FLQuyw4NbfrbNx0H7iyoU7fsEznJwaxY+AFu5so8eWTmQ4PaSNm34ljEb/OwoDbBCX5G5RmGjRR3ATd28H0Fn3jDALYVyfV7HWSJZ7Vt8VO7rrdY7xXi+YO8guhNvxrnNK0dJrUqLLIRuqSOgd1I7nIEAgGSomISfBAqmCfn0r5bseDhonFCaynGoY5YPEyVbL5++7/qnQtK0XZMZMYD0d0Zer0rVShYQulj1S86nyKM+PTcjEd/hWeRBc7WJNfq+TosbJakFw3CyHEiHTSiLnnOaXVbjnLqJz+3F325oRVaKWaUnfw5PqxWvRjSp18CfHyF/Om15YIzetArm2fHu6dGzVUndWoC14ALpGLr5n50Pe/Y90ESpKXp2ur1z9hHZv113WFrBK/pQiFF10rxPgXPkRkjfZGteW3XmqII0HpzR6+V2c6q+Aoess+vWihP/fNIUQZyWLoZNDS11zGNrmiCjAe2jwaU6BiXd1yjOCy8LTJiG7w4IIrGAj+O1Wd3Mfc5DJYl2t0yMl/qe8rFMCYX1594NP+lQrd1Tm7ZTLCFBm0rArAdV3HaOM6b493avK8rQBHk1UGJ67OanwuJ3iMZW9pVkJyVx4Qcjv77hsIs56lejRZ8ltrfNu4mx1y79BwbV0YyyVNZWq70M6bYddeqQIfwz7CbqoWajRIHA9IAFe5gD0LnxSpXe5rECwW1d7M9ZdDI5Opa4UvQgUr8RyaqU/IFqdcTN9+piv5ab7PJS2l0gmrxfHdtgVIFevQzci1x9OFkySKWW8LiEOyzRRFbYqu+8OT0obmdXLtdGoW4AvKgWUTI3u8lc5INoBbm0Hs6wdLLMzuy7KMEjPtKVL/wzPQG2ow0NjT/XNhV+dMQCgDgyNp3MYmmVgbEG/imMEdYMkARTrJEgoadSxDd9dGH8hxCclntWufjepayNURuXmNphld5lc/qlDtgI38lV1ljy43yFXpPVrji1XWsbYBTKSQKYaTDWNypTyKBPTwhW2Rle32JiOrUNmZDE2mqApMi3eu5pb+exvDqYTkAJ6K+Q7njI9byFk5c9YTGNaN3cooS92pD3mtP+rQKsTUPQyi4GfLgrEzfbsZBE1is7CQ0n49gDWkunBLm4xZ0EELbHvBAANUCI8GihRdQ8pOcw5woKuNfo7Tx6jeLmJZqcQdN91L8ra2pUqpjGxCstNML+2uw6OprcHE4aiAoFEwwP32gpr1zG9B0SDfL7SOpNkmUollpJDxbDBHVkw6vKntBHe7+SPT+xR1g1byMEhFI/0K9KxmKG5t5i8wmDFB4OI2fC/GsxQEtyN+7QWzFuuq0i3C197nCg/CEAqpz8QiTdENooGrKN1swsjZFT10XabyGWg2P9CvS6oatEVIRHPvCbQ1v7A9sD5q2fhsGVx0fsM0HMjqwjcZRrdwZJGj5SNDXrICECT8uPAjxNJfMufTuSUT2teUa7vdKSEw5nd7guWeW1GNB68RVWHvlVXaUbFFYr6Lti6+GnvDomQlNmBuRxV0wp4WC+p9tkiFiLpxyIbmZ1gcou2CvlQDizxfeKtN96mm6lhPqApxIGELVid/QOYwg1QpZYCcogDca8SyTPGn6ynKdseFMXiWi+wiCf1Vvdlr2qc3D+I6H+YIiFPTgIJhNl7af5WVC4L/6rnXSbSfuZcBSePzXEkXDATtTg68Pmm4yc8xnn8j+tx0D3kUMymJB94kzuMKbkv5n8JAQqZV1dSsDx3i6RdkfsDRMnuTVrfVXbS+MHgChFk0fJI47HZ6JGIrJRBUx3rKxeMxxfkgFWms5G0aEOSVL5CZ3M3Og/n81Pbg7gc7ydKAbnWk8Wsx3qHAcEzD4XpN1AcINFsH7mRol6vgF766HBd8stJa9SlRsSqEd5buCtwW8Z6XCRZ79efuQEwhBUY9pe6FAp1JYcRnUuEF0dqimW6uxzrU46Tx1qiHs/eg0Eo7ojXHayH+/VJRvKgvlDBsHOndb6lqQVyMe1DXdBSJduDJ97vtDN3ziZv1rFYotrIjkVsug+H7+dMNVjW9fgPZHjrmDWRmD5P86/rHTE/gwZtb7YQXX5fnJMN6fwGQI2L0HJhQt5FpKHDjnsoYABwOaUQmrARO++7WB2ukoGxl31kuobx3fk7DnwQu96685VjAkbYE2BIYAo+PahsuHUZig/QYp8qRFh9eQ6kKhAT8uBFkmA/1FhvnoZ843Zokzs05nrQF/oWRKBklfenjDxahEyCeBC9MSkQate858phmB9RH40nm4/TdYJIzLfpv8jMDuQdNVgssQU3+DCNXFL03UKRKdbigjfEt/MfQWtKNAAAit0vi5K+QZw5fxVik+xazRXMDUIs+dQk1xi7njT+9GWkuOE+INPBXJjPslmc1roS7lpT2N4n95fWW1DBK4g3UonZtessQ+4wQWg1M4JldzpVYuh525LccuWFe9tQTC7fvFTpG3A3vuYrt9KZrMIV4905GsSKey4hohd55NZWAdK1eT6ng7KxDxhifAHP4yTQVhtMFa/yR2cvVNKTQKB5kjJNaKHaZW61rGeEHHvGbcbDC9pn0tyYLD783PALRTt6ZAbZL8fhSM+QQAINZNubtnghAZKI4FXKTc+nt6lvhUYBOfoCTNPhdptvyevzvXRaJTebUTvDRZHU6iVcvclV+xKSyUShDzJzBF2mCe50pAWa6xUi1zjRdmm78UjfU/qH+bjYYqOmt4vfOwguBIUwBJONMgACxF+AGPzfhoqFd3gLg0I1bhChzuFpAtikJjrJM9VSsJHzccBdIR5vvJ8wAnJR6oD6sRgCU0PqSs4iBrmZUoNRuHaYGKVqvt2JBmdk4QIkuGTq8FfS6QnAviDW/eD2aBAhMvoG7zrRLfXdmv5weEmUvjfZPYRqOjn6DKo09+KCLLowejZZ5Lrvok1aQMncfAAGo+FA4eduz03ey6f287OgYORppSgfB5R23WFPJDpvgBYFn+aHaGESIoI3C9BxhnDHb7091AcmJQX6EJhh4wFWR2fv0TKMzpdo9+TtlfizjEUOBoKoFsgc4JIEZZ89YF0zOiZXA6Hm40yqIcJuQ0RNNOpPQ0C9J/fx0SUx8qdYyP0kDokUZ8Qyt1km57KsJ9yyF6YZJ+d9nPaXCTgyQK1t8faabghVAzgqDPJo9ufy2+SmK7MfQAHzZrh94iDeBhSxI3zHz1SrvVpI/ujWYqEAWaC6Pbdr3m+whXFKRPPbdbbHHJlv/EhtuofMlmSszR2ilIeE0WrxDGBPqIR8zLi+NjIdXUCm3tYhBj4AON2nXvfUX2HBMA9LGw3Kx5AcKRUAhAx8rQABGjtJ+FTMSN3iCKOYHs4pWCKclWXFEi+HsEHa+qVWkdFYiQsih2VtFa9Z1IPgD8jGilmVVAdsWIZOV4I7YXkzNHGzLxhA1FVrNzAVuTnI7sAcZSR0iOl0Wurcg0CRxdg/48O5MoYFXz/cjVkHnBh8XJbfdV5B367ONxR7N49SrRIK5MCDT0SyVbH2hg8ybMOztbJf8gJ2zR1L7jDTXr0S12jL1cRNl850OR9t/Yjja1esVHft5RjHhFlB+vziPCZrTRjMJr4u/Ah7RXc95MVQzg+BkmkFmMkfYKXfipBfzyjE700gKkKzL2uFezgoMg86JSo6mvO5oPI2KjcGuUOUESDbaEPuiv8gVNHcyiyzeXakyp4ZNonkQmnnQiLWjDTjaSn+NLX1iPIrGhVt0WWPLlEAjBu0TgET8q7H4AXDfB5FvbchjLd/a3TQ1JP/j8OUuFG4jVDoGgPD75FnO1SniOE46u1V7Grb/hy0BFlAAREaspOu+3xjUhgInruPzAEAyLXGZoyBHaowDnBrw3OyxuKYBlXexQUqgMu4v+38Hk1FIwUQfi3vXBzpVbNBqnM8BABX4C6lrdl3DGCdlxqZPQo2bQ6A0Q0S3tH0E1QCDIFUqhiPZJcabhexC5maDOQMY26IcMwKvMo0CzxaszsShLHVqWZa4K3gTlV96hXuqjvpv0ETuwmBvZhniUVL3YJsKeaeXFXNBvYstP0/NB/4LVTSx5IKzK0Q0rmrYSed3lra47OeNL9+ad4bzIIKlYa3fW8wG0V1N+qsIxdAW95Pu6eIJgMS7BVVCZhh/7WNRMAvbmTWaQLgz6WxQ5POv/dQ8ucaZanusAyEg6+m3+/1QgOvKCTh6PHbZH/mRqhDpYccu1ccaSdG1IA9xZ5GLpZImOwfILgX5EBjPe82rwZpWdvdRW0+++9HMZh8CsrYuqeZ/HIVMfIbtavwJ/OCDwO86JmOQAG1leo4/K0d5HqI/49ZQM4YQVEPc2/09AsQ9yvI7ESEPeLNtrBcalLWKyrT20qXEMNWu5riCORF6rTQGZsBzSTZisz5mWndyQOqxf3hnTWiKLMsP4q2o+NoVwwq+AU3T4SSt0j0JmC1RSV2mtnUOpTr4/LjaZ8JHkAZarDhGYARvZeBz66f2dCPuob5t9g1yLzG71I7pGkpONJOl7/88hyo9XVCBEVgqXBaoadPalrb0ebhI28yk3QmQLta3GIhYGZ/cIqJB/XY/T3ppNOr5btBM+ICQg90uHs2Jtx56gEOvR2KBzpjzf87tUCU3b3kslNMgYJmJaNegl6s2dNJb1xjztX8/f+slgsXifYMOFVkLzS0U8k7vo86uO0H+8NqGhMLpypPc9jnJeIekTKlV9epGKgVUYTJFevTG3bWRq7UF66HCNIMKOCTWjCE4f51WsZcq1tprwq2EuEdpeCb+KRmHNg1ohstB3jeqheJJGDHQbgTQnDKx6Q0lxD3UVMDgkUxr0KzwVFov6/zBzIPPTHV7EoghEuPZw+DQ+C3vWPRI6wpem+gskbMaaX2CBoaG4iJb44nbDdSII38Y6S2yD6AhYys8+YfmvbkWvm+jvmgMIQb5TYgus9CpYUIhw6VZZvwCYM/xdkZyKaQmE/fQY8UZXDIjUCcdJ6cIuJswwz6+ht2deVdiC709VInHqDwISinAPUuzNSJ5NaOM2YQ4jSocc0rpoRWELfLYzXN4kcEr1A6+cn6dBoelRll1yhPHeAPOrGh3d2/IoH02r8uIFMELuFk5mIrRrWNk7TvJF9gISfxfQvzI3vJ0YBxfSQRdnQZS1EbEuKnFQxe/yueCv8WwBV91ylOOFuXpx6KjqGGUr8gaqiijQ4b/ZjpkOzkWRJscLVNoX3N76aiTuw2AHGkGOuhLNdjYsTCxgaM226C4lwVIo7uqP7hrZnObEZkpO5jUXYyvNY1jrTy8lyafN2chqVdxSYEyl8Z28VdbWbjzFOFbipgwXCxKCLoy/g5erOFmi4kXOQwRA4WmklMtxo6Vs3CIJd/bjMyFT5P8M6ZxUrjHeXW5+K3vZiKmU6YMyepSEw/3a0e9MJ0zBtunxxVyfQ2RYN/Stb44vhfGg30rv6yMZXYJ9tg12GvWfitEFYFPUQgME/cQZK+GlytkyLkxhuOjP+/8Ny7NfdnSx4fOwgyqif4crrAvdFEdlqn9aO9qvZP2g49XKIJtbIpEafwxQiSO3SU95Khv8eTimK8Ua+cF1kTUtmAmlPLzesGCWMa+fPXt9uuK/ZJJylZ+3JmJH1L9AztRpwUk9Dh5ZiDp1RkCwC+klAfwN8dRD4FLdtVSyY/tEit4oqjDed4rIrmIo8hrAyMITkIxJw2IrPHWIYw+ldrgTpQyi1B0+u4i9THWmQmpoC4rSYuuDS0glEqcqpLyCMfB4OHzbpDyMZX6G5NnQDp24fBa84SCUc/mY5Uigw3n3wP3J8uYbSZWROGxzH4pKrGWN6+zH6u9EYZH3Qy7EWaJg2NsDHJ4gHJ/6GLCRerj24PigDxnpIt9bYCy2nM/fU/xvGsHXmQdZMG9BoTQig3g9Q8Kpvc0Wh+++EDTvbD/WgIAAZXORDACW9Vd9sFtyjf9oxEchbkH9ojF3z/GuOiLU5dmnJeowy6qCBUw8DxxJrBTAeHrYAQbrpOA9/tgMgs4Fn4spFFDYtkADIUPiDMUn+Orb1K9jSfLMP2JxNrdhAK4aWZldToLXAqy+wYMWeKIl746La+HOoDgTfdbwLB8VTId/k40qnMUI0BD+F3mKslEs2O/wP0GqFDH9uZxRmIF7E2GoHBnoz3ynSuRhHXgFl3sjZUsnxAwkkiQvX7UfMj7+FMpXaMXGnMb7j2RqWqHP2kVTRxSFowI+UOXQyQf7ZI2oFSAOTTu5XHXsERiIraONmaMtRCLVGoQXS3vwmawVY3kbcZcNkzRMn5ol5AUYMKZESjz7nSaPmULVxVr2SDr5xNEXe1w7zagDiyGHVa5yMFZW6PZw/ySx6p0zK+i3/A2O5dQLKM8oq52Mg3qW/eg2XHxz1+Sn82BMLnj9bqfJIMNAoCNuoMmmCgrwfjBBfZumsbObNbwst0HlYB4AT5bjOl3cQrWKrAfvAq/HfNQluAMmAEitDFktyj6If6As7V0lDTu95q1+vy3VKBe0wVDMdwaHj7WVEsY/r0MH1tF7yBOYnfnR7hj63MQiCqqYXIsorxDEHhF9SP9nTT3Ti/2R3Q6VS3Y6hOZLB8vz+93fKHX4MaioXcXJTIhkPap9My0Mr4okPPQu3UPxzerX5VXpxZR6EAZwWc7WZPvgxu/eqrYkvMlTxPOa1KZogQDHMMa8B3sgYWECd5yV3Azlpb+KbU5f/n1siLDvesAPfCHLCsXScku7i4V/aUKjEWYcJAmY1fHezQ+pBO5zeOINQzr+modqpv3RY2BjsDUQ3jdFB8ic+9QXOUBBIf+Arl7LhQsUcP7t1ood3AxQx3otw4DKmldOfE8CisF2XEP+RIAgcvQhXA0ATCwARQAJKEjgeMCCS+wH+rb2YMZ/fruIyJVEsKPgsgYQYTJSI9tIWMqx8B7BW7JR2A2VN5H8zYexzUplGf3EunCcJJQRR7WRrQfTvC/O5+/h9ud37RP3mny26ZcOP1BSDlASJG2L+jfeGTUXWJJ2ZVCTaINRgBoI5+KWhyAtJv/x/4SWrDZHt/HN2ZvZExP/JxYh0fVDbexSOWweTBY6qncoynACObEgNueoqeZ/ZEGwhccQijzP5oLATAOBhNLqKrXaDJKWhkUAhZ9Y4M/B8M2gAWyWV9oZklrfnkB8WTJzXVyN7majrqT/U0tHBvho04KCC0k2ytm6/en55a+KSQrjqf3TIkNXJOuArZbOmEoJc4LvHZpV6ztgeGABdNhyGqUGK8YipHNMh3HB0lXouJcASOFXv7iycVGWzzwXsA2UEsDQ8zhKVGIo/E1vKPtxObyAj4w3nRN97i9+ab6DaPw7UuR20bIkIPv/Sfov/6phJHdmKTc/0RntZ7tZR2Q7Iu3EQh4iRDNWVlv2tzWZNE491Uc46nj8WLPnk+3E0GbEKIfwibJoYdG6DAGNwXfA+YBBL563IFYYPQHsn9uRwTHSfdT8owJ9JXbbQ3R0BgiN3PD7e8bHDO1Vcogi+Nuh/4AQa5W4OENSPTZnvM3aqlbzbYZwX/+wtSsaWUJb7YoelTjHFQFpUXGcGk8aZhNaF1YQC2Db2OUXM5r8TgeKRx9jju0cd47eVfODesCVizhy/IMt1nIhJiNqkU1ySEHUs6dH43YutKahmjzNJZO8gFwoCnbMUdrhlefaAPzB0NEXS1QWHyrwdJvSi8N5MavjP5OUt/8yKEMVt4RGKqGI+13t+i2Qs9lBJG7tTTRVn8mGvQL4Ldyg3mouak5TRYa8HXiMOqMvjMFgLoOLtnxz7UwkfVHjtwxEL4wYt36nQM412tS1edwjoZl3UAf8kC/4dpLzaMaKd3/jmJS0DMRBWvTONjd/3ZwaHl+2wRMXiEzy28cENZn3WdY4Xa13oQLBD7bzVFt6Gmw/LFnc0bRmKziXOfMCWLMgwwDv2kToH1YNheAOfBjqRvjV6sw2Y4naWo+zJERHv5+QfHonFg30uLwLVvTsQObSoraR39rKeyc2GanD3klZVG4OqCx6qJL30YFFr8eJpdymyqT/pIxoso76n9d/VLYV717DGa+qZtEr79BEAmkhE0hGZMFXCMc2Q7pE1zNW8G5/ix5bXHuneaFRY2MFP7eEFvk7t5NHhO67vuEhrDpCJ6XHsNohM3fwsMV1J1wN+ABMfLLEikkhJMOZStsytflTYyWpn+lO5WF/qzrmbN1ltQxxPKEpbEbamcbbVAAGIAi9qQz7CJSALRL0FXaW3iyCDrDUQLtu+sgNQ2G4E+Jt5wntZh/iGqXxiIwqUz4MA/5ZxboDYnb+z9InKuvnUFEncIhwaC2uC2EvVnCLhj0frL7Dfrwahf5Gkitj8bw430sXw+L3TCJqlnf6W4TzFV22O0EmZtwmq5LNYxr7OgM+qk3em8KRWup0JVHvXV1OPf4WuiuHSxyGfTTq0MgAAACSju3mMiLauQ9FPAjs6Wzh4EvKjfGudxWTn7TsmCfNLQHtvnmnqkW010XARtPWfRxcaAlO1tjRfsSES2/ukpVjwDgMXe19eOlNKu33sbXzP/ykIpW86DgX8HtwGgX0KFgFG49wXi7zoxAyCsjQi8Lj9Sleh3BEJG9+QZ1Y3+kLd/R1kA5lSzkdQAWZcCUhCNym8NtRI8nSCq+3tYzkzEwNXGLEtxAGSB/VqbX/y7GLDuzZXZTxwoVX4VOzg5EqkO1uUFDHbHMbgBCLzqh/w24fI4ucByGBUsDxsjtrKMYcIexwM2En6xSWRETurxyug4irOgdJZeY9ctddoywfLcO+ZlhEaIkE2a7HYODK2W+GC4wRUTFKoIrC+0k+K147DnQr+L/VwyPeR7p5arbkZET7gedKJBCAG4tyAd5t5alJmwO/9xKhvsfl+v/fvkcJSmnOblpg2ufZDOOxHqCoH1/8KpZR+u4QmZkW/HH8ZpxeSeU5ifw69rK/mNX0ZQZzIlXiLZZeYPudnFFDX85E79kBusOpVTDO3Covs5bTekrkbauui8tl/kZlMqqykUKM/gma3ngHymXb6eVHQQYzTmE94u5SQOzByAnCX480SlGCJN0lK7jxZsV4DQfXgALM9Cpodv4cvLnYT2K5w3FWw+KpN8lk2xvCBoOMaqcsCt96MU8wSZTOOjMDZdtvyzxo3/qrQnGv8hd1uQRITlSgypLpVPyy+QRgfrdZ9VFgRgLTSBMsaY8eXwD6m3umlJPq9TeErc18QNKStJT2syZu3tBTlMHMcO+r8OINWcUB8kYADRrIOPrYhaQy2/OwsplWufkQF4qqaawrUQLANao8bat2W5JJcCqUd1hvCNeP/2XbhUtUgWN7ZkKznCQdpH70eglgZJAZ9HYDbl3cfRlzAUdyGmX48kAnmRSaIIF6kL98iAdVG1Fn66O5EPNLSxSQUIdKBt7E+0biqeVUWPJejsI80SNcsYhXvC/4DoVN4xjBs0MWSWCyY16F2SzQxxVpBL9+DWGjp+4fpa1cSqXPPFzjisNKjbpG6XIXeArxxXE9BXrl/M33DkMqDkzkUWTJClx1+rBth4xTXzWjzGAKfipKsvgy9Dis1YJcTAPmWv8axOYtvQp/dDyBnmK5TMYKkEvImcKatPKgdsZ9aabjXUf7f4AkpRmEc2jbVVNnqek1O7IvtEU8rO48HYc/dir9asmzsXYJGSHkxMfeGT5NSmDI3eqsdnLf0rLKdaBvfB45b4mesj2CVDmb/CoY2eB0v3/PAiYJ40ZXVx5x6OICoOYuuxga+6PAErTRYtKZOYOD/IHemKbv4CLb3anpbqPLd/yuNPCu62lAAAtdlkh/8hYneEdL/adZ7hKkOzYJaddtT9SOmOSFg0opnuXvQmn5WNRFD+oYhm/3O2T4e9RBoOndiPmpKTr2s4pLXDxZtEj5MS1YBq0UChqnsZbcRCN3jVhG+8g1qrEjguyBvKeoFK2CZ+GDlg/a9nRta2kYioPJo4//qD+JnBeNNrHAw8rju4+HlNWGDaq9WusOTCfan/d7IHosNs3SeCV00a/2nuzq4yAPR7WJvGxUuzJwC8wLd1LK3UoQnoBrDVpEStqDQ6KsVEpCNeYyJ3aUcYfU0pcVNcNvnFxbGUzJA/bw6Lj0E4X81ppWYh627ukguE3FKQAeiBnz6SX0OuNW+h1RPY8Sp3iiUHL+K+FCfHX1ENt1gUhzFvJaBwISs4ans+Sfs8HoXy7cQ2ibgctfovkF7UwtXzjZHSlgIyRQGreOAYADXihbYWvk2Yw6X1VgUP7QJT1OJzpemUKQvf7WL+ENQaNmHZzUoifIvqwtEd2fut0DHlncL20+7LwbLMHzX+Gzei3vx24WPlD6SH/sHkCdBgiDLDsO6cT7BWsp+SHReXzWIhzoQ70l+5KfieP/b9AQ34rXv7/KMeCP5HIofP+5xAvFwpMzRnDCxr54ZDcNHdrxcw9X6d2N7zMWrZ+a9Cto5Tsot3YwXws1mZJtjB0MQYJbZgtMF0jYky2EFP3+TUhq42NkvmJIOZstcQge9CTvoR+T2y6YHWixlhyxtjEsDuUBk2xaNQ1NlY6ea5dL71twGMKxfdx9VOF+m0uYyqJ/j7QaHvkMVcm2B0/V7UN2FC9SnMGWAqObaf4stXe9LrhWjW66HCn33kuZNB1iCkoQFrLskG+UzxUh+FiBixEbGcJwF60jOCgusRGGAp0l3XZtINw0pb0tXVCUfd9DhTxw5ToKInWNEcbwvqKbZXPGKdIMFXzYiG7gBVNTWP78dSAiirEJjwsPMjEltK6ZoraQFT0vhbUFcV5KQ21azYg6ZLCxXbcg9h1WbNRDs5lSh03B82kdKnQBCjJYbpvF3RezXfHbJVMXJ6peNbFuNHCK9TKCnOg3EsQAmSKtt5Dy6CF40DLyw43BFyAUF0/IbrwFauHHEKBJ7x3KrFQlMHnlCwIteIDcC/1Wpzb3dCptZeI4y90ehGqLczvFug5LlaQ/cQFUSNxRfLKMaDtcIAFVQImYjm83xlXKQpJcxH6bYrfBCWg/x2u25kHONUIJOwqI/AMvKAlCQmF2f5MO4HRyMLGKaV2nldycMoxv1oyhTlTC5h9xWvmvU6chjNA1an9X3qWIBACymU40XttHF0Qt3XvlSUEArUpYlj/9Ka4zBdZ48uqCn5SxnrDEMmALnS5docwRShsi5UAUIiZKhNXD7tVymHAt/BC+asTp71yC814OBoJ5pkISf4p/D9lp7bnjzWYJYUUY0FojfFUUZtDMzVGzDtdVhipbbShmjNl0f5o8d54OFislJ4YM6BX+iffXUU1L11xnjcpZPIO5NnenkHSOnn+ToQSDipW/t7Or+kL0VAgGuZnL9ffygn3M4IBYRp1ofTyxr+JZcHstx5uoVtxEgCNtLwV5NSOYSNpb8kx6iFeC1YjZPtyBEGR9Fs4wGrnLLMJMxLhWPoH5c12BKbbjwedoQ93vn9iKBLHd1/Gtqnxs633Yek+DQTlKBTBvf7JINbDFqKfRbRQUR/kNv4y2mrOZbS3pGYpnR7oH4G30nw/JvOSE2no2t6RnU7beAkvpSGadEEa1j5SwAAIyQBixL9HxAY0/N/g3A3wbGPvKhS2SaJiwn76g0b0Co3BqfeIzrLJ0Kg60+WJwjiob867qvxe+F1T+5a+eegezyYB4qu7jOMuXOWjYLG+QyosCMHSNOD2XhVZUZHDi6dq/6nRoIZLKgykbhJFxKdQhav/8hFL9ErzRVUQK9DCp/RyR3La1WFrevBaQCiLBjKB05JntcoOQ/wJwovJoW98HV1a7EMhHYDBYdfBl2AZ9h0HvIUPFRDg4xvo/VKA/VMe2qhwUUdEALdcPy3xcbh9m5U1XYQDS/s2mWUIk8ZTg/CkhVKI9QtMEqeLZWlpZ88i0iRs0UPG9CkLXcqZxo/MxIh09xUzHu0mhvGzWU8cqTAkx7U+qo2fEeOtq3Fc2K3LxOz+orHgvzRp3QYHcT+Xc05QWh0b8G/4wLSRpYK3dhHPzGtmbnyNPw28VYTZ/nwZ5eGzqsXJs8JAPMFVdRRW8qcAd9sO1fyuAhSkRo5rYSXHyFKgDWYX9/5UMjViqQsqDJWyn0DTvL9bZWTu/+pi4m03jdM0Va51U8CuIJ10I9EheNJ3Nsj+EWUHg8e6dzMT8XwsqQqa1wBgoJ59RwMh7guxIbus4lJ8J5dFjqIMpEWF44/ijlb7feIy25jTturMCl670VFnBWZu657+VmsjvPy6MF+oIBGhPYTPxRUmCypxshWEdAg8oj4YNbrUKz+oKXvWDN7AX5KfTpK+ubM/SVVhZ81taJOG7i5vtRYYLJ8DMEl9KHcMPifvhgFQAhary79MgeadOXkGIe3R3E9wHqCwb+4VeiR8+D1Hbl147VwukGAMMYeGH2nA2SbkO8nYwMcGGO1Bsie895TVmJ1c8yrFV+bX8lHavnbxk4yDkfcFRdeTYXOIZZjbEFWcJtwRp7Mf4DmM4ln1ZB6a7fXTctOSUsOwBsAWlOX5RWwo6HLJ8Q/BN6AywLgKvYFpVuxI6IKpCG7FQYGl8lAtPFLQwFCK2qhUmXCcs95u32JL6wxhSAswXniOkcex4aJIB4Szg4nLZ7UGWAbf/HyaiSkH2YilR2ut7bkJ4mcKL25cg+pwEcEygHhtYS4jMywtZy3Q0PGhZbG4JpLeCrbBDQRt0Qt6LUROMK8Q4WT+2LzZ6ue63XSqmGzKpP+VaA6bqjBAYW2r4QJGBWc5nuCtsZ4f65de68IoCmdDKzKbYwQCvqyLAJQ3IE/QLeBx7Y9syClAxjNRfFTZdmV0zBryEbgBJe7ODTVklM+UAkeSpaqbvq9bF3MW8+NRtHQ/YuKECgCnzKD+7YTKi4J27nkIMcjI2eWapT7+99HjQNiAVlEnifiRSYkaXwhCealrBCNkb79BnlQ5kXvu5lfRSMVDRw05BpkE5IejxFnAN197+2AKM8T5QeUdHcDx2/lPpk33KW5wTEcqHJFsPIXp2dj8KMnmcGIXsGQL4hxVH3mWuX1VFlNDvj918tUKVCSCoBmaEAd/HelB8+d34lczligHUWtnxeWjrpq2WGj/HFT8nZ/Px0PGP2icumDllczr2lXo2mVsHcNrTWx70JPPfTsPfSUYbl++FQgA8o59pjK+FoTwhBjYnp5BwAA/3urcVq0DEioFI0I8B+KlJwV+fDrvByXEmyOtzbS6up7tfYKv/SBgeaL9RdUgNJHdEbH9oWv14cwQLeF2W1MG1jCVYfY7F7PxuaiR4LmD/NdcA2MZ9t1Izq7TPlmfBj3B/BHvVd7iCfyBcwMcePW7JFLQ0EnegaEkH8YG/+FGMjt2el/eXH+TMGWeYp9RDtgZVjNbOApeiMFA7DvqYRNbNdeHlsSI6AAGMCarrJFWw4p/GJGyzBlmx+XraTNACtSuuVKzInuhso0pRZQSLKiJngaBYhklkw/jnJbzj+r2NykCVhJ6Ze+xVk9opkvKIIR4gSZDe3BoMfT2A0wROlVlxgQo2J2LY65WbX+1d1oyPDhV3C1U+Y7ZQCNJzK9EdtdKDcB71NifTWVQZo1Q+jhTXDhwMAQ20Ne4nLes6aDwhz2sbBQi+3C8otc7EuUt9UbUeLkRD+96BmJ4aGvjdGOV13bSLpNJpoGwfJz1SKhe8xSAqsCN108kRW0hT14x6lioj5CKRLcIOQf351RTU7m1Q9mzPND47K2VoqE768FiajUCjDfNn2K8ZvwMLeljm/2EINerJw0hzRMq243O2vLCNj+SXZg3XnkLJhZIPpt9AjZuAbeyt8k0W3P40IAdh7BmYyjqPgDL6fwomTqXH8bd3RGHPPyMmC4BVo33uodKvYCFTYHWpojulnGoOPvFouG/vkF11eP1aJZrRpD72mTIojO1n9b6423PC2NO3+Pmcc8BKRmYnkKDOrt00ccJM2Oz4ScFCAWOeAs2kuSKVgubyUKh2XYZH7dX1AICnPVrzGXDhnjqNlV2PMRBS8aA6Q/yZNGABDsFtuk40u39JceceCJEubuN87FgznS5dJvbGWztt9MgFpXZiA07Iprm5GTJf/YZTLYcZLpVyx+ghUPbJkqQ6OabLem94M9lGtWIlMekmGMOsZlDTkI9utHUA05rFXy9j/eTVfs15qfr/4nR/vUh3j5OSQcpWCg1AmqZX9R6J68o2qwdlWkXrJOwyFkMqnQyo3K0uJWGvPmdAdbaQoPP0Oq7YN6zNKmrDiEJr/M2CAeu0ahQ3Jc1GcVXGTGkrPmT0b67SNlsbTkyHjQf+g9cUZCUJBrjoO9b7w4t4BYbeX8eZoqds7n/wNwQf0k7gpBKKKPeCxNqxJWpPszCqOcvO9U+a7CZnLw8/JKwabW4X4GTrxEzmN+GsyttLXceniMVDU3umQzWs+ZNKCYHNkkg3C81SiLXeFpmoQx6/ILN3/KB5nsyNiJOCB+j2Bu3JyUzV25tFkFxcHSOqvhONEUOc3bJE7/EGKA4nuhvdSX7LY0ehogtas4A8cPfnvWAKcmllcQmd2V144AIfqSBylEFfCMZz8zP/ajGEse8oYkYsB9DAtt8JhjTBOmYSdieoDkKzBx6EFJvIRY6q93A2d9ytsZo33daokAKkqMYeQCRae8TcGIOw6k671wRaVKFzBmpzn5lWKCerKqEPgxmX22gDcSJMVH7SiEKy/i3Ykt+zVy0F9klbpTgj+1ziWVxHy+8o+xVPWx/57tJ8aasHkYvXpi3C2FvVjztwOoXRun/6hxSnNzI+LSA/2lYENMHxTkc5DXzcahLNwoEek9eBXYwqD10otT9/T8K2yMFbC3ZBxnM98oc9qkt18MK7xWUNMdooTL9P/pNUsp7Q6r7+K5xdqj89WGAiAVY9kuZtQ2r1Mjpf43vKkBOR35BOUgDL6XFToTzFVqC3TKyrFnhkIKnb/c0+RkFyEK+9d8Iyr1PCpLDAQPXF/GRaUcJeCJ8WvVsEk38LwhXWEnDGaWMh7bthskJuztVAOzv9v91CFPNUhUp0Jd5hoLsYgvPU6Pl5xEMpkfjLLxyArde5V96SBPL2W2bNx8nazI4PK2erNlQtLNSE0GTsAAAvhNu8ywJXkg53O6fTtK46IrAkcVH7Pr4j+n0vo8/qcDA7gGhF7RoTN995wQaCqS7NF5JcbSWNrIRhSS8N+y7rostiG/RQhx0ZilBf8yHq87sQHYnQmF5ofJDJ2bs+k1dPKF73RSVl4fBFmD9VPRNYZM70TPpJ5VxNl+I5ldNzf/VMPU39YgfW7ju+/5EnOJNUFjGVj5Uppbxoj9UND1gIk0ZuusRcs4hjNNvV68/+3B/n6tmnhdMyY+4PsoF+oQzWwhxHqWHNDDsEiLQcylgZmh55yQIzpeKNBrvZAnKJ9BX2X5Bu0yWmrKvEUAFZC7ZMu+7/0oghjQgpaIOslKL8AE0XajGzd8BI39sIW61/zAG+rjnWBtj8DkhPkuI8nWFXucyLAWb3Q0IRJ8ByuzLy3hFmYFbqWmc+mCRtuHykjbqxvR6xfT0R7ilxDlBJxXqxuuQWsnzhMtLnLFIO9DSKnut7Potr10TIkqQksyomp3VO+FacD2YpOp9wm+nAhnS0huKHdi8weOS6YlM9UPiSF4mUcgDJveiunKQ0u0mx+rswgT9pgIpdMbTheqr62guGGh2YU74tU6YvxRn7JUtLkYvkKixmArYdkUD1w9ImOfZ3dxaTkw58bPohVLUxwF1mfLMQ0jIcHLBdKA1ra1R348gr+oNC31/RfNfN6xhVvjCbFnYkuKnHvU6fcIMASsDvEQ0/FCzGPaR18u9hG6a8+aO1VGAX36aBxRSFQs9bYTzbo6qbKr2krQbp9iq+xd4j4SkeafEbSRZ/t40qvzXimzb5dsdEC5lQnsg24l5rXSOnFSEBFzWFE5SBaix2ws+THimsuuq6ON77Mruui6mjteP3yVpfy3apcc1oia+gQee75evtFpRWOg48QnDcKGac6xlwqL0PGmvjJC3kiiinlNMDehV0nj+GvmtDbdmaCkM2U/KOkiyw9vuxBjFKZBbDPdHQD3Y2zYalob9AzxwSJieDMv6ge185VksQ4N6p28GpK9fk34m9GrlK4GFclASk75hmnw2aSqtsIDDV+TsqGgxKAn8FHb0rJS816/918udPBKD7MJ1r2voCbv2X6neMvG1TdIP37ov8Q0Oegoj+X49UVCgY0NPKAJDf5CbLNlpVci/U/EVcZHwG7Cm4nwo0NPrCrGYl1oJv/SJFUeDfHG6nFAfRF9f2sqLe8xLvMdS/kn+YeANh3Q/V3gEkkCYnlDRKTk+Vq7GyqoONwTMqqcqDsqO85vXB4jZXfWQe9nmKTUhIo7FTqyYcHJcPGaqxwMSKqeE4zAsQgdw9PgcHmMhAb5EB9EgDy0PA5QYsFG90A+EPDX/r9B8e5PcZVaxofKDVYzRzyz76s+E+BOgVTzPdYv32b7ub4El09+PnKwUKamXuoiNy6TBNBfb2cUWx+gFKnhOgnn5hQirOvehzkDmXESjoxU7U0zd3JzHBX9saQFm9K9Xb6QD3V4vxDd2l8rAI2+C9kITuKNuK/g1+NVYK8mKoRZDaquhRxJGpUnsXkzX64VeexX+sipZTYwoF7QG9tSPEQbAw9lW6y+OB5Srmhj73konet39zZtdG4IcNNH8lVztZLa0jkW6UU83ta26fqKBx2ftTC5U109xDa9prR8B3VVeFpME1+3C8hxxGZgaldx/PW/f4ZnKr1zU5yg1P818Dy/h8VOGNefyqxAAIIzI+CRwf52uBFaAbhIV2gjPv7Bzgr9jVdDEpzUQ3Xn3BsZV3QYZPtBC+TKtLcpFw8yG3axoaVy7HIJM65nw7nWJkEPERRqkVp6qULPgTwf6xgeD6L7BVUiPymr4/+AKrPfK/HHB4os2k86SQRsU5TCXZSa90vqghJ2sm60Oxzoi1+ffS0f0Rwja5ZFAnDSceU6LqDZDnYksbScPhzqrtwzdj45n6ZG0fzPnAEaOcvTj4/XB5SC5CdYcfAWzwFwcK3GmdfwkrREc3VgSXM9pfGtUoWA4gXWy1gAS9vOZWW07Wn3zYQh3/5Ml1KPteRtr8d5yJU/4103USBL8tftvBOQBFmthVnDLojYqO5fYH5IT5oY9rq2T8uhby81LPZxe5SY9B111QsneDulIO7pfqbNRsyLVowZgOf0g2s9KBW9cOroPPzbchqxhBtVCaCr9LA+hIrNDf4MhAeEhv5a9VCxs6w4yYkgLZMYaYHdQBDgb0thb2t2cVwg2+0TRLTYPNJCTGScU/Bb97dC6mwoxe/nT6Suta2o30Zp6hIGJ1KmPrJ889Y9apLduRhsTL79Xf1SuXP+nNgVjCkdKaR4cG+vuj//vfGmcKyjGhNYik/VxhTc6V3IouIE8l/T5SiXirv7Lp/NN7rrdxZm54TzexL6S1Cf/hk3KpE6V0HIzMhu/S8DZ46DD2yM5Ix6bydMTLhHk9Jr+dGzvTDlm72kk8t3DUqKoty7F5CBIyT1MvGhExktlO3wMZb+Oc9HAsuEkevcqRoeZsXIaqWdDyNi1XLIPId5ckLjAoq6naAK/CbbM3bZ1clQVDcMKDv3cBvTcbEuMzEC2n8/X1iXdERPVB3h3wVbEN4gFqWqj9wfahv1UbF70T3IuCzXkMFe6s5ywccuQ9XntHv0J73IvT9uY4GRbw90e8pnoFFVgMHMe8UiGRZFeb3qIlnjv0ejLEMvR5u7kUvD+GAt+vNA4padBT+Hk18USPBoPWSob73uBAbz4U+onUUIeHiXCW4IM2OrfnFga1hEcMvups4ceCbqMLr1ImhiWdmhbFW9qTWWErv64BtM54d86UfU3NOV3gBx+SUTRDX/eNi/ypWap+nqExUCBsJlh5o1dL7TRN8Wrv23LBj/I4o/lHn1C0DABPyW6WSb8EHvgUzZ+9t1B/qdjjhPw5h8srhHom94NLCA87/wUEFy8FQLEAhSD/JtCFEWBmDnhJIVM4Ps40KOCASanHi/eCAUHRg6tN5LfJ3KfX0N9etBnl8gNA8ILSZFrMMCbl37QzsZK0nuqLw404uhjIqhbPmXlb7+jZUgnulvwz2BnCnXCCthdrb2zHtwbgyXklbNnSkptc04oAEadu9bZeRGYQ7+NavHkWFLnKibmJ3kPP4todgAAVFEIxAqXtXwN0GyR/Lfcmi9QW3/594pZwnIv63S+3Ue8kxir4sxV8eWb4zpBSBNCHgncJ57CO78HQ25jUO4wamrAqYEhtzBWVAocyYo8Yxc4NjVzl2nQqjCzu+LuuJcGYjhQcwT747ejkv4GSAhLnIF5KFD6vzaWZ3avZicvEotiqhzTDFCyV5RP1SksQyMsjbRqQlUM32nIRyadnsnKl8qgiRz/TH6LhSG6w2aOBu/6fmEY7fDCHDUVyIoFx060v/ueJsbqFxRNJnHIyQAXJO+MSAPiD8laYm+SALNAMWYEDuOYCyVkCRU7f8/baGszXLjBMj6YCL14X+EYXIoaoWtP1Yv4RsxM7JcaId9Z7q9dO3tz0TfXK1dJ3I5EuTDcTb6MwspfT2XlBfjng/LnBXJwkig5BbGH4LfgFa4iq2sqkmgBFNRqyxz6b+ElyXVk/6fU01mjf/1/fcvjzMti7kTNf9+Xhepqph6bgCnbie+lnqq7y/pXWBGWpZVJ1aC/TmWt8B5kF2PEcxm8jK9j6w+gLbP3UUyUSlJtJOMC0Cs0btp2kKYazHiRebnfuDpnK3VX3s9OMJVsv7odhx3VCwDuFFyMXyE65BBvDbAdeXAIjZAghsNpKyJGJO91HDhPexeeTQ1PWzhZi8yrR/CxjLc9IWuysus6czWSD3CAVWQ1KqAHHVRgtPfP084nO30KgxacS7q1AtebwXKqcf1ZOsvFFA9Ed36iVpzh6ZzYjvBOHO+TXTCgSPgyqgYY9/35C3TNUpNBHlBAGyaXJpiTXRKoaCeN6Yt29nRULG7gLnr3Mn8mvI4ogQO0QsRoTzf4wAcYG6byAQF3tpCofemVWCTGSNbnvlYgJ0bBke/dLQufp6R8PqVFjjuS/Gzu54y9O58MBrwO8efWw1QMv+84FAMm04j5erkEVqgJJ0gO4Er0oPkKlqtPF0vgSXjF17+Xx6QEX3+EiqRQe5uTe1RckRN6IyYiB9xSIlR0IyVv3OE6yeXxYQ/jD+cfINAKZHLNhDVXNCLdgLQdJG/C+Mtfh03MMyXf4ILegkmJabpIXzTtwjo2F8XdjV0/J6mlA664AF/ASouyN3cuKsebuhevqTSJk80Vmj0IBK3WuMWJadzzIHmeEt4ebM2naZSFFQ9mPtBqhyMGb+OF/Y2e+Z3z0QPIQtcUBiJmxZsaO2SwHND0QC4+GJ+XSFEPCnoycwYXkVNf4eHflwl8BLvWOgc55MK3YJpB5R206k3XkHpnpRCavC3Jw5CP+MnLTvKOaWnlNVxpzwjIcLqhqKKXP1ylmX8E9+bqz9s7jbYrVB0U67INSrHoKOLCFzOe7qGkl6BNfSEj4gmV3ubn46mZcLBBz3CGByx3tBqD7G3VWjbEH1eHaAA00wiJX+bv3GSarW+2X7mNc54q7j6Tv+yZfq/Ykf11bOcECyuDXCtDlDT7rGmc3QEO6A1wj1pntpMswWo/T4X8P/l4MczQAO8qS/3Os2joOPl3/jB2zF3+AosKRaMwLeznhIG+hFt4vg8FoBOMKmBmp84VfPmv5mAai5HDCNYjBZBOWo33ZrLyWY8F/ctg1DzB/MsofDG/RwWNnr8Du+kpsZunGfDBzwJBUopndILfjmhaTJSKci2cRLNtYLJsHq1y6bd4psBi+8dyEaIStjzZ1tik13iEvng0Ye+KgiiJKOsAU1aC1H2Wet0FCZ++2PKzvGEkBIq2judG35MQpHeAcnXJE6PX+SxqQMMKSXrfy09gVoujy3LdSg4TbQJbY0I50lBsItKHb2+NJIsEVAeAr+65dO/6TJDek2rzSZvVD+3eA3QEA7P5tKfOXrc/KzW5jMGS0OCBHYonMd8PkvFX1OP4QpKX3xKq0r3vSZA2OntcDIbnUGw3ORtABrCTf+ClgQFiNtKEMUFhVooLHBPww9pmgCGGmqNumeJxYpawAB74+YEoL6v7e/9Leh0olz4exLquqhO/lx57uNZHqYS+/y6SQwJnrfvLsWccZze7GTtWST/wBFI72ubDV9dcvUCiVnN8W2/ofC1FfOB3qe8KMbFtmQTfMIpOHP0Jebes9EB8nE8hyUnTTcRKV4wnE7Ss2Y3jeYnYQ/DV/WIT49Av1Tj91NB6seFRy5/hwiUrMtgYrUKaKur6YzlGJJDlqw+nuRIYU4ARF/DW9xR8d5DdAgybEcAUEQCAP3R0KIui47UW0HVf6oeaRHmVlhYi2AgCVstDxYndPR4vy23tMnrCkaE9kXEu1E+L2OHFfd6p0E7ODOSZn86SY1sE+M98ez1u9L+85rdYMQnQPKZaa/91XVvQjvgGyIM8G0fu+ed7/0yP/FVBeWSQWUq+XXoh9tAIUdBbQ+LO+TBHSE3elJTn6WA0hpugBAOhjv7CKAmiBftNPk85LMeSvppsCPIjbD2pLaUre9jomT4bL3+7VqJve1CByM3MOzPa56BxzqkwbhvQWlIoyPkoWwF+MjNlFLnqcoZpNCypvKP+DZn2Gbaw0izgUm1XyWvCUZQzwU6HAeBkP/NeZfXWAO8BlBhVnKeg2lZ1S42koMiwfQ8Q3N+VfELR5l+i46L6RmcfKb+xCq4b9Gdynu7PPyKzg/SPQHqoH12OSm0kABFUAPx4la6HoHef/y8mkqOOxV3BCiDN6aKwxvgZgOjOsazPUPMB4tPdrBjX6CttxNGTeuvBgQYY/jrwZ1IdMLYnKTbD/WdydTSbRji1vWlv0kHicTlXeOEDJC070wXPt184AEkhc6MNG3X26de4n/8wRagZOQvgFCcDGy1DPPSdsKrwqEM5bJE6WdwbFgTjjga++7/lIaNJzcqoJgvcCJihqvxckw/2kyYV/XMkf6QyDuUvgpxb6qZVBGdVZbA+qQ0WI2Dg1XB0KN+3Ayz8U+3LnIcX5eaRJLtA/l3W3NQ3hIA9iWjgvIZa1iUl7MkPX5wggODXn2/OV0i5ph7aJWQ8m968T6T4P7ZRSxTi9iF97hp3H+OIgelLpnm0qDDaR52gS/PtQlKdoPTPZtE6Idkxv5KzL5k7vICF9r38WAh3ZPX2ul2zK4Fh58rY7agO6v5ZklmZrddTKIOLciHHqMNnMjN3Hw1EASRy0U3esjeaRKngnwr+n7MbzO8xL/MIQFx9o2OazJijIQ9+dkF/0D0eo5yzcXV/pDiUuT7YBA2TbpU2MDijgqdkIwXRRE4+KgvwKo5F+sdWfNr2UtYHTG0pdFOGepwOX+6eSXV1T4gacb3YTjIWH5RsW8/a9IH0spwhMO/9wFfDk3cEKD15Yz/zWomV4BdPuHqMMK5ZtLxXUxFyIFVmEDLNYMrTMBcDkVZMbA9IZ5T2z87HWWrRiO+EAdELv97VdvwYzzoQGFbK0qPgSUuRDcBX+f4Que1yXS150laaiI/R3We3q1hhGpcHtDyENXdX7BIpTNoJpKw42lBfRpP3AHc9XN6ICJUTwxDbUKvx1yORP0ajH7CoiFab/zUsuyV92MjNEZuZJB4A7itIXpq0FtNM5BBjnBN/yTRumojEOu3z1FPbZjPkKbQQGO5iZt4eYd0CpOGnVbcBq7Bl+pAGy9KFTKiQeobswpD2sEtBNky4dzFXGAo2lVOGO4k2WKJA827sgY7lBc8J5P8D1BTrMpkAwKnmr6sWQDd3tzEcfYjq+gwX1LdCdA7u9fui9tqLMH40WEY1wi4vnq+JcAo4kuEI5H5ebG7ofCQkzFEYArLiCh+P/HL4owqI96KhEVkocfyEPa5aaHCzvVVXOi35JUD0e35ypafdpfIBtWYtktTkWrLSKbIQeBBronqdDMIzdQaLfS61BWtE04H4UaDrLvQQsvtMbViPHd/tSbi4JLots/hdg75DM2QIva8m4DF1I5wJfV+aVJ63sODTG9u0umnpjQ+irYYbbusL6HObyryzPUjCxl4wZns4eToSvha+Th/qpJCZKp5XhwHski2EfKfKGfekZTbSmhgkCEK81J9Hyap90TH4hucdQCbP6fbp1dXgAba+saw3HgxkImlN98WGhehbQOO5sf7iHBf20NLMBWPa5qJaMP9crqMSVo8imxSeKomapr0lbsf8fGw53WITOjqKFSDwnKWpcfkDEkqeTRZDC/50fV1/XBTLaG7QXhwmxpi3A3Z4zg5FOC72i6S65Qta3fmsNJ5IGEagUrn7y9atJYTdmK1S5n1hKM6qY9JQbHFuToJMha7dc4hq0IjZMLO0Rb8nw8o0Xso/VFWgzVtb64/bwAASq8cDnsqYJuovYttFWNQ2RQwk2k6FWNNCJHaw/IDsNYyiobhFIRml/Vjq15om7cWvcoIjtyKeidGv5K7gKNyXI/D+u5KrykdBgpKAD7ik8jbq1K8nzVU9bnzWhBV/0e95fMp2cWoZHrKGrWvwYQakQf6IgJIdPQBHpzLCSABRY1lVFq2CEbe3tL3dqVTTWFA5khvdMYP6H+zhobb5WJlXbOVZaYifDgU4ToezcpNCz75Pl0rNauHoKV4qcMZMfsR3CoECo9JqPplLZniGB0kdJzKXP7oq8J9+ydfu7y2T4JQihxp5l9N43/aU5deoyGoRHUw+3FBlEH66J7dO5EPExNE3ZvEBpPj3uHQQvX2b30YTqZ4y06c9ZVfkntkbfxnDhRWnft2WsfMGepNrznObnEd8wqWOkmTguYcF+U1LFPwSj3OPmZGnXz2h5DX4x8jq+Uxd3hgBKrJgDIhVwql07jgxvapo5Ex3Ml5BvjTY0ZJiKanEvXoJ5an284/CnRJ2WabYRVcvNt0d2RCpQhUNZYRAPxZ7xakQYcxHd6l4Da2EM38puS9zjPWJX/CgwrbdWWP+3B4l0UKfC1n6LdV21GVXm9AJ/G3Cj+DT+e6+M0Bh5K1oByUMi29p2/ASsNXG2otI7X3PMwbStrsaOdUEv8uLcvNRz4GEq+CHDcOhS+TMcfhCwR/6S9eIvLXntnKL61+Rx1qbRuVBAN87X8vPLv4WHkToylKQ3RNRCaehf72cXnQfDz0P8vGbqV9HEOkKRWFcOI1KFXEuT/3ZTuGJqKI3lKcISF3e78Uh8s5VBmNYLMt8MLrmG8GDWXpjvdw/RsghvfbUzomZ5l6yS7zJxJOFe9nJgY5xgFEZl/w/BjdksEaTxdYn6PlmCqdDvpSPYsS0E1ee1sEPkA4889v4O/kW0/dDed+YXgsG4JbDGLH75CwokHn7erxWiTbrfMf4rGvSfuhqnJnOZswvcfMBwyDLM5q10HrbYTbD13+jB8KWTgetCyXSTDo5v/wmVkLA3H848axZAmtwt9YSZnxA7pQJiJg58i2t0rfNVAKkIz3Elt6+IFCxUqXq/WeL3Ys7OvA6BNTzBcrcQoHuWJEjKDub7JC0O9Ct4KclBEUwPyM08OshW2IT/QeuWhzVF1geRSrB6QovHfayc+EMVOfCl9pPCLfVx1wc7wwm5s4q82tIV337ZBCSLs++zJWzl12WRCG4HeWIaRTg6dFJu9uXHeN1UnWjfYeOtfazZp5pX3CCyYVRQqUPb4yRbjJU2gFMgh6nuwBGfsqvzja4RDo3VOrDFpV9PpdtkySpeMaR+rTkkQzLOgG9BV55+u5b8wJ6HSzgqsiIFPMMnf99EA3b/HKC4IkKYGk+Fbn3DLqDhzO6UyODUTK13BTv3hmVErRYym/mQbjlo4AUge7lq7VM41VTygle6p8JjOj7TWsXk5ZDC0xUFAl3j5gu2KrYNMjQok/W83Z/XuGx6OxCS+RPuWgVuqH1Ou/F1nfTSeI6vTMhRdMZxmvKvKpT3HnVLZhFnTTYDGiNscgwplSj2CX2/GWLxYmjRRofWw2+sQoqkT2xXgTkjwwYQBvie694AaeVqf1NPt5XzGXRbQvTbBwpiEweh78lUtcNpUBWxHgpCPqm4MtyemuSowbXNkHiiQiSsQAEpvJONUPwqNCUbPuUQBQQQHpgDgK3IOn29sy/fc/V3qNxFPqX1teD1Y0NMdvZ+Y7Rs03lyrmWt0+W+iuWTpyY5UyQQ4yfUAJnyh8ojmVYffq7oV35OX7PK+sr++BnbnWefTixtb7vM8L+R1UHWgQLLr81VSmW+OOpyw5heyZLkQbLETSkBIBH3GwO6VNXk2LCvZaoKbznLLaK7tZVcupgTigb4dv1f0t42Ue/TpKK9deTmD/SsdV8cy/T3tAQyP2w3g2NTa6tqp4dHJoV1hI00+kLkwx6tCorcWcMbztyOHUzivtpNsxRvzZpMC/tJdh7HDU4MMY/uUU/BmzLP+vynYaK3QwB+d3nUGsFVpDn/ixVxeO+0CIEVmi5B2YLm6lVpuvasLnI9wWHHlaGOAX7/p1truRSr0uRI9qnuLf/3CrBT01TCQjxKnPDC0XMEQIlFQh4YsGprP/zuDnRVD85ZEn3Nmm0AdQadtpGYd56uNoYFAiltsj3YoAXDDUtxJdsxAqFWYrzbhRuaOXey7B+b/PbG7TCxk7R2PvnUiMEvYpeg+au3e196NHm1LPfsaBSkiRHfF7xQJYXZm1TqyN/6Ay+67CwBUU2VezoQKZJ/6n+MEQGkZut65tZLy7KiiSpxOk6L+rzYxsvIr4Pt0/ARuMkmAMpaA8bTs5ilMVUOv2q5VQ6PogPgakJTAlk9JEuYv7aK5l7W135tG8UrqvyF2DFb0WO1p3mD95fhxJbhKC0+BVs976xpztYXtcTTtsUW3JpiLZ1sdqCR6LQfNaMjfn38G6z61m+Sh9+AbHn/kyOi4o/ejEVbJhlBNB8D4K5rrRQDe7N3OYLvmmN4q3vS4F2jyCyJBGhuG7x/+BG0ULLhX+/2l+Cfoy16TkNp2V9hh3ZO05v6RqPqiQn6qvuzyKgGsG8xeswKMU0s4C1/ratWfxvPHs3H7OKVir5DaYy03/r3Htin6cDyj5cf9OnrLUWaNJAqXoBAMjWOGx4S8saalLfJnnZAC8cj2NzUBAoX0Qc68IDEyiGvR8G9aIU7e3UUyqh0rRiEAiRJraQz/iZY5AkL6VtYUDDkGUNhCokGzzTte0arWOd69oa4Bx9NGyNreXyFfWWERGHXJC6yEGucxbEXcV0v/s8O+u1UrPAvWgwrYsgL8d1t3GIAtwa5v03V/o/yHINVuz9yfjJnn4woy6vGkKGdnmKqV7dJHQTG34LS1FR36xw/9sr3lS50xxsoUDqaK/POK6swnY8w+13+xCBPHUHT4vjRW2b4HAZL4vLkSJCOBj6SUrp2oAEgiwuyzmGs+3qxL87+HJQZgb7Mk8OOKDWGNqn8jec7DWts6H+40xt4+709ASZ71TDBSor4Nw0Kmedm3XEUGOzy/BM80PBrq27gX8P+PFa6rGcuIrPVS2hI17e0tYg31ighqk6AfIPVkoXagnu8X+ySZhm9I6YKucNY7E92WB4z95WIK5ZWo1rGFPvoHhwlhvwE8LQ5SCBZrmz8FSr/M/uyUiUMXhCkQ+lAp+tQ+JZ5KgmW7UP/WqSH2772kozZO3PRW3ftdK8qtplJewVwnn2sBQk7vBvAIhqQN5LhcISYpf20HgH6jwAcdTSm/ycAlTfuC973CIGZ+l84ROqJoSvK7sJVc7k9cRNnSV0sNNlfQ6B7NR33twxx0mPm49EblQ/ZREnTArZSClcxMp/5FYzM9YbtuAvsjbcEGfl/lirvKYv7/wTEhvieq6IzkG8ZfOHv/eplReFraCTNb9SwAghk8rRoqIlciy4WAZyGWzWLPH2yHxIPcU1HIoL9JFdHB5qxYbeCtmsz+9qX/rQ86HgW4SEDD4EexhlRmazGt5eZiYVEcsIRWW+OaMCVP4wDq0qzihk2hNfIktR2OTGRYPIa8No/HLobm7Lm0QjHqr5ikQ8Pa4WPuCoCG4LSm0GZQFvh9Q535nZRkn8n8J3kt8JNViqWycr5ONmEIPzvNsn/UcMhVZQovo4BX+CeN/2dwV0u4p4hy+UCqnc9nz5lvUwho93DHGYjlqUpf2OFF5VIC4CyRv4c4aNX7f6Srv6dbThM5HxWcaDB9N5jICmP4w4QBsBiK3aAXmq1RdGin0MSdW3qy6jtAFux1gj6s6sNhdygenJ8XXYhS4X+/xEw4iV/Lw6+y+R4Z5/6hwI+w5aWXdV+pqN9wRYKXbaxbH2KAeShUnNC2aA5uHTTeSYYxn01l/Vf20vZ9wg2pR4SXwZyoR3TLihO+/L6wu0ib6koHsDz4ebQ/Pc7hYsqY2M575OaHm7qvr5GxUEft/8SfwzwpLmuL9azabduLB2QTgP3dPUYttJBqrObzVXrE1Spg4xxZjRJhACy6RFMKAUsJD2udrQ0de0w88ISBfnkQa8xHNZXBUO6RMhPKJ3HNLi2DgI/XMGSpup28LegqhNCKPUTOEDKx/Va/lU7DAa7/eFIxfBL+PjsW8SPJ51oOfYpqpMrgz173YoYyw3xz4xEmtloS/ZEt7anN8WWeKWdNJ8B8LmjVhA4FvkUO9BY3+lMum2Zd80ClhECQXdwvfWTzS/u/zZkAxy6Y4nN7DvNvmCFVNwkUrsIgfoi3gDB2EiG9GE9RPQ+opK/g8+BJqO/pqtxJ56K+siwcw8RyMLbxPPguJPNM+Oh84iqwMe6orW/4jOo9T+rmbjLtXh+Y0EPOabOlHqsulEVXNTLlzAcuxI8o5OehzAo4SRNT+LYKOI39M9yFRBSGP4lh92p61WzWbXzjmAREov3XRmCtA8MAT+xth9VY0xb9C0W5zH26/sQBi+Fs14b+D+z9naobPzfSJlFEZe/WaMDcOlivZnAfEf9mO8yfO5iPmBrPWiHMJb62k3bkUEqOnmhG2sk4giZwrdzk2cqo8B+QOakfyEtnvk/5ERL19r6/bm1Crq5hUuu7/e4qFUmExAMKjgR7nZPXNV2gqojltK4HgWsCdTkBXp13btElmPewrS2cRHdhheeFJVNoOiHbEQ31fVWfzUokt9agQFB0mwxZPQgu0a2ng+gH7GJLwGmJv3blqtU9ZIQwX3zhkx4KNH5ET4CYBIFRoAALBDeFqz/lBZzxmocK9AuC4GEGxWD1xnphM6Bh7WxlTtMYvZMw/EjUri7J29K8Jvai0Rne7EPy71w4TmaOpxZX4+flQUhVjx1KTKHzPVi77Vp6VnOFwa1oyjqWwAX5L/N2jMv+hn7rowVfOD9bxJV4EHBMj7pZKt4XtqTHj1u86P5B6yJXgkz3gpxttzXOZPJxkX7RtNOimNU2wmRZ9ONxXfw/JTp+M/puP8rHAnjCkSreONdjwVbXF++xDA7ahhWXT8x+2IjKoq3eNChN8JwIC9bhorXRq3fBv7j80ZEsN1OwEmrOaYngr/Kx5oWqbD6E0FPiMnfTtPC77wENXyCAK1TRkbwxczXf1+HmiYmgpebeX3shLewAHQAzm3us+5NX1YSknKVMwDREMC5AL6C8jpokq+AbPVFPHapVxNU9qiHtCYWKZAU9z9cGH4kESA4r5gzn/pbiSUsqsgkzLrsDmcX2F52iTnB85VM1n0/Ow2Syz6J7nmtZ/TfrD+EO4Cnr+hzZRC2uTfF02ivw57Wsu1DyYhyiWX7pdd7nkbnr1DtCy67tHS4zyZTwssOeA1U1uLgrLpuaUxJnCrixqg71i/ic59YFeoEaIEztjQJWXWXD2oxYFQ4GnwSi5fuvP3ut+MP5UzurbX2RiYNMcd+f6Z2Duqu6l59oH5qMqeQOltcXjFLREm7R/hOY02OLpjr8gx/ym1/1WE+/QoABBNGdMhgWSl/htgVQ2k9PXb9GYsqvI7enI41neq6HUu5EIpWxjeklsTzuStE7PocNnIz4AD2skpCVI4PwzdqMxM5nnR/hFjCNQxY2iw7CgzLfefjDK++OGbUkQjRYRPUeFC+g09GAexVEm+NfNwFJ9Kbi5WItep3vcDd7Hv3Z1T+YJaXz9tVTXZmgAIYGuSaIy8IklhCS7M3jGMu6N/NwtLDuTRyzmJ0KY/zE/Wc1tiLzwAJNdS99Ht+U4AZsuD4pWVAjYM0GqVEzna4lHPQi1lfmTXynbd3CRmDIF22yM6+IAMez7pNp5o77s9fYKnGRhTsD69VASk8SGoaET6ZL3/Rd+D3RjH0FxGCfxr2tLLgpw0qJ8a5bUm7qU/kWzZk9pj3/51qIhjMR82ZsHdQ3jb3epbqW6/Qh5e8sK2VQ1TX+5bEkfEaEGW2hT+VvF81u2qxe4z5d1AXtcCAUPhY8C9CV804z9tDRsg4FvDeqTRhgQjThBUlG7rh9hBJ7aCv5GmRBD+/gTNQUHbGY2Ip+N/7XpvIH3V5+kQIxHOvmLpldjj42WFP0VGqMciDzEQ6TWCU9C5nRZdqh+HQIZLVM1vbUjg6e0f0uggeIosfOMrBQW2SkCwBpnDKBfqJBKAZqLKO2DuDKnRCd+v6AVBxbf+bFxW9kABkOyriFdUKCJwXr5Wr/1fgrgf36bhwDrhZKIQ1YHltcCxlrWyv8LwuszI938gd94i2WOcbmCT55JQT/R08GbM61n+j8SyfpaoCxbcTwLuOIGRCztpbJpXDmrqDhc07ZDfqSqJOsoJGnHYY/pakYRGh3qt5uQr+F5Qt//MISitjzh7P3TWfkQdewmY6HWzyz+N22FHvCOQgTcfEOGsEloj2A57BPYlF6AipEjPYiCiM8NhDDqVEOceMDKbUA2MwaRL2HdeRSnOJAhTRl5URb6iVMkJ1AvvxC7B1VhWWR3mkEDO/Y6nXU4NPnNGLN/lPfEXx0EjvtS6twxApdGcz1YXFZ4dlHsIMPfwiyJDdTLkW9vPb+OvO6znbFwkeMa0oA4hvGDya3ilHcEHmerxss5dihvUkSV2Kr03TbXwOcL5LfiiTK0uZssjHfQ7eL5SnInwEzCAnI7jXoFnQa5JyMxLi2bAoB2uvBHOUFoxKamjWgdZJDqVhRJbrYzEfeWvCKsyVT89o7imNkx6qqPeKhEAsIlP9c03BbMRmLnTatVcX3tAtjFjjo03Mboe8t3cGw+rTI3U6dgutK5uI8oyvCZqy7fzZYU8gbZDM7+CRm3eu+szt51BD2jfWAORLW/ZZ0nxI4jv17gbK1Iq1ysxna2cv7PVBjCkBO+Agl0fUS8clPyZSH2K94pfkiu6Xs0X6t33xzslye9FcL47ALxtwQ4Fjzgav8DkeUSsp6iKxnecULsNnYVd9Rux6Peo4wtDF80+tjo5UfzowwHxIv+JBwfTYhU3BV1zaiFWSsWxhITPoOAlMlacKyRzH/ta9cjnU7QYTd9GM1DprRBh7J0S5lrYo5OB6y9li/ascoVE49VycUEdm9Iawky+Uxv4+/3uhdhWZqemmVcpSer49TAUmDh0WEEHMr3RyevHItqNvvjk7Su1ftqe1HZBLSMDtIDWG9YxH7MI+Fzhw99W5P6ThD0osjr0dvOFUOwAiSTjKIhcgXv0QE1396UD/XoAFswVV58lREk1eJqthDJERziXnxTVinFUbetRQz8DacIi/uUZNyUzAb4RXch6vAS9ZH3W2lQ8OeHIvJ91ZrxITUFl1ZujgHlfPyxVD//mJQHEQ+N0caJXYtMwyT5XVGv5caGlImI/cwkot4bPK0voc6jc/l1revh/AO3AEziNQV0fJAtO480HL62a0BEAAvIKIrqfwyJ0CzAhUyIXFm/Qm1iYkDjA+Htv/2on57JU011yx4WacrvxAZiUDAAacr6IqYlBD+PCeFfylWKccNerNatM/P4vnLYMTOiXG+u7n1DHjRSta13Vr9NwEvQx1P0zkj6H6W38dVTAhMSASZ1M8bXROT9Be1wjmXDBuUMM9cWZW/WRtvWx1MmwaIdW5YAPSEnoW5nuG2+SrWAf2c5PoOwcJIrC3Vp+yEAS9TSb34CzMiqFOutXVGQwg4kVcYzHsXzNT/kBgddHDjXCXLvJcAd0sWU93bEE/Zn/CwJg0EhDQGgez7/9NbFOSMcjyU8yM3n4jPkC1xxu0hH9Po6bCsSmrCCwxoGUvUQlqoGtra3oNhQ5zrmLaKQXmEEh0DlUsX/HPyBdXEiofvEsxj91OGZII58BypWnePlq2RvkvnNTqvn27ptQXahv+BF6kovkf+TC3TpCPzDzoJobDcjje+BK8MKrELU3utNL/0MQKRt+YBheYZgCD5e7KCGckRn7x/ahAbQO3cCgT2olY/dFQj8gxK+f5YfUfinxG602Vr1+KLGCFqlUWTaEhUJ4baqmXTD7n3YSn6/1MHAsRpBbqFqZmoFkRxaAboc2gekmbFU+FvQKuz6pYDM05K+7gLZxfNUCML1XczQgFYbmQytMJ3FQZHUYsaA6OGUSzaXFg9wjnOYCRgoZ/8LZEqBThxpE2HULtVj2SixCA0O5GsFP4ep+BOgsk5Y6BsskxXnjbRhySKMR1RCAAsoszW/fkhtc7LFdSsFi09sfsb4LXG4QRyfKS+NIxHb5SrT1t9Gix9rjunt6NBDP3V++bUV5I2zX3LkKLFTpbEzy+CxTPAeVdPhNZxrmRnVgNmX7jPAwpFxeKZoIN1olBes+afJmn+ArJYhjMRkvlu4tfjh/xlPc7E1caj60yTYQC61wTZDUXGJEIqMrdEhP+wx3SfYogI+9oZlwqb4dRog+bKnEQKul7wDkwA4deLnD3AmuZDEPSZymAAhI2HhgepJUVL7/bPkGhtDPwXma5jdzQfl810ZBbvX+nrhTrsZeJtOzdTskfaJ60n9s5BABoQnIx+AYhvfaL+pqY0OjMseMTPlWxwABXpKOXbZOh9ufQ+2uZVSoryRec21HpwEAkdILeu8zyNdTFUvCzhMWgh+1fbDue18G/Tv+Pd5op3ClGsXn/TqqyGVVdiQHaxsQzzlRjORAFfvp/4XCNtjSWGum3Iw/2LYg6FgG55UYO/c/oEsXI+tJRGmhssmgIu5nqO4b0pW7NwLAo/tDM00y40iVKei1XJ7hFcEXEzAU9beu/DW0WcjSrd6jWcdjxTCJpdeg6NRn8h0PEI2/nWLVErk/3r/wWVgcsXPCWNnR2FD+dOzQi5ISYpmQmvD/V0ICsQLDFJ3v8bxKnO4G3PelEj3Fn8v8Ambm0dH3I0C/1sBQkUKcavepSJSRtCJzTv9aBsffoLfCbeFYEGpa1DYBuygzw6rbj5N8f+XqqrpYLP55Sjw+l7EQwOu0MjWSErQoxmLcwKX08aGLAtuTUDey8AjAEsEiRoKCSWFRomPBUhwBt1KguZEnQfqOVYltQYQoD9QCUb6+ETG8PCWEF/yYfiQAGQrN+4q5PJY8nYMMYW/Tv9xXaDuXfmJ/5Jn+64kPRVOijj9at9pgbaIdPztKqK1bbWp0MDSb7OYahOtu6EcDV7Gb6rfm0VvTJozqc6y17m/wyBTOtdrAAQIR47wlnUWrDDMvsM0cMjtQ00QpfF2ppDASx0VhQFZXQsCgDeiMnDa1Zk/uJosa/btGUjpbvFRhWBJLvPUXLsodsmOU6XD94mFNT1QODxZ56sEM+gEAZx2qq/QRilgXFkntD9NGwVBXwwMpSunxifIKeRBTvxCKfyWAokMxV6zmN/GfWmQDbCDwhuDwFBhsG/VeVgtbMY2XpSNFz6d7urI+5RuaPlURH3U8L72kvr1u5nvsKcT7luS8cMRCfYXo+RjDP8PwsrbJ0mAascenP5JdbiFvf0qtMeiWDr3xKPw+HN35SrmW+qQEttfGwx7y32+6dzk+I4pgnZ756U/dlKLe7m/lYC1Lvcqe2JbBxKwQn2ZJ1abMdU1pzQsayH26rn+ucSlsB7vuugny5zu4dLBTAj9pa3W85OqsgBRjLsZhKu2GlsUajjP9QAAF05oZUD29SNMTE2jtSAL2Kh0yrGTthL1ClCYGiRqbjwwiwMVwD2NCQnSH7AKJ55denImDAJM7nR8vX4Ack1pqSmrPgVL9p5ZmUfnXY/bUvnpo2awMt2kZlHor7osWB1D6FujgSoH7G6S5cAN62Rshyssbw3KWdMgBg6veYThfiuHnvekJ+fqrvStyaGjo+vt/gGsNcEHONN1oAQ+0NfX56NNizcnITqiGXKaRQF9FXn0rjbfBGPTw0LioJDDK2LiFuNuHj8wlMVpw0eGO9GWtB/8GV4FbCaEWjV9Jou/IwDWBDXyQWv6UIt83hlW/FJuhFXZ+GHlociV2vF4FnYCosF/TByHJ0rBFMTUk+tXkwbXFgSjuCMf8FoMpt8yyGyKxzeSv2BSK2zGgYv076uYj5J77HGCEqzi94vSnKN876Ei/+IL1815QsmTgGPOTsNAtTY72jrr425G3XWGhKbw4dYNxjuxhmxuWbP8iD4UHtNO4kH7rx9bC4TxP9pg0VmXD52CKDLbtIwb6sSEIW1/VkElVsdkuDWyjbNL4yX4Bd2Ri4ih9x81BaHm8R1FYHRQHSA9FQsI/3F5TWLvNF6h49PITJvjU6iODRuAFrJCZNArl4bFYxjt9vm/Gs62wacK8Kggx9gRiMS7N6bUh6oMOck8ZsiQHsfHN+j5SPfhn1n6Tc1B6B8fqaWDkJM0P2dC158iLwgFiGqUnpz1o/8P2wBjlK6Vadup44RwCJCI8A4Myl7Ssc5I/4aonbbofWHOurGnoBhJiUq0+vkm3L5zgxt6hnVbr+fwfNiSiYDR6Pc35pJWQg1yOTWYqvyplnOOqEJkFC6XG6sz3ditTS6grq/QA2LkBexpIhS7bEGIKJ6b2rQtohp2px/rA8sq/1bG3DSar5ZWTpC1DK1FkX59InDvK/jKNTAKqdW9s79rUSRIg0Gmh13IhxOOCWUnhxc0Jv/PQoOvM/i+3eXsGC/XllRz5tKeTDrj+q0SNOAgo5Ha+Rl8RYiO+v0ATj8LyjzlhKwBRy56UcleRZKHMEQjg4B6BqtjRjbbUK6JGpuU6jYCOVHj9o84cbpr5MP+DxEFxp8e0T4VQT1QQEdehO+PeqMbsIloutaK735Hb+Y9v8jzWGnFpV3Y/Z9SGj3fRLQbpKOYheS7ei5Nu0qidrW73xqu4XE+P0jnyyqMj6tA5D8UtgyEUyBdVUlqaqOUA3FVfZC63cBGUsi0NZK8oW3pdJPwiSmU00Wgwlcje8MDnXQmefIpyg/Bc7gCmrDgwNQR3gAIwMCLMSyFrD3oCQ0tSYBCwpFjmd+0P0itZ0fMMKFdIMIfU+RZWXlD+A66GP4ZFic5E8pWAk6jNkaVWx5NTnukkLE5ag3En/JyavOQ29YuHnFcIrUfwn8ESWvYH2ys8HUUnntH2b7MAr4JfBEIVBWRPgoOpcJmKH+HE0GQGO20ZZTz1NYmQJ/c7NwiIMs7l1VQg/1HBxPjw6wJyBdVbKIw/sNoGEBi6RoH67MpKRdyr6JwY20Mkgin+9KqWaHwn8c/nXDofJ297+3knkU2dD8fzu45dAEiky7gnSj7HLCkaZ8DNxp0kYVEhecPie/HASwEljCTdIADLPv2X3jvGIkpfQTsfOiq9HZVU9PwhK9i8Rz4h/6q10kDyvB7BVMbyQHFPQlMYvdsLajll6L0UkjpSsjvTKdVzFuHRDUyfcOYrqOSCIt0G1XsJ9FXWeTVG3Am5gwCyBqLxnrymDbuPeRFEiYSUDyztmwfOH8mC+VAvntNvfcS3UftqxHZLuIByV8UyDjoXAoQGblHryyz+vQr3SHBXk1icuSKavvLW5+dgBz20WEJXuFZJMxI4hOVeOHQsbAO3UXi8mHW5WE2kZmW30OhE1OUZBQPAXG9nhVV7q3sBWqjyPjYL+pzqvJyrJuL7o/WpTt9Hl7bY3glNLwVcvWMqAHov1s77esLZN7Dqq+m3CGhohOySMTapRO/G2Peg4s8gY5uKHcYofQKFd4NqoM6i/30vjj1TbetwJAaMMGjNUeh4mt/eborRZbNs8ckBiMXWhDUGmsegVYqRFZYawyt0kY13i/G19SzAPyFdI3kyEuEPdAgoBa/xQoLI3OU4/89j135NL00nZeabGmFiNQHeIKLtdG2kaCSJeU3cVanUZ5K5fh4s+/cIN/ayJnCkR8cZzBUMN+Ji9oaObDa341/pNs9bSmQOh4tmrwPbncRNS/JYcQGKk/H5rEWrMMAHwdaAyqUNo4xCDU3VYBuagyD8ACQlk0F/zNeP9djtDwNaC2xEhT2UFNsy4qJY4UdXI80hZM5QQSplcOjF35JIKYl04Wd/2mWipRbbpq5vkrRCw9w7iWQyYhqht2sjf+koWYYKqAj0emAZSPUHor4Su9IwwO6aeBPbHyymq8DrHYYJnqTru95qR5gVSt2tYTRmLf7Bm4WvivHnQe+DRYlmwTQhz8qaZj4uzgUpMA/8Z1CB0V5Ie0p/iBCRYOqrEEJcEA9uBk0IY3gwy1ClhovRrPEJUIz5+Tz3m+cRxmykVn6aziWK3jQh2nVHOssFA1darnlw/ad887xp4w6cC4wYSzl54MiuqohWC8GVA/bsYitifOhcBocO5o/9ZyhjfB8NXmNKGE/2wLtwpfBltSXIAPNe/JJVVjfdNXrSq6G8aJgTPY8vyGLVCOdr+7qCzg8ccUNbaeo5o8FQD7NGGLfp9dNkmmTaps0MQSteiHoPrlDGuptgywxSHaFyMbh1S+eU8DSwHKXLMQVkLpjnBEJC1tpLhLslkobNCQzgaYuCRe2ObhBlN4XT+I7KJBvdgKEqkTv5y86OUGHJWnpcFZ5I5T7h53z6zBblf7EuIxUsl06fy/iVQ/elZWGdykAmZrs5XTnmL4OXeo3NbzJnf8n9mJ9222nHJctOxu0HU01TOxc8MTW5YJA5AeSXXxVMtRWgsIdgBqGE3T7rKQE7koPZnVYH18C5iEdd2S2nDNTPSbRgSSTie1hJLGvntMUyMYDYhkXNlirBKuSKf0xMvo2Uw0jtVwv9q5hHwVXCunb41o4JVk9+QbwWyJYNjXAlQqaE7l06ELsS+UDgwSig/S8zDLd2cPKv2kF3NNrrWI0YWUiLa+kacdGGeWnnDWcrWHY/Za5CqRUn0U+jEGhUprDvQlXjoGkMlPl1e4F8U8I89xJEuQ9ic2+50dG+SfsY0ZgEIJef3aFV7iDGYdnUT25JKcmzb2tFgnJoc8z0zG6PQE06RE59YY+imPDjJrrt94KvSL2khmCAPLhtAJVZjkzCvAfKp5iOGuydjc9KNmxHRWmqsFWMFdU3GBCAKa7N2OS/nxdrpIDR27WcXy4nSOllA3Son4CzAnE+TA096nRfmN3eSywiwi+SzP8OP22lokqJz0COUkkgP1NTWwe6RTwR0jmbiOimE/3nmDJbmxEQBL4c1y+qoYwp5AFfEp7zHqDzA8FBNQE2tZS+BZKgO3S29TXAwKDnuNgl9GAUDBgAk72dGrSEA9UHz4Ol3R+lpeaJf4XvDtVbdYjhiDRf/waTZApxi5Bsj1apx2afiz2KB2pTUDCN7BlJE0xqxySYcte1LZHUOsvh6ks8vZ0bTyf52iUFMiuWjB13ehKN45T3nmziZTF1snDGP1sbVUQJwEoLiHKRG1/yBpgHJJS/Hoh1DUSe9odMy4OpDEU4amqKaD1KtP9Htr4A3CSJ6IINk7HSgp1/QstVCEm6QyI09uC/Cfe67Jrvsno0aRZ9voGDYqBtwtLPFPgrm/fj4keNCh5PVgq/aQOFVZyxQ4yKsuf/cGUi2ztp1zsCAKTf5y/bv9tx2TSvz8eZ7S5y8vfDvV0lbPB1quY+uWP0yLF5cyBHsx+ARiq51hvfBIl9FxGUFecn4cfBmgYgpS+jJ2CfwpiO8iXS7sK1KnTLu5B+vTPshSm03CAKTTUwzE+NM/1SeZWBytaMnwJBtaWWjALyxn7samUmeKZxchWaIvb4r+uh+0/eg0x+qFCvYHLvopm1O7LLroNWi1lK8ASKKrSnMNv6icQJEXWJUSSb8aeIhYL4ae2UkGVVsOc3hI8pXxNeBq0p8UW3kokHck3VZK1R4N6XFsgcYfDkt7KOxoS9PA/BQjMnrr2PQDGRhgd5k6dCmD9UkQTtxAF+8dZAEfEvKYwSIOW9p6n5El4CT2sPWLZdiJxsigqWXn8TtiC4RB3jAbefvIdSvHkLACj6yV0UZLD+xFhuIF7UiCgXcCrONVsZrEo6/Pwekb9c818XAp/TJr5WWGdt5TPKy+HASck07xjIZqBRyVzvJlOh1OEU8Xi+1l42Xh8RTOXQUqhbCPFSjIbUPj+TIhuNDNktskgZwEyvFvsWhoKgnPiN+KneitDQPm5e5gYEsJg37VuabLfkmXd1VhUZmx/D56aTV9nA0zzAFQy1SYm6kq8uz7y6hexZ++LFzgXznVCMUbX+lZOm8uSuj5nnLQVoDbm9TCpBl/9bs1+ZY0JzkM3JMdXsuteE9sx/xeGP1rF+faAIHjsbEjns1BWtBVX0lujmAf1Ei9JqPkKaKExtLS7X+kNjbmbjFo4RKrqwIVJUyCSgDRHbwGOXp/Kef8W573QB2idVSWSVaKBvih0/nOTy9GedUCIcFoKY0bmGowq5JgQUY6BD4Cw7zLMaCSUpnrziGqUW3QrdMznktPVTQTvmy1vo3RRMGOIUiTAdjSv0QMhFId/i6WBs9/htBHtguXaAIRpwn4xQWLZUQrZTmDNeSeCVAWn9piyy/a6z3sL1JiH9shPksd/pZNgqdf3pykpAQfPxr0wwpQ6Q7bitzAA86SafR9xA3NWjsjFmF5mLoZScOFhdQbRi/QI2oDXnUbmYc9w0QH/OF4bgxJ83fgC/60nZelpt/ki2gwmcH82mz+iSKYxoHbnRyEwZqPFTpOskyXAdaIDtPEK/Hf6cqk6jGfIzGsiAACcD9eaADtG59VTAOo8sJsutblzSL4ba4zXDDxWN9MftASsZZ0ussdxKeP6kE1++rGZq2CbwvE/AJPlhaCLM3F1P1rrRy5qCu+FfnvPNUvgDMfrAWrR+2O5jXlD9I5rM7/U7HNtD1Sg+RapOO4aeIAM9X/R/VM54gIQa/piAWr7TGUiTP5enRHA+45GNpYoZOeGqrHQztglSkBk+T/3lVVxqPF58oKCAMoBs+tPYPEUrHzxD/Xjdu2ZDB/3TXaidR9LNJmxW192/mOO6KJxQO1Th3Y8dDGfxzmOgE/IYf4WZuKLZwgHtxLk/3PNQNs4BCAdmsyY3TxKJwgTDnNBL889sOgEir3oMJb3Df/H0yVJcwWgSl/IE/dxdHXcZsdPhhjbgY9anmRgv/00ahe/bgfyzelENkZCPRxJbDQVefhRSabJ1X8TL+JC5FjihKxLHxnZcx7aawwvB3HnZaU+xK3okTKSKMyv/KIf+ZfYOceufawoGyxYBWCXCZiOxkKx1RIvS0Nv9OkB8ky7/AZsyHRHMzSYUFVnDgk/yoZWMxOdVOi26Bi/8LBActKDGh0FY2MfEMdgAN7EUwzZfJltelPIqovZ3oG0ZTJu1R25dXSV0K5/qwI33aSe2hL+U/cZif0MVX4zOu3actezdLVDnoVg/qCq7aFkJgDUpFip1FgP3OX5DKIm3cxiDOhBQkZwko7skqZJvHuP29a3K4YjUc7u/6UA/M2l/1RzVAehYydN5vrQ/AYaYuK69GLs2Yvkriair6xhAsbGPfEKfDU5pwf2ZOhSsKc4rpKx3gZa4egfTKwzBkbDbnZCkPXASmtl8dokp/d/yiC+WaewfsmHxuYnnmZXiKXidRnztycbrYTnjEhLWkHqBXlP1kDcSVaQ9cIgbph/2aVqaSRkDm+WGXHWVtD3a4HkQuBrxN0Fwmsh5tBWc+hJvWHfMn1gHtaOBEOTcwB50bv9/7HkV7XCPzkdrwXl7ruPXB51UozwYFwdatuAGb0LbvwxLb3ubBy647nl5bfqNxDMLQLDRQ6wSF/FS4qvhdlac1vnMmmEaJWDPmZiZquA1qNybsoMZMcLITiEnKfsV10eUjNHJM3pUJScmwrbwqwPCs6Id5NANi7L6nmVnuM1EY/t2Yv90Xy1BCNtNRkNxjGW8ePmpG2Tbo0Ydjl5PSyAhCDqZBgcUIOsbmCAjbudowYHRTrdVZaulIY8eRRyra4fjX3faUXpah08N8bQeTa96FCyFofX84TxbAFFmNoF4LPRDwzvIWSh29Ub1qNVTjr4B7U6SyeeHbPybEkxI0pSc7TVwvz8M5SbBymxCk/YXbVGmooO9n8I6Ry+BUdhBihm4WKVaOHbghXa0HHzH+uL2PxsmHQP7vSuIxCSaMrspNLMWh3el0MGgWppcJaTe18PQUEIFa7QqMwrDA7VSaYgBM9jzqeHBFjWvMNbsfFHeIiP3zfiWKoYFn7R72Q0KxRxLcZavmmm90/FblzXXXYZgna1lDTn3mvBAnbDrPDbPpBDfcKnSJwy01xtMvI5yGwMouyq8WQj2MAJ+V7ATRhFZyvh9tGx2CrmTqYsM3cePOKZCZemhKOnehOLt5wtYxYJd/G78cadGnavMrFxDtjqo8OW9i+qrnB0aj1h/Shj+our5GUzzk1ZaTcki9gMzNsFvK98WiHSTcSoF+VbOJjAKoBIFR0BjRkGGCILzEr1P50UrEgpac2fI7+t2XGV7SwXwLr17dEQ5L/iL3z7wRNZz/Ojx/qEuo7Ndvhs9FjznRT7D0IZ9C9Y4QllGo2XqHKwVpmXyCOCim04+jzKg9Oy0UctKpAcUCPvvKiQl9/SnR1p5bwMef8/DRk2ti+KimefKB23hxtSWQu+NhFfndnLGganzgQP3EeYLDK8NEXTM57G6FnYF/otWR0QBlSwRDzDyjWqDHswHDndiZue592A8dl3sD5dx6IGUzjOplVJdXEWY6K2ZZ/iMfPzGkykeRpCRsIN3QHrzwc7ESPzFR7teNBjpwr6Yt9cVzk3MdFU72Ja2l9HkLcLmtD09DeuicqkUSo1fES15O1FWS4hc0H/+WhwPWb4IPHtUAJg0P+xKRVqRHjxMIp/3dyeQnxCTEdch4jyL5QUtyxRlGaqOce8JLo4jmmDHYX1B+pA6/UdoAZgX0oAIHVDHTJKy++h3eXCvOXUQwZ+MCP36L/wBI1knnNosazgNmcDCy+l1SJRay7IbVYOeKowNKjN3yQD0/YmU55fzVwoGcs3ykTbVnGW9ckV0z6wYQh7l2pr1mU+8zbsuErTufnFROG0gt5su+mPp6qBM2RGBzrNYYa1UZKOOdktyOnOd8R96CXvlAxcrJEv2GWSoJoeK0ywFVJ/95F6164iLyjuAfnoHp6ZZMENl+TRMl3tJxHyQpQlf7HHttKzvMlMzO+g3bpPOrVibKMdtF5XEGEVA6F5R/AxB3O8YTyuBCKoNNGzVHyNeZkwx62emBbKraGhadhA/eQkR5fYBf7NUJuErObYkDIPq5NAigIRj9+7pQb2ftWyvk2DT+UGa//Y9TqEKQitYMPQULNnTHbOwdaP3izPLxZbSsMtPQVSHj+2750lGGvIIbLsGghduQTwjEoNh4Oev9U9n69GTorFd5/CkgJtUpJrfZ4Q+vBlmDbXRtVPLAsvtCtYr0xCflY6cbHPZw4GYyjxR58d8rzHILhAVsKCklY2K3GpWD9BOJywjlYNYQiMHJMFNXLPoI3q6A0z83cmEtLrQ3n4mVDs+MnZb+D2mtV+SzySejvio8LberaouEFHhvt7yXymMDjOXZUbkso8SYmdl+RcEDb8b1xMQj47D1CrynORiw5IaZEBZgmcK7TwuEOm+EWURu/wKA4iQmLiebHD3aL4wtd37/gVBp9vAoEHqOgGfbclolTgLmXeSWQb9AqXhsbYTDFeTkBuCFQ/QV9NKKtDE5IU7qBlJ3DXjdiSZ5VWq3lbV1Fc9hCIQyqfvyZ9XmixIzSxai/k4xH28BVSRYU+joJN9Hi1rpz+mICAKE2icNFlzjHk68Sg6Ju94dry3ox27EpM/6P1zaGCfBVEzgBhniywe6THalNI4fhBJGnmi5I9Peml1rCYD1FJgdV0z1q61n7Yut9nRDCpKIkN1nzNXmCcGD1Iv0cJSa7XsDlsm0ZHFNuXXL0/jQ+UFu6hFqEbnnjDNuTe5yuYhEpeEPns6tIlIUBiK5RDq0+HHx5oTlYpGDes21GpSbTrDZm3tVqITwDxnbD1x2PfJ31uJMDlHiyMDZfxptBdRa2QuBDqlEw+9ZLGr7vZmgrfl7uFBJ7hg4bpC/PryaZCzp6GMubzkBqHSqvoyIa5ht7TcS3d47tIPKvyBUjqa2PLvMG59ToLnAJTzI6AgLR3ToYS8Xob6A4X/+jXrTEj+9I+irZ9vtCXN1tToEyfBn5hrKB0XaFRVLuxRc1tpzDR2102QoZBkH+kksypXDZoBVLDNvIs3p0hXvUM0vLS3bmb8uXYlCAGbddFXEhoizXqZUAC80rpwE7j6gqNQVgrh7shxAZ1J2Gbh9LtXtJ6n6rmZYVldT3weVlTPoNT+du4acXCU1vu1rOLSyMOfJtS1kQr8c6eYbFdw5HIztZ7VkR8dVQLLG3fnFk3TyGf6ChtlvkShBNf34rSdF0GWHasZxxSkkzG8U82XdI7dPKbe5YBnOpXZL1keFJ2wWK4esW91EhytbbHifIqDKBRAAig7HWTwfb6lxTjubWiXw3Vy4iN+EiBnhm7uvfJnK7HWcUdwfPr1aQKirF8FAMlJOOi0QS8+f903E8tdhXVgKOvi/61BYPMXbKYewaPFKMCjsB0LXS8vBWTW0JRMXgKvA/C36gqL/J5DQeOMJwE+MmNVThuG+2krqlRZfEnwQ8mjEZLtZj9LoTpjHAfkf4Pylox/K/s/yyyOZvPJA2g4K+O2Uel95Mbqn7B7ajHn6R63Njw+v3cYRA9+FX+XRRfDLUQ7am+MxKIfu+w5qlmMwXF4qvJqBn42J0U4b0FxegHPt6WkDVsN1Vskfb7b8gs6FJhl4EqihYpYCP8i3Cc/4iP+QsJHLlgy1Vr6pvbSioAlgN0xfPl33LgFxIc7j5K6o2RA7h9ehY6gM4nGHi00Z1D7COUlxObt40qfB6nZk5YiL7IFcpCjXK36CzlrJaSV0mk+LZSAlmqPKqoCR/Ap6bHnsW9z68aAf0vAUn3pYsw/ifE+iZkJYKh11rn+mQE+2ljGNO4theGAACVMau1nEduAV8nCwF79F8UeYV+eGZZuE6Cf7kqQ9AUyAV9K1VgETcGqAuSUziFEYDK/OWijLKL8SPMC5ccHY8cO/hvhFhWNVpg30wEZIgogzoFMJJqxtSKagwr0gq9A6yDSI2OoExdOVq+6VcEh8DIZ1pdBfUbW3g9Adj6Sm4mADsqgkvjwA+WEVp2zN9hR3cwzTNzzRAmDRhztKJHjU/k9DBt0V8UvY/5iqycGx6ICElJ8RamBGUGSdCkuxfUXRsbcG2oHOCKgWjYBdo9HktRgwVxha5ZgnovPx8exAi3BGf/8Ft4gn9f4U8mqRhlts0jKCQcXI/TZzZqK4vwaj7ghLmE3dxR0dYJZ4jil/VbCUjZnfBndFBgg435AlgE98GskMiXfs5FK6PWOX/I20aEv36CLgxa0xvtKbD6O5lec1PqKGVtddJuivzk6zboQ6s+xaRgJn04FessysKWgGUHS993Y7DpL76Owr8CXSv7mnvIFbd0HSGcAVJtGoCR6jy/tWXiAwA1E/+cmpePmQNlhwM3ihMnDvrfcISpPW8Wjfc4oCPELWAwJLqVTCJ8ttIQqe1ypocH3aIQcAqrTDbqAR+rZVKMZ1hIXjnea28eVdDcPZsV7TE3H/xognDhrXvsNliQBK61Wdp+eiIRuBJizzdo1I7DdPMDT/qUJdfR1ccznEbXKGd+Cz6+NSsOPj9Rn3maT/KbV0ai0kkTfO4jrlxAp+/LQJj/BeYZZqq2Fufq8sQgc6CwBQPF7fMVzqjEyRY4BLxQbzeEAeLRPbycxntryrQZk5Pu8xfZp5JRY1mNxsVM5qIOGmoV5YAZNhc/58ij7Y56tyYnh1HDJwdEYngNeMSbrg/VvcotnfFDAAsPwj7wCt0yx1II86Dt5hdmy7mXIM8BQ1GR3FoWWZ/iCiI/GSts9ZNb0LQoQIyFUu9pO4FksG4lm2xzuctCJhFHvKLLRYNNUmcSUA7mY1fmL2rZAsl9eMhxF8RJM2lhqJmSUBm7Syqrxq32yr6ADXMe2y84gh66TBaQ1+cNlfbNTbFMuBQlyoDmmjbWoaUc4ZcgS7SPcmvYOIm0vxhpsyspAFN7UY9I+mwNKftwRlAP7s9K4/Jtb2x/TNxFeDXfu1jlvVVkRUjjKnUNRu7NICiP9XHbJPkWpwxcqoMPfVKK5qtDlyA8akN+2p65HEP8xE5Pq+1imFMMQpZoiLsUv768T1w3dG/KCHk1/kv7DRrScq2kjbDipNOnH84U5zb3HjSA4L8sdpwpLFcI9RGfCj176kq0OmFG7F0v4X+eFmZBU/dVcA/6wiV95odcA1HXGKD5Vyk2xHYxWnNfoHzmxSD+TjBk7SWYL7eAx9xHPcwFgaRupQQUW/QWyxoFlbaru6+6J3kR7fdHzRAaFJhB9KOcaigynn7lK7Hz8P8WNmq1ORGGWPO/eJn8mcCK6WEpcQl4yOO6oBZQlmjKI2YUyXhhvFbV+0K6vR5I7ThLBJjtFs/mzBFX82CUadEyXLys0VRj9sVc9Vg4D53mv040emsMlhg8ItuLbMaC7QR7cyfD5UnGKhJNOg68YAiPzXPJ6wzLoIFgBfKrFn5Ifx50LtDn8ybNcwIAG5jUab2aq0GE0eMUmbvFY5ong5f3QZn0ZzovP2240BMRGLFqpQ6kAGdwlD8yoEP2SHGAABesC78e3a0OzeTjPoflU4YzuVpPygTTnAnIaY5/KHOn4KiwhZNnL47epF/kn0CBf2JkdikrywzMU3s/0dcHLrQ6nuociZEW0UD1+Plvf098wLbyWXaeMrBRJHbeg8MGimhF+/VjSc1XkdbvP7i8Z19t7VzeJpmDDEPXLGi94lQEtC3Bhs7HzVuZVFfPB3+tf3a/7zrTwtb3NGL4m5gzRHYm3UWn93J++Owm76kALQM8/fpfs9Wyb4gAQ8Le+bal2dpzzC4b1rLXbm/Afk6Bv263xksd1y2E72f0mF7WT4ys62KHuG5DH++gukuicB8aiBCoIhmdFm5bbvG8upYOimnx9otgCEYZU+ZsV+2fWBFkOG8GndxBv/8s37Dr1gJWsw6/L7f+WTeD3u2VefQukQyjImFHx6BkTs/Jw5QFaZ6cwQvSUWnunPg5C8HtPJvXk5lSk8Hj00UpltF2i+dB1O4FO6V3wpcj8bMI4kbBnrFkAGSA1cYxP962g/9LF5RvLGaJy/EK7PrqcrDTpViIceBN63sfGX5EStoN8rfFuvcaZs+BZ/VnYclyxGQJMonbvpBNUXuZVlrlNna3gq/PNnph45QEhN77MVt7u3iconHdgBf72yFis8nygEvAJdKRZRQIXsKhIBBVWBedmD86D/kNiSwoPkiQV76yBUGZtRLEO6gHc4rUQU0ihAiddt3MymFyx+18PHgMYTHt0f/NhzetA38n5NgLIb4ezI07sOznOo1tvPVe5t5pabQdEglzHX9Ql86gIQCZyScqqbxoiPbcaQ8dXH8zj6O76SxMibV45gx+MgXTjlVeqxNWNzS7iwY6KxjGAhOIS2LMySLXF0DueanTKdHOnp61TfAnjonBbbJK9yz6JlGeOUJFhaZq1rEjpSxOoueSbM95dEmR/uz5KSGUJvVvbwuBSIloNeOZw8Ow6wGZjK//ize8+394cBzX6Os5qbxUdfz6S5Ug7NWIytuSF/jdwUzm24TZQXH5sHmFzDJHWoNR1loEJuoCnK90gvbKiC1pbeBLPJF2Z8gPLlSLxKUJ+rMS2y9RXSB/+2CKlqNmZrrktNlOQ/GLDcmw2ZYBpWOVEM44qILObfEMoxVSy2xX2AUc56GV+IWQtEbkoRpOvqC8kg5MhHJ1gzC5F89xQo+vCVqyyzqV6MqqBP4tANTHIDGzeRZXbm6PQVNebgUWjp/+FcO+euQjnY4Z0Ozw4cWuD5MkyqawdbUMAzizMnlz47c4bxiItk31MlP/0uCnrApPnpEtnquKVH09XWXROyvTfNLLJsC5EBxh1JxGhfUxYSiqjgZ7MX5e6XiisAHqdn4Q9h45gO/tLUIGwO+RrFC1ZpasyEfiQ9rXSiGXrDhPYJytN2WdOiU9bM5+tmNtX5hntDjTb/NxYT7fwkPYkmhCGgS+gN1CPuJkTNtHjUfw4QE5R4q+b7BzaK44gk4omrzRh5rSEHxM3qvhE3S0GaFahJQbBMwLeL7IYHlfSB07e6T1P3pg2Sjn6QOAIXUPtpdgoSrH6UZHPDZzdlWi6FZDp6OscVzpqx4vb8NljgKqIcBPglA1a693n+mYWkaECE5wuxQMBuKwHtgwJC1vxn3BOmB/MSUahXlS3uL7NwPRVO1ye/TMR2kfxs0A44DPQhkx0URKycfs3fraFk11jWJz905CPQz1jwTqcgYyjLcEq6TntvK6D1K7jK2DTUd3PDozF8XZlGNoXu9rTfl/LhoLSly7UxJM7ul4FuQxJLahD2siMF2udaOha7xq7I+bSG00Nkv6NcL1mmsDNDvvJs4M+RA+uut8XRNdcvlGKFjQM7E/pu+QPI/j4NumgsQ20JmEkXbHObAJfKE4hjV6m5AnPZhf1+TnOzFIEUNp6GNMgA1Npt/iYNOo0nUuEEbKcLQHs6DbOLP7OZczlBeB1FaC1knGGWcWgH7BJlBe0kh5DXF0Bs0GRjWnXaDd9cbEnVKwNVTzdWjjxpP/VmnxeF+E6P9WO7zTV3+p7yQzKrKXO50Yy+DIPQQyIW/MapCvG0CT400coniVjMLXCrZ/Rq4u3p0gdt8PFCTjroRnuslkWTAzufjPrqaH4K3obMQ5b6kslo3ICz44rBaL+P5eQrcB3j0Rav+WQudVK6imzGkoGlWgo7DBsIG37DJJPaBomPVFt30ZIzTzkmXzIHJl09FkrVP0/yFNDMDgz+MkSq7QnnNdpbi//XtqGC3HII1wV84EdwyTVpETOTNmacIgn+cSl9N/VToEmrw0ZEiRYlvok/3nnqqFNxjUJagWCrzXet9/QzmmNvA/2t3BfJHzW5n/Rle0C5RjULDu7wChl/07iBJ1eH5esoQ3DewQoEbJdejJYFEkfftC97luebZbMd+74kw60QCfxew69MbAeZbpmTOjhirfaifX+2zQFtXQNliiUvbQBNJf1MHEdCmw3pfJzqMyweHjXfd1eUMIlhQ4049YDs5+/I3O7y98hg/yIOFANZGFpbqfkkvxXP80j2aTe/gM1J+Umono8/ojQpQqF1FAdB33oJUlwW6tytNfgF56XxVPCGgvA32IN+ZsuzOL/nFl18JT4RiDO2NMRyneINw9C+ti5yv0N3w6pAiiODhGp5xH/MZB4HWL2SaFgqXfcydm8XHanr1f4/fxGFEuGfkYfPoHHw5AnA6ZRa2xatlXIYp+aHRa0Pp1syi6MDoHup2jwk8wnS5FBmJqODpu5ayZdlnj2JXFeTn1tuaCd9ipzxfV0u7CW1zNvckJYgCd++7nQNIZj1ioTUnYMwYzTcHoMTWwS9IVTVDosGlFV1feTPjX7J3947m2jhd1QB6kxj5Gx8dZlr4zQgOkUBLwY3ZjaVAYGJ0bzLGRa81wkXWcCzQwE0694ia3jmmio6hFRyl4NRPAC7h3ZlLrWxJKoUlTHcAFcbWthDG7vt0eqIi8Be8P4foZua/Xs4W3rvnjKmTifIKNbYMUJ7eL3ISYbyfLOYzyyrMNrhzY4+nNG+SlhOTItfmhVL3Qo8iG4u4FyVkL99EmX/53c7JOimsOrBPtzKHDL1UmPZk1q1GQouPnPYXiXmZhYTUxbFYry7i4JZm+mVRjGUBAvVZSvyiVl7BSIS5Q+pX75cjf8BTnZ9SxcvphylrfcIN7gaESiu51zTXR4LYpETVi8+YGCIz25VLyl+EBORcPTq1lYB1KWaH9H1gDiPuxpDS0oeQcxx9OL1tZT0nm8Rue9CTNhMBSZIAXXwpibVvitSxWGAPyRqPVtNlBLb+vYP8JfrOQYqRJahBxZ9AkW2lIjqaaCNJ3apEiXkPd3/4JjQ7PAVrENfOqZyjv0MmCjusRSDAMMgtMa4XnV/odMKVSIEAAi8i2pSZtP7HGK4MzG/wo3iZnEoxGP+Noh0r7QxOUV5BA2A+UXRrATjZI9/nAvA2jZq2yGhNCqXa4/7PiDaTBvK2fud0XjK8YHonD+j07erTotGqYObtoagIVVdRt7we6yBz7pf7hzMp0N3LuHGXl4xQt+cUpnl+5MEeEllDrdDvY/JLg4qokyNv/93dA4xXQV/I1FnKbrOoAVGg/0J3xUyWGuwlCIBYukNFtbRYrtqYICs5cY1CIC6G1tbKF00tdrW8FIaf7DG0G9xgmfHvxqN2RrQpofrEr9LHEJNKeLyvkuQOVDd7lZxuswc+tsvuDnKJw9RJ7XV++l5VnDZcOETBzDlKQi57jpy74zjFqsi2HvZl36QkCDRS9/lVpeRzaXvAvbeej9YC0rYWj1cFvaO7DuNVP1rFTy047cqz0myfA/WXI2ohK0pWbKBp4aurTBYHEPgwIF8q++Ud7UIzMdAmwNXevJ8qBlvvJPQMwqHujKI4/PVQu5UEEiB7W1U3a6FfmCOxSJyvO6fOyfQZiKjDLc2kMrigU38tPjCA6/v61Rn2V9ycxZDPJ6/xpBj8BScPhk8GcYYIMXGb8XUJQMJs56mt2Bswh2PMXrisYea6hhzRbVTzjdWPknnIc3D64Ctbi9DCgrribRtG/qbC9hN9sxh7BJrZfuHaHme8IQ01liHI7lhYQOJAZA4Q/jd8yXAaPSFU7CgSRCUc+Hbpi/zIiSCU3ug/2Kv6FxFbSQRp2AYDn9BhUG2aZJucr+4IfATe39G0MlPqIEooa/8l1YuLhmsGAGnKXs9oQZvM2anYPPSa+1REF4HWDngWZSCUxvV0gxTyVuX4tU+AFw9DkvO/yLrMmtE4JHzQWQcLUKWwj0ovwaJnT5qw/6A95SyDD2L6cgVmYgOkBK2PXQ3X/9PA4XoAzLPASahLHzOiNV8VAFKhi2ZxVIjnJWNM1feI5UcgEyRjIk5jWfAx+xtMZ5GF7a//V00n35GUQYHMUhMZrkpwUNIF6VZS1pam0Lx/KGYtEbtFWif8tbiDBh5dvy4ryTSDUHweDad2nqx9MJ/bxFQfmT40/EkGqS2s+z4k7Oq5cFBItoDjo6mBxbW+9+lRpsrmefXuhJZKq5RgfSu0+sEFsd5YBcntGGCd530153qu3ssh5Drjrj5MlLGEuSVB6D5a8WS9fTaj7UiCFUDfGBOSKTrAJ2lFMQAseiQIIdeYGcnE/42PmB61xXVxcIjAos7EtAzqEWvwV8L+582pt4q6aoag3Gu5EG+/kgiPg/u+33Eaw5pcAlhiRNZUuy3Mzjyx+bBb4kSZZcR2FS5Ozd3vpWRdl4/p23IQWUFyX1OY161IS48ikOvGh/rN2xwph9FISoyb6O8TkG+Yf2rxTJi/A1UZ2p/jsovn6T5fARIySX2C1JfrWndyGXHaWbJbqk+Q/6wg6o4jI+ks00Bmy6UD/uCVHCpqDGz/XLJQV18BEv2cT+yeZJWXWMPdaS1SUJy6P9Qj+lHWXmq21/FDDUFvCsI/x35R5g/35lJQ6S1MzL0J/kI51Nxq+SoG1A0kC5FvcPMI5UdAjvz3fmEcLm7NFKShAfCzYM6uU3oTudE0YfKzejlX9se/UhZNPqVzgrDYm69KeVW01bj07L7PWQ9nsPOs+/f0ETXt+ymmglOgKrsB9nIioG7o9ynxSD7HzSKXgmmmWGIS8cTm/P15yCcyLtv/bbpJNeIPiI63uSqepppMVmZRn8ohWklS0N9PA/BAgb2RFSwCzNI2XcBy+2R7wK+ME1p2mOiBtElw3P6BI9t/XL0Ka+6cuUOuuO/zH8Ye2zSVM8D9ITAWzcPvpqtI/oZjIx5+64pcKJlcq+5yEW6EP3GYBa4BfvciRm9RnAKyGOikZ0UsuQmmIlsxtsDyuJ1B2Yk9oHv355CbFzscGpm6TOItFmE2rfQfamhUiiI7u4YSOVU7lqg5P0dCnNEiILfXiDIVk+mlizayjySoWzSF0WaSY9Q3EoOX/w9oGrWP0asSzjHCTJrHqIJL0HIw61aeuSuEe4w7MEjlCUHSFEbX8ebBr4Z9gWzsFuvV82soEMGmGhnD+UO0uk8YAboeFdPQoj/W9hVLMq4MVB5ER9niEuyFe/pLw1Z2njO1w1KlGLf27wzXCUYg7nPDl7lklF0MI/ac/vFIJkqzdmlxuhL6qQKlESbe+LbFPaoQREy78MLzrvSZQczVafAQdmbgVhNsq5PMnR7h2H8Zr5Tl+JBgt1KcS2+TLHyIEiSwqJCU+FCtIUg22pfqlB07wa49j2EGIZHVc1dSksXxKo4DIRQapiNf3fm2+jk3ToByA2Uho6nQABhgtBiWS8dfjIFoVGN6Ls8zcuTl8e408A2pHhqlsVU5+DjUcq09ed4pZ7u4z7xP5A9Sd575h6l82CNyBhbc7fRpNww6so4G7yN+TRwvyuW5BrsRWGQHLk0IsoUnzyuczrSg4Yrb5H7xvATw5h0PP4ARZO866WTYMn0jl2icjKjxmQ/ZgqRn4l7sR4n4iMB+8a57xja21PpgYA0PZM6GXvijGwQAqTGlBccROCmWZQnsN60pySqq3XEKKb36ugvjsEdQe2Yf9hn+0NDZbDPEwZc6FyGSlWgWTBME383ZjbbXzv4LHhvRU2e5AEdn5+LCOc44U3APWiITH9pvynHa0cluO1RTqrP+uCMtKlPnZO9CKdPRxXYJsskcx2uyEQICxxtoRJGyD98nlq3B08XP4gD1hI/QBjbtPAxwK0i3eEFYMerPIoNV6fag8Mv7ccHN8bXZQvIZkGPm6sMN67TFyOvOhYi+DkoC2pS43ynpFq79otLWcSLGrJhRYSGatSBO/SHQsZZcUS5xKbRrulFwbeHVETi4yMPvNfvlrkIXScjZHFFTwbqNKA42RtBD1PRb3aZ3uXzM2rYpynxeSfvZx9uFAgE44SWIWykurWFE04Fd9p2OaSaoQbYWAIwd0L1cX9DEYNhpuxeGmQ4DXMKBacfDx6N8EMnQXzL6OLjvCvrxZBSsiWNQ8YpBZstwn5rArgFzcKsFQhPZQZYpYtzs4+Mgm5zp5VdRg0+J+vCnGqaEjiXMk7mNbGV++GA+H2/oQIvqNwAIyUFRCU01B4qXB/CDFE+wuvyTdfjLoP+I171rSha2fHSJgfrSJE5zUd+DR3tWMsgT3bUskjgnepxENmS9kl8Aqs/4mPm8IUGzC/6rFWJyHZ/c2UFx/NpxtZUU93N88+k6i/ORoO3roNHB+B97+DB9YE7bOftnsxRTQCx7J4EY+3Z+1lrdbC03gdDdyhIRP8ZB70N1OOeXKJtzHugrt1+APzxRX8ntsTZ3Tbh/RJ+BCZ/4NRONPV6+aOJM8p9DEoIq9eIiD0jSGndYJoQygHRFFGeL4AgySw9+dvPifhtsEXodv9vLBr9GejJC3bwxeFEuuIUOBv5I9b7HaE10kA//13rUp8B4h5x58oEHRbABwbzW6BYwSnLiFWY/oE938aw5Q24Wkfz991g5tmtSnqVyEcjgCqQc463WJ/QPLJcRaDHJH2fzyps+nzsCVlM29svoMxc78bwtMD3lJzQBCNnkeGn8tb9AHCcLFO4Y4al4Kw8aIAT9F02UEFsEHEV3FUdPqO7gy+NZxlDUISVetXRwJDYs8txqwWdzVlAtexekju7BGdQOuIS/jWi0nQNAphO4RuUwdPrIt3dplIOGHnPFLHlaD0C4NePJy2ENSsBRRFj8nIgRWyGZHLjkf9qHK71gVkV+2HeQ8ifpvwzLyIAm9a1wZvA1+cRLCFQ1Y4WRA/GDM6E7SnUFTc/XwtXEFegyXS47ioxcJjiUVSfJtkCtIBvrgAwsFQOwRxuwuLyFgD49NTIySoXNnegA+UtFM8Dk+ypL0V5Yxdj+fJA8K8OtKLmDIurRDhIh7ap8ekPIg0vHgDqlBo1utqQceuxhzuiNm7m8mAZftkSO3sBhugvGDT2byJ0e84kHQozhDGBAwu4SKc1fn8QWt745OMENeFlURSRElxvLh7+ueRYKFT8+aXoaI1ICO1a6tsBLCrRaUa7nDalEJSSIhWwEZ50Sg+6JgFe9bt4E0Ybo8RkOuiudi9z3MGBsDPIUS9uCjAt3TLVdEELwe9SybbfmizTs3Qg/zPgrArZX0Q9kw2Gxt5SImv5d5Rqg+DnJZ+/OGAfd4XGrzfdcDtBxArnjSmsueJfZMqQMO5FDX0LHV6ooCOEAXWQ5xNdiJhaZ09wQTmw5v+yKiMpR5Bok3qKL6t84Bnxobkv/PKgTEhLckjBUn0XsYEmUnKNhF48ltsoambrc8pn5ybP4McmIeeRTSGJW/bZUfqp8n7JVYGkXu/cAGTfk/yH1oFevbouNSPOLBK0HiU6LN0XyMknfPMGQsEb57zj1qf047zVCWJBqVQfgoTOKG2q0zt3EKQIdaSbiKhlp91Uk9QDbdi9jLEyFiF1a7aT61htm7PRHjIZO7pqx1BD3ct238227nXvjMXL1BFUlyUF++We/oHvuP4atjzHssryX1X30eJzjOHzIaDg5zbuRashuvQ9BYaUvC6CVkQ47E29XPmt7//PUJdVC/Nu8pojjr1sJuUHBN2muYphipJ02JcMdrqkHX4zPTukpt0b3+peumuuKBaX4iY/0R+fdf/5lxPx83JBjbrryaolEaT4L0nwFsHo24uD835LRBpf9MY4irmNNpDUUY0wDVSV5gEb2GsFZLDidaLjLb01JBza0sOcgxde0wQ9Ef/vg2eYPAUtpIznO4e1iAGMHNo2906k2FJXviNA6MskrQuykgoULVXwQnhz/8tlF2KJgABRB7D13OQIcrxUOZ5xCt++TWvwKMw1yP4C5cXphIZlOzeADpewiMsCBl8MJGPA27HQqi8503kMgrbVyl+iOZ+lBR8OD15m7dYyUBNGRDlS04DwdOaQ+lxVlZyXQMRH5aNahhFv6ngPTrBH1TJCBk4VnYyPNuoPe8vLPfDroEBlQfX0UlfOIDgwBW/WIq2DMtdvkEGns2fkocXx1GBCXxewUCfBI2xUo3sQCY/xE1tF/nurKVbPH8XUMO5eyERMLLS7/Zh9PT8vdriVc6JQn+U9Nw67esUEGi3MvwuvaCxYjRpqnKYs1ViIdf61XtOnx+JrfxAh+H/C1oCH42RnFyR7ySp8ZfkVymNBNr6y4oPSzn+i6BKebjxdKxizedw4fao7VmtbyPYGLk7CcipFez7Rkl8tz0Aeo2MoBsza51D5GjYdX+fFLeRd7DJY1tbdW/xuRKP5o2B0H9mezuTOlH8q7f7hRkndP2L96B74Gv529iPQci4KHxATozziV6Guen5IlJJvTB5dnXEVHYihDkkQ1+wr7lqIRNGbzAQhlntlbkPN3lfKzN+340e/PM4CuennQjC9VIcVrW4pL5AhaSoTgPq4enX9DhfekRRfSvw16u17skZgBK26EzIuE3/GQeNggL7oX9RVU6xPwSQ0wsfrkYByKThCy3jv0gAkgtYL09NBakS4edcRVKiSy55/rRh3kAaop9OTfosy9bzlbQiN35RQyQfUMudxuGfsesJiLMAHkcChquXh4wwu+7kZmEKcEjEuRrZSgMNJiX8lQ2nn28QMFGW3IcMaMXdnjBr0Jr9hMKL1wwz8y73Zo/UsPM5WExKa5Ly5SFhBtBq9n2IF+xsveHk/g8xcmlYhr4aUg9iVZMflnnGmQcTboa4E3CY7y7sE152NHXGo9nrOZ2Ltn+fnyKwQXo+pY+jOpoD2EhThBIMGZfA8i0CNGqSNzxAarirmnajwTp+6YyLeivEbxj/Ec3ahDFo4dZJ75bZWUd8SYpoldiB+6/lYu1nvGDxYE8Rv2x9foDLvTKPxW81N9DJE4Io47Ley9FCQ8pevPNZl/IQkau4yYbduPwYNCV5+zfDh+R+aejPIYEXEharNYc0EObP/me/NS0hggMS3VcPFj+g+UbDdscHD4ne6atbMI5dwAeCJMXyeuzr77t5VfUTp0nKWWDXvLd5npSl6AJHiqhj6rmJY/BzKSC53wkGqNhinEW4yooHm7dprTocUwCD08No5eaYbkwk8LuxR1NOM6nqQC6i/X0D8C5zqETICkxu4hE0q8OLwqcjbDfbp9Hg3ARcC+Gil6R3fUEJX3vCsPLslTARQUloPbQ2FamFC3ucUby9PXZQUV2HLnzpW+oRs5G08eBkRIuKrdvN2aT8/WRCLca9zlrNqbDSqKfx7ZqLmWBIFYIw9WuxcaBPZ8RpLs8FCWLX2pRyduDmijQnksO27FZh/r7l6CHeo33ErRL2yEo7d/mERtAPuz+N4wp0zFgse6uBNw514SWuID8dddvRsoQCZ6HplKG1roCQx3/U/Ug6Wr4o3KfhLu6ZrNowZt2vUjKbyfgSvYJ0YZLHUsmzwisWd32IvETkRTp4aSzXCLaIz/bcotCyhd5B/upmDwCl/imvc9zakUpGcfyPKyu44faTEwk94R3WZsKxgUf46IjIn4M6o0IJa362PL5NBmJfmwbRzytpIcDovduDZOl6YxjJlKPLyb4G+FHr2slbLgE7rPIR3AJm3b054v8eBBT+B61EBZ0KvfOGWMaBBxnrcbIgv5bgoNP0go0vzvHaYE1duO7Rr32dlox1g+vVxczt0Uo68Qw4GMGpDIkcXZmZVXnZbNBl3RJSSb8Vc2T4M/XJbo76aY4KiIW27r5R30urYIgOXJC0qf0mpqQJqSa+/XFW1cYe0AsoAp+7PLc1HFJuyyq55JqIs8r5JqLk2QV79GXER00dkgn8vADeP6d1BQ51YXz3+kA+jMc0MlBq7Cy+m8T1RMhLGfs3qvZ1KOpkdMbrvuyD7F/VRAGJvMYVsv9tIhP7b7Ci2GXsFLddXPJVXYCacTrBD3qtv2r4BxHGoGI/9IjMsfHmLa2B2UbsFHTnOSyhIRSrix7EKi4TLZH0RQEd2XfQSzNq92R3zyNcOLXscRu0AVWaA3rFAFMLgJ+XFnWavQYy5SHksd9zBYmNNQnrV0A+D6xxIkRidI3xiL2Ym/cDgpvF8X1GqHcYyQu76xVrBEG3xV+uXZDMWNSeyP00MLTcStcWSbMPUCawufyizr6utRE9LDftWLzlOL5sBnR/3MUhpzWf8TW2zX1U4yYdGDK02OrxGTqFIaWtnNXkqRP0FTlz8DowdlYh+b/iaBraapW4ccRjj/kNLovlV3nhcIplmUB9408aBM1q5j0c78A+zv68LS9/NWyiEcXiBiCjcuCw+BLC4au+x9TtJwzeCkRQgtdCOPKdqdb85dQ/c6SMKmWrFLCbF/rruf7ySP7j2O5mAPEr7K0qKBRqff3rxFMbyJ/A9cSgOkLpNfK90eTRrsGPfnpgRqiN6NW3jLDZnkKStNWi/hfts8efmwyxQGGzyf59ohPLpvdbyDdEZz3OzhHAA5zU9dbvtfXjTcIqGNWJYQGLIrWPSEiO+KtDE+bUnhSwKXtjgAQoc4MLZIbI6tboHPId5n359DFm1tB+PR2GoxK3HF7C+kg5M9KHtaeOqd9i5GBZNZbz/Hq/eomMo/l5fSqXQgqWRgCa3M7CouNOOiq61MPEt3gO3/6VHMxYQLXKhGXGmFcUivT1UX/foszfaebrtBKFe8uVLPTJvr6134Yfo3vSjIjhjPX2mMtSQS3dqVthYT88u84BTD2ZHbwjhZfPlBn76sNeB/ra4qIBED0acSk2YkB2/XqrHhW0bhSttMBIXypA6DqZ6+8RXFtUwPu9orzzWUQN0sYk6z2X4dgzljTgA8EYPmpk01vLCuRkqrifvBsICyf7nHRrmYr6/MSU7wXk3p7HTvCtJyitI6jpN/w5Bn/3SY0LWd1x3/XHlXmcZnHrfB36023aXHCWbs41k98SwH5ul3PL8andHgJ7Akt/tYkAPoSIfaQNfv5gsflALZS5y/bP1PPzVfIDe1ZbQ5OLpjTJrILyEdjXIdMrYyU0a09eNUOXevXtvyrA9w13EBCIS7aQAvWiz+UW+KalgAgvN0OkEXSaRbeJSujVfSSd/Ie5y/btOf2NJQd/7OQ/u/Aq8aXjmEzSGUbwauU0+OJB5meysweAotqbV6BAPFRL36M7s+xjdFeGw9dxTUe8rV6ImLiy5GfbNOTUm2n4ixjw9kQUoSe1Z6/rDbWLYWwnGpHmlAmX0kTX0C2PYnw3FR9QjDpD1+NDJnE94r1gwsqAcAap0sQ/dF/4W4LiG+O8zF3GzbKpTUngKXWdxx3n9a+//F0f+0NL3kyLVSP7I6vGx7kxoxh7on9l4VIhQf/hi9cj5jTAyYFjlnGoW2NRUBIS2bFSC5c3E/yK9Xs80WKf+cSnYpmps99FR51IPpGM9StCE2SSXqWKn0QNQrpoJRvUZBfuA0dg9wkeHY3sm5whpL1Yu99mAkuxShRPFFHqj6z09BjBU+Khcszx7ZzIEq1Avo+erL9CPMwVdtLwh7CTJbhBFaflc61m4mRqUh2uIBzrz8JFxRIllJdgvOXe5wIyltSBgkFJpUcBafFJ7/8ReI5/7rYZE32Yk7KEk+71q0rmmrhhqmaU3sCr4zpwIb/SRfbyYNqEdH9RK2Mg+KbLnY+kz3SuJiegpJwbg0pxtZTFS1aqr2N6ABI0C1k5aE620Zc29qzQ3AvXEYnOLPrz8mJQT+oGa20iHyA0352YeOsOp96Hk14YSRIBG4EQthYMhO4zTyioA+Xk1yG/cG6gubCNN6QLRiYDZieAiOKfsvap3ARdcldk+8naImksmGXnKqiCVRSXEAWdd7sB/MXvNe2OsOLmnlwjq7lxr1ny50S4IgRVrY+bXnevZEfX166RnaVo85QJpYdX5S+Y4L19xGmARRHQtZWzL8C0pZmqE9aPoMinhMmgpAuFeNN16Qn4zkwuoE1cHhokVJD+XC7HAAn8qhNyAmPzByiUHdZTxQM5TSAZo0ylSUjd6KTFpdPzhGalorGBNvvdA3HLjztDQn7iqZW6sD9JUM9Z4cNOgrnGZL2RGh8DmLpV3RYiR9fCmCFRuL7oaYnkYeVZWM5wIO/136DYBFKbhwPPEuG0q6muAAH/ve8V0Dl7Er6rv6Pzjc0HUs1uL0Ncmtcjd+/NZnrrEEWim3ons3hJxZigexNcB6FRtL+kfSRiFgkH5CNgccUck1UH5ezBhn4Gt9m7Ud6Yyw8tvghk6JT3jySZY9GEWJFRe8LrfZ/SwfNSCVbgUK2xQZHGzIg6mkZGfu3i6YLNlU1WtQF9317t3wTjdCYBvzKm1JhPseRW/0QBE9ol9pmkaol9NRKqAo6PcYyUQD1DTk2c+P50fVAKAOPtBez6Pej1hKRsO1wWkM9irqktaO/QtP5cJp3VLFg90BlCFP8JEE9lD2kawsWltbdzXqL1w8lnzXKsgFZ+317D8hv0Jm8GmmWmRt4p3DMibWJbMsU72lWP/6o2y0H2tT9J9kvs6hNEXRGvODVoi0ypuZS7jmlLzccekzpXDhoF1QeF3bpa7w9XqHkRLXTzgiFiGYZG11YzmSFjNTzIadiB1wG44sBmR8OOQ8Si5Ra621R7pWkgMaA41iq+YEkrpub6ZQND4w/oOdB5T6aKpK0TKrFXFcS2Tw4JLghUbRKPuW0CVekmdjmXOPQ9qLsJvYHy3nal2+tHy85Nr+HqN5jtz7NXQCvrwaLj0mh+PV9LdKNk3AtEJfwK9hS0mZWOjJW5SQbr6Y5qdc4fSDB22QfKwOdWfKJSN3/ilgEDAswUGTHBeqdiweJEGH/jvi7MI4An/vrS2GLHcSC///QJJSn7lvAJ/lxbFcvs3T+kt4nBWpfF+DC9fAx+q5Xr/xtPnyeVXysRFjtKqrFRf5XD4aIxDUsypPPZg/lXSXtNqfrgrWTVtxspeFi/QLzUFk8tcadg7gvdNXOh5d9F/HuNRcjWjMnYa/bjdnsk1gBqMXzgvz660BUpRgSPVAY35RUoNzeEHK07CxJxl1ZiNhQizrOCLct8LKuIpFElKdMLnMbiCh/Fwiv1wlWhApE7IVDS6ULdwUAVj0YmyVnIDAtuNcwYBkL2Z4UOSd/3gNaPccr7Rm1AKD6LDijqbsJJThXpLkPueZSHceJLrRvWEoirgv/EgFzZuNrYh6DfSLEsNsh9EtTThclnW75iq7DeY9PVZV/3R5q160QEuSU1BRs1oCQig9BJn8wKGdaNEPQh5ANaW5Sneci5VTY50tHE+GlqVt0x/o6/mdadiqOTaqutg+LuK44MWn3KJIhQD9BO3nAbG8WGuwxkFHr4syN+kFJHEY5MBm20wdtJTpgpA66rMG7rMc1e59r9PQjFqNR0STzspLFCtld702g4hk0847t1JaMsWcI2Y7/mDiiqzEqBKjzLXl5gkH91qZae60B+PlUY6psJ+kuXkG5muT6kxJu6D5xFGzYzb726jNPWaD95sOrjI7sMNchQMi9B6VGpJNsvjo4Mbvizo3vjFeUPvFdR0KHAZDUFhvSZQ6petcaOUL8n3lMP8wSDCluwwAQcv6UvZffw4NLAtJXkEPLcMUhQjOUbyRcQU06AcOEjBYGbHsK8LJMVskr9E/bZ63ze6IkTYV8Vhp5LbguiXbJ8yLBIqixTZxpcnZD8Cn49MnJtqQQAILuqULEUq75hhgnNZEdsvUX7K8wqQQQLFtQ7z4YkpdNGA6filLXYXQMDigE7Wz3IwugB52Mcrh1Mz0uABmG7UfHbNbvRaDHyVyM6GYVux+yW/F7bQDXTa3/38SmHKA5CnmNDsR1UtPVZkh+de5e8waFuSfidXdTZMmSUoEhkWyFGBKZKJH7SYQCRKBAAhYrV3nKbk4ya7Dw6xUOMcVf/jpU+YMdrgmAKGtjnNSm4/Sfzgucb+uyLq6ZLoJJGKlIm5yhPx5aUjKkLA/QQCJL7MNL5VSlaE7mMbYGW94+DGbKNLfPQbmLWHBTX5PZhSZtzzaA1IUa2lGRody9wczf41ubrFqYjNmz2gauBOZmyDOW9PDx0pfv7jh57iJgIpcdvzPrWfryFB2xYGgqZud+jgCVt5SQOAJCEZXiMjCpABLXtAZabBl00QL8chlxaej0y/CcjCee6esM3DSMcwkpn7cW2Chn6EV0NotnTJJWpic0Xmct1PvHWHVIhtib6diIlnlapfZw0dtNF4rKqxo5B+X1zbZRGR9Y5nHWAcLKKvWHofIwEB7R4sVFCSNrcDebAicLKcBcJdxPwoM1rvJMWot1gYVN1ZFnN0RpQXUmqudNuUiy1t32XsDvLIZ1UnLltRyYTyYPywObX3/YuEfBuC/f1zQpSYhLdIDp6PPBx4dk5+ReP9OGrsM4d47K5etKuTU1Bo+PiAQ8ohs3lqyQosLEvsmpE47P5N+NX4azbn300maCTBbBjjOcEEmsPVBn5tqvhWXrv0vwpc8P03cS4TkKv0j2TOeNxrtn29/3sLVmDimGFm91pIreyVHUiwoGj70Z8c4qjQZ+CdPF53hc38knMXBd09JBGv8IEHbWLi0EH+9u1aV/fpv7GNFn+RvtgRgLuzpY7awCqYlzl2au1G327sNZeCOF2l06JMgc9baGblglO4EC8E64uELNoJ/q2dJ27BrXgAsgvrmxQVqC+/C3Bm2vDckfquZAj/h3a0+h8DFurzXksuCWKX5ScQRcv3xFyWxS2HvY+SqBfHRgDMt3WPtESqJMvJgP/4ASAqtgY7wT8tzPVEbDvo2mARo9PYcQlpkjIVU2Q6mKk+EDniJ293m3o2YNPaWhNC9ln83ZCrGMqvfsKnhX6hLZv1POk9u7mCrFnrNoxZmDCI+Ue1qNbGPHTnV38aSFO7VHTr8p3UDWU94QlWlTFS2on2ZyMQhcVVsCl6n0KhugU3662k6XH0Yez2O3+a8K1kl6goUMxzZmC1C4JS9mnXRovTodurV0a6fyQNuILK3wowxK13z9Nd+u7Dnl+Wq9/aCi2lCzCPcTQDTNmbmqm9I77jZQ68GAYJbJjEmi8QicXctzFf8H1YnKVi8I65SBTms/LDayYRTxzYLLiKjq0kRFfrOw7uUhEqUVj6mutQEKVekK9TL+KT4nDNCMNwwwL+fzYsnwDXyCi8dhIAjUn79O/tppWlzY1bw1EGBi1s89NJ3hmXJv9OoJOANgKfN2fS4GGYH7iefE9weG9XqmjtGy15Ppd0khaYAuBAFSzddO5oQA+gVqD7MS/NPgX6DQ0S8IGsb7pwKsq8Aq8ZTPbQdhsEEYmRrsgdpxu1+Xhnu/lv8yUezpcix02z3P/gQk+Xns3m5FKIza+JibH7EEXz/4U9zTYO2jm8AozCMLV6HYCoY/C0wrNK95MtbWwJ17NWdwmJzciFton5ky/LU+mZDI4dlEFwm8C8bRQQMo7f+mKRGMEUMfHzoqbevUsVIBAa0sdUufWbyEkkbG5Z631++yFISJQtm3YIENkxpA2CLERFSrv+pmcKmfFEcaYZBjFtAeqcIsLx2xTqaHppkPXMZruED2e57KOs4Y1eaEA/LdCBnQcrfv0Et0E4OXMB3qZCA/nrkFop8YOHX8/id2Yoxc3bCG4mlrkJlP1mWS9pIDuUbEQo5yEFwAiZMbAUKSFx2ZfEBu6hAIj2c3BY4ucgKqOVoWKowdyL7M/d60vjHwkuaSl8k9cu8OvCDJ3ODANQAXAWhrBsIwUjrZF+rdhZEn0Fo6rOd1jbaKdmUid3R+iw0NKO25uLzP3kdt4SoaptD064wrdeVLkKNfkvn0S+3y2/61HOwb7mHYf0uuc+xkMsW0hhbyfjEQxN0g/W6FGkpCxflKtE7YH4OtPl2fJ/sjpMSVs0dxiUWyyL4uxtxRDGc9ibY2hMeV6JLI1ZV9IQzBX2CX4dISIlYYb1zgjFKyvvhzHjM/TFlbwp5Uxy0Md42ceTXBkspFIJkv7dQztACSS+oO4Zr6hos7iOPDTLSmSj2ZQF1puSqh9KomBHSJDlOT2DJTw4AQp0O3hRsxYTfQmXPhV/GDnnIVCjW2v6/UmHvkyPGx0LPHXLD4NGcNit/plBekLgTlDT/QRZqyH2udCjRl/yvOmcoV7bRtAXk7KjKZekftEc7pvQWNF0eDwzZFObLgGvGh2YVlhmgoYwAEDE3pV3hxhdPz4sg7xtN8pFESxF1M6ogqD5uzjfCpyaMmqk42dntaLKAaPkRwFmpwDADkCTzBDcYN9kxDmHIt2Hem+3daZowzRzF+uj9bFteF6QTp21Hkzvq6HEeLjwjp0/9EKlg+EeK80vVwRSrcSSnxcAUJBQWEpWRqKWfiMZ1FrlJJADqgqKx3euE+T8dh9PInlQ6hMXBlAHrkvSn0TXH/N+ZwoTbFoLvxFysQZR704Mmwl1xfyBTUcO7E48umBoIE+1vAfmcyzqoJAkkXBpxuM67FJXlSxXL26jSqxZpq7hukGqSBYkpuiEn9lhP1JMud6a8EWPBRwueG6ayLfQYdytIvoMy+ubTYfMO7ofZ+66tDiMGJR4rvtnZvutXUcAYa7cz9i5SFbQYPJmr1ky57Nw0ZOUtd8IaSu5aQnR3xsPs4DsDeqNngxhDKEcIbBgftkAJurozK+CwcoUlM5ci6syAgV6NgnT0VS0qM1FBLvI4Cotf/ZhF5qI+/RKX7nfdR3Vnq+2v6aYchU6ftTHOtwSK3sPZeBfAFZb5wlHdCS0IbaElVAtWTC4fNrv9cJ9nkw2uwp7R6vbcxdBP+ZEV/N6tNTpni5OVnWULrZkpcNAt5cfrS3AeYP8cO0hHJOWztffcN1Vqb0zuFntNuIGE5ys2xWMGhKjma1GkDTMhQHrnH6XJWce70MICW1IGdBFvNSTs1/lbXNyW35rO8YpkRDEbPAQCf+u/oYKbrsbOKAwxidy+mVAU9axq5aXJbdXj19vRphe2JoZic/eO7OGiU9N3CSSbEmFCWnTPuTIaQVq7BGMYqWUOhuoiU2U2lP8MW5uHMZ8+qPfMd6oZBbfxUVVxKoG/z3tDphvZN31/IBA67lPpuX0Abj1y0r5lCLPxbycULiXi3z6lBD1s0G4ETYcgjpQRPvkvFufd3CUOl0S9QWWmN04zhyedoFIwOZKBoEqZdWHiHyV3hnvcNul/Mb6SDaDSs6h75MVE1mtMDhRZN4H4xBI/VM9ZgZ3s1MErnFWSVSPbvhzx4hkoCqvY7hqM8qxKWcsCN29+PXJt3HAVbPOapZpbchnLWiNIuyPyAJYe+7kjs2r61kDcG5xNsbVJf+q3Pq9vETtxb4cN0TJGjsyLkrUPyRHAbBrZB8VxMc6EFx9LUDNcsr5xhoynv0CmOi14w6i4ISGLI/SQvkV/7pvXNNdB2+g/LX0Z3QN9Q3wJYTJgW7x3AR9G40K+EAykiG2SNho4nR/ID0IrI6L6HZufIlNNYs4xN3OsSFi4tI/7LXkDEg2WBVfX3NZTwd9Fg+XtVjXDED7eTc4eIu07fL2jeVX8xzUiLPx1TSR1nbUH6DJ6s2fMV9IXhW95ero/LJWXgrqCNGURDzM1ZUT8sRerhzGaUGKl+e1NFKpiwse7SOKY7XyHRrsFf9t2HeV1ke3cvxCwE+vuPbxnfwv3rTj2ipgCSBkVU0v0yHyYR37vFjMJ2Noa93gXsGx0EFDYePAspskK8bIO5KKm3O6PT464vQIo9gc5ijPCteRIehmOSH+x0E/E0pgJPN8K+c7Vfhrz4Fhl2iLdQvfuKyaTWuiQyyOsILadYMgeqlmUbH7it3G2mMIMeFDwSmSsV90h6NifzTqOuAgQSWej9o9ftde/79JvjT71lE903NLt3HeIlN7SDflXUTI1bVLntQWx+wCPLP/cyDtYsJ03zyHPzHGtb5WKKL1vwlbF7xetg0oUs8chSIBawlZ1BNoMe6h4bf/B1h0ST6qCxmE65eeCDvc1CT+m2KZMDSkvyKuL66KpOT0OidLG0HC92TQWyAWWbBlEbGXmHPAZvO1iWiWGTwjBHZ4JF7d9Rgl03a0HRJ5M2ngKmcKrMXl7acXQUQouQgOTdhDodZvlFv6kylBoh8Wl589YQEkX+GlUPkgNMZsFN7OPun5vD9ElQVJQX+4A70Lafxh4MDNBP5azQ65YZJMrwhsbtsb+CwbxDN9rUAWNv1kCBzgS2niOtl2QMu9SBbfVa6KJTssfky+F9gOMt7o+TiYU8funqWzECygMdJ1VfJ+Oga3X9T9SV32DBewWLspqd6IHX+7bxT0RYl4EYLrXnKtHRp7umlMzg4s5/b1UuhqK/rxno1ZJAPRLMKHOW+7zfonIo3zlB4+hv9va8eCWLTpWVFHCVO1NLUzUSKwCBtDC3vip22+ZMMCJhipunQIcKG0BKhBZR6GAo4r8wJjXJMaJk4ET+DIFjpn2IupFq5bYMTcJaSkKEWjJ/Il+JTnIcE9vyKYCAYwi52ATw0aUuzJHWxQrIs2U7I6TfI85NcJyKmjLjXVNL5bhs/PZCCl3DTheIIF1qj8CyBxeFKwW1N1nBcyDMjcFEVJ8CVfcspuZEF/SWV+Sk1cmKFmJKhrebZg9HrX4zudAbF0SS40uTWc0nafxUZHdN4a3h5opfFGtneglhvUdiDNubhdY8onK0MT7NHCJof5REzpn7pjHck2yLXq8hdJbJkXdD2BN+HNmRPo2+DBCKyyxnTPD7Mt5xvISZtutyA0XGqRbkiVKJO5OkYcuof7j/9R6wwJ2ZrO7P2Ne7uJzUKqU+oX/ZY+Oj5ohrsw43gWi7qiCznMX+aPFUFaOmps9YU6GyzexVmtbIPkA99srP8WVoP6dxORg1RxNz2QL1lfP62beJ0WJhFLdChdHgJFBCLgz4KQbO7163XFnf0vVsJWTeYyUiHJW1hxzfX/iI7JjPrs4vxkeyFVAUKIA6b8nrUyVHpHikGsFkEbCLMgEYGvhXpoEyqvY65jlDyKu8if3D9wDrzwVp1kQozEm+x0d7PWWJ6zAxkUZrxdcXuRjdDEhamaHW0x5fLB/vqcI53sW4Bw9IGdEaU8mTG37O+dUT/PyM7hpcaKp0E24k89Sb9WMXziOwzcBkG2jRrAnEDbwRF9UopV+E4oZxuyV2Yd4QjzYB+h0XJHr4HDR2pqBnNsMMJdMY61m5HfHeGfNqP9irlmjLaJRgndkIHdsyIcSB6a7L38JkKUV6nUSLdEgQAboRld9/jb/6BcRxCWn1JQLBCCvQRIAehRgQniof/fff//4hz/+H+f//DsCENo+V46k+bMAAAD+kd//tFJwutFVRmOnlGA4KFxnDrX7rdN6JwjsrwuATjjzlK97U4R0KsxwmR/6xpXTT7fTROEwwiMCKUnd4FZo0Q5qOpTblqmNcD2eSufaWEG5tgPlF3c2ueHWS6oHMEke4lbPTbGbwQd8SUjfpXAcooQi3UFMszleP0f9/OgKvGAQA2tgCImv8CeFYZlnkOqzGZD5GVhT1e83X8oz6WInFq6fyf3ei9130mb/ugV0eoKyV0qz31fCF90Ax55Z01m2x1xOTBrQDw/Mx21Bz3N7WwWvZC2Fw8gjx68lAqXgtMcCBJEc3sWz39tQKaRcj+nmjp5tLsVl0NUloays/tp1wa7VSYFrt7HR/wBQ4AD1pVQiNrvMrnvZggFfsRBXka47Y2VuSOwAK2s9+5r7YbrDoW1Ctmb9hOigpV27cSyVHQL1yYPbpK+0lpZ4QvmFQ4K4OkkhDUgUqJQdftjnkusFaTHysLSQNE+92ZexAN+6Jo2/5Oj9606MfRE2lg5mAMdpcsoDIPdTw2PYnTUVv8Epi+n/ywFi/9WNush4cAhwI6x/cle3ZsAEkVJGENsJyC+Wg3m/5/vgEkS44O8OiGTp3zF//sgqnls7pPoy9ixXMMGv8CeLQOoAAAAAAAAAAAAA==";
		
		// src/client/theme/mikus.ts
		var STYLE_ID = "dsh-probe/theme.css";
		var MASCOT = QWQ_default;
		var THEME_CSS = mikus_theme_default;
		function importTheme() {
		  if (typeof document === "undefined") return;
		  const existing = document.querySelector(`style[data-plugin-css="${STYLE_ID}"]`);
		  if (existing !== null) {
		    if (existing.textContent !== THEME_CSS) existing.textContent = THEME_CSS;
		    return;
		  }
		  const tag = document.createElement("style");
		  tag.dataset.plugin = "@local/dsh-probe";
		  tag.dataset.pluginCss = STYLE_ID;
		  tag.textContent = THEME_CSS;
		  document.head.appendChild(tag);
		}
		
		// src/client/panel/MonitorPage.tsx
		var import_jsx_runtime3 = require("react/jsx-runtime");
		function greetingFor(hours) {
		  if (hours >= 5 && hours < 12) return tt("greeting.morning");
		  if (hours >= 12 && hours < 18) return tt("greeting.afternoon");
		  if (hours >= 18 && hours < 23) return tt("greeting.evening");
		  return tt("greeting.night");
		}
		function levelFor(value) {
		  if (value === void 0 || !Number.isFinite(value)) return "normal";
		  if (value >= 85) return "danger";
		  if (value >= 60) return "warning";
		  return "normal";
		}
		function MetricBar({ label, value }) {
		  const level = levelFor(value);
		  const width = value === void 0 ? 0 : Math.min(100, Math.max(0, value));
		  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "metric", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "metric-label", children: label }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "metric-bar", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `metric-bar-fill level-${level}`, style: { width: `${width}%` } }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `metric-value level-${level}`, children: percent(value) })
		  ] });
		}
		function parseTag(tag) {
		  const match = /<(\w+)>$/.exec(tag.trim());
		  if (match === null) return { text: tag.trim(), className: "" };
		  return { text: tag.replace(/<\w+>$/, "").trim(), className: ` tag-${(match[1] ?? "").toLowerCase()}` };
		}
		function NodeCard({ host, onOpen }) {
		  const current2 = host.current;
		  const isOnline = host.status === "online";
		  const os = current2 === null ? null : formatOs(current2.os);
		  const tags = host.tags.slice(0, 2).map(parseTag);
		  const swap = current2?.swapTotal ?? 0;
		  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
		    "div",
		    {
		      className: `node-card${isOnline ? "" : " offline"}`,
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
		      style: { cursor: "pointer" },
		      children: [
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "node-card-header", children: [
		          hasFlag(host.regionCode) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
		            "span",
		            {
		              className: "node-card-flag",
		              title: host.regionName,
		              style: { backgroundImage: `url("${flagUrl(host.regionCode)}")` }
		            }
		          ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "node-card-flag node-card-flag-placeholder", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "?" }) }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "node-card-info", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "node-card-name", children: [
		              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `node-status-dot${isOnline ? "" : " offline"}` }),
		              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "node-name-text", children: host.name })
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "node-card-subtitle", children: [
		              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-card-os", children: [
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `os-icon os-icon-${os?.icon ?? "unknown"}` }),
		                os?.name ?? "-"
		              ] }),
		              tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `node-api-tag${tag.className}`, children: tag.text }, tag.text))
		            ] })
		          ] })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "node-card-metrics", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MetricBar, { label: tt("card.cpu"), value: current2?.cpu }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MetricBar, { label: "RAM", value: current2?.memPct }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MetricBar, { label: tt("card.disk"), value: current2?.diskPct }),
		          swap > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MetricBar, { label: "Swap", value: current2?.swapPct }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "metric", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "metric-label", children: "Load" }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "metric-value", children: load(current2?.load ?? null) })
		          ] })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "node-card-footer", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-info-row", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "node-uptime", children: uptime(current2?.uptime) }),
		            current2 !== null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "node-uptime", children: current2.hostname })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-network-row", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-traffic-tag traffic-tag-up", title: "total upload", children: [
		              "\u2191 ",
		              bytes(current2?.totalTx)
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-traffic-tag traffic-tag-down", title: "total download", children: [
		              "\u2193 ",
		              bytes(current2?.totalRx)
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-network-speed", children: [
		              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "network-dir", children: [
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "arrow-up", children: "\u25B2" }),
		                rate(current2?.txRate)
		              ] }),
		              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "network-dir", children: [
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "arrow-down", children: "\u25BC" }),
		                rate(current2?.rxRate)
		              ] })
		            ] })
		          ] })
		        ] })
		      ]
		    }
		  );
		}
		function NodeRow({ host }) {
		  const current2 = host.current;
		  const os = current2 === null ? null : formatOs(current2.os);
		  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { "data-status": host.status, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-card-name", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `node-status-dot${host.status === "online" ? "" : " offline"}` }),
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "node-name-text", children: host.name })
		    ] }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "node-card-os", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `os-icon os-icon-${os?.icon ?? "unknown"}` }),
		      os?.name ?? "-"
		    ] }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: percent(current2?.cpu) }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: percent(current2?.memPct) }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: percent(current2?.diskPct) }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { children: [
		      rate(current2?.rxRate),
		      " / ",
		      rate(current2?.txRate)
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: uptime(current2?.uptime) })
		  ] });
		}
		function MonitorPage({ snapshot, handlers }) {
		  const [clock, setClock] = (0, import_react3.useState)(() => /* @__PURE__ */ new Date());
		  const [query, setQuery] = (0, import_react3.useState)("");
		  const [group, setGroup] = (0, import_react3.useState)("all");
		  const [view, setView] = (0, import_react3.useState)("grid");
		  (0, import_react3.useEffect)(() => {
		    const timer = setInterval(() => {
		      setClock(/* @__PURE__ */ new Date());
		    }, 1e3);
		    return () => clearInterval(timer);
		  }, []);
		  const groups = (0, import_react3.useMemo)(() => {
		    const seen = /* @__PURE__ */ new Set();
		    for (const host of snapshot.hosts) for (const tag of host.tags) seen.add(parseTag(tag).text);
		    return ["all", ...[...seen].sort()];
		  }, [snapshot.hosts]);
		  const visible = (0, import_react3.useMemo)(() => {
		    const needle = query.trim().toLowerCase();
		    return snapshot.hosts.filter((host) => {
		      if (group !== "all" && !host.tags.some((tag) => parseTag(tag).text === group)) return false;
		      if (needle === "") return true;
		      const haystack = [host.name, host.location, host.regionName, current(host)?.hostname ?? "", ...host.tags].join(" ").toLowerCase();
		      return haystack.includes(needle);
		    });
		  }, [snapshot.hosts, query, group]);
		  const totals = (0, import_react3.useMemo)(() => {
		    let up = 0;
		    let down = 0;
		    for (const host of snapshot.hosts) {
		      up += host.current?.totalTx ?? 0;
		      down += host.current?.totalRx ?? 0;
		    }
		    return { up, down };
		  }, [snapshot.hosts]);
		  const online = snapshot.counts.online;
		  const offline = snapshot.hosts.length - online;
		  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "probe-wall probe-theme", "data-theme": handlers.theme, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "header", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "header-left", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "site-name", children: tt("page.title") }) }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "header-center" }),
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "header-right", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "search-box", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: "search-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m21 21-4.35-4.35" })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
		            "input",
		            {
		              type: "text",
		              placeholder: tt("list.search"),
		              autoComplete: "off",
		              value: query,
		              onChange: (event) => {
		                setQuery(event.target.value);
		              }
		            }
		          )
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "view-toggle", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
		            "button",
		            {
		              type: "button",
		              className: `view-btn${view === "grid" ? " active" : ""}`,
		              title: tt("view.cards"),
		              onClick: () => {
		                setView("grid");
		              },
		              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "3", y: "3", width: "7", height: "7" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "14", y: "3", width: "7", height: "7" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "3", y: "14", width: "7", height: "7" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "14", y: "14", width: "7", height: "7" })
		              ] })
		            }
		          ),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
		            "button",
		            {
		              type: "button",
		              className: `view-btn${view === "table" ? " active" : ""}`,
		              title: tt("view.table"),
		              onClick: () => {
		                setView("table");
		              },
		              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
		              ] })
		            }
		          )
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "header-right-end", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
		            "button",
		            {
		              type: "button",
		              className: "theme-toggle",
		              title: handlers.theme === "dark" ? tt("theme.light") : tt("theme.dark"),
		              onClick: handlers.onToggleTheme,
		              children: handlers.theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: "sun-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "5" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
		                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
		              ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className: "moon-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }) })
		            }
		          ),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "login-btn", title: tt("entry.settings"), onClick: handlers.onAdmin, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
		          ] }) })
		        ] })
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: "main-content", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "welcome-section", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "welcome-decoration", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "deco-circle deco-1" }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "deco-circle deco-2" }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "deco-circle deco-3" }),
		          Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sakura-petal" }, index))
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "welcome-content", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "welcome-greeting", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { className: "greeting-icon", src: MASCOT, alt: "", "aria-hidden": "true" }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "greeting-info", children: [
		              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "greeting-text", children: greetingFor(clock.getHours()) }),
		              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "greeting-subtitle", children: tt("wall.welcome") })
		            ] })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "welcome-time", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "time-label", children: clock.toLocaleDateString(void 0, { year: "numeric", month: "long", day: "numeric", weekday: "long" }) }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "time-value", children: [
		              String(clock.getHours()).padStart(2, "0"),
		              ":",
		              String(clock.getMinutes()).padStart(2, "0"),
		              ":",
		              String(clock.getSeconds()).padStart(2, "0")
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "traffic-text", children: [
		              "\u2191 ",
		              bytes(totals.up),
		              " / \u2193 ",
		              bytes(totals.down)
		            ] })
		          ] })
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "stats-bar", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "stat-item", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "stat-label", children: tt("summary.total") }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "stat-value", children: snapshot.hosts.length })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "stat-item online", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "stat-label", children: tt("summary.online") }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "stat-value", children: online })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "stat-item offline", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "stat-label", children: tt("summary.offline") }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "stat-value", children: offline })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "group-filter", children: groups.map((name) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
		          "button",
		          {
		            type: "button",
		            className: `filter-btn${group === name ? " active" : ""}`,
		            onClick: () => {
		              setGroup(name);
		            },
		            children: name === "all" ? tt("list.filterAll") : name
		          },
		          name
		        )) })
		      ] }),
		      view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nodes-grid", children: visible.map((host) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NodeCard, { host, onOpen: () => {
		        handlers.onOpenHost(host.id);
		      } }, host.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nodes-table-container", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "table-card", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("table", { className: "nodes-table", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { children: tt("table.name") }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { children: tt("table.os") }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { children: "CPU" }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { children: "RAM" }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { children: tt("card.disk") }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { children: tt("table.net") }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { children: tt("card.uptime") })
		        ] }) }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: visible.map((host) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NodeRow, { host }, host.id)) })
		      ] }) }) }),
		      visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "empty-state", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "empty-state-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
		          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "8", y1: "12", x2: "16", y2: "12" })
		        ] }) }),
		        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "empty-state-text", children: tt("list.empty") })
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { className: "footer", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Powered by DSH Probe" }),
		      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
		        "Panel ",
		        snapshot.versions.panel,
		        " \xB7 Agent ",
		        snapshot.versions.agent
		      ] })
		    ] })
		  ] });
		}
		function current(host) {
		  return host.current;
		}
		
		// src/client/panel/AdminPage.tsx
		var import_react4 = require("react");
		var import_jsx_runtime4 = require("react/jsx-runtime");
		var RAIL = [
		  {
		    key: "hosts",
		    label: "admin.hosts",
		    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "3", y: "4", width: "18", height: "7", rx: "2" }),
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "3", y: "13", width: "18", height: "7", rx: "2" }),
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M7 7.5h.01M7 16.5h.01" })
		    ] })
		  },
		  {
		    key: "latency",
		    label: "admin.latency",
		    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M3 12h4l2.5-7 5 14 2.5-7h4" }) })
		  },
		  {
		    key: "alerts",
		    label: "admin.alerts",
		    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" }),
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M13.7 21a2 2 0 0 1-3.4 0" })
		    ] })
		  },
		  {
		    key: "settings",
		    label: "admin.settings",
		    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
		    ] })
		  }
		];
		function AdminPage({ snapshot, api, section, onSection, onBack, onChanged, hosts, onAdd, onEdit, onInstall, onDeleted, sections }) {
		  const [open, setOpen] = (0, import_react4.useState)(false);
		  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: panel_default.admin, "data-dsh-probe-admin": "", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: panel_default.adminTopbar, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: panel_default.adminBack, onClick: onBack, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M9.6 3.2 4.8 8l4.8 4.8" }) }),
		        tt("admin.back")
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: panel_default.adminTitle, children: tt("admin.title") }),
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
		        "button",
		        {
		          type: "button",
		          className: panel_default.adminMenu,
		          "aria-label": tt("admin.title"),
		          onClick: () => {
		            setOpen((current2) => !current2);
		          },
		          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 16 16", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M2.5 4.5h11M2.5 8h11M2.5 11.5h11" }) })
		        }
		      )
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: panel_default.adminBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { className: panel_default.adminRail, "data-open": open ? "true" : void 0, children: RAIL.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
		        "button",
		        {
		          type: "button",
		          className: panel_default.adminRailItem,
		          "data-active": section === item.key ? "true" : void 0,
		          onClick: () => {
		            onSection(item.key);
		            setOpen(false);
		          },
		          children: [
		            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: panel_default.adminRailIcon, children: item.icon }),
		            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: tt(item.label) }),
		            item.key === "alerts" && snapshot.alerts.active.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: panel_default.adminRailBadge, children: snapshot.alerts.active.length })
		          ]
		        },
		        item.key
		      )) }),
		      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: panel_default.adminContent, children: sections[section] })
		    ] })
		  ] });
		}
		
		// src/client/panel/NodeModal.tsx
		var import_react5 = require("react");
		
		// src/client/panel/themeCharts.ts
		var fontFamily = "";
		function cssVar(name, scope) {
		  if (typeof document === "undefined") return "";
		  const host = scope ?? document.querySelector(".probe-theme") ?? document.documentElement;
		  return getComputedStyle(host).getPropertyValue(name).trim();
		}
		function alpha(colour, alphaValue) {
		  const hex = colour.trim();
		  if (/^#[0-9a-f]{6}$/i.test(hex)) return `${hex}${alphaValue.toString(16).padStart(2, "0")}`;
		  const rgb = /^rgba?\(([^)]+)\)$/i.exec(hex);
		  if (rgb !== null) {
		    const [r, g, b] = rgb[1].split(/[,\s]+/).filter(Boolean);
		    return `rgba(${r}, ${g}, ${b}, ${(alphaValue / 255).toFixed(3)})`;
		  }
		  return hex;
		}
		function axisLabel(value, suffix) {
		  if (suffix === "%") return `${value.toFixed(0)}%`;
		  return `${value.toFixed(0)}${suffix}`;
		}
		function timeLabel(time, rangeHours) {
		  const date = new Date(time);
		  const pad = (value) => String(value).padStart(2, "0");
		  if (rangeHours <= 24) return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
		  return `${date.getMonth() + 1}/${date.getDate()}`;
		}
		function drawLineChart(canvas, records, options) {
		  const themeHost = canvas.closest(".probe-theme");
		  const colour = options.color.startsWith("--") ? cssVar(options.color, themeHost) : options.color;
		  const ctx = canvas.getContext("2d");
		  if (ctx === null) return;
		  const dpr = window.devicePixelRatio || 1;
		  const rect = canvas.getBoundingClientRect();
		  const targetW = Math.round(rect.width * dpr);
		  const targetH = Math.round(rect.height * dpr);
		  if (canvas.width !== targetW || canvas.height !== targetH) {
		    canvas.width = targetW;
		    canvas.height = targetH;
		    ctx.scale(dpr, dpr);
		  } else {
		    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		  }
		  const w = rect.width;
		  const h = rect.height;
		  const padding = { top: 24, right: 20, bottom: 32, left: 50 };
		  const chartW = w - padding.left - padding.right;
		  const chartH = h - padding.top - padding.bottom;
		  ctx.clearRect(0, 0, w, h);
		  if (chartW <= 0 || chartH <= 0) return;
		  const gridColor = cssVar("--chart-grid", themeHost);
		  const textColor = cssVar("--chart-text", themeHost);
		  const dotCenter = cssVar("--chart-dot-center", themeHost);
		  if (fontFamily === "") fontFamily = getComputedStyle(document.body).fontFamily || "sans-serif";
		  ctx.beginPath();
		  ctx.strokeStyle = gridColor;
		  ctx.lineWidth = 1;
		  ctx.setLineDash([4, 4]);
		  for (let index = 0; index <= 4; index += 1) {
		    const y = padding.top + chartH / 4 * index;
		    ctx.moveTo(padding.left, y);
		    ctx.lineTo(w - padding.right, y);
		  }
		  ctx.stroke();
		  ctx.setLineDash([]);
		  ctx.font = `11px ${fontFamily}`;
		  ctx.fillStyle = textColor;
		  ctx.textAlign = "right";
		  for (let index = 0; index <= 4; index += 1) {
		    const y = padding.top + chartH / 4 * index;
		    const value = options.max - (options.max - options.min) * (index / 4);
		    ctx.fillText(axisLabel(value, options.suffix), padding.left - 8, y + 4);
		  }
		  const range = options.max - options.min || 1;
		  const stepX = chartW / Math.max(records.length - 1, 1);
		  const baseY = padding.top + chartH;
		  const points = [];
		  for (let index = 0; index < records.length; index += 1) {
		    const value = records[index]?.value;
		    if (value === null || value === void 0 || Number.isNaN(value)) continue;
		    const x = padding.left + index * stepX;
		    const normalized = Math.max(0, Math.min(1, (value - options.min) / range));
		    points.push(x, baseY - normalized * chartH);
		  }
		  const count = points.length >> 1;
		  if (count > 1) {
		    ctx.beginPath();
		    ctx.moveTo(points[0], points[1]);
		    if (count > 50) {
		      for (let index = 2; index < points.length; index += 2) {
		        ctx.lineTo(points[index], points[index + 1]);
		      }
		    } else {
		      for (let index = 2; index < points.length; index += 2) {
		        const prevX = points[index - 2];
		        const prevY = points[index - 1];
		        const currX = points[index];
		        const currY = points[index + 1];
		        const midX = (prevX + currX) * 0.5;
		        ctx.quadraticCurveTo(midX, prevY, midX, (prevY + currY) * 0.5);
		        ctx.quadraticCurveTo(midX, currY, currX, currY);
		      }
		    }
		    ctx.strokeStyle = colour;
		    ctx.lineWidth = 2.5;
		    ctx.lineJoin = "round";
		    ctx.lineCap = "round";
		    ctx.stroke();
		    ctx.lineTo(points[points.length - 2], baseY);
		    ctx.lineTo(points[0], baseY);
		    ctx.closePath();
		    const gradient = ctx.createLinearGradient(0, padding.top, 0, baseY);
		    gradient.addColorStop(0, alpha(colour, 64));
		    gradient.addColorStop(0.5, alpha(colour, 21));
		    gradient.addColorStop(1, alpha(colour, 2));
		    ctx.fillStyle = gradient;
		    ctx.fill();
		    const dotInterval = Math.ceil(count / 20);
		    for (let index = 0; index < count; index += 1) {
		      if (index % dotInterval !== 0 && index !== count - 1) continue;
		      const px = points[index * 2];
		      const py = points[index * 2 + 1];
		      ctx.beginPath();
		      ctx.arc(px, py, 3, 0, Math.PI * 2);
		      ctx.fillStyle = colour;
		      ctx.fill();
		      ctx.beginPath();
		      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
		      ctx.fillStyle = dotCenter;
		      ctx.fill();
		    }
		  }
		  if (records.length > 0) {
		    ctx.fillStyle = textColor;
		    ctx.textAlign = "center";
		    ctx.font = `10px ${fontFamily}`;
		    const first = records[0];
		    const last = records[records.length - 1];
		    ctx.textAlign = "left";
		    ctx.fillText(timeLabel(first.time, options.rangeHours), padding.left, h - 10);
		    ctx.textAlign = "right";
		    ctx.fillText(timeLabel(last.time, options.rangeHours), w - padding.right, h - 10);
		  }
		  const state = {
		    padding,
		    points,
		    min: options.min,
		    max: options.max,
		    records,
		    color: colour,
		    suffix: options.suffix,
		    rangeHours: options.rangeHours
		  };
		  canvas.dataset.chart = "ready";
		  canvas.__chartState = state;
		}
		function nearestSample(canvas, clientX) {
		  const withState = canvas;
		  const state = withState.__chartState;
		  if (state === void 0 || state.points.length === 0) return null;
		  const rect = canvas.getBoundingClientRect();
		  const localX = clientX - rect.left;
		  let best = -1;
		  let bestDistance = Number.POSITIVE_INFINITY;
		  for (let index = 0; index < state.points.length; index += 2) {
		    const distance = Math.abs(state.points[index] - localX);
		    if (distance < bestDistance) {
		      bestDistance = distance;
		      best = index;
		    }
		  }
		  if (best < 0) return null;
		  const record = state.records[Math.round((state.points[best] - state.padding.left) / Math.max(1, (rect.width - state.padding.left - state.padding.right) / Math.max(state.records.length - 1, 1)))];
		  if (record === void 0) return null;
		  return { record, x: state.points[best], y: state.points[best + 1] };
		}
		function tooltipText(sample, suffix, rangeHours) {
		  const value = sample.record.value;
		  const shown = value === null ? "\u2014" : `${value.toFixed(suffix === "%" ? 1 : 2)}${suffix}`;
		  return `${timeLabel(sample.record.time, rangeHours)} \xB7 ${shown}`;
		}
		
		// src/client/panel/NodeModal.tsx
		var import_jsx_runtime5 = require("react/jsx-runtime");
		var RANGES = [
		  { key: "1h", label: "1h" },
		  { key: "24h", label: "24h" },
		  { key: "7d", label: "7d" }
		];
		function InfoItem({ label, value, nowrap }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "modal-info-item", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "modal-info-label", children: label }),
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `modal-info-value${nowrap === true ? " modal-info-value-nowrap" : ""}`, children: value })
		  ] });
		}
		function ChartSection({ title, records, colour, suffix, rangeHours }) {
		  const ref = (0, import_react5.useRef)(null);
		  const [tip, setTip] = (0, import_react5.useState)(null);
		  (0, import_react5.useEffect)(() => {
		    const canvas = ref.current;
		    if (canvas === null) return;
		    const paint = () => {
		      drawLineChart(canvas, records, { min: 0, max: 100, color: colour, suffix, rangeHours });
		    };
		    paint();
		    const observer = new ResizeObserver(paint);
		    observer.observe(canvas);
		    return () => {
		      observer.disconnect();
		    };
		  }, [records, colour, suffix, rangeHours]);
		  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "chart-section", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: title }),
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { position: "relative" }, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
		        "canvas",
		        {
		          ref,
		          width: 600,
		          height: 160,
		          onMouseMove: (event) => {
		            const sample = nearestSample(event.currentTarget, event.clientX);
		            setTip(sample === null ? null : { x: sample.x, y: sample.y, text: tooltipText(sample, suffix, rangeHours) });
		          },
		          onMouseLeave: () => {
		            setTip(null);
		          }
		        }
		      ),
		      tip !== null && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
		        "div",
		        {
		          style: {
		            position: "absolute",
		            left: Math.max(0, tip.x - 40),
		            top: 0,
		            padding: "2px 6px",
		            borderRadius: 6,
		            background: "var(--bg-card)",
		            border: "1px solid var(--border-color)",
		            color: "var(--text-primary)",
		            fontSize: 11,
		            whiteSpace: "nowrap",
		            pointerEvents: "none"
		          },
		          children: tip.text
		        }
		      )
		    ] })
		  ] });
		}
		function NodeModal({ api, host, theme, onClose }) {
		  const [range, setRange] = (0, import_react5.useState)("1h");
		  const [history, setHistory] = (0, import_react5.useState)(null);
		  const sample = host.current;
		  const os = sample === null ? null : formatOs(sample.os);
		  (0, import_react5.useEffect)(() => {
		    let live = true;
		    api.history(host.id, range).then((next) => {
		      if (live) setHistory(next);
		    }).catch(() => {
		      if (live) setHistory(null);
		    });
		    return () => {
		      live = false;
		    };
		  }, [api, host.id, range]);
		  (0, import_react5.useEffect)(() => {
		    const onKey = (event) => {
		      if (event.key === "Escape") onClose();
		    };
		    document.addEventListener("keydown", onKey);
		    const previous = document.body.style.overflow;
		    document.body.style.overflow = "hidden";
		    return () => {
		      document.removeEventListener("keydown", onKey);
		      document.body.style.overflow = previous;
		    };
		  }, [onClose]);
		  const toRecords = (pick) => (history?.points ?? []).map((point) => ({ time: point.t, value: pick(point) }));
		  const cpu = toRecords((point) => point.c);
		  const mem = toRecords((point) => point.m);
		  const disk = toRecords((point) => point.d);
		  const rangeHours = range === "1h" ? 1 : range === "24h" ? 24 : 24 * 7;
		  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "probe-theme", "data-theme": theme, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "modal-overlay active", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "modal", role: "dialog", "aria-modal": "true", onClick: (event) => {
		    event.stopPropagation();
		  }, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "modal-scroll-indicator" }),
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "modal-drag-handle" }),
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "modal-header", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h2", { children: [
		        hasFlag(host.regionCode) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
		          "span",
		          {
		            className: "node-card-flag",
		            style: { backgroundImage: `url("${flagUrl(host.regionCode)}")`, display: "inline-block", marginRight: 8, verticalAlign: "middle" }
		          }
		        ),
		        host.name
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: "modal-close", onClick: onClose, children: "\xD7" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "modal-body", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "modal-page modal-page-overview active", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "modal-info", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("table.os"), value: os?.name ?? "-" }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: "CPU", value: sample?.cpuModel !== void 0 && sample.cpuModel !== "" ? sample.cpuModel : "-" }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: "Arch", value: sample?.arch ?? "-" }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: "Kernel", value: sample?.kernel ?? "-" }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("card.mem"), value: sample === null ? "-" : `${bytes(sample.memUsed)} / ${bytes(sample.memTotal)}` }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("card.swap"), value: sample === null || sample.swapTotal <= 0 ? "-" : `${bytes(sample.swapUsed)} / ${bytes(sample.swapTotal)}` }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("card.disk"), value: sample === null ? "-" : `${bytes(sample.diskUsed)} / ${bytes(sample.diskTotal)}` }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("card.loadShort"), value: `${load(sample?.load1)} / ${load(sample?.load5)} / ${load(sample?.load15)}` }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("detail.conn"), value: `TCP: ${sample?.connTcp ?? 0} / UDP: ${sample?.connUdp ?? 0}` }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("card.uptime"), value: sample === void 0 || sample === null ? "-" : durationShort(sample.uptime) }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("card.region"), value: host.regionName !== "" ? host.regionName : "-" }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
		          InfoItem,
		          {
		            label: tt("detail.traffic"),
		            value: `\u2191 ${bytes(sample?.totalTx)} / \u2193 ${bytes(sample?.totalRx)}`,
		            nowrap: true
		          }
		        )
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "time-range-controls", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "time-range-label", children: tt("detail.range") }),
		        RANGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
		          "button",
		          {
		            type: "button",
		            className: `time-range-btn${range === item.key ? " active" : ""}`,
		            onClick: () => {
		              setRange(item.key);
		            },
		            children: item.label
		          },
		          item.key
		        ))
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "modal-charts", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ChartSection, { title: `CPU ${percent(sample?.cpu)}`, records: cpu, colour: "--accent", suffix: "%", rangeHours }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ChartSection, { title: `${tt("card.mem")} ${percent(sample?.memPct)}`, records: mem, colour: "--success", suffix: "%", rangeHours }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ChartSection, { title: `${tt("card.disk")} ${percent(sample?.diskPct)}`, records: disk, colour: "--info", suffix: "%", rangeHours })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "modal-info", style: { marginTop: 12 }, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("detail.net"), value: `\u2191 ${rate(sample?.txRate)} / \u2193 ${rate(sample?.rxRate)}`, nowrap: true }),
		        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InfoItem, { label: tt("card.seen"), value: host.lastSeen === 0 ? tt("card.never") : new Date(host.lastSeen).toLocaleString() })
		      ] })
		    ] }) })
		  ] }) }) });
		}
		
		// src/client/panel/SettingsPage.tsx
		var import_react6 = require("react");
		var import_jsx_runtime6 = require("react/jsx-runtime");
		function withSettingsDefaults(settings) {
		  if (settings === void 0) return void 0;
		  return {
		    ...settings,
		    notify: settings.notify ?? { enabled: false, url: "", onResolve: true }
		  };
		}
		var ruleRows = [
		  { key: "cpu", label: tt("settings.ruleCpu"), unit: "%", step: 5 },
		  { key: "memory", label: tt("settings.ruleMemory"), unit: "%", step: 5 },
		  { key: "disk", label: tt("settings.ruleDisk"), unit: "%", step: 5 },
		  { key: "load", label: tt("settings.ruleLoad"), unit: "\xD7", step: 0.5 }
		];
		function SettingsBody({ settings, api, versions, onSaved }) {
		  const [draft, setDraft] = (0, import_react6.useState)(withSettingsDefaults(settings));
		  const [dirty, setDirty] = (0, import_react6.useState)(false);
		  const [saving, setSaving] = (0, import_react6.useState)(false);
		  const [saved, setSaved] = (0, import_react6.useState)(false);
		  const [error, setError] = (0, import_react6.useState)(null);
		  const [testing, setTesting] = (0, import_react6.useState)(false);
		  const [testResult, setTestResult] = (0, import_react6.useState)(null);
		  const savedTimer = (0, import_react6.useRef)(null);
		  (0, import_react6.useEffect)(() => {
		    if (!dirty) setDraft(withSettingsDefaults(settings));
		  }, [settings, dirty]);
		  (0, import_react6.useEffect)(() => () => {
		    if (savedTimer.current !== null) clearTimeout(savedTimer.current);
		  }, []);
		  if (draft === void 0) {
		    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: panel_default.section, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: panel_default.muted, children: tt("chart.loading") }) });
		  }
		  const updateRule = (key, field, value) => {
		    setDirty(true);
		    setDraft((current2) => {
		      if (current2 === void 0) return current2;
		      const rules = { ...current2.rules };
		      const rule = { ...rules[key] };
		      rule[field] = value;
		      rules[key] = rule;
		      return { ...current2, rules };
		    });
		  };
		  const updateNotify = (patch) => {
		    setDirty(true);
		    setDraft((current2) => current2 === void 0 ? current2 : { ...current2, notify: { ...current2.notify, ...patch } });
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
		  const ruleRows2 = [
		    { key: "cpu", label: tt("settings.ruleCpu"), unit: "%", step: 5 },
		    { key: "memory", label: tt("settings.ruleMemory"), unit: "%", step: 5 },
		    { key: "disk", label: tt("settings.ruleDisk"), unit: "%", step: 5 },
		    { key: "load", label: tt("settings.ruleLoad"), unit: "\xD7", step: 0.5 }
		  ];
		  const invalid = ruleRows2.some((row) => {
		    const rule = draft.rules[row.key];
		    return !(rule.threshold >= 1) || !(rule.holdSec >= 0);
		  }) || !(draft.rules.offline.holdSec >= 1) || !(draft.reportIntervalSec >= 1) || draft.notify.enabled && !urlValid;
		  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.section, children: [
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: panel_default.errorBar, children: tt("error.action", { message: error }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.sectionHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.sectionTitle, children: tt("settings.title") }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.sectionHint, children: tt("settings.desc") })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.settingsGrid, children: [
		      ruleRows2.map((row) => {
		        const rule = draft.rules[row.key];
		        return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.settingsRow, "data-disabled": rule.enabled ? void 0 : "true", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.check, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
		              "input",
		              {
		                type: "checkbox",
		                checked: rule.enabled,
		                onChange: (event) => updateRule(row.key, "enabled", event.target.checked)
		              }
		            ),
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: row.label })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.field, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.threshold") }),
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: panel_default.inlineInput, children: [
		              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
		              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.unit, children: row.unit })
		            ] })
		          ] }),
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.field, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.hold") }),
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: panel_default.inlineInput, children: [
		              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
		              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.unit, children: tt("unit.sec") })
		            ] })
		          ] })
		        ] }, row.key);
		      }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.settingsRow, "data-disabled": draft.rules.offline.enabled ? void 0 : "true", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.check, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
		            "input",
		            {
		              type: "checkbox",
		              checked: draft.rules.offline.enabled,
		              onChange: (event) => updateRule("offline", "enabled", event.target.checked)
		            }
		          ),
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: tt("settings.ruleOffline") })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.hold") }),
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: panel_default.inlineInput, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.unit, children: tt("unit.sec") })
		          ] })
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.settingsRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.retention") }),
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: panel_default.inlineInput, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
		              "select",
		              {
		                value: draft.retentionDays,
		                onChange: (event) => {
		                  setDirty(true);
		                  setDraft({ ...draft, retentionDays: Number(event.target.value) });
		                },
		                children: [1, 3, 7, 14, 30].map((days) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: days, children: days }, days))
		              }
		            ),
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.unit, children: tt("settings.retentionUnit") })
		          ] })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: panel_default.hint, children: tt("settings.retentionDesc") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.settingsRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldLabel, children: tt("settings.interval") }),
		          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: panel_default.inlineInput, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
		            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.unit, children: tt("settings.intervalUnit") })
		          ] })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: panel_default.hint, children: tt("settings.intervalDesc") })
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.notifySection, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.sectionHeader, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.sectionTitle, children: tt("notify.title") }),
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.sectionHint, children: tt("notify.desc") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.check, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
		          "input",
		          {
		            type: "checkbox",
		            checked: draft.notify.enabled,
		            onChange: (event) => updateNotify({ enabled: event.target.checked })
		          }
		        ),
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: tt("notify.enabled") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldLabel, children: tt("notify.url") }),
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
		          "input",
		          {
		            className: panel_default.input,
		            value: draft.notify.url,
		            placeholder: "https://example.com/hooks/probe",
		            onChange: (event) => updateNotify({ url: event.target.value })
		          }
		        ),
		        draft.notify.enabled && !urlValid ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldError, role: "alert", children: tt("notify.invalidUrl") }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.hint, children: tt("notify.urlHint") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: panel_default.check, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
		          "input",
		          {
		            type: "checkbox",
		            checked: draft.notify.onResolve,
		            onChange: (event) => updateNotify({ onResolve: event.target.checked })
		          }
		        ),
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: tt("notify.onResolve") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.notifyTestRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
		          "button",
		          {
		            type: "button",
		            className: panel_default.ghostButton,
		            disabled: testing || !urlValid,
		            onClick: runTest,
		            children: testing ? tt("notify.testing") : tt("notify.test")
		          }
		        ),
		        testResult !== null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: testResult.ok ? panel_default.tokenOk : panel_default.tokenError, role: "status", children: testResult.ok ? tt("notify.testOk", { status: testResult.status ?? "-" }) : tt("notify.testFail", { message: testResult.error ?? `HTTP ${testResult.status ?? "?"}` }) })
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: panel_default.saveRow, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: panel_default.primaryButton, disabled: saving || invalid, onClick: save, children: saving ? tt("action.saving") : tt("action.save") }),
		      saved && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.savedNote, children: tt("settings.saved") }),
		      invalid && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.fieldError, children: tt("settings.invalid") }),
		      versions !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: panel_default.versionsNote, children: tt("about.versions", { panel: versions.panel, agent: versions.agent }) })
		    ] })
		  ] });
		}
		
		// src/client/panel/ProbePanel.tsx
		var import_jsx_runtime7 = require("react/jsx-runtime");
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
		  const [snapshot, setSnapshot] = (0, import_react7.useState)(null);
		  const [error, setError] = (0, import_react7.useState)(null);
		  const enteredRef = (0, import_react7.useRef)(/* @__PURE__ */ new Set());
		  const [page, setPage] = (0, import_react7.useState)("wall");
		  const [theme, setTheme] = (0, import_react7.useState)(() => {
		    try {
		      const saved = window.localStorage.getItem("dsh-probe-theme");
		      if (saved === "dark" || saved === "light") return saved;
		    } catch {
		    }
		    return "light";
		  });
		  const toggleTheme = () => {
		    setTheme((current2) => {
		      const next = current2 === "dark" ? "light" : "dark";
		      try {
		        window.localStorage.setItem("dsh-probe-theme", next);
		      } catch {
		      }
		      return next;
		    });
		  };
		  const [section, setSection] = (0, import_react7.useState)("hosts");
		  const [clock, setClock] = (0, import_react7.useState)(() => /* @__PURE__ */ new Date());
		  (0, import_react7.useEffect)(() => {
		    const timer = setInterval(() => {
		      setClock(/* @__PURE__ */ new Date());
		    }, 1e3);
		    return () => clearInterval(timer);
		  }, []);
		  const [tab, setTab] = (0, import_react7.useState)("overview");
		  const [selectedId, setSelectedId] = (0, import_react7.useState)(null);
		  const [dialog, setDialog] = (0, import_react7.useState)(null);
		  const [query, setQuery] = (0, import_react7.useState)("");
		  const [filter, setFilter] = (0, import_react7.useState)("all");
		  const [view, setView] = (0, import_react7.useState)(() => {
		    try {
		      return localStorage.getItem("dsh-probe.view") === "table" ? "table" : "cards";
		    } catch {
		      return "cards";
		    }
		  });
		  const bodyRef = (0, import_react7.useRef)(null);
		  (0, import_react7.useEffect)(() => {
		    bodyRef.current?.scrollTo({ top: 0 });
		  }, [tab, selectedId]);
		  const load3 = (0, import_react7.useCallback)(async (quiet) => {
		    try {
		      const next = await api.snapshot();
		      setSnapshot(next);
		      setError(null);
		    } catch (caught) {
		      if (!quiet) setError(errorMessage(caught));
		    }
		  }, [api]);
		  (0, import_react7.useEffect)(() => {
		    void load3(false);
		  }, [load3]);
		  (0, import_react7.useEffect)(() => {
		    const timer = setInterval(() => {
		      if (!document.hidden) void load3(true);
		    }, 5e3);
		    const onVisibility = () => {
		      if (!document.hidden) void load3(true);
		    };
		    document.addEventListener("visibilitychange", onVisibility);
		    return () => {
		      clearInterval(timer);
		      document.removeEventListener("visibilitychange", onVisibility);
		    };
		  }, [load3]);
		  const hosts = snapshot?.hosts ?? [];
		  const totalTraffic = (0, import_react7.useMemo)(() => {
		    let down = 0;
		    let up = 0;
		    for (const host of hosts) {
		      down += host.current?.totalRx ?? 0;
		      up += host.current?.totalTx ?? 0;
		    }
		    return { down, up };
		  }, [hosts]);
		  const selected = selectedId === null ? void 0 : hosts.find((host) => host.id === selectedId);
		  const activeAlerts = snapshot?.alerts.active ?? [];
		  const onlineCount = hosts.filter((host) => host.status === "online" || host.status === "stale").length;
		  const visibleHosts = (0, import_react7.useMemo)(() => {
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
		    setSnapshot((current2) => {
		      if (current2 === null) return current2;
		      const exists = current2.hosts.some((candidate) => candidate.id === host.id);
		      const nextHosts = exists ? current2.hosts.map((candidate) => candidate.id === host.id ? host : candidate) : [...current2.hosts, host];
		      return { ...current2, hosts: nextHosts };
		    });
		  };
		  const removeHost = (id) => {
		    setSnapshot((current2) => current2 === null ? current2 : { ...current2, hosts: current2.hosts.filter((host) => host.id !== id) });
		    setSelectedId((current2) => current2 === id ? null : current2);
		  };
		  const surface = page === "console" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		    AdminPage,
		    {
		      snapshot,
		      api,
		      section,
		      onSection: setSection,
		      onBack: () => {
		        setPage("wall");
		      },
		      onChanged: () => void load3(true),
		      hosts,
		      onAdd: () => setDialog({ kind: "host", mode: "add" }),
		      onEdit: (host) => setDialog({ kind: "host", mode: "edit", host }),
		      onInstall: (host) => setDialog({ kind: "install", host }),
		      onDeleted: () => void load3(true),
		      sections: {
		        hosts: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		          ManageTab,
		          {
		            hosts,
		            api,
		            versions: snapshot?.versions,
		            onAdd: () => setDialog({ kind: "host", mode: "add" }),
		            onEdit: (host) => setDialog({ kind: "host", mode: "edit", host }),
		            onInstall: (host) => setDialog({ kind: "install", host }),
		            onDeleted: () => void load3(true)
		          }
		        ),
		        latency: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LatencyTab, { api, hosts: hosts.map((host) => ({ id: host.id, name: host.name })) }),
		        alerts: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		          AlertsTab,
		          {
		            alerts: snapshot.alerts,
		            api,
		            onChanged: () => void load3(true)
		          }
		        ),
		        settings: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		          SettingsBody,
		          {
		            settings: snapshot.settings,
		            versions: snapshot.versions,
		            api,
		            onSaved: (next) => setSnapshot((current2) => current2 === null ? current2 : { ...current2, settings: next })
		          }
		        )
		      }
		    }
		  ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		    MonitorPage,
		    {
		      snapshot,
		      handlers: {
		        onAdmin: () => {
		          setPage("console");
		        },
		        onRefresh: () => void load3(false),
		        onOpenHost: (id) => {
		          setSelectedId(id);
		        },
		        theme,
		        onToggleTheme: toggleTheme
		      }
		    }
		  );
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.page, "data-dsh-probe-view": "", children: [
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.errorBar, children: tt("error.load", { message: error }) }),
		    snapshot === null ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LoadingState, {}) : surface,
		    selected !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(NodeModal, { api, host: selected, theme, onClose: () => {
		      setSelectedId(null);
		    } }),
		    dialog !== null && dialog.kind === "install" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		      InstallDialog,
		      {
		        host: hosts.find((host) => host.id === dialog.host.id) ?? dialog.host,
		        settings: snapshot?.settings,
		        latestAgent: snapshot?.versions.agent ?? "",
		        api,
		        onClose: () => {
		          setDialog(null);
		        },
		        onHostChange: (host) => {
		          replaceHost(host);
		          setDialog({ kind: "install", host });
		        }
		      }
		    ),
		    dialog !== null && dialog.kind !== "install" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		      HostDialog,
		      {
		        mode: dialog.mode,
		        host: dialog.mode === "edit" ? dialog.host : void 0,
		        api,
		        onClose: () => {
		          setDialog(null);
		        },
		        onSaved: (host) => {
		          void load3(true);
		          setSelectedId(host.id);
		          setDialog(null);
		        }
		      }
		    )
		  ] });
		}
		function LoadingState() {
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.grid, "aria-busy": "true", "aria-label": tt("page.loading"), children: [0, 1, 2].map((index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.skeletonCard, "aria-hidden": "true", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.skeletonLine, "data-width": "short" }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.skeletonLine }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.skeletonLine, "data-width": "tall" })
		  ] }, index)) });
		}
		function AlertRow({ alert, active }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.alertRow, "data-active": active ? "true" : void 0, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.alertDot, "data-active": active ? "true" : void 0, "aria-hidden": "true" }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.alertBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.alertTitle, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: alert.hostName }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.alertRule, children: ruleLabel(alert.rule) }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: panel_default.alertValue, children: [
		          alert.rule === "offline" ? tt("alerts.silent", { value: Math.round(alert.value), threshold: Math.round(alert.threshold) }) : `${Math.round(alert.value * 10) / 10}${alert.unit === "%" ? "%" : "\xD7"}`,
		          alert.rule !== "offline" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: panel_default.muted, children: [
		            " / ",
		            alert.threshold,
		            alert.unit === "%" ? "%" : "\xD7"
		          ] })
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.alertTime, children: active ? tt("alerts.ending", { duration: alertDuration(alert) }) : tt("alerts.ended", { duration: alertDuration(alert), ago: ago(alert.endedAt ?? alert.startedAt) }) })
		    ] })
		  ] });
		}
		function AlertsTab({ alerts, api, onChanged }) {
		  const [confirmClear, setConfirmClear] = (0, import_react7.useState)(false);
		  const [error, setError] = (0, import_react7.useState)(null);
		  const timer = (0, import_react7.useRef)(null);
		  (0, import_react7.useEffect)(() => () => {
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
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.section, children: [
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.errorBar, children: tt("error.action", { message: error }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.sectionHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.sectionTitle, children: tt("alerts.active") }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.sectionHint, children: alerts.active.length === 0 ? tt("alerts.activeNone") : String(alerts.active.length) })
		    ] }),
		    alerts.active.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.quietState, children: tt("alerts.activeNone") }) : alerts.active.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AlertRow, { alert, active: true }, alert.id)),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.sectionHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.sectionTitle, children: tt("alerts.recent") }),
		      alerts.recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.ghostButton, "data-confirm": confirmClear ? "true" : void 0, onClick: clear, children: confirmClear ? tt("action.clearConfirm") : tt("action.clearRecent") })
		    ] }),
		    alerts.recent.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.quietState, children: tt("alerts.recentNone") }) : alerts.recent.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AlertRow, { alert, active: false }, alert.id))
		  ] });
		}
		function ManageTab({ hosts, api, versions, onEdit, onAdd, onInstall, onDeleted }) {
		  const [removing, setRemoving] = (0, import_react7.useState)(null);
		  const [upgrading, setUpgrading] = (0, import_react7.useState)(null);
		  const [error, setError] = (0, import_react7.useState)(null);
		  const upgrade = async (host) => {
		    setUpgrading(host.id);
		    setError(null);
		    try {
		      await api.upgradeAgent(host.id);
		      onDeleted();
		    } catch (cause) {
		      setError(errorMessage(cause));
		    } finally {
		      setUpgrading(null);
		    }
		  };
		  const remove = (host) => {
		    if (!window.confirm(tt("manage.deleteConfirm", { name: host.name }))) return;
		    setRemoving(host.id);
		    setError(null);
		    api.deleteHost(host.id).then(() => {
		      onDeleted();
		    }).catch((caught) => {
		      setError(errorMessage(caught));
		    }).finally(() => {
		      setRemoving(null);
		    });
		  };
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.section, children: [
		    error !== null && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.errorBar, children: tt("error.action", { message: error }) }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.sectionHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.sectionTitle, children: tt("manage.title") }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.sectionHint, children: tt("manage.desc") })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.saveRow, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: panel_default.primaryButton, onClick: onAdd, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { "aria-hidden": "true", children: "+" }),
		      " ",
		      tt("action.add")
		    ] }) }),
		    hosts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: panel_default.muted, children: tt("manage.empty") }),
		    hosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.manageList, children: hosts.map((host) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.manageRow, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.manageMain, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.manageTop, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.dot, "data-status": host.status, "aria-hidden": "true" }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.manageName, children: host.name }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.statusChip, "data-status": host.status, children: tt(`status.${host.status}.short`) }),
		          host.muted && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.cardStatus, "data-status": "muted", children: tt("status.muted") })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.manageMeta, children: [
		          host.location !== "" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: host.location }),
		          host.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: host.tags.join(" \xB7 ") }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.mono, children: host.id })
		        ] })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.manageActions, children: [
		        host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		          "button",
		          {
		            type: "button",
		            className: panel_default.ghostButton,
		            disabled: upgrading === host.id,
		            title: tt("manage.upgradeHint", { version: versions.agent }),
		            onClick: () => {
		              void upgrade(host);
		            },
		            children: upgrading === host.id ? tt("manage.upgrading") : tt("manage.upgrade")
		          }
		        ),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: () => onInstall(host), children: tt("action.token") }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: () => onEdit(host), children: tt("action.edit") }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		          "button",
		          {
		            type: "button",
		            className: `${panel_default.ghostButton} ${panel_default.dangerGhost}`,
		            disabled: removing === host.id,
		            onClick: () => remove(host),
		            children: tt("action.delete")
		          }
		        )
		      ] })
		    ] }, host.id)) })
		  ] });
		}
		function useDialogFocus(onClose) {
		  const ref = (0, import_react7.useRef)(null);
		  (0, import_react7.useEffect)(() => {
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
		  const [name, setName] = (0, import_react7.useState)(host?.name ?? "");
		  const [tags, setTags] = (0, import_react7.useState)((host?.tags ?? []).join(", "));
		  const [location, setLocation] = (0, import_react7.useState)(host?.location ?? "");
		  const [note, setNote] = (0, import_react7.useState)(host?.note ?? "");
		  const [enabled, setEnabled] = (0, import_react7.useState)(host?.enabled ?? true);
		  const [busy, setBusy] = (0, import_react7.useState)(false);
		  const [error, setError] = (0, import_react7.useState)(null);
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
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.backdrop, role: "presentation", onMouseDown: (event) => {
		    if (event.target === event.currentTarget) onClose();
		  }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modal, ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-label": mode === "add" ? tt("host.addTitle") : tt("host.editTitle"), children: [
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modalHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: panel_default.modalTitle, children: mode === "add" ? tt("host.addTitle") : tt("host.editTitle") }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.iconButton, "aria-label": tt("action.close"), onClick: onClose, children: "\xD7" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modalBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: panel_default.fieldLabel, children: [
		          tt("host.name"),
		          " *"
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.fieldLabel, children: tt("host.tags") }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
		          "input",
		          {
		            className: panel_default.input,
		            value: tags,
		            placeholder: tt("host.tagsPlaceholder"),
		            onChange: (event) => setTags(event.target.value)
		          }
		        )
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.fieldRow, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.fieldLabel, children: tt("host.location") }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: panel_default.field, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.fieldLabel, children: tt("host.note") }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: panel_default.check, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "checkbox", checked: enabled, onChange: (event) => setEnabled(event.target.checked) }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: tt("host.enabled") })
		      ] }),
		      error !== null && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.errorBar, children: error })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modalFooter, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onClose, children: tt("action.cancel") }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.primaryButton, disabled: busy, onClick: submit, children: busy ? tt("action.saving") : mode === "add" ? tt("host.save") : tt("host.saveEdit") })
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
		  const [origin, setOrigin] = (0, import_react7.useState)(stored !== "" ? stored : window.location.origin);
		  const [kind, setKind] = (0, import_react7.useState)("shell");
		  const [showToken, setShowToken] = (0, import_react7.useState)(false);
		  const [confirmRotate, setConfirmRotate] = (0, import_react7.useState)(false);
		  const [error, setError] = (0, import_react7.useState)(null);
		  const timer = (0, import_react7.useRef)(null);
		  const dialogRef = useDialogFocus(onClose);
		  (0, import_react7.useEffect)(() => () => {
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
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.backdrop, role: "presentation", onMouseDown: (event) => {
		    if (event.target === event.currentTarget) onClose();
		  }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modal, ref: dialogRef, "data-wide": "true", role: "dialog", "aria-modal": "true", "aria-label": tt("install.title", { name: host.name }), children: [
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modalHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: panel_default.modalTitle, children: tt("install.title", { name: host.name }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.iconButton, "aria-label": tt("action.close"), onClick: onClose, children: "\xD7" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modalBody, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: panel_default.hint, children: tt("install.desc") }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.installStatus, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.dot, "data-status": host.status, "aria-hidden": "true" }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: statusLabel(host.status) }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.muted, children: host.lastSeen === 0 ? tt("card.never") : tt("card.seen", { age: ago(host.lastSeen) }) })
		      ] }),
		      host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.upgradeNote, role: "status", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: tt("upgrade.agentOutdated", { from: host.current?.agentVersion ?? "?", to: latestAgent }) }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.muted, children: tt("upgrade.hint") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.fieldLabel, children: tt("install.server") }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
		        originValid ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.hint, children: tt("install.serverHint") }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.fieldError, role: "alert", children: tt("install.invalidOrigin") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.field, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.fieldLabel, children: tt("install.kind") }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.rangePills, children: ["shell", "node"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.hint, children: tt(`install.${kind}Hint`) })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.tokenBlock, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.fieldLabel, children: tt("install.token") }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.tokenRow, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("code", { className: panel_default.tokenValue, children: showToken ? host.token : `${host.token.slice(0, 8)}${"\u2022".repeat(24)}` }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: () => setShowToken((value) => !value), children: showToken ? tt("action.hide") : tt("action.show") }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CopyButton, { text: host.token, label: tt("action.copy") }),
		          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.dangerGhost, "data-confirm": confirmRotate ? "true" : void 0, onClick: rotate, children: confirmRotate ? tt("action.rotateConfirm") : tt("action.rotate") })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: panel_default.hint, children: [
		          tt("install.tokenHint"),
		          " ",
		          tt("install.rotateHint")
		        ] })
		      ] }),
		      originValid && host.agentOutdated && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CommandBlock, { title: tt("upgrade.title"), text: commands.upgrade }),
		      originValid && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CommandBlock, { title: tt("install.step1"), text: commands.download }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CommandBlock, { title: tt("install.step2"), text: commands.run }),
		        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CommandBlock, { title: tt("install.step3"), text: commands.systemd })
		      ] }),
		      error !== null && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: panel_default.errorBar, role: "alert", children: tt("error.action", { message: error }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: host.status === "waiting" ? panel_default.waitingNote : panel_default.liveNote, children: host.status === "waiting" ? tt("install.waiting") : tt("install.online") })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.modalFooter, children: [
		      originValid && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CopyButton, { text: all, label: tt("install.copyAll"), primary: true }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: panel_default.ghostButton, onClick: onClose, children: tt("action.close") })
		    ] })
		  ] }) });
		}
		function CommandBlock({ title, text }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.commandBlock, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: panel_default.commandHeader, children: [
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: panel_default.commandTitle, children: title }),
		      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CopyButton, { text })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("pre", { className: panel_default.commandText, children: text })
		  ] });
		}
		function CopyButton({ text, label, primary = false }) {
		  const [done, setDone] = (0, import_react7.useState)(false);
		  const timer = (0, import_react7.useRef)(null);
		  (0, import_react7.useEffect)(() => () => {
		    if (timer.current !== null) clearTimeout(timer.current);
		  }, []);
		  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
		
		// src/client/index.tsx
		var import_jsx_runtime8 = require("react/jsx-runtime");
		var NS = "dsh-probe";
		var PROBE_PANEL_ID = "probe";
		var PANEL_ORDER = 45;
		var inject = ["slots", "locale"];
		function ProbePanelIcon({ size }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
		        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { x: "1.6", y: "2.4", width: "12.8", height: "9.4", rx: "1.6" }),
		        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M3.4 7.6h2l1.1-2.6 1.6 5 1.3-3.6 1 1.2h2.2" }),
		        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M5.6 14.2h4.8" })
		      ]
		    }
		  );
		}
		function ProbePage({ api }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ProbePanel, { api });
		}
		function apply(ctx) {
		  try {
		    importTheme();
		  } catch {
		  }
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
