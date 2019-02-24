import {
  LOGIN_SUCCESS,
  START_LOADING_GUEST,
  END_LOADING_GUEST
} from "../constants/authentication";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  token: ""
};

function authentication(state = initialState, action) {
  if (action.type === LOGIN_SUCCESS) {
    console.log("====================================");
    console.log(`action loginsuccess`);
    console.log("====================================");
    return Object.assign({}, state, {
      isAuthenticated: true,
      token: action.payload
    });
  } else if (action.type === START_LOADING_GUEST) {
    return { ...state, isLoading: true };
  }

  return state;
}

export default authentication;
