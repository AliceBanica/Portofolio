import React from 'react';
import './App.css';
import About from './Components/About';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='app'>
      <div className='top-side'>
        <Navbar/>
        <Intro/>
      </div>
      <About/>
    </div>
  );
}

export default App;
