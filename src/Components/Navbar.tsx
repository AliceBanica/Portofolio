import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-left">
            <span>Alice</span>
            <span>Banica</span>
        </div>
        <div className="nav-right">
            <ul className='nav-list'>
              <a href="#technologies">
                <li>Skills</li>
              </a>
              <a href="#about">
              <li>About</li>
              </a>
              <a href="#animations">
              <li>Animations</li>
              </a>
              <a href="">
              <li>Contact</li>
              </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar