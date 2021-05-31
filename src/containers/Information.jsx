import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'

//styles
import '../assets/Information.scss'

const Information = () => {
    const form = useRef(null);

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
              <button type="button">
                Pagar
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
            <div  className="Information-item">
              <div className="Information-element">
                <h4>Buzo Thrasher</h4>
                <span>$3600</span>
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Information;