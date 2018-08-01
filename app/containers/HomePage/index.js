import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { message: 'Hello, World!' };
  }

  render() {
    return (
      <div>
        <Header />
        <main className="site-main" role="main">
          <h1>{this.state.message}</h1>
          <p>
            <Link to='/about'>Test 404</Link>
          </p>
        </main>
      </div>
    );
  }
}

export default HomePage;
