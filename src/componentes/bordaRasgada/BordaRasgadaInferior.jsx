import React from "react";
import Imagem from "react-bootstrap/Image";
import imgBordaRasgada from "../../assets/Imagens/designRasgadoInferior.svg"
import "./borda.css";
function BordaRasgadaInferior() {
    return (
      <Imagem src={imgBordaRasgada} alt="Borda Rasgada" className="bordaInferior"/> 
    );
  };
  
  export default BordaRasgadaInferior;