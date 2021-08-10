import styled from 'styled-components';

interface Props {
  backgroundColor?: string;
  hoverColor?: string;
  fontSize?: string;
  color?: string;
}

export const StyledBasicButton = styled.button<Props>`
  width: 100%;
  padding: 0.8em 2.3em;
  position: relative;
  border: none;
  border-radius: 25px;
  background-color: ${props => props.backgroundColor || '#ddd'};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  line-height: 1;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color || '#fff'};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.hoverColor || '#999'};
  }
`;
