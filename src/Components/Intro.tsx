import React from 'react'
import './Intro.css';
import linkedin from '../Images/linked.png';
import github from '../Images/github.png'
const Intro = () => {
  const githubLink = 'https://github.com/AliceBanica';
  const linkedinLink = 'http://www.linkedin.com/in/alice-banica';
  return (
    <div className='intro'>
      <span className='title'>Junior Frontend Developer</span>
      <div className='intro-images'>
        <a href={linkedinLink}>
          <img className='intro-links linkedin'  src={linkedin} alt="" />
          <span className='span-linkedin'>Linkedin</span>
        </a>
        <a className='a-github' href={githubLink}>
          <img className='intro-links github' src={github} alt="" />
          <span className='span-github'>Github</span>
        </a>
      </div>
    </div>
  )
}

export default Intro
