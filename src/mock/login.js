/*
 * @Author: yoo
 * @Date: 2020-04-23 11:47:15
 * @LastEditTime: 2020-05-13 11:18:33
 * @LastEditors: yoo
 */
// 使用 Mock
import Mock from 'mockjs'


export default Mock.mock('/getPermission', 'get', {
  success: true,
  message: '操作成功',
  code: 200,
  data: [{
      nickName: 'home',
      component: 'Home',
      name: '首页',
      icon: 'HomeOutlined',
      url: '/pages/home',
      level: 1
    },
    {
      name: '任务',
      icon: 'DesktopOutlined',
      nickName: 'taskManage',
      url: '/pages/taskManage',
      level: 1,
      children: [{
        nickName: 'list',
        component: 'TaskList',
        name: '列表',
        icon: '',
        url: '/pages/taskManage/list',
        level: 2,
      }]
    },
    {
      name: '系统设置',
      icon: 'SettingOutlined',
      nickName: 'systemSetting',
      url: '/pages/setting',
      level: 1,
      children: [{
        nickName: 'user',
        component: 'User',
        name: '用户管理',
        icon: '',
        url: '/pages/setting/user',
        level: 2,
      }]
    },
  ]
})