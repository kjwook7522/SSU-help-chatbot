import React from 'react';
import { StyledTitle } from './Title.styled';

interface Props {
  fontSize?: string;
  color?: string;
  center?: boolean;
  _ref?: ((instance: HTMLHeadingElement | null) => void) | React.RefObject<HTMLHeadingElement> | null;
}

const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement> & Props> = ({ _ref, children, ...props }) => (
  <StyledTitle ref={_ref} {...props}>{children}</StyledTitle>
);

export default React.memo(Title);
