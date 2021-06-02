import firebase from 'firebase/app';
import Responses from '../responses/responses.js';

//hooks
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext.js';

const Methods = () => {
  const { success, error } = Responses();
  const history = useHistory();
  const { addBuyer } = useContext(AppContext);

  const Google = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        success(`Bienvenido! ${result.user.displayName}`, 'Happy Shopping');
        const user = result.user;
        const buyer = {
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          photo: user.photoURL,
          id: user.uid,
        };
        console.log(buyer);
      })
      .catch(() => {
        error(
          'Lo sentimos, no se pudo realizar el inicio de sesión',
          'Intenta de nuevo más tarde'
        );
      });
  };

  const LogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        success('Cierre de sesión exitoso!', 'Esperamos verte pronto');
      })
      .catch(() => {
        error('Opss...', 'Algo salió mal');
        console.error(`Error ${error.code}: ${error.message}`);
      });
  };

  return { Google, LogOut };
};

export default Methods;
