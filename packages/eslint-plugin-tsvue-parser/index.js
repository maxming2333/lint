const vueParser = require('vue-eslint-parser');

Object.assign(module.exports, vueParser);

function parseForESLint(code, options) {
  return vueParser.parseForESLint(code, {
    ...options,
    filePath: options.filePath.replace(/\/0_\/.*/ig, ''),
  });
}

function parse(code, options) {
  return parseForESLint(code, options).ast;
}

exports.parseForESLint = parseForESLint;
exports.parse = parse;
