import React from "react";
import Img from "../images/—Pngtree—science and technology high-tech earth_5449137.png";
import Img2 from "../images/pc.png";
import "../styles/homebanner.css";
import Particles from "../particles";
import ParticlesDark from "../particlesdark";

function Homebanner() {
  return (
    <div className="banner">
      <Particles className="back--banner" />
      <div className="banner--wrap">
        <div className="text--wrap">
          <h3 className="text">Hey!</h3>
          <h1 id="name--head">I'm Sanidhya</h1>
          <h3 className="text">I'm a Full Stack Developer</h3>
        </div>
        <img id="home--img" src={Img2}></img>
      </div>
    </div>
  );
}

export default Homebanner;
