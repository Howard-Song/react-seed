import React, { Component, Dispatch } from "react";
import { Layout, Menu } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;
import "./Menu.less";
import { Link, HashRouter as Router, withRouter } from "react-router-dom";
import { setOpenMenu, setSelectMenu } from "../../redux/actions";
import { connect } from "react-redux";
import store from "../../redux/store";
import Icons from "./../icon";

class MenuCunstom extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    url: location.hash.split("#")[1],
    rootSubmenuKeys: [],
  };
  componentDidMount() {
    this.props.onRef(this);
    store.subscribe(() => {
      this.setState({
        rootSubmenuKeys: store
          .getState()
          .menus.map((item: any) => {
            if (item.children) {
              return item.nickName;
            }
          })
          .filter((item: any) => {
            return item !== undefined;
          }),
      });
    });
    this.props.history.listen((location: any) => {
      this.getLocation(this.props.menus, location.pathname);
    });
  }
  getLocation(menuList: any, url: string) {
    menuList &&
      menuList.forEach((item: any, index: any) => {
        if (url.indexOf(item.url) != -1) {
          if (!item.children) {
            this.props.setSelectMenu([item.nickName]);
            if (item.level == 1) {
              this.props.setOpenMenu([]);
            }
          } else {
            this.props.setOpenMenu([item.nickName]);
            this.getLocation(item.children, url);
          }
        }
      });
  }
  onOpenChange(openMenu: any) {
    const latestOpenKey = openMenu.find(
      (key: any) =>
        this.props.openMenu && this.props.openMenu.indexOf(key) === -1
    );
    if ((this.state.rootSubmenuKeys as any).indexOf(latestOpenKey) === -1) {
      this.props.setOpenMenu(openMenu);
    } else {
      this.props.setOpenMenu(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  OnSelectMenu(selectMenu: any) {
    this.props.setSelectMenu(selectMenu.key);
  }
  render() {
    return (
      <Router>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            openKeys={this.props.openMenu}
            theme="dark"
            selectedKeys={this.props.selectMenu}
            onOpenChange={this.onOpenChange.bind(this)}
            onSelect={this.OnSelectMenu.bind(this)}
            style={{ width: 200, height: "100%" }}
          >
            {this.props.menus &&
              this.props.menus.map((item: any, index: number) => {
                if (item.children) {
                  const Icon = Icons[item.icon];
                  return (
                    <SubMenu
                      className="menu-item"
                      key={item.nickName}
                      title={
                        <div className="column-center">
                          <Icon className="icon" />
                          <span>{item.name}</span>
                        </div>
                      }
                    >
                      {item.children.map((child: any, j: number) => {
                        return (
                          <Menu.Item className="menu-item" key={child.nickName}>
                            <Link to={child.url}></Link>
                            <span>{child.name}</span>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                } else if (!item.isHide) {
                  const Icon = Icons[item.icon];
                  return (
                    <Menu.Item className="menu-item" key={item.nickName}>
                      <Link to={item.url}>
                        <Icon />
                        <span>{item.name}</span>
                      </Link>
                    </Menu.Item>
                  );
                }
              })}
          </Menu>
        </Sider>
      </Router>
    );
  }
}
const mapStateToProps = (state: any) => ({
  selectMenu: state.selectMenu,
  openMenu: state.openMenu,
  menus: state.menus,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setOpenMenu: (value: string[]) => dispatch(setOpenMenu(value)),
  setSelectMenu: (value: string[]) => dispatch(setSelectMenu(value)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuCunstom));
