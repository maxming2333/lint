const parser = require('vue-sfc-parser');
const vueEslintPlugin = require('eslint-plugin-vue');

const processor = vueEslintPlugin.processors[ '.vue' ] || vueEslintPlugin.processors.vue;

module.exports = Object.assign({}, processor, {
  preprocess(text, filename) {
    const parseResult = parser.parseComponent(text);
    const { script } = parseResult;
    const lang = script ? (script.lang || 'js') : 'js';
    if (/js/i.test(lang)) {
      return processor.preprocess(text, filename);
    }

    return [
      {
        text,
        filename: `0.${lang}vue`,
      },
    ];
  },
});
