const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { example: "./src/index.js" },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Example",
      chunks: ["example"],
    }),
  ],
};
