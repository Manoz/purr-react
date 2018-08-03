import React from 'react';
import { Link } from 'react-router-dom';

import A from 'components/A';
import H2 from 'components/H2';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { message: 'Hello, World!' };
  }

  render() {
    return (
      <main className="site-main" role="main">
        <H2>{this.state.message}</H2>
        <p>Pellentesque <A href="http://google.com" target="_blank">habitant</A> morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
        eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

        <p><Link to='/about'>Test 404</Link></p>
      </main>
    );
  }
}

export default HomePage;
