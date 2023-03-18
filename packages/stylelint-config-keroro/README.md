# stylelint-config-keroro

[![NPM version](https://img.shields.io/npm/v/stylelint-config-keroro.svg?style=flat)](https://npmjs.org/package/stylelint-config-keroro)
[![NPM downloads](https://img.shields.io/npm/dm/stylelint-config-keroro.svg?style=flat)](https://npmjs.org/package/stylelint-config-keroro)
[![License](https://img.shields.io/github/license/maxming2333/lint.svg?style=flat)](https://github.com/maxming2333/lint/blob/main/LICENSE)


本 stylelint 配置文件，是 Keroro 的标准规范配置

--------

**注意：**

本规则如果是 stylelint `v15`，会屏蔽 `Deprecation warnings` 输出

因为 stylelint `v15` 之后，将会丢弃强制风格化的规则，转而让用户使用 `Prettier` 来保证 演示文件 的风格，详情请查看：https://stylelint.io/migration-guide/to-15

但是对于我们不使用 `Prettier` 用户来说，这个可能是一个灾难，所以这里我还是开启了强制风格化的规则

不过可能到了 `v16` 版本，本插件可能就会报错了

## 安装

```bash
npm install stylelint-config-keroro
```

## 使用


### 普通项目使用
```js
// .stylelintrc.js
module.exports = {
  extends: [
    'keroro',
  ],
};
```


### uni-app 项目使用
```js
// .stylelintrc.js
module.exports = {
  extends: [
    'keroro/uni-app',
  ],
};
```
