import type { FlatConfig } from '../common'
import solidPlugin from 'eslint-plugin-solid'

export function solidFactory(): FlatConfig {
  return {
    name: 'solid',
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      solid: solidPlugin,
    },
    rules: {
      'solid/components-return-once': 'error',
      'solid/event-handlers': 'error',
      'solid/imports': 'error',
      'solid/jsx-no-duplicate-props': 'error',
      'solid/jsx-no-script-url': 'error',
      'solid/jsx-no-undef': 'error',
      'solid/jsx-uses-vars': 'error',
      'solid/no-array-handlers': 'warn',
      'solid/no-destructure': 'error',
      'solid/no-innerhtml': 'error',
      'solid/no-proxy-apis': 'off',
      'solid/no-react-deps': 'error',
      'solid/no-react-specific-props': 'error',
      'solid/no-unknown-namespaces': 'error',
      'solid/prefer-for': 'error',
      'solid/prefer-show': 'warn',
      'solid/reactivity': 'error',
      'solid/self-closing-comp': 'error',
      'solid/style-prop': 'error',
    },
  }
}
