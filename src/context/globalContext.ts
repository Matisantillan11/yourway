import {createContext} from 'react';
import { GlobalState } from './globalReducer';

type GlobalContextProps = {
  addToCart: (payload: any, quantity: number) => void,
  removeFromCart: (payload: any) => void,
  state: GlobalState,
};

export const AppContext = createContext({} as GlobalContextProps);
