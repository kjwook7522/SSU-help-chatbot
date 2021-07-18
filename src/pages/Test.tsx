import React from 'react';
import SlideButton from 'components/atoms/Button/SlideButton/SlideButton';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';

const Test: React.FC = () => (
  <div>
    <IndexBackground />
    <SlideButton backgroundColor="#3751A8" hoverColor="#EE6684" fontSize="1.5rem">
      시작하기
    </SlideButton>
  </div>
);

export default Test;
