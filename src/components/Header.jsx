import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// components
import firebase from 'firebase/app';
import Hamburguer from './Hamburguer';
import AppContext from '../context/AppContext.js';

// firebase
import 'firebase/auth';
import Methods from '../firebase/Authentication/methods.js';
// styles
import '../assets/Header.scss';
// logo
import logo from '../assets/images/logo.png';
import { MenuContainer } from './MenuContainer';
import { Cart } from './Cart';

const Header = () => {
  const [state, setState] = useState('close');

  const { Google, LogOut } = Methods();
  const {
    state: { totalQuantity, loading },
    restQuantity,
    removeFromCart,
  } = useContext(AppContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const logBtn = document.getElementById('logButton');
      if (user) {
        logBtn.innerText = 'Salir';
        logBtn.onclick = LogOut;
      } else {
        logBtn.innerText = 'Ingresar';
        logBtn.onclick = Google;
      }
    });
  }, []);

  const handleMenu = (ev) => {
    ev.preventDefault();
    const menu = document.querySelector('.menu_item');

    const links = document.querySelectorAll('.menu_item_link');
    state === 'open' ? setState('close') : setState('open');
    menu.classList.toggle('expanded');

    links.forEach((link) => link.classList.toggle('fade'));
  };

  return (
    <>
      <header>
        <Hamburguer status={state} handleState={handleMenu} />

        <div className="header__logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        <MenuContainer handleMenu={handleMenu} state={state} />

        <Cart totalQuantity={totalQuantity}></Cart>
      </header>
    </>
  );
};

export default Header;
