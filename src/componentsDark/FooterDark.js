import React from "react";
import wave from "../images/waves3.svg";
import "../styles/footer.css";
import "../stylesdark/FooterDark.css";

function FooterDark() {
  return (
    <div>
      <img className="wave" src={wave}></img>
    </div>
  );
}

export default FooterDark;
