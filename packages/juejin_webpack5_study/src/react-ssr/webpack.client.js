const path = require("path");
const Merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  entry: {
    client: path.join(__dirname, "./entry-client.jsx"),
  },
  output: {
    filename: "index.js",
    publicPath: "/",
  },
  module: {
    rules: [{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }],
  },
  plugins: [
    new WebpackManifestPlugin({ fileName: "manifest-client.json" }), //  方面后续在 `server.js` 中使用
    new MiniCssExtractPlugin({
      filename: "index.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack App</title>
        </head>
        <body>
          <div id="root" />
        </body>
        </html>
      `,
    }),
  ],
});
