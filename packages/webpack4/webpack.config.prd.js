const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssets = require("optimize-css-assets-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const baseConfig = require("./webpack.config.base");

// devtool development 环境最佳选择：cheap-module-eval-source-map 打包后提示全， 打包速度块
// devtool production 环境最佳选择：cheap-module-source-map

const config = {
  mode: "production",
  devtool: "cheap-module-source-map", // 默认development环境是开启sourceMap的 关闭是‘none’
  output: {
    filename: "[name]_[hash].js", // 增加hash 防止缓存
    chunkFilename: "[name]_[hash].chunk.js",
    publicPath: "./", // 这里注意prd环境的publicPath
    // publicPath: 'http://cdn.com', // 打包时自动在文件路径前加上该path
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              // modules: true, // 开启css模块化打包，可以防止不同文件的css相互影响
            },
          }, // 处理css之间的依赖关系
          "postcss-loader", // 自动添加css不同浏览器前缀,
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssets({}), // 启用css压缩
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].chunk.css",
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }), // 配置serviceWorker 开启PWA
  ],
};

module.exports = merge(baseConfig, config);
