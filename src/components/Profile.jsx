import React from 'react'
import textData from '../data'
import { useTheme } from '../contexts/themeContext';


function Profile() {
    const { profile, basicInformation, date, city, education, role, about, lorem1, lorem2, cityAnswer, dateAnswer, educationAnswer, roleAnswer } = textData.en.profile;

    const { bgColor, textColor, profileCard } = useTheme();

    return (
        <div className={`w-full  m-auto  ${bgColor} ${textColor} py-10 relative z-[-2] overflow-x-clip`}>
            <div className="w-28 h-28 bg-transparent border-[20px] border-[#EA2678] rounded-full absolute -right-14 -top-7"></div>
            <div className='w-4/5  m-auto lg:w-[900px] my-14'>

                <h2 className=' text-5xl text-center font-medium mb-16'>{profile}</h2>

                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    <div className={`p-10 rounded-lg w-full relative sm:w-96 ${profileCard}  `}>
                        <p className="absolute top-3 left-3 w-full h-full bg-[#525252]  rounded-lg opacity-50 z-[-1]"></p>
                        <h3 className='text-2xl font-normal text-[#EA2678] mb-5 font-playfair'>{basicInformation}</h3>
                        <div className='flex justify-between w-full gap-14 '>
                            <div className='font-semibold text-base  sm:text-lg '>
                                <p className='mb-2.5'>{date}</p>
                                <p className='mb-2.5'>{city}</p>
                                <p className='mb-2.5'>{education}</p>
                                <p className='mb-2.5'>{role}</p>
                            </div>
                            <div className='font-normal text-base  sm:text-lg  '>
                                <p className='mb-2.5'>{dateAnswer}</p>
                                <p className='mb-5'>{cityAnswer}</p>
                                <p className='mb-2.5'>{educationAnswer}</p>
                                <p className='mb-2.5'>{roleAnswer}</p>
                            </div>
                        </div>


                    </div>
                    <div className='pt-10 lg:p-10 rounded-lg flex flex-col text-left w-full lg:w-3/5 '>
                        <div className='relative'>
                            <p className="absolute w-24 h-5 bg-[#82BBFF]  rounded bottom-4 -left-3 z-[-1]"></p>
                            <h3 className='text-2xl font-normal mb-5 font-playfair'>{about}</h3>
                        </div>





                        <p className='font-normal text-base  sm:text-lg mb-5 '>{lorem1}</p>
                        <p className='font-normal text-base  sm:text-lg  '>{lorem2}</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Profile