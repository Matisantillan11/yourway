import { useState, useEffect } from 'react';
import initialState from '../initialState.js';

//firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const db = firebase.firestore();
    const productRef = db.collection('products');
    let products = [];
    await productRef.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        throw new Error('[Error getting data from database]');
      } else {
        snapshot.forEach((product) => {
          products = [...products, { info: product.data(), id: product.id }];
        });
        console.log(products);
        setProducts(products);
      }
    });
  }, []);

  const addToCart = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (payload) => {};

  const addBuyer = (payload) => {
    setState({ ...state, buyer: [...state.buyer, payload] });
  };

  return { addToCart, removeFromCart, addBuyer, state, products };
};

export default useInitialState;
