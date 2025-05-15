import React from "react";
import Imagem from "react-bootstrap/Image";
import Carrossel from "../../componentes/carrossel/Carrossel";
import Cards from "../../componentes/cards/Cards";
import meninoSorrindo from "../../assets/Imagens/meninoSorrindo.svg";
import BordaInferior from "../../componentes/bordaRasgada/BordaRasgadaInferior";
import BordaSuperior from "../../componentes/bordaRasgada/BordaRasgadaSuperior";
import CardsSalas from "../../componentes/cardsSalas/CardsSalas";
import Galeria from "../../componentes/galeria/Galeria";
import "./Home.css";

function Home() {
  return (
    <article>
      <section className="carrossel ">
        <Carrossel />
      </section>

      <section className="nossoCMEI">
        <h2>Bem-vindo ao nosso CMEI</h2>
        <p className="homeParagrafo">
          Aqui educação e carinho andam juntos para um crescimento feliz,
          propocionando ao seu filho um ambiente seguro e acolhedor! Onde
          criamos memórias felizes enquanto desenvolvemos um grande futuro.
        </p>
        <div className="cards">
          <Cards />
        </div>
      </section>
      <BordaSuperior className="bordaSuperiorSobreNos" />
      <section className="sobreNos">
        <div className="sobreNos_info">
          <div className="sobreNos_texto">
            <h2>Sobre o CMEI Carlos Alberto Cruz</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quia, consectetur, alias fuga architecto optio, sit error eos
              deserunt illo voluptate rem qui recusandae omnis rerum nesciunt
              enim cumque aspernatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Repudiandae recusandae quasi quisquam. Deleniti,
              dolor, aut corporis ab voluptates deserunt, laboriosam accusantium
              amet facilis blanditiis fugit ut odio nostrum? Neque, odio?
            </p>
          </div>
          <Imagem
            className="sobreNos_imagem"
            src={meninoSorrindo}
            alt="Menino sorrindo mostrando as mãos"
          />
        </div>
      </section>
      <BordaInferior className="bordaInferiorSobreNos" />
      <section className="nossasSalas">
        <div className="nossaSala_texto">
          <h2>Nossas Salas de Aula</h2>
          <p>
            Nossas turmas são organizadas em três períodos: Integral, Parcial
            Matutino e Parcial Vespertino, garantindo flexibilidade para atender
            às necessidades das crianças e de suas famílias.
          </p>
        </div>
        <CardsSalas />
        <button className="nossasSalas_botao">Ver Mais Salas</button>
      </section>
      <BordaSuperior/>
      <section className="galeria">
        
        <h2>Nossa Galeria de Lembranças</h2>
        <Galeria/>

        
      </section>
      <BordaInferior/>
    </article>
  );
}
export default Home;
