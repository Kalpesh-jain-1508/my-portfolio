import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";


const counts = [
  { name: "Trainings", value: 10 },
  // { name: "Written Book", value: 48 },
  // { name: "Listeners", value: 527 },
  { name: "Own Projects", value: 15 },
];

const skills = [
  { name: "React.js", icon: "img/svg/reactjs.svg" },
  { name: "Next.js", icon: "img/svg/nextjs.svg" },
  { name: "NodeJs", icon: "img/svg/nodejs.svg" },
  { name: "Shopify" , icon: "img/svg/shopify.svg" },
  { name: "PHP", icon: "img/svg/php.svg" },
  { name: "HTML5", icon: "img/svg/Xd.svg" },
  { name: "CSS", icon: "img/svg/Xd.svg" },
  // { name: "ES6 / 7 Javascript", icon: "img/svg/Xd.svg" },
  // { name: "Angular JS", icon: "img/svg/illustrator.svg" },
  // { name: "Vue JS", icon: "img/svg/Id.svg" },
  // { name: "Gatsby JS", icon: "img/svg/Id.svg" },
  { name: "CraftCMS", icon: "img/svg/Id.svg" },
  { name: "Material UI", icon: "img/svg/Id.svg" },
  { name: "Chakra UI", icon: "img/svg/Id.svg" },
  { name: "ReactStrap", icon: "img/svg/Id.svg" },
  { name: "Bootstrap", icon: "img/svg/Id.svg" },
];

const experiences = [
  {
    company: "V2 Web Solutions",
    designation: "Full Stack or Web Developer",
    time: "2020 - Present",
  }
];

const educations = [
  {
    institution: "Veer Narmad South Gujarat Univercity",
    certificate: "Bachelor of Computer Applications",
    time: "2018-2020",
  }
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text expertise-text">
                  <p>
                    Hey there, {`I'm`} Kalpesh, a seasoned Fullstack developer with more than four years of hands-on experience.
                  </p>
                  <p>
                    I specialize in a diverse array of services designed to elevate your software solutions. From crafting custom web applications to troubleshooting those pesky bugs, and from developing sleek dashboards and admin panels to providing top-notch eCommerce solutions, {`I've`} got your back.
                  </p>
                 
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="img/cv/kalpesh_jain_resume.pdf" download>
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
