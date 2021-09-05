import styled from 'styled-components';

interface Props {
  backgroundColor?: string;
  hoverColor?: string;
  fontSize?: string;
  color?: string;
}

export const StyledSlideButton = styled.button<Props>`
  padding: 0.5em 2.3em;
  position: relative;
  border: 2px solid ${props => props.backgroundColor || '#ddd'};
  border-radius: 25px;
  background-color: ${props => props.backgroundColor || '#ddd'};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  line-height: 1;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color || '#fff'};
  cursor: pointer;
  transition: 0.4s;

  &:hover,
  &:active {
    padding-left: calc(2.3em - 10px);
    padding-right: calc(2.3em + 10px);
    border-color: ${props => props.hoverColor || '#999'};
    background-color: ${props => props.hoverColor || '#999'};
    color: #fff;
  }

  &::after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 48%;
    transform: translateY(-50%);
    right: -0.8em;
    transition: 0.4s;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }
`;
