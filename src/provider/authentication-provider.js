import React, {createContext, useEffect, useReducer, useState} from 'react';
import {reducer} from "../reducer/authentication-reducer";
import {getUserInfo, login, logOut} from "../action/authentication-action";
import {apiSendEmail} from "../core/services/authentication-service";
import {removeAuthToken, saveAuthToken} from "../core/services/async-storage-service";

const AuthenticationContext = createContext();

export const initialState = {
  isAuthenticated: false,
  userInfo: "",
  token: "",
  errorMessage: ""
}

export const init = () => {
    return {...initialState}
}

const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [forgotPasswordState, setForgotPasswordState] = useState(false);

  // useEffect(() => {
  //   if(state.isAuthenticated){
  //     saveAuthToken(state.token).then()
  //   } else {
  //     removeAuthToken().then();
  //   }
  // }, [state.isAuthenticated])

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
        getUserInfo: getUserInfo(dispatch),
        forgotPassword
        /*forgotPassword: forgotPassword(dispatch)*/
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
