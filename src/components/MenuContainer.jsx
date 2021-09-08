import React from 'react';
import { CustomLink } from './CustomLink';
import {
  IoExitSharp,
  IoHomeSharp,
  IoShirtSharp,
  IoEarthSharp,
  IoCallSharp,
} from 'react-icons/io5';

export const MenuContainer = ({ handleMenu, state }) => {
  return (
    <>
      <ul className="menu_item" status={state} onClick={handleMenu}>
        <div className="menu_item-container">
          <li className="menu_item_link" id="logButton">
            <p className="link-menu">Ingresar</p>
          </li>

          <CustomLink linkText="Inicio" url="/">
            <IoHomeSharp size={20} />
          </CustomLink>
          <CustomLink linkText="Productos" url="/products">
            <IoShirtSharp size={20} />
          </CustomLink>
        </div>
      </ul>
    </>
  );
};
