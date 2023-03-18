const baseRules = require('./rules/base');
const tsBaseRules = require('./rules/ts');
const reactBaseRules = require('./rules/react');
const parserOptionsConfig = require('./config/parser-options');
const defineConfig = require('./utils/define-config');

module.exports = defineConfig({
  parser: require.resolve('@babel/eslint-parser'),
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:ali/recommended',
    'eslint-config-ali',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'html', 'promise', 'sonarjs', 'ali'],
  rules: {
    ...baseRules,
    ...reactBaseRules,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: require.resolve('@typescript-eslint/parser'),
      parserOptions: {
        ...parserOptionsConfig,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'plugin:ali/recommended',
        'eslint-config-ali/typescript',
      ],
      plugins: ['react', 'react-hooks', 'jsx-a11y', 'promise', 'sonarjs', 'ali', '@typescript-eslint'],
      rules: {
        ...baseRules,
        ...reactBaseRules,
        ...tsBaseRules,
      },
    },
  ],
});
