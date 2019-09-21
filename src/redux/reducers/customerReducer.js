const initState = {
    error:null,
    customers:{},
  }
  
  const customerReducer = (state = initState, action) => {
    switch(action.type){
    
      case 'GET_CUSTOMERS_SUCCESS':
        return {
          ...state,
          error:null,
          customers:action.customers
        }
        case 'GET_CUSTOMERS_ERROR':
        return {
          ...state,
          error:action.msg,
          customers:{}
    
        }
        default:
          return state
    } 
  
  }
  
  export default customerReducer 