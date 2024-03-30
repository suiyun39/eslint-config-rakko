import type { Linter } from 'eslint'
import type { FlatConfig } from '../common'

export interface IgnoresOptions {
  ignores: NonNullable<Linter.FlatConfig['ignores']>
}

/**
 * 全局文件忽略配置
 */
export function ignoresFactory(options: IgnoresOptions): FlatConfig {
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

      ...options.ignores,
    ],
  }
}
