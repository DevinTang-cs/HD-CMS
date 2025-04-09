module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  ignorePatterns: ['dist/**', 'build/**'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off', // 关闭引号检查
    semi: 'off', // 关闭分号检查
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 与 Prettier 配置保持完全一致
        semi: false
      }
    ],
    'vue/multi-word-component-names': 'off', // 关闭组件名规则
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
