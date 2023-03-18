module.exports = {
  'max-line-length': null,
  'color-hex-case': null,
  // 避免自动 fix 导致 import 乱来
  'import-notation': null,
  'selector-class-pattern': null,
  'selector-max-id': null,
  'property-no-unknown': null,
  'selector-id-pattern': null,
  'declaration-block-no-redundant-longhand-properties': null,
  // 这里是为了兼容移动端多行省略
  'property-no-vendor-prefix': [
    true, {
      ignoreProperties: [
        /./,
        'line-clamp',
        'box-orient',
      ],
    },
  ],
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['global', 'deep', '/./', '-webkit-'],
    },
  ],
  'selector-pseudo-element-no-unknown': [
    true,
    {
      ignorePseudoElements: ['input-placeholder', 'deep', 'v-deep', '/./', '-webkit-'],
    },
  ],
  // 忽略rpx校验
  'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  // 渐变写法校验关闭
  'function-linear-gradient-no-nonstandard-direction': null,
  // 强制 "50%" 变成 "0.5"
  'alpha-value-notation': ['number'],
  // 不改写rgba函数
  'color-function-notation': null,
  'font-family-no-missing-generic-family-keyword': null,
  // 重复属性校验关闭 因为需要适配多端代码，会有重复属性
  'declaration-block-no-duplicate-properties': null,
  // 选择器重复校验关闭
  'no-duplicate-selectors': null,
  // 忽略属性简写
  'declaration-block-no-shorthand-property-overrides': null,
  // 忽略URL引号校验
  'function-url-quotes': null,
  // 忽略空文件校验
  'no-empty-source': null,
  // 动画函数 忽略校验
  'function-no-unknown': null,
  // 动画名 忽略校验
  'keyframes-name-pattern': null,
  // 指定字符串使用单引号或双引号 "single"|"double"
  'string-quotes': 'single',
  // 禁止空块
  'block-no-empty': true,
  // 颜色6位长度
  'color-hex-length': 'long',
  // 禁止低优先级的选择器出现在高优先级的选择器之后。
  'no-descending-specificity': null,
  // 不验证@未知的名字，为了兼容scss的函数
  'at-rule-no-unknown': null,
  // 禁止空注释
  'comment-no-empty': true,
  // 禁止简写属性的冗余值
  'shorthand-property-no-redundant-values': true,
  // 禁止值的浏览器引擎前缀
  'value-no-vendor-prefix': [
    true,
    {
      ignoreValues: 'box',
    },
  ],
  // 禁止小于 1 的小数有一个前导零
  'number-leading-zero': null,
  // 禁止空第一行
  'no-empty-first-line': true,
  'function-name-case': null,
  'declaration-colon-space-before': ['never'],
  'declaration-colon-space-after': ['always'],
};
