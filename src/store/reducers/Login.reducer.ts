import { useUserInformation } from '../../hooks/useUserInformation'
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
  | { type: 'GET_LOGIN_PENDING' }
  | { type: 'GET_LOGIN_REJECTED'; payload: any }
  | { type: 'GET_LOGIN_FULFILLED'; payload: any }

const loginReducer = (state = initalState, action: any) => {
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
    case 'GET_LOGIN_PENDING':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_LOGIN_REJECTED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: true,
        message: action.payload.response.data.message,
        status: action.payload.response.data.status,
        data: {},
      }
    case 'GET_LOGIN_FULFILLED':
      let message = action.payload.data.message
      let user = action.payload.data.result.user
      let token = action.payload.data.result.token
      let status = action.payload.data.status

      const { saveUser } = useUserInformation()

      if (status === 200) {
        saveUser(user, token)
      }

      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        message: message,
        status: status,
        data: { user, token },
      }
    default:
      return state
  }
}

export default loginReducer
