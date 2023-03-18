const vueConfig = require('./vue3');
const uniAppRules = require('./rules/uni-app');
const defineConfig = require('./utils/define-config');

module.exports = defineConfig(vueConfig, {
  rules: uniAppRules,
});
