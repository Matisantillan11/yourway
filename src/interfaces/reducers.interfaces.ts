import { User, Token } from './interfaces'
export interface LoginReducer {
  status: number
  message: string
  data: { user: User; token: Token }
  fetching: boolean
  fetched: boolean
  error: boolean
}
