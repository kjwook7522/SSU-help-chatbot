import styled from 'styled-components';
import { PRIME_COLOR_CODE, PRIME_HOVER_COLOR_CODE, SUB_COLOR_CODE } from 'common/theme';

interface Props {
  backgroundColor?: string;
  hoverColor?: string;
  activeColor?: string;
  fontSize?: string;
  color?: string;
}

export const StyledNavMenu = styled.div<Props>`
  a {
    padding: 1em;
    position: relative;
    display: block;
    background-color: ${props => props.backgroundColor || PRIME_COLOR_CODE};
    box-sizing: border-box;
    text-decoration: none;
    font-size: ${props => props.fontSize || '0.875rem'};
    color: ${props => props.color || '#fff'};
    cursor: pointer;
  }

  a.active {
    border-right: 8px solid ${props => props.activeColor || SUB_COLOR_CODE};
    color: ${props => props.activeColor || SUB_COLOR_CODE};
  }

  a::before {
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.hoverColor || PRIME_HOVER_COLOR_CODE};
    transition: 0.3s ease-in;
  }

  span {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  &:hover,
  &:focus {
    a::before {
      width: 100%;
    }
  }
`;
