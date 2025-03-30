import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import logoPequena from "../../assets/Imagens/logoPequena.svg";
import logoGrande from "../../assets/Imagens/logoGrande.svg";
import botaoMatricula from "../../assets/Imagens/matriculaTelasMaiores.svg";
import brasaoPequeno from "../../assets/Imagens/brasaoBBG-branco-pequeno.svg";
import BordaSuperior from "../bordaRasgada/BordaRasgadaSuperior"

import "./Header.css";

function Header() {
  return (
    <header>
      
      <div className="containerHeader">
        <a href="https://www.barradobugres.mt.gov.br/" target="_blank">
          <img
            src={brasaoPequeno}
            alt="Brasão com linhas brancas da Prefeitura Municipal de Barra do Bugres-MT"
          />
        </a>
      </div>

      <nav className="navBar">
        <div className="containerLogo">
          <Link to="/">
            <img className="logoPequena" src={logoPequena} alt="Logo do CMEI Carlos Albeto Cruz" />
            <img className="logoGrande" src={logoGrande} alt="Logo do CMEI Carlos Albeto Cruz" />
          </Link>
        </div>

        <div className="sidebarMenuMobile">
            <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"} c
            />
        </div>
        <div className="navMenuDesktop">
            <ul className="navBarUl">
                <li>
                <Link to="/">Início</Link>
                </li>
                <li>
                <Link to="/nossaEquipe">Nossa Equipe</Link>
                </li>
                <li>
                <Link to="/turmas">Turmas</Link>
                </li>
                <li>
                <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </div>
        <div className="matricula">
          <a href="#">
            <img src={botaoMatricula} alt="Botão de matrícula" />
          </a>
        </div>
      </nav>
      <BordaSuperior/>
    </header>
  );
}
export default Header;
