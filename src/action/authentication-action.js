import {apiGetUserInfo, apiLogin} from "../core/services/authentication-service";
import {initialState} from "../provider/authentication-provider";
import {removeAuthToken, saveAuthToken} from "../core/services/async-storage-service";
import {setTokenToHeader} from "../core/configuration/axios-config";

export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATING = "AUTHENTICATING"
export const RESET = "RESET"
export const GET_USER_INFO_SUCCEEDED = "GET_USER_INFO_SUCCEEDED"
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED"

export const login = (dispatch) => async (username, password) => {
  try {
    const response = await apiLogin(username, password);
    // console.log("AuthenticationLogin_response: ", response.data)
    if (response.status === 200) {
      const token = response.data.token
      // setTokenToHeader(token)
      await saveAuthToken(token)
      dispatch({type: LOGIN_SUCCEEDED, data: response.data})
    } else {
      dispatch({type: LOGIN_FAILED})
    }
  } catch (error) {
    dispatch({type: LOGIN_FAILED})
  }
}

export const logOut = (dispatch) => async () => {
  await removeAuthToken()
  dispatch({type: LOG_OUT, initialState: initialState})
}

export const getUserInfo = (dispatch, setLoginBySavedToken) => async (token) => {
  console.log("getUserInfo")
  try {
    const response = await apiGetUserInfo(token)
    // console.log("getUserInfo response",response)
    if (response.status === 200) {
      // console.log("getUserInfo: true")
      setLoginBySavedToken(true)
      dispatch({type: GET_USER_INFO_SUCCEEDED, data: {...response.data, token: token}})
    } else {
      // console.log("getUserInfo: false")
      setLoginBySavedToken(false)
      dispatch({type: GET_USER_INFO_FAILED})
    }
  } catch (e) {
    // console.log("error apiGetUserInfo: ", e)
    setLoginBySavedToken(false)
    dispatch({type: GET_USER_INFO_FAILED})
  }
}
