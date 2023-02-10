import React from 'react'
import './Navbar.css';
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-left">
            <span>Alice</span>
            <span>Banica</span>
        </div>
        <div className="nav-right">
            <ul className='nav-list'>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
              <a href="#animations">
                <li>Animations</li>
              </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar