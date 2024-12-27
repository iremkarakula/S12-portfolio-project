import React from 'react'
import textData from '../data'
import { useTheme } from '../contexts/ThemeContext';

function Footer() {
    const { bgColor2, textColor, language } = useTheme();
    const { workTogether, f_github, f_blog, f_linkedin, f_email } = textData[language].footer;

    return (
        <div className={`w-full  m-auto  ${bgColor2} ${textColor}  `}>
            <div className='w-4/5 sm:w-3/5  m-auto lg:w-[900px] py-24  flex flex-col  md:flex-row md:justify-center md:gap-10'>
                <div className='relative  '>
                    <p className="absolute w-56 h-6 bg-[#82BBFF]  rounded top-8 left-28 z-0"></p>
                    <p className='relative z-10 text-[36px] sm:text-[42px] font-medium w-full sm:w-[440px] text-right '>{workTogether}</p>

                </div>

                <div className='text-right mt-10 md:text-left '>
                    <p className='text-xl font-medium text-[#1769FF] mb-1'>{f_github}</p>
                    <p className='text-xl font-medium mb-1'>{f_blog}</p>
                    <p className='text-xl font-medium text-[#0077B5] mb-1'>{f_linkedin}</p>
                    <p className='text-xl font-medium text-[#AF0C48] mb-1'>{f_email}</p>
                </div>
            </div>
        </div>


    )
}

export default Footer