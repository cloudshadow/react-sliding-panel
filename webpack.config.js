const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: [
    // must be first entry to properly set public path
    path.resolve(__dirname, './src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    library: 'react-sliding-panel',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  externals: [
    {
      react: 'react'
    }
  ],
  
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/},
      {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader','css-loader', 'sass-loader']}
    ]
  }
};