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
  plugins: [cssModulePlugin()],
})

const jsOutput = result.outputFiles.find(file => file.path.endsWith('.js')) ?? result.outputFiles[0]
const code = jsOutput.text
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
