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
        <h1>Júlio Tavares</h1>
        <p>
          Escritor e poeta, tem se dedicado há vários anos ao estudo das
          relações entre arte, cultura e afirmação nacional, como parte da
          construção de um mundo fraterno e democrático. Durante os anos de
          1978/1979, foi um dos editores do jornal Versus, que tinha como sua
          característica principal ser um espaço de debate cultural e artístico,
          brasileiro e latino-americano, também voltado à luta pela
          redemocratização do brasil. Posteriormente, na editora aparte, foi um
          dos editores do jornal em Em Tempo e da revista Perspectiva
          Internacional. Colaborou com várias revistas e jornais.
        </p>
        <p>
          Passou dois anos na Paraíba, nordeste, onde criou a editora Colina da
          Primavera, que possibilitou a publicação de livros direcionados aos
          movimentos sociais e populares. Retornando a São Paulo foi assessor de
          sindicatos de trabalhores e, depois, asessor na Câmara de Vereadores
          em Diadema, cidade onde também exerceu os cargos de Diretor de
          Biblioteca e , posteriomente, Diretor de Cultura durante a gestão do
          Prefeito Mário Realli.
        </p>
        <p>
          Tem cinco livros publicados pela terra das Artes: PT Diadema- Uma
          História de militância e luta, Camarada Fernandes, onde tem comunista
          tem um partido, Outros Outubros Virão, Esquecer Jamais!, Arte e sonho.
        </p>
      </div>
    </div>
  );
}

export default Home;
