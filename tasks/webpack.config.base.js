/**
 * Main Webpack Configuration
 * This file is shared between our dev and prod envs
 */
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = options => ({
  mode: options.mode,

  entry: options.entry,

  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    options.output,
  ),

  optimization: options.optimization,
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {},

  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },

  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    new WebpackBar(),

    new AssetsPlugin({
      path: path.resolve(process.cwd(), 'build'),
      filename: 'assets.json',
    }),

    new MiniCssExtractPlugin({
      filename: isDev ? 'styles/[name].css' : 'styles/[name].[hash].min.css',
      chunkFilename: isDev ? 'styles/[id].css' : 'styles/[id].[hash].css',
    }),
  ]),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // creates style nodes from JS strings
          // fallback to style-loader in dev env
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          }, {
            // translates CSS with JavaScript
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer'), // eslint-disable-line
              ],
              sourceMap: false,
            },
          }, {
            // compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'app', 'scss')],
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            // Load all SVGs as base64 encoding if they are smaller than 10 kb
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            // Load all images as base64 encoding if they are smaller than 10 kb
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              name: 'images/[name].[hash].[ext]',
            },
          },
          {
            // Optimize all images
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
});
