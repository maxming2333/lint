const vueConfig = require('./vue');
const uniAppRules = require('./rules/uni-app');
const defineConfig = require('./utils/define-config');

module.exports = defineConfig(vueConfig, {
  rules: uniAppRules,
});
