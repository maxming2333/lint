module.exports = {
  // 避免 uni-app 条件编译错乱
  'import/first': 'off',
  // 防止 eslint 转换大小写，导致小程序驼峰属性失效
  'vue/component-definition-name-casing': 'off',
  'vue/component-name-in-template-casing': 'off',
  'vue/component-options-name-casing': 'off',
  'vue/attribute-hyphenation': 'off',
  'vue/v-on-event-hyphenation': 'off',
  'vue/prop-name-casing': 'off',
  'vue/custom-event-name-casing': 'off',
};
