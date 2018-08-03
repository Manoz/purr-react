import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.secondary ? 'var(--secondaryColor)' : '#555'};
`;

export default Span;
