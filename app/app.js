/**
 * app.js
 *
 * This is the main entry file for the application
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { AppContainer } from 'react-hot-loader';
import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';

export const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (module.hot) {
  ReactDOM.render(
    <Root />,
    document.getElementById('app'),
  );
}
