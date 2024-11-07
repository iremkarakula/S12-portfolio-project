import React from 'react'
import textData from '../data'
import imgcom from "../assets/f246155782db0594c00c688cdbf27f80.png"
import { useTheme } from '../contexts/themeContext';
import imgp from "../assets/online-web-design.jpg";



function Projects() {
    const { projects, randomJokes, areYouBored, lorem3, lorem4, viewGit, goApp } = textData.en.projects;
    const { bgColor2, textColor, profileCard, projectCard1, projectCard2 } = useTheme();


    return (
        <div className={`w-full  m-auto  ${bgColor2} ${textColor}`}>
            <div className='w-4/5  m-auto lg:w-[900px] py-14 '>
                <h2 className=' text-5xl text-center font-medium mb-16'>{projects}</h2>
                <div className='flex flex-col items-center gap-20 lg:flex-row lg:items-start lg:justify-center lg:gap-20'>
                    <div className={`xs:w-[415px]  ${projectCard1} p-10 rounded-lg xs:h-[550px] lg:h-[620px] relative w-80 h-[550px]`}>
                        <h3 className='text-3xl font-playfair'>{randomJokes}</h3>
                        <p className='text-base my-5'>{lorem3}</p>
                        <div className='flex flex-wrap gap-2 w-60 '>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`} >react</p>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`}>vercel</p>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`}>axios</p>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`}>router</p>
                        </div>
                        <div className='font-semibold flex justify-between my-6'>
                            <p className='text-lg w-1/2 '>{viewGit}</p>
                            <p className='text-lg w-1/2 text-right'>{goApp}</p>
                        </div>

                        <img src={imgcom} className='absolute -bottom-8 left-1 z-[10]' />

                        <img src={imgp} className='absolute xs:bottom-2 xs:right-14  xs:w-[295px] xs:h-[185px] w-[234px] h-[160px] -bottom-4 right-10' />

                    </div>
                    <div className={`xs:w-[415px]  ${projectCard2} p-10 rounded-lg xs:h-[620px] relative w-80 h-[640px]`}>
                        <h3 className='text-3xl font-playfair'>{areYouBored}</h3>
                        <p className='text-base my-5'>{lorem4}</p>
                        <div className='flex flex-wrap w-60 gap-2'>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`} >react</p>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`} >redux</p>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`} >axios</p>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`} >router</p>
                            <p className={`text-base rounded-3xl py-1 px-4 ${profileCard}`} >vercel</p>
                        </div>
                        <div className='font-semibold flex justify-between my-6 '>
                            <p className='text-lg w-1/2 '>{viewGit}</p>
                            <p className='text-lg w-1/2 text-right'>{goApp}</p>
                        </div>
                        <img src={imgcom} className='absolute -bottom-9 left-1 z-[10]' />
                        <img src={imgp} className='absolute xs:bottom-1 xs:right-14  xs:w-[295px] xs:h-[185px] w-[234px] h-[160px] -bottom-4 right-10' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects