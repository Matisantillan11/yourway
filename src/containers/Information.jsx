import { useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import responses from '../firebase/responses/responses.js';

//Mercado Pago
//import methods from '../mercadopago/payment-methods/methods';

//styles
import '../assets/Information.scss';
import AppContext from '../context/AppContext';
import { mp } from '../api/mercado-pago/mercadopago.js';

const Information = () => {
  const form = useRef(null);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { cart: [] };
    cart.map((item) => data.cart.push(item));
    console.log(data.cart);
    /* await mp
      .post('/checkout', { name: 'matias' })
      .then((response) => console.log(response.data.json()))
      .catch((error) => console.log(error)); */
  };

  return (
    <div className="Information">
      <div className="Information-buttons">
        <div className="Information-back">
          <Link to="/products/checkout">Regresar</Link>
        </div>
      </div>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form>
            {/* 
              {cart.map(items => {
                return (
                  <div>
                    <input type="hidden" name="id" value={items.id} />
                    <input type="hidden" name="price" value={items.product.price} />
                    <input type="hidden" name="title" value={items.product.name} />
                    <input type="hidden" name="quantity" value={items.quantity} />
                  </div>
                )
              })} */}

            <div className="Information-next">
              <input type="button" value="Pagar" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => {
          return (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>
                  {item.product.name} <span>x{item.quantity}</span>
                </h4>
                <span>${item.product.price * item.quantity}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
