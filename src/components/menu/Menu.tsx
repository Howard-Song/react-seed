import React, { Component } from 'react';
import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;
import './Menu.less';
import { Link, HashRouter as Router } from 'react-router-dom';
import menus from '../../routes/route-config';

class MenuCunstom extends Component<any>  {
  constructor(props: any) {
    super(props);
  }
  state = {
    openMenu: this.props.openMenu,
    selectMenu: this.props.openMenu,
    rootSubmenuKeys: menus.map(item => {
      if (item.children) {
        return item.nickName;
      }
    }).filter(item => {
      return item !== undefined;
    })
  };

  onOpenChange(openMenu: any) {
    const latestOpenKey = openMenu.find((key: any) => this.state.openMenu.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openMenu });
    } else {
      this.setState({
        openMenu: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  OnSelectMenu(selectMenu: any) {
    this.setState({ selectMenu: selectMenu.key });
  }

  render() {
    return (
      <Router>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            openKeys={this.state.openMenu}
            theme="dark"
            selectedKeys={this.state.selectMenu}
            onOpenChange={this.onOpenChange.bind(this)}
            onSelect={this.OnSelectMenu.bind(this)}
            style={{ width: 200, height: '100%' }}
          >
            {
              menus.map((item, index) => {
                if (item.children) {
                  return <SubMenu
                    className="menu-item"
                    key={item.nickName}
                    title={
                      <div className="column-center">
                        <Icon className="icon" component={item.icon} />
                        <span>{item.name}</span>
                      </div>
                    }
                  >
                    {
                      item.children.map((child, j) => {
                        return <Menu.Item
                          className="menu-item"
                          key={child.nickName}>
                          <Link to={child.url}></Link>
                          <span>{child.name}</span>
                        </Menu.Item>
                      })
                    }
                  </SubMenu>
                } else if (!item.isHide) {
                  return <Menu.Item
                    className="menu-item"
                    key={item.nickName}>
                    <Link to={item.url}>
                      <Icon component={item.icon} />
                      <span >{item.name}</span>
                    </Link>
                  </Menu.Item>
                }
              })
            }
          </Menu>
        </Sider>
      </Router>
    );
  }
}
export default MenuCunstom;
