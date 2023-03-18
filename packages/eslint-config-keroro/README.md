# eslint-config-keroro

[![NPM version](https://img.shields.io/npm/v/eslint-config-keroro.svg?style=flat)](https://npmjs.org/package/eslint-config-keroro)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-keroro.svg?style=flat)](https://npmjs.org/package/eslint-config-keroro)
[![License](https://img.shields.io/github/license/maxming2333/lint.svg?style=flat)](https://github.com/maxming2333/lint/blob/main/LICENSE)

本 eslint 配置文件，支持 纯 js/ts 项目 或者 js+ts 混合项目

如 `vue+js`、`vue+ts`、`vue+js+ts`

是 Keroro 的标准规范配置

## 安装

```bash
npm install eslint-config-keroro
```

## 使用

### js 或者 js+ts 混合
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'keroro',
  ],
};
```

### vue2 js+ts 混合
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'keroro/vue',
  ],
};
```

### vue3 js+ts 混合
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'keroro/vue3',
  ],
};
```

### react jsx+tsx 混合
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'keroro/react',
  ],
};
```

### uni-app vue2 js+ts 混合
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'keroro/uni-app',
  ],
};
```

### uni-app vue3 js+ts 混合
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'keroro/uni-app3',
  ],
};
```
