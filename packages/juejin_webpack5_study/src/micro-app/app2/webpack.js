const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devtool: false,
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    port: 8082,
    hot: true,
    open: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        RemoteApp: "app1@http://localhost:8081/dist/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin(),
  ],
};
