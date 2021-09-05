import { useState } from 'react';

//firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import initialState from '../initialState';

export const useProductDetails = () => {
  const [productSearched, setProductSearched] = useState([]);
  const [state, setState] = useState(initialState);

  const getProductDetail = async (product) => {
    setState({ ...state, loading: true });
    const db = firebase.firestore();
    const productRef = db.collection('products').doc(`${product}`);

    productRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setProductSearched(doc.data());
          setState({ ...state, loading: false });
        } else {
          console.error(
            '[Product details error] no se pudo obtener el producto'
          );
        }
      })
      .catch((error) => console.error(error.message));
  };

  return { state, productSearched, getProductDetail };
};
