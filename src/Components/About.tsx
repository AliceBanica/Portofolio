import React from 'react';
import {useState , useEffect} from 'react';
import clsx from 'clsx';
import './About.css';
import imgReact from '../Images/react.png';
import imgHtml from '../Images/html.png';
import imgTypescript from '../Images/typescript.png';
import imgJavascript from '../Images/javascript.png';
import imgCss from '../Images/css3.png';
import imgGit from '../Images/git.png';
import imgGitblack from '../Images/github-black.png';
import location from '../Images/location.png';

const Experience = () =>{
    return <section className='experience-container'>
        <div className='experience-info'>
            <div className='experience-left'>
                <ul className='experience-list' >
                    <li>Scoala Informala de IT - Front-end Web Development</li>
                    <li className='invisible'>-</li>
                    <li className='third-li'>Master's Degree - Applied Informatics in Electrical Engineering (UPB)</li>
                    <li className='invisible'>-</li>
                    <li className='fifth-li'>Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)</li> 
                </ul>
            </div>
            <div className='experience-right'>
                <ul className='bar'>
                    <li> </li>
                    <li>Quality Engineer - Michelin</li>
                    <li> </li>
                    <li>Manufacturing Trainee - Philip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Morris Romania</li>
                    <li className='fifth-li'> </li> 
                </ul>
            </div>
        </div>
    </section>
}

const AboutMe = () =>{
    return <div className='aboutme-container'>
        <h1>Alice Banica</h1>
        <div className='location-div'>
            <img className='location-icon' src={location} alt="" />
            <span>Bucharest</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad eos molestias obcaecati quibusdam officia, rerum corrupti magni ullam necessitatibus.</p>
    </div>
}

const About = () => {
    const [text, setText] = useState<string>('');
    const isAboutMeActive = text === 'aboutMeDescription' || text === '';
    const isMyExperienceActive = text === 'myExperienceDescription';

    

    const handleClickAbout = () => {
        setText('aboutMeDescription');
    }

    const handleClickExperience = () => {
        setText('myExperienceDescription');
    }

    return (
        <div className='about-container'>
            <div className='section-1'>
                <ul className='used-technologies'>
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
                        <img src={imgCss} alt="" />
                    </li>
                    <li>
                        <img src={imgTypescript} alt="" />
                    </li>
                    <li>
                        <img className='about-javascript' src={imgJavascript} alt="" />
                    </li>
                    <li>
                        <img className='about-react' src={imgReact} alt="" />
                    </li>
                </ul>
            </div>
            <div className='section-2'>
                <div className="description">
                    <div className='description-left'>
                        <p>Short description</p>
                        <ul className='description-points'>
                            <li>
                                <button className={clsx('btn-info', isAboutMeActive && "active")} onClick={handleClickAbout}>
                                    About Alice
                                </button>
                            </li>
                            <li>
                                <button className={clsx("btn-info", isMyExperienceActive && "active")} onClick={handleClickExperience}> 
                                    Past Experience 
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='description-right'>
                        {isAboutMeActive && <AboutMe/>}
                        {isMyExperienceActive && <Experience/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
