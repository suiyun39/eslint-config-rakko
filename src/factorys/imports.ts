import type { Linter } from 'eslint'
import * as importPlugin from 'eslint-plugin-import-x'

export interface ImportsOptions {
  commonjs: boolean
}

export function importsFactory(options: ImportsOptions): Linter.Config {
  const { commonjs } = options

  return {
    name: 'imports',
    plugins: {
      'import-x': importPlugin,
    },
    rules: {
      // -------- Helpful warnings --------
      'import-x/export': 'error',
      'import-x/no-deprecated': 'warn',
      'import-x/no-empty-named-blocks': 'warn',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default': 'warn',
      'import-x/no-named-as-default-member': 'warn',
      'import-x/no-rename-default': 'off',
      'import-x/no-unused-modules': 'off',

      // -------- Module systems --------
      'import-x/no-amd': 'error',
      'import-x/no-commonjs': commonjs ? 'off' : 'error',
      'import-x/no-import-module-exports': 'warn',
      'import-x/no-nodejs-modules': 'off',
      'import-x/unambiguous': 'off',

      // -------- Static analysis --------
      'import-x/default': 'error',
      'import-x/named': 'error',
      'import-x/namespace': 'error',
      'import-x/no-absolute-path': 'warn',
      'import-x/no-cycle': 'warn',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-internal-modules': 'off',
      'import-x/no-relative-packages': 'error',
      'import-x/no-relative-parent-imports': 'off',
      'import-x/no-restricted-paths': 'off',
      'import-x/no-self-import': 'warn',
      'import-x/no-unresolved': 'off',
      'import-x/no-useless-path-segments': 'warn',
      'import-x/no-webpack-loader-syntax': 'off',

      // -------- Style guide --------
      'import-x/consistent-type-specifier-style': 'off',
      'import-x/dynamic-import-chunkname': 'off',
      'import-x/exports-last': 'off',
      'import-x/extensions': 'off',
      'import-x/first': 'warn',
      'import-x/group-exports': 'off',
      'import-x/max-dependencies': 'off',
      'import-x/newline-after-import': 'warn',
      'import-x/no-anonymous-default-export': 'off',
      'import-x/no-default-export': 'off',
      'import-x/no-duplicates': 'warn',
      'import-x/no-named-default': 'warn',
      'import-x/no-named-export': 'off',
      'import-x/no-namespace': 'off',
      'import-x/no-unassigned-import': 'off',
      'import-x/order': 'off',
      'import-x/prefer-default-export': 'off',
    },
  }
}
