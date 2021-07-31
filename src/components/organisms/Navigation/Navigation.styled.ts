import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/theme';

interface Props {
  backgroundColor?: string;
  color?: string;
}

export const StyledNavigation = styled.nav<Props>`
  height: 100%;
  background-color: ${props => props.backgroundColor || PRIME_COLOR_CODE};
  color: ${props => props.color || '#fff'};

  .nav-icon {
    margin-right: 0.85em;
  }
`;

export const StyledNavigationTop = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  .nav-main-icon {
    margin-bottom: 1rem;
  }
`;
