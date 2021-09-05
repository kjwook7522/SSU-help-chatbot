import { useAppSelector } from 'common/hooks/userRedux';
import React from 'react';
import Router from 'Router';

const App: React.FC = () => {
  const authStore = useAppSelector(state => state.authReducer);

  return <Router isLoggedIn={authStore.isLogined} />;
};

export default App;
