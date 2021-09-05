import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import SignInForm from 'components/organisms/Form/SignInForm/SignInForm';
import React from 'react';
import AuthTemplate from 'templates/AuthTemplate/AuthTemplate';

const Login: React.FC = () => (
  <>
    <IndexBackground />
    <AuthTemplate formSection={<SignInForm />} />
  </>
);

export default Login;
