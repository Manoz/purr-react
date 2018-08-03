import React from 'react';
import styled from 'styled-components';

import A from 'components/A';
import Img from './Img';
import P from './P';
import coffee from './coffee.svg';

const Wrapper = styled.footer`
  padding: 2em 0;
`;

function Footer() {
  return (
    <Wrapper>
      <P className="small">
        &copy; 2018 Kévin Legrand |&nbsp;
        This project is licensed under the MIT license&nbsp;
        <Img className="coffee" src={coffee} alt="coffee icon"/> Fueled with&nbsp;
        <A href="https://en.wikipedia.org/wiki/Caffeine" title="Caffeine" target="_blank">
        C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></A>
      </P>
    </Wrapper>
  );
}

export default Footer;
