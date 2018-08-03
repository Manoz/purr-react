import styled from 'styled-components';

const H1 = styled.h1`
  margin-top: 1.2em;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.1073;
    letter-spacing: .012em;
  }

  @media (min-width: 992px) {
    font-size: 34px;
    line-height: 1.08824;
    letter-spacing: .01em;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 1.09375;
    letter-spacing: .011em;
  }
`;

export default H1;
