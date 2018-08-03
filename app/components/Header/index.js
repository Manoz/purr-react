import React from 'react';

import pkg from '../../../package.json';
import Img from './Img';
import Code from './Code';
import Banner from './purr-react-banner.png';
import Baseline from './Baseline';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header" role="banner">
        <Img src={Banner} alt="purr-react banner" />
        <Baseline>Current version: <Code>{pkg.version}</Code></Baseline>
      </header>
    );
  }
}

export default Header;
