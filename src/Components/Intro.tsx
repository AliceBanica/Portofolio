import React from 'react'
import './Intro.css';
import linkedin from '../Images/linked.png';
import github from '../Images/github.png'
const Intro = () => {
  return (
    <div className='intro'>
      <span className='title'>Junior Frontend Developer</span>
      <div className='intro-images'>
        <a href="https://www.linkedin.com/feed/">
          <img className='intro-links linkedin'  src={linkedin} alt="" />
          <span className='span-linkedin'>Linkedin</span>
        </a>
        <a className='a-github' href="https://github.com/">
          <img className='intro-links github' src={github} alt="" />
          <span className='span-github'>Github</span>
        </a>
      </div>
    </div>
  )
}

export default Intro
