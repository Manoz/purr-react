# Documentation

## Table of Contents

- About this project
  - [Why I've created it](#why-ive-created-it)
  - [Folder structure](#folder-structure)
  - [About the setup script](#about-the-setup-script)
  - [How to clean the boilerplate?](#how-to-clean-the-boilerplate)
  - [What other project inspired me](#what-other-project-inspired-me)
- Technologies
  - [npm scripts](#npm-scripts)
  - [Deployment](#deployment)
  - [Why I don't want to use Gulp or Grunt?](#why-i-dont-want-to-use-gulp-or-grunt)

---

## Why I've created it

I have been looking for a simple react boilerplate for a long time. A boilerplate I can easily adapt and modify to my needs.
Most of the ones I tested didn't suits me. Either they were a little too *overkill* or they were much too simple and were no longer updated.

I decided to create my own react boilerplate using everything I would have liked to see in a project like this. The goal is to make it as simple as possible so that everyone can use it whether you are a beginner or not.

This project is also used as an inspiration for ideas you might want to integrate into your development environment.

## Folder structure

```bash
├── .github                             # Used only with the git repo. Contains templates
│   ├── ISSUE_TEMPLATE                  # Contains the Github templates when opening an issue
│   ├── ISSUE_TEMPLATE.md               # Global infos about issues
│   └── PULL_REQUEST_TEMPLATE.md        # PR template
├── app                                 # Main app source code
│   ├── components                      # Contains the react app components (buttons, header,...)
│   ├── containers                      # Contains the react app containers (mostly your pages)
│   │   ├── app.js                      # Entry point for the app used by Webpack
│   │   ├── modernizr-custom.js         # Custom modernizr build. Build each time your start the app
│   │   ├── registerServiceWorker.js    # service worker script to serve assets from local cache
│   │   └── styles.js                   # Global styles built with styled-components
├── build                               # Folder where the built app is placed. Use it in production
├── docs                                # Contains all the project documentation
├── public                              # Contains the public files (assets and index.html)
├── tasks                               # Contains Webpack config for dev and prod env
├── test                                # Test files used by Jest to test your app
├── tools                               # Node scripts that run build related tools
│   ├── helpers                         # Utility scripts
│   │   ├── buildMessage.js             # Display a message when production build starts
│   │   ├── chalkConfig.js              # Global config for chalk (adds color to your console)
│   │   ├── env                         # Node environment configuration
│   │   ├── modernizr-config.json       # Modernizr custom build configuration
│   │   ├── nodeVersionCheck.js         # Check for your node version
│   │   └── startMessage.js             # Display a message when development build starts
│   ├── templates                       # Contains the "no demo" template files (used when you want to remove the demo app)
│   ├── assetsModule.js                 # Fix for jest handling static assets like imported images
│   ├── build.js                        # Runs the production build
│   ├── cleanDemo.js                    # Script used to clean the demo app
│   ├── cssModule.js                    # Fix for jest handling css
│   ├── enzymeAdapter.js                # Tweak enzyme to work with react
│   └── setup.js                        # Script used to setup the app (install dependencies, remove git if wanted,...)
├── .babelrc                            # Babel rules
├── .editorconfig                       # Configures editor rules. You should install an "editorconfig" plugin on your editor.
├── .eslintignore                       # Tells Eslint which files or folders to ignore
├── .eslintrc                           # Global Eslint configuration
├── .gitattributes                      # Handle line endings with git
├── .gitignore                          # Tells git which files or folders to ignore
├── .npmrc                              # npmrc for Netlify
├── .stylelintrc                        # Global stylelint configuration
├── .travis.yml                         # Travis CI configuration
├── appveyor.yml                        # Appveyor CI configuration (useful for Windows and Linux build)
├── CONTRIBUTING.md                     # Guidelines if you want to contribute to this project
├── LICENSE                             # The project license (MIT)
├── package.json                        # Package configuration and npm scripts
├── README.md                           # Main README file
└── yarn.lock                           # File created by Yarn to keep an eye on the depedencies
```

## NPM Scripts

Here's some information on what major script in `package.json` does.

| **Script**        | **Description**                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| preinstall        | Runs automatically before `yarn install` to check your node version                                                  |
| prestart          | Runs automatically before start to display a message.                                                                |
| start             | Starts the dev webserver and opens the app in your default browser.                                                  |
| start:prod        | Runs tests, builds the app and opens the production app in your default browser                                      |
| setup             | Install dependencies and start the setup script                                                                      |
| lint              | Lint CSS and JS for the production build.                                                                            |
| lint:eslint:fix   | Utility command to automatically fix (if possible) the Eslint issues                                                 |
| modernizr:build   | Builds the Modernizr script using our custom configuration. Runs automatically.                                      |
| remove-demo       | Removes the demo app                                                                                                 |
| prebuild          | Runs automatically before the build script. Simply remove the ./build folder for now                                 |
| build             | Bundles everything using webpack and writes it to `./build`.                                                         |
| pretest           | Runs automatically before the test script. Remove the `./coverage` folder and lint the code                          |
| test              | Runs tests using Jest. No watch for now, I'll add it later.                                                          |
| test:watch        | Runs tests and watch the files                                                                                       |
| test:cover        | Runs tests and generates a HTML coverage report inside the `./coverage` folder                                       |

Unfortunately, I can't comment scripts in package.json so feel free to read the scripts and ask if there's something you don't understand or something I could improve.

## About the setup script

The setup script is used to make it easier for you to own the starter-kit.
It removes the original Git Repository, the npm setup script in your `package.json` and the JS script in the `./tools` folder.

It's perfect if you want to run your app as fast as possible.

If you don't want to use the setup script you can run `yarn install` or `npm install` after cloning the repo and keep everything in place.

## How to clean the boilerplate?

Simply use `npm run remove-demo` or `yarn remove-demo`. The script will remove all the demo content and replace everything with default empty content.

## What other project inspired me

This project is build using an old boilerplate I had.

I see projects on Github every day and I often look at how they are built. It helps me learn more about different technologies.

Three projects have greatly inspired me to improve this boilerplate:
  - [create-react-app](https://github.com/facebook/create-react-app)
  - [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)
  - [react-slingshot](https://github.com/coryhouse/react-slingshot) by the awesome [Cory House](https://github.com/coryhouse).

Feel free to take a look at these projects. They're insane and the mainteners are awesome <3

## Deployment

Use `yarn build` or `npm run build` to build the app inside the `./build` folder.

If you don't have a `homepage` field in your `package.json`, the project will be built assuming it is hosted at the server root.
You can control this by adding the field in your package.json file: `"homepage" : "http://your-website.com",`

## Why I don't want to use Gulp or Grunt?

At the beginning of this project I wanted to create a simple and powerfull boilerplate that use Gulp AND Webpack.

After some tests and research I've decided to remove Gulp since it creates more problems than it solves. [Read more here](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)

---

Thanks a lot for taking the time to read this documentation. I always try to improve it. Feel free to open an issue to discuss and propose improvements for it ❤️