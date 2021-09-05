import styled from 'styled-components';

interface Props {
  fontSize?: string;
  color?: string;
  center?: boolean;
}

export const StyledTitle = styled.h1<Props>`
  font-weight: 700;
  font-size: ${props => props.fontSize || '1.125rem'};
  color: ${props => props.color || '#333'};
  text-align: ${props => props.center && 'center'};
`;
