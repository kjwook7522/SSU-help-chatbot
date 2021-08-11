import styled from 'styled-components';

interface Props {
  fontSize?: string;
  lineHeight?: number;
  color?: string;
  center?: boolean;
  hide?: boolean;
}

export const StyledMessage = styled.p<Props>`
  position: relative;
  top: ${props => props.hide ? '6px' : 0};
  opacity: ${props => props.hide && 0};
  text-align: ${props => props.center && 'center'};
  line-height: ${props => props.lineHeight || 1};
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color || '#000'};
  transition: 0.3s;
`;
