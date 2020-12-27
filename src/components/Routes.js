import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from '../layouts/Home';
import Quote from '../layouts/Quote';
import NotFound from '../layouts/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/quote" component={Quote} exact />
      <Route path="/calculator" component={App} exact />
      <Route component={NotFound} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
