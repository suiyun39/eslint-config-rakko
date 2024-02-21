import type { Linter } from 'eslint'

import { javascript } from './factorys/javascript'

export interface UserConfig {
}

export function defineConfig(config: UserConfig): Linter.FlatConfig[] {
  const configs: Linter.FlatConfig[] = []

  // -------- 基础配置 --------
  configs.push(javascript())

  return configs
}
