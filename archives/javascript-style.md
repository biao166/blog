# JavaScript 编程风格

## 标准说明

1. 标准风格：[JavaScript Standard Style](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style)

2. airbnb版风格：[airbnb/javascript](https://github.com/airbnb/javascript)

Airbnb 版更详尽，标准版更易操作，暂定使用标准风格，扩展项参考 Aribnb 设定。

### 标准摘要

    两个空格缩进。
    字符串用单引号，用双引号只是为了避免转义单引号。
    无未使用变量。这能帮助发现大量的错误。
    行开始不能是 (，[ 或 `。
        * 这是省略分号时唯一陷阱——自动为你检查。
        * 详细(https://github.com/feross/standard/blob/master/RULES.md#semicolons)
    关键字后面放一个空格。if (condition) { ... }
    函数名字后面放一个空格。function name (arg) { ... }
    始终用 ===，不要用 ==。不过可以用 obj == null 检测 null || undefined。
    始终处理 node.js 回调的 err 参数。
    始终以 window 引用浏览器的全局变量。 document 和 navigator 除外。
    这是为了防止使用浏览器那些命名糟糕的全局变量，比如 open, length, event 和 name。

## 检测工具

[ESLint](http://eslint.cn)

## 开发集成

### 配置环境

首先安装全局 ESLint

``` bash
npm i -g eslint
```

在项目文件夹安装工具

``` bash
npm install eslint eslint-friendly-formatter eslint-loader eslint-plugin-html eslint-plugin-promise eslint-plugin-standard --save-dev
```

然后安装标准语法规则

``` bash
npm install eslint-config-standard --save-dev
```

增加配置文件 <code>.eslintrc</code>

``` js
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,

    // allow async-await
    'generator-star-spacing': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-unused-vars': 0,
    'no-mixed-operators': 0,

    'space-before-function-paren': 0
  },
  globals: {
    'yidian': true,
    '_hmt': true,
    '__DEV__': true,
    '_initialState_': true,
    'OppoFeeds': true
  }
}


```

增加配置文件 <code>.eslintignore</code>

```
build/*.js
config/*.js
```

### cli 命令行检测

修改 package.json

``` json
{
  ...
  "scripts": {
    "lint": "eslint --ext .js,.vue src"
  }
  ...
}
```

cli执行 <code>npm run lint</code>

### webpack 编译时检测

webpack 配置文件增加 rule

```js
rules: [{
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: "pre",
    include: [resolve('vue')],
    options: {
    formatter: require('eslint-friendly-formatter')
    }
}]
```

即可编译时自动检测提示

## 参考
* [规则列表/错误对照](http://eslint.cn/docs/rules/)
* [ESLint](http://eslint.org/)
* [ESLint-配置](http://eslint.cn/docs/user-guide/configuring)
