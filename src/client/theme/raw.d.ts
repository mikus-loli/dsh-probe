/** A theme stylesheet loaded by the build's `*.raw.css` loader. */
declare module '*.raw.css' {
  const css: string
  export default css
}

/** The mascot and other theme images, inlined by the build's asset loader. */
declare module '*.webp' {
  const src: string
  export default src
}
