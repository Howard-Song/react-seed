import React, { Component } from "react";
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
import menus, { MenuSetting } from "./routes/route-config";

const { Header, Content } = Layout;
class App extends Component<any> {
  routerList: MenuSetting[] = [];
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.generateRouter(menus);
  }

  generateRouter(list: MenuSetting[]) {
    list.map((item: MenuSetting) => {
      if (item.children) {
        return this.generateRouter(item.children);
      } else {
        return this.routerList.push(item);
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
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/app/home" push />}
                  />
                  {this.routerList.map((item) => {
                    return (
                      <Route
                        key={item.nickName}
                        path={item.url}
                        component={item.component}
                      />
                    );
                  })}
                </Switch>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
