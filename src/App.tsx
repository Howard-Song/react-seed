import React, { Component, Suspense } from "react";
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

class App extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/login" push />}
            />
            <Route path="/pages" component={Page} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default withRouter(App as any);
