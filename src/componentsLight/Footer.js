import React from "react";
import wave from "../images/waves.svg";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="wave--container">
        <img className="wave" src={wave}></img>
      </div>
    </footer>
  );
}

export default Footer;
