import { CartItemContext } from "../interfaces/cart.interface";
import { Product } from "../interfaces/interfaces";


export interface GlobalState {
  cart: CartItemContext[],
  total: number
  totalPrice: number
}

export const globalInitialState: GlobalState = {
  cart: [],
  total: 0,
  totalPrice: 0
};
