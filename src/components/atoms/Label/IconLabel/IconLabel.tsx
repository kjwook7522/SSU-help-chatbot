import React from 'react';
import { StyledIconLabel, StyledSpan, StyledRequired } from './IconLabel.styled';

interface Props {
  icon: React.ReactNode;
  fontSize?: string;
  color?: string;
  required?: boolean;
  children?: React.ReactNode;
}

const IconLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement> & Props> = ({
  icon,
  required,
  children,
  ...props
}) => {
  const Icon = () => <>{icon}</>;

  return (
    <StyledIconLabel {...props}>
      <Icon />
      <StyledSpan>{children}</StyledSpan>
      {required && <StyledRequired>*</StyledRequired>}
    </StyledIconLabel>
  );
};

export default React.memo(IconLabel);
