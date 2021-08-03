import React from "react";
import Calc from "../components/Calc";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="homeContainer">
      <h1>React & Typscript</h1>
      <h2>Hello Jest - Calc</h2>
      <Calc />
    </div>
  );
}

export default Home;
