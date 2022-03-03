import { FC, createContext, useContext, ReactChild } from 'react';
import lightTheme from '../theme/light';
import { Theme } from '../theme/types';

interface ThemeProviderProps {
  children: ReactChild;
}

const initialContext: Theme = lightTheme;

const ThemeContext = createContext(initialContext);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={initialContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => useContext(ThemeContext);

export default ThemeProvider;
