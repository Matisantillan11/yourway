import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { store } from './reducers'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'

const middleware = applyMiddleware(promise, logger, thunk)
export default createStore(store, middleware) 