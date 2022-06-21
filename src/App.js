import "./App.css";
import Navigation from "./navigationbar.js";
import React from "react";
import Homebanner from "./components/homebanner";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Homebanner />

      <About />
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
