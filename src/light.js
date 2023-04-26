import "./App.css";
import Navigation from "./navigationbar.js";
import React from "react";
import Homebanner from "./componentsLight/homebanner";
import About from "./componentsLight/about";
import Footer from "./componentsLight/Footer";
import Skills from "./componentsLight/skills";
import Projects from "./componentsLight/projects";
import Contact from "./componentsLight/contact";
import { Model } from "./Deskchair";
import SphereComp from "./three/sphere";

function Light() {
  return (
    <div className="App d-flex flex-column">
      <Navigation></Navigation>

      <Homebanner />
      <About />
      <Skills />
      <Projects />
      <Contact></Contact>
      {/* <Footer /> */}

      {/* <Model /> */}
      {/* <SphereComp /> */}
    </div>
  );
}

export default Light;
