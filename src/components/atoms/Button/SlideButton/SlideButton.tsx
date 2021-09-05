import React from 'react';
import { StyledSlideButton } from './SlideButton.styled';

interface Props {
  backgroundColor?: string;
  hoverColor?: string;
  fontSize?: string;
  color?: string;
  _ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null;
  children?: React.ReactNode;
}

const SlideButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({ _ref, children, ...props }) => (
  <StyledSlideButton ref={_ref} {...props}>
    {children}
  </StyledSlideButton>
);

export default React.memo(SlideButton);
