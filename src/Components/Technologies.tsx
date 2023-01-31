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
import './Technologies.css';

const Technologies = () => {

    const TechInfo = () =>{
    return (
            <div className={'tech-info'}>
                <table className='table-tech'>
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
                </table>
            </div>
        )
}


    return (
        <section>
            <div className='section-1'>
                <ul className='used-technologies' id='technologies'>
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
                <div className='tech-hover'>Hover for skills</div>
                <TechInfo/>
            </div>
        </section>
    )
}

export default Technologies
