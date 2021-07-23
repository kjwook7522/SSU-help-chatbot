import React from 'react';
import Image from 'components/atoms/Image/Image';
import NavMenu from 'components/molecules/NavMenu/NavMenu';
import bookIcon from 'assets/Icon/book_icon.png';
import { StyledNavigation, StyledNavigationTop } from './Navigation.styled';

interface Props {
  menuOptions?: Array<{ icon: string; name: string; link: string }>;
  backgroundColor?: string;
  hoverColor?: string;
  activeColor?: string;
  color?: string;
}

const Navigation: React.FC<React.HTMLAttributes<HTMLElement> & Props> = ({
  menuOptions,
  backgroundColor,
  hoverColor,
  activeColor,
  color,
  ...props
}) => (
  <StyledNavigation {...props} backgroundColor={backgroundColor} color={color}>
    <StyledNavigationTop>
      <Image width="70px" className="nav-main-icon" src={bookIcon} alt="nav-main-icon" />
    </StyledNavigationTop>

    {menuOptions?.map(menu => (
      <NavMenu
        to={menu.link}
        fontSize="1.4rem"
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
        activeColor={activeColor}
        color={color}
      >
        <Image width="30px" className="nav-icon" src={menu.icon} alt="menu-icon" />
        {menu.name}
      </NavMenu>
    ))}
  </StyledNavigation>
);

export default Navigation;
