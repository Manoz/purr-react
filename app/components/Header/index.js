import React from 'react';
import styled from 'styled-components';

import A from 'components/A';
import pkg from '../../../package.json';
import Img from './Img';
import Code from '../Code';
import Ribbon from './github-ribbon.png';
import Banner from './purr-react-banner.png';
import Baseline from './Baseline';

const StyledA = styled(A)`
  position: absolute;
  top: 0;
  right: 0;
  border-bottom: 0;

  &:hover { border-bottom: 0; }

  img { width: 90px; }
`;

const buildImg = 'https://travis-ci.com/Manoz/purr-react.svg?token=fV1pgutnXPjejYrLnsBw&branch=master';
const buildUrl = 'https://travis-ci.com/Manoz/purr-react';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header" role="banner">
        <StyledA
          href="https://github.com/Manoz/purr-react"
          class="github-corner"
          title="View source on Github"
          target="_blank"
          aria-label="View source on Github">
          <Img src={Ribbon} alt="Github Ribbon"/>
        </StyledA>

        <Img src={Banner} alt="purr-react banner" />
        <A href={buildUrl} target="_blank">
          <Img src={buildImg} alt="purr-react travis" />
        </A><br/>
        <Baseline>Current version: <Code>{pkg.version}</Code></Baseline>
      </header>
    );
  }
}

export default Header;
