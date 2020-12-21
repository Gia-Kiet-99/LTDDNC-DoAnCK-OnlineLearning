import {requestLogin} from "../core/services/authentication-service";
import {initialState} from "../provider/authentication-provider";

export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATING = "AUTHENTICATING"
export const RESET = "RESET"

export const login = (dispatch) => async (username, password) => {
  try {
    const response = await requestLogin(username, password);
    // console.log("AuthenticationLogin_response: ", response.data)
    if (response.status === 200) {
      dispatch({type: LOGIN_SUCCEEDED, data: response.data})
    } else {
      dispatch({type: LOGIN_FAILED})
    }
  } catch (error) {
    dispatch({type: LOGIN_FAILED})
  }
}

export const logOut = (dispatch) => () => {
  dispatch({type: LOG_OUT, initialState: initialState})
}
