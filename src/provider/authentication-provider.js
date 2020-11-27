import React, {createContext, useEffect, useState} from 'react';
import checkLogin from "../core/services/authentication-service";

const AuthenticationContext = createContext();

const defaultAuthentication = {
    status: "",
    user: {
        token: "",
        username: "",
        fullName: ""
    }
}

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState(defaultAuthentication)
    const [isSignIn, setIsSignIn] = useState(false)

    useEffect(() => {
        console.log("useEffect: ", authentication)
        if (authentication.status === 200) {
            // toggleSignIn()
            setIsSignIn(true)
        } else {
            setIsSignIn(false)
        }
    }, [authentication])

    const toggleSignIn = () => {
        if (isSignIn === false)
            setIsSignIn(true)
        else
            setIsSignIn(false)
    }

    const signIn = (username, password) => {
        setAuthentication(checkLogin(username, password))
    }

    const signOut = () => {
        setAuthentication(defaultAuthentication)
    }

    return (
        <AuthenticationContext.Provider
            value={{authentication, setAuthentication, isSignIn, setIsSignIn, signIn, signOut}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
