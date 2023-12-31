"use client"

import { createContext, useEffect, useState } from 'react';
import { AppConstants } from '@/commons/AppConstants';

export const ThemeContext = createContext();

const getThemeFromLocalStorage = () => {
    if(typeof window !== "undefined"){
        console.log("local storage value >>> " + localStorage.getItem(AppConstants.THEME))
        const localThemeValue = localStorage.getItem(AppConstants.THEME);
        return localThemeValue || AppConstants.LIGHT_THEME;
    }
}

export const ThemeContextProvider = ({ children }) => {
     
    const [theme, setTheme] = useState( () => {
        return getThemeFromLocalStorage();
    } );

    const toggle = () => {
        setTheme(theme == AppConstants.LIGHT_THEME ?
             AppConstants.DARK_THEME : AppConstants.LIGHT_THEME);
    }
 
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
}