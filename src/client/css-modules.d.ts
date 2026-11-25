/** CSS module imports are compiled to a class map by build.mjs. */
declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}
