import React, {createContext, useReducer} from 'react';
import {reducer} from "../reducer/authentication-reducer";
import {login} from "../action/authentication-action";

const AuthenticationContext = createContext();

export const initialState = {
    isAuthenticated: false,
    isAuthenticating: false,
    userInfo: "",
    token: "",
    errorMessage: ""
}

const AuthenticationProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const logOut = () => {
        dispatch({type: "LOG_OUT"})
    }

    return (
      <AuthenticationContext.Provider
        value={{state, login: login(dispatch), logOut}}>
          {props.children}
      </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
