import {initialState} from "../provider/authentication-provider";
import {LOG_OUT, LOGIN_FAILED, LOGIN_SUCCEEDED} from "../action/authentication-action";

export const reducer = (prevState, action) => {
  console.log("AuthenticationReducer", action)
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo}
    case LOGIN_FAILED:
      return {...prevState, isAuthenticated: false}
    case LOG_OUT:
      return {...initialState}
    default:
      throw new Error();
  }
}