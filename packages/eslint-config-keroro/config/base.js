require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    __PROD__: 'readonly',
    Vue: 'readonly',
    VueRouter: 'readonly',
    Vuex: 'readonly',
    axios: 'readonly',
    ELEMENT: 'readonly',
    Sentry: 'readonly',
    sensors: 'readonly',
  },
  ignorePatterns: ['dist', 'node_modules'],
};
