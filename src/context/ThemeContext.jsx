/* eslint-disable */

import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("contextTheme")) || false
  );

  const toggleDarkTheme = useCallback(() => {
    setDarkTheme((currentTheme) => !currentTheme);
  }, [darkTheme]);

  useEffect(() => {
    localStorage.setItem("contextTheme", darkTheme);

    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
