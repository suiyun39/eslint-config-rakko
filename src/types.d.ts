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

declare module 'eslint-plugin-react-hooks' {
  import type { ESLint } from 'eslint'

  const reactHooksPlugin: ESLint.Plugin
  export = reactHooksPlugin
}

declare module 'eslint-plugin-react-refresh' {
  import type { ESLint } from 'eslint'

  const reactRefreshPlugin: ESLint.Plugin
  export = reactRefreshPlugin
}

declare module 'eslint-plugin-jsx-expressions' {
  import type { ESLint } from 'eslint'

  const jsxExpressionsPlugin: ESLint.Plugin
  export = jsxExpressionsPlugin
}

declare module 'eslint-plugin-solid' {
  import type { ESLint } from 'eslint'

  const solidPlugin: ESLint.Plugin
  export = solidPlugin
}

declare module 'eslint-plugin-n' {
  import type { ESLint } from 'eslint'

  const nodePlugin: ESLint.Plugin
  export = nodePlugin
}

declare module 'eslint-plugin-unicorn' {
  import type { ESLint } from 'eslint'

  const unicornPlugin: ESLint.Plugin
  export = unicornPlugin
}
