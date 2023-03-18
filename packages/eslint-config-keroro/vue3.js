const baseRules = require('./rules/base');
const tsBaseRules = require('./rules/ts');
const vueBaseRules = require('./rules/vue');
const parserOptionsConfig = require('./config/parser-options');
const defineConfig = require('./utils/define-config');

module.exports = defineConfig({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: require.resolve('@babel/eslint-parser'),
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:ali/recommended',
    'eslint-config-ali',
  ],
  plugins: ['vue', 'html', 'promise', 'sonarjs', 'ali', 'vue-oboi', 'eslint-plugin-tsvue'],
  rules: {
    ...baseRules,
    ...vueBaseRules,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx,tsvue}'],
      parser: require.resolve('eslint-plugin-tsvue-parser'),
      parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue', '.tsvue'],
        ...parserOptionsConfig,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'plugin:ali/recommended',
        'eslint-config-ali/typescript',
      ],
      plugins: ['vue', 'html', 'promise', 'sonarjs', 'ali', 'vue-oboi', '@typescript-eslint'],
      rules: {
        ...baseRules,
        ...vueBaseRules,
        ...tsBaseRules,
      },
    },
  ],
});
