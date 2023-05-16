const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyrightWebpackPlugin = require('./plugin/copyright-webpack-plugin'); // 自己写的pligun
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.js",
    vue: "./src/vue.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 引入jsx/tex类型的文件不用写后缀名  自动引入
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  optimization: {
    usedExports: true, // Tree shaking 只支持ES module 只打包使用到的模块 生产环境会自动开启
    splitChunks: {
      chunks: "all", // all/async
    }, // 代码分割
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: path.resolve(__dirname, "./loader", "replaceLoader.js"),
            options: {
              name: "replaceLoader",
            },
          },
          {
            loader: path.resolve(__dirname, "./loader", "replaceLoaderAsync.js"),
            options: {
              name: "replaceLoaderAsync",
            },
          },
        ],
      }, // 配置babel解析es6成es5
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      }, // 配置ts-loader 解析ts文件
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "src/vue.html",
      filename: "vue.html",
    }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new webpack.ProvidePlugin({
      $: "jquery", // 页面如果使用了$， 就会自动帮忙引入jquery
      _join: ["lodash", "join"], // 自动引入lodash 并且调用lodash.join方法
    }),
    new CopyrightWebpackPlugin({
      name: 'xld-pligun'
    })
  ],
};
