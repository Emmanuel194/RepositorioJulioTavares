import React from "react";
import "./historia.css";
import saopaulo from "../utils/saopaulo/saopaulo.jpg";
import saopaulo2 from "../utils/saopaulo/saopaulo2.jpg";
import saopaulo3 from "../utils/saopaulo/saopaulo3.jpg";
import saopaulo4 from "../utils/saopaulo/saopaulo4.jpg";

function Historia() {
  return (
    <div className="history-container">
      <div className="moment">
        <div className="moment-description">
          <h2>Lançamento do Livro Arte e sonho</h2>
          <p>
            Fotos do momento do lançamento do livro arte e sonho em São Paulo
          </p>
        </div>
        <div className="moment-photos">
          <img src={saopaulo} alt="Foto da Reunião" />
          <img src={saopaulo2} alt="Foto da Reunião" />
        </div>
      </div>

      <div className="moment">
        <div className="moment-description">
          <h2>Premiação Literária</h2>
          <p>Descrição da premiação recebida por Julio...</p>
        </div>
        <div className="moment-photos">
          <img src={saopaulo3} alt="Foto da Premiação" />
          <img src={saopaulo4} alt="Foto da Premiação" />
        </div>
      </div>

      {/* Adicione mais momentos conforme necessário */}
    </div>
  );
}

export default Historia;
