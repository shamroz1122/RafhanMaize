const initState = {
    error:null,
    customers:{},
    customerDetail:{},
    searchCustomers:{},
    isSearch:false
  }
  
  const customerReducer = (state = initState, action) => {
    switch(action.type){
    
      case 'GET_CUSTOMERS_SUCCESS':
        return {
          ...state,
          error:null,
          customers:action.customers,
          isSearch:false
        }
        case 'GET_CUSTOMERS_ERROR':
        return {
          ...state,
          error:action.msg,
          customers:{},
          isSearch:false
    
        }
        case 'GET_CUSTOMER_SUCCESS':
          return {
            ...state,
            error:null,
            customerDetail:action.customerDetail
          }
          case 'GET_CUSTOMER_ERROR':
          return {
            ...state,
            error:action.msg,
            customerDetail:{}
      
          }
          case 'SEARCH_CUSTOMER_SUCCESS':
          return {
              ...state,
              error:action.msg,
              customers:action.searchCustomer,
              isSearch:true
          }
            case 'SEARCH_CUSTOMER_ERROR':
            return {
                ...state,
                error:action.msg,
                isSearch:false
            
            }
        default:
          return state
    } 
  
  }
  
  export default customerReducer 