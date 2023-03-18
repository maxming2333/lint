require('./lib/stylelint-deprecations-disable');

const baseRules = require('./rules/base');
const scssRules = require('./rules/scss');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-idiomatic-order',
    'stylelint-config-ali',
    'stylelint-config-html',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    ...baseRules,
    ...scssRules,
  },
};
