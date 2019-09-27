const initState = {
    error:null,
    customers:{},
    customerDetail:{},
    searchCustomers:{},
    isSearch:false,
    isData:true,
    allCustomers:{},
    orderNumber:"",
    categories:{},
    selectedProducts:{},
    isSelectedData:true
  }
  
  const customerReducer = (state = initState, action) => {
    switch(action.type){
    
      case 'GET_CUSTOMERS_SUCCESS':
        return {
          ...state,
          error:null,
          customers:action.customers,
          isSearch:false,
          isData:action.isData
        }   
        case 'GET_ALL_CUSTOMERS_SUCCESS':
        return {
          ...state,
          error:null,
          allCustomers:action.AllCustomers
        } 
       case 'GET_ORDER_NUMBER_SUCCESS':
        return {
          ...state,
          error:null,
          orderNumber:action.orderNumber,
          categories:action.categories
        }
        case 'GET_ORDER_NUMBER_ERROR':
          return {
            ...state,
            error:action.msg,
            orderNumber:"",
            categories:{}
      
          }
         case 'GET_SELECTED_PRODUCTS_SUCCESS':
          return {
            ...state,
            error:null,
            selectedProducts:action.selectedProducts,
            isSelectedData:action.isSelectedData
          }
          case 'GET_SELECTED_PRODUCTS_ERROR':
            return {
              ...state,
              error:action.msg,
              selectedProducts:{}
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