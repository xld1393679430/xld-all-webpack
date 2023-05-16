const path = require("path");
const Merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  entry: {
    server: path.join(__dirname, "./entry-server.jsx"),
  },
  target: "node",
  output: {
    libraryTarget: "commonjs2", //打包后的结果会在 node 环境使用,因此此处将模块化语句转译为 commonjs 形式
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: path.join(__dirname, "./loader/removeCssLoader"),
      },
    ],
  },
});
