/*
 * @Author: yoo
 * @Date: 2020-04-01 17:54:28
 * @LastEditTime: 2020-04-22 16:29:02
 * @LastEditors: yoo
 */
import { SETOPENMENU, SETSELECTMENU, SETOPENMENU_TYPE, SETSELECTMENU_TYPE } from '../store/const'

export interface SETSELECTMENUAction {
  type: SETSELECTMENU_TYPE;
  data: string[]
}

export interface SETOPENMENUAction {
  type: SETOPENMENU_TYPE;
  data: string[]
}

// 定义 modifyAction 类型，包含 SETSELECTMENUAction 和 SETOPENMENUAction 接口类型
export type ModifyAction = SETSELECTMENUAction | SETOPENMENUAction;


// 设置选中的菜单
export const setSelectMenu = (data: string[]): SETSELECTMENUAction => ({
  type: SETSELECTMENU,
  data: data
})

// 设置打开的菜单
export const setOpenMenu = (data: string[]): SETOPENMENUAction => ({
  type: SETOPENMENU,
  data: data
})