const main = require('./');
const uniAppRules = require('./rules/uni-app');

module.exports = {
  ...main,
  rules: {
    ...main.rules,
    ...uniAppRules,
  },
};
