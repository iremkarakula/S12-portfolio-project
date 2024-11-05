import React from 'react'
import textData from '../data'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import imgwoman from "../assets/b04fd1fa29a883e2f4b8b8577a5c82eb.png";
import { useTheme } from '../contexts/themeContext';

function Header() {


    const { theme, toggleTheme, changeLanguage, language, data } = useTheme();

    const { hi, description, currently, forr, projectInviteMe, freelancing, webDesign, pratamaiosi, dm, lm, lang1, lang2 } = textData[language].header;
    const currentTheme = theme ? lm : dm;

    return (
        <div>
            <div>
                <div><button onClick={toggleTheme}>button</button><p>{currentTheme}</p></div>
                <button onClick={changeLanguage}><span>{lang1}</span> <span>{lang2}</span></button>
            </div>
            <div>
                <div>
                    <h2>{hi}</h2>
                    <h1>{description}</h1>
                    <div><FaLinkedinIn /><FaGithub /></div>
                    <div>{currently} <span>{freelancing}</span> {forr} <span>{webDesign}</span> {projectInviteMe} <span> {pratamaiosi} </span>
                    </div>
                </div>
                <div>
                    <img src={imgwoman} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Header;