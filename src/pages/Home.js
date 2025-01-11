import React from "react";
import "../App.css";
import home from "../utils/home.jpeg";

function Home() {
  return (
    <div className="home-container">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/home.jpeg"}
          alt="Foto do Escritor"
        />
      </div>
      <div className="intro">
        <h1>Bem-vindo ao Portfólio</h1>
        <p>Introdução ao escritor...</p>
      </div>
    </div>
  );
}

export default Home;
