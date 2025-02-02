import { createContext, useContext, useState, useEffect } from "react";

import textData from "../data";
import { postTextData } from "../api";


export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const savedTheme = localStorage.getItem('theme') === "true";
    const savedLanguage = localStorage.getItem('language') || 'en';

    const [theme, setTheme] = useState(savedTheme);
    const [language, setLanguage] = useState(savedLanguage);
    const [data, setData] = useState({});



    const toggleTheme = () => {
        setTheme(pre => !pre);
    };



    useEffect(() => {
        localStorage.setItem('theme', theme.toString());
    }, [theme]);



    const changeLanguage = () => {
        const newLanguage = language === 'en' ? 'tr' : 'en';
        setLanguage(newLanguage);

    };


    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    useEffect(() => {
        postTextData(textData);
    }, []);


    const textColor = theme ? "text-[#FFFFFF]" : "text-[#0A0A14]";
    const textColor2 = theme ? "text-[#D9D9D9]" : "text-[#777777]";
    const textColor3 = theme ? "text-[#F4F4F4]" : "text-[#0A0A14]";
    const bgColor = theme ? "bg-[#2A262B]" : "bg-[#F4F4F4]";
    const bgColor2 = theme ? "bg-[#484148]" : "bg-white";
    const profileCard = theme ? "bg-[#525252]" : "bg-[#FFFFFF]";
    const projectCard1 = theme ? "bg-[#2D3235]" : "bg-[#DDEEFE]";
    const projectCard2 = theme ? "bg-[#495351]" : "bg-[#DDEEFE]";
    const dmButton = theme ? "bg-black" : "bg-[#E92577]";





    return (
        <ThemeContext.Provider value={{ toggleTheme, theme, language, changeLanguage, setData, data, textColor, textColor2, textColor3, bgColor, bgColor2, profileCard, projectCard1, projectCard2, dmButton }}>
            {children}
        </ThemeContext.Provider>

    )
}

export const useTheme = () => useContext(ThemeContext);

