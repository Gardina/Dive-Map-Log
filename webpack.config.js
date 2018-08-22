const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/
      },
      {
        use:  [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ],
        test: /\.html$/
      }
    ]
  },
  plugins: [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
  })
  ]
}
