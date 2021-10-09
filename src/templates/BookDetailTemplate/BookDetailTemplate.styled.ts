import styled from 'styled-components';

export const StyledBookDetailTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledBookDetailContent = styled.div`
  width: 750px;
  margin: 4rem 0;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 3rem;

  h1 {
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const StyledDetailSection = styled.section``;

export const StyledRecommendSection = styled.section``;
