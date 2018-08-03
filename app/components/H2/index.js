import styled from 'styled-components';

const H2 = styled.h2`
  margin-top: 1.2em;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.20849;
    letter-spacing: .015em;
  }

  @media (min-width: 992px) {
    font-size: 28px;
    line-height: 1.1073;
    letter-spacing: .012em;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 1.09375;
    letter-spacing: .011em;
  }
`;

export default H2;
