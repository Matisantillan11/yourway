import {createContext} from 'react';
import { Product } from '../interfaces/interfaces';
import { GlobalState } from './globalReducer';

type GlobalContextProps = {
  addToCart: (payload: Product, quantity: number) => void,
  removeFromCart: (id: string) => void,
  state: GlobalState,
};

export const AppContext = createContext({} as GlobalContextProps);
