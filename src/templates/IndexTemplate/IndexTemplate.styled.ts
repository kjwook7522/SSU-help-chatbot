import styled from 'styled-components';

export const StyledIndexTemplate = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    width: 400px;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const StyledIntroduceSection = styled.section`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
`;

export const StyledStartButtonSection = styled.section`
  width: 100%;
  text-align: center;
`;
