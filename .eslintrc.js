module.exports = {
  env: {
    'jest/globals': true,
    'cypress/globals': true,
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'cypress', 'jest'],
  rules: {}
}
