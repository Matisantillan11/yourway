import React from 'react';
import { Link } from 'react-router-dom';

export const CustomLink = ({ url, linkText, children }) => {
  return (
    <li className="menu_item_link">
      <Link className="link-menu" to={url}>
        {linkText}
      </Link>

      {children}
    </li>
  );
};
