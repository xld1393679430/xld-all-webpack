const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
	// 主进程需要将target设置为electron-main
	target: "electron-main",
	entry: {
	  main: path.join(__dirname, "./index.js"),
	},
	externals: [nodeExternals()],
  })
