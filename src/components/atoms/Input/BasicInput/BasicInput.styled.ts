import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/theme';

interface Props {
  fontSize?: string;
  color?: string;
}

export const StyledBasicInput = styled.input<Props>`
  width: 100%;
  padding: 0.7em 1em;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: #ebebf7;
  box-sizing: border-box;
  caret-color: ${props => props.color || PRIME_COLOR_CODE};
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color || PRIME_COLOR_CODE};

  &:focus {
    outline: none;
    border-color: ${props => props.color || PRIME_COLOR_CODE};
  }
`;