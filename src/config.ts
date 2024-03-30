import { pipe, type FlatConfigItem, type FlatConfigPipeline } from 'eslint-flat-config-utils'

import { ignoresFactory, type IgnoresOptions } from './factorys/ignores'
import { importsFactory } from './factorys/imports'
import { javascriptFactory } from './factorys/javascript'
import { nodeFactory } from './factorys/node'
import { reactFactory } from './factorys/react'
import { solidFactory } from './factorys/solid'
import { stylisticFactory } from './factorys/stylistic'

export interface UserOptions {
  // 文件忽略配置
  ignores?: IgnoresOptions['ignores']

  // 配置覆盖
  overrides?: Parameters<FlatConfigPipeline['overrides']>[0]

  // 是否启用针对 nodejs 的规则
  node?: boolean

  // 是否启用针对 React 的规则
  react?: boolean

  // 是否启用针对 Solid 的规则
  solid?: boolean
}

export async function defineConfig(options: UserOptions): Promise<FlatConfigItem[]> {
  const { ignores, overrides, node, react, solid } = options

  // -------- 基础配置 --------
  const config = pipe(
    ignoresFactory({ ignores }),
    importsFactory(),
    javascriptFactory(),
    stylisticFactory(),
  )

  // -------- 可选配置 --------
  if (node) {
    await config.append(nodeFactory())
  }

  if (react) {
    await config.append(reactFactory())
  }

  if (solid) {
    await config.append(solidFactory())
  }

  // -------- 配置覆盖 --------
  if (overrides) {
    await config.overrides(overrides)
  }

  return config.toConfigs()
}
