import React from 'react'
import textData from '../data'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import imgwoman from "../assets/b04fd1fa29a883e2f4b8b8577a5c82eb.png";
import { useTheme } from '../contexts/themeContext';

function Header() {


    const { theme, toggleTheme, changeLanguage, language, textColor, textColor2, bgColor, dmButton } = useTheme();

    const { hi, description, currently, forr, projectInviteMe, freelancing, webDesign, pratamaiosi, dm, lm, lang1, lang2 } = textData[language].header;
    const currentTheme = theme ? lm : dm;
    const lnColor = language === "en" ? "text-[#EA2678]" : "text-gray-500"
    const lnColorReverse = language === "tr" ? "text-[#EA2678]" : "text-gray-500"



    return (
        <div className={`w-full relative m-auto ${textColor} ${bgColor}`}>
            <div className="w-28 h-28 bg-[#D9D9D9] rounded-full absolute -top-[56px] left-[30%]"></div>
            <div className="w-[217px] h-[59px] bg-[#EA2678] rounded-full absolute -right-[109px] bottom-[30%]"></div>

            <div className="w-4/5  m-auto lg:w-[900px] py-14">
                <div className={`text-xs font-bold text-right flex justify-end items-center py-5 ${textColor2} `}>
                    <div className='flex items-center'>
                        <button onClick={toggleTheme} className={`${dmButton} w-9 h-4 rounded-xl p-1 mr-2 flex items-center justify-ends`}><div className={`w-2 h-2 bg-[#FFE86E] rounded-full transition-transform duration-300 ease-in-out ${theme ? 'translate-x-0' : 'translate-x-5'}`}></div></button>

                        <p >{currentTheme}</p>
                    </div>
                    <div className="h-5 w-px mx-3"></div>
                    <button onClick={changeLanguage}>
                        <span className={`${lnColor}`}>{lang1}</span>
                        <span className={`${lnColorReverse}`}>{lang2}</span>
                    </button>
                </div>
                <div className=' flex justify-between items-center flex-col lg:flex-row'>
                    <div className='lg:w-[550px] '>
                        <h2 className='text-3xl font-normal' >{hi}</h2>
                        <h1 className='text-4xl my-8 font-medium'>{description}</h1>
                        <div className='flex gap-2' ><FaLinkedinIn className='w-8 h-8' /><FaGithub className='w-8 h-8' /></div>
                        <div className='text-lg mb-14 mt-3 font-normal'>{currently} <span>{freelancing}</span> {forr} <span>{webDesign}</span> {projectInviteMe} <span className='underline'> {pratamaiosi} </span>
                        </div>
                    </div>
                    <div className='w-72 h-72 relative'>

                        <img src={imgwoman} alt="" className='w-full h-full object-cover rounded-3xl z-10 relative' />
                        <div className="absolute -top-5 -left-5 w-full h-full bg-[#E92577]  rounded-3xl "></div>
                    </div>
                </div>
            </div >
        </div>


    )
}

export default Header;