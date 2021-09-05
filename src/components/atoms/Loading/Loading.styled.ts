import { PRIME_COLOR_CODE } from 'common/theme';
import styled from 'styled-components';

interface Props {
  size?: string;
}

export const StyledLoading = styled.span<Props>`
  display: inline-block;
  width: ${props => props.size || '70px'};
  height: ${props => props.size || '70px'};
  border: 4px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border-top-color: ${PRIME_COLOR_CODE};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
`;
