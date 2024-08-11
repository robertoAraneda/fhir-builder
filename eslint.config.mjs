// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';

export default tseslint.config({
  files: ['src/**/*.ts'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict
  ],
  rules: {
    'no-console': 'error',
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
  },
  ignores: ['**/node_modules/**', '**/library/**'],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    jest: jestPlugin,
  },
});