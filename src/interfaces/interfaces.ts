export interface Token {
  expiresIn: number
  token: string
}

export interface User {
  _id: string
  name: string
  lastname: string
  dni: number
  enabled: boolean
  email: string
  verified: boolean
  creationDate: string
  __v: number
}
export interface Product {
  _id: string
  name: string
  price: number
  pic: string
  stock: number
  creationDate: string
  operationType: string
  __v: number
}
