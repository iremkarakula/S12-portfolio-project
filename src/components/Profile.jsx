import React from 'react'
import textData from '../data'

function Profile() {
    const { profile, basicInformation, date, city, education, role, about, lorem1, lorem2, cityAnswer, dateAnswer, educationAnswer, roleAnswer } = textData.en.profile;
    return (
        <div>
            <h2>{profile}</h2>
            <div>
                <h3>{basicInformation}</h3>
                <p><span>{date}</span>{dateAnswer}</p>
                <p><span>{city}</span>{cityAnswer}</p>
                <p><span>{education}</span>{educationAnswer}</p>
                <p><span>{role}</span>{roleAnswer}</p>
            </div>
            <div>
                <h3>{about}</h3>
                <p>{lorem1}</p>
                <p>{lorem2}</p>
            </div>
        </div>
    )
}

export default Profile