import { combineReducers } from 'redux'
import loginReducer from '../../store/reducers/Login.reducer'

export const store = combineReducers({
	loginReducer,
})

export type StoreType = ReturnType<typeof store>
