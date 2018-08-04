<img src="https://i.imgur.com/PYiIuXL.png" alt="purr react banner"/>
<br />
<div align="center">

[![version]][version] [![licenses][licenses]][licenses-url]

[![tests][tests]][tests-url]
[![builds][builds]][builds-url]
[![deps][deps]][deps-url]
[![deps-dev][deps-dev]][deps-dev-url]
[![cover][cover]][cover-url]

Demo app: [https://peaceful-ritchie-9a939b.netlify.com](https://peaceful-ritchie-9a939b.netlify.com/)
</div>

## 🤖 Introduction

**purr react** is a simple boilerplate to build web application using React and Webpack. It comes with some good modern technologies like webpack-dev-server, eslint, babel... .

There are a lot of react boilerplates everywhere but I've never been able to find one that isn't too *overkill*. [Create React App](https://github.com/facebook/create-react-app) is good for creating apps without build configuration but it completly hides the build config. You can `eject` the build config but you'll loose interest in using Create React App.

**purr-react** was designed to make the process of creating simple react apps easier without the need of redux or anything too overkill for a small project. You can extend the config as much as you want.

## 🚎 Features

1. **Easy as pie** - run one of the easiest React boilerplate without much knowledge
2. **Instant feedback** - hot reload your browser each time you save a file
3. **Automated production build** - `yarn build` or `npm run build` to build your app.
4. **Next gen JS** - want to write ES8? Do it! Webpack will make it es5 ready for you.
5. **Shiny styles** - use ES6 and CSS to style your app with styled-components 💅 It will also improve performances by rendering only the styles that are on the pages.
6. **React routing** - `react-router-dom` will be your best friend to create your awesome `/about` page, thanks to routing.
7. **Improved cache** - your external project dependencies will be cached and service workers ready.
8. **Continuous Integration** - AppVeyor and TravisCI are ready to catch problems and will test everything on Unix and Windows.

This app also uses some good technologies:

* Babel
* ESlint (with the badass airbnb config)
* Jest
* stylelint
* npm scripts
* Webpack

## ☕️ Quick start

1. Clone this repo using `git clone https://github.com/Manoz/purr-react.git` and move to the directory: `cd purr-react`
2. Run `yarn setup` or `npm run setup` to start the setup process and install dependencies
3. Run `yarn start` or `npm run start` to see the demo app at *`http://localhost:3000`*
4. Run `yarn remove-demo` or `npm run remove-demo` to delete the demo app

If you don't want to use the setup script you can run `yarn install` or `npm install` after cloning the repo and keep everything in place.

Here is some additional commands you can also use:

* `yarn build` or `npm run build`: to build the production app inside the `*./build*` folder.
* `yarn test` or `npm run test` to test the built app

More information about the npm scripts can be found [here](https://github.com/Manoz/purr-react/tree/master/docs#npm-scripts).

## 📖 Documentation

The documentation for this project is not perfect for now but I'll add more content in the future and maybe a Wiki.

You can learn more about purr-react [here](./docs/README.md).

# License
Released under the [MIT](./LICENSE) license.

[tests]: https://travis-ci.org/Manoz/purr-react.svg?branch=master
[tests-url]: https://travis-ci.org/Manoz/purr-react

[builds]: https://ci.appveyor.com/api/projects/status/8o6pitv3s6disonb?svg=true
[builds-url]: https://ci.appveyor.com/project/Manoz/purr-react

[deps]: https://david-dm.org/manoz/purr-react/status.svg
[deps-url]: https://david-dm.org/manoz/purr-react

[deps-dev]: https://david-dm.org/manoz/purr-react/dev-status.svg
[deps-dev-url]: https://david-dm.org/manoz/purr-react?type=dev

[cover]: https://coveralls.io/repos/github/Manoz/purr-react/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/Manoz/purr-react?branch=master

[licenses-url]: https://github.com/Manoz/purr-react/blob/master/LICENSE
[licenses]: https://img.shields.io/badge/license-MIT-blue.svg

[version]: https://img.shields.io/badge/version-0.1.0-%23d85a94.svg