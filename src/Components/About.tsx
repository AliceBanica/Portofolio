import React from 'react';
import {useState , useEffect} from 'react';
import clsx from 'clsx';
import './About.css';
import location from '../Images/location.png';


const Experience = () =>{

    let expMap = new Map([[1, 'school'],[2,'michelin'],[3,'master'], [4,'philip'], [5,'bachelor']]);

    const handleClickExp = (param:number) =>{
        console.log(expMap.get(param))
    }

    return <section className='experience-container'>
                <div className='experience-info'>
                    <div className='experience-left'>
                        <ul className='experience-list' >
                            <li>
                                <div className='about-see-more about-see-more-first' onClick={()=>handleClickExp(1)}>?</div> 
                                Scoala Informala de IT - Front-end Web Development
                                <p className='experience-period'>period</p>
                            </li>
                            <li>&nbsp;</li>
                            <li className='third-li'>
                                <div className='about-see-more about-see-more-third'  onClick={()=>handleClickExp(3)}>?</div> 
                                Master's Degree - Applied Informatics in Electrical Engineering (UPB)
                                <p className='experience-period'>period</p>
                            </li>
                            <li>&nbsp;</li>
                            <li className='fifth-li'>
                                <div className='about-see-more  about-see-more-fifth' onClick={()=>handleClickExp(5)}>?</div> 
                                Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)
                                <p className='experience-period'>period</p>
                            </li> 
                        </ul>
                    </div>
                    <div className='experience-right'>
                        <ul className='bar'>
                            <li>&nbsp;</li>
                            <li>
                                <div className='about-see-more  about-see-more-second' onClick={()=>handleClickExp(2)}>?</div> 
                                Quality Engineer - Michelin
                                <p className='experience-period period-right'>period</p>
                            </li>
                            <li>&nbsp;</li>
                            <li>
                                <div className='about-see-more  about-see-more-fourth' onClick={()=>handleClickExp(4)}>?</div> 
                                Manufacturing Trainee - Philip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Morris Romania
                                <p className='experience-period period-right'>period</p>
                            </li>
                            <li className='fifth-li'>&nbsp;</li> 
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
        <section className='about-container' id='about'>
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
        </section>
    )
}

export default About
