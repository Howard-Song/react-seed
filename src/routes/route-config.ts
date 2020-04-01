/*
 * @Author: yoo
 * @Date: 2020-03-31 14:51:01
 * @LastEditTime: 2020-03-31 18:12:54
 * @LastEditors: yoo
 */
import Home from "../pages/home/Home";
import User from "../pages/setting/user/User";
import NotFound from "../pages/notFound/NotFound";
import {
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export interface MenuSetting extends MenuSettingItem {
  // 子路由
  children?: MenuSettingItem[]
}
export interface MenuSettingItem {
  // 组件别名
  nickName?: any,
  // 组件名称
  component?: any,
  // 路由名称
  name: string,
  // 菜单图标
  icon: any,
  // 路由地址
  url: string,
  isHide?: boolean
}

const menus: MenuSetting[] = [
  {
    nickName: 'home',
    component: Home,
    name: '首页',
    icon: HomeOutlined,
    url: '/app/home',
  },
  {
    name: '系统设置',
    icon: SettingOutlined,
    nickName: 'systemSetting',
    url: '/app/setting',
    children: [
      {
        nickName: 'user',
        component: User,
        name: '用户管理',
        icon: '',
        url: '/app/setting/user',
      }
    ]
  },
  {
    nickName: 'notFound',
    component: NotFound,
    name: '404',
    icon: '',
    url: '/app/404',
    isHide: true
  },
];
export default menus;