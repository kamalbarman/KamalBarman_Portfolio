import React, { useEffect } from "react";
import "./About.css";
import aboutPic from "../../assets/about-pic.png";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * 20;
    const rotateY = ((x - rect.width / 2) / rect.width) * -20;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const introText = "Hi! I’m Kamal Barman, a detail-driven Frontend Developer and solo creator.";

  return (
    <section className="about-section" id="about">
      <h2 data-aos="fade-up">About Me</h2>

      <div className="about-content">
        <div className="about-image" data-aos="zoom-in">
          <img src={aboutPic} alt="About" loading="lazy" />
        </div>

        <div className="about-text" data-aos="fade-up" data-aos-delay="200">
          <p className="merge-effect">
            {Array.from(introText).map((char, i) => {
              const style = {
                "--x-offset": `${Math.random() * 100 - 50}px`,
                "--y-offset": `${Math.random() * 100 - 50}px`,
                "--rotate": `${Math.random() * 30 - 15}deg`,
                "--delay": i,
              };
              return (
                <span key={i} className="char" style={style}>
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            With a foundation in React, advanced CSS animation, and UI/UX storytelling,
            I build polished digital experiences that balance creativity and clarity.
          </p>
        </div>
      </div>

      <div className="focus-section">
        <h2 data-aos="fade-up" data-aos-delay="400">Currently Focused On</h2>
        <div className="focus-grid">
          {focusItems.map((item, index) => (
            <div
              key={index}
              className="focus-card"
              data-aos="flip-left"
              data-aos-delay={index * 150}
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
