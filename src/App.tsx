import React from 'react';
import Router from 'Router';
import { getIsLoggedIn } from 'utils/localstorage';

const App: React.FC = () => {
  const isLoggedIn = getIsLoggedIn();

  return <Router isLoggedIn={isLoggedIn} />;
};

export default App;
