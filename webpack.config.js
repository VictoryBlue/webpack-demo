const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 仅限于开发环境
  mode: 'development',
  // 这里的index，print就是对应着output里的[name]
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },

  // 如果把多个js压成一份变成bundlejs，那么如果出现了问题，我们就很难定位到具体是哪一个js文件出了问题。javascript提供了sourceMap功能，使用devtool进行控制
  // devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Development' })],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
