import {initialState} from "../provider/authentication-provider";
import {
  GET_USER_INFO_FAILED,
  GET_USER_INFO_SUCCEEDED,
  LOG_OUT,
  LOGIN_FAILED,
  LOGIN_SUCCEEDED
} from "../action/authentication-action";
import {setTokenToHeader} from "../core/configuration/axios-config";

export const reducer = (prevState, action) => {
  // console.log("AuthenticationReducer", action)
  switch (action.type) {
    // case AUTHENTICATING:
    //   return {...prevState, isAuthenticating: true}
    case LOGIN_SUCCEEDED:
      // setTokenToHeader(action.data.token)
      return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo}
    case LOGIN_FAILED:
      return {...prevState, isAuthenticated: false}
    case LOG_OUT:
      return {...initialState}
    case GET_USER_INFO_SUCCEEDED:
      // setTokenToHeader(action.data.token)
      return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.payload}
    case GET_USER_INFO_FAILED:
      return {...prevState}
    // case RESET:
    //   return init(action.initialState)
    default:
      throw new Error();
  }
}