import type { FlatConfigItem } from 'eslint-flat-config-utils'

export interface IgnoresOptions {
  ignores: FlatConfigItem['ignores']
}

/**
 * 全局文件忽略配置
 *
 * 请勿向此规则集中添加 name, 存在除 ignores 之外的其他属性会导致目录匹配失效
 */
export function ignoresFactory(options: IgnoresOptions): FlatConfigItem {
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
