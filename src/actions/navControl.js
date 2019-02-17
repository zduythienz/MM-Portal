import { CHANGE_NAV_GUEST } from "../constants/navControl";

export function navChange(payload) {
  return { type: CHANGE_NAV_GUEST, payload };
}

export const changeNavGuest = data => dispatch => {
  console.log(`change nav guest to data ${data} `);
  dispatch(navChange(data));
};
