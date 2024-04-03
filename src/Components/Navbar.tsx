import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import "./Navbar.css";
import linkedin from "../Images/linked.png";
import github from "../Images/github.png";

export const Navbar = () => {
  const { handleClickSkills, scrollToSkills } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const githubLink = "https://github.com/AliceBanica";
  const linkedinLink = "linkedin.com/in/alice-banica";

  return (
    <div className="navbar">
      <div className="nav-left">
        <span>Alice</span>
        <span>Banica</span>
      </div>
      {/* <div className="nav-right" > */}
      <div className={`nav-right ${isOpen && "open"}`}>
        <ul className={`nav-list ${isOpen && "open"}`}>
          <a href="#skills">
            <li
              onClick={() => {
                handleClickSkills();
                scrollToSkills();
              }}
            >
              Skills
            </li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          {/* <a href="#animations">
            <li>Animations</li>
          </a> */}
          <a href="#contact">
            <li>Contact</li>
          </a>
          <div className="nav-info-links">
            <a href={linkedinLink}>
              <img className="intro-links linkedin" src={linkedin} alt="" />
            </a>
            <a className="a-github" href={githubLink}>
              <img className="intro-links github" src={github} alt="" />
            </a>
          </div>
        </ul>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
