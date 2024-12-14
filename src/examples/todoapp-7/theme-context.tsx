import { Dispatch, createContext, useState, useContext } from 'react';

const initialTheme = 'dawn';
type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};
const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  setTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ColorProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
