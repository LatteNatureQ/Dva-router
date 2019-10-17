import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Cart from './routes/Cart'
import User from './routes/User'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/user" exact component={User} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
