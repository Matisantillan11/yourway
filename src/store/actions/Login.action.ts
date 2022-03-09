import { yourwayAPI } from '../../lib/api/yourway-api'
import { config } from '../../lib/config/config'

export const login = (email: string, password: string) => {
  let response: any = yourwayAPI.post(`/auth/login/${config.database}`, {
    email,
    password,
  })

  return {
    type: 'GET_LOGIN',
    payload: response,
  }
}

export const reset = () => {
  return {
    type: 'REINTENTAR',
  }
}
