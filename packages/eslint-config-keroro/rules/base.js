module.exports = {
  eqeqeq: 'error',
  'no-else-return': 'error',
  'sonarjs/cognitive-complexity': ['error', 30],

  radix: 'off',
  'max-len': 'off',
  'import/no-unresolved': 'off',
  'promise/catch-or-return': 'off',
  'promise/always-return': 'off',
  'promise/no-nesting': 'off',
  'newline-per-chained-call': 'off',
  'prefer-promise-reject-errors': 'error',

  'import/no-named-as-default': 'off',
  'import/no-cycle': 'off',
  'import/no-unused-modules': 'off',
  'import/no-deprecated': 'off',

  // 只有当提交的时候，才做 console 检查
  'no-console': process.env.GIT_HOOK === 'pre-commit' ? 'error' : 'off',
  'no-debugger': process.env.GIT_HOOK === 'pre-commit' ? 'error' : 'off',
};
