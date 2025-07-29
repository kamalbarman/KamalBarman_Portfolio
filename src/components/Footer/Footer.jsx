import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
        <p>&copy; {currentYear} John Doe. All Rights Reserved.</p>
      </footer>

      <button className="back-to-top" onClick={scrollToTop} title="Back to top">
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
