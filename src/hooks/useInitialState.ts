import { update } from 'lodash';
import { useState, useEffect } from 'react';
import { globalInitialState, GlobalState } from '../context/globalReducer';
import { CartItemContext } from '../interfaces/cart.interface';
import { Product } from '../interfaces/interfaces';


const useInitialState = () => {
  const [state, setState] = useState(globalInitialState);

  const verifyIsInCart = (idItem: string) => {
    return state.cart.find((cartItem: CartItemContext) => cartItem.product._id === idItem)
  }

  const extractItems = (itemsCart: CartItemContext[], diffItem: CartItemContext) => {
    return itemsCart.filter((item: CartItemContext) => item.id !== diffItem.id)
  }

  const updateQuantity = (cartItem: CartItemContext, quantity: number, substract: boolean) => {
    const extractedItems = extractItems(state.cart, cartItem)
    if(substract){
      setState({
        ...state,
        cart: [
          ...extractedItems,
          {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          },
        ],
        total: state.total - 1,
      })
    } else {
      setState({
        ...state,
        cart: [
          ...extractedItems,
          {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          },
        ],
        total: state.total + quantity,
      })
    }
  }

  const addToCart = (payload: Product,  quantity:number) => {
    const id = payload._id
    if (verifyIsInCart(id)) {
      console.log('exist')
      return state.cart.map((cartItem: CartItemContext) => cartItem.product._id === id ? updateQuantity(cartItem, quantity, false) : cartItem);
    }

    setState({
      ...state,
      cart: [...state.cart, { product: payload, id, quantity }],
      total: state.total + quantity,
    });
  };

  const removeFromCart = (payload: Product) => {
    const id: string = payload._id
    if (verifyIsInCart(id)) {
      return state.cart.map((cartItem: any) =>
      cartItem.id === id && cartItem.quantity > 1
          ? updateQuantity(cartItem, cartItem.quantity, true)
          : setState({
            ...state,
            cart: state.cart.filter((items) => items.id !== payload._id),
            total: state.total - 1,
          })
      );
    }
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;