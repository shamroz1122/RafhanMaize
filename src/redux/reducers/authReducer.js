const initState = {
  authError: null,
  user:{},
  isAuthenticated: false,
  error:false
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
    return {
      ...state,
      authError: action.msg,
      error:!state.error
    } 
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError:null,
        user:action.user,
        isAuthenticated: true,
      }
      case 'LOGOUT_USER':
      return {
        ...state,
        authError:null,
        user:{},
        isAuthenticated: false,
       
      }
      default:
        return state
  } 

}

export default authReducer 