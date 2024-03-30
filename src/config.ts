import type { Linter } from 'eslint'

import { ignoresFactory } from './factorys/ignores'
import { javascriptFactory } from './factorys/javascript'
import { stylisticFactory } from './factorys/stylistic'
import { typescriptFactory, type TypescriptOptions } from './factorys/typescript'
import { importsFactory } from './factorys/imports'
import { reactFactory } from './factorys/react'
import { solidFactory } from './factorys/solid'
import { nodeFactory } from './factorys/node'

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
  configs.push(ignoresFactory({ ignores: config.ignores ?? [] }))
  configs.push(javascriptFactory())
  configs.push(stylisticFactory())
  configs.push(importsFactory())

  if (config.typescript) {
    const defaultOptions: TypescriptOptions = { project: false }
    const options = config.typescript === true ? defaultOptions : config.typescript

    configs.push(typescriptFactory(options))
  }

  if (config.react) {
    configs.push(reactFactory())
  }

  if (config.solid) {
    configs.push(solidFactory())
  }

  if (config.node) {
    configs.push(nodeFactory())
  }

  return configs
}
