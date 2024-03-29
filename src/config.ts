import type { Linter } from 'eslint'

import { ignores } from './factorys/ignores'
import { javascript } from './factorys/javascript'
import { stylistic } from './factorys/stylistic'
import { typescript, type TypescriptOptions } from './factorys/typescript'
import { imports } from './factorys/imports'
import { react } from './factorys/react'
import { solid } from './factorys/solid'
import { node } from './factorys/node'

export interface UserConfig {
  ignores?: Linter.FlatConfig['ignores']
  typescript?: TypescriptOptions | boolean
  react?: boolean
  solid?: boolean
  node?: boolean
}

export function defineConfig(config: UserConfig): Linter.FlatConfig[] {
  const configs: Linter.FlatConfig[] = []

  // -------- 基础配置 --------
  configs.push(ignores({ ignores: config.ignores ?? [] }))
  configs.push(javascript())
  configs.push(stylistic())
  configs.push(imports())

  if (config.typescript) {
    const defaultOptions: TypescriptOptions = { project: false }
    const options = config.typescript === true ? defaultOptions : config.typescript

    configs.push(typescript(options))
  }

  if (config.react) {
    configs.push(react())
  }

  if (config.solid) {
    configs.push(solid())
  }

  if (config.node) {
    configs.push(node())
  }

  return configs
}
