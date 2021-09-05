import React from 'react';
import { StyledMessage } from './Message.styled';

interface Props {
  fontSize?: string;
  lineHeight?: number;
  color?: string;
  center?: boolean;
  children?: React.ReactNode;
  _ref?: ((instance: HTMLParagraphElement | null) => void) | React.RefObject<HTMLParagraphElement> | null;
}

const Message: React.FC<React.HTMLAttributes<HTMLParagraphElement> & Props> = ({ _ref, children, ...props }) => (
  <StyledMessage ref={_ref} {...props}>
    {children}
  </StyledMessage>
);

export default React.memo(Message);
