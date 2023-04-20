import React from "react";
import Img from "../images/globe.png";
import Img2 from "../images/pc.png";
import ParticleDark from "../particlesdark";
import "../stylesdark/homebannerDark.css";
import EarthCanvas from "../three/earth";
function HomebannerDark() {
  return (
    <div className="banner">
      <ParticleDark className="back--banner" />
      <div className="banner--wrap">
        <div className="text--wrap">
          <h3 className="text--dark">Hey!</h3>
          <h1 className="name--head--dark">I'm Sanidhya</h1>
          <h3 className="text--dark">I'm a Full Stack Developer</h3>
        </div>
        {/* <img className="home--img--dark" src={Img}></img> */}
        <EarthCanvas />
      </div>
    </div>
  );
}

export default HomebannerDark;
