/**
 * app.js
 *
 * This is the main entry file for the application
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Import our custom modernizr build
import 'modernizr-custom';
// Import root app
import App from 'containers/App';
// Import the service worker configuration
import registerServiceWorker from './registerServiceWorker';

// Load the favicons and the .htaccess file
import '!file-loader?name=images/[name].[ext]!../public/images/favicon.ico';
import '!file-loader?name=images/[name].[ext]!../public/images/safari-pinned-tab.svg';
import 'file-loader?name=.htaccess!../public/.htaccess';

const mountApp = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  mountApp,
);

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      mountApp,
    );
  });
}

registerServiceWorker();
