import React from 'react';
import { Link } from 'react-router-dom';

import H2 from 'components/H2';

const AboutPage = () => (
  <section className="page about">
    <H2>About Page</H2>
    <p>This is a sample page for test purpose.</p>
    <p><Link to='/'>Back to home</Link></p>
  </section>
);

export default AboutPage;
