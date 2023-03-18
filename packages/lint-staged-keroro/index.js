const micromatch = require('micromatch');
const { ESLint } = require('eslint');
const createStylelint = require('stylelint/lib/createStylelint');
const isPathIgnored = require('stylelint/lib/isPathIgnored');

const checkPathIgnored = (function () {
  // eslint
  const eslint = new ESLint();
  // style
  const stylelint = createStylelint();
  return function (type, file) {
    if (type === 'eslint') {
      return eslint.isPathIgnored(file);
    } else if (type === 'stylelint') {
      return isPathIgnored(stylelint, file);
    }
  };
})();

const removeIgnoredFiles = async (type, files) => {
  const isIgnored = await Promise.all(
    files.map((file) => {
      return checkPathIgnored(type, file);
    }),
  );

  return files.filter((_, i) => !isIgnored[i]);
};

const getLintCommand = async function (typeList = [], files) {
  const result = [];
  await Promise.all(
    typeList.map((type) => {
      return (async () => {
        const lintFiles = await removeIgnoredFiles(type, files);
        if (!lintFiles.length) return;
        if (type === 'eslint') {
          result.push(`npm run lint:commit -- ${lintFiles.map((item) => JSON.stringify(item)).join(' ')}`);
        } else if (type === 'stylelint') {
          result.push(`npm run stylelint:commit -- ${lintFiles.map((item) => JSON.stringify(item)).join(' ')}`);
        }
      })();
    }),
  );
  return result;
};

module.exports = {
  '**/*.{js,ts,jsx,tsx}': (files) => {
    const match = micromatch.not(files, '**/typings/**/*.{js,ts}');
    return getLintCommand(['eslint'], match);
  },
  '**/*.{css,less,sss,scss,sass}': (files) => {
    return getLintCommand(['stylelint'], files);
  },
  '**/*.{vue,tsvue,htm,html}': (files) => {
    return getLintCommand(['eslint', 'stylelint'], files);
  },
};
