const initState = {
  error:null,

  pendingOrders:{},
  deliveredOrders:{},
  invoiceOrders:{},
  completedOrders:{},

  orderDetail:{},

  isSearchDelivered:false,
  isSearchPending:false,
  isSearchInvoice:false,
  isSearchCompleted:false,

  isPendingData:true,
  isDeliveredData:true,
  isInvoiceData:true,
  isCompletedData:true,

  msg:null,
  newOrderPlaced:false,
  orderStatusUpdated:false,
  editOrderDetails:{},
  updatemsg:null,
  updateerror:null,
  update_order:false
}

const orderReducer = (state = initState, action) => {
  switch(action.type){
  
    case 'GET_PENDING_ORDERS_SUCCESS':
      return {
        ...state,
        error:null,
        pendingOrders:action.pendingOrders,
        isSearchPending:false,
        isPendingData:action.isPendingData,
        newOrderPlaced:false
      }
      case 'GET_DELIVERED_ORDERS_SUCCESS':
      return {
          ...state,
          error:null,
          deliveredOrders:action.deliveredOrders,
          isSearchDelivered:false,
          isDeliveredData:action.isDeliveredData
      }
      case 'GET_INVOICE_ORDERS_SUCCESS':
      return {
          ...state,
          error:null,
          invoiceOrders:action.invoiceOrders,
          isSearchInvoice:false,
          isInvoiceData:action.isInvoiceData
      }
      case 'GET_COMPLETED_ORDERS_SUCCESS':
      return {
          ...state,
          error:null,
          completedOrders:action.completedOrders,
          isSearchCompleted:false,
          isCompletedData:action.isCompletedData
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
          isSearchPending:true,
          newOrderPlaced:false,
          isPendingData:action.isPendingData
          
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
            isSearchDelivered:true,
            isDeliveredData:action.isDeliveredData
          }
          case 'SEARCH_DELIVERED_ORDER_ERROR':
          return {
            ...state,
            error:action.msg,
            isSearchDelivered:false
          
          }

          case 'SEARCH_INVOICE_ORDER_SUCCESS':
            return {
              ...state,
              error:null,
              invoiceOrders:action.searchInvoiceOrders,
              isSearchInvoice:true,
              isInvoiceData:action.isInvoiceData
            }
            case 'SEARCH_INVOICE_ORDER_ERROR':
            return {
              ...state,
              error:action.msg,
              isSearchInvoice:false
            }

            case 'SEARCH_COMPLETED_ORDER_SUCCESS':
              return {
                ...state,
                error:null,
                completedOrders:action.searchCompletedOrders,
                isSearchCompleted:true,
                isCompletedData:action.isCompletedData
              }
              case 'SEARCH_COMPLETED_ORDER_ERROR':
              return {
                ...state,
                error:action.msg,
                isSearchCompleted:false 
            }

          case 'ADD_ORDERS_SUCCESS':
            return {
              ...state,
              error:null,
              msg:action.msg,
              newOrderPlaced:true
            }
            case 'ADD_ORDERS_ERROR':
            return {
              ...state,
              error:action.msg,
              msg:null,
              newOrderPlaced:false
            }

            case 'UPDATE_ORDERS_SUCCESS':
              return {
                ...state,
                updateerror:null,
                updatemsg:action.msg,
                newOrderPlaced:true,
              }
              case 'UPDATE_ORDERS_ERROR':
              return {
                ...state,
                updateerror:action.msg,
                updatemsg:null,
                newOrderPlaced:false,
              }

            case 'UPDATE_ORDERS_STATUS_SUCCESS':
              return {
                ...state,
                error:null,
                msg:action.msg,
                orderStatusUpdated:true,
                newOrderPlaced:true
              }
              case 'UPDATE_ORDERS_STATUS_ERROR':
              return {
                ...state,
                error:action.msg,
                msg:null,
                orderStatusUpdated:false,
                newOrderPlaced:false
              }
              case 'EDIT_ORDERS_SUCCESS':
                return {
                  ...state,
                  error:null,
                  editOrderDetails:action.editOrderDetails
                }
                case 'EDIT_ORDERS_ERROR':
                return {
                  ...state,
                  error:action.msg,
                  editOrderDetails:{}
                }
                case 'CLEAR_MESSAGES':
                  return {
                    ...state,
                    updatemsg:null,
                    updateerror:null,
                    orderStatusUpdated:false
                  }
      default:
        return state
  } 

}

export default orderReducer 