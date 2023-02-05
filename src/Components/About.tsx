import React from 'react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import './About.css';
import location from '../Images/location.png';


const Experience = ({ newHeight }: { newHeight: any }) => {
    const [infoClicked, setInfoClicked] = useState<number>(0);
    const [showInfoDiv, setShowInfoDiv] = useState<boolean>(false);
    const [expTitle, setExpTitle] = useState<number>(0);

    let ScoalaITDesc = () =>{
        return <div >
            <ul  className='exp-desc-ul'>
                <li>Build Front-end part of websites using HTML, CSS, JavaScript;</li>
                <li>Learn fundamental programming knowledge (OOP, Git);</li>
                <li>React Basics.</li>
            </ul>
        </div>
    }
    let MichelinDesc = () => {
        return <div>
            <ul  className='exp-desc-ul'>
                <li>Optimize the process of obtaining and guaranteeing quality.</li>
                <li>Use tools (Fish bone diagram, 5 Why Analysis) in order to find the root cause of a problem;</li>
                <li>Identify and analyze possible risks and defects.</li>
            </ul>
        </div>
    }
    let MasterDesc = () => {
        return <div>
            <ul  className='exp-desc-ul' >
                <li>Solv specific research problems, with the use of specialized software products / devices for applications in Electrical Engineering; </li>
                <li className='exp-hidden'>&nbsp;</li>
            </ul>
        </div>
    }
    let TraineeDesc = () => {
        return <div>
            <ul  className='exp-desc-ul'>
                <li>Train operators for specific tasks.</li>
                <li>Take part in the improvement of performance indicators process using specific tools;</li>
                <li>Create templates for trainings;</li>
            </ul>
        </div>
    }
    let BachelorDesc = () => {
        return <div>
            <ul  className='exp-desc-ul' >
                <li>Apply fundamental knowledge in electrotechnics, analyzing and designing electrical installations, equipment and machines.</li>
                <li className='exp-hidden'>&nbsp;</li>
            </ul> 
        </div>
    }

    let expTitleMap = new Map([[1, 'Scoala Informala de IT - Front-end Web Development'],
                                [2, 'Quality Engineer - Michelin'], 
                                [3, `Master's Degree - Applied Informatics in Electrical Engineering (UPB)`], 
                                [4, 'Manufacturing Trainee - Philip Morris Romania'], 
                                [5, `Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)`]]);
    // let expMap = new Map([[1, 'school desc'], 
    //                         [2, 'michelin'], 
    //                         [3, 'master'], 
    //                         [4, 'philip'], 
    //                         [5, 'bachelor']]);
    let expMap = new Map();
    expMap.set(1, <ScoalaITDesc/>);
    expMap.set(2, <MichelinDesc/>);
    expMap.set(3, <MasterDesc/>);
    expMap.set(4, <TraineeDesc/>);
    expMap.set(5, <BachelorDesc/>);
    let expDescMap = new Map([['school', false], ['michelin', false], ['master', false], ['philip', false], ['bachelor', false]]);

    const resetExpDescMap = () => {
        expDescMap.forEach((v, k) => v = false);
    }


    const handleClickState = (param: any) => {
        setInfoClicked(param);
        setExpTitle(param);
        console.log(expTitleMap.get(param))
        const newHeightDiv = true;
        setShowInfoDiv(true);
        newHeight(newHeightDiv);

        // let selectedExp:any = expMap.get(param); 

        // if(!expDescMap.get(selectedExp)){
        //     expDescMap.set(selectedExp,true);
        //     console.log(expDescMap.get(selectedExp))
        //     console.log(expDescMap);
        //     resetExpDescMap();
        //     const newHeightDiv = true;  
        //     setShowInfoDiv(true);
        //     newHeight(newHeightDiv);
        // } else {
        //     expDescMap.set(selectedExp, false);
        //     const newHeightDiv = false;  
        //     setShowInfoDiv(false);
        //     newHeight(newHeightDiv);
        // }
    }

    return <section className='experience-container'>
        <div className='experience-info'>
            <div className='experience-left'>
                <ul className='experience-list' >
                    <li>
                        <div className='about-see-more about-see-more-first' onClick={() => { handleClickState(1) }}>?</div>
                        Scoala Informala de IT - Front-end Web Development
                        <p className='experience-period'>Jun 2021 - Oct 2021</p>
                    </li>
                    <li className='not-li'>&nbsp;</li>
                    <li className='third-li'>
                        <div className='about-see-more about-see-more-third' onClick={() => { handleClickState(3) }}>?</div>
                        Master's Degree - Applied Informatics in Electrical Engineering (UPB)
                        <p className='experience-period'>2020 - 2022</p>
                    </li>
                    <li className='not-li'>&nbsp;</li>
                    <li className='fifth-li'>
                        <div className='about-see-more  about-see-more-fifth' onClick={() => { handleClickState(5) }}>?</div>
                        Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)
                        <p className='experience-period'>2016-2020</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='bar'>
                    <li className='not-li'>&nbsp;</li>
                    <li>
                        <div className='about-see-more  about-see-more-second' onClick={() => { handleClickState(2) }}>?</div>
                        Quality Engineer - Michelin
                        <p className='experience-period period-right'>Oct 2021 - Present</p>
                    </li>
                    <li className='not-li'>&nbsp;</li>
                    <li>
                        <div className='about-see-more  about-see-more-fourth' onClick={() => { handleClickState(4) }}>?</div>
                        Manufacturing Trainee - Philip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Morris Romania
                        <p className='experience-period period-right'>Aug 2020 - Jul 2021</p>
                    </li>
                    <li className='fifth-li not-li'>&nbsp;</li>
                </ul>
            </div>
        </div>

        {showInfoDiv && <ExperienceInfo message={expMap.get(infoClicked)} showInfo={showInfoDiv} title = {expTitleMap.get(expTitle)} />}
    </section>
}

const ExperienceInfo = (props: any) => {

    return <div className={clsx('experience-more-info', props.showInfo && 'show-div')}>
        <p className='exp-title'>{props.title}</p>
        <p className='exp-desc'>{props.message}</p>
        <div className='exp-detail'></div>
         
    </div>
}

const AboutMe = () => {
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
    const [heightState, setHeightState] = useState<boolean>(false);

    const newHeight = (heightState: boolean) => {
        setHeightState(heightState);
    }

    const handleClickAbout = () => {
        setText('aboutMeDescription');
        const newHeightDiv = false;
        newHeight(newHeightDiv);
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
                    <div className={clsx('description-right', heightState && 'more-info-active')}>
                        
                        {isAboutMeActive && <AboutMe />}
                        {isMyExperienceActive && <Experience newHeight={newHeight} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
