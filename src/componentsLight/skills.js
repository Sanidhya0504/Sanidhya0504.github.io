import React from "react";
import icons from "../images/icons.png";
import "../styles/skills.css";
import KawaiiCat from "./cat";
import { SiReact } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { useState } from "react";

function Skills() {
  const [data, setData] = useState("");
  const changeMood = (mood) => {
    setData(mood);
  };
  return (
    <div id="skills">
      <div className="icon--wrap">
        <hr />
        <h2 className="skill--head">Skills</h2>
      </div>
      <div className="skills--container">
        <div className="skill-container-left">
          <div className="skill-container-left-1">
            <SiReact
              className="skill--icon"
              onMouseOver={() => changeMood("happy")}
            />
            <SiJavascript
              className="skill--icon"
              onMouseOver={() => changeMood("blissful")}
            />
          </div>
          <div className="skill-container-left-2">
            <SiJava
              className="skill--icon"
              onMouseOver={() => changeMood("lovestruck")}
            />
            <SiMysql
              className="skill--icon"
              onMouseOver={() => changeMood("ko")}
            />
          </div>
        </div>
        <KawaiiCat mood={data} />
        <div className="skill-container-right">
          <div className="skill-container-right-1">
            <SiSpring
              className="skill--icon"
              onMouseOver={() => changeMood("blissful")}
            />
            <SiFirebase
              className="skill--icon"
              onMouseOver={() => changeMood("shocked")}
            />
          </div>
          <div className="skill-container-right-2">
            <SiSpringboot
              className="skill--icon"
              onMouseOver={() => changeMood("lovestruck")}
            />
            <SiGit
              className="skill--icon"
              onMouseOver={() => changeMood("happy")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
