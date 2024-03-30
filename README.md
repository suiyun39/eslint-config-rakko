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
})
```

## 配置项

| 名称         | 类型                             | 描述               |
|------------|--------------------------------|------------------|
| ignores    | `string[]`                     | 全局忽略文件配置         |
| typescript | `TypescriptOptions \| boolean` | 启用 TypeScript 规则 |
| react      | `boolean`                      | 启用 React 规则      |
| solid      | `boolean`                      | 启用 solid 规则      |
| node       | `boolean`                      | 启用 Node.js 规则    |

## 规则覆盖

本规则集允许通过 `overrides` 配置覆盖各规则集中的规则，示例如下：

```javascript
import { defineConfig } from 'eslint-config-rakko'

export default defineConfig({
  overrides: {
    'javascript': {
      rules: {
        'no-console': 'off',
      }
    },
  },
})
```

其中 `overrides` 的 key 为规则集名称，value 为规则集配置，在内部将于默认配置进行合并。各规则集名称如下：

- `imports`
- `javascript`
- `node`
- `react`
- `solid`
- `stylistic`
- `typescript`

## 参考与感谢

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
