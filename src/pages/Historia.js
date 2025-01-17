import React from "react";
import "./historia.css";
import saopaulo from "../utils/saopaulo/saopaulo.jpg";
import saopaulo2 from "../utils/saopaulo/saopaulo2.jpg";
import saopaulo3 from "../utils/saopaulo/saopaulo3.jpg";
import saopaulo4 from "../utils/saopaulo/saopaulo4.jpg";
import saopaulo5 from "../utils/saopaulo/saopaulo5.jpg";
import brennand1 from "../utils/brennandRecife/brennand1.jpg";
import brennand2 from "../utils/brennandRecife/brennand2.JPG";
import brennand3 from "../utils/brennandRecife/brennand3.JPG";
import brennand4 from "../utils/brennandRecife/brennand4.JPG";
import brennand5 from "../utils/brennandRecife/brennand5.JPG";
import brennand6 from "../utils/brennandRecife/brennand6.jpg";
import brennand7 from "../utils/brennandRecife/brennand7.JPG";
import brennand8 from "../utils/brennandRecife/brennand8.JPG";
import brennand9 from "../utils/brennandRecife/brennand9.jpg";
import brennand10 from "../utils/brennandRecife/brennand10.jpg";
import brennand11 from "../utils/brennandRecife/brennand11.jpg";
import brennand12 from "../utils/brennandRecife/brennand12.JPG";
import brennand13 from "../utils/brennandRecife/brennand13.jpg";
import brennand14 from "../utils/brennandRecife/brennand14.jpg";
import brennand15 from "../utils/brennandRecife/brennand15.jpg";
import brennand16 from "../utils/brennandRecife/brennand16.jpg";
import brennand17 from "../utils/brennandRecife/brennand17.jpg";
import brennand18 from "../utils/brennandRecife/brennand2.JPG";

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
          <img src={saopaulo3} alt="Foto da Premiação" />
          <img src={saopaulo4} alt="Foto da Premiação" />
          <img src={saopaulo5} alt="Foto da Premiação" />
        </div>
      </div>

      <div className="moment">
        <div className="moment-description">
          <h2>Premiação Literária</h2>
          <p>Descrição da premiação recebida por Julio...</p>
        </div>
        <div className="moment-photos">
          <img src={brennand1} alt="Foto da Premiação" />
          <img src={brennand2} alt="Foto da Premiação" />
          <img src={brennand3} alt="Foto da Premiação" />
          <img src={brennand4} alt="Foto da Premiação" />
          <img src={brennand5} alt="Foto da Premiação" />
          <img src={brennand6} alt="Foto da Premiação" />
          <img src={brennand7} alt="Foto da Premiação" />
          <img src={brennand8} alt="Foto da Premiação" />
          <img src={brennand9} alt="Foto da Premiação" />
          <img src={brennand10} alt="Foto da Premiação" />
          <img src={brennand11} alt="Foto da Premiação" />
          <img src={brennand12} alt="Foto da Premiação" />
          <img src={brennand13} alt="Foto da Premiação" />
          <img src={brennand14} alt="Foto da Premiação" />
          <img src={brennand15} alt="Foto da Premiação" />
          <img src={brennand16} alt="Foto da Premiação" />
          <img src={brennand17} alt="Foto da Premiação" />
          <img src={brennand18} alt="Foto da Premiação" />
        </div>
      </div>

      {/* Adicione mais momentos conforme necessário */}
    </div>
  );
}

export default Historia;
