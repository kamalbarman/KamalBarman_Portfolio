import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import projectImage1 from "../../assets/project-1.png";
import projectImage2 from "../../assets/project-2.png";
import projectImage3 from "../../assets/project-3.png";
import logo1 from "../../assets/logo-1.png";
import poster1 from "../../assets/poster-1.png";

const webProjects = [
  {
    id: 1,
    title: "AgroBharat",
    description: "It is basic E-commerce website for farmers.",
    image: projectImage1,
    github: "https://github.com/kamalbarman/AgroBharat",
    demo: "https://agrobharat-frontend.onrender.com",
    tags: ["React", "MongoDB", "Express", "Node.js", "JavaScript"]
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather info app using OpenWeather API.",
    image: projectImage2,
    github: "https://github.com/kamalbarman/weather-app",
    demo: "https://kamalbarman.github.io/weather-app/",
    tags: ["React", "API","Material-UI",]
  },
  {
    id: 3,
    title: "MY Portfolio",
    description: "My personal portfolio website showcasing my projects and skills.",
    image: projectImage3,
    github: "https://github.com/kamalbarman/KamalBarman_Portfolio",
    demo: "https://forecast-pulse.vercel.app",
    tags: ["React", "Framer Motion", "AOS", "Material UI" ]
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
    AOS.init({ duration: 800, once: true });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleTilt = (e) => {
    if (window.innerWidth < 1024) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * 10;
    const rotateY = ((x - rect.width / 2) / rect.width) * -10;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const renderProjectCard = (project, index) => (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay={index * 150}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      onClick={() => setSelectedProject(project)}
    >
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );

  const renderSlider = (title, projects) => (
    <>
      <h2 className="section-title" data-aos="zoom-in">{title}</h2>
      <Swiper
        effect="slide"
        grabCursor={true}
        centeredSlides={false}
        spaceBetween={30}
        slidesPerView={1.2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            autoplay: false,
          },
          1024: {
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: 2.5,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
            autoplay: false,
          },
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper-container desktop-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} className="swiper-slide">
            {renderProjectCard(project, index)}
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

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="project-tags">
              {selectedProject.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
            {selectedProject.github && (
              <div className="project-links">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live</a>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="view-all-container">
        <button className="view-all-btn" onClick={() => window.location.href = "/projects-page"}>
          View All Projects →
        </button>
      </div>
    </section>
  );
};

export default Projects;
