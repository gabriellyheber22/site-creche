import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Imagem from "react-bootstrap/Image";
import circulo1 from "../../assets/Imagens/Icons/circulo1.png";
import icon1 from "../../assets/Imagens/Icons/icon1.svg";
import icon2 from "../../assets/Imagens/Icons/icon2.svg";
import icon3 from "../../assets/Imagens/Icons/icon3.svg";
import icon4 from "../../assets/Imagens/Icons/icon4.svg";
import circulo2 from "../../assets/Imagens/Icons/circulo2.png";
import circulo3 from "../../assets/Imagens/Icons/circulo3.png";
import circulo4 from "../../assets/Imagens/Icons/circulo4.png";
import "./cards.css";

function Cards() {
  return (
    <Row xs={1} md={4} className="row">
      <Col>
        <Card className="card">
          <div className="containerImg">
            <img src={icon1} className="icon" alt="Circulo Verde" />
            <Imagem src={circulo1} className="imgCirculo" />
          </div>
          <Card.Body>
            <Card.Title className="cardTitulo">
              Desenvolvimento<br/> e  Ensino
            </Card.Title>
            <span className="tracoColorido"/>
            <Card.Text className="cardTexto">
              Oferecemos um atendimento especializado para crianças de 0 a 5
              anos, garantindo um ambiente onde elas possam exercer todos os
              direitos de aprendizagem e desenvolvimento estabelecidos pela Base
              Nacional Comum Curricular (BNCC) para Educação Infantil.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card">
          <div className="containerImg">
            <img src={icon2} className="icon" alt="Circulo Amarelo" />
            <Imagem src={circulo2} className="imgCirculo" />
          </div>
          <Card.Body>
            <Card.Title className="cardTitulo">
              Nossos<br/> Profissionais 
            </Card.Title>
            <span className="tracoColorido2"/>
            <Card.Text className="cardTexto">
              Nossa escola conta com uma equipe preparada e especializada para
              cuidar com carinho, dedicação e segurança do desenvolvimento de
              cada criança. Aqui, cada pequeno é acolhido com amor e incentivado
              a aprender e crescer em um ambiente seguro e estimulante! 
                
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card">
          <div className="containerImg">
            <img src={icon3} className="icon" alt="" />
            <Imagem src={circulo3} className="imgCirculo" />
          </div>
          <Card.Body>
            <Card.Title className="cardTitulo">Ambiente <br/> Escolar</Card.Title>
            <span className="tracoColorido3"/>
            <Card.Text className="cardTexto">
              Nossa escola oferece um espaço amplo, seguro e acolhedor. Com salas de aula
              confortáveis, áreas verdes, brinquedos educativos e espaços
              lúdicos ideal para aprender, brincar e
              crescer com alegria!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card">
          <div className="containerImg">
            <img src={icon4} className="icon" alt="" />
            <Imagem src={circulo4} className="imgCirculo" />
          </div>
          <Card.Body>
            <Card.Title className="cardTitulo">
            Atendimento <br/> Inclusivo 
            </Card.Title>
            <span className="tracoColorido4"/>
            <Card.Text className="cardTexto">
              Oferecemos à comunidade a sala de Atendimento Educacional Especializado -  AEE,  proporcionando um atendimento inclusivo,
              contribuindo para o desenvolvimento e a estimulação cognitiva de
              crianças neurotípicas e neuroatípicas.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default Cards;
