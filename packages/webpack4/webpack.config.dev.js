const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

// devtool development 环境最佳选择：cheap-module-eval-source-map 打包后提示全， 打包速度块
// devtool production 环境最佳选择：cheap-module-source-map

const config = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", // 默认development环境是开启sourceMap的 关闭是‘none’
  output: {
    filename: "[name]_[hash].js",
    chunkFilename: "[name]_[hash].chunk.js",
    publicPath: "/",
    // publicPath: 'http://cdn.com', // 打包时自动在文件路径前加上该path
    path: path.resolve(__dirname, "dist"),
    library: "xxx", //  打包库文件的配置 -> 文件引用后增加一个全局变量名为 ’xxx‘ 的属性
    libraryTarget: "umd", // 打包库文件的配置 -> 支持打包后的文件可以通过ESModule AMDModule 或者script标签方式引入
  },
  devServer: {
    contentBase: "./dist", // server启动的文件路径
    open: false, // 自动打开浏览器
    port: 8090, // 端口 默认8080
    hot: true, // 启动热更新
    // hotOnly: true, // hot没有生效也不自动刷新
    historyApiFallback: true, // 配置单页面路由
    proxy: {
      "/react/api": {
        // 这是请求接口中要替换的标识
        target: "http://www.dell-lee.com", // 被替换的目标地址，
        pathRewrite: {
          "header.json": "demo.json", // 把请求的http://www.dell-lee.com/react/api/header.json 替换成 http://www.dell-lee.com/react/api/demo.json
        },
        secure: true, // 若代理的地址是https协议，需要配置这个属性
        changeOrigin: true, // 加了这个属性，那后端收到的请求头中的host是目标地址 target
      },
    }, // 配置代理（只在本地开发有效，上线无效）
  },
  module: {
    rules: [
      {
        test: /\.css$/,
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
};

module.exports = merge(baseConfig, config);
