import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyles, SanitizeCss } from 'styles';

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
        <SanitizeCss />
        <GlobalStyles />
        <Helmet
          titleTemplate="%s - Purr React"
          defaultTitle="Purr React"
        >
          <meta name="description" content="A simple yet powerfull react boilerplate" />
        </Helmet>
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
