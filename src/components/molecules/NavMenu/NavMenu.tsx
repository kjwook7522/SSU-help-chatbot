import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavMenu } from './NavMenu.styled';

interface Props {
  to: string;
  backgroundColor?: string;
  hoverColor?: string;
  activeColor?: string;
  fontSize?: string;
  color?: string;
  _ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null;
  children?: React.ReactNode;
}

const NavMenu: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({ to, children, ...props }) => (
  <StyledNavMenu {...props}>
    <NavLink to={to}>
      <span>{children}</span>
    </NavLink>
  </StyledNavMenu>
);

export default React.memo(NavMenu);
