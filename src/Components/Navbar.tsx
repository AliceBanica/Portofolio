import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-left">
          <span>Alice Banica</span>
        </div>
        <div className="nav-right">
            <ul className='nav-list'>
              <li>About me</li>
              <li>Technologies</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar