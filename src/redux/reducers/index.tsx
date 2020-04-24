import { ModifyAction } from "../actions";
import { SETOPENMENU, SETSELECTMENU, SETMENUS } from "../store/const";

// 处理并返回 state
export default (
  state = { selectMenu: [], openMenu: [], menus: [] },
  action: ModifyAction
): any => {
  switch (action.type) {
    case SETOPENMENU:
      return Object.assign({}, state, { openMenu: action.data });
    case SETSELECTMENU:
      return Object.assign({}, state, { selectMenu: action.data });
    case SETMENUS:
      return Object.assign({}, state, { menus: action.data });
    default:
      return state;
  }
};
