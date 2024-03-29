import React, { Suspense } from "react";
import Img from "../images/globe.png";
import Img2 from "../images/pc.png";
import "../styles/homebanner.css";
import Particles from "../particles";
import ParticlesDark from "../particlesdark";
import SphereComp, { Earth } from "../three/sphere";
import { Canvas } from "@react-three/fiber";
import EarthCanvas from "../three/earth";

function Homebanner() {
  return (
    <div className="banner">
      <Particles className="back--banner" />
      {/* <SphereComp className="back--banner"/> */}
      <div className="banner--wrap">
        <div className="text--wrap">
          <h3 className="text">Hey!</h3>
          <h1 id="name--head">I'm Sanidhya</h1>
          <h3 className="text">I'm a Full Stack Developer</h3>
        </div>
        {/* <img id="home--img" src={Img2}></img> */}

        {/* <Canvas className="sphere_wrap">
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas> */}
        <EarthCanvas />
      </div>
    </div>
  );
}

export default Homebanner;
