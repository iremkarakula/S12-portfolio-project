import React from 'react'
import textData from '../data'
import react from "../assets/df5e54b9d53c349009ab14f28de46a4f.png";
import js from "../assets/3888c5ad5ffa3a6dba3961306694fe6c.png"
import redux from "../assets/8c65fa3208025f2cb5752ee876ab6167.png"
import node from "../assets/0c5668f405e1025606253688b8c116ff.png"
import vs from "../assets/0b97e8a7e78c66e3ee35178c9339b3df.png"
import figma from "../assets/62c7a95c81c85e20a72e7dd7b1642ddf (1).png"


const skillsImages = [js, react, redux, node, vs, figma];
const skillsNames = ["JAVASCRIPT", "REACT", "REDUX", "NODE", "VS CODE", "FIGMA"];
function Skills() {
    const { skill_header } = textData.en.skills;


    return (
        <div className='bg-black'>
            <h2>{skill_header}</h2>
            {skillsImages.map((image, index) => {
                return (<div><img src={image} width={30} height={30} /> <p>{skillsNames[index]}</p></div>)
            })
            }

        </div>
    )
}

export default Skills