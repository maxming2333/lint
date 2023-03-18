const utils = require('./');
const baseConfig = require('../config/base');

function injectionAutoImport(config) {
  const autoImportFile = utils.getProjectFile('.eslintrc-auto-import.json');
  if (!autoImportFile) return;

  config.extends.unshift(autoImportFile);
  const overrides = config.overrides || [];
  overrides.forEach((override) => {
    override.extends.unshift(autoImportFile);
  });
}

function addRules(config, rules) {
  const overrides = config.overrides || [];
  // eslint-disable-next-line no-param-reassign
  config.rules = {
    ...config.rules,
    ...rules,
  };
  overrides.forEach((override) => {
    // eslint-disable-next-line no-param-reassign
    override.rules = {
      ...config.rules,
      ...rules,
    };
  });
}

module.exports = function defineConfig(config, options = {}) {
  const data = {
    ...baseConfig,
    ...config,
  };

  // 自动注入 auto-import 插件的 json
  injectionAutoImport(data);

  // rules 插入
  if (options.rules) {
    addRules(data, options.rules);
  }

  return data || {};
};
