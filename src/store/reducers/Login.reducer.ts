const initalState = {
	status: 0,
	message: '',
	data: {},
	fetching: false,
	fetched: false,
	error: null,
}

export type userAction = 
| { type: 'REINTENTAR'}
| { type: 'GET_LOGIN_PENDING'}
| { type: 'GET_LOGIN_REJECTED'}
| { type: 'GET_LOGIN_FULFILLED', payload: any} 

const loginReducer = (state = initalState, action: userAction) =>{
  
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
        fetching: true
      }
      case 'GET_LOGIN_REJECTED':
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: true,
          message: '',
          status: 500,
          data: { }
        }
      case 'GET_LOGIN_FULFILLED':

          let message = action.payload.data.message
          let user = action.payload.data.result.user
          let token = action.payload.data.result.token
          let status = action.payload.data.status
          
          if( status === 202){
            localStorage.setItem('x-token', token)
            localStorage.setItem('userId', user._id)
          }

          return { 
            ...state,
            fetching: false,
            fetched: true,
            error: false,
            message: message,
            status: status,
            data: { user, token  }
          } 
        default:
          return state
  }
}

export default loginReducer