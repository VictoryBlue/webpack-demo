# note

上述所有内容最出色的方面在于，以这种方式加载资源，不需要把所有的资源都放置在/assets 目录，可以把资源放在组件里面。如果一个组件想要被移到另外一个项目，只需要把整个组件文件夹复制过去，npm 安装相同的依赖，然后在 webpack.config.js 配好相同的 loader 就好。

```
 |- /assets
 |– /components
 |  |– /my-component
 |  |  |– index.jsx
 |  |  |– index.css
 |  |  |– icon.svg
 |  |  |– img.png
```

也就是说 build 是这样一个过程，把 src code 里的资源打包成为可以直接发给浏览器执行的文件的过程。

## entry

从哪里开始打包呢？从 entry 开始打包，entry 通常是打包的起点，webpack 从这个文件开始找哪些 import 是源代码直接或者间接依赖的。

## output

我们在 webpack.config.js 里的 output 属性配置打包输出的结果。通常而言打包的结果是 bundle.js，bundle 的意思是捆绑，字如其名，打包的过程就像把各种资源捆在一起，也就是说大部分的资源 import 的资源都被放在了 bundle.js 里。

## loader

既然是把代码压在一起变成一个文件，那么简单把文件拼起来不就可以了？显然不行，因为 webpack 只能理解 JavaScript 和 JSON 文件，如果要把其他类型的文件比如说.xml,.csv 也打包进 bundle.js 那么就需要 loader。
webpack 也不能识别 CSS 文件，因此也需要配置 CSS loader。这就需要 npm 安装相应的依赖，然后在 webpack 中配置识别文件的逻辑和解析文件的方式。

```
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```
> rules就是说,webpack编译器每次碰到require()/import语句中被解析为'.txt'的路径时，在对他打包钱，先用'raw-loader'转换一下。

