const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";

const getEntry = () => {
  const index = process.argv.findIndex((arg) => arg === "--customEntry");
  if (index > 0) {
    return process.argv[index + 1];
  }
  throw new Error("未找到entry路径");
};

const getStyleLoader = () => (isProd ? MiniCssExtractPlugin.loader : "style-loader");

module.exports = {
  isProd,
  getEntry,
  getStyleLoader,
};
