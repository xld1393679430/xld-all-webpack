class CopyrightWebpackPlugin {
  constructor(options) {
    console.log("我的插件被使用了", options);
  }

  apply(compiler) {
    // 异步生成copy-right.txt文件
    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, callback) => {
        compilation.assets["copy-right.txt"] = {
          source: function () {
            return "copy-right by xld";
          },
          size: function () {
            return 17;
          },
        };
        callback();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
