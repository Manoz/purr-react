const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = require('./webpack.config.base')({
  mode: 'development',

  // Add hot reloading in development
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },

  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
    }),

    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false, // show a warning when there is a circular dependency
    }),

    new FriendlyErrorsPlugin(),
  ],
});
