import { User, Token } from '../interfaces/interfaces'

export const useUserInformation = () => {
  const getUser = () => {
    const fulluser = localStorage.getItem('session_user')
    let user: User | null = {
      _id: '',
      name: '',
      lastname: '',
      dni: 0,
      enabled: false,
      email: '',
      verified: false,
      creationDate: '',
      __v: 0,
    }

    if (fulluser) {
      user = JSON.parse(fulluser)
    } else {
      user = null
    }

    return user
  }

  const saveUser = (user: User, token: Token) => {
    let userString = JSON.stringify(user)

    localStorage.setItem('session_user', userString)
    localStorage.setItem('session_userid', user._id)
    localStorage.setItem('session_token', token.token)
  }

  return { getUser, saveUser }
}
