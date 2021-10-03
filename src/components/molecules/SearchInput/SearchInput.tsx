import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  StyledSearchInput,
  StyledSelector,
  StyledOptionWrapper,
  StyledOptions,
  StyledOptionItem,
  StyledInput,
  StyledSearchButton,
} from './SearchInput.styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  filterOptions: Array<string>;
}

let optionHeight = '0';

const SearchInput: React.FC<Props> = ({ filterOptions, ...props }) => {
  const [selectValue, setSelectValue] = useState(filterOptions[0]);
  const [filterIsActive, setFilterIsActive] = useState(false);

  const optionParentRef = useRef<HTMLDivElement>(null);
  const optionChildRef = useRef<HTMLUListElement>(null);

  const toggleSelect = (): void => {
    setFilterIsActive(prev => !prev);
  };

  const handleOption = (value: string): void => {
    setSelectValue(value);
    toggleSelect();
  };

  useEffect(() => {
    if (!optionChildRef.current) return;
    
    optionHeight = optionChildRef.current.clientHeight.toString();
  }, []);

  useEffect(() => {
    if (!optionParentRef.current) return;

    if (filterIsActive) {
      optionParentRef.current.style.height = `${optionHeight}px`;
    } else {
      optionParentRef.current.style.height = '0';
    }
  }, [filterIsActive]);

  return (
    <StyledSearchInput>
      <StyledSelector onClick={toggleSelect}>
        {selectValue} <span className="down-arrow">&#9660;</span>
      </StyledSelector>

      <StyledOptionWrapper ref={optionParentRef}>
        <StyledOptions ref={optionChildRef}>
          {filterOptions?.map(name => (
            <StyledOptionItem key={name} onClick={() => handleOption(name)}>
              {name}
            </StyledOptionItem>
          ))}
        </StyledOptions>
      </StyledOptionWrapper>

      <StyledInput {...props} />

      <StyledSearchButton>
        <FaSearch />
      </StyledSearchButton>
    </StyledSearchInput>
  );
};

export default SearchInput;
