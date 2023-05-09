import { DISPLAY_ALERT, CLEAR_ALERT } from "./Action";
import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./Action";
const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "Please provide all values!",
      alertType: "danger",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Login successful! Redirecting",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      showAlert: false,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  throw new Error(`no such action :${action.type}`);
};
export default reducer;
