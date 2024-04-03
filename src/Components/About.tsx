import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import "./About.css";
import location from "../Images/location.png";

let QuasdevDesc = () => {
  return (
    <div>
      <ul className="exp-desc-ul">
        {Jobs[0].description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};
let MichelinDesc = () => {
  return (
    <div>
      <ul className="exp-desc-ul">
        {Jobs[1].description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};
let TraineeDesc = () => {
  return (
    <div>
      <ul className="exp-desc-ul">
        {Jobs[2].description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

let ScoalaITDesc = () => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }} className="exp-desc-ul">
        {Education[0].description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};
let MasterDesc = () => {
  return (
    <div>
      <ul className="exp-desc-ul">
        {Education[1].description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

let BachelorDesc = () => {
  return (
    <div>
      <ul className="exp-desc-ul">
        {Education[2].description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
        {/* <li className="exp-hidden">&nbsp;</li> */}
      </ul>
    </div>
  );
};

let frontendFrameworks = [
  "Vue.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Bootstrap",
  "Gatsby",
  "HTML / CSS",
];

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="location-div" style={{ marginBottom: "1rem" }}>
        <img className="location-icon" src={location} alt="" />
        <span>
          <strong>Bucharest</strong>
        </span>
      </div>
      <p>
        I am a 𝗝𝘂𝗻𝗶𝗼𝗿 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with +1 years of experience,
        consistently staying updated with the latest technologies in Vue.js. I
        provide 𝐞𝐟𝐟𝐞𝐜𝐭𝐢𝐯𝐞 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬 and I am always committed to timely delivery
        without compromising quality.
      </p>
      <p>𝗔𝗯𝗼𝘂𝘁 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀:</p>
      <div>
        💻 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱:
        <ul style={{ marginTop: 0 }}>
          {frontendFrameworks.map((framework, index) => (
            <li key={index}>
              <p style={{ margin: 0 }}>{framework}</p>
            </li>
          ))}
        </ul>
        📞 𝐏𝐡𝐨𝐧𝐞: +40 734 878 985 <br />
        📧 𝐄𝐦𝐚𝐢𝐥: banica.alice@gmail.com
      </div>
    </div>
  );
};
interface ExperienceProps {
  handleClickState: (param: number) => void;
}

let Jobs = [
  {
    title: "Frontend Developer - Quasdev Software",
    period: "Oct 2023 - Present",
    description: [
      "𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗲𝗱 𝗻𝗲𝘄 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀 to enhance user experience and functionality, aligning with project requirements and client specifications;",
      "𝗥𝗲𝗳𝗮𝗰𝘁𝗼𝗿𝗲𝗱 𝗹𝗲𝗴𝗮𝗰𝘆 𝗰𝗼𝗱𝗲𝗯𝗮𝘀𝗲 to improve readability, scalability and performance while adhering to coding best practices;",
      "𝗜𝗻𝗰𝗿𝗲𝗮𝘀𝗲𝗱 𝗽𝗮𝗴𝗲 𝘀𝗽𝗲𝗲𝗱 𝗼𝗳 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 𝗼𝗻 𝗺𝗼𝗯𝗶𝗹𝗲 𝗮𝗻𝗱 𝗱𝗲𝘀𝗸𝘁𝗼𝗽 𝗱𝗲𝘃𝗶𝗰𝗲𝘀 based on PageSpeed Insights reports, by reducing JavaScript execution time, minimizing main-thread work, eliminating render-blocking resources and lazy loading resources.",
    ],
  },
  {
    title: "Quality Engineer - Michelin",
    period: "Oct 2021 - Oct 2023",
    description: [
      "𝗘𝘃𝗮𝗹𝘂𝗮𝘁𝗲𝗱 𝗲𝘅𝗶𝘀𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝗱𝘂𝗿𝗲𝘀 𝗮𝗻𝗱 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘁𝗵𝗲𝗺 in order to 𝗼𝗽𝘁𝗶𝗺𝗶𝘇𝗲 𝘁𝗵𝗲 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 of obtaining quality tires;",
      "𝗗𝗶𝘀𝗰𝗼𝘃𝗲𝗿𝗲𝗱 𝗮𝗻𝗱 𝗿𝗲𝘀𝗼𝗹𝘃𝗲𝗱 𝗺𝗮𝗻𝘂𝗳𝗮𝗰𝘁𝘂𝗿𝗶𝗻𝗴 𝗱𝗲𝗳𝗲𝗰𝘁𝘀 by finding the root cause of problems, using specific tools (Fish bone diagram, 5 Why Analysis);",
      "𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗲𝗱 𝗮𝗻𝗱 𝗮𝗻𝗮𝗹𝘆𝘇𝗲𝗱 𝗽𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝗿𝗶𝘀𝗸𝘀 𝗮𝗻𝗱 𝗱𝗲𝗳𝗲𝗰𝘁𝘀 and applied correct procedures in the production process.",
    ],
  },
  {
    title: "Manufacturing Trainee - Philip Morris Romania",
    period: "Aug 2020 - Jul 2021",
    description: [
      " 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝘁𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗺𝗮𝘁𝗲𝗿𝗶𝗮𝗹𝘀 for different programs, in order to be used by operators;",
      " 𝗔𝗰𝘁𝗶𝘃𝗲𝗹𝘆 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗶𝗺𝗽𝗿𝗼𝘃𝗲𝗺𝗲𝗻𝘁 𝗼𝗳 𝗞𝗣𝗜𝘀 using specific tools (Fish bone diagram, 5 Why Analysis).",
    ],
  },
];

let Education = [
  {
    title: "Web Development Trainee - Scoala Informala de IT",
    period: "Jun 2021 - Oct 2021",
    description: [
      "𝗦𝗸𝗶𝗹𝗹𝘀 𝗜 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱:",
      " • Coding in JavaScript, TypeScript",
      " • HTML, CSS ",
      "• Object Oriented Programming  ",
      "• Algorithm solving ",
      " • Good understanding of programming fundamentals ",
      " • React Basics.",
      "𝗔𝘀𝘀𝗲𝘀𝘀𝗺𝗲𝗻𝘁𝘀: ",
      "• Quizzes and homework  ",
      "• Individual Projects  ",
      "• Exam.",
    ],
  },
  {
    title:
      "Master's Degree - Applied Informatics in Electrical Engineering (UPB)",
    period: "Oct 2020 - Iul 2022",
    description: [
      "Solve specific research problems, with the use of specialized software products / devices for applications in Electrical Engineering.",
    ],
  },
  {
    title:
      "Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)",
    period: "Oct 2016 - Iul 2020",
    description: [
      "Apply fundamental knowledge in electrotechnics, analyzing and designing electrical installations, equipment and machines.",
    ],
  },
];

let JobExperience = ({ handleClickState }: ExperienceProps) => {
  return (
    <ul className="experience-list">
      <li>
        <div
          className="about-see-more about-see-more-first"
          onClick={() => {
            handleClickState(1);
          }}
        >
          ?
        </div>
        <strong>{Jobs[0].title}</strong>
        <p className="experience-period">{Jobs[0].period}</p>
      </li>
      <li className="not-li">&nbsp;</li>
      <li style={{ marginTop: "2rem" }}>
        <div
          className="about-see-more  about-see-more-first"
          onClick={() => {
            handleClickState(3);
          }}
        >
          ?
        </div>
        {Jobs[1].title}
        <p className="experience-period ">{Jobs[1].period}</p>
      </li>
      <li className="not-li">&nbsp;</li>
      <li>
        <div
          className="about-see-more  about-see-more-first"
          onClick={() => {
            handleClickState(5);
          }}
        >
          ?
        </div>
        {Jobs[2].title}
        <p className="experience-period ">{Jobs[2].period}</p>
      </li>
      <li className="not-li">&nbsp;</li>
    </ul>
  );
};

let SchoolExperience = ({ handleClickState }: ExperienceProps) => {
  return (
    <ul className="education-list bar">
      <li className="not-li">&nbsp;</li>
      <li>
        <div
          className="about-see-more about-see-more-first"
          onClick={() => {
            handleClickState(2);
          }}
        >
          ?
        </div>
        <span
          style={{ position: "relative", left: "30px", marginLeft: "-30px" }}
        >
          {Education[0].title}
        </span>
        <p style={{ paddingLeft: "2rem" }} className="experience-period">
          {Education[0].period}
        </p>
      </li>
      <li className="not-li empty-elem-master">&nbsp;</li>
      <li style={{ paddingTop: "2rem " }} className="third-li">
        <div
          className="about-see-more about-see-more-fifth"
          onClick={() => {
            handleClickState(4);
          }}
        >
          ?
        </div>
        <span
          style={{ position: "relative", left: "30px", marginLeft: "-30px" }}
        >
          {Education[1].title}
        </span>
        <p style={{ paddingLeft: "2rem" }} className="experience-period">
          {Education[1].period}
        </p>
      </li>
      <li className="fifth-li empty-elem-school"></li>
      <li className="not-li third-li">
        <div
          className="about-see-more  about-see-more-fifth"
          onClick={() => {
            handleClickState(6);
          }}
        >
          ?
        </div>
        <span
          style={{ position: "relative", left: "30px", marginLeft: "-30px" }}
        >
          {Education[2].title}
        </span>
        <p style={{ paddingLeft: "2rem" }} className="experience-period">
          {Education[2].period}
        </p>
      </li>
    </ul>
  );
};

const Experience = ({ newHeight }: { newHeight: any }) => {
  const [infoClicked, setInfoClicked] = useState<number>(0);
  const [showInfoDiv, setShowInfoDiv] = useState<boolean>(false);
  const [expTitle, setExpTitle] = useState<number>(0);

  let expTitleMap = new Map([
    [1, "Quasdev Software"],
    [2, "Scoala Informala de IT - Front-end Web Development"],
    [3, "Quality Engineer - Michelin"],
    [
      4,
      `Master's Degree - Applied Informatics in Electrical Engineering (UPB)`,
    ],
    [5, "Manufacturing Trainee - Philip Morris Romania"],
    [
      6,
      `Bachelor's Degree - Applied Informatics in Electrical Engineering (UPB)`,
    ],
  ]);

  let expMap = new Map();
  expMap.set(1, <QuasdevDesc />);
  expMap.set(2, <ScoalaITDesc />);
  expMap.set(3, <MichelinDesc />);
  expMap.set(4, <MasterDesc />);
  expMap.set(5, <TraineeDesc />);
  expMap.set(6, <BachelorDesc />);

  const handleClickState = (param: number) => {
    setInfoClicked(param);
    setExpTitle(param);
    const newHeightDiv = true;
    setShowInfoDiv(true);
    newHeight(newHeightDiv);
  };

  return (
    <section className="experience-container">
      <div className="experience-info">
        <div className="experience-left">
          <JobExperience handleClickState={handleClickState} />
        </div>
        <div>
          <SchoolExperience handleClickState={handleClickState} />
        </div>
      </div>

      {showInfoDiv && (
        <ExperienceInfo
          message={expMap.get(infoClicked)}
          showInfo={showInfoDiv}
          title={expTitleMap.get(expTitle)}
        />
      )}
    </section>
  );
};

const ExperienceInfo = (props: any) => {
  return (
    <div className={clsx("experience-more-info", props.showInfo && "show-div")}>
      <p className="exp-title">{props.title}</p>
      <p className="exp-desc">{props.message}</p>
      <div className="exp-detail"></div>
    </div>
  );
};

const AboutMobile = () => {
  const [showInfoDivQuasdev, setShowInfoDivQuasdev] = useState<boolean>(false);
  const [showInfoDivMich, setShowInfoDivMich] = useState<boolean>(false);
  const [showInfoDivTrainee, setShowInfoDivTrainee] = useState<boolean>(false);
  const [showInfoDivSchIT, setShowInfoDivSchIT] = useState<boolean>(false);
  const [showInfoDivMaster, setShowInfoDivMaster] = useState<boolean>(false);
  const [showInfoDivBach, setShowInfoDivBach] = useState<boolean>(false);

  const handleClickState1 = () => {
    setShowInfoDivMich(!showInfoDivMich);
  };
  const handleClickState2 = () => {
    setShowInfoDivTrainee(!showInfoDivTrainee);
  };
  const handleClickState3 = () => {
    setShowInfoDivSchIT(!showInfoDivSchIT);
  };
  const handleClickState4 = () => {
    setShowInfoDivMaster(!showInfoDivMaster);
  };
  const handleClickState5 = () => {
    setShowInfoDivBach(!showInfoDivBach);
  };
  const handleClickState6 = () => {
    setShowInfoDivQuasdev(!showInfoDivQuasdev);
  };

  return (
    <div className="section-mobile">
      <div className="description-mobile">
        <p className="desc-title-mobile">Short description</p>
        <AboutMe />
        <p className="desc-title-mobile">Past Experience</p>
        <p className="exp-category">Jobs</p>
        <ul className="exp-jobs-list-m">
          <li>
            <div
              className="exp-more-info-m info-second-m"
              onClick={() => {
                handleClickState6();
              }}
            >
              ?
            </div>
            <strong>{Jobs[0].title}</strong>
            <p className="experience-period-m">{Jobs[0].period}</p>
            {showInfoDivQuasdev && <QuasdevDesc />}
          </li>
          <li>
            <div
              className="exp-more-info-m info-second-m"
              onClick={() => {
                handleClickState1();
              }}
            >
              ?
            </div>
            <span>{Jobs[1].title}</span>
            <p className="experience-period-m">{Jobs[1].period}</p>
            {showInfoDivMich && <MichelinDesc />}
          </li>
          <li>
            <div
              className="exp-more-info-m info-fourth-m"
              onClick={() => {
                handleClickState2();
              }}
            >
              ?
            </div>
            <span> {Jobs[2].title}</span>
            <p className="experience-period-m">{Jobs[2].period}</p>
            {showInfoDivTrainee && <TraineeDesc />}
          </li>
        </ul>

        <p style={{ marginTop: "2rem" }} className="exp-category">
          School
        </p>
        <ul className="exp-jobs-list-m">
          <li>
            <div
              className="exp-more-info-m info-first-m"
              onClick={() => {
                handleClickState3();
              }}
            >
              ?
            </div>
            <span>{Education[0].title}</span>
            <p className="experience-period-m">{Education[0].period}</p>
            {showInfoDivSchIT && <ScoalaITDesc />}
          </li>
          <li>
            <div
              className="exp-more-info-m info-third-m"
              onClick={() => {
                handleClickState4();
              }}
            >
              ?
            </div>
            <span>{Education[1].title}</span>
            <p className="experience-period-m">{Education[1].period}</p>
            {showInfoDivMaster && <MasterDesc />}
          </li>
          <li>
            <div
              className="exp-more-info-m info-fifth-m"
              onClick={() => {
                handleClickState5();
              }}
            >
              ?
            </div>
            <span>{Education[2].title}</span>
            <p className="experience-period-m"> {Education[2].period}</p>
            {showInfoDivBach && <BachelorDesc />}
          </li>
        </ul>
      </div>
    </div>
  );
};

const About = () => {
  const [text, setText] = useState<string>("");
  const isAboutMeActive = text === "aboutMeDescription" || text === "";
  const isMyExperienceActive = text === "myExperienceDescription";
  const [heightState, setHeightState] = useState<boolean>(false);

  const newHeight = (heightState: boolean) => {
    setHeightState(heightState);
  };

  const handleClickAbout = () => {
    setText("aboutMeDescription");
    const newHeightDiv = false;
    newHeight(newHeightDiv);
  };

  const handleClickExperience = () => {
    setText("myExperienceDescription");
  };

  return (
    <section className="about-container" id="about">
      <div className="section-2">
        <div className="description">
          <div className="description-left">
            <p>Short description</p>
            <ul className="description-points">
              <li>
                <button
                  className={clsx("btn-info", isAboutMeActive && "active")}
                  onClick={handleClickAbout}
                >
                  <span>About Alice </span>
                </button>
              </li>
              <li>
                <button
                  className={clsx("btn-info", isMyExperienceActive && "active")}
                  onClick={handleClickExperience}
                >
                  <span className="past-exp-span">Past Experience</span>
                </button>
              </li>
            </ul>
          </div>
          <div
            className={clsx(
              "description-right",
              heightState && "more-info-active"
            )}
          >
            {isAboutMeActive && <AboutMe />}
            {isMyExperienceActive && <Experience newHeight={newHeight} />}
          </div>
        </div>
      </div>
      <AboutMobile />
    </section>
  );
};

export default About;
