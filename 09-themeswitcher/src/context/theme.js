import { createContext, useContext } from "react"

export const ThemeContext = createContext({
    themeMode: 'light', // This is called vairable 
    darkTheme: () => { }, // This is called method or function
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider // This is called provider

export default function useTheme() {
    return useContext(ThemeContext) // This is called consumer
}
