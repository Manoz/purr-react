import styled from 'styled-components';

const A = styled.a`
  color: black;
  text-decoration: none;
  text-decoration-skip: objects;
  border-bottom: 1px solid transparent;
  transition: color .15s, border .15s;

  &:link,
  &:visited {
    color: black;
  }

  &:hover {
    color: var(--primaryColor);
    border-bottom: 1px solid var(--primaryColor);
    transition: color .15s, border .15s;
  }

  &:focus {
    outline: 0;
  }
`;

export default A;
