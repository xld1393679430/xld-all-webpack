const path = require("path");
const Merge = require("webpack-merge");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  entry: {
    server: path.join(__dirname, "./entry-server.js")
  },
  target: "node",
  output: {
    libraryTarget: "commonjs2", //打包后的结果会在 node 环境使用,因此此处将模块化语句转译为 commonjs 形式
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({ fileName: "manifest-server.json" }),
  ],
});
