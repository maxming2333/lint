const vueParser = require('vue-eslint-parser');

function parseForESLint(code, options) {
  return vueParser.parseForESLint(code, {
    ...options,
    filePath: options.filePath.replace(/\/0_\/.*/ig, ''),
  });
}

function parse(code, options) {
  return parseForESLint(code, options).ast;
}

module.exports = Object.assign(vueParser, {
  parseForESLint,
  parse,
});
