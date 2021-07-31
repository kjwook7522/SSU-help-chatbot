import React from 'react';
import { BsFillPersonFill as PersonIcon } from 'react-icons/bs';
import { GoKey as KeyIcon } from 'react-icons/go';
import { StyledAuthInputWrapper, StyledAuthInput } from './AuthInput.styled';

interface Props {
  type: 'student-id' | 'password';
  fontSize?: string;
  color?: string;
}

const AuthInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & Props> = ({ type, ...props }) => (
  <StyledAuthInputWrapper {...props}>
    {type === 'student-id' && (
      <>
        <PersonIcon className="icon" />
        <StyledAuthInput {...props} />
      </>
    )}
    
    {type === 'password' && (
      <>
        <KeyIcon className="icon" />
        <StyledAuthInput type="password" {...props} />
      </>
    )}
  </StyledAuthInputWrapper>
);

export default React.memo(AuthInput);
