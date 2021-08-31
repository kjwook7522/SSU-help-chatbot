import React from 'react';
import BasicButton from 'components/atoms/Button/BasicButton/BasicButton';
import { useAppDispatch } from 'common/hooks/userRedux';
import { logOut } from 'actions/auth';
import { removeToken } from 'utils/localstorage';

const HomeSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    removeToken();
  };

  return (
    <div>
      home search
      <BasicButton onClick={handleLogout}>로그아웃</BasicButton>
    </div>
  );
};

export default HomeSearch;
