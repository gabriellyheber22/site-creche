import React from "react"
import Imagem from "react-bootstrap/Image";
import bercario from "../../assets/Imagens/bercario.svg"
import maternal1 from "../../assets/Imagens/maternal1.svg"
import maternal2 from "../../assets/Imagens/maternal2.svg"
import "./cardsSalas.css";
function CardsSalas (){
    return (<>
      <div className="nossasSalas_cards">
          <div className="cardSalas">
              <div className="cardImg">
                <Imagem className="nossaSala_imagem" src={bercario} alt="Imagem de uma sala do berçário, contendo vário berços"/>
              </div>
              <div className="cardTexto">
                <h3>Sala do Berçário</h3>
                <h4>Período: 07:00 às 17:00</h4>
                <p>Nosso berçário possui uma equipe qualificada, estimulamos o desenvolvimento sensorial, motor e emocional por meio de cuidados, brincadeiras e muito carinho. Aqui, cada pequeno cresce com amor e segurança!</p>
  
              </div>
              <div className="cardQuantitativo">
                <div className="quantitativoVagas">
                  <h4>Quantidade de<br/>
                  Vagas</h4>
                  <p>10</p>
                </div>
                <div className="quantitativoIdades">
                  <h4>Idades dos <br/>Bebês</h4>
                  <p>0-1</p>
                </div>
              </div>
            </div>
  
  
            <div className="cardSalas">
              <div className="cardImg">
                <Imagem className="nossaSala_imagem" src={maternal1}/>
              </div>
              <div className="cardTexto">
                <h3>Sala do Maternal 1</h3>
                <h4>Período: 07:00 às 17:00</h4>
                <p>Nosso Maternal I possui uma equipe qualificada, estimulamos o desenvolvimento sensorial, motor e emocional por meio de cuidados, brincadeiras e muito carinho.  Aqui, cada pequeno cresce com amor e segurança!</p>
              </div>
              <div className="cardQuantitativo">
                <div className="quantitativoVagas">
                  <h4>Quantidade de<br/>
                  Vagas</h4>
                  <p>10</p>
                </div>
                <div className="quantitativoIdades">
                  <h4>Idades das<br/> Crianças</h4>
                  <p>1-2</p>
                </div>
              </div>
            </div>
  
            
  
            <div className="cardSalas">
              <div className="cardImg">
                <Imagem className="nossaSala_imagem" src={maternal2}/>
              </div>
              <div className="cardTexto">
                <h3>Sala do Maternal 2</h3>
                <h4>Período: 07:00 às 17:00</h4>
                <p>Nosso Maternal 2 possui uma equipe qualificada, estimulamos o desenvolvimento sensorial, motor e emocional por meio de cuidados, brincadeiras e muito carinho. Aqui, cada pequeno cresce com amor e segurança!</p>
              </div>
              <div className="cardQuantitativo">
                <div className="quantitativoVagas">
                  <h4>Quantidade de<br/>
                  Vagas</h4>
                  <p>18</p>
                </div>
                <div className="quantitativoIdades">
                  <h4>Idades dos<br/> Bebês</h4>
                  <p>2-3</p>
                </div>
              </div>
            </div>
          </div>
      </>)
}
export default CardsSalas;