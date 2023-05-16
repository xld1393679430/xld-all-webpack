const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./index.js"),
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PWA",
      template: path.resolve(__dirname, "./index.html"),
    }),
    new WebpackPwaManifest({
      name: "My Progressive Web App",
      short_name: "MyPWA",
      description: "My awesome Progressive Web App!",
      crossorigin: "use-credentials", // can be null, use-credentials or anonymous
      publicPath: "/",
      icons: [
        {
          // 桌面图标，注意这里只支持 PNG、JPG、BMP 格式
          src: path.resolve(__dirname, "./assets/pwa.png"),
          sizes: [150],
        },
      ],
    }),
    new GenerateSW({
      clientsClaim: true, // 强制等待中的 Service Worker 被激活
      skipWaiting: true, // Service Worker 被激活后使其立即获得页面控制权
    }),
  ],
};
