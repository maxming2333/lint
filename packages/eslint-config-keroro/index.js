const utils = require('./utils');
const baseRules = require('./rules/base');
const tsBaseRules = require('./rules/ts');
const defineConfig = require('./utils/define-config');

module.exports = defineConfig({
  parser: require.resolve('@babel/eslint-parser'),
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:ali/recommended',
    'eslint-config-ali',
  ],
  plugins: ['promise', 'sonarjs', 'ali'],
  rules: {
    ...baseRules,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: require.resolve('@typescript-eslint/parser'),
      parserOptions: {
        tsconfigRootDir: utils.getProjectDirectory(),
        project: ['tsconfig.json'],
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'plugin:ali/recommended',
        'eslint-config-ali/typescript',
      ],
      plugins: ['promise', 'sonarjs', 'ali', '@typescript-eslint'],
      rules: {
        ...baseRules,
        ...tsBaseRules,
      },
    },
  ],
});
