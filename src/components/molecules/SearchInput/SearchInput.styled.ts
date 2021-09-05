import styled from 'styled-components';
import { SUB_COLOR_CODE } from 'common/theme';

export const StyledSearchInput = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const StyledSelector = styled.div`
  flex: 1 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebf1f5;
  font-weight: 700;
  color: #6d7198;
  cursor: pointer;

  .down-arrow {
    margin-left: 0.5em;
    font-size: 0.5em;
  }
`;

export const StyledOptions = styled.ul`
  width: 100px;
  max-height: 0;
  position: absolute;
  left: 0;
  top: 70px;
  border-radius: 10px;
  background-color: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
    rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  overflow: hidden;
  overflow-y: scroll;
  color: #6d7198;
  z-index: 10;
  transition: 0.3s;

  &.active {
    max-height: 100px;
  }
`;

export const StyledOptionItem = styled.li`
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;


export const StyledInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0 1rem;
  border: none;
  background-color: #fff;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 1.25rem;
  color: #423a37;

  &:focus {
    outline: none;
    background-color: #f6f6f6;
  }
`;

export const StyledSearchButton = styled.button`
  flex: 1 0 60px;
  height: 60px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: ${SUB_COLOR_CODE};
  font-size: 1.25rem;
  color: #fff;
  cursor: pointer;
`;
