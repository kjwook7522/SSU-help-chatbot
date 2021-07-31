import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  fontSize?: string;
  color?: string;
  noUnderline?: boolean;
}

export const StyledAnchor = styled(Link)<Props>`
  text-decoration: none;
  color: ${props => props.color || '#fff'};
  cursor: pointer;

  &:hover {
    text-decoration: ${props => !props.noUnderline && 'underline'};
  }
`;
