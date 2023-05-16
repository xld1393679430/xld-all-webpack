const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: `http://localhost:8081/dist`,
  },
  devServer: {
    port: 8081,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    }),
    new ModuleFederationPlugin({
      name: "app1",
      filename: `remoteEntry.js`,
      exposes: {
        "./utils": path.resolve(__dirname, "./utils"),
        "./foo": path.resolve(__dirname, "./foo"),
      },
    }),
  ],
};
