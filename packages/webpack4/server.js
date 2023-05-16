// 类似webpack-dev-server启动一个expres服务
// 没有webpack-dev-server智能

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleWare = require("webpack-dev-middleware");
const config = require("./webpack.config");
const compiler = webpack(config);

const app = express();

app.use(
  webpackDevMiddleWare(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(8090, () => {
  console.log("server is 8090");
});
