import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {
  StyledBookDetailTemplate,
  StyledBookDetailContent,
  StyledHeader,
  StyledBackButtonWrapper,
  StyledDetailSection,
  StyledRecommendSection,
} from './BookDetailTemplate.styled';

interface Props {
  searchValue?: string;
  detailSection: React.ReactNode;
  recommendSection: React.ReactNode;
}

const BookDetailTemplate: React.FC<Props> = ({ searchValue, detailSection, recommendSection }) => (
  <StyledBookDetailTemplate>
    <StyledBookDetailContent>
      <StyledBackButtonWrapper>
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </StyledBackButtonWrapper>

      <StyledHeader>{searchValue && <h1>{`검색하신 '${searchValue}'에 가까운 책을 찾았습니다.`}</h1>}</StyledHeader>

      <StyledDetailSection>{detailSection}</StyledDetailSection>
      <StyledRecommendSection>{recommendSection}</StyledRecommendSection>
    </StyledBookDetailContent>
  </StyledBookDetailTemplate>
);

export default BookDetailTemplate;
