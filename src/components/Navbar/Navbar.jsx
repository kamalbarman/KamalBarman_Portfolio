import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToHome = () =>{
    window.scrollTo({ top: 0, behavior: "smooth"})
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const trail = document.createElement("div");
    trail.id = "cursor-trail";
    document.body.appendChild(trail);

    const moveTrail = (e) => {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 500);
    };

    window.addEventListener("mousemove", moveTrail);
    return () => {
      window.removeEventListener("mousemove", moveTrail);
      document.getElementById("cursor-trail")?.remove();
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#Home" className="logo" onClick={closeMenu}>
        Kamal Barman
      </a>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#Home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#Skills" onClick={closeMenu}>Skill</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
