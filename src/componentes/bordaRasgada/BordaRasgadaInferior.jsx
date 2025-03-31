import React from "react";
import Imagem from "react-bootstrap/Image";
import BordaRasgada from "../../assets/Imagens/designRasgadoInferior.svg";
import BordaRasgadaPequena from "../../assets/Imagens/designRagasdoPequenoInferior.svg";
import BordaRasgadaMedio from "../../assets/Imagens/designRagasdoMedioInferior.svg";
import "./borda.css";
function BordaRasgadaInferior() {
    return (
     <><Imagem
     src={BordaRasgada}
     alt="Borda Rasgada"
     className="bordaInferiorGrande"
   />
   <Imagem
     src={BordaRasgadaPequena}
     alt="Borda Rasgada"
     className="bordaInferiorPequena"
   />
   <Imagem
     src={BordaRasgadaMedio}
     alt="Borda Rasgada"
     className="bordaInferiorMedio"
   /></>
    );
  };
  
  export default BordaRasgadaInferior;