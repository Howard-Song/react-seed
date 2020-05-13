import React, { Component, Suspense, Dispatch } from "react";
import "./Page.less";
import { Layout, Breadcrumb, Button } from "antd";
import MenuCunstom from "./../components/menu/Menu";
const { Header, Content } = Layout;
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import HttpService from "./../util/http";
import { MenuSetting } from "../routes/route-config";
import Pages from "./";
import { setMenus } from "../redux/actions";
import { connect } from "react-redux";
import { ExportOutlined } from "@ant-design/icons";

if (process.env.NODE_ENV === "development") {
  require("./../mock");
}
interface PageState {
  routerList: MenuSetting[];
  breadcrumbList: [];
}
class Page extends Component<any, PageState> {
  childMenu: any;
  constructor(props: any) {
    super(props);
    this.state = {
      routerList: [],
      breadcrumbList: [],
    };
  }
  componentDidMount() {
    this.getMenu();
  }
  async getMenu() {
    let data = await HttpService.get("/getPermission", "");
    this.props.setMenus(data);
    this.childMenu.getLocation(this.props.menus, location.hash.split("#")[1]);
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
  setBreadcrum(value) {
    if (value) {
      this.setState({
        breadcrumbList: value,
      });
    }
  }
  menuCustom(ref: any) {
    this.childMenu = ref;
  }
  isLogin(nextState, replaceState) {
    if (nextState.location.query && nextState.location.query.ticket) {
      // 如果url自带ticket
      sessionStorage.setItem("token", "ticket");
    }
    if (nextState.location.query && nextState.location.query.key) {
      // 如果url自带key
      sessionStorage.setItem("token", "key");
    }
    const token = sessionStorage.getItem("token");
    if (!token) {
      // 没有token，那就返回首页
      replaceState("/login");
    }
  }
  render() {
    return (
      <Layout className="main">
        <Header className="header">
          <div className="logo" />
          <Link to="/login">
            <ExportOutlined className="logout" />
          </Link>
        </Header>
        <Layout>
          <MenuCunstom
            onRef={this.menuCustom.bind(this)}
            getBreadcrumb={this.setBreadcrum.bind(this)}
          ></MenuCunstom>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {this.state.breadcrumbList.map((item) => {
                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
              })}
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
                    <Route path="/" onEnter={this.isLogin}>
                      {this.state.routerList &&
                        this.state.routerList.map((item) => {
                          return (
                            <Route
                              key={item.nickName}
                              path={item.url}
                              component={Pages[item.component]}
                            />
                          );
                        })}
                    </Route>
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
const mapStateToProps = (state: any) => ({
  menus: state.menus,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setMenus: (value: object) => dispatch(setMenus(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Page);
