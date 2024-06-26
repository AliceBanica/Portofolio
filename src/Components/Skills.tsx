import React from "react";
import clsx from "clsx";
import { useState } from "react";
import imgVue from "../Images/vue.png";
import imgReact from "../Images/react.png";
import imgHtml from "../Images/html.png";
import imgTypescript from "../Images/typescript.png";
import imgJavascript from "../Images/javascript.png";
import imgCss from "../Images/css3.png";
import imgGit from "../Images/git.png";
import imgGitblack from "../Images/github-black.png";
import "./Skills.css";
import { useGlobalContext } from "../Context";

const Skills = () => {
  const { skillsClicked, setSkillsClicked, handleClickSkills, skillsRef } =
    useGlobalContext();

  const TechInfo = () => {
    return (
      <div
        className={clsx(
          "tech-info",
          skillsClicked && "tech-info-clicked",
          !skillsClicked && "tech-info-not-clicked"
        )}
      >
        <table
          className={clsx("table-tech", skillsClicked && "table-tech-clicked")}
        >
          <tbody className="table-skills">
            <tr>
              <th>Skills:</th>
            </tr>
            <tr className="table-row">
              <td className="table-line">&#11049; Vue.js</td>
              <td className="table-line">&#11049; TypeScript</td>
              <td className="table-line third-column">&#11049; Bootstrap</td>
              <td className="table-line">&#11049; HTML / CSS</td>
            </tr>
            <tr className="table-row">
              <td className="table-line">&#11049; React</td>
              <td className="table-line">&#11049; JavaScript</td>
              <td className="table-line third-column">&#11049; Tailwind</td>
              <td className="table-line">&#11049; Gatsby</td>
            </tr>
          </tbody>
        </table>
        <div className="table-detail"></div>
      </div>
    );
  };

  return (
    <section>
      <div
        className={clsx(
          "section-1",
          skillsClicked && "section-1-clicked",
          !skillsClicked && "section-1-not-clicked"
        )}
        onClick={handleClickSkills}
      >
        <ul
          ref={skillsRef}
          className={clsx(
            "used-technologies",
            skillsClicked && "used-technologies-clicked",
            !skillsClicked && "used-technologies-not-clicked"
          )}
          id="skills"
        >
          <li>
            <img className="about-github-black" src={imgVue} alt="" />
          </li>
          <li>
            <img className="about-react" src={imgReact} alt="" />
          </li>
          <li>
            <img src={imgTypescript} alt="" />
          </li>
          <li>
            <img className="about-javascript" src={imgJavascript} alt="" />
          </li>
          <li>
            <img className="about-github-black" src={imgGitblack} alt="" />
          </li>
          <li>
            <img className="about-git" src={imgGit} alt="" />
          </li>
          <li>
            <img className="about-html" src={imgHtml} alt="" />
          </li>
          <li>
            <img src={imgCss} alt="" />
          </li>
        </ul>
        <div
          className={clsx("tech-hover", skillsClicked && "tech-hover-clicked")}
        >
          Hover for skills
        </div>
        <div className={clsx("tech-pin", skillsClicked && "tech-pin-clicked")}>
          Click to pin
        </div>
        <div
          className={clsx(
            "tech-pinned",
            skillsClicked && "tech-pinned-clicked"
          )}
        >
          Pinned
        </div>
        <TechInfo />
      </div>
    </section>
  );
};

export default Skills;
