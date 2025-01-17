import React from "react";
import "./premiacoes.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homenagem1 from "../utils/homenagem1/homenagem1.JPG";
import homenagem2 from "../utils/homenagem1/homenagem2.JPG";
import homenagem3 from "../utils/homenagem1/homenagem3.JPG";
import homenagem4 from "../utils/homenagem1/homenagem4.JPG";
import leitura1 from "../utils/leituraFabricas/leitura1.jpg";
import leitura2 from "../utils/leituraFabricas/leitura12.JPG";
import leitura3 from "../utils/leituraFabricas/leitura3.jpg";
import leitura4 from "../utils/leituraFabricas/leitura4.JPG";
import leitura5 from "../utils/leituraFabricas/leitura5.JPG";
import leitura6 from "../utils/leituraFabricas/leitura6.JPG";
import leitura7 from "../utils/leituraFabricas/leitura7.JPG";
import leitura8 from "../utils/leituraFabricas/leitura8.JPG";
import leitura9 from "../utils/leituraFabricas/leitura9.JPG";
import leitura10 from "../utils/leituraFabricas/leitura10.JPG";
import leitura11 from "../utils/leituraFabricas/leitura11.JPG";
import leitura12 from "../utils/leituraFabricas/leitura12.JPG";
import leitura13 from "../utils/leituraFabricas/leitura13.JPG";
import leitura14 from "../utils/leituraFabricas/leitura14.JPG";
import leitura15 from "../utils/leituraFabricas/leitura15.JPG";
import leitura16 from "../utils/leituraFabricas/leitura16.JPG";
import leitura17 from "../utils/leituraFabricas/leitura17.JPG";

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
};

function Premiacoes() {
  return (
    <div className="awards-container">
      <h1>Premiações e Homenagens recebidas ao longo da carreira</h1>

      <div className="award">
        <h2>Tributo dos Sindicatos</h2>
        <p>
          Esta foi uma homenagem de todos os sindicatos do partido trabalhista.
        </p>
        <Carousel
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div
                style={{ ...arrowStyles, left: 15 }}
                onClick={onClickHandler}
                title={label}
              >
                &#9664;
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                style={{ ...arrowStyles, right: 15 }}
                onClick={onClickHandler}
                title={label}
              >
                &#9654;
              </div>
            )
          }
        >
          <div>
            <img src={homenagem1} alt="Premiação 1 - Imagem 1" />
          </div>
          <div>
            <img src={homenagem2} alt="Premiação 1 - Imagem 2" />
          </div>
          <div>
            <img src={homenagem3} alt="Premiação 1 - Imagem 3" />
          </div>
          <div>
            <img src={homenagem4} alt="Premiação 1 - Imagem 3" />
          </div>
        </Carousel>
        <div className="award-info">
          <h2>Leitura nas Fábricas</h2>
          <p>
            O projeto Leitura nas Fábricas foi uma iniciativa do Sindicato dos
            Metalúrgicos do ABC que levou bibliotecas para dentro das empresas.
            O objetivo era aproximar os trabalhadores dos livros
          </p>
        </div>
      </div>

      <div className="award">
        <Carousel
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div
                style={{ ...arrowStyles, left: 15 }}
                onClick={onClickHandler}
                title={label}
              >
                &#9664;
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                style={{ ...arrowStyles, right: 15 }}
                onClick={onClickHandler}
                title={label}
              >
                &#9654;
              </div>
            )
          }
        >
          <div>
            <img src={leitura1} alt="Premiação 2 - Imagem 1" />
          </div>
          <div>
            <img src={leitura2} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura3} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura4} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura5} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura6} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura7} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura8} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura9} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura10} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura11} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura12} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura13} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura14} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura15} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura16} alt="Premiação 2 - Imagem 2" />
          </div>
          <div>
            <img src={leitura17} alt="Premiação 2 - Imagem 2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Premiacoes;
