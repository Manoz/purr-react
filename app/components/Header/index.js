import React from 'react';

import Img from '../Img';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header" role="banner">
        <Img src="https://i.imgur.com/UjW1zsq.png" alt="Main banner"/>
      </header>
    );
  }
}

export default Header;
