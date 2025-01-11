import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/livros">Livros</Link>
        </li>
        <li>
          <Link to="/premiacoes">Premiações</Link>
        </li>
        <li>
          <Link to="/historia">História</Link>
        </li>
        <li>
          <Link to="/poesias">Poesias Autorais</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
