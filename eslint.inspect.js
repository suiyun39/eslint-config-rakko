import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
require('sucrase/register/ts')

const { defineConfig } = require('./src/index.ts')

export default defineConfig({
  typescript: {
    projectService: true,
  },
  solid: true,
  react: true,
  node: true,
  unicorn: true,
})
