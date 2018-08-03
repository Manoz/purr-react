/**
 * app.js
 *
 * This is the main entry file for the application
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import 'sanitize.css/sanitize.css';
import './styles';

// Import root app
import App from './containers/App';

// Load the favicons and the .htaccess file
import '!file-loader?name=images/[name].[ext]!../public/images/favicon.ico';
import '!file-loader?name=images/[name].[ext]!../public/images/safari-pinned-tab.svg';
import 'file-loader?name=.htaccess!../public/.htaccess';

export const Root = () => (
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContainer>
);

if (module.hot) {
  ReactDOM.render(
    <Root />,
    document.getElementById('app'),
  );
}
