import SliderItem from 'components/molecules/SliderItem/SliderItem';
import React from 'react';
import Slider from 'react-slick';
import { StyledBookRecommendContent, StyledHeader, StyledSliderItemWrapper } from './BookRecommendContent.styled';

/* global BookInfromation */

interface Props {
  books: BookInfromation[];
}

const settings = {
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const BookRecommendContent: React.FC<Props> = ({ books }) => (
  <StyledBookRecommendContent>
    <StyledHeader>당신을 위한 AI 책 추천</StyledHeader>
    <Slider {...settings}>
      {books.map(({ title, image, author, publisher, barcode }) => (
        <StyledSliderItemWrapper key={barcode}>
          <SliderItem bookTitle={title} bookThumbnail={image} author={author} publisher={publisher} />
        </StyledSliderItemWrapper>
      ))}
    </Slider>
  </StyledBookRecommendContent>
);

export default BookRecommendContent;
