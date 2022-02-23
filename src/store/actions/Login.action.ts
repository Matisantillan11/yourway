

export const login = (email: string, password: string) => {
  let response: any = /* visualizarAPI.post('/auth/login', { email, password}) */ ''
  
  return {
    type: 'GET_LOGIN',
    payload: response
  }
}


export const reset = () =>{

  return {
    type:'REINTENTAR'
  }
}