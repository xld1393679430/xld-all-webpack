const loaderUtils = require("loader-utils");

// 异步的处理
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  console.log(this.query, options, "------2");
  const callback = this.async();

  setTimeout(() => {
    const result = source.replace("xld2", options.name); // 我的loader处理的事
    callback(null, result);
  }, 200);
};
