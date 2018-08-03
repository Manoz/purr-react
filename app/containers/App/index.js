import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import NotFoundPage from '../NotFoundPage';

const Wrapper = styled.div`
  max-width: calc(960px + 16px * 2);
  margin: 0 auto;
  display: flex;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}
