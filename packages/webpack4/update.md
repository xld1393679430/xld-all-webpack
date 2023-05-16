> ### 1 提交记录
> 实现css 自动添加各浏览器前缀
> 1. 配置postcss-loader
> 2. 配置postcss.config.js
> 3. 配置package.json的browserslist

---

> ### 2 提交记录
> 开启css模块化打包
> 1. 配置css-loader 的 modules: true
> 2. 使用import xxx from 'xxx' 方式

---

> ### 3 提交记录
> 处理iconfont字体文件
> 1. 配置file-loader
> 2. 下载iconfont字体
> 3. 注意 需要删除css模块化打包配置

---

> ### 4 提交记录
> 配置html-webpack-plugin

---

> ### 5 提交记录
> 配置clean-webpack-plugin

---

> ### 6 提交记录
> 配置output publicPath 打包时自动在文件路径前加上该path

---

> ### 7 提交记录
> 配置devtool: sourceMap

---

> ### 8 提交记录
> 配置devServer

---

> ### 9 提交记录
> 使用expres启动一个服务 类似webpack-dev-server

---

> ### 10 提交记录
> 配置热更新 暂只支持css 热更新

---

> ### 11 提交记录
> 配置babel/polyfill 解析es6语法成es5语法
> 缺点 polyfill会污染全局环境

---

> ### 12 提交记录
> 配置@babel/plugin-transform-runtime 解析es6语法成es5语法 推荐使用这种而不是babel/polyfill

---

> ### 13 提交记录
> 配置打包react代码

---

> ### 14 提交记录
> 去掉打包的测试文件

---

> ### 15 提交记录
> 配置Tree shaking

---

> ### 16 提交记录
> merge webpack配置

---

> ### 17 提交记录
> 通过配置optimization[splitChunks][chunks]: all 方式是实现同步代码自动分割  减小打包体积

---

> ### 18 提交记录
> 通过配置 "dynamic-import-webpack" 实现异步代码分割  减小打包体积

---

> ### 19 提交记录
> 使用官方的plugin实现异步代码分割并且配置webpackChunkName 

---

> ### 20 提交记录
> no submit

---

> ### 21 提交记录
> 整理项目结构

---

> ### 21 提交记录
> webpack Prefetch & Preload

---

> ### 22 提交记录
> 配置css 代码切割和css压缩

---

> ### 23 提交记录
> 增加文件hash 解决浏览器存在的缓存问题

---

> ### 24 提交记录
> 实现让webpack自动引入第三方依赖

---

> ### 25 提交记录
> no submit

---

> ### 26 提交记录
> no submit

---

> ### 27 提交记录
> 配置打包库文件

---

> ### 28 提交记录
> 配置serviceWorker 开启PWA

---

> ### 29 提交记录
> 配置解析ts文件

---

> ### 30 提交记录
> 配置webpackDevServer 请求转发

---

> ### 31 提交记录
> 配置单页面路由

---

> ### 32 提交记录
> 配置alias 更方便引入文件 & 自动引入jsx/tsx类型的文件（不需要写后缀名）

---

> ### 33 提交记录
> 配置多页面入口

---

> ### 34 提交记录
> 编写一个loader并使用