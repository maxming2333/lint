module.exports = {
  'scss/at-extend-no-missing-placeholder': null,
  // /前的空格校验
  'scss/operator-no-unspaced': null,
  // 忽略 ".scss" 引用
  'scss/at-import-partial-extension': null,
  // scss 变量名忽略警告
  'scss/dollar-variable-pattern': [/./, { ignore: 'global' }],
  // mixin变量名支持全部字符
  'scss/at-mixin-pattern': /.+/,
  'scss/dollar-variable-colon-space-before': ['never'],
  'scss/dollar-variable-colon-space-after': ['always'],
};
