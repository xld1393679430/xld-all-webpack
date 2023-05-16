const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

// devtool development 环境最佳选择：cheap-module-eval-source-map 打包后提示全， 打包速度块
// devtool production 环境最佳选择：cheap-module-source-map

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", // 默认development环境是开启sourceMap的 关闭是‘none’
  devServer: {
    contentBase: "./dist", // server启动的文件路径
    open: true, // 自动打开浏览器
    port: 8090, // 端口 默认8080
    hot: true, // 启动热更新
    hotOnly: true, // hot没有生效也不自动刷新
  },
  entry: {
    main: "./src/index.js",
    // test: "./src/index.js",
  },
  output: {
    filename: "[name]_[hash].js",
    publicPath: "/",
    // publicPath: 'http://cdn.com', // 打包时自动在文件路径前加上该path
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // {
      //     test: /\.(jpeg|jpg|png)$/,
      //     use: {
      //         loader: 'file-loader',
      //         options: {
      //           name: '[name].[ext]', // 打包的文件名
      //           outputPath: 'images/', // 打包后文件路径
      //         }
      //     },
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }, // 配置babel解析es6成es5
      {
        test: /\.(jpeg|jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]", // 打包的文件名
            outputPath: "images/", // 将文件打包到哪里
            publicPath: "images/",
            limit: 1024 * 10, // 小于10KB打包成base64
          },
        },
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: {
          loader: "file-loader",
        },
      }, // 处理iconfont字体文件
      {
        test: /\.(c|sc)ss$/,
        use: [
          "style-loader", // 挂在到head中的style标签中
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
  ],
  optimization: {
    usedExports: true, // Tree shaking 只支持ES module 只打包使用到的模块 生产环境会自动开启
  },
};
