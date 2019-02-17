import { LOGIN_SUCCESS } from "../constants/authentication";

const initialState = {
  isAuthenticated: false
};

function authentication(state = initialState, action) {
  if (action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      isAuthenticated: true
    });
  }

  return state;
}

export default authentication;
