const original = require('stylelint/lib/formatters/stringFormatter');

module.exports = function stringFormatter(results, returnValue) {
  results.forEach((result) => {
    // eslint-disable-next-line no-param-reassign
    result.deprecations = [];
  });
  return original(results, returnValue);
};
