const chalk = require('chalk');
const prompt = require('prompt');
const rimraf = require('rimraf');
const replace = require('replace');

console.log('\nDependencies installed. Starting the setup script...\n');

console.log(chalk.cyan('*******************************'));
console.log(chalk.cyan('*    Welcome to Purr React    *'));
console.log(chalk.cyan('*******************************'));

console.log(`${chalk.red('\nWARNING:')} you're about to delete the local git repository...`);

prompt.start();

prompt.get([{ name: 'deleteGit', description: 'Delete the Git repository? [Y/n]' }], (err, result) => {
  const deleteGit = result.deleteGit.toUpperCase();

  if (err) {
    process.exit(1);
  }

  /**
   * Update the app by removing the npm setup
   * scripts and the JS setup script
   */
  function updateApp() {
    console.log(chalk.cyan('\nCleaning package.json scripts'));

    // Remove setup scripts from package.json
    replace({
      regex: /\s*"setup":.*,/,
      replacement: '',
      paths: ['package.json'],
      recursive: false,
      silent: true,
    });

    console.log(chalk.green('package.json scripts cleaned'));

    // Remove setup script
    console.log(chalk.cyan('\nRemoving the setup scripts...'));

    rimraf('./tools/setup.js', (error) => {
      if (error) throw new Error(error);
    });
    console.log(chalk.green('Well done, setup complete!\n'));
  }

  // If we don't want to remove the git repository, just start
  // the app update process
  if (deleteGit.match(/^N.*/)) {
    updateApp();
  } else {
    // remove the git repository
    rimraf('.git', (error) => {
      if (error) throw new Error(error);
      console.log(chalk.green('Git repository removed.\n'));

      // Start the app update process
      updateApp();
    });
  }
});
