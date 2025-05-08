declare module 'eslint-plugin-import-x' {
  import type { ESLint } from 'eslint'

  const importPlugin: ESLint.Plugin
  export = importPlugin
}

declare module 'eslint-plugin-solid' {
  import type { ESLint } from 'eslint'

  const solidPlugin: ESLint.Plugin
  export = solidPlugin
}
