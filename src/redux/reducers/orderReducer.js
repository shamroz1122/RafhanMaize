const initState = {
  error:null,
  pendingOrders:{},
  deliveredOrders:{},
  orderDetail:{},
  isSearchDelivered:false,
  isSearchPending:false
}

const orderReducer = (state = initState, action) => {
  switch(action.type){
  
    case 'GET_PENDING_ORDERS_SUCCESS':
      return {
        ...state,
        error:null,
        pendingOrders:action.pendingOrders,
        isSearchPending:false
      }
      case 'GET_DELIVERED_ORDERS_SUCCESS':
      return {
          ...state,
          error:null,
          deliveredOrders:action.deliveredOrders,
          isSearchDelivered:false
      }
      case 'GET_ORDERS_ERROR':
      return {
        ...state,
        error:action.msg,
        deliveredOrders:{},
        pendingOrders:{},
        isSearchPending:false,
        isSearchPending:false
  
      }
      case 'GET_ORDER_DETAIL_SUCCESS':
      return {
        ...state,
        error:null,
        orderDetail:action.orderDetail,
      }
      case 'GET_ORDER_DETAIL_ERROR':
      return {
        ...state,
        error:action.msg,
        orderDetail:{},
      
      }
      case 'SEARCH_PENDING_ORDER_SUCCESS':
        return {
          ...state,
          error:null,
          pendingOrders:action.searchPendingOrders,
          isSearchPending:true
          
        }
        case 'SEARCH_PENDING_ORDER_ERROR':
        return {
          ...state,
          error:action.msg,
          isSearchPending:false
        
        }
        case 'SEARCH_DELIVERED_ORDER_SUCCESS':
          return {
            ...state,
            error:null,
            deliveredOrders:action.searchDeliveredOrders,
            isSearchDelivered:true
          }
          case 'SEARCH_DELIVERED_ORDER_ERROR':
          return {
            ...state,
            error:action.msg,
            isSearchDelivered:false
          
          }
      default:
        return state
  } 

}

export default orderReducer 