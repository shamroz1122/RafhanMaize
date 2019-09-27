const initState = {
    error:null,
    products:{},
    isSearch:false,
    isData:true
  }
  
  const productReducer = (state = initState, action) => {
    switch(action.type){
    
      case 'GET_PRODUCTS_SUCCESS':
        return {
          ...state,
          error:null,
          products:action.products,
          isData:action.isData
        }
        case 'GET_PRODUCTS_ERROR':
        return {
          ...state,
          error:action.msg,
          products:{}
    
        }
        case 'SEARCH_PRODUCT_SUCCESS':
        return {
            ...state,
            error:action.msg,
            products:action.searchProduct,
            isSearch:true
        }
        case 'SEARCH_PRODUCT_ERROR':
        return {
            ...state,
            error:action.msg,
            isSearch:false,
            products:{}
        
        }
        default:
          return state
    } 
  
  }
  
  export default productReducer 