import React from 'react';
import { Link } from 'react-router-dom';

import A from 'components/A';
import Code from 'components/Code';
import StyledH2 from './StyledH2';
import Span from './Span';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { message: '🤖 Introduction' };
  }

  render() {
    return (
      <main className="site-main" role="main">
        <StyledH2>{this.state.message}</StyledH2>
        <p><Span secondary>purr</Span> <Span>react</Span> is a simple boilerplate
        to build web application using React and Webpack. It comes with some good
        modern technologies like webpack-dev-server, eslint, babel... .</p>

        <p>There are a lot of react boilerplates everywhere but I&apos;ve never been
        able to find one that isn&apos;t too <em>overkill</em>.<br/>
        <A href="" target="_blank">Create React App</A> is good for creating apps
        without build configuration but it completly hides the build config.
        You can <Code>eject</Code> the build config but you&apos;ll loose interest
        in using Create React App.</p>

        <p><Span secondary>purr</Span> <Span>react</Span> was designed to make
        the process of creating simple react apps easier without the need of redux
        or anything too overkill for a small project. You can extend the config as
        much as you want.</p>

        <p><Link to='/about'>Link to another page</Link> <Link to='/trololo'>| Test bad link</Link></p>
      </main>
    );
  }
}

export default HomePage;
