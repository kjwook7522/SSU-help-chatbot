import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/theme';

interface Props {
  fontSize?: string;
  color?: string;
}

export const StyledAuthInputWrapper = styled.div<Props>`
  position: relative;
  font-size: ${props => props.fontSize || '0.875rem'};

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.7em;
    font-size: 1.5em;
    color: ${props => props.color || PRIME_COLOR_CODE};
  }
`;

export const StyledAuthInput = styled.input<Props>`
  width: 100%;
  padding: 0.7em 1em;
  padding-left: 3.2em;
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
