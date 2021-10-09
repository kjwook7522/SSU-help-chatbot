import React from 'react';
import {
  StyledBookDetailTemplate,
  StyledBookDetailContent,
  StyledHeader,
  StyledDetailSection,
  StyledRecommendSection,
} from './BookDetailTemplate.styled';

interface Props {
  searchValue: string | string[] | null;
  detailSection: React.ReactNode;
  recommendSection: React.ReactNode;
}

const BookDetailTemplate: React.FC<Props> = ({ searchValue, detailSection, recommendSection }) => (
  <StyledBookDetailTemplate>
    <StyledBookDetailContent>
      <StyledHeader>
        <h1>{`검색하신 '${searchValue}'에 가까운 책을 찾았습니다.`}</h1>
      </StyledHeader>
      <StyledDetailSection>{detailSection}</StyledDetailSection>
      <StyledRecommendSection>{recommendSection}</StyledRecommendSection>
    </StyledBookDetailContent>
  </StyledBookDetailTemplate>
);

export default BookDetailTemplate;
