// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: "./dist",
    port: 8080,
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: ["src/**/*"],
  },
  devtool: "inline-source-map",
});
