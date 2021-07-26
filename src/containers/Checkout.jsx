import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
//styles 
import '../assets/Checkout.scss';
const Checkout = () => {

  const { state: { cart }, removeFromCart, restQuantity } = useContext(AppContext);

  const handleTotal = () => {
    const reducer = (accum, currentValue) => accum + (Number(currentValue.product.price) * Number(currentValue.quantity));
    let sum = cart.reduce(reducer, 0);
    return sum;
  }

  const handleRemoveFromCart = (product) => {
    restQuantity();
    removeFromCart(product);
  }
  return (
    <div className="Checkout">

      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        {cart.length > 0 ? cart.map(item => {
          return (<div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.product.name} <span>x{item.quantity}</span></h4>
              <span>${item.product.price}</span>
            </div>
            <button type="button" >
              <i className="fas fa-trash-alt" title="Eliminar" onClick={() => handleRemoveFromCart(item)} />
            </button>
          </div>)
        }) : <p>Agregá productos</p>}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: <span>$ {handleTotal()}</span></h3>
          <button type="button">
            <Link className="link" to="/products/checkout/information"> Continuar </Link>
          </button>
        </div>
      )}
    </div>
  )
}


export default Checkout;