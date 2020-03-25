import React, { Component } from 'react';

import { Layout, Menu } from 'antd';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;
import './Menu.less';
import { Link } from 'react-router-dom';

class MenuCunstom extends Component<any>  {
  // submenu keys of first level
  menus = [
    {
      type: 'home',
      name: '首页',
      icon: 'HomeOutlined',
      url: '/app/home',
    },
    {
      type: 'setting',
      name: '系统设置',
      icon: 'SettingFilled',
      url: '/app/setting',
      children: [
        {
          type: 'user',
          name: '用户管理',
          icon: 'SettingFilled',
          url: '/app/setting/user',
        }
      ]
    }
  ];
  state = {
    openKeys: [this.menus[0].type],
  };
  rootSubmenuKeys: any = this.menus.map(item => {
    if (item.children) {
      return item.type;
    }
  }).filter(item => {
    return item !== undefined;
  });


  onOpenChange(openKeys: any) {
    const latestOpenKey = openKeys.find((key: any) => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          theme="dark"
          onOpenChange={this.onOpenChange.bind(this)}
          style={{ width: 200, height: '100%' }}
        >
          {
            this.menus.map(item => {
              if (item.children) {
                return <SubMenu
                  key={item.type}
                  title={
                    <span>
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {
                    item.children.map(child => {
                      return <Menu.Item key={child.type}>
                        <Link to={child.url}></Link>
                        <span>{child.name}</span>
                      </Menu.Item>
                    })
                  }
                </SubMenu>
              } else {
                return <Menu.Item key={item.type}>
                  <Link to={item.url}></Link>
                  <span>{item.name}</span>
                </Menu.Item>
              }
            })
          }
        </Menu>
      </Sider>
    );
  }
}
export default MenuCunstom;
