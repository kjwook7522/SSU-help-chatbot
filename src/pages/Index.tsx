import React from 'react';
import { useHistory } from 'react-router-dom';
import IndexTemplate from 'templates/IndexTemplate/ImdexTemplate';
import IntroduceBox from 'components/molecules/IntroduceBox/IntroduceBox';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import SlideButton from 'components/atoms/Button/SlideButton/SlideButton';

const Index: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <IndexBackground />
      <IndexTemplate
        introduceSection={<IntroduceBox />}
        startButtonSection={
          <SlideButton
            backgroundColor="#3751A8"
            hoverColor="#EE6684"
            fontSize="1.25rem"
            onClick={() => history.push('/handover')}
          >
            시작하기
          </SlideButton>
        }
      />
    </>
  );
};

export default Index;
