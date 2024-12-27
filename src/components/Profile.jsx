import React from 'react'
import textData from '../data'
import { useTheme } from '../contexts/ThemeContext';


function Profile() {


    const { bgColor, textColor, profileCard, language } = useTheme();

    const { profile, basicInformation, date, city, education, role, about, lorem1, lorem2, cityAnswer, dateAnswer, educationAnswer, roleAnswer } = textData[language].profile;

    return (
        <div className={`w-full  ${bgColor} ${textColor} py-14 relative z-[-2] overflow-x-clip px-4`}>
            <div className="w-28 h-28 bg-transparent border-[20px] border-[#EA2678] rounded-full absolute -right-14 -top-7">

            </div>
            <div className='w-full sm:w-4/5 lg:w-[900px] m-auto'>

                <h2 className=' text-5xl text-center font-medium mb-16'>{profile}</h2>

                <div className='flex flex-col  lg:flex-row gap-8'>
                    <div className={`m-auto p-6 sm:p-10 rounded-lg relative sm:w-96 ${profileCard} `}>
                        <p className="absolute top-3 left-3 w-full h-full bg-[#525252]  rounded-lg opacity-50 z-[-1]"></p>
                        <h3 className='text-2xl font-normal text-[#EA2678] mb-5 font-playfair'>{basicInformation}</h3>
                        <div className='flex flex-col gap-4 font-semibold text-base  sm:text-lg'>

                            <div className='flex'>
                                <p className='w-32' >{date}</p>
                                <p className='font-light'>{dateAnswer}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-32'>{city}</p>
                                <p className='font-light'>{cityAnswer}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-32'>{education}</p>
                                <p className='font-light w-36'>{educationAnswer}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-32'>{role}</p>
                                <p className='font-light'>{roleAnswer}</p>
                            </div>






                        </div>


                    </div>
                    <div className='pt-10 lg:p-10 rounded-lg flex flex-col text-left w-full lg:w-3/5 px-4 text-wrap'>
                        <div className='relative'>
                            <p className="absolute w-24 h-5 bg-[#82BBFF]  rounded bottom-4 -left-3 z-[-1]"></p>
                            <h3 className='text-2xl font-normal mb-5 font-playfair'>{about}</h3>
                        </div>





                        <p className='font-normal text-base  sm:text-lg mb-5 '>{lorem1}</p>
                        <p className='font-normal text-base  sm:text-lg  '>{lorem2}</p>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default Profile