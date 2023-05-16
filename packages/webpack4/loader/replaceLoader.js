const loaderUtils = require("loader-utils");

// 同步的处理
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  console.log(this.query, options, "------1");
  const result = source.replace("xld1", options.name); // 我的loader处理的事

  this.callback(null, result);
};
