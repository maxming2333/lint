const parser = require('vue-sfc-parser');
const vueEslintPluginProcessor = require('eslint-plugin-vue/lib/processor');

module.exports = Object.assign({}, vueEslintPluginProcessor, {
  preprocess(text, filename) {
    // 如果已经被处理了，就不在分析
    if (/\/\.__lint_lang_[^/]+\//i.test(filename)) {
      return vueEslintPluginProcessor.preprocess(text);
    }

    const parseResult = parser.parseComponent(text);
    const { script } = parseResult;
    const lang = script ? (script.lang || 'js') : 'js';
    if (/js/i.test(lang)) {
      return vueEslintPluginProcessor.preprocess(text);
    }

    const name = filename.replace(/\.vue$/, `/.__lint_lang_${lang}/0_.vue`);
    return [
      {
        text,
        filename: name,
      },
    ];
  },
});
