/*
 * @Author: yoo
 * @Date: 2020-04-23 14:27:55
 * @LastEditTime: 2020-04-23 15:04:33
 * @LastEditors: yoo
 */


import { lazy } from "react";
const Home = lazy(() => import("./home/Home"));
const User = lazy(() => import("./setting/user/User"));
const TaskList = lazy(() => import("./task/list/List"));
const NotFound = lazy(() => import("./notFound/NotFound"));
export default {
  Home, User, TaskList, NotFound
} as any