import React, { useEffect, useRef } from 'react';
import TransparentBackground from 'components/organisms/Background/TransparentBackground/TransparentBackground';
import BasicButton from 'components/atoms/Button/BasicButton/BasicButton';
import { FaTimes, FaExclamation, FaCheck } from 'react-icons/fa';
import { DISABLE_COLOR_CODE, DISABLE_HOVER_COLOR_CODE, PRIME_COLOR_CODE, PRIME_HOVER_COLOR_CODE } from 'common/theme';
import { StyledModal, StyledModalBox, StyledModalStatusCircle, StyledModalButtonWrapper } from './Modal.styled';

interface Props {
  onClickConfirm?: (...arg: any) => any;
  onClickCancel?: (...arg: any) => any;
  onClickOutside?: (...arg: any) => any;
  type: 'error' | 'warn' | 'confirm';
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ onClickConfirm, onClickCancel, onClickOutside, type, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      const { current } = modalRef;
      current.classList.add('animation');
    }
  }, [modalRef]);

  return (
    <StyledModal>
      <TransparentBackground onClick={onClickOutside} />

      <StyledModalBox ref={modalRef}>
        <StyledModalStatusCircle type={type}>
          {type === 'error' && <FaTimes className="modal-icon" />}
          {type === 'warn' && <FaExclamation className="modal-icon" />}
          {type === 'confirm' && <FaCheck className="modal-icon" />}
        </StyledModalStatusCircle>

        {children}

        <StyledModalButtonWrapper>
          {onClickCancel && (
            <BasicButton
              type="button"
              className="modal-button"
              onClick={onClickCancel}
              backgroundColor={DISABLE_COLOR_CODE}
              hoverColor={DISABLE_HOVER_COLOR_CODE}
            >
              취소
            </BasicButton>
          )}
          {onClickConfirm && (
            <BasicButton
              type="button"
              className="modal-button"
              onClick={onClickConfirm}
              backgroundColor={PRIME_COLOR_CODE}
              hoverColor={PRIME_HOVER_COLOR_CODE}
            >
              확인
            </BasicButton>
          )}
        </StyledModalButtonWrapper>
      </StyledModalBox>
    </StyledModal>
  );
};

export default React.memo(Modal);
