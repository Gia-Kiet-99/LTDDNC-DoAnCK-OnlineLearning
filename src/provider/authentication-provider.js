import React, {createContext, useReducer, useState} from 'react';
import {reducer} from "../reducer/authentication-reducer";
import {clearMessage, getUserInfo, login, logOut} from "../action/authentication-action";
import {apiSendEmail} from "../core/services/authentication-service";
import {authInitialState} from "../localize/data";

const AuthenticationContext = createContext();

// export const initialState = {
//   isAuthenticated: false,
//   userInfo: "",
//   token: "",
//   message: ""
// }

export const init = () => {
    return {...authInitialState}
}

const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, authInitialState);
  const [forgotPasswordState, setForgotPasswordState] = useState(false)
  const [loginBySavedToken, setLoginBySavedToken] = useState()

  const forgotPassword = (email) => {
    apiSendEmail(email).then((response) => {
      if(response.status === 200){
        setForgotPasswordState(true)
      }
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        login: login(dispatch),
        logout: logOut(dispatch),
        getUserInfo: getUserInfo(dispatch, setLoginBySavedToken),
        clearMessage: clearMessage(dispatch),
        forgotPassword,
        loginBySavedToken
        /*forgotPassword: forgotPassword(dispatch)*/
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
