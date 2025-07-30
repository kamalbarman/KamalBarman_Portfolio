// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Profile/Profile";
// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
// import ContactForm from "./components/Contact/ContactForm";
// import Footer from "./components/Footer/Footer";

// import AudioControls from "./components/AudioControls";

// import AudioVisualizer from "./components/AudioVisualizer";

// function App() {
//   return (
//     <>
//       <AudioVisualizer />
//       <Navbar />
//       <Profile />
//       <About />
//       <Skills />
//       <Projects />
//       <ContactForm />
//       <Footer />
//       <AudioControls />
//     </>
//   );
// }

// export default App;


import React from "react";
import AudioControls from "./components/AudioControls";
import AudioVisualizer from "./components/AudioVisualizer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
      <AudioVisualizer />
      <AudioControls />
    </>
  );
}

export default App;
