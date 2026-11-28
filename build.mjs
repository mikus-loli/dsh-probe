/**
 * Build the dsh-probe browser half (lib/client.js) from src/client with
 * esbuild, emitting the module-loader wrapper the shell expects:
 *
 *   window.__ModuleLoader__.load({ id, factory: (require) => { ... } })
 *
 * CSS modules are handled here: every class name is prefixed, the class map is
 * exported as the module default, and the stylesheet text is injected once into
 * <head> under one data-plugin-css tag.
 */
import { build } from 'esbuild'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'))
const PLUGIN_ID = pkg.name
const CSS_PREFIX = 'probe'
const CSS_TAG_ID = `${PLUGIN_ID}/panel.css`

/**
 * Scope one stylesheet under a root selector.
 *
 * The theme this plugin copies is authored as a standalone page: it styles
 * `:root`, `body`, `html` and uses bare class names. Injecting it as-is would
 * repaint the whole GUI, so every rule is re-rooted under the panel's own
 * element. `@media` blocks are walked recursively, and keyframes are renamed
 * with the same prefix so they cannot collide with the shell's animations.
 * @param {string} css - the stylesheet source.
 * @param {string} scope - selector every rule is nested under.
 * @returns {string} the scoped stylesheet.
 */
function scopeStylesheet(css, scope) {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, '')
  const keyframes = new Set()

  /** Walk one block, rewriting rules and recursing into at-rules. */
  const walk = (text) => {
    let out = ''
    let index = 0
    while (index < text.length) {
      const brace = text.indexOf('{', index)
      if (brace < 0) { out += text.slice(index); break }
      const prelude = text.slice(index, brace).trim()
      let depth = 0
      let end = brace
      for (; end < text.length; end += 1) {
        if (text[end] === '{') depth += 1
        else if (text[end] === '}') { depth -= 1; if (depth === 0) break }
      }
      const body = text.slice(brace + 1, end)

      if (/^@(media|supports|layer|container)\b/.test(prelude)) {
        out += `${prelude}{${walk(body)}}`
      } else if (/^@(-webkit-)?keyframes\b/.test(prelude)) {
        const name = prelude.replace(/^@(-webkit-)?keyframes\s+/, '').trim()
        keyframes.add(name)
        out += `@keyframes ${CSS_PREFIX}_${name}{${body}}`
      } else if (/^@(font-face|import|charset|namespace)\b/.test(prelude)) {
        out += prelude === '@charset "UTF-8"' ? '' : `${prelude}{${body}}`
      } else {
        const scoped = prelude.split(',').map((raw) => {
          const sel = raw.trim()
          if (sel === '') return ''
          // The theme's own theme switch rides the root element, so an
          // attribute selector chains onto the scope without a descendant gap.
          if (sel.startsWith('[data-theme')) return scope + sel
          if (/^(html|body)(\b|::|:)/.test(sel)) return sel.replace(/^(html|body)/, scope)
          if (sel === ':root') return scope
          if (sel.startsWith('*')) return `${scope} ${sel}`
          if (sel.startsWith(scope)) return sel
          return `${scope} ${sel}`
        }).filter(Boolean).join(',')
        out += `${scoped}{${body}}`
      }
      index = end + 1
    }
    return out
  }

  const scoped = walk(withoutComments)
  // Rewrite `animation` / `animation-name` values to the renamed frames. The
  // whole declaration value is matched first, then the name inside it is
  // replaced: matching the name directly after a greedy `[^;}]*` never fires.
  return scoped.replace(/(animation(?:-name)?\s*:\s*)([^;}]+)/g, (whole, head, value) => {
    let next = value
    for (const name of keyframes) {
      next = next.replace(new RegExp(`(^|[\\s,])${name}(?=[\\s,]|$)`, 'g'), `$1${CSS_PREFIX}_${name}`)
    }
    return head + next
  })
}

/** Load a raw theme stylesheet as a JS module exporting the scoped CSS text. */
function themeCssPlugin(scope) {
  return {
    name: 'dsh-theme-css',
    setup(b) {
      b.onResolve({ filter: /\.raw\.css$/ }, args => ({ path: resolve(args.resolveDir, args.path), namespace: 'theme-css' }))
      b.onLoad({ filter: /.*/, namespace: 'theme-css' }, async args => {
        const source = await readFile(args.path, 'utf8')
        const scoped = scopeStylesheet(source, scope)
        return { contents: `export default ${JSON.stringify(scoped)};`, loader: 'js', resolveDir: dirname(args.path), watchFiles: [args.path] }
      })
    },
  }
}

/** Theme layers, in the order the upstream page loads them. */
const THEME_FILES = [
  'base', 'header', 'welcome', 'stats', 'nodes-grid', 'nodes', 'nodes-table',
  'modal-base', 'modal-info', 'modal-charts', 'modal-latency', 'modal', 'footer',
  // Our own deviations, applied last so they win over the copied rules.
  'overrides',
]

/**
 * Bundle every theme stylesheet into one scoped module.
 *
 * Scoping happens over the concatenation rather than file by file, because
 * `@keyframes` live in `base.css` while `animation:` references sit in the modal
 * files: renaming them per file would leave every reference pointing at a frame
 * that no longer exists (which is exactly how the modal ended up invisible).
 */
function themeBundlePlugin(scope) {
  return {
    name: 'dsh-theme-bundle',
    setup(b) {
      b.onResolve({ filter: /^virtual:mikus-theme$/ }, () => ({ path: 'mikus-theme', namespace: 'theme-bundle' }))
      b.onLoad({ filter: /.*/, namespace: 'theme-bundle' }, async () => {
        const dir = resolve(root, 'src/client/theme/raw')
        const parts = []
        for (const name of THEME_FILES) {
          const file = resolve(dir, `${name}.raw.css`)
          parts.push(`/* ${name}.css */\n${await readFile(file, 'utf8')}`)
        }
        const scoped = scopeStylesheet(parts.join('\n'), scope)
        return { contents: `export default ${JSON.stringify(scoped)};`, loader: 'js', resolveDir: dir }
      })
    },
  }
}

/** Inline a small binary asset as a data URI, keeping the bundle self-contained. */
function assetPlugin() {
  return {
    name: 'dsh-asset',
    setup(b) {
      b.onLoad({ filter: /\.(webp|png|jpe?g|gif|svg)$/, namespace: 'file' }, async args => {
        if (!args.path.includes('/theme/')) return undefined
        const data = await readFile(args.path)
        const ext = args.path.slice(args.path.lastIndexOf('.') + 1).toLowerCase()
        const mime = ext === 'svg' ? 'image/svg+xml' : ext === 'jpg' ? 'image/jpeg' : `image/${ext}`
        return { contents: `export default ${JSON.stringify(`data:${mime};base64,${data.toString('base64')}`)};`, loader: 'js' }
      })
    },
  }
}

/** Render one CSS-module import to a JS module: prefixed classes + one style tag. */
function cssModulePlugin() {
  return {
    name: 'dsh-css-module',
    setup(b) {
      b.onResolve({ filter: /\.module\.css$/ }, args => ({ path: resolve(args.resolveDir, args.path), namespace: 'css-module' }))
      b.onLoad({ filter: /.*/, namespace: 'css-module' }, async args => {
        const source = await readFile(args.path, 'utf8')
        const names = new Set()
        const css = source.replace(/\.(-?[_a-zA-Z][\w-]*)/g, (_, name) => {
          names.add(name)
          return `.${CSS_PREFIX}_${name}`
        })
        const map = {}
        for (const name of [...names].sort()) map[name] = `${CSS_PREFIX}_${name}`
        const contents = `
const CSS = ${JSON.stringify(css)};
const TAG_ID = ${JSON.stringify(CSS_TAG_ID)};
if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(TAG_ID) + ']') === null) {
  const tag = document.createElement('style');
  tag.dataset.plugin = ${JSON.stringify(PLUGIN_ID)};
  tag.dataset.pluginCss = TAG_ID;
  tag.textContent = CSS;
  document.head.appendChild(tag);
}
export default ${JSON.stringify(map)};
`
        return { contents, loader: 'js', resolveDir: dirname(args.path), watchFiles: [args.path] }
      })
    },
  }
}

const result = await build({
  absWorkingDir: root,
  entryPoints: ['src/client/index.tsx'],
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'browser',
  target: 'es2022',
  jsx: 'automatic',
  external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'none',
  minify: false,
  logLevel: 'info',
  plugins: [cssModulePlugin(), themeBundlePlugin('[data-dsh-probe-view] .probe-theme'), assetPlugin()],
})

const jsOutput = result.outputFiles.find(file => file.path.endsWith('.js')) ?? result.outputFiles[0]
// Esbuild annotates plugin-loaded modules with their absolute source path. That
// would make the committed bundle depend on the checkout directory (and break
// the CI check that a rebuild is byte-identical), so strip the project root.
const code = jsOutput.text.split(root).join('.')
const wrapped = `window.__ModuleLoader__.load({
	id: ${JSON.stringify(PLUGIN_ID)},
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
${code.replace(/^/gm, '\t\t')}
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`
await mkdir(resolve(root, 'lib'), { recursive: true })
await writeFile(resolve(root, 'lib/client.js'), wrapped)
console.log(`built lib/client.js (${(wrapped.length / 1024).toFixed(0)} KiB)`)
