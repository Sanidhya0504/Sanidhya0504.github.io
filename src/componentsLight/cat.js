import React from "react";
import { Cat } from "react-kawaii";
import "../stylesdark/cat.css";

function kawaiiCat(catmood) {
  var mood = catmood.mood;

  if (mood == "") {
    mood = "excited";
  }
  return (
    <div className="cat-wrap">
      <Cat size={320} mood={mood} color="#c9dbff" />
    </div>
  );
}

export default kawaiiCat;
