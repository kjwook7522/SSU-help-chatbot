import React from 'react';
import Image from 'components/atoms/Image/Image';
import Title from 'components/atoms/Title/Title';
import BookIcon from 'assets/Icon/book_icon.png';
import { StyledIntroduceBox } from './IntroduceBox.styled';

const IntroduceBox: React.FC = () => (
  <StyledIntroduceBox>
    <Image className="book-icon" width="80px" src={BookIcon} alt="logo" />
    <Title className="title" color="#fff" fontSize="2rem">
      SSU AI 융합학부
      <br />
      대학서적 추천 시스템
    </Title>
  </StyledIntroduceBox>
);

export default IntroduceBox;
