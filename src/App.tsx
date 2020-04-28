import React from "react";
import "./App.less";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Page from "./pages/Page";
import Login from "./pages/login/Login";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" push />} />
        <Route path="/pages" component={Page} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default withRouter(App as any);
