import React from 'react';
import { StyledBasicInput } from './BasicInput.styled';

interface Props {
  fontSize?: string;
  color?: string;
}

const BasicInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & Props> = ({ ...props }) => (
  <StyledBasicInput {...props} />
);

export default React.memo(BasicInput);
