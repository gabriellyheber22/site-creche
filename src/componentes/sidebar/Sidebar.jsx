import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './sidebar.css';
import menuHamburguer from '../../assets/Imagens/menuHamburguerPequeno.svg';




function Sidebar() {
  
  return (
    <Menu right width={ '70%' } customBurgerIcon = {  < img  src = {menuHamburguer}  / >} aria-hidden = 'false' >
   <Link to="/">Home</Link>
   <Link to="/nossaEquipe">Nossa Equipe</Link>
   <Link to="/Turmas">Turmas</Link>
   <Link to="/Contato">Contato</Link>
      
    </Menu>
  );
};
export default Sidebar;
