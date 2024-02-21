import type { Linter } from 'eslint'
import globals from "globals";

/**
 * 此处包含了 javascript 相关规则
 * 由于 eslint 不再维护样式类规则, 此处样式配置应使用 eslint stylistic 提供的规则
 */
export function javascript(): Linter.FlatConfig {
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
