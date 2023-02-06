import React from "react";
import { Cat } from "react-kawaii";
import "../stylesdark/cat.css";

function KawaiiCat(catmood) {
  var mood = catmood.mood;

  if (mood == "") {
    mood = "excited";
  }
  return (
    <div className="cat-wrap">
      <Cat className="cat--kawaii" size={250} mood={mood} color="#5fc9f3" />
    </div>
  );
}

export default KawaiiCat;
