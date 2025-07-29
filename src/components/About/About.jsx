import React, { useRef } from "react";
import "./About.css";
import aboutPic from "../../assets/about-pic.png";

const focusItems = [
  {
    title: "Water Wave Text",
    description: "Crafting fluid typographic motion for dynamic headings.",
    back: "Explore dynamic water-inspired animations coming soon.",
  },
  {
    title: "Scroll Reveal Effects",
    description: "Designing smooth entry animations for engaging user flow.",
    back: "Stay tuned for advanced entry choreography enhancements.",
  },
  {
    title: "Palette-Driven UI",
    description: "Integrating emotionally resonant themes into the full layout.",
    back: "New mood-based theming options in development.",
  },
  {
    title: "Responsive Glow",
    description: "Layering subtle glow effects with adaptive interactions.",
    back: "More glow-based motion feedback launching shortly.",
  },
];

const About = () => {
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside card
    const y = e.clientY - rect.top; // mouse Y inside card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // tilt limit
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutPic} alt="About" loading="lazy" />
        </div>
        <div className="about-text">
          <p>
            Hi! I’m Kamal Barman, a detail-driven Frontend Developer and solo creator
            who loves designing expressive, responsive interfaces that tell stories.
          </p>
          <p>
            With a foundation in React, advanced CSS animation, and UI/UX storytelling,
            I build polished digital experiences that balance creativity and clarity.
          </p>
        </div>
      </div>

      <div className="focus-section">
        <h2>Currently Focused On</h2>
        <div className="focus-grid">
          {focusItems.map((item, index) => (
            <div
              key={index}
              className="focus-card"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="extra-info">
                <p>{item.back}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
