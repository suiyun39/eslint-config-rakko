import type { Linter } from 'eslint'

export interface IgnoresConfig {
  ignores: NonNullable<Linter.FlatConfig['ignores']>
}

/**
 * 全局文件忽略配置
 */
export function ignores(config: IgnoresConfig): Linter.FlatConfig {
  return {
    ignores: [
      '**/node_modules',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',

      '**/dist',
      '**/coverage',
      '**/*.min.*',

      '**/.idea',

      ...config.ignores,
    ],
  }
}
