import "./App.css";
import Navigation from "./navigationbar.js";
import React from "react";
import Homebanner from "./componentsLight/homebanner";
import About from "./componentsLight/about";
import Footer from "./componentsLight/Footer";
import Skills from "./componentsLight/skills";

function Light() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Homebanner />

      <About />

      <Skills />

      <Footer />
      <kawaiiCat />
    </div>
  );
}

export default Light;
