const utils = require('../utils');

module.exports = {
  tsconfigRootDir: utils.getProjectDirectory(),
  project: ['tsconfig.json'],
  ecmaVersion: 'latest',
  sourceType: 'module',
  ecmaFeatures: {
    jsx: false,
    modules: true,
  },
};
