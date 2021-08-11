import styled from 'styled-components';

export const StyledSignUpForm = styled.form`
  position: relative;

  .signup-title {
    margin-bottom: 4.5rem;
  }

  .input-label-box {
    margin-top: 2.7rem;
  }

  .error-message {
    padding-left: 0.3em;
    margin-top: 0.7rem;
  }
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

  .signup-form-button {
    margin: 0 0.5rem;
  }
`;
