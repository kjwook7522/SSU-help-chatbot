import React from 'react';
import { StyledIndexTemplate, StyledIntroduceSection, StyledStartButtonSection } from './IndexTemplate.styled';

interface Props {
  introduceSection: React.ReactNode;
  startButtonSection: React.ReactNode;
}

const IndexTemplate: React.FC<Props> = ({ introduceSection, startButtonSection }) => (
  <StyledIndexTemplate>
    <StyledIntroduceSection>{introduceSection}</StyledIntroduceSection>
    <StyledStartButtonSection>{startButtonSection}</StyledStartButtonSection>
  </StyledIndexTemplate>
);

export default IndexTemplate;
