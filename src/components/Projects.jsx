import React from 'react'
import textData from '../data'
import imgcom from "../assets/f246155782db0594c00c688cdbf27f80.png"

function Projects() {
    const { projects, randomJokes, areYouBored, lorem3, lorem4, viewGit, goApp } = textData.en.projects;
    return (
        <div className='w-4/5  m-auto lg:w-[900px] my-14 text-[#0A0A14]'>
            <h2 className=' text-5xl text-center font-medium mb-16'>{projects}</h2>
            <div className='flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-20'>
                <div className='lg:w-2/5 w-full'>
                    <h3 className='text-3xl'>{randomJokes}</h3>
                    <p className='text-base my-5'>{lorem3}</p>
                    <div className='flex flex-wrap gap-2 w-60 '>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4' >react</p>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>vercel</p>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>axios</p>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>router</p>
                    </div>
                    <div className='font-semibold flex justify-between my-5'>
                        <p className='text-lg'>{viewGit}</p>
                        <p className='text-lg'>{goApp}</p></div>
                    <img src={imgcom} alt="" className='w-80 ' />
                </div>
                <div className='lg:w-2/5 w-full mt-20 lg:mt-0'>
                    <h3 className='text-3xl'>{areYouBored}</h3>
                    <p className='text-base my-5'>{lorem4}</p>
                    <div className='flex flex-wrap w-60 gap-2'>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>react</p>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>redux</p>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>axios</p>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>router</p>
                        <p className='text-base bg-gray-500 rounded-3xl py-1 px-4'>vercel</p>
                    </div>
                    <div className='font-semibold flex justify-between my-5'>
                        <p className='text-lg'>{viewGit}</p>
                        <p className='text-lg'>{goApp}</p>
                    </div>
                    <img src={imgcom} alt="" className='w-80' />
                </div>
            </div>


        </div>
    )
}

export default Projects