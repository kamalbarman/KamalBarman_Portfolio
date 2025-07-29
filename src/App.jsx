import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
      {/* You can add other components below */}
    </>
  );
}

export default App;
