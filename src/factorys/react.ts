import type { Linter } from 'eslint'
import { composer } from 'eslint-flat-config-utils'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import * as reactRefreshPlugin from 'eslint-plugin-react-refresh'
import jsxExpressionsPlugin from 'eslint-plugin-jsx-expressions'

/**
 * React 相关规则
 * 与 prop-types 相关的规则都应被关闭, 由 TypeScript 类型检查代替
 * 与 @stylistic/jsx 重复的样式规则都应被关闭, 以避免重复检查
 */
export async function reactFactory(): Promise<Linter.FlatConfig[]> {
  const config = composer({
    name: 'react',
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // -------- React --------
      'react/boolean-prop-naming': 'off',
      'react/button-has-type': 'warn',
      'react/checked-requires-onchange-or-readonly': 'off',
      'react/default-props-match-prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'react/display-name': 'error',
      'react/forbid-component-props': 'off',
      'react/forbid-dom-props': 'off',
      'react/forbid-elements': 'off',
      'react/forbid-foreign-prop-types': 'off',
      'react/forbid-prop-types': 'off',
      'react/function-component-definition': 'off',
      'react/hook-use-state': 'warn',
      'react/iframe-missing-sandbox': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-equals-spacing': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-fragments': ['warn', 'element'],
      'react/jsx-handler-names': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-key': ['error', {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      }],
      'react/jsx-max-depth': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-no-bind': 'warn',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-constructed-context-values': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-leaked-render': 'warn',
      'react/jsx-no-literals': 'off',
      'react/jsx-no-script-url': 'warn',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-pascal-case': 'off',
      'react/jsx-props-no-multi-spaces': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-wrap-multilines': 'off',
      'react/no-access-state-in-setstate': 'warn',
      'react/no-adjacent-inline-elements': 'off',
      'react/no-array-index-key': 'warn',
      'react/no-arrow-function-lifecycle': 'warn',
      'react/no-children-prop': 'off',
      'react/no-danger': 'off',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-did-mount-set-state': 'off',
      'react/no-did-update-set-state': 'off',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-invalid-html-attribute': 'warn',
      'react/no-is-mounted': 'error',
      'react/no-multi-comp': 'off',
      'react/no-namespace': 'warn',
      'react/no-object-type-as-default-prop': 'off',
      'react/no-redundant-should-component-update': 'warn',
      'react/no-render-return-value': 'error',
      'react/no-set-state': 'off',
      'react/no-string-refs': 'error',
      'react/no-this-in-sfc': 'warn',
      'react/no-typos': 'warn',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': 'warn',
      'react/no-unstable-nested-components': 'warn',
      'react/no-unused-class-component-methods': 'warn',
      'react/no-unused-prop-types': 'off',
      'react/no-unused-state': 'warn',
      'react/no-will-update-set-state': 'off',
      'react/prefer-es6-class': ['warn', 'always'],
      'react/prefer-exact-props': 'off',
      'react/prefer-read-only-props': 'off',
      'react/prefer-stateless-function': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/require-optimization': 'off',
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'warn',
      'react/sort-comp': 'off',
      'react/sort-default-props': 'off',
      'react/sort-prop-types': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'react/style-prop-object': 'warn',
      'react/void-dom-elements-no-children': 'warn',

      // -------- React Hooks --------
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  })

  await config.append({
    name: 'react-extra',
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'react-refresh': reactRefreshPlugin,
      'jsx-expressions': jsxExpressionsPlugin,
    },
    rules: {
      // -------- React Refresh --------
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // -------- JSX Expressions --------
      'jsx-expressions/strict-logical-expressions': 'error',
    },
  })

  return config.toConfigs()
}
