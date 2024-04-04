import { composer, type FlatConfigItem, type FlatConfigComposer } from 'eslint-flat-config-utils'

import { ignoresFactory, type IgnoresOptions } from './factorys/ignores'
import { importsFactory } from './factorys/imports'
import { javascriptFactory } from './factorys/javascript'
import { nodeFactory } from './factorys/node'
import { reactFactory } from './factorys/react'
import { solidFactory } from './factorys/solid'
import { stylisticFactory } from './factorys/stylistic'
import { typescriptFactory, type TypescriptOptions } from './factorys/typescript'
import { unicornFactory } from './factorys/unicorn'

export interface UserOptions {
  // 文件忽略配置
  ignores?: IgnoresOptions['ignores']

  // 配置覆盖
  overrides?: Parameters<FlatConfigComposer['overrides']>[0]

  // 启用 TypeScript 规则集
  typescript?: boolean | TypescriptOptions

  // 启用 nodejs 规则集
  node?: boolean

  // 启用 React 规则集
  react?: boolean

  // 启用 Solid 规则集
  solid?: boolean

  // 启用 unicorn 规则集
  unicorn?: boolean
}

export async function defineConfig(options: UserOptions): Promise<FlatConfigItem[]> {
  const { ignores, overrides, typescript, node, react, solid, unicorn } = options

  // -------- 基础配置 --------
  const config = composer(
    ignoresFactory({ ignores }),
    importsFactory(),
    javascriptFactory(),
    stylisticFactory(),
  )

  // -------- 可选配置 --------
  if (typescript) {
    const opt = typeof typescript === 'object' ? typescript : {}
    await config.append(typescriptFactory(opt))
  }

  if (node) {
    await config.append(nodeFactory())
  }

  if (react) {
    await config.append(reactFactory())
  }

  if (solid) {
    await config.append(solidFactory())
  }

  if (unicorn) {
    await config.append(unicornFactory())
  }

  // -------- 配置覆盖 --------
  if (overrides) {
    await config.overrides(overrides)
  }

  return config.toConfigs()
}
