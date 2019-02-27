import {
  LOGIN_SUCCESS,
  REGISTER,
  START_LOADING_GUEST,
  END_LOADING_GUEST,
  LOGIN_FAIL
} from "../constants/authentication";
import api from "../common/api";

export function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}
export function loginFail(payload) {
  return { type: LOGIN_FAIL, payload };
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
  dispatch(startLoadingGuest());
  return api.post("authen", { ...data }).then(
    res => {
      console.log(res.data);
      localStorage.setItem("mm_token", res.data.data.token);

      console.log(`dispatch loginsuccess: ${res.data.data.token}`);
      dispatch(loginSuccess(res.data.data.token));
      dispatch(endLoadingGuest());
    },
    err => {
      if (err.response && err.response.status === 400) {
        dispatch(loginFail(err.response));
      } else {
        dispatch(loginFail({ status: 500 }));
      }
      dispatch(endLoadingGuest());
    }
  );
};

export const register = data => dispatch => {
  dispatch(startLoadingGuest());
  return api.post("register", { ...data }).then(
    res => {
      localStorage.setItem("mm_token", res.data.data);
      dispatch(loginSuccess(res.data.data));
      dispatch(endLoadingGuest());
    },
    err => {
      console.log(err);
      dispatch(endLoadingGuest());
    }
  );
};
