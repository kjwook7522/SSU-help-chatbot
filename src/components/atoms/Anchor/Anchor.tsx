import React from 'react';
import { LinkProps } from 'react-router-dom';
import { StyledAnchor } from './Anchor.styled';

interface Props {
  fontSize?: string;
  color?: string;
  noUnderline?: boolean;
  children?: React.ReactNode;
}

const Anchor: React.FC<LinkProps & Props> = ({ children, ...props }) => (
  <StyledAnchor {...props}>{children}</StyledAnchor>
);

export default React.memo(Anchor);
