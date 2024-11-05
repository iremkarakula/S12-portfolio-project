import { createContext, useContext, useState, useEffect } from "react";
import { getTextData } from "../api";


export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);
    const [language, setLanguage] = useState('en');
    const [data, setData] = useState({});


    const toggleTheme = () => {
        setTheme(pre => !pre);

    };

    const changeLanguage = async () => {
        const newLanguage = language === 'en' ? 'tr' : 'en';
        setLanguage(newLanguage);

    };

    useEffect(() => {
        getTextData(language, setData);
    }, [language]);




    return (
        <ThemeContext.Provider value={{ toggleTheme, theme, language, changeLanguage, setData, data }}>
            {children}
        </ThemeContext.Provider>

    )
}

export const useTheme = () => useContext(ThemeContext);

