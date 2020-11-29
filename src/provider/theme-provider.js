import React, {createContext, useEffect, useState} from 'react';

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
  const [isDark, setIsDark] = useState(false)
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    isDark ? setTheme(themes.dark) : setTheme(themes.light)
  }, [isDark])

  return (
    <AppThemeContext.Provider value={{theme, isDark, toggleTheme}}>
      {props.children}
    </AppThemeContext.Provider>
  );
};

export {AppThemeProvider, AppThemeContext};
