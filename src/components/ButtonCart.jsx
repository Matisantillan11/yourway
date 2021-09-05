import React, { useContext, useState } from 'react';
import { IoCart } from 'react-icons/io5';
import AppContext from '../context/AppContext';
import { WrapperCart } from './WrapperCard';

export const ButtonCart = () => {
  const {
    state: { totalQuantity, cart },
    removeFromCart,
  } = useContext(AppContext);

  const [stateCart, setStateCart] = useState('close');

  const handleOpenCart = () => {
    const cart = document.querySelector('.cart_items-container');
    stateCart === 'open' ? setStateCart('close') : setStateCart('open');
    cart.classList.toggle('expanded');
  };

  return (
    <>
      <div className="menu_cart-container">
        <IoCart size={25} onClick={handleOpenCart} />
        <p>{totalQuantity}</p>
      </div>

      <WrapperCart
        stateCart={stateCart}
        cart={cart}
        removeFromCart={removeFromCart}
        openCart={handleOpenCart}
      />
    </>
  );
};
