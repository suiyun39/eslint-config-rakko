import type { Linter } from 'eslint'

import { ignores } from './factorys/ignores'
import { javascript } from './factorys/javascript'
import { stylistic } from "./factorys/stylistic";
import { typescript } from "./factorys/typescript";

export interface UserConfig {
  ignores?: Linter.FlatConfig['ignores'];
  typescript?: boolean;
}

export function defineConfig(config: UserConfig): Linter.FlatConfig[] {
  const configs: Linter.FlatConfig[] = []

  // -------- 基础配置 --------
  configs.push(ignores({ ignores: config.ignores ?? [] }))
  configs.push(javascript())
  configs.push(stylistic())

  if (config.typescript) {
    configs.push(typescript())
  }

  return configs
}
