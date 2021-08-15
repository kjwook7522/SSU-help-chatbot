import React from 'react';
import { StyledTransparentBackground } from './TransparentBackground.styled';

const TransparentBackground: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => (
  <StyledTransparentBackground {...props} />
);

export default TransparentBackground;
