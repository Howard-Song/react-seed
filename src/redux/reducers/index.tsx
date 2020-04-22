import { ModifyAction } from "../actions";
import { SETOPENMENU, SETSELECTMENU } from "../store/const";

// 处理并返回 state
export default (
  state = { selectMenu: [], openMenu: [] },
  action: ModifyAction
): any => {
  switch (action.type) {
    case SETOPENMENU:
      return Object.assign({}, state, { openMenu: action.data });
    case SETSELECTMENU:
      return Object.assign({}, state, { selectMenu: action.data });
    default:
      return state;
  }
};
