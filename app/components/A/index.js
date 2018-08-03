import styled from 'styled-components';

const A = styled.a`
  padding-bottom: 2px;
  color: #c9abf8;
  text-decoration: none;
  text-decoration-skip: objects;
  border-bottom: 1px solid transparent;
  transition: color .15s, border .15s;

  &:link,
  &:visited {
    color: #c9abf8;
  }

  &:hover {
    color: var(--secondaryColor);
    border-bottom: 1px solid var(--secondaryColor);
    transition: color .15s, border .15s;
  }

  &:focus {
    outline: 0;
  }
`;

export default A;
