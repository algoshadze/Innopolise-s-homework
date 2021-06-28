const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path')
module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },
  output:{
      path:path.resolve(__dirname,'dist'),
      filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
