import styled from 'styled-components';

interface Props {
  fontSize?: string;
  color?: string;
}

export const StyledIconLabel = styled.label<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color || '#fff'};
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  margin-left: 0.4em;
`;

export const StyledRequired = styled.span`
  margin-left: 0.1em;
  color: #ff0022;
`;
