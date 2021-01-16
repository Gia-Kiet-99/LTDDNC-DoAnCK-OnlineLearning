import {
  CLEAR_MESSAGE,
  GET_USER_INFO_FAILED,
  GET_USER_INFO_SUCCEEDED,
  LOG_OUT,
  LOGIN_FAILED,
  LOGIN_SUCCEEDED
} from "../action/authentication-action";
import {setTokenToHeader} from "../core/configuration/axios-config";
import {authInitialState} from "../localize/data";

export const reducer = (prevState, action) => {
  // console.log("AuthenticationReducer", action)
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      setTokenToHeader(action.data.token)
      return {
        ...prevState,
        isAuthenticated: true,
        token: action.data.token,
        userInfo: action.data.userInfo,
        message: action.data.message
      }
    case LOGIN_FAILED:
      return {...prevState, isAuthenticated: false, message: action.data.messageError}
    case LOG_OUT:
      return {...authInitialState}
    case GET_USER_INFO_SUCCEEDED:
      setTokenToHeader(action.data.token)
      return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.payload}
    case GET_USER_INFO_FAILED:
      // console.log("prevState: ", prevState)
      return {...prevState}
    case CLEAR_MESSAGE:
      return {...prevState, message: ""}
    default:
      throw new Error();
  }
}