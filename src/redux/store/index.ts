/*
 * @Author: yoo
 * @Date: 2020-04-22 14:07:22
 * @LastEditTime: 2020-04-22 14:07:28
 * @LastEditors: yoo
 */
import { createStore } from 'redux';
import reducers from '../reducers';
//调用createStore 方法
const store = createStore(reducers);
//导出store
export default store;