import React from "react";
import Img from "../images/pc.png";
import "../styles/homebanner.css";
import Particles from "../particles";

function Homebanner() {
  return (
    <div className="banner">
      <Particles className="back--banner" />
      <div className="banner--wrap">
        <div className="text--wrap">
          <h3 className="text">Hey!</h3>
          <h1 id="name--head">I'm Sanidhya</h1>
          <h3 className="text">I'm a Web Developer</h3>
        </div>
        <img id="home--img" src={Img}></img>
      </div>
    </div>
  );
}

export default Homebanner;
