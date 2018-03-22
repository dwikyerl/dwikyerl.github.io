const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const common = require("./webpack.common");

const html = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader"
    }
  ]
};

const styles = {
  test: /\.s?css$/,
  use: ["style-loader", "css-loader", "sass-loader"]
};

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    historyApiFallback: true
  },
  module: {
    rules: [html, styles]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
});
