import React from 'react'
import './About.css';
import react from '../Images/react.png';
import html from '../Images/html.png';
import typescript from '../Images/typescript.png';
import javascript from '../Images/javascript.png';
import css from '../Images/css3.png';
import git from '../Images/git.png';
import gitblack from '../Images/github-black.png'
const About = () => {
  return (
    <div className='about-container'>
        <div className='section-1'>
            <ul className='used-technologies'>
                <li>
                    <img className='about-github-black' src={gitblack} alt="" />
                </li>
                <li>
                    <img className='about-git' src={git} alt="" />
                </li>
                <li>
                    <img className='about-html' src={html} alt="" />
                </li>
                <li>
                    <img src={css} alt="" />
                </li>
                <li>
                    <img src={typescript} alt="" />
                </li>
                <li>
                    <img className='about-javascript' src={javascript} alt="" />
                </li>
                <li>
                    <img className='about-react' src={react} alt="" />
                </li>
            </ul>
        </div>
        <div className='random'>
            random
        </div>
    </div>
  )
}

export default About
