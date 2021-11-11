import React from 'react';
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
  bookTitle?: string;
  author?: string;
  imageSrc?: string;
  publisher?: string;
  publishDate?: string;
  bookRank?: string;
  price?: string;
  bookRating?: number;
}

const BookDetailContent: React.FC<Props> = ({
  bookTitle,
  author,
  imageSrc,
  publisher,
  publishDate,
  bookRank,
  price,
  bookRating,
}) => (
  <StyledBookDetailContent>
    <StyledBookImageWrapper>
      <StyledBookImage src={imageSrc} />
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
        <span>{bookRating?.toFixed(1)}</span>
      </StyledBookDetailInfoItem>

      <StyledBookDetailInfoPrice>₩ {price || 0}</StyledBookDetailInfoPrice>
    </StyledBookDetailInfo>
  </StyledBookDetailContent>
);

export default BookDetailContent;
