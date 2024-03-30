import type { FlatConfig } from '../common'
import * as importPlugin from 'eslint-plugin-i'

/**
 * import 规则
 *
 * todo: 在当前版本中, 部分规则无法在 flat config 中使用, 详见: https://github.com/import-js/eslint-plugin-import/issues/2556
 * 因此被关闭的规则有: import/no-deprecated, import/namespace, import/no-named-as-default,
 * import/no-named-as-default-member, import/default
 */
export function importsFactory(): FlatConfig {
  return {
    name: 'import',
    plugins: {
      import: importPlugin,
    },
    rules: {
      // -------- Helpful warnings --------
      'import/export': 'error',
      'import/no-deprecated': 'off',
      'import/no-empty-named-blocks': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unused-modules': 'off',

      // -------- Module systems --------
      'import/no-amd': 'error',
      'import/no-commonjs': 'off',
      'import/no-import-module-exports': 'warn',
      'import/no-nodejs-modules': 'off',
      'import/unambiguous': 'off',

      // -------- Static analysis --------
      'import/default': 'off',
      'import/named': 'error',
      'import/namespace': 'off',
      'import/no-absolute-path': 'warn',
      'import/no-cycle': 'warn',
      'import/no-dynamic-require': 'warn',
      'import/no-internal-modules': 'off',
      'import/no-relative-packages': 'error',
      'import/no-relative-parent-imports': 'off',
      'import/no-restricted-paths': 'off',
      'import/no-self-import': 'warn',
      'import/no-unresolved': 'off',
      'import/no-useless-path-segments': 'warn',
      'import/no-webpack-loader-syntax': 'off',

      // -------- Style guide --------
      'import/consistent-type-specifier-style': 'off',
      'import/dynamic-import-chunkname': 'off',
      'import/exports-last': 'off',
      'import/extensions': 'off',
      'import/first': 'warn',
      'import/group-exports': 'off',
      'import/max-dependencies': 'off',
      'import/newline-after-import': 'warn',
      'import/no-anonymous-default-export': 'off',
      'import/no-default-export': 'off',
      'import/no-duplicates': 'warn',
      'import/no-named-default': 'warn',
      'import/no-named-export': 'off',
      'import/no-namespace': 'off',
      'import/no-unassigned-import': 'off',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
    },
  }
}
