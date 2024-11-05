import React from 'react'
import textData from '../data'
import imgcom from "../assets/f246155782db0594c00c688cdbf27f80.png"

function Projects() {
    const { projects, randomJokes, areYouBored, lorem3, lorem4, viewGit, goApp } = textData.en.projects;
    return (
        <div>
            <h2>{projects}</h2>
            <div>
                <h3>{randomJokes}</h3>
                <p>{lorem3}</p>
                <div><p>react</p><p>vercel</p><p>axios</p><p>router</p></div>
                <div><p>{viewGit}</p><p>{goApp}</p></div>
                <img src={imgcom} alt="" />
            </div>
            <div>
                <h3>{areYouBored}</h3>
                <p>{lorem4}</p>
                <div><p>react</p><p>redux</p><p>axios</p><p>router</p><p>vercel</p></div>
                <div><p>{viewGit}</p><p>{goApp}</p></div>
                <img src={imgcom} alt="" />
            </div>

        </div>
    )
}

export default Projects