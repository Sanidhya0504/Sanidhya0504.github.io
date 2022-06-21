import React from "react";
import arrow from "../images/arrow.svg";
import "../styles/about.css";
import hat from "../images/hat.svg";
function About() {
  return (
    <div id="about">
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
      <div className="about--wrap">
        <div className="about--head">
          <h1 className="ABOUT">ABOUT</h1>
        </div>
        <div className="about--text">
          <p className="about--intro">
            Hey! My name is Sanidhya Sharma and I am a Computer Science and
            Engineering student at Lovely Professional University.
          </p>
          <p>
            A hardworking, disciplined and self-motivated student. Always having
            an optimistic and positive approach towards solving problems and
            overcoming obstacles. I love designing websites and I'm always eager
            to learn new technologies and expand my knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
