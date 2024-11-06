import React from 'react'
import textData from '../data'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import imgwoman from "../assets/b04fd1fa29a883e2f4b8b8577a5c82eb.png";
import { useTheme } from '../contexts/themeContext';

function Header() {


    const { theme, toggleTheme, changeLanguage, language, data } = useTheme();

    const { hi, description, currently, forr, projectInviteMe, freelancing, webDesign, pratamaiosi, dm, lm, lang1, lang2 } = textData[language].header;
    const currentTheme = theme ? lm : dm;
    const lnColor = language === "en" ? "text-[#EA2678]" : "text-gray-500"
    const lnColorReverse = language === "tr" ? "text-[#EA2678]" : "text-gray-500"

    return (
        <div className='w-4/5  m-auto lg:w-[900px] my-14'>
            <div className="text-xs text-gray-500 font-bold text-right flex justify-end items-center py-5">
                <div className='flex'>
                    <button onClick={toggleTheme}>Button</button>
                    <p >{currentTheme}</p>
                </div>
                <div className="h-5 w-px bg-gray-500 mx-3"></div>
                <button onClick={changeLanguage}>
                    <span className={`${lnColor}`}>{lang1}</span>
                    <span className={`${lnColorReverse}`}>{lang2}</span>
                </button>
            </div>
            <div className=' flex justify-between items-center flex-col lg:flex-row'>
                <div className='lg:w-[550px] text-[#0A0A14] '>
                    <h2 className='text-3xl font-normal' >{hi}</h2>
                    <h1 className='text-4xl my-8 font-medium'>{description}</h1>
                    <div className='flex gap-2' ><FaLinkedinIn className='w-8 h-8' /><FaGithub className='w-8 h-8' /></div>
                    <div className='text-lg mb-14 mt-3 font-normal'>{currently} <span>{freelancing}</span> {forr} <span>{webDesign}</span> {projectInviteMe} <span> {pratamaiosi} </span>
                    </div>
                </div>
                <div className='w-72 h-72 relative'>

                    <img src={imgwoman} alt="" className='w-full h-full object-cover rounded-3xl z-10 relative' />
                    <div className="absolute -top-5 -left-5 w-full h-full bg-[#E92577]  rounded-3xl "></div>
                </div>
            </div>
        </div >

    )
}

export default Header;