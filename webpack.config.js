const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { example: "./src/index.js" },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Example",
      chunks: ["example"],
    }),
  ],
};
