// import React from "react";
// import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <footer className="footer">
//         <div className="footer-socials">
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//           >
//             <FaGithub className="footer-icon" />
//           </a>
//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin className="footer-icon" />
//           </a>
//         </div>
//         <p>&copy; {currentYear} John Doe. All Rights Reserved.</p>
//       </footer>

//       <button
//         className="back-to-top"
//         onClick={scrollToTop}
//         title="Back to top"
//         aria-label="Back to top"
//       >
//         <FaArrowUp />
//       </button>
//     </>
//   );
// };

// export default Footer;



import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll"; // assuming react-scroll for smooth nav
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-section left">
          <h3>Kamal Barman</h3>
          <p>FullStack Developer & UIUX Enthusiast</p>
        </div>

        <div className="footer-section nav">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="home" smooth={true} duration={200}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={200}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={200}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={200}>Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section right">
          <p>📍 India</p>
          <p>✉️ kamalbarman1528gmail.com</p>
          <div className="footer-socials">
            <a href="https://github.com/kamalbarman" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
          </div>
          <p className="copyright">
            &copy; {currentYear} Kamal Barman. All Rights Reserved.
          </p>
        </div>
      </footer>

      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
