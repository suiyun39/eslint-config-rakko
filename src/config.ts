import { pipe, type FlatConfigItem, type FlatConfigPipeline } from 'eslint-flat-config-utils'

import { ignoresFactory, type IgnoresOptions } from './factorys/ignores'
import { importsFactory } from './factorys/imports'
import { javascriptFactory } from './factorys/javascript'
import { nodeFactory } from './factorys/node'
import { reactFactory } from './factorys/react'

export interface UserOptions {
  // 文件忽略配置
  ignores?: IgnoresOptions['ignores']

  // 配置覆盖
  overrides?: Parameters<FlatConfigPipeline['overrides']>[0]

  // 是否启用针对 nodejs 的规则
  node?: boolean

  // 是否启用针对 React 的规则
  react?: boolean
}

export async function defineConfig(options: UserOptions): Promise<FlatConfigItem[]> {
  const { ignores, overrides, node, react } = options

  // -------- 基础配置 --------
  const config = pipe(
    ignoresFactory({ ignores }),
    importsFactory(),
    javascriptFactory(),
  )

  // -------- 可选配置 --------
  if (node) {
    await config.append(nodeFactory())
  }

  if (react) {
    await config.append(reactFactory())
  }

  // -------- 配置覆盖 --------
  if (overrides) {
    await config.overrides(overrides)
  }

  return config.toConfigs()
}
