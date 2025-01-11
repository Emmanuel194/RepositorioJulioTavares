import React from "react";
import "../App.css";
import home from "../utils/home.jpeg";

function Home() {
  return (
    <div className="home-container">
      <div>
        {" "}
        <img src={home} alt="Foto do Escritor" />{" "}
      </div>
      <div className="intro">
        <h1>Julio Tavares</h1>
        <p>Arte, literatura e política</p>
      </div>
    </div>
  );
}

export default Home;
