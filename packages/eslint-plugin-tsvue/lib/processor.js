const parser = require('vue-sfc-parser');
const vueEslintPluginProcessor = require('eslint-plugin-vue/lib/processor');

module.exports = Object.assign({}, vueEslintPluginProcessor, {
  preprocess(text, filename) {
    const parseResult = parser.parseComponent(text);
    const { script } = parseResult;
    const lang = script ? (script.lang || 'js') : 'js';
    if (lang === 'js') {
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
