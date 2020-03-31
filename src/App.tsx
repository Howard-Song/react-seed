import React, { Component } from 'react';
import './App.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuCunstom from './components/menu/Menu';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import User from './pages/setting/user/User';
import menus, { MenuSetting, MenuSettingItem } from './routes/route-config';

const { Header, Content } = Layout;
class App extends Component {
  routerList: MenuSetting[] = [];
  constructor(props: any) {
    super(props);
    this.state = {

    }
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
  componentWillMount() {
    console.log(this);
  }
  componentDidMount() {
    console.log(this);
  }
  componentWillUpdate() {
    console.log(this);
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
                padding: 0,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Router>
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
                  {
                    this.routerList.map(item => {
                      return <Route key={item.nickName} path={item.url} component={item.component} />;
                    })
                  }
                </Switch>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
