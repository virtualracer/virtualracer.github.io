import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState(() => {
    const isDark = localStorage.getItem('isDark');
    if(isDark === 'true') 
    return 'dark'
    else
    return 'light'
  })
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('isDark', theme === 'dark')
  }, [theme])
  function toggleTheme(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  const value = {
    theme,
    toggleTheme
  }
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
