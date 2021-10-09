import React from 'react';
import TempBookImage from 'assets/image/test_book_image.jpg';
import { moneyFormatter } from 'utils/dataformat';
import {
  StyledBookDetailContent,
  StyledBookImageWrapper,
  StyledBookImage,
  StyledBookDetailInfo,
  StyledBookTitle,
  StyledBookDetailInfoItem,
  StyledBookDetailInfoCategory,
  StyledBookDetailInfoPrice,
} from './BookDetailContent.styled';

interface Props {
  bookTitle: string;
  author: string;
  publisher: string;
  publishDate?: string;
  bookRank?: string;
  price: number;
  bookRating?: number;
}

const BookDetailContent: React.FC<Props> = ({
  bookTitle,
  author,
  publisher,
  publishDate,
  bookRank,
  price,
  bookRating,
}) => (
  <StyledBookDetailContent>
    <StyledBookImageWrapper>
      <StyledBookImage src={TempBookImage} />
    </StyledBookImageWrapper>

    <StyledBookDetailInfo>
      <StyledBookTitle>{bookTitle}</StyledBookTitle>

      <StyledBookDetailInfoItem>
        <StyledBookDetailInfoCategory>저자</StyledBookDetailInfoCategory>
        <span>{author}</span>
      </StyledBookDetailInfoItem>

      <StyledBookDetailInfoItem>
        <StyledBookDetailInfoCategory>출판사</StyledBookDetailInfoCategory>
        <span>{publisher}</span>
      </StyledBookDetailInfoItem>

      <StyledBookDetailInfoItem>
        <StyledBookDetailInfoCategory>출간일</StyledBookDetailInfoCategory>
        <span>{publishDate}</span>
      </StyledBookDetailInfoItem>

      <StyledBookDetailInfoItem>
        <StyledBookDetailInfoCategory>TOP 100</StyledBookDetailInfoCategory>
        <span>{bookRank}</span>
      </StyledBookDetailInfoItem>

      <StyledBookDetailInfoItem>
        <StyledBookDetailInfoCategory>평점</StyledBookDetailInfoCategory>
        <span>{bookRating}</span>
      </StyledBookDetailInfoItem>

      <StyledBookDetailInfoPrice>₩ {moneyFormatter(price)}</StyledBookDetailInfoPrice>
    </StyledBookDetailInfo>
  </StyledBookDetailContent>
);

export default BookDetailContent;
