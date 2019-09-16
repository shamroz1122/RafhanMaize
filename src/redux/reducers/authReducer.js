const initState = {
  authError: null,
  user:{},
  isAuthenticated: false,
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
        console.log('error man')
    return {
      ...state,
      authError: action.msg
    } 
    case 'LOGIN_SUCCESS':
      console.log('success man')
      return {
        ...state,
        authError:null,
        user:action.user,
        isAuthenticated: true,
      }
      case 'LOGOUT_USER':
      console.log('logout success')
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