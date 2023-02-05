import React from 'react'
import './Animations.css'

const OceanAnimation = () =>{
 return (<div className="find-more-desc" id='animations'>
            <div className='fish-container'>
                <div className="fish-1" >
                    <div className="fish-body-1">
                        <div className="eye">
                            <div className="pupil"></div>
                        </div>
                    </div>
                    <div className="fin-1"></div>
                    <div className="fin-1 fin-bottom"></div>
                </div>
                <div className="fish-2" >
                    <div className="fish-body-2">
                        <div className="eye">
                            <div className="pupil"></div>
                        </div>
                    </div>
                    <div className="fin-2"></div>
                    <div className="fin-2 fin-bottom"></div>
                </div>
                 <div className="fish-3" >
                    <div className="fish-body-3">
                        <div className="eye">
                            <div className="pupil"></div>
                        </div>
                    </div>
                    <div className="fin-3"></div>
                    <div className="fin-3 fin-bottom"></div>
                </div>
            </div>
                

            <svg
                className="css-waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
            >
                <defs>
                <path
                    id="wave-pattern"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                ></path>
                </defs>
                <g className="animated-waves">
                <use href="#wave-pattern" x="48" y="0" fill="rgba(100,149,237,0.7"></use>
                <use href="#wave-pattern" x="48" y="1" fill="rgba(100,149,237,0.5)"></use>
                <use href="#wave-pattern" x="48" y="2" fill="rgba(100,149,237,0.3)"></use>
                <use href="#wave-pattern" x="48" y="3" fill="rgba(100,149,237,0.3)"></use>
                </g>
            </svg>
        </div>
  )
}

const Animations = () => {
    return (
        <section className='animations-section'>
            <div className='animations-container'>
                <OceanAnimation/>
            </div>
        </section>
    )

   
}

export default Animations
