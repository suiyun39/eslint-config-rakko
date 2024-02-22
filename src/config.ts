import type { Linter } from 'eslint'

import { ignores } from './factorys/ignores'
import { javascript } from './factorys/javascript'

export interface UserConfig {
  ignores?: Linter.FlatConfig['ignores']
}

export function defineConfig(config: UserConfig): Linter.FlatConfig[] {
  const configs: Linter.FlatConfig[] = []

  // -------- 基础配置 --------
  configs.push(ignores({ ignores: config.ignores ?? [] }))
  configs.push(javascript())

  return configs
}
