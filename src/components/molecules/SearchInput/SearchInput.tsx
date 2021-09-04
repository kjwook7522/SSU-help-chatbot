import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  StyledSearchInput,
  StyledSelector,
  StyledOptions,
  StyledOptionItem,
  StyledInput,
  StyledSearchButton,
} from './SearchInput.styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  filterOptions: Array<string>;
}

const SearchInput: React.FC<Props> = ({ filterOptions, ...props }) => {
  const [selectValue, setSelectValue] = useState(filterOptions[0]);
  const [isActive, setIsActive] = useState(false);

  const optionRef = useRef<HTMLUListElement>(null);

  const toggleSelect = (): void => {
    setIsActive(prev => !prev);
  };

  const handleOption = (value: string): void => {
    setSelectValue(value);
    toggleSelect();
  };

  useEffect(() => {
    if (isActive) {
      optionRef.current?.classList.add('active');
    }
  }, [isActive]);

  return (
    <StyledSearchInput>
      <StyledSelector onClick={toggleSelect}>
        {selectValue} <span className="down-arrow">&#9660;</span>
      </StyledSelector>
      {isActive && (
        <StyledOptions ref={optionRef}>
          {filterOptions?.map(name => (
            <StyledOptionItem key={name} onClick={() => handleOption(name)}>
              {name}
            </StyledOptionItem>
          ))}
        </StyledOptions>
      )}

      <StyledInput {...props} />

      <StyledSearchButton>
        <FaSearch />
      </StyledSearchButton>
    </StyledSearchInput>
  );
};

export default SearchInput;
