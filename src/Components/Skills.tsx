import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import imgReact from '../Images/react.png';
import imgHtml from '../Images/html.png';
import imgTypescript from '../Images/typescript.png';
import imgJavascript from '../Images/javascript.png';
import imgCss from '../Images/css3.png';
import imgGit from '../Images/git.png';
import imgGitblack from '../Images/github-black.png';
import './Skills.css';

const Skills = () => {
    const [skillsClicked, setSkillsClicked] = useState<boolean>(false);

    const handleClickSkills = () =>{
        setSkillsClicked(!skillsClicked)
    }

    const TechInfo = () =>{
    return (
            <div className={clsx('tech-info', skillsClicked && 'tech-info-clicked', !skillsClicked && 'tech-info-not-clicked')}>
                <table className={clsx('table-tech', skillsClicked && 'table-tech-clicked')}>
                    <tbody>
                        <tr>
                            <th>Skills:</th>
                        </tr>
                        <tr>
                            <td>&#11049; React</td>
                            <td>&#11049; JavaScript</td>
                            <td>&#11049; CSS</td>
                            <td>&#11049; Github</td>
                        </tr>
                        <tr>
                            <td>&#11049; Typescript</td>
                            <td>&#11049; HTML</td>
                            <td>&#11049; Git</td>
                        </tr>
                    </tbody>
                </table>
                <div className='table-detail'></div>
            </div>
        )
    }


    return (
        <section>
            <div className={clsx('section-1', skillsClicked && 'section-1-clicked', !skillsClicked && 'section-1-not-clicked')}  onClick={handleClickSkills}>
                <ul className={clsx('used-technologies', skillsClicked && 'used-technologies-clicked', !skillsClicked && 'used-technologies-not-clicked')} id='skills'>
                    <li>
                        <img className='about-github-black' src={imgGitblack} alt="" />
                    </li>
                    <li>
                        <img className='about-git' src={imgGit} alt="" />
                    </li>
                    <li>
                        <img className='about-html' src={imgHtml} alt="" />
                    </li>
                    <li>
                        <img src={imgCss} alt=""/>
                    </li>
                    <li>
                        <img src={imgTypescript} alt=""  />
                    </li>
                    <li>
                        <img className='about-javascript' src={imgJavascript} alt="" />
                    </li>
                    <li>
                        <img className='about-react' src={imgReact} alt="" />
                    </li>
                </ul>
                <div className={clsx('tech-hover', skillsClicked && 'tech-hover-clicked')} >Hover for skills</div>
                <div className={clsx('tech-pin', skillsClicked && 'tech-pin-clicked')} >Click to pin</div>
                <div className={clsx('tech-pinned', skillsClicked && 'tech-pinned-clicked')} >Pinned</div>
                <TechInfo/>
            </div>
        </section>
    )
}

export default Skills
