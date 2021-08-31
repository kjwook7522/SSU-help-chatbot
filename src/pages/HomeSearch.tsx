import React from 'react';
import BasicButton from 'components/atoms/Button/BasicButton/BasicButton';
import { useAppDispatch } from 'common/hooks/userRedux';
import { logOut } from 'actions/auth';
import { removeToken } from 'utils/localstorage';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import CenterTemplate from 'templates/CenterTemplate/CenterTemplate';

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
            serach <BasicButton onClick={handleLogout}>로그아웃</BasicButton>
          </>
        }
      />
    </>
  );
};

export default HomeSearch;
