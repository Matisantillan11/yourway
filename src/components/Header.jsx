import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// components
import firebase from 'firebase/app';
import Hamburguer from './Hamburguer';
import AppContext from '../context/AppContext.js';
import { IoCart, IoTrash } from 'react-icons/io5';
// firebase
import 'firebase/auth';
import Methods from '../firebase/Authentication/methods.js';
// styles
import '../assets/Header.scss';
// logo
import logo from '../assets/images/logo.png';

const Header = () => {
  const [state, setState] = useState('close');
  const [stateCart, setStateCart] = useState('close');
  const history = useHistory();
  const { Google, LogOut } = Methods();
  const {
    state: { totalQuantity, cart },
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

  const handleRemoveFromCart = (product) => {
    restQuantity();
    removeFromCart(product);
  };

  const handleMenu = (ev) => {
    ev.preventDefault();
    const menu = document.querySelector('.menu_item');

    const links = document.querySelectorAll('.menu_item_link');
    state === 'open' ? setState('close') : setState('open');
    menu.classList.toggle('expanded');

    links.forEach((link) => link.classList.toggle('fade'));
  };

  const handleOpenCart = () => {
    const cart = document.querySelector('.cart_items-container');
    stateCart === 'open' ? setStateCart('close') : setStateCart('open');
    cart.classList.toggle('expanded');
  };

  const handleTotal = () => {
    const reducer = (accum, currentValue) =>
      accum +
      Number(currentValue.product.price) * Number(currentValue.quantity);
    const sum = cart.reduce(reducer, 0);
    return sum;
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
        <div className="menu_cart-container">
          <IoCart size={25} onClick={handleOpenCart} />
          <p>{totalQuantity}</p>
        </div>

        <div className="cart_items-container" status={stateCart}>
          <div className="Checkout-content">
            <h4>Lista de productos</h4>
            {cart.length > 0 &&
              cart.map((item) => (
                <div key={item.id} className="Checkout-item">
                  <div className="Checkout-element">
                    <h4>
                      {item.product.name} <span> x{item.quantity}</span>
                    </h4>

                    <span>${item.product.price}</span>
                  </div>
                  <button type="button">
                    <IoTrash
                      size={20}
                      onClick={() => handleRemoveFromCart(item)}
                    />
                  </button>
                </div>
              ))}
          </div>

          {cart.length > 0 && (
            <div className="Checkout-sidebar">
              <h3>
                Precio Total: <span>$ {handleTotal()}</span>
              </h3>
              <button type="button">
                <Link
                  className="link"
                  to="/products/checkout"
                  onClick={handleOpenCart}
                >
                  {' '}
                  Continuar{' '}
                </Link>
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
