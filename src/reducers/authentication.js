import {
  LOGIN_SUCCESS,
  START_LOADING_GUEST,
  END_LOADING_GUEST,
  LOGIN_FAIL
} from "../constants/authentication";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  token: "",
  error: {
    message: "",
    show: false
  }
};

function authentication(state = initialState, action) {
  if (action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      isAuthenticated: true,
      token: action.payload
    });
  } else if (action.type === START_LOADING_GUEST) {
    return { ...state, isLoading: true };
  } else if (action.type === END_LOADING_GUEST) {
    return { ...state, isLoading: false };
  } else if (action.type === LOGIN_FAIL) {
    if (action.payload.status === 400) {
      return Object.assign({}, state, {
        error: {
          message: "Username or Password invalid!!!",
          show: true
        }
      });
    } else {
      return Object.assign({}, state, {
        error: {
          message: "Internal Sever Error",
          show: true
        }
      });
    }
  }

  return state;
}

export default authentication;
