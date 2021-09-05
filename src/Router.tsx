import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Join from 'pages/Join';
import HomeSearch from 'pages/HomeSearch';
import BookDetail from 'pages/BookDetail';
import Test from 'pages/Test';

interface Props {
  isLoggedIn: boolean;
}

const Router: React.FC<Props> = ({ isLoggedIn }) => (
  <BrowserRouter>{isLoggedIn ? <PrivateRouter /> : <PublicRouter />}</BrowserRouter>
);

const PublicRouter: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Index />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/join">
      <Join />
    </Route>
    <Route path="/test">
      <Test />
    </Route>
    <Redirect to="/" />
  </Switch>
);

const PrivateRouter: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <HomeSearch />
    </Route>
    <Route path="/detail">
      <BookDetail />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Router;
