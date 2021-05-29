import {Link} from 'react-router-dom';
//styles 
import '../assets/Checkout.scss';
const Checkout = () => {
    return (
        <div className="Checkout">
          <div className="Checkout-content">
            <h3>Lista de Pedidos</h3>
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>Buzo Thrasher</h4>
                <span>$3600</span>
              </div>
              <button type="button" >
                <i className="fas fa-trash-alt" title="Eliminar" />
              </button>
            </div>
          </div>
          <div className="Checkout-sidebar">
            <h3>Precio Total: <span>$3600</span></h3>
            <button type="button">
              <Link className="link"to="/"> Continuar </Link>
            </button>
          </div>
        </div>
      );
};


export default Checkout;