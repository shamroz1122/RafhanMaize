const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
     console.log('login error',action.msg)
    return {
      ...state,
      authError: action.msg
    }
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError:null
      }
      default:
        return state
  } 

}

export default authReducer