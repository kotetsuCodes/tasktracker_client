import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LogInPage from './components/LogInPage';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
    <Route path="/login" component={LogInPage} />
  </Route>
);