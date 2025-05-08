import React from "react";
import Imagem from "react-bootstrap/Image";
import imgBordaRasgada from "../../assets/Imagens/designRasgadoSuperior.svg";
import imgBordaRasgadaPequena from "../../assets/Imagens/designRagasdoPequenoSuperior.svg";
import imgBordaRasgadaMedio from "../../assets/Imagens/designRagasdoMedioSuperior.svg";
import "./borda.css";
function BordaRasgadaSuperior( { className = "" }) {
  return (
    <>
      <Imagem
        src={imgBordaRasgada}
        alt="Borda Rasgada"
        className={`bordaSuperior  ${className}`}
      />
      <Imagem
        src={imgBordaRasgadaPequena}
        alt="Borda Rasgada"
        className={`bordaSuperiorPequena  ${className}`}
      />
      <Imagem
        src={imgBordaRasgadaMedio}
        alt="Borda Rasgada"
        className={`bordaSuperiorMedio  ${className}`}
      />
    </>
  );
}

export default BordaRasgadaSuperior;
