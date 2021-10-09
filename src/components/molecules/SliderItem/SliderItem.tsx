import React from 'react';
import { StyledSliderItem, StyledBookTitle, StyledBookInfo, StyledBookThumbnail } from './SliderItem.styled';

interface Props {
  bookThumbnail?: string;
  bookTitle: string;
  author: string;
  publisher: string;
}

const SliderItem: React.FC<Props> = ({ bookThumbnail, bookTitle, author, publisher }) => (
  <StyledSliderItem>
    <StyledBookThumbnail src={bookThumbnail} />
    <StyledBookTitle>{bookTitle}</StyledBookTitle>
    <StyledBookInfo>{author}</StyledBookInfo>
    <StyledBookInfo>{publisher}</StyledBookInfo>
  </StyledSliderItem>
);

export default SliderItem;
