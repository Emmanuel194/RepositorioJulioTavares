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
          Foi preso político duas vezes em Recife, passando um período na Ilha
          de Fernando de Noronha no Hospital do Exercito, Companhia da Guarda,
          Ilha de Fernando de Noronha, Casa de Detenção do Recife.
          Posteriormente foi preso no Rio de Janeiro passando por um local da
          Polícia Federal e depois levado para o Recife onde ficou no Quartel
          das Cinco Pontas e Casa de Detenção do Recife. Quando foi solto,
          poucos meses depois, teve que fugir por ser citado em um novo processo
          político, sendo mais uma vez condenado a 4 anos de detenção. Tempos
          depois foi preso em São Paulo, denunciado pelo assassino Cabo Alcelmo,
          e mais uma vez condenado. Quando foi solto ficou em São Paulo, e se
          integrou a um pequeno grupo, que posteriormente formou a Convergência
          Socialista, do qual foi seu Coordenador Nacional. Durante o governo do
          Ditador Geisel, quando já se discutia mais livremente questão da
          Anistia, foi preso em São Paulo. Participou desde o início das
          discussões e organização do Partido dos Trabalhadores, sendo de do seu
          Diretório Estadual de São PT durante duas gestões, da coordenação da
          Macro ABC três vezes e outras tantas do diretório Municipal de
          Diadema.
        </p>
        <p>
          Tem seis livros publicados: Brennand: arte e sonho, A Arte na
          Encruzilhada dos Tempos - Ricardo Amadasi, Camarada Fernandes - Onde
          Tem um Comunista, Tem o Partido, junto com Gonazaga do Monte,
          Esquecer, jamais!, Outros Outubros Virão... Revoluções Proletárias, PT
          Diadema - Uma história de militância e luta. Participa também dos
          seguintes livros: Tiradentes, um presídio de presos políticos, Museu
          da Solidariedade Salvador Allende, Estéticas, sonhos e utopias dos
          artistas do mundo pela liberdade.
        </p>
      </div>
    </div>
  );
}

export default Home;
