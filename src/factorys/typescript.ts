import type { Linter, ESLint } from 'eslint'
import { parser as tsParser, plugin as tsPlugin } from 'typescript-eslint'

export function typescript(): Linter.FlatConfig {
  return {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser as Linter.ParserModule,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin as ESLint.Plugin,
    },
    rules: {},
  }
}
