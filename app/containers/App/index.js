import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default withRouter(App);
