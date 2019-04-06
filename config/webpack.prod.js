// const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      CORS_URL: JSON.stringify('https://cors-anywhere.herokuapp.com'),
      FETCH_URL: JSON.stringify('https://heroku-scrivener.herokuapp.com'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      // filename: '[name].[hash].css',
      // chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './static/*',
        to: '.',
        toType: 'dir',
      },
    ], {}),
  ],
});
