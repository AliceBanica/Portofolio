import React from 'react'
import './Animations.css'


const AnimationsTitle = () => {
    return <div className="animations-title">
        <span className="letter a" style = { {["--letter" as any]: 1 }}>A</span>
        <span className="letter n" style = { {["--letter" as any]: 2 }}>N</span>
        <span className="letter i" style = { {["--letter" as any]: 3 }}>I</span>
        <span className="letter m" style = { {["--letter" as any]: 4 }}>M</span>
        <span className="letter a" style = { {["--letter" as any]: 5 }}>A</span>
        <span className="letter t" style = { {["--letter" as any]: 6 }}>T</span>
        <span className="letter i" style = { {["--letter" as any]: 7 }}>I</span>
        <span className="letter o" style = { {["--letter" as any]: 8 }}>O</span>
        <span className="letter n" style = { {["--letter" as any]: 9 }}>N</span>
        <span className="letter s" style = { {["--letter" as any]: 10 }}>S</span>
    </div>
}
const OceanAnimation = () =>{
 return (<div className="find-more-desc">
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
                

            <div className="sun-container"></div>
            
            <div className="cloud-container-1">
                <div className='cloud-1 cloud-part-1'></div>
                <div className='cloud-1 cloud-part-2'></div>
                <div className='cloud-1 cloud-part-3'></div>
                <div className='cloud-1 cloud-part-4'></div>
                <div className='cloud-1 cloud-part-5'></div>
            </div>

            <div className="cloud-container-2">
                <div className='cloud-2 cloud-part-1'></div>
                <div className='cloud-2 cloud-part-2'></div>
                <div className='cloud-2 cloud-part-3'></div>
                <div className='cloud-2 cloud-part-4'></div>
                <div className='cloud-2 cloud-part-5'></div>
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
                <use href="#wave-pattern" x="48" y="1" fill="rgba(100,149,237,0.9)"></use>
                <use href="#wave-pattern" x="48" y="2" fill="rgba(100,149,237,0.7)"></use>
                <use href="#wave-pattern" x="48" y="3" fill="rgba(100,149,237,0.5)"></use>
                <use href="#wave-pattern" x="48" y="4" fill="rgba(100,149,237,0.5)"></use>
                </g>
            </svg>
        </div>
  )
}

const BalloonsAnimation = () =>{
    
    return <div className='animation-balloon-container'> 
                
                <div className='balloons-container-3'>
                    <div className='color-b3-4 balloon-4'></div>
                    <div className='color-b3-5 balloon-5'></div>
                    <div className='color-b3-1 balloon-1'></div>
                    <div className='color-b3-2 balloon-2'></div>
                    <div className='color-b3-3 balloon-3'></div>
                    <div className='balloon-fire'></div>
                    <div className='balloon-cord-left'></div>
                    <div className='balloon-cord-right'></div>
                    <div className='color-b3-basket balloon-basket'></div>
                </div>
                <div className='mountains-container'>
                    <div className='mountain-3'></div>
                    <div className='mountain-4'></div>
                    <div className='mountain-1'></div>
                    <div className='mountain-2'></div>
                    <div className='mountain-6'></div>
                    <div className='mountain-5'></div>
                    
                </div>
                <div className='balloons-container-4'>
                    <div className='color-b4-4 balloon-4'></div>
                    <div className='color-b4-5 balloon-5'></div>
                    <div className='color-b4-1 balloon-1'></div>
                    <div className='color-b4-2 balloon-2'></div>
                    <div className='color-b4-3 balloon-3'></div>
                    <div className='balloon-fire'></div>
                    <div className='balloon-cord-left'></div>
                    <div className='balloon-cord-right'></div>
                    <div className='color-b4-basket balloon-basket'></div>
                </div>

                <div className='balloons-container-5'>
                    <div className='color-b5-4 balloon-4'></div>
                    <div className='color-b5-5 balloon-5'></div>
                    <div className='color-b5-1 balloon-1'></div>
                    <div className='color-b5-2 balloon-2'></div>
                    <div className='color-b5-3 balloon-3'></div>
                    <div className='balloon-fire'></div>
                    <div className='balloon-cord-left'></div>
                    <div className='balloon-cord-right'></div>
                    <div className='color-b5-basket balloon-basket'></div>
                </div>
                <div className='balloons-container-1'>
                    <div className='balloon-4'></div>
                    <div className='balloon-5'></div>
                    <div className='balloon-1'></div>
                    <div className='balloon-2'></div>
                    <div className='balloon-3'></div>
                    <div className='balloon-fire'></div>
                    <div className='balloon-cord-left'></div>
                    <div className='balloon-cord-right'></div>
                    <div className='balloon-basket'></div>
                </div>
                <div className="cloud-container-balloons-1">
                    <div className='cloud-balloon cloud-part-b1'></div>
                    <div className='cloud-balloon cloud-part-b2'></div>
                    <div className='cloud-balloon cloud-part-b3'></div>
                    <div className='cloud-balloon cloud-part-b4'></div>
                    <div className='cloud-balloon cloud-part-b5'></div>
                </div>

                <div className="cloud-container-balloons-2">
                    <div className='cloud-balloon cloud2-part-b1'></div>
                    <div className='cloud-balloon cloud2-part-b2'></div>
                    <div className='cloud-balloon cloud2-part-b3'></div>
                    <div className='cloud-balloon cloud2-part-b4'></div>
                    <div className='cloud-balloon cloud2-part-b5'></div>
                </div>

                <div className='balloons-container-2'>
                    <div className='color-b2-4 balloon-4'></div>
                    <div className='color-b2-5 balloon-5'></div>
                    <div className='color-b2-1 balloon-1'></div>
                    <div className='color-b2-2 balloon-2'></div>
                    <div className='color-b2-3 balloon-3'></div>
                    <div className='balloon-fire'></div>
                    <div className='balloon-cord-left'></div>
                    <div className='balloon-cord-right'></div>
                    <div className='color-b2-basket balloon-basket'></div>
                </div>
                <div className="cloud-container-balloons-3">
                    <div className='cloud-balloon cloud-part-b1'></div>
                    <div className='cloud-balloon cloud-part-b2'></div>
                    <div className='cloud-balloon cloud-part-b3'></div>
                    <div className='cloud-balloon cloud-part-b4'></div>
                    <div className='cloud-balloon cloud-part-b5'></div>
                </div>

                <div className="cloud-container-balloons-4">
                    <div className='cloud-balloon cloud2-part-b1'></div>
                    <div className='cloud-balloon cloud2-part-b2'></div>
                    <div className='cloud-balloon cloud2-part-b3'></div>
                    <div className='cloud-balloon cloud2-part-b4'></div>
                    <div className='cloud-balloon cloud2-part-b5'></div>
                </div>
                <div className="cloud-container-balloons-5">
                    <div className='cloud-balloon cloud2-part-b1'></div>
                    <div className='cloud-balloon cloud2-part-b2'></div>
                    <div className='cloud-balloon cloud2-part-b3'></div>
                    <div className='cloud-balloon cloud2-part-b4'></div>
                    <div className='cloud-balloon cloud2-part-b5'></div>
                </div>
                
    </div>

}

const Animations = () => {
    return (
        <section className='animations-section-1' id='animations'>
                <div className='animations-section'>
                    <AnimationsTitle/>
                    <div className='animations-container'>
                        <OceanAnimation/>
                        <BalloonsAnimation/>
                        <p>More to come...</p>
                    </div>
                </div>
        </section>
    )

   
}

export default Animations
