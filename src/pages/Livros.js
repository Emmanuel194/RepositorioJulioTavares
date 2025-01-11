import React from "react";
import "./livro.css";
import amadasi from "../utils/amadasi.jpg";
import Francisco from "../utils/Francisco.jpg";
import brennand from "../utils/brennand.png";
import esquecer from "../utils/esquecer.jpg";
import revolucao from "../utils/revolucao.jpg";
import solidariedade from "../utils/solidariedade.jpg";
import tiradentes from "../utils/tiradentes.jpg";
import Versus from "../utils/Versus.jpg";
import livropt from "../utils/livropt.jpg";

function Livros() {
  return (
    <div className="books-container">
      <h1>Aqui estão meus livros publicados</h1>

      <div className="book">
        <img src={brennand} alt="Capa do Livro 1" />
        <div className="book-info">
          <h2>Brennand: arte e sonho</h2>
          <p>
            Ensaio sobre o pintor, escultor, ceramista, gravador, muralista
            Francisco Brennand, detentor de inúmeros prêmios pelas suas obras de
            pintura e cerâmica, no Brasil e em vários outros países. Ele é
            considerado uma das maiores expressões das artes plásticas no atual
            cenário mundial. Júlio Tavares fotografou e pesquisou a obra de
            Brennand durante vários anos, ao mesmo tempo em que estudava as
            relações entre arte, cultura, afirmação nacional e a construção de
            uma nova sociedade, mais justa e fraterna.
          </p>
          <a href="URL_DO_LIVRO_1">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={amadasi} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>A Arte na Encruzilhada dos Tempos - Ricardo Amadasi</h2>
          <p>
            Este livro explora a fascinante intersecção entre a arte e a
            passagem do tempo. Amadasi e Tavares analisam como diferentes épocas
            influenciam tanto a criação quanto a interpretação artística. A obra
            oferece uma reflexão profunda sobre como os contextos históricos,
            culturais e sociais moldam as expressões artísticas e como a arte,
            por sua vez, reflete e desafia os tempos em que é produzida.
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={Francisco} alt="Capa do Livro 3" />
        <div className="book-info">
          <h2>Camarada Fernandes - Onde Tem um Comunista, Tem um Partido</h2>
          <p>
            A obra narra a vida de Zé Fernandes, um sindicalista e combatente
            socialista, destacando sua trajetória de luta e dedicação ao
            movimento comunista no Brasil me de tambem a sinopi do livro
            Camarada Fernandes Onde Tem um Comunista, Tem um partido por favor
            "Camarada Fernandes - Onde Tem um Comunista, Tem um Partido" é um
            livro escrito por Gonzaga do Monte e Júlio Tavares. A obra narra a
            vida de Zé Fernandes, um sindicalista e combatente socialista,
            destacando sua trajetória de luta e dedicação ao movimento comunista
            no Brasil. A sinopse do livro mostra como Zé Fernandes se envolveu
            em diversas lutas sociais e políticas ao longo de sua vida, sempre
            mantendo-se fiel aos ideais comunistas e ao partido ao qual
            pertencia. A obra é uma homenagem ao seu compromisso e à sua
            contribuição para a causa socialista
          </p>
          <a href="URL_DO_LIVRO_3">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={esquecer} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>Esquecer, jamais!</h2>
          <p>
            Memórias. O livro de Júlio Tavares é fundamental para se entender o
            processo ditatorial brasileiro. É um livro que fala de dores, de
            temores, cita a luta de homens bravos que se dilaceraram em busca de
            um mundo melhor. Homens bravos como Júlio Tavares, que reconstrói
            aqui seus passos em tempos difíceis, de sofrimento mas também de
            esperanças; homens bravos como Júlio Santana, o líder negro dos
            canaviais pernambucanos; o saudoso Gregório Bezerra; Ayberé de Sá,
            também pernambucano; Silvia Montaroyos; Hermínio Sachetta, saudoso;
            e Mário Pedrosa. É um livro para ser lido com reverência a Júlio
            Tavares.
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={revolucao} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>Outros Outubros Virão... Revoluções Proletárias</h2>
          <p>
            Os artigos que compõem este livro, publicados no jornal Em Tempo,
            visam demonstrar que quando se inicia a luta pela revolução não
            existe nenhuma segurança 'matemática' na vitória. Na verdade, o
            caminho está crivado de derrotas, de reavaliações estratégicas e
            táticas, de erros, mas também é marcado por uma disposição férrea,
            uma determinação muito grande dos dirigentes revolucionários em
            alcançar a grande meta. Os artigos são de autoria de Júlio Tavares,
            Juarez Guimarães, José correia, Isaac Akcelrud, Michel Lowy e Ernest
            Mandel.
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={livropt} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>PT Diadema - Uma história de militância e luta</h2>
          <p>
            O PT de Diadema tem uma história coletiva de uma maioria de homens e
            mulheres de mãos calejadas, trabalhadores simples, migrantes que
            muitas vezes, em condições duríssimas, buscaram concretizar os
            sonhos de um mundo novo, sem desigualdades sociais e sem opressão.
            Um partido forjado no fogo da luta social e na disputa política e
            ideológica. Toda essa riqueza política e social, esse processo
            complexo e extremamente vigoroso, com suas lições, está aberto,
            necessita ser debatido, estudado. Esse livro que agora apresentamos
            é parte desse esforço analítico e militante."
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>

      <h1>Participação em outros livros</h1>

      <div className="book">
        <img src={solidariedade} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>Museu da Solidariedade Salvador Allende</h2>
          <p>
            Obra publicada pelo Museu Salvador Allende, em parceria com o Sesi,
            com curadoria de Emanuel Araújo, fundador e atual presidente do
            Museu Afrobrasileiro, em São Paulo. O Museu de Solidariedade foi
            criado por Mário Pedrosa, político e considerado o maior critico de
            arte do Brasil, então exilado no Chile, durante o Governo de
            Salvador Allende. Recebeu obras de arte se vários artistas
            consagrados, de vários partes do mundo, como, entre outros, Picasso,
            Miró, Calder Siqueiros, Nissen. Com o Golpe Militar no Chile, foi
            assassinado o presidente Salvador Allende, milhares de chilenos e
            inúmeros exilados que estavam na país. Mario Pedrosa então teve que
            fugir do país e exilar, então, na embaixada do....., Após a derrota
            da Ditadura Militar, .., anos depois, com a redemocratização do
            país, foi reorganizado o Museu, passando a se chamar Museu de
            Solidariedade Salvador Allende. A sua primeira exposição fora do
            Chile foi em São Paulo em homenagem ao seu organizador e primeiro
            dirigente, Mário Pedrosa. Esse evento, que estive presente, contou
            com a partipação de vários artistas e intelectuais latino
            americanos, entre eles Isabel Allende Bussi
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={tiradentes} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>Tiradentes, um presídio da ditadura</h2>
          <p>
            Este livro organizado por Alípio Freire, Izaías Almada e J.A. De
            Granville Ponce, e composto basicamente com artigos de ex-presos
            políticos, de várias organizações de esquerda, que passaram pelo
            referido presidio. É um testemunho humano de imensa importância para
            o entendimento de uma época marcada pela Ditadura Militar.
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>

      <div className="book">
        <img src={Versus} alt="Capa do Livro 2" />
        <div className="book-info">
          <h2>Versus - Paginas Da Utopia</h2>
          <p>
            Organizado por Omar de Barros Filho, com projeto gráfico de Toninho
            Mendes, publicado pela Beco de Zougue Editorial Ltda, Rio de
            Janeiro, é um livro imperdível para os que querem conhecer o
            jornalismo de resistência contra a Ditadura Militar durante os anos
            70. O Versus, fundado por Marcos Faerman, dos grandes jornalistas
            brasileiros, foi ousado, inovador, dialogando de forma alternativa
            com a cultura, a história brasileira e latino americana, com a
            política, foi um espaço de esperança de possíveis tempos futuros de
            liberdade, e por isso de espaço luta contra a Ditadura Militar.
          </p>
          <a href="URL_DO_LIVRO_2">Baixar o livro</a>
        </div>
      </div>
    </div>
  );
}

export default Livros;
