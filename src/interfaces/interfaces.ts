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
