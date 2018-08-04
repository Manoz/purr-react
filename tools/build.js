/* eslint-disable object-curly-newline */
// @author: https://github.com/facebook/create-react-app
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const webpack = require('webpack');
const printBuildError = require('react-dev-utils/printBuildError');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');

const pkg = require('../package.json');
const config = require('../tasks/webpack.config.prod');
const { chalkSuccess, chalkWarning, chalkProcessing } = require('./helpers/chalkConfig');

const appBuild = path.resolve(process.cwd(), 'build');
const measureFileSizesBeforeBuild =
  FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const useYarn = fs.existsSync(path.resolve(process.cwd(), 'yarn.lock'));

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

console.log(chalkProcessing('\nGenerating minified bundle. This will take a moment...\n'));

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(appBuild)
  .then((previousFileSizes) => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(appBuild);

    // Start the webpack build
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalkWarning('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
        console.log(
          `\nSearch for the ${
            chalk.underline(chalkWarning('keywords'))
          } to learn more about each warning.`
        );
        console.log(
          `To ignore, add ${
            chalk.cyan('// eslint-disable-next-line')
          } to the line before.\n`
        );
      } else {
        console.log(chalkSuccess('\nCompiled successfully.\n'));
      }

      console.log('File sizes after gzip:\n');
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      );
      console.log();

      // eslint-disable-next-line global-require
      const appPackage = require(path.resolve(process.cwd(), 'package.json'));
      const publicUrl = pkg.homepage;
      const publicPath = config.output.publicPath;
      const buildFolder = path.relative(process.cwd(), appBuild);
      printHostingInstructions(
        appPackage,
        publicUrl,
        publicPath,
        buildFolder,
        useYarn
      );
    },
    (err) => {
      console.log(chalk.red('Failed to compile.\n'));
      printBuildError(err);
      process.exit(1);
    }
  );

function build(previousFileSizes) {
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      // If a fatal error occurred, stop here
      if (err) {
        return reject(err);
      }

      const messages = formatWebpackMessages(stats.toJson({}, true));

      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }

      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalkWarning(
            `\nTreating warnings as errors because process.env.CI = true.\n
              'Most CI servers set it automatically.\n`
          )
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
}
