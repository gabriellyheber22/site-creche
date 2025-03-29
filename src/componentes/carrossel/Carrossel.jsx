import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Imagem from "react-bootstrap/Image";
import imagemGrande from "../../assets/Imagens/imagemCarrosselGrande1.svg";
import imagemGrande2 from "../../assets/Imagens/imagemCarrosselGrande2.svg";
import imagemGrande3 from "../../assets/Imagens/imagemCarrosselGrande3.svg";

import "./Carrossel.css";

function Carrossel() {
  return (
   
          <div className="carrossel">
            <Carousel className="carousel" keyboard={true} interval={3000}>
              <Carousel.Item>
                <Imagem
                  className="d-block w-100 h-50 imagemSlide"
                  src={imagemGrande}
                  alt="Figura do Slide"
                  fluid
                />
                <Carousel.Caption className="legenda">
                  <h3>Centro Municipal de Educação Infantil - CMEI</h3>
                  <h1>Carlos Alberto <br/>Cruz</h1>
                  <p>
                    É na Educação Infantil que cada pequena descoberta se torna um
                    grande aprendizado!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Imagem
                  className="d-block w-100 imagemSlide"
                  src={imagemGrande2}
                  alt="Figura do Slide"
                />
                <Carousel.Caption className="legenda">
                  <h3>Centro Municipal de Educação Infantil - CMEI</h3>
                  <h1>Carlos Alberto <br/>Cruz</h1>
                  <p>
                    É na Educação Infantil que cada pequena descoberta se torna um
                    grande aprendizado!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Imagem
                  className="d-block w-100 imagemSlide"
                  src={imagemGrande3}
                  alt="Figura do Slide"
                />
               <Carousel.Caption className="legenda">
                  <h3>Centro Municipal de Educação Infantil - CMEI</h3>
                  <h1>Carlos Alberto <br/>Cruz</h1>
                  <p>
                    É na Educação Infantil que cada pequena descoberta se torna um
                    grande aprendizado!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
       
  );
}

export default Carrossel;
