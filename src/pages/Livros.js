import React from "react";
import "./livro.css";
import livro from "../utils/livro.jpg";

function Livros() {
  return (
    <div className="books-container">
      <h1>Aqui estão meus livros publicados</h1>

      <div className="book">
        <img src={livro} alt="Capa do Livro 1" />
        <div className="book-info">
          <h2>Título do Livro 1</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus optio dolorum iure saepe, ullam cupiditate, alias
            deleniti expedita quaerat atque vitae illum ad est odit? Eveniet
            pariatur voluptates eligendi consequatur.
          </p>
          <a href="URL_DO_LIVRO_1">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={livro} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>Título do Livro 2</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            iusto, similique quae et porro tempora saepe error at, impedit
            rerum, molestias odit exercitationem ipsum. Impedit in dolorem quam
            sed repellendus!
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={livro} alt="Capa do Livro 3" />
        <div className="book-info">
          <h2>Título do Livro 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            corrupti cupiditate. Minima sunt consequatur perferendis totam
            mollitia cupiditate ullam nesciunt recusandae, voluptate molestias
            quia, culpa id quas iusto necessitatibus sapiente? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nobis corporis accusantium
            voluptas eaque libero! Velit rerum nobis libero, ratione officia
            corporis consequatur ex est illo consequuntur dolore ullam, ipsam
            dolores.
          </p>
          <a href="URL_DO_LIVRO_3">Baixar o livro</a>
        </div>
      </div>

      {/* Adicione mais livros conforme necessário */}
    </div>
  );
}

export default Livros;
