import { NAV_GUEST_LOGIN, CHANGE_NAV_GUEST } from "../constants/navControl";

const initialState = {
  navActivity: NAV_GUEST_LOGIN
};

function navGuestControl(state = initialState, action) {
  if (action.type === CHANGE_NAV_GUEST) {
    return Object.assign({}, state, {
      navActivity: action.payload
    });
  }

  return state;
}

export default navGuestControl;
