const webpack = require('webpack');
const config = require('../tasks/webpack.config.prod');
const { chalkError, chalkSuccess, chalkWarning, chalkProcessing } = require('./helpers/chalkConfig');

console.log(chalkProcessing('Generating minified bundle. This will take a moment...'));

webpack(config).run((error, stats) => {
  // If a fatal error occurred, stop here
  if (error) {
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Woops, Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(chalkSuccess('YEAH! Your app is compiled in production mode in /build. Congratz 🚀'));

  return 0;
});
