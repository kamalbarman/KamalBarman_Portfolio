import React, { useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import VanillaTilt from "vanilla-tilt";
import projectImage from "../../assets/project-1.png";
import projectImage2 from "../../assets/project-2.png";
import projectImage3 from "../../assets/project-3.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive React portfolio to showcase my work and skills.",
    image: projectImage,
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },
  {
    id: 2,
    title: "Weather App",
    description: "React app that shows real-time weather info using OpenWeather API.",
    image: projectImage2,
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-app.vercel.app",
  },
  {
    id: 3,
    title: "Forecast Pulse",
    description: "A stylized weather dashboard with layered animations and live data.",
    image: projectImage3,
    github: "https://github.com/yourusername/forecast-pulse",
    demo: "https://forecast-pulse.vercel.app",

  },
    {  id: 4,
    title: "Forecast Pulse",
    description: "A stylized weather dashboard with layered animations and live data.",
    image: projectImage3,
    github: "https://github.com/yourusername/forecast-pulse",
    demo: "https://forecast-pulse.vercel.app",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const cards = document.querySelectorAll(".project-card");
    VanillaTilt.init(cards, {
      max: 15,
      speed: 500,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 id="Th2">Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, image, github, demo }) => (
          <div
            className="project-card"
            key={id}
            data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <FiExternalLink /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
