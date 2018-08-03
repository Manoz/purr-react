import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import NotFoundPage from '../NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
