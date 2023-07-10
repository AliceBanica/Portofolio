import React from 'react';
import './App.css';
import About from './Components/About';
import Animations from './Components/Animations';
import Contact from './Components/Contact';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import { SkillsProvider } from './Context';
import Loading from './Components/Loading';
import Projects from './Components/Projects';
function App() {


  return (
    <SkillsProvider>
      <Loading />
      <div className='app'>
        <div className='top-side'>
          <Navbar />
          <Intro />
        </div>
        <Skills />
        <About />
        <Projects />
        <Animations />
        <Contact />

      </div>
    </SkillsProvider>
  );
}

export default App;
