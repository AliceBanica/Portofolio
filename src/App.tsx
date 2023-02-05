import React from 'react';
import './App.css';
import About from './Components/About';
import Animations from './Components/Animations';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Technologies from './Components/Technologies';

function App() {
  return (
    <div className='app'>
      <div className='top-side'>
        <Navbar/>
        <Intro/>
      </div>
      <Technologies/>
      <About/>
      <Animations/>
    </div>
  );
}

export default App;
