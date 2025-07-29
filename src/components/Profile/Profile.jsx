import React from "react";
import "./Profile.css";
import profilePic from "../../assets/profile-pic.png";

const Profile = () => {
  return (
    <section
      className="profile-section"
      id="Home" // 🎯 Corrected ID for smooth navbar scroll
      style={{
        backgroundImage: `url(${profilePic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "screen"
      }}
    >
      {/* Dark blur overlay */}
      <div className="overlay" />

      {/* Profile Picture Glow */}
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" />
      </div>

      {/* Text Section */}
      <div className="profile-text">
        <h4>Hello, I'm</h4>

        <div className="wave-name">
          <h1>Kamal Barman</h1>
          <h1>Kamal Barman</h1>
        </div>

        <h4 className="fdeveloper">Frontend Developer</h4>

        {/* Buttons */}
        <div className="profile-buttons">
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
        <div className="social-icons">
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
