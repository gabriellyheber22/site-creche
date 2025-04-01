import React from "react";
import Carrossel from "../../componentes/carrossel/Carrossel";
import Cards from "../../componentes/cards/Cards"
import "./Home.css";

function Home() {
  return (
    <article>
      <section className="carrossel ">
        <Carrossel />
      </section>
     
      <section className="nossoCMEI">
       <h2>Bem-vindo ao nosso CMEI</h2>
       <p className="homeParagrafo">Aqui educação e carinho andam juntos para um crescimento feliz, propocionando ao seu filho um ambiente seguro e acolhedor! Onde criamos memórias felizes enquanto desenvolvemos um grande futuro.</p>
       <div className="cards"><Cards/></div>
      
      </section>
    </article>
  );
}
export default Home;
