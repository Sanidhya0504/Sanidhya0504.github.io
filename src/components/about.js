import React from "react";
import arrow from "../images/arrow.svg";
import "../styles/about.css";
import hat from "../images/hat.svg";
function About() {
  return (
    <div className="body--wrap">
      <div className="timeline--wrap">
        <img className="hat" src={hat}></img>
        <img className="arrow" src={arrow}></img>
      </div>
      <div className="edu--wrap">
        <h2>Bachelor of Technology</h2>
        <h3>Computer Science and Engineering</h3>
        <p>Lovely Professional University</p>
      </div>
    </div>
  );
}

export default About;
