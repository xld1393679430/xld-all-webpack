const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Merge = require("webpack-merge");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  mode: "development",
  entry: {
    client: path.join(__dirname, "./entry-client.js"),
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  plugins: [
    new WebpackManifestPlugin({ fileName: "manifest-client.json" }), //  方面后续在 `server.js` 中使用
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
