import type { Linter } from 'eslint'

export interface IgnoresOptions {
  ignores: Linter.FlatConfig['ignores']
}

/**
 * 全局文件忽略配置
 *
 * 请勿向此规则集中添加 name, 存在除 ignores 之外的其他属性会导致目录匹配失效
 */
export function ignoresFactory(options: IgnoresOptions): Linter.FlatConfig {
  const { ignores = [] } = options

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
      '**/.vscode',

      ...ignores,
    ],
  }
}
