import { useState } from 'react';

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return {
    darkMode,
    toggleTheme,
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    textColor: darkMode ? '#ffffff' : '#000000',
  };
}