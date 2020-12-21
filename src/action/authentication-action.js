import {requestLogin, requestSendEmail} from "../core/services/authentication-service";
import {initialState} from "../provider/authentication-provider";

export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATING = "AUTHENTICATING"
export const RESET = "RESET"

export const login = (dispatch) => async (username, password) => {
  // instance.post("/user/login", {
  //   email: username,
  //   password: password
  // }).then((response) => {
  //   if (response.status === 200) {
  //     dispatch({type: LOGIN_SUCCEEDED, data: response.data})
  //   } else {
  //     dispatch({type: LOGIN_FAILED})
  //   }
  // }).catch((error) => {
  //   dispatch({type: LOGIN_FAILED})
  // })

  try {
    // dispatch({type: AUTHENTICATING})
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

export const forgotPassword = (dispatch) => (email) => {
  requestSendEmail(email).then((response) => {
    console.log("Send email to get password", response)
  }).catch(error => {
  })
}
