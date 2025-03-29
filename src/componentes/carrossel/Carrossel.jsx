import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Imagem from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imagemGrande from "../../assets/Imagens/imagemCarrosselGrande1.svg";
import imagemGrande2 from "../../assets/Imagens/imagemCarrosselGrande2.svg";
import imagemGrande3 from "../../assets/Imagens/imagemCarrosselGrande3.svg";

import "./Carrossel.css";

function Carrossel() {
  return (
    <Container>
      <Row className="carrossel">
        <Col>
          <Carousel keyboard={true} slide={false}>
            <Carousel.Item>
              <Imagem
                className="d-block w-100 imagemSlide"
                src={imagemGrande}
                alt="Figura do Slide"
                fluid
              />
              <Carousel.Caption className="legenda">
                <h3>Centro Municipal de Educação Infantil - CMEI</h3>
                <h1>Carlos Alberto Cruz</h1>
                <p>
                  É na Educação Infantil que cada pequena descoberta se torna um
                  grande aprendizado!
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Imagem
                className="d-block w-100"
                src={imagemGrande2}
                alt="Figura do Slide"
              />
              <Carousel.Caption className="legenda">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Imagem
                className="d-block w-100"
                src={imagemGrande3}
                alt="Figura do Slide"
              />
              <Carousel.Caption className="legenda">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrossel;
