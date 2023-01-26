import React from 'react';
import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='app'>
      <div className='top-side'>
        <Navbar/>
        <Intro/>
      </div>
      <div>
        <span>Alice</span>
        <span>Alice</span>
        <span>Alice</span>

        <span>Alice</span>
        <span>Alice</span>
        <span>Alice</span>
        <span>Alice</span>
      </div>
    </div>
  );
}

export default App;
