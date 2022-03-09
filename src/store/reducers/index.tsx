import { combineReducers } from 'redux'
import loginReducer from '../../store/reducers/Login.reducer'
import productReducer from '../../store/reducers/product.reducer'

export const store = combineReducers({
  loginReducer,
  productReducer,
})

export type StoreType = ReturnType<typeof store>
