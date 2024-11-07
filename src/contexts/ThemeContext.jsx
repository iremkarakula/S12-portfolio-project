import { createContext, useContext, useState, useEffect } from "react";

import textData from "../data";
import { getData, postTextData } from "../api";


export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);
    const [language, setLanguage] = useState('en');


    const [data, setData] = useState({});

    const handlePostData = async (data) => {
        await postTextData(data).then(response => {
            setData(response);
            console.log("Handle", data);
        }).catch(err => console.log(err));
    };

    const handleGetData = async () => {
        await getData().then(response => {
            setData(response);
            console.log("Get", data);
        }).catch(err => console.log(err));
    };

    useEffect(async () => {
        await handlePostData(textData);
        await handleGetData();
    }, [])



    const toggleTheme = () => {
        setTheme(pre => !pre);

    };

    const changeLanguage = async () => {
        const newLanguage = language === 'en' ? 'tr' : 'en';
        setLanguage(newLanguage);

    };

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

