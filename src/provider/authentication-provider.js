import React, {createContext, useReducer, useState} from 'react';
import {reducer} from "../reducer/authentication-reducer";
import {forgotPassword, login, logOut} from "../action/authentication-action";
import {requestSendEmail} from "../core/services/authentication-service";

const AuthenticationContext = createContext();

export const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  userInfo: "",
  token: "",
  errorMessage: ""
}

// export const init = (initialState) => {
//     return {...initialState}
// }

const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [forgotPasswordState, setForgotPasswordState] = useState(false);

  // const logOut = () => {
  //     dispatch({type: "LOG_OUT"})
  // }

  const forgotPassword = (email) => {
    requestSendEmail(email).then((response) => {
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
        forgotPassword
        /*forgotPassword: forgotPassword(dispatch)*/
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
