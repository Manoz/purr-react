// This script cleans the demo app
const shell = require('shelljs');

process.stdin.setEncoding('utf8');

// Test if the app is deleted already (just in case)
if (!shell.test('-e', 'tools/templates')) {
  shell.echo('The demo app is deleted already.');
  shell.exit(1);
}

process.stdout.write('Demo app cleanup started...');

// Cleanup demo content
shell.rm('-rf', 'public/index.html');
shell.rm('-rf', 'public/images');
shell.rm('-rf', 'app/styles.js');
shell.rm('-rf', 'app/components');
shell.rm('-rf', 'app/containers');

// Replace the files in the root src/ folder
shell.cp('tools/templates/index.html', 'public/index.html');
shell.mv('tools/templates/images', 'public/images');
shell.cp('tools/templates/styles.js', 'app/styles.js');
shell.mv('tools/templates/containers', 'app/containers');

// Remove the templates folder
shell.rm('-rf', 'tools/templates');

shell.echo('\nDemo app removed. Happy coding!');
