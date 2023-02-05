import React from "react";
import icons from "../images/icons.png";
import "../styles/skills.css";

function Skills() {
  return (
    <div id="skills">
      <div className="icon--wrap">
        <hr />
        <h2 className="skill--head">Skills</h2>
      </div>
      <img id="skill--img" src={icons}></img>
    </div>
  );
}

export default Skills;
