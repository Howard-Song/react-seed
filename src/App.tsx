import React, { Component } from 'react';
import './App.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuCunstom from './components/menu/Menu';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import User from './pages/setting/user/User';
type appProps = {

}
type appState = {
  menuList: string[],
  obj: object,
  openKeys: string[],
  test: string
}
const { SubMenu } = Menu;
const { Header, Content } = Layout;
class App extends Component<appProps, appState> {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  constructor(props: any) {
    super(props);
    this.state = {
      menuList: ['首页', '测试页'],
      openKeys: ['sub1'],
      obj: {
        className: 'test',
        'data-test': '1'
      },
      test: '测试'
    }
  }
  componentWillMount() {
    console.log(this);
  }
  componentDidMount() {
    console.log(this);
  }
  onOpenChange(openKeys: any) {
    const latestOpenKey = this.state.openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey as any) === -1) {
      this.setState({});
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
      <Layout className="main">
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <MenuCunstom></MenuCunstom>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Router>
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
                  <Route path="/app/home" component={Home} />
                  <Route path="/app/setting/user" component={User} />
                </Switch>
              </Router>

            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  handleChange(e: any) {
    console.log(e.target.value);
  }
  changeMenu(e: any, index: number) {
    console.log(e);
    console.log(index);
  }
  updateMenu(e: any) {
    console.log(e);
    this.setState({
      menuList: ['首页', '角色管理']
    })
  }
}

export default App;
