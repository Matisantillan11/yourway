import { useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
//styles
import '../assets/Checkout.scss';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import responses from '../firebase/responses/responses.js';

import { mp } from '../api/mercado-pago/mercadopago.js';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
    restQuantity,
  } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { cart: [] };
    cart.map((item) =>
      data.cart.push({
        name: item.product.name,
        price: item.product.price,
        quantity: parseInt(item.quantity),
        id: item.id,
      })
    );

    mp.post('/checkout', data);
  };

  const handleTotal = () => {
    const reducer = (accum, currentValue) =>
      accum +
      Number(currentValue.product.price) * Number(currentValue.quantity);
    let sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handleRemoveFromCart = (product) => {
    restQuantity();
    removeFromCart(product);
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div key={item.id} className="Checkout-item">
                <div className="Checkout-element">
                  <h4>
                    {item.product.name} <span>x{item.quantity}</span>
                  </h4>
                  <span>${item.product.price}</span>
                </div>
                <button type="button">
                  <i
                    className="fas fa-trash-alt"
                    title="Eliminar"
                    onClick={() => handleRemoveFromCart(item)}
                  />
                </button>
              </div>
            );
          })
        ) : (
          <Link to="/products/">Agregá productos</Link>
        )}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>
            Precio Total: <span>$ {handleTotal()}</span>
          </h3>
          <button type="button" onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
