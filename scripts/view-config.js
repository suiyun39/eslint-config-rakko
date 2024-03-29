import { spawnSync } from 'node:child_process'

process.env.PORT = '3000'
process.env.NO_OPEN = 'true'
process.env.ESLINT_CONFIG = 'eslint.view.js'

spawnSync('pnpm', ['exec', 'eslint-flat-config-viewer'], {
  stdio: 'inherit',
})
