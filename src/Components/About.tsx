import React from 'react';
import {useState , useEffect} from 'react';
import clsx from 'clsx';
import './About.css';
import location from '../Images/location.png';


const Experience = ({newHeight}:{newHeight:any}) =>{
    const [infoClicked, setInfoClicked] = useState<number>(0);
    const [showInfoDiv, setShowInfoDiv] = useState<boolean>(false);

    let expMap = new Map([[1, 'school'],[2,'michelin'],[3,'master'], [4,'philip'], [5,'bachelor']]);
    let expDescMap = new Map([['school', false],['michelin', false], ['master', false], ['philip', false], ['bachelor', false]]);

    const resetExpDescMap = ()=>{
        expDescMap.forEach((v, k) => v = false);
    }
    

    const handleClickState=(param:any) =>{
        setInfoClicked(param);
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
                                <div className='about-see-more about-see-more-first' onClick={()=>{handleClickState(1)}}>?</div> 
                                Scoala Informala de IT - Front-end Web Development
                                <p className='experience-period'>period</p>
                            </li>
                            <li className='not-li'>&nbsp;</li>
                            <li className='third-li'>
                                <div className='about-see-more about-see-more-third'  onClick={()=>{handleClickState(3)}}>?</div> 
                                Master's Degree - Applied Informatics in Electrical Engineering (UPB)
                                <p className='experience-period'>period</p>
                            </li>
                            <li className='not-li'>&nbsp;</li>
                            <li className='fifth-li'>
                                <div className='about-see-more  about-see-more-fifth' onClick={()=>{handleClickState(5)}}>?</div> 
                                Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)
                                <p className='experience-period'>period</p>
                            </li> 
                        </ul>
                    </div>
                    <div className='experience-right'>
                        <ul className='bar'>
                            <li className='not-li'>&nbsp;</li>
                            <li>
                                <div className='about-see-more  about-see-more-second' onClick={()=>{handleClickState(2)}}>?</div> 
                                Quality Engineer - Michelin
                                <p className='experience-period period-right'>period</p>
                            </li>
                            <li className='not-li'>&nbsp;</li>
                            <li>
                                <div className='about-see-more  about-see-more-fourth' onClick={()=>{handleClickState(4)}}>?</div> 
                                Manufacturing Trainee - Philip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Morris Romania
                                <p className='experience-period period-right'>period</p>
                            </li>
                            <li className='fifth-li not-li'>&nbsp;</li> 
                        </ul>
                    </div>
                </div>
                
                {showInfoDiv && <ExperienceInfo idInfo = {infoClicked} message = {expMap.get(infoClicked)} showInfo = {showInfoDiv}/>}
            </section>
}

const ExperienceInfo = (props:any) =>{
    // return <div className='experience-more-info'>{props.idInfo} {props.message}</div>
    // return <div className='experience-more-info'>
    //         {props.idInfo} {props.message}
    //     </div>

        return <div className={clsx('experience-more-info', props.showInfo && 'show-div')}>
            {props.idInfo} {props.message}
        </div>
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
    const [heightState, setHeightState] = useState<boolean>(false);

    const newHeight = (heightState:boolean) =>{
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
                    {/* <div className='description-right'> */}
                    <div className={clsx('description-right', heightState && 'more-info-active' )}> 
                        {isAboutMeActive && <AboutMe/>}
                        {isMyExperienceActive && <Experience newHeight= {newHeight}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
