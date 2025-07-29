import React, { useEffect } from "react";
import "./Skills.css";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import htmlLogo from "../../assets/html.png";
import jsLogo from "../../assets/javascript.png";
import cssLogo from "../../assets/css.png";
import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/node.png";
import mongoLogo from "../../assets/mongodb.png";
import mysqlLogo from "../../assets/mysql.png";
import pythonLogo from "../../assets/python.png";
import c from "../../assets/c.png";
import cpp from "../../assets/cpp.png";

import photoshopLogo from "../../assets/photoshop.png";
import illustratorLogo from "../../assets/illustrator.png";
import figmaLogo from "../../assets/figma.png";

const developmentSkills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: "Intermediate", logo: c },
      { name: "C++", level: "Intermediate", logo: cpp },
      { name: "Python", level: "Intermediate", logo: pythonLogo },
      { name: "JavaScript", level: "Intermediate", logo: jsLogo },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: "Skilled", logo: htmlLogo },
      { name: "CSS", level: "Skilled", logo: cssLogo },
      { name: "React", level: "Intermediate", logo: reactLogo },
      { name: "Node.js", level: "Basic", logo: nodeLogo },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "Intermediate", logo: mysqlLogo },
      { name: "MongoDB", level: "Intermediate", logo: mongoLogo },
    ],
  },
];

const designingSkills = [
  {
    title: "Graphic Tools",
    skills: [
      { name: "Photoshop", level: "Intermediate", logo: photoshopLogo },
      { name: "Illustrator", level: "Basic", logo: illustratorLogo },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", level: "Skilled", logo: figmaLogo },
    ],
  },
];

const SkillSection = ({ heading, categories }) => (
  <div className="category-section" data-aos="fade-up">
    <h2 className="section-title">{heading}</h2>
    {categories.map((group, index) => (
      <div
        key={index}
        className="skill-group glass-card"
        data-aos="fade-up"
        data-aos-delay={index * 150}
      >
        <h3>{group.title}</h3>
        <div className="Skills-container">
          {group.skills.map((skill, idx) => (
            <div
              className="Skills-item"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="skill-logo"
              />
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p>{skill.level}</p>
              </div>
              <FaCheckCircle className="check-icon" />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 80, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="Skills-section" id="Skills">
      <SkillSection heading="Development Skills" categories={developmentSkills} />
      <SkillSection heading="Designing Skills" categories={designingSkills} />
    </section>
  );
};

export default Skills;
