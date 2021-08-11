import React from 'react';
import BasicInput from 'components/atoms/Input/BasicInput/BasicInput';
import IconLabel from 'components/atoms/Label/IconLabel/IconLabel';
import { StyledInputLabelBox } from './InputLabelBox.styled';

interface Props {
  icon: React.ReactNode;
  label: string;
  labelSize?: string;
  labelFor?: string;
  inputId?: string;
  value?: string;
  inputType?: string;
  placeholder?: string;
  fontSize?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  color?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputLabelBox: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({
  icon,
  label,
  labelSize,
  labelFor,
  inputId,
  value,
  inputType,
  placeholder,
  fontSize,
  minLength,
  maxLength,
  required,
  disabled,
  color,
  onChange,
  ...props
}) => (
  <StyledInputLabelBox {...props}>
    <IconLabel
      icon={icon}
      className="input-label"
      htmlFor={labelFor}
      required={required}
      color={color}
      fontSize={labelSize}
    >
      {label}
    </IconLabel>
    <BasicInput
      id={inputId}
      value={value}
      type={inputType}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      disabled={disabled}
      fontSize={fontSize}
      color={color}
      onChange={onChange}
    />
  </StyledInputLabelBox>
);

export default React.memo(InputLabelBox);
