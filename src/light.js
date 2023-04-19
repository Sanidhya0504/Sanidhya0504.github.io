import "./App.css";
import Navigation from "./navigationbar.js";
import React from "react";
import Homebanner from "./componentsLight/homebanner";
import About from "./componentsLight/about";
import Footer from "./componentsLight/Footer";
import Skills from "./componentsLight/skills";
import Projects from "./componentsLight/projects";
import Contact from "./componentsLight/contact";

function Light() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Homebanner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Light;
