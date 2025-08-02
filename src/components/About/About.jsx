import React, { useState, useEffect } from "react";
import "./About.css";
import ProImg from "../../assets/about-pic.png";

const lines = [
  "Hi, I'm Kamal Barman,",
  "A passionate full-stack developer,",
  "Crafting elegant & performant web solutions.",
];

const About = () => {
  const [displayedText, setDisplayedText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      if (charIndex <= currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => [
            ...prev.slice(0, lineIndex),
            currentLine.slice(0, charIndex),
          ]);
          setCharIndex((prev) => prev + 1);
        }, 50); // speed per character
        return () => clearTimeout(timeout);
      } else {
        // After finishing a line, move to next
        const lineTimeout = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 800); // delay before next line
        return () => clearTimeout(lineTimeout);
      }
    }
  }, [charIndex, lineIndex]);

  // ----- Handle focus cards here as you already did -----
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
    setTimeout(() => {
      document
        .getElementById("about")
        // .scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setActiveCard(null);
  };

  const focusItems = [
    {
      title: "Web Development",
      brief: "Frontend & Backend",
      description:
        "I specialize in building responsive websites using React, Node.js, and Express. I create optimized and scalable full-stack web apps with beautiful UI and efficient performance.",
    },
    {
      title: "UI/UX Design",
      brief: "User-centered Design",
      description:
        "I focus on designing intuitive, user-friendly interfaces. Using Figma, Adobe XD, and other tools, I create clean layouts and interactive prototypes that enhance user experiences.",
    },
    {
      title: "Branding & Graphics Design",
      brief: "Eyecatching Visuals",
      description:
        "I create stunning graphics and branding materials. From logos,posters to social media graphics, I ensure your brand stands out with unique and professional designs.",
    },
  
  ];

  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="about-image">
          <img src={ProImg} alt="Profile" className="base-img" />
        </div>

        <div className="about-text">
          <div className="multi-typewriter">
            {displayedText.map((line, i) => (
              <p key={i}>
                {line}
                {i === displayedText.length - 1 && lineIndex < lines.length ? (
                  <span className="cursor">|</span>
                ) : null}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="focus-section">
        <h2>My Focus</h2>
        <div className="focus-grid">
          {focusItems.map((item, index) => (
            <div
              className={`focus-card ${activeCard === index ? "flipped" : ""}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="focus-card-inner">
                <div className="focus-card-front">
                  <h3>{item.title}</h3>
                  <p>{item.brief}</p>
                </div>
                <div className="focus-card-back">
                  <button className="close-btn" onClick={handleClose}>
                    ×
                  </button>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
