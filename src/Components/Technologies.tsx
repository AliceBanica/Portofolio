import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import imgReact from '../Images/react.png';
import imgHtml from '../Images/html.png';
import imgTypescript from '../Images/typescript.png';
import imgJavascript from '../Images/javascript.png';
import imgCss from '../Images/css3.png';
import imgGit from '../Images/git.png';
import imgGitblack from '../Images/github-black.png';
import './Technologies.css';

const githubTech = 'github    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, provident!';
const gitTech = ' git    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel, aperiam inventore maiores tenetur nam!'
const htmlTech ='html    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, vitae?';
const cssTech = 'css     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, facilis.';
const typeScriptTech = 'type     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae.';
const javaScriptTech = 'javas        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis.';
const reactTech = 'reacttt    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, at!';
const usedTechnologies = 'Used Technologies: ';




const Technologies = () => {
    const [text, setText] = useState<string>('');
    const defaultText = text === '';
    const isgithubTechActive = text === 'githubDescription';
    const isGitTechActive = text === 'gitDescription';
    const isHtmlTechActive = text === 'htmlDescription';
    const isCssTechActive = text === 'cssDescription';
    const isTypeScriptTechActive = text === 'typeScriptDescription';
    const isJavaScriptTechActive = text === 'javaScriptDescription';
    const isReactTechActive = text === 'reactDescription';

    const TechInfo = (props:any) =>{
    return (
            <div className={clsx('tech-info', isgithubTechActive && 'info-box-style-github', isGitTechActive && 'info-box-style-git', isHtmlTechActive && 'info-box-style-html', isCssTechActive && 'info-box-style-css', isTypeScriptTechActive && 'info-box-style-typeScript', isJavaScriptTechActive && 'info-box-style-javaScript', isReactTechActive && 'info-box-style-react' )}>Used technologies 
           
            </div>
           
        )
}

    const handleClickGithub= () => {
        setText('githubDescription');
    }

    const handleClickGit= () => {
        setText('gitDescription');
    }

    const handleClickHTML= () => {
        setText('htmlDescription');
    }

    const handleClickCSS= () => {
        setText('cssDescription');
    }

    const handleClickTypeScript= () => {
        setText('typeScriptDescription');
    }

    const handleClickJavaScript= () => {
        setText('javaScriptDescription');
    }

    const handleClickReact= () => {
        setText('reactDescription');
    }



    return (
        <section>
            <div className='section-1'>
                <ul className='used-technologies' id='technologies'>
                    <li>
                        <img className='about-github-black' src={imgGitblack} alt="" onClick={handleClickGithub} />
                    </li>
                    <li>
                        <img className='about-git' src={imgGit} alt=""  onClick={handleClickGit}/>
                    </li>
                    <li>
                        <img className='about-html' src={imgHtml} alt=""  onClick={handleClickHTML}/>
                    </li>
                    <li>
                        <img src={imgCss} alt="" onClick={handleClickCSS} />
                    </li>
                    <li>
                        <img src={imgTypescript} alt="" onClick={handleClickTypeScript} />
                    </li>
                    <li>
                        <img className='about-javascript' src={imgJavascript} alt="" onClick={handleClickJavaScript} />
                    </li>
                    <li>
                        <img className='about-react' src={imgReact} alt=""  onClick={handleClickReact}/>
                    </li>
                </ul>
                {defaultText && <TechInfo message={usedTechnologies}/>}
                {isgithubTechActive && <TechInfo message={githubTech}/>}
                {isGitTechActive && <TechInfo message={gitTech}/>}
                {isHtmlTechActive && <TechInfo message={htmlTech}/>}
                {isCssTechActive && <TechInfo message={cssTech}/>}
                {isTypeScriptTechActive && <TechInfo message={typeScriptTech}/>}
                {isJavaScriptTechActive && <TechInfo message={javaScriptTech}/>}
                {isReactTechActive && <TechInfo message={reactTech}/>}
            </div>
        </section>
    )
}

export default Technologies
