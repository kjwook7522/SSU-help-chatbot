import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Join from 'pages/Join';
import Handover from 'pages/Board/Handover';
import CoBuying from 'pages/Board/CoBuying';
import Recommend from 'pages/Board/Recommend';
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
    <Route path="/handover">
      <Handover />
    </Route>
    <Route path="/cobuying">
      <CoBuying />
    </Route>
    <Route path="/recommend">
      <Recommend />
    </Route>
  </Switch>
);

export default Router;
