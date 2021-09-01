/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';

// firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

import initialState from '../initialState.js';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  useEffect(async () => {
    setState({ ...state, loading: true });
    const db = firebase.firestore();
    const productRef = db.collection('products');
    let items = [];
    await productRef.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        throw new Error('[Error getting data from database]');
      } else {
        snapshot.forEach((product) => {
          items = [...items, { info: product.data(), id: product.id }];
        });
        setState({ ...state, products: items, loading: false });
      }
    });
  }, []);

  const addToCart = (payload, id, quantity = 1) => {
    const isInCart = state.cart.find((i) => i.id === id);
    if (isInCart) {
      return state.cart.map((i) =>
        i.id === id
          ? setState({
              ...state,
              cart: [
                ...state.cart.filter((item) => item.id !== i.id),
                {
                  ...i,
                  quantity: i.quantity + 1,
                },
              ],
            })
          : i
      );
    }

    setState({
      ...state,
      cart: [...state.cart, { product: payload, id, quantity }],
    });
  };

  const removeFromCart = (payload) => {
    const isInCart = state.cart.find((i) => i.id === payload.id);
    if (isInCart) {
      return state.cart.map((i) =>
        i.id === payload.id && i.quantity > 1
          ? setState({
              ...state,
              cart: [
                ...state.cart.filter((item) => item.id !== i.id),
                {
                  ...i,
                  quantity: i.quantity - 1,
                },
              ],
            })
          : setState({
              ...state,
              cart: state.cart.filter((items) => items.id !== payload.id),
            })
      );
    }
  };

  const addQuantity = () => {
    setState({ ...state, totalQuantity: state.totalQuantity++ });
  };

  const restQuantity = () => {
    if (state.totalQuantity !== 0) {
      setState({ ...state, totalQuantity: state.totalQuantity-- });
    }
  };
  return {
    addToCart,
    addQuantity,
    restQuantity,
    removeFromCart,
    state,
  };
};

export default useInitialState;
