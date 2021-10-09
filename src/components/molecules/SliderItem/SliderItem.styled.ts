import styled from "styled-components";

export const StyledSliderItem = styled.div`
  width: 60%;
  padding: 0 1rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: translateZ(0) translateY(-5px)
  }
`;

export const StyledBookThumbnail = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledBookTitle = styled.h1`
  margin-bottom: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledBookInfo = styled.p`
  margin-bottom: 0.4rem;
  font-size: 0.875rem;
`;