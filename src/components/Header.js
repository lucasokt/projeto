import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBagShopping, FaCakeCandles, FaCircleInfo, FaHouse } from 'react-icons/fa6';

function Header() {
  return (
    <header>
      <div>
        <p><Link className="marca" to="/">Bolo</Link></p>
        <span>FESTIVAIS DE FATIAS</span>
      </div>
      <nav className="menu-cabecalho" aria-label="Navegação principal">
        <NavLink to="/" end>
          <FaHouse aria-hidden="true" />
          Início
        </NavLink>
        <NavLink to="/como-funciona">
          <FaCircleInfo aria-hidden="true" />
          Como funciona
        </NavLink>
        <NavLink to="/bolos">
          <FaCakeCandles aria-hidden="true" />
          Bolos
        </NavLink>
        <NavLink className="menu-vender" to="/anunciar">
          <FaBagShopping aria-hidden="true" />
          Quero vender
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
