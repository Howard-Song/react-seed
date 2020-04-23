import React, { Component, Suspense } from "react";
import "./App.less";
import { Layout, Breadcrumb } from "antd";
import MenuCunstom from "./components/menu/Menu";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import { MenuSetting } from "./routes/route-config";
import NotFound from "./pages/notFound/NotFound";
import Pages from "./pages";

import HttpService from "./util/http";
if (process.env.NODE_ENV === "development") {
  require("./mock/index");
}
const { Header, Content } = Layout;
interface AppState {
  routerList: MenuSetting[];
}
class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      routerList: [],
    };
    this.getMenu();
  }
  async getMenu() {
    let data = await HttpService.get("/getPermission", "");
    this.generateRouter(data as any);
  }
  generateRouter(list: MenuSetting[]) {
    list.map((item: MenuSetting) => {
      if (item.children) {
        return this.generateRouter(item.children);
      } else {
        return this.setState({
          routerList: this.state.routerList.concat([item]),
        });
      }
    });
  }
  render() {
    return (
      <Layout className="main">
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <MenuCunstom></MenuCunstom>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 0,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Router>
                <Suspense fallback={<div>Loading</div>}>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/app/home" push />}
                    />
                    {this.state.routerList.map((item) => {
                      return (
                        <Route
                          key={item.nickName}
                          path={item.url}
                          component={Pages[item.component]}
                        />
                      );
                    })}
                    <Route component={NotFound} />
                  </Switch>
                </Suspense>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App as any);
