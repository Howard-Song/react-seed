/*
 * @Author: yoo
 * @Date: 2020-03-31 14:51:01
 * @LastEditTime: 2020-04-22 17:09:44
 * @LastEditors: yoo
 */
import Home from "../pages/home/Home";
import User from "../pages/setting/user/User";
import NotFound from "../pages/notFound/NotFound";
import {
  HomeOutlined,
  SettingOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import TaskList from "../pages/task/list/List";

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
  // 路由层级
  level: number,
  isHide?: boolean
}

const menus: MenuSetting[] = [
  {
    nickName: 'home',
    component: Home,
    name: '首页',
    icon: HomeOutlined,
    url: '/app/home',
    level: 1
  },
  {
    name: '任务',
    icon: DesktopOutlined,
    nickName: 'taskManage',
    url: '/app/taskManage',
    level: 1,
    children: [
      {
        nickName: 'list',
        component: TaskList,
        name: '列表',
        icon: '',
        url: '/app/taskManage/list',
        level: 2,
      }
    ]
  },
  {
    name: '系统设置',
    icon: SettingOutlined,
    nickName: 'systemSetting',
    url: '/app/setting',
    level: 1,
    children: [
      {
        nickName: 'user',
        component: User,
        name: '用户管理',
        icon: '',
        url: '/app/setting/user',
        level: 2,
      }
    ]
  },
  {
    nickName: 'notFound',
    component: NotFound,
    name: '404',
    icon: '',
    url: '/app/404',
    level: 1,
    isHide: true
  },
];
export default menus;