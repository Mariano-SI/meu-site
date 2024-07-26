import React, { createContext, useState, useEffect } from 'react';

interface GlobalContextProps {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}
  
export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark' ? true : false);
  
    useEffect(() => {
      if(isDark) {
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.querySelector('body')?.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }, [isDark]);
  
    return (
      <GlobalContext.Provider value={{ isDark, setIsDark }}>
        {children}
      </GlobalContext.Provider>
    );
  };