import React, { useEffect } from "react";
import "./Profile.css";
import profilePic from "../../assets/profile-pic.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  return (
    <section
      className="profile-section"
      id="Home"
      style={{
        backgroundImage: `url(${profilePic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "screen"
      }}
    >
      {/* Overlay */}
      <div className="overlay" />

      {/* Scroll Reveal Section */}
      <div className="profile-pic-container" data-aos="zoom-in">
        <img src={profilePic} alt="Profile" />
      </div>

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
        <div className="profile-buttons" data-aos="zoom-in" data-aos-delay="800">
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

        {/* Social Media Icons */}
        <div className="social-icons" data-aos="fade-up" data-aos-delay="1000">
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/kamal-barman", "_blank")
            }
          />
          <img
            src="/assets/github.png"
            alt="GitHub"
            onClick={() =>
              window.open("https://github.com/kamal-barman", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
