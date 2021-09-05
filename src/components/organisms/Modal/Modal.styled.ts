import styled, { css } from 'styled-components';

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
`;

export const StyledModalBox = styled.div`
  width: 500px;
  margin: 0 1.5rem;
  margin-top: 5rem;
  padding: 1.5rem;
  padding-top: 3rem;
  position: relative;
  top: -20px;
  border-radius: 10px;
  background-color: #fff;
  opacity: 0;
  z-index: 101;
  transition: top 0.4s, opacity 0.4s;

  &.animation {
    top: 0;
    opacity: 1;
  }

  @media (max-width: 767px) {
    width: 400px;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const StyledModalStatusCircle = styled.span<{ type: 'error' | 'warn' | 'confirm' }>`
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  top: -15px;
  left: -15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  ${props =>
    props.type === 'error' &&
    css`
      background-color: #ee415c;
    `}
  ${props =>
    props.type === 'warn' &&
    css`
      background-color: #ecba40;
    `}
    ${props =>
    props.type === 'confirm' &&
    css`
      background-color: #51b398;
    `}

  .modal-icon {
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const StyledModalButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  text-align: right;

  .modal-button {
    margin: 0 0.5rem;
  }
`;
