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
                <li>Solve specific research problems, with the use of specialized software products / devices for applications in Electrical Engineering; </li>
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
   
    let expMap = new Map();
    expMap.set(1, <ScoalaITDesc/>);
    expMap.set(2, <MichelinDesc/>);
    expMap.set(3, <MasterDesc/>);
    expMap.set(4, <TraineeDesc/>);
    expMap.set(5, <BachelorDesc/>);

    const handleClickState = (param: any) => {
        setInfoClicked(param);
        setExpTitle(param);
        const newHeightDiv = true;
        setShowInfoDiv(true);
        newHeight(newHeightDiv);
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
                        <p className='experience-period'>Oct 2020 - Iul 2022</p>
                    </li>
                    <li className='not-li'>&nbsp;</li>
                    <li className='fifth-li'>
                        <div className='about-see-more  about-see-more-fifth' onClick={() => { handleClickState(5) }}>?</div>
                        Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)
                        <p className='experience-period'>Oct 2016 - Iul 2020</p>
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
                        Manufacturing Trainee - Philip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Morris Romania
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
        <p>Creative and curious person, passionate about nature and travel. I'm working as a Quality Engineer at Michelin and in my free time I practice coding and learn new technologies for pursuing my dream, on becoming a Web Developer.</p>
        <p>At the moment my most used technologies are React and TypeScript. My current goal is to improve my coding skills and be a part of a Software Development team.</p>

    </div>
}

const AboutMobile = ()=>{
    const [showInfoDivMich, setShowInfoDivMich] = useState<boolean>(false);
    const [showInfoDivTrainee, setShowInfoDivTrainee] = useState<boolean>(false);
    const [showInfoDivSchIT, setShowInfoDivSchIT] = useState<boolean>(false);
    const [showInfoDivMaster, setShowInfoDivMaster] = useState<boolean>(false);
    const [showInfoDivBach, setShowInfoDivBach] = useState<boolean>(false);
    let ScoalaITDesc = () =>{
        return <div className='desc-more-info-m'>
                    <ul  className='exp-desc-ul-m'>
                        <li>Build Front-end part of websites using HTML, CSS, JavaScript;</li>
                        <li>Learn fundamental programming knowledge (OOP, Git);</li>
                        <li>React Basics.</li>
                    </ul>
                </div>
    }
    let MichelinDesc = () => {
        return <div className='desc-more-info-m'>
                    <ul  className='exp-desc-ul-m'>
                        <li>Optimize the process of obtaining and guaranteeing quality.</li>
                        <li>Use tools (Fish bone diagram, 5 Why Analysis) in order to find the root cause of a problem;</li>
                        <li>Identify and analyze possible risks and defects.</li>
                    </ul>
                </div>
    }
    let MasterDesc = () => {
        return <div className='desc-more-info-m'>
                    <ul  className='exp-desc-ul-m' >
                        <li>Solve specific research problems, with the use of specialized software products / devices for applications in Electrical Engineering; </li>
                    </ul>
                </div>
    }
    let TraineeDesc = () => {
        return <div className='desc-more-info-m'>
                    <ul  className='exp-desc-ul-m'>
                        <li>Train operators for specific tasks.</li>
                        <li>Take part in the improvement of performance indicators process using specific tools;</li>
                        <li>Create templates for trainings;</li>
                    </ul>
                </div>
    }
    let BachelorDesc = () => {
        return <div className='desc-more-info-m'>
                    <ul  className='exp-desc-ul-m' >
                        <li>Apply fundamental knowledge in electrotechnics, analyzing and designing electrical installations, equipment and machines.</li>
                    </ul> 
                </div>
    }


    const handleClickState1 = () => {
        setShowInfoDivMich(!showInfoDivMich);
    }
    const handleClickState2 = () => {
        setShowInfoDivTrainee(!showInfoDivTrainee);
    }
    const handleClickState3 = () => {
        setShowInfoDivSchIT(!showInfoDivSchIT);
    }
    const handleClickState4 = () => {
        setShowInfoDivMaster(!showInfoDivMaster);
    }
    const handleClickState5 = () => {
        setShowInfoDivBach(!showInfoDivBach);
    }
    

    return <div className='section-mobile'>
            <div className="description-mobile">
                <p className='desc-title-mobile'>Short description</p>
                <p className='desc-category-m'>About me</p>
                {/* <h1>Alice Banica</h1> */}
                <div className='location-m'>
                    <img className='location-icon' src={location} alt="" />
                    <span>Bucharest</span>
                </div>
                <p className='desc-info-m'>Creative and curious person, passionate about nature and travel. I'm working as a Quality Engineer at Michelin and in my free time I practice coding and learn new technologies for pursuing my dream, on becoming a Web Developer.</p>
                <p className='desc-info-m'>At the moment my most used technologies are React and TypeScript. My current goal is to improve my coding skills and be a part of a Software Development team.</p>

                <p className='desc-category-m'>Past Experience</p>
                <p className='exp-category'>Jobs</p>
                <ul className='exp-jobs-list-m'>
                    <li>
                        <div className='exp-more-info-m info-second-m' onClick={() => { handleClickState1() }}>?</div>
                        <span>Quality Engineer - Michelin</span>
                        <p className='experience-period-m'>Oct 2021 - Present</p>
                        {/* {showInfoDiv && <ExperienceInfo message={expMap.get(infoClicked)} showInfo={showInfoDiv} title = {expTitleMap.get(expTitle)} />} */}
                        {showInfoDivMich && <MichelinDesc/>}
                    </li>
                    <li>
                        <div className='exp-more-info-m info-fourth-m' onClick={() => { handleClickState2() }}>?</div>
                        <span> Manufacturing Trainee - Philip Morris Romania</span>
                        <p className='experience-period-m'>Aug 2020 - Jul 2021</p>
                        {/* {showInfoDiv && <ExperienceInfo message={expMap.get(infoClicked)} showInfo={showInfoDiv} title = {expTitleMap.get(expTitle)} />} */}
                        {showInfoDivTrainee && <TraineeDesc/>}
                    </li>
                </ul>

                <p className='exp-category'>School</p>
                <ul className='exp-jobs-list-m'>
                    <li>
                        <div className='exp-more-info-m info-first-m' onClick={() => { handleClickState3() }}>?</div>
                        <span>Scoala Informala de IT - Front-end Web Development</span>
                        <p className='experience-period-m'>Jun 2021 - Oct 2021</p>
                        {/* {showInfoDiv && <ExperienceInfo message={expMap.get(infoClicked)} showInfo={showInfoDiv} title = {expTitleMap.get(expTitle)} />} */}
                        {showInfoDivSchIT && <ScoalaITDesc/>}
                    </li>
                    <li>
                         <div className='exp-more-info-m info-third-m' onClick={() => { handleClickState4() }}>?</div>
                        <span>Master's Degree - Applied Informatics in Electrical Engineering (UPB) </span>
                        <p className='experience-period-m'>Oct 2020 - Iul 2022</p>
                        {/* {showInfoDiv && <ExperienceInfo message={expMap.get(infoClicked)} showInfo={showInfoDiv} title = {expTitleMap.get(expTitle)} />} */}
                        {showInfoDivMaster && <MasterDesc/>}
                    </li>
                    <li>
                        <div className='exp-more-info-m info-fifth-m' onClick={() => { handleClickState5() }}>?</div>
                        <span>Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)</span>
                        <p className='experience-period-m'>Oct 2016 - Iul 2020</p>
                        
                        {/* {showInfoDiv && <ExperienceInfo message={expMap.get(infoClicked)} showInfo={showInfoDiv} title = {expTitleMap.get(expTitle)} />} */}
                        {showInfoDivBach && <BachelorDesc/>}
                    </li>
                </ul>
            </div>
            
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
                                    <span>About Alice </span>
                                </button>
                            </li>
                            <li>
                                <button className={clsx("btn-info", isMyExperienceActive && "active")} onClick={handleClickExperience}>
                                    <span className='past-exp-span'>Past Experience</span>
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
            <AboutMobile/>
        </section>
    )
}

export default About
