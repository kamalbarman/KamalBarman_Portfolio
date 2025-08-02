// src/components/Timeline.jsx
import React, { useEffect, useState } from "react";
import "./Timeline.css";
import AOS from "aos";
import "aos/dist/aos.css";

const timelineEvents = [
  {
    year: "2020-2022",
    icon: "🏫",
    title: "ITI in Computer",
    description:
      "I learned basic computer skills and programming fundamentals. (It is one year course but due to COVID-19 it took 2 years). Also during this time, I learned Photoshop and Illustrator.",
  },
  {
    year: "2022",
    icon: "🎓",
    title: "Pursuing Degree in Computer Science",
    description:
      "Learned the basics of C and C++ and how computers interact with hardware.",
  },
  {
    year: "2023",
    icon: "🧪",
    title: "Expanding Knowledge",
    description:
      "Learning about web development with HTML, CSS, JavaScript and backend tech like Node.js, Express, MySQL, MongoDB. Also explored UI/UX design with Figma and Photoshop.",
  },
  {
    year: "2024",
    icon: "💻",
    title: "Exploring Full Stack Technologies",
    description: "Started learning about full stack development with the MERN stack.",
  },

];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleToggle = (index) => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">My Journey</h2>
      <div className="timeline-container" data-aos="fade-in">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="timeline-dot">{event.icon}</div>
            <div className="timeline-content" data-aos="fade-up">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
