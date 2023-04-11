const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 这里的index，print就是对应着output里的[name]
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [new HtmlWebpackPlugin({ title: '管理输出' })],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
