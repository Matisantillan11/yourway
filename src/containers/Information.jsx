import { useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import responses from '../firebase/responses/responses.js';

//Mercado Pago
//import methods from '../mercadopago/payment-methods/methods';

//styles
import '../assets/Information.scss'
import AppContext from '../context/AppContext';



const Information = () => {
    const form = useRef(null);
    const {state:{cart}} = useContext(AppContext);
    const {error} = responses()
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
               form.current.name.value = user.displayName;
               form.current.email.value = user.email;
               form.current.phone.value = user.phoneNumber;
            } else {
                form.current.name.value = "Nombre Completo";
                form.current.email.value = "Email";
                form.current.phone.value = "Teléfono";
            }
        })
    })

    
    return (
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Informacion de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre Completo" name="name" />
              <input type="text" placeholder="Correo Electronico" name="email" />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Código Postal" name="cp" />
              <input type="text" placeholder="Teléfono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/products/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <Link to="/products/checkout/information/payment">
                Pagar
              </Link>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map(item =>{
          return(
            <div  className="Information-item" key={item.id}>
              <div className="Information-element">
                
                <h4>{item.product.name} <span>x{item.quantity}</span></h4>
                <span>${item.product.price * item.quantity}</span>
              </div>
            </div>
          )})}
            
        </div>
      </div>
    );
  };
  
  export default Information;