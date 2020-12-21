import React, {createContext, useReducer} from 'react';
import {reducer} from "../reducer/authentication-reducer";
import {login} from "../action/authentication-action";

const AuthenticationContext = createContext();

const initialState = {
    isAuthenticated: false,
    isAuthenticating: false,
    userInfo: null,
    token: null,
    errorMessage: null
}

const AuthenticationProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <AuthenticationContext.Provider value={{state, login: login(dispatch)}}>
          {props.children}
      </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
