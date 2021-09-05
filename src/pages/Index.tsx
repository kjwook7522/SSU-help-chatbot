import React from 'react';
import { useHistory } from 'react-router-dom';
import IndexTemplate from 'templates/IndexTemplate/ImdexTemplate';
import IntroduceBox from 'components/molecules/IntroduceBox/IntroduceBox';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import SlideButton from 'components/atoms/Button/SlideButton/SlideButton';
import { PRIME_COLOR_CODE } from 'common/theme';

const Index: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <IndexBackground />
      <IndexTemplate
        introduceSection={<IntroduceBox />}
        startButtonSection={
          <SlideButton
            backgroundColor={PRIME_COLOR_CODE}
            hoverColor="#EE6684"
            fontSize="1.25rem"
            onClick={() => history.push('/login')}
          >
            시작하기
          </SlideButton>
        }
      />
    </>
  );
};

export default Index;
