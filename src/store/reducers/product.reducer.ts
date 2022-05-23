import State from './interface.reducer'
const initalState: State = {
  status: 0,
  message: '',
  data: {},
  fetching: false,
  fetched: false,
  error: null,
}

export type userAction =
  | { type: 'REINTENTAR' }
  | { type: 'GET_PRODUCT_PENDING' }
  | { type: 'GET_PRODUCT_REJECTED'; payload: any }
  | { type: 'GET_PRODUCT_FULFILLED'; payload: any }
  | { type: 'GET_PRODUCT_BY_ID_PENDING' }
  | { type: 'GET_PRODUCT_BY_ID_REJECTED'; payload: any }
  | { type: 'GET_PRODUCT_BY_ID_FULFILLED'; payload: any }

const productReducer = (state = initalState, action: userAction) => {
  switch (action.type) {
    case 'REINTENTAR':
      return {
        status: 0,
        message: '',
        data: {},
        fetching: false,
        fetched: false,
        error: null,
      }
    case 'GET_PRODUCT_PENDING':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_PRODUCT_REJECTED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: true,
        message: action.payload.response.data.message,
        status: action.payload.response.data.status,
        data: {},
      }
    case 'GET_PRODUCT_FULFILLED':

      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        message: action.payload.data.message,
        status: action.payload.data.status,
        data: action.payload.data.result,
      }
    case 'GET_PRODUCT_BY_ID_PENDING':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_PRODUCT_BY_ID_REJECTED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: true,
        message: action.payload.response.data.message,
        status: action.payload.response.data.status,
        data: {},
      }
    case 'GET_PRODUCT_BY_ID_FULFILLED':
      const message = action.payload.data.message
      const result = action.payload.data.result
      const status = action.payload.data.status

      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        message: message,
        status: status,
        data: result,
      }
    default:
      return state
  }
}

export default productReducer
