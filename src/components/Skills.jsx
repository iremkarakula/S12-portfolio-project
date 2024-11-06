import React from 'react'
import textData from '../data'
import react from "../assets/df5e54b9d53c349009ab14f28de46a4f.png";
import js from "../assets/3888c5ad5ffa3a6dba3961306694fe6c.png"
import redux from "../assets/8c65fa3208025f2cb5752ee876ab6167.png"
import node from "../assets/0c5668f405e1025606253688b8c116ff.png"
import vs from "../assets/0b97e8a7e78c66e3ee35178c9339b3df.png"
import figma from "../assets/62c7a95c81c85e20a72e7dd7b1642ddf (1).png"
import { useTheme } from '../contexts/themeContext';


const skillsImages = [js, react, redux, node, vs, figma];
const skillsNames = ["JAVASCRIPT", "REACT", "REDUX", "NODE", "VS CODE", "FIGMA"];
function Skills() {
    const { skill_header } = textData.en.skills;

    const { bgColor2, textColor2, textColor3 } = useTheme();


    return (
        <div className={`w-full  m-auto relative ${bgColor2} z-[-10] pb-20`}>

            <div className="w-[180px] h-[49px] bg-[#525252] rounded-full absolute -left-[90px] bottom-[5%] z-[-5] "></div>


            <div className='w-4/5  m-auto lg:w-[900px] py-14'>


                <h2 className={`${textColor3} text-5xl text-center font-medium mb-16`}>{skill_header}</h2>
                <div className='flex justify-center gap-10 flex-wrap'>
                    {skillsImages.map((image, index) => {
                        return (<div >
                            <img src={image} className='w-28 h-28 object-cover object-center' />
                            <p className={`${textColor2} text-lg  text-center pt-3`}>{skillsNames[index]}</p>
                        </div>)
                    })
                    }
                </div>
            </div>
        </div>

    )
}

export default Skills