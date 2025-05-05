import React from "react";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hackathons from "./components/hackathons/Hackathons";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Hackathons />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
