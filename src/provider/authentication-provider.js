import React, {createContext, useState} from 'react';

const AuthenticationContext = createContext();

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState(null);

    const updateAuthenticationValue = (newValue) => {
        setAuthentication(newValue);
        // console.log(authentication)
    }

    return (
        <AuthenticationContext.Provider value={{authentication, updateAuthenticationValue}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
