import React, {createContext, useState} from 'react';

export const themes = {
    light: {
        foregroundColor: '#000000',
        backgroundColor: '#eeeeee',
    },
    dark: {
        foregroundColor: '#ffffff',
        backgroundColor: '#222222',
    },
};

const AppThemeContext = createContext();

const AppThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        if(theme === themes.light) {
            setTheme(themes.dark)
        } else {
            setTheme(themes.light)
        }
    }

    return (
        <AppThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </AppThemeContext.Provider>
    );
};

export {AppThemeProvider, AppThemeContext};
