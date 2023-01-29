import React from 'react';
import './App.css';
import About from './Components/About';
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
    </div>
  );
}

export default App;
