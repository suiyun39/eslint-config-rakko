import { pipe, type FlatConfigItem, type FlatConfigPipeline } from 'eslint-flat-config-utils'

import { ignoresFactory, type IgnoresOptions } from './factorys/ignores'
import { importsFactory } from './factorys/imports'

export interface UserOptions {
  // 文件忽略配置
  ignores?: IgnoresOptions['ignores']

  // 配置覆盖
  overrides?: Parameters<FlatConfigPipeline['overrides']>[0]
}

export async function defineConfig(options: UserOptions): Promise<FlatConfigItem[]> {
  const { ignores, overrides } = options

  // -------- 基础配置 --------
  const config = pipe(
    ignoresFactory({ ignores }),
    importsFactory(),
  )

  // -------- 配置覆盖 --------
  if (overrides) {
    await config.overrides(overrides)
  }

  return config.toConfigs()
}
