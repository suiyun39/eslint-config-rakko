import type { Linter, ESLint } from 'eslint'
import tsESLint from 'typescript-eslint'

export interface TypescriptOptions {
  project: boolean | string | string[]
}

export function typescript(options: TypescriptOptions): Linter.FlatConfig {
  // 这些规则需要类型信息才能运行, 因此仅在配置了 project 选项时才加入规则集
  const typeAwareRules: Linter.FlatConfig['rules'] = {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-delete': 'warn',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-void-expression': ['warn', {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
    }],
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    '@typescript-eslint/no-misused-promises': ['error', {
      checksConditionals: true,
      checksVoidReturn: false,
      checksSpreads: true,
    }],
    '@typescript-eslint/no-mixed-enums': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': ['warn', { allowConstantLoopConditions: true }],
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-unary-minus': 'warn',
    '@typescript-eslint/no-useless-template-literals': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/prefer-find': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': ['warn', { ignoreConditionalTests: true }],
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-promise-reject-errors': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/unbound-method': 'error',
  }

  return {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsESLint.parser as Linter.ParserModule,
      parserOptions: {
        sourceType: 'module',
        project: options.project,
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': tsESLint.plugin as ESLint.Plugin,
    },
    rules: {
      // -------- 与 TypeScript 冲突的规则 --------
      'dot-notation': 'off',
      'default-param-last': 'off',
      'init-declarations': 'off',
      'max-params': 'off',
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-empty-function': 'off',
      'no-implied-eval': 'off',
      'no-invalid-this': 'off',
      'no-loop-func': 'off',
      'no-loss-of-precision': 'off',
      'no-magic-numbers': 'off',
      'no-redeclare': 'off',
      'no-restricted-imports': 'off',
      'no-shadow': 'off',
      'no-throw-literal': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'prefer-destructuring': 'off',
      'prefer-promise-reject-errors': 'off',
      'require-await': 'off',

      // -------- 常规规则 --------
      '@typescript-eslint/adjacent-overload-signatures': 'warn',
      '@typescript-eslint/array-type': ['warn', { default: 'array-simple', readonly: 'array-simple' }],
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/ban-tslint-comment': 'warn',
      '@typescript-eslint/ban-types': 'error',
      '@typescript-eslint/class-literal-property-style': 'warn',
      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/consistent-generic-constructors': 'warn',
      '@typescript-eslint/consistent-indexed-object-style': 'warn',
      '@typescript-eslint/consistent-type-assertions': ['warn', {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      }],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': ['warn', {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: false,
      }],
      '@typescript-eslint/default-param-last': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/init-declarations': 'warn',
      '@typescript-eslint/max-params': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/method-signature-style': ['warn', 'property'],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
      '@typescript-eslint/no-dupe-class-members': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-void-type': 'warn',
      '@typescript-eslint/no-loop-func': 'warn',
      '@typescript-eslint/no-loss-of-precision': 'error',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/no-restricted-imports': 'off',
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/no-useless-empty-export': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/parameter-properties': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/prefer-enum-initializers': 'warn',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      '@typescript-eslint/prefer-namespace-keyword': 'warn',
      '@typescript-eslint/prefer-ts-expect-error': 'warn',
      '@typescript-eslint/sort-type-constituents': 'off',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/typedef': 'off',
      '@typescript-eslint/unified-signatures': 'warn',

      // -------- 需要类型信息的规则 --------
      ...options.project ? typeAwareRules : {},
    },
  }
}
