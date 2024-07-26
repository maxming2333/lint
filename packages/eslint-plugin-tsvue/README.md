# eslint-plugin-tsvue

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-tsvue.svg?style=flat)](https://npmjs.org/package/eslint-plugin-tsvue)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-plugin-tsvue.svg?style=flat)](https://npmjs.org/package/eslint-plugin-tsvue)
[![License](https://img.shields.io/github/license/maxming2333/lint.svg?style=flat)](https://github.com/maxming2333/lint/blob/main/LICENSE)

本插件用来解决 vue 项目中 JS/TS 混合开发的过度阶段带来的 eslint 问题

核心思想是用一个 eslint 插件，把 vue+ts 的 vue 文件，修改文件路径，增加 `.__lint_lang_ts` 路径标识

从而达到按语言区分文件名，这样可以在 eslint 里面用 overwrite 进行规则区分了

由 Github 此问题得到的解决办法 [vuejs/vue-eslint-parser/issues/49](https://github.com/vuejs/vue-eslint-parser/issues/49#issuecomment-806852933)，文中提及的包 [eslint-plugin-tsvue](https://github.com/mjeanroy/eslint-plugin-tsvue-sample/tree/master/eslint-plugin-tsvue) 完善而来

## 安装

```bash
npm install eslint-plugin-tsvue --save-dev
```

## 使用

```js
{
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: require.resolve('@babel/eslint-parser'),
  },
  plugins: ['tsvue'],
  overrides: [
    {
      files: ['**/*.{ts,tsx,jsx}', '**/.__lint_lang_ts/*.vue'],
      parser: require.resolve('vue-eslint-parser'),
      parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue'],
        ...
      },
      plugins: ['@typescript-eslint'],
    },
  ],
}
```
