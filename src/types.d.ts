declare module 'eslint-plugin-i' {
  import type { ESLint } from 'eslint'

  const importPlugin: ESLint.Plugin
  export = importPlugin
}

declare module 'eslint-plugin-react' {
  import type { ESLint } from 'eslint'

  const reactPlugin: ESLint.Plugin
  export = reactPlugin
}
