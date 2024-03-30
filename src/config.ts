import { pipe, type FlatConfigItem } from 'eslint-flat-config-utils'

import { ignoresFactory, type IgnoresOptions } from './factorys/ignores'

export interface UserOptions {
  // 文件忽略配置
  ignores?: IgnoresOptions['ignores']
}

export async function defineConfig(options: UserOptions): Promise<FlatConfigItem[]> {
  const { ignores } = options

  // -------- 基础配置 --------
  const config = pipe(ignoresFactory({ ignores }))

  return config.toConfigs()
}
