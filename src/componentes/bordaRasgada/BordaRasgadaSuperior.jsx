import React from "react";
import Imagem from "react-bootstrap/Image";
import imgBordaRasgada from "../../assets/Imagens/designRasgadoSuperior.svg";
import imgBordaRasgadaPequena from "../../assets/Imagens/designRagasdoPequenoSuperior.svg";
import imgBordaRasgadaMedio from "../../assets/Imagens/designRagasdoMedioSuperior.svg";
import "./borda.css";
function BordaRasgadaSuperior() {
  return (
    <>
      <Imagem
        src={imgBordaRasgada}
        alt="Borda Rasgada"
        className="bordaSuperior"
      />
      <Imagem
        src={imgBordaRasgadaPequena}
        alt="Borda Rasgada"
        className="bordaSuperiorPequena"
      />
      <Imagem
        src={imgBordaRasgadaMedio}
        alt="Borda Rasgada"
        className="bordaSuperiorMedio"
      />
    </>
  );
}

export default BordaRasgadaSuperior;
