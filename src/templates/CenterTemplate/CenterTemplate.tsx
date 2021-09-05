import React from 'react';
import { StyledCenterTemplate, StyledCenterSection } from './CenterTemplate.styled';

interface Props {
  centerSection: React.ReactNode;
}

const CenterTemplate: React.FC<Props> = ({ centerSection }) => (
  <StyledCenterTemplate>
    <StyledCenterSection>{centerSection}</StyledCenterSection>
  </StyledCenterTemplate>
);

export default CenterTemplate;
