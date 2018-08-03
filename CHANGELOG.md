# Changelog

## 0.0.5

More content added to the default app with more tests.

## 0.0.4

The build was broken for some reason. No error, no fail with webpack or Jest but it didn't work. I resolved this by changing the way I render the app.

- Modified
  - Tweaked `./app/app.js` so the React render works well now
  - Moved `<BrowserRouter>` from `./app/app.js` to the app container

## 0.0.3

Again, massive improvement o/

- Added:
  - styled-components 💅
  - StyleLint (with styled-components dependencies)
  - webpack-visualizer: need to check this. The build is way to heavy
  - More and more app content
  - More tests
- Removed
  - sass-lint (we use stylelint now)
  - sass stuff in webpack config
- Modified
  - Pinned dependencies: just in case we break the building process by upgrading. I'll find a better way to handle this later.
  - Tweaked Jest and CI.

## 0.0.2

Lot of refacto with this update. Good bye Browsersync, hello webpack-dev-server. I've also added Jest with a simple test script for now.

- Added:
  - Jest and a simple test
  - node build scripts
  - node lint scripts
  - webpack-dev-server
- Removed
  - Browsersync
- Modified
  - better project introduction in readme.md

## 0.0.1

Here's the starting point. This is basically the first commit. Yup o/
