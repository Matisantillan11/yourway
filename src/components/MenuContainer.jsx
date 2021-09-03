import React from 'react';
import { Link } from 'react-router-dom';

export const MenuContainer = ({ handleMenu, state }) => {
  return (
    <>
      <ul className="menu_item" status={state} onClick={handleMenu}>
        <li className="menu_item_link" id="logButton">
          Ingresar
        </li>
        <li className="menu_item_link">
          <Link className="link-menu" to="/">
            Inicio
          </Link>
        </li>
        <li className="menu_item_link">
          <Link className="link-menu" to="/products">
            Productos
          </Link>
        </li>
        <li className="menu_item_link">
          <a className="link-menu" href="" />
          Nosotros
        </li>
        <li className="menu_item_link">
          <a className="link-menu" href="" />
          Contactanos
        </li>
      </ul>
    </>
  );
};
