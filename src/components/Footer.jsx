import React from 'react'
import textData from '../data'

function Footer() {
    const { workTogether, f_github, f_blog, f_linkedin, f_email } = textData.en.footer;
    return (
        <div>
            <div>{workTogether}</div>
            <div>
                <p>{f_github}</p>
                <p>{f_blog}</p>
                <p>{f_linkedin}</p>
                <p>{f_email}</p>
            </div>
        </div>
    )
}

export default Footer