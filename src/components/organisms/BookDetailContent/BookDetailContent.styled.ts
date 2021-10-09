import styled from 'styled-components';

export const StyledBookDetailContent = styled.div`
  margin-bottom: 3.5rem;
  display: flex;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const StyledBookImageWrapper = styled.div`
  flex: 2;
  margin-right: 3.5rem;

  @media (max-width: 767px) {
    margin: 0;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const StyledBookImage = styled.img`
  width: 100%;
  border-radius: 10px;

  @media (max-width: 767px) {
    width: 50%;
  }
`;

export const StyledBookDetailInfo = styled.div`
  flex: 3;
`;

export const StyledBookTitle = styled.h1`
  margin-bottom: 2.5rem;
  font-weight: 700;
  font-size: 1.85rem;
`;

export const StyledBookDetailInfoItem = styled.p`
  margin-bottom: 0.8rem;
`;

export const StyledBookDetailInfoCategory = styled.span`
  width: 30%;
  display: inline-block;
  font-weight: 700;
`;

export const StyledBookDetailInfoPrice = styled.p`
  margin-top: 2rem;
  font-style: italic;
  font-size: 1.5rem;
`;