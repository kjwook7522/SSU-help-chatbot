import React from 'react';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import AuthTemplate from 'templates/AuthTemplate/AuthTemplate';
import SignUpForm from 'components/organisms/Form/SignUpForm/SignUpForm';

const Join: React.FC = () => (
  <>
    <IndexBackground />
    <AuthTemplate formSection={<SignUpForm />} />
  </>
);

export default Join;
