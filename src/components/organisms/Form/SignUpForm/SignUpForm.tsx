import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useNumber } from 'common/hooks/useNumber';
import { useFadeAnimation } from 'common/hooks/useFade';
import { useInput } from 'common/hooks/useInput';
import { fetchSignUp } from 'common/apis/auth';
import Title from 'components/atoms/Title/Title';
import InputLabelBox from 'components/molecules/InputLabelBox/InputLabelBox';
import BasicButton from 'components/atoms/Button/BasicButton/BasicButton';
import Message from 'components/atoms/Message/Message';
import Modal from 'components/organisms/Modal/Modal';
import { FaUserGraduate, FaAddressCard, FaKey, FaEnvelope, FaPhone } from 'react-icons/fa';
import { PRIME_COLOR_CODE, PRIME_HOVER_COLOR_CODE, DISABLE_COLOR_CODE, DISABLE_HOVER_COLOR_CODE } from 'common/theme';
import { StyledSignUpForm, StyledButtonWrapper } from './SignUpForm.styled';

interface ModalState {
  isModalActive: boolean;
  modalStatus: 'error' | 'warn' | 'confirm';
  modalMessage: string;
  onClickConfirm?: (...args: any) => any;
  onClickCancel?: (...args: any) => any;
}

const SignUpForm: React.FC = () => {
  const [studentId, handleStudentId] = useNumber();
  const [studnetName, handleStudentName] = useInput();
  const [email, handleEmail] = useInput();
  const [phone, handlePhone] = useNumber();
  const [password, handlePassword] = useInput();
  const [passwordConfirm, handlePasswordConfirm] = useInput();

  const [modalState, setModalState] = useState<ModalState>({
    isModalActive: false,
    modalStatus: 'error',
    modalMessage: '',
  });

  const history = useHistory();
  const [passwordConfirmMsgRef, messageFade] = useFadeAnimation();

  const userGraduateIcon = useMemo(() => <FaUserGraduate />, []);
  const addressCardIcon = useMemo(() => <FaAddressCard />, []);
  const keyIcon = useMemo(() => <FaKey />, []);
  const envelopeIcon = useMemo(() => <FaEnvelope />, []);
  const phoneIcon = useMemo(() => <FaPhone />, []);

  const toggleModalActive = () => setModalState(prev => ({ ...prev, isModalActive: !prev.isModalActive }));

  const isPasswordConfirmValid = () => {
    if (password === passwordConfirm) {
      return true;
    }
    return false;
  };

  const isEmailValid = () => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email)) {
      return true;
    }
    return false;
  };

  const goLoginPage = useCallback(() => {
    history.push('/login');
  }, [history]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    if (!isPasswordConfirmValid()) {
      setModalState({
        isModalActive: true,
        modalStatus: 'error',
        modalMessage: '비밀번호 확인이 일치하지않습니다',
        onClickConfirm: toggleModalActive,
      });
      return;
    }

    if (!isEmailValid()) {
      setModalState({
        isModalActive: true,
        modalStatus: 'error',
        modalMessage: '이메일 형식이 맞지않습니다. 이메일 형식에 맞게 입력해주세요',
        onClickConfirm: toggleModalActive,
      });
      return;
    }

    const signupResponse = await fetchSignUp({ studentId, name: studnetName, email, phone, password });

    if (signupResponse?.status === 409) {
      setModalState({
        isModalActive: true,
        modalStatus: 'error',
        modalMessage: '입력하신 학번으로 가입된 아이디가 존재합니다',
        onClickConfirm: toggleModalActive,
      });
      return;
    }

    if (signupResponse?.status === 200) {
      setModalState({
        isModalActive: true,
        modalStatus: 'confirm',
        modalMessage: '정상적으로 가입이 완료되었습니다',
        onClickConfirm: goLoginPage,
      });
    }
  };

  useEffect(() => {
    if (password.length === 0 || passwordConfirm.length === 0) {
      messageFade(false);
      return;
    }

    if (password === passwordConfirm) {
      messageFade(false);
    } else {
      messageFade(true);
    }
  }, [password, passwordConfirm, messageFade]);

  return (
    <StyledSignUpForm onSubmit={handleSubmit}>
      {modalState.isModalActive && (
        <Modal
          type={modalState.modalStatus}
          onClickConfirm={modalState.onClickConfirm}
          onClickOutside={modalState.onClickConfirm}
        >
          {modalState.modalMessage}
        </Modal>
      )}

      <Title className="signup-title" color={PRIME_COLOR_CODE} fontSize="1.75rem" center>
        회원가입
      </Title>

      <InputLabelBox
        inputId="student-id"
        icon={userGraduateIcon}
        className="input-label-box"
        label="학번"
        labelSize="1.125rem"
        labelFor="student-id"
        color={PRIME_COLOR_CODE}
        value={studentId}
        required
        placeholder="학번을 8자리를 입력하세요"
        minLength={8}
        maxLength={8}
        onChange={handleStudentId}
      />

      <InputLabelBox
        inputId="student-name"
        icon={addressCardIcon}
        className="input-label-box"
        label="이름"
        labelSize="1.125rem"
        labelFor="student-name"
        color={PRIME_COLOR_CODE}
        value={studnetName}
        required
        placeholder="이름을 입력하세요"
        minLength={2}
        maxLength={15}
        onChange={handleStudentName}
      />

      <InputLabelBox
        inputId="student-password"
        icon={keyIcon}
        className="input-label-box"
        label="비밀번호"
        labelSize="1.125rem"
        labelFor="student-password"
        color={PRIME_COLOR_CODE}
        value={password}
        required
        inputType="password"
        placeholder="비밀번호 8-20자를 입력하세요"
        minLength={8}
        maxLength={20}
        onChange={handlePassword}
      />

      <InputLabelBox
        inputId="student-password-confirm"
        icon={keyIcon}
        className="input-label-box"
        label="비밀번호 확인"
        labelSize="1.125rem"
        labelFor="student-password-confirm"
        color={PRIME_COLOR_CODE}
        value={passwordConfirm}
        required
        inputType="password"
        placeholder="비밀번호를 한번 더 입력하세요"
        minLength={8}
        maxLength={20}
        onChange={handlePasswordConfirm}
      />
      <Message className="error-message fade-animation-init" _ref={passwordConfirmMsgRef} color="#ee415c">
        비밀번호가 일치하지 않습니다
      </Message>

      <InputLabelBox
        inputId="student-email"
        icon={envelopeIcon}
        className="input-label-box"
        label="이메일"
        labelSize="1.125rem"
        labelFor="student-email"
        color={PRIME_COLOR_CODE}
        value={email}
        required
        placeholder="이메일을 입력하세요"
        onChange={handleEmail}
      />

      <InputLabelBox
        inputId="student-phone"
        icon={phoneIcon}
        className="input-label-box"
        label="휴대폰"
        labelSize="1.125rem"
        labelFor="student-phone"
        color={PRIME_COLOR_CODE}
        value={phone}
        required
        placeholder="휴대폰 번호를 '-' 없이 입력해주세요"
        onChange={handlePhone}
      />

      <StyledButtonWrapper>
        <BasicButton
          className="signup-form-button"
          type="button"
          backgroundColor={DISABLE_COLOR_CODE}
          hoverColor={DISABLE_HOVER_COLOR_CODE}
          onClick={goLoginPage}
        >
          돌아가기
        </BasicButton>
        <BasicButton
          className="signup-form-button"
          type="submit"
          backgroundColor={PRIME_COLOR_CODE}
          hoverColor={PRIME_HOVER_COLOR_CODE}
        >
          가입하기
        </BasicButton>
      </StyledButtonWrapper>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
