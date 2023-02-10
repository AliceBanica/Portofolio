import React from 'react';
import './App.css';
import About from './Components/About';
import Animations from './Components/Animations';
import Contact from './Components/Contact';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='app'>
      <div className='top-side'>
        <Navbar/>
        <Intro/>
      </div>
      <Skills/>
      <About/>
      <Contact/>
      <Animations/>
    </div>
  );
}

export default App;
