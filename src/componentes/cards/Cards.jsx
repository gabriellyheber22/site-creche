import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import circulo1 from "../../assets/Imagens/Icons/circulo1.png"
import icon1 from "../../assets/Imagens/Icons/icon1.svg"
import icon2 from "../../assets/Imagens/Icons/icon2.svg"
import icon3 from "../../assets/Imagens/Icons/icon3.svg"
import icon4 from "../../assets/Imagens/Icons/icon4.svg"
import circulo2 from "../../assets/Imagens/Icons/circulo2.png"
import circulo3 from "../../assets/Imagens/Icons/circulo3.png"
import circulo4 from "../../assets/Imagens/Icons/circulo4.png"
import "./cards.css";

function Cards() {
  return (
    <Row xs={1} md={4} className="row">
      <Col>
        <Card className="card" >
          <img src={icon1} alt="" className="icon"/>
          <Card.Img variant="top" src={circulo1} />
          <Card.Body>
            <Card.Title className="cardTitulo">Desenvolvimento e Ensino </Card.Title>
            <Card.Text>
            Oferecemos um atendimento especializado para crianças de 0 a 5 anos, garantindo um ambiente acolhedor e estimulante, onde elas têm a oportunidade de Conviver, Brincar, Participar, Explorar, Expressar e Conhecer-se, de modo a exercer todos os direitos da Aprendizagem e Desenvolvimento segundo a BNCC.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card" >
        <img src={icon2} alt="" className="icon"/>
          <Card.Img variant="top" src={circulo2} />
          <Card.Body>
            <Card.Title className="cardTitulo">Proficionais Especializados</Card.Title>
            <Card.Text>
            Nossa escola conta com uma equipe preparada e especializada para cuidar com carinho, dedicação e segurança do desenvolvimento de cada criança. Aqui, cada pequeno é acolhido com amor e incentivado a aprender e crescer em um ambiente seguro e estimulante!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card" >
        <img src={icon3} alt="" className="icon"/>
          <Card.Img variant="top" src={circulo3}  />
          <Card.Body>
            <Card.Title className="cardTitulo">Nosso Espaço</Card.Title>
            <Card.Text>
            Nossa escola oferece um espaço amplo, seguro e acolhedor, pensado para estimular o desenvolvimento das crianças. Com salas de aula confortáveis, áreas verdes, brinquedos educativos e espaços lúdicos, criamos um ambiente ideal para aprender, brincar e crescer com alegria!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card" >
        <img src={icon4} alt="" className="icon"/>
          <Card.Img variant="top" src={circulo4} />
          <Card.Body>
            <Card.Title className="cardTitulo">Atendimentos Educacional Especializado - AEE</Card.Title>
            <Card.Text>
            Oferecemos à comunidade um atendimento inclusivo e especializado, contribuindo para o desenvolvimento e a estimulação cognitiva de crianças neurotípicas e neuroatípicas, garantindo um ambiente acolhedor e adaptado às necessidades de cada criança
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default Cards;
