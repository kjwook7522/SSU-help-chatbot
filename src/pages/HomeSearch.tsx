import React from 'react';
import { useAppDispatch } from 'common/hooks/userRedux';
import { logOut } from 'actions/auth';
import { removeToken } from 'utils/localstorage';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import CenterTemplate from 'templates/CenterTemplate/CenterTemplate';
import BasicButton from 'components/atoms/Button/BasicButton/BasicButton';
import BookSearchFrom from 'components/organisms/Form/BookSearchForm/BookSearchForm';

import styled from 'styled-components';

const HomeSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    removeToken();
  };

  return (
    <>
      <IndexBackground />
      <CenterTemplate
        centerSection={
          <>
            <BookSearchFrom />
            <StyledLogoutButton>
              <BasicButton onClick={handleLogout}>임시 로그아웃</BasicButton>
            </StyledLogoutButton>
          </>
        }
      />
    </>
  );
};

const StyledLogoutButton = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
`;

export default HomeSearch;
