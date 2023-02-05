import React, { useState, useEffect } from "react";
import arrow from "../images/arrow.svg";
import "../styles/about.css";
import "../stylesdark/aboutDark.css";
import hat from "../images/hat.svg";
import { motion } from "framer-motion";

function AboutDark() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
  };

  return (
    <div>
      <div id="about--dark">
        <div className="body--wrap">
          <div className="timeline--wrap--dark">
            <img className="hat" src={hat}></img>
            <img className="arrow" src={arrow}></img>
          </div>
          <div className="edu--wrap--dark">
            <h2>Bachelor of Technology</h2>
            <h3>Computer Science and Engineering</h3>
            <p>Lovely Professional University</p>
            <p>2020 - 2024</p>
          </div>
        </div>

        <div className="about--wrap">
          <div className="about--head">
            <h1 className="ABOUT--dark">ABOUT</h1>
          </div>
          <div className="about--text">
            <p className="about--intro">
              Hey! My name is Sanidhya Sharma and I am a Computer Science and
              Engineering student at Lovely Professional University.
            </p>
            <p>
              A hardworking, disciplined and self-motivated student. Always
              having an optimistic and positive approach towards solving
              problems and overcoming obstacles. I love designing websites and
              I'm always eager to learn new technologies and expand my
              knowledge.
            </p>
          </div>
        </div>
      </div>
      <motion.div className="cursor" variants={variants} animate="default" />
    </div>
  );
}

export default AboutDark;
