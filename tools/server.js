// Configure the Web server with Browsersync and hot reloading

const webpack = require('webpack');
const browserSync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const webpackConfig = require('../tasks/webpack.config.dev');
const bundler = webpack(webpackConfig);

const port = process.env.PORT || 3000;

// Run Browsersync
browserSync({
  logPrefix: 'PURR',
  port,
  ui: {
    port: port + 1,
  },
  server: {
    baseDir: 'app',

    middleware: [
      historyApiFallback(),

      webpackDevMiddleware(bundler, {
        // Dev middleware can't access config, so we provide publicPath
        publicPath: '/',

        // Suppress noisy webpack output so only errors are displayed to the console.
        noInfo: true,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false,
        },
      }),
      webpackHotMiddleware(bundler),
    ],
  },

  files: [
    'public/*.html',
  ],
});
