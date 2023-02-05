import React from "react";
import icons from "../images/icons.png";
import "../stylesdark/skillsDark.css";
import "../styles/skills.css";

function SkillsDark() {
  return (
    <div id="skills--dark">
      <div className="icon--wrap">
        <hr />
        <h2 className="skill--head--dark">Skills</h2>
      </div>
      <img id="skill--img" src={icons}></img>
    </div>
  );
}

export default SkillsDark;
