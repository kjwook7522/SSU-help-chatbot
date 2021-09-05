import styled from 'styled-components';

export const StyledIndexBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(61, 116, 239);
  background: linear-gradient(
    121deg,
    rgba(61, 116, 239, 1) 0%,
    rgba(91, 104, 205, 1) 30%,
    rgba(189, 119, 158, 1) 72%,
    rgba(232, 123, 138, 1) 100%
  );
  z-index: -1;
`;
