const initState = {
  error:null,
  orders:{},
}

const orderReducer = (state = initState, action) => {
  switch(action.type){
  
    case 'GET_ORDERS_SUCCESS':
      return {
        ...state,
        error:null,
        orders:action.orders
      }
      case 'GET_ORDERS_ERROR':
      return {
        ...state,
        error:action.msg,
        orders:{}
  
      }
      default:
        return state
  } 

}

export default orderReducer 