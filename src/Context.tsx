import React, { createContext, useContext, useRef, useState } from 'react';

const SkillsContext = createContext<any>(false);

const SkillsProvider = ({children}: any) =>{
    const skillsRef = useRef<any>('');
    const scrollToSkills = () =>{
        skillsRef.current.scrollIntoView();
    }


    const [skillsClicked, setSkillsClicked] = useState<boolean>(false);
    
    const handleClickSkills = () =>{
        setSkillsClicked(!skillsClicked);
    }


    return <>
        <SkillsContext.Provider value = {{ handleClickSkills, skillsClicked, setSkillsClicked,skillsRef, scrollToSkills}}>
            {children}
        </SkillsContext.Provider>
    </>
}

export const useGlobalContext = () => {
    return useContext(SkillsContext);
}

export {SkillsContext, SkillsProvider}