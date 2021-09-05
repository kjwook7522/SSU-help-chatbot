import React from 'react';
import { StyledBasicButton } from './BasicButton.styled';

interface Props {
  backgroundColor?: string;
  hoverColor?: string;
  fontSize?: string;
  color?: string;
  _ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null;
  children?: React.ReactNode;
}

const BasicButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({ _ref, children, ...props }) => (
  <StyledBasicButton ref={_ref} {...props}>
    {children}
  </StyledBasicButton>
);

export default React.memo(BasicButton);
