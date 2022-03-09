import { User, Token, Product } from './interfaces'
export interface LoginReducer {
  status: number
  message: string
  data: { user: User; token: Token }
  fetching: boolean
  fetched: boolean
  error: boolean
}

export interface ProductReducer {
  status: number
  message: string
  data: Product[] | Product
  fetching: boolean
  fetched: boolean
  error: boolean
}
