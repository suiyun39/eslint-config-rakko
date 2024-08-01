# eslint-config-rakko

自用 ESLint 规则集

![npm](https://img.shields.io/npm/v/eslint-config-rakko?logo=npm&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/suiyun39/eslint-config-rakko/ci.yml?label=CI&logo=github-actions&logoColor=white&style=for-the-badge)

## 安装与使用

```shell
pnpm add -D eslint eslint-config-rakko
```

**eslint.config.js**

```javascript
import { defineConfig } from 'eslint-config-rakko'

export default defineConfig({
  typescript: true,
  react: true,
})
```

## 规则集

| 名称                    | 状态  | 启用方法                           |
|-----------------------|-----|--------------------------------|
| imports               | 实验中 | 默认启用                           |
| javascript            | 稳定  | 默认启用                           |
| stylistic             | 稳定  | 默认启用                           |
| typescript            | 实验中 | 配置 `typescript: true`          |
| typescript-type-aware | 实验中 | 配置 `typescript.projectService` |
| node                  | 实验中 | 配置 `node: true`                |
| react                 | 实验中 | 配置 `react: true`               |
| react-extra           | 稳定  | 配置 `react: true`               |
| solid                 | 实验中 | 配置 `solid: true`               |
| unicorn               | 实验中 | 配置 `unicorn: true`             |

## 覆盖配置

可通过 `overrides` 覆盖各规则集中的配置，示例如下：

```javascript
import { defineConfig } from 'eslint-config-rakko'

export default defineConfig({
  overrides: {
    'javascript': {
      rules: { 'no-console': 'off' },
    },
    'typescript': {
      rules: { '@typescript-eslint/no-shadow': 'off' },
    },
  },
})
```

## 参考与感谢

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
