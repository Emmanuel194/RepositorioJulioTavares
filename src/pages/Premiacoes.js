import React from "react";
import "./premiacoes.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import award from "../utils/award.png";

function Premiacoes() {
  return (
    <div className="awards-container">
      <h1>Premiações Recebidas ao Longo da Carreira</h1>

      <div className="award">
        <Carousel showThumbs={false}>
          <div>
            <img src={award} alt="Premiação 1 - Imagem 1" />
          </div>
          <div>
            <img src={award} alt="Premiação 1 - Imagem 2" />
          </div>
          <div>
            <img src={award} alt="Premiação 1 - Imagem 3" />
          </div>
        </Carousel>
        <div className="award-info">
          <h2>Título da Premiação 1</h2>
          <p>História e descrição da premiação 1...</p>
        </div>
      </div>

      <div className="award">
        <Carousel showThumbs={false}>
          <div>
            <img src={award} alt="Premiação 2 - Imagem 1" />
          </div>
          <div>
            <img src={award} alt="Premiação 2 - Imagem 2" />
          </div>
        </Carousel>
        <div className="award-info">
          <h2>Título da Premiação 2</h2>
          <p>História e descrição da premiação 2...</p>
        </div>
      </div>

      <div className="award">
        <Carousel showThumbs={false}>
          <div>
            <img src={award} alt="Premiação 3 - Imagem 1" />
          </div>
          <div>
            <img src={award} alt="Premiação 3 - Imagem 2" />
          </div>
        </Carousel>
        <div className="award-info">
          <h2>Título da Premiação 3</h2>
          <p>História e descrição da premiação 3...</p>
        </div>
      </div>

      {/* Adicione mais premiações conforme necessário */}
    </div>
  );
}

export default Premiacoes;
