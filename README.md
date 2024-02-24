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

| 名称         | 类型                             | 描述                 |
|------------|--------------------------------|--------------------|
| ignores    | `string[]`                     | 全局忽略文件配置           |
| typescript | `TypescriptOptions \| boolean` | 是否启用 TypeScript 规则 |

## 参考与感谢

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
