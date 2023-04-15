import "./App.css";

import React from "react";
import HomebannerDark from "./componentsDark/homebannerDark";
import AboutDark from "./componentsDark/aboutDark";
import FooterDark from "./componentsDark/FooterDark";
import SkillsDark from "./componentsDark/skillsDark";
import NavigationDark from "./navigationbardark";
import ProjectsDark from "./componentsDark/projectsDark";

function Dark() {
  return (
    <div className="App">
      <NavigationDark></NavigationDark>
      <HomebannerDark />

      <AboutDark />
      <SkillsDark />
      <ProjectsDark />
      <FooterDark />
    </div>
  );
}

export default Dark;
