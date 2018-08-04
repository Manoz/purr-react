const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const port = process.env.PORT || 4000;

module.exports = require('./webpack.config.base')({
  // Stop the process if there are any errors
  bail: true,

  mode: 'production',

  entry: [path.join(process.cwd(), 'app/app.js')],

  output: {
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[name].[chunkhash].chunk.js',
  },

  // Used only when we run `yarn start:prod`
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port,
    watchContentBase: false,
    hot: false,
    noInfo: false,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebookincubator/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: true,
      }),

      new OptimizeCSSAssetsPlugin({}),
    ],
    // Split vendor and commons
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },

  devtool: 'source-map',

  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },

  plugins: [
    // Minify the index.html file
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // Handle manifest.json and automatically generate favicons
    new WebpackPwaManifest({
      name: 'Purr React Boilerplate',
      short_name: 'Purr RB',
      description: 'My awesome project',
      background_color: '#ffffff',
      theme_color: '#cf4647',
      filename: 'manifest.json',
      fingerprints: false,
      inject: true,
      icons: [
        {
          src: path.resolve('public/images/icon-512x512.png'),
          sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512],
          destination: path.join('', 'images'),
        },
      ],
    }),

    // Generate the service worker that will precache our assets
    new SWPrecacheWebpackPlugin({
      // Skip the cache-busting if a URL is already hashed by webpack
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'scripts/service-worker.js',
      logger(message) {
        // if (message.indexOf('Total precache size is') === 0) {
        //   return;
        // }

        // This message obscures real errors so we ignore it.
        // https://github.com/facebookincubator/create-react-app/issues/2612
        if (message.indexOf('Skipping static resource') === 0) {
          return;
        }

        console.log(message);
      },
      minify: true,
      // Do not precache sourcemaps and asset manifest
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/, /assets\.json$/],
    }),

    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),

    new Visualizer(),
  ],
});
