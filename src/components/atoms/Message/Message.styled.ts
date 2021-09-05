import styled from 'styled-components';

interface Props {
  fontSize?: string;
  lineHeight?: number;
  color?: string;
  center?: boolean;
}

export const StyledMessage = styled.p<Props>`
  width: 100%;
  text-align: ${props => props.center && 'center'};
  line-height: ${props => props.lineHeight || 1};
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color || '#000'};
`;
