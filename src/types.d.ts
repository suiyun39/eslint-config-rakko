declare module 'eslint-plugin-i' {
  import type { ESLint } from 'eslint'

  const importPlugin: ESLint.Plugin
  export = importPlugin
}
