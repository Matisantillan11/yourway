import React from 'react';
import { IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export const WrapperCart = ({ stateCart, openCart, cart, removeFromCart }) => {
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
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
            <Link className="link" to="/products/checkout" onClick={openCart}>
              <button type="button">Continuar</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
