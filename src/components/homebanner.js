import React from "react";
import Img from "../images/pc.png";
import "../styles/homebanner.css";
import Particles from "../particles";

function Homebanner() {
  return (
    <div className="banner">
      <Particles className="back--banner" />
      <div id="text">
        <h3>Hey!</h3>
        <h1 id="name--head">I'm Sanidhya</h1>
        <h3>I'm a Web Developer</h3>
      </div>
      <img id="home--img" src={Img}></img>
    </div>
  );
}

export default Homebanner;
