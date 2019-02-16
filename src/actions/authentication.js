import { LOGIN_SUCCESS } from "../constants/authentication";

export function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

export const login = data => dispatch => {
  console.log("haven't api -> auto login success");

  dispatch(loginSuccess());
};
