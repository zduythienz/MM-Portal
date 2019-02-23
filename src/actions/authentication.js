import {
  LOGIN_SUCCESS,
  REGISTER,
  START_LOADING_GUEST,
  END_LOADING_GUEST
} from "../constants/authentication";
import api from "../common/api";

export function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

export const startLoadingGuest = () => ({
  type: START_LOADING_GUEST
});
export const endLoadingGuest = () => ({
  type: END_LOADING_GUEST
});

export function submitRegister(payload) {
  return { type: REGISTER, payload };
}

export const login = data => dispatch => {
  console.log("haven't api -> auto login success");

  dispatch(loginSuccess());
};

export const register = data => dispatch => {
  dispatch(startLoadingGuest());
  return api.post("register", { ...data }).then(
    res => {
      console.log(res.data);
      localStorage.setItem("user_id", res.data._id);
      // dispatch(endLoadingGuest());
    },
    err => {
      console.log(err);
    }
  );
};
