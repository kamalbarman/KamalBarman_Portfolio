import React, { useEffect } from "react";
import "./Profile.css";
import MarsPlanet from "../../assets/Mars_Planet2.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import DashboardCard from "../DashboardCard/DashboardCard";

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="profile-section" id="Home">
      {/* 🔴 Video Background */}
      <video
        className="video-bg"
        src={MarsPlanet}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔵 Overlay */}
      <div className="overlay" />

      {/* 🌌 Content Wrapper */}
      <div className="profile-wrapper">
        {/* 🔹 Left Text Content */}
        <div className="profile-text" data-aos="fade-up" data-aos-delay="200">
          <h4>Hello, I'm</h4>

          <div className="wave-name" data-aos="slide-up" data-aos-delay="400">
            <h1>Kamal Barman</h1>
            <h1>Kamal Barman</h1>
          </div>

          <h4 className="fdeveloper" data-aos="fade-up" data-aos-delay="600">
            Frontend Developer
          </h4>

          {/* Buttons */}
          <div
            className="profile-buttons"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <a
              className="btn btn-outline"
              href="/assets/resume-example.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a className="btn btn-filled" href="#contact">
              Contact Info
            </a>
          </div>

          {/* Social Icons */}
          <div className="social-icons" data-aos="fade-up" data-aos-delay="1000">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              onClick={() =>
                window.open("https://www.linkedin.com/in/kamal-barman", "_blank")
              }
            />
            <img
              src={githubIcon}
              alt="GitHub"
              onClick={() =>
                window.open("https://github.com/kamalbarman", "_blank")
              }
            />
          </div>
        </div>

        {/* 🔸 Right: Dashboard Card */}
        <div className="profile-dashboard">
          <DashboardCard />
        </div>
      </div>
    </section>
  );
};

export default Profile;
