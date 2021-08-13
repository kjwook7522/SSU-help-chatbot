import React from 'react';
import { useInput } from 'common/hooks/useInput';
import { useShakeAnimation } from 'common/hooks/useShake';
import Title from 'components/atoms/Title/Title';
import SlideButton from 'components/atoms/Button/SlideButton/SlideButton';
import AuthInput from 'components/atoms/Input/AuthInput/AuthInput';
import Message from 'components/atoms/Message/Message';
import Anchor from 'components/atoms/Anchor/Anchor';
import { PRIME_COLOR_CODE } from 'common/theme';
import { StyledSignInForm } from './SignInForm.styled';

const SignInForm: React.FC = () => {
  const [studentId, handleStudentId] = useInput();
  const [password, handlePassword] = useInput();

  const [messageRef, messageShake] = useShakeAnimation();
  
  const handleSubmit: React.FormEventHandler = async event => {
    event.preventDefault();

    messageShake();
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit}>
      <Title className="signin-title" color={PRIME_COLOR_CODE} fontSize="1.75rem" center>
        AI 책 추천 서비스
      </Title>
      <AuthInput
        fontSize="1rem"
        value={studentId}
        className="input"
        type="student-id"
        placeholder="학번을 입력하세요"
        maxLength={8}
        onChange={handleStudentId}
      />
      <AuthInput
        fontSize="1rem"
        value={password}
        className="input"
        type="password"
        placeholder="비밀번호를 입력하세요"
        maxLength={20}
        onChange={handlePassword}
      />
      <Message className="error-message shake-animation-init" _ref={messageRef} color="#ee415c">
        학번이나 비밀번호가 틀렸습니다
      </Message>

      <SlideButton className="signin-btn" backgroundColor={PRIME_COLOR_CODE} hoverColor="#EE6684">
        로그인
      </SlideButton>

      <Anchor to="/join" color="#787878">
        아직도 회원이 아니세요? 5초만에 가입하러가기
      </Anchor>
    </StyledSignInForm>
  );
};

export default SignInForm;
