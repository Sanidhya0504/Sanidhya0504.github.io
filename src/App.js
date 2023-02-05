import "./App.css";
import React from "react";
import Light from "./light";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dark from "./dark";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Light />}></Route>
        <Route path="/light" element={<Light />}></Route>
        <Route path="/dark" element={<Dark />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
