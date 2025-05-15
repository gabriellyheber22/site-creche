import React from "react";
import Imagem from "react-bootstrap/Image";
import Galeria1 from "../../assets/Imagens/galeria1.svg"
import Galeria2 from "../../assets/Imagens/galeria2.svg"
import Galeria3 from "../../assets/Imagens/galeria3.svg"
import Galeria4 from "../../assets/Imagens/galeria4.svg"
import Galeria5 from "../../assets/Imagens/galeria5.svg"
import Galeria6 from "../../assets/Imagens/galeria6.svg"
import "./galeria.css";

function Galeria (){
    return(
<>
<div className="containerGaleria">
< Imagem src = {Galeria1} alt="" className="galeria1"/>
< Imagem src = {Galeria2} alt="" className="galeria2"/>
< Imagem src = {Galeria3} alt="" className="galeria3"/>
< Imagem src = {Galeria4} alt="" className="galeria4"/>
< Imagem src = {Galeria5} alt="" className="galeria5"/>
< Imagem src = {Galeria6} alt="" className="galeria6"/>
</div>

</>
    )
}
export default Galeria;