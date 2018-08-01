import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <section className="page home">
    <h1>404 page not found</h1>
    <p>
      <Link to='/'>Back to home</Link>
    </p>
  </section>
);

export default HomePage;
