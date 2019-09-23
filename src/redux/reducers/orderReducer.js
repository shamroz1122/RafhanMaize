const initState = {
  error:null,
  pendingOrders:{},
  deliveredOrders:{},
}

const orderReducer = (state = initState, action) => {
  switch(action.type){
  
    case 'GET_PENDING_ORDERS_SUCCESS':
      return {
        ...state,
        error:null,
        pendingOrders:action.pendingOrders,
      }

      case 'GET_DELIVERED_ORDERS_SUCCESS':
        return {
          ...state,
          error:null,
          deliveredOrders:action.deliveredOrders,
        }
        case 'GET_ORDERS_ERROR':
        return {
          ...state,
          error:action.msg,
          deliveredOrders:{},
          pendingOrders:{}
    
        }
      default:
        return state
  } 

}

export default orderReducer 