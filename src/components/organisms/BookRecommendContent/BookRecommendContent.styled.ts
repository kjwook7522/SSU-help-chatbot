import styled from 'styled-components';

export const StyledBookRecommendContent = styled.div`
  /* react slick css */

  .slick-prev:before,
  .slick-next:before {
    color: #ccc;
  }

  .slick-disabled {
    cursor: not-allowed;
  }
`;

export const StyledHeader = styled.h1`
  margin-bottom: 1.75rem;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const StyledSliderItemWrapper = styled.div`
  position: relative;
  text-align: center;
`;
