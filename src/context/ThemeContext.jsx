import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [color, setColor] = useState("cyan");

    return (
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export const useColor = () => {
    const { color, setColor } = useTheme();
    const c = (shade) => `${color}-${shade}`;
    return { c, color, setColor };
};