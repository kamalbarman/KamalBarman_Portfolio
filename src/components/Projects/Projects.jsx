import React, { useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Assets
import projectImage1 from "../../assets/project-1.png";
import projectImage2 from "../../assets/project-2.png";
import projectImage3 from "../../assets/project-3.png";
import logo1 from "../../assets/logo-1.png";
import poster1 from "../../assets/poster-1.png";
import { html } from "framer-motion/client";

const webProjects = [
  {
    id: 1,
    title: "AgroBharat",
    description: "It is basic E-commerce website for farmers.",
    image: projectImage1,
    github: "https://github.com/yourusername/portfolio",
    demo: "https://agrobharat-frontend.onrender.com",
    tags: ["React", "CSS", "Vite","mongodb", "Express", "Node.js","html", "JavaScript"]
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather info app using OpenWeather API.",
    image: projectImage2,
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-app.vercel.app",
    tags: ["React", "API"]
  },
  {
    id: 3,
    title: "Forecast Pulse",
    description: "Stylized dashboard with live weather data.",
    image: projectImage3,
    github: "https://github.com/yourusername/forecast-pulse",
    demo: "https://forecast-pulse.vercel.app",
    tags: ["Tailwind", "Charts"]
  }
];

const designProjects = [
  {
    id: 4,
    title: "Minimal Logo",
    description: "Sleek branding logo for startup.",
    image: logo1,
    tags: ["Photoshop", "Illustrator"]
  },
  {
    id: 5,
    title: "Event Poster",
    description: "A vibrant music fest poster.",
    image: poster1,
    tags: ["Photoshop", "Typography"]
  }
];

const uiuxProjects = [
  {
    id: 6,
    title: "UI/UX Redesign",
    description: "Revamped e-commerce app for better UX.",
    image: projectImage1,
    tags: ["Figma", "Prototyping"]
  },
  {
    id: 7,
    title: "Mobile App Concept",
    description: "Concept design for a travel app.",
    image: projectImage2,
    tags: ["Figma", "User Research"]
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderProjectCard = (project) => (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      {project.github && (
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Live
          </a>
        </div>
      )}
    </div>
  );

  const renderSlider = (title, projects) => (
    <>
      <h2 className="section-title">{title}</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2.5"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="swiper-slide">
            {renderProjectCard(project)}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

  return (
    <section className="projects-section" id="projects">
      {renderSlider("Web Development", webProjects)}
      {renderSlider("Design Projects", designProjects)}
      {renderSlider("UI/UX Projects", uiuxProjects)}
    </section>
  );
};

export default Projects;
