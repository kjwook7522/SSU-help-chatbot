import React from 'react';
import { StyledAuthTemplate, StyledFormSection } from './AuthTemplate.styled';

interface Props {
  formSection: React.ReactNode;
}

const AuthTemplate: React.FC<Props> = ({ formSection }) => (
  <StyledAuthTemplate>
    <StyledFormSection>{formSection}</StyledFormSection>
  </StyledAuthTemplate>
);

export default AuthTemplate;
