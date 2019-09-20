const initState = {
    error:null,
    products:{},
  }
  
  const productReducer = (state = initState, action) => {
    switch(action.type){
    
      case 'GET_PRODUCTS_SUCCESS':
        return {
          ...state,
          error:null,
          products:action.products
        }
        case 'GET_PRODUCTS_ERROR':
        return {
          ...state,
          error:action.msg,
          products:{}
    
        }
        default:
          return state
    } 
  
  }
  
  export default productReducer 