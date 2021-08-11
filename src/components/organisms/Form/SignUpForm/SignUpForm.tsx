import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useInput } from 'common/hooks/useInput';
import Title from 'components/atoms/Title/Title';
import InputLabelBox from 'components/molecules/InputLabelBox/InputLabelBox';
import BasicButton from 'components/atoms/Button/BasicButton/BasicButton';
import Message from 'components/atoms/Message/Message';
import { FaUserGraduate, FaAddressCard, FaKey, FaEnvelope, FaPhone } from 'react-icons/fa';
import { PRIME_COLOR_CODE, PRIME_HOVER_COLOR_CODE, DISABLE_COLOR_CODE, DISABLE_HOVER_COLOR_CODE } from 'common/theme';
import { StyledSignUpForm, StyledButtonWrapper } from './SignUpForm.styled';

const SignUpForm: React.FC = () => {
  const [studentId, handleStudentId] = useInput();
  const [studnetName, handleStudentName] = useInput();
  const [email, handleEmail] = useInput();
  const [phone, handlePhone] = useInput();
  const [password, handlePassword] = useInput();
  const [passwordConfirm, handlePasswordConfirm] = useInput();

  const [studentIdMessageVisible, setStudentIdMessageVisible] = useState(false);
  const [passwordConfirmMessageVisible, setPasswordConfirmMessageVisible] = useState(false);
  const [phoneMessageVisible, setPhoneMessageVisible] = useState(false);

  const history = useHistory();

  const userGraduateIcon = useMemo(() => <FaUserGraduate />, []);
  const addressCardIcon = useMemo(() => <FaAddressCard />, []);
  const keyIcon = useMemo(() => <FaKey />, []);
  const envelopeIcon = useMemo(() => <FaEnvelope />, []);
  const phoneIcon = useMemo(() => <FaPhone />, []);

  const goLoginPage = useCallback(() => {
    history.push('/login');
  }, [history]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    // write sign up api
  };

  useEffect(() => {
    if (Number.isNaN(Number(studentId))) {
      setStudentIdMessageVisible(true);
    } else {
      setStudentIdMessageVisible(false);
    }
  }, [studentId]);

  useEffect(() => {
    if (Number.isNaN(Number(phone))) {
      setPhoneMessageVisible(true);
    } else {
      setPhoneMessageVisible(false);
    }
  }, [phone]);

  useEffect(() => {
    if (password.length === 0 || passwordConfirm.length === 0) {
      setPasswordConfirmMessageVisible(false);
      return;
    }

    if (password === passwordConfirm) {
      setPasswordConfirmMessageVisible(false);
    } else {
      setPasswordConfirmMessageVisible(true);
    }
  }, [password, passwordConfirm]);

  return (
    <StyledSignUpForm onSubmit={handleSubmit}>
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
      <Message className="error-message" hide={!studentIdMessageVisible} color="#ee415c">
        숫자만 입력해주세요
      </Message>

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
      <Message className="error-message" hide={!passwordConfirmMessageVisible} color="#ee415c">
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
      <Message className="error-message" hide={!phoneMessageVisible} color="#ee415c">
        숫자만 입력해주세요
      </Message>

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
