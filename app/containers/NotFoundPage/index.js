import React from 'react';
import { Link } from 'react-router-dom';

import H1 from 'components/H1';

const HomePage = () => (
  <section className="page home">
    <H1>404 page not found</H1>
    <p>
      <Link to='/'>Back to home</Link>
    </p>
  </section>
);

export default HomePage;
