import React from 'react'
import textData from '../data'

function Profile() {
    const { profile, basicInformation, date, city, education, role, about, lorem1, lorem2, cityAnswer, dateAnswer, educationAnswer, roleAnswer } = textData.en.profile;
    return (
        <div className='w-4/5  m-auto lg:w-[900px] my-14 text-[#0A0A14]'>
            <h2 className=' text-5xl text-center font-medium mb-16'>{profile}</h2>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='bg-gray-500 p-10 rounded-lg w-full sm:w-96'>
                    <h3 className='text-2xl font-normal text-[#EA2678] mb-5'>{basicInformation}</h3>
                    <div className='flex justify-between w-full gap-14'>
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
                    <h3 className='text-2xl font-normal mb-5'>{about}</h3>
                    <p className='font-normal text-base  sm:text-lg mb-5 '>{lorem1}</p>
                    <p className='font-normal text-base  sm:text-lg  '>{lorem2}</p>
                </div>
            </div>

        </div>
    )
}

export default Profile