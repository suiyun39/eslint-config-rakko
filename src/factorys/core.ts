import type { Linter } from 'eslint'
import globals from "globals";

/**
 * 此处包含了非样式类 javascript 规则
 * 由于 eslint 不再维护样式类规则, 因此使用 eslint stylistic 提供的规则. 维护在 stylistic.ts 中
 */
export function core(): Linter.FlatConfig {
  return {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.es2021,
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {},
  }
}
