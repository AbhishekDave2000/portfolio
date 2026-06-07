import { createContext, useContext, useState } from 'react';

const themes = {
    emerald: { text: "text-emerald-400", border: "border-emerald-500", shadow: "shadow-emerald-500/20", bg: "bg-emerald-500/10", button: "bg-emerald-500 hover:bg-emerald-400" },
    amber:   { text: "text-amber-400",   border: "border-amber-500",   shadow: "shadow-amber-500/20",   bg: "bg-amber-500/10",   button: "bg-amber-500 hover:bg-amber-400"   },
    red:     { text: "text-red-400",     border: "border-red-500",     shadow: "shadow-red-500/20",     bg: "bg-red-500/10",     button: "bg-red-500 hover:bg-red-400"     },
    cyan:    { text: "text-cyan-400",    border: "border-cyan-500",    shadow: "shadow-cyan-500/20",    bg: "bg-cyan-500/10",    button: "bg-cyan-500 hover:bg-cyan-400"    },
    purple:  { text: "text-purple-400",  border: "border-purple-500",  shadow: "shadow-purple-500/20",  bg: "bg-purple-500/10",  button: "bg-purple-500 hover:bg-purple-400"  },
};


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("amber");

    return(
        <ThemeContext.Provider value={{ theme: themes[theme], setTheme, current: theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);