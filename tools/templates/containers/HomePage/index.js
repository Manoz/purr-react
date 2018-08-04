import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { message: '🤖 Introduction' };
  }

  render() {
    return (
      <div>
        <p>This is your home page</p>
      </div>
    );
  }
}

export default HomePage;
