import axios from 'axios';

export const getDeliveredOrders = data => dispatch => {

    axios.post("/get_all_orders",data)
    .then((res) => { 
          

                if(res.data.success==false)
                {
                       dispatch({type: 'GET_ORDERS_ERROR',msg:res.data.message})
                }else{

                    const orders = res.data.orders
                    var isDeliveredData = false
                    if(orders.length)
                    {
                        isDeliveredData = true
                    }


                        dispatch({ type: 'GET_DELIVERED_ORDERS_SUCCESS',
                            deliveredOrders:orders,
                            isDeliveredData:isDeliveredData

                        })
                }
         
    })
    .catch((err) => {
 
             dispatch({type: 'GET_ORDERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}
 


export const getPendingOrders = data => dispatch => {

    axios.post("/get_all_orders",data)
    .then((res) => {
           
                if(res.data.success==false)
                {
               
                    dispatch({type: 'GET_ORDERS_ERROR',msg:res.data.message})
                }else{
                  
                    const orders = res.data.orders
                    var isPendingData = false
                    if(orders.length)
                    {
                        isPendingData = true
                    }

                            dispatch({ type: 'GET_PENDING_ORDERS_SUCCESS',
                                pendingOrders:orders,
                                isPendingData:isPendingData
                            })
                 }
         
    })
    .catch((err) => {
 
             dispatch({type: 'GET_ORDERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}

export const getInvoiceOrders = data => dispatch => {

    axios.post("/get_all_orders",data)
    .then((res) => {
           
            
                if(res.data.success==false)
                {
               
                    dispatch({type: 'GET_ORDERS_ERROR',msg:res.data.message})
                }else{
                  


                    const orders = res.data.orders
                    var isInvoiceData = false
                    if(orders.length)
                    {
                        isInvoiceData = true
                    }



                            dispatch({ type: 'GET_INVOICE_ORDERS_SUCCESS',
                                invoiceOrders:orders,
                                isInvoiceData:isInvoiceData
                            })
                 }
         
    })
    .catch((err) => {
 
             dispatch({type: 'GET_ORDERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}


export const getCompletedOrders = data => dispatch => {

    axios.post("/get_all_orders",data)
    .then((res) => {
           
            
                if(res.data.success==false)
                {
               
                    dispatch({type: 'GET_ORDERS_ERROR',msg:res.data.message})
                }else{
                  
                    const orders = res.data.orders
                    var isCompletedData = false
                    if(orders.length)
                    {
                        isCompletedData = true
                    }

                            dispatch({ type: 'GET_COMPLETED_ORDERS_SUCCESS',
                                completedOrders:orders,
                                isCompletedData:isCompletedData
                            })
                 }
         
    })
    .catch((err) => {
 
             dispatch({type: 'GET_ORDERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}




export const addOrder = data => dispatch => {

    
    axios.post("/add_order",data)
    .then((res) => {
           
                if(res.data.success==false)
                {
               
                    dispatch({type: 'ADD_ORDERS_ERROR',msg:res.data.message})
                }else{
            
                            dispatch({ type: 'ADD_ORDERS_SUCCESS',
                                       msg:res.data.message,
                            })
                 }
         
    })
    .catch((err) => {
 
             dispatch({type: 'ADD_ORDERS_ERROR',msg:'Error While Saving Data'})
       }
     )

}

export const updateOrder = data => dispatch => {
 
    axios.post("/update_order",data)
    .then((res) => {
                    
                if(res.data.success==false)
                {
               
                    dispatch({type: 'UPDATE_ORDERS_ERROR',msg:res.data.message})
                }else{
            
                            dispatch({ type: 'UPDATE_ORDERS_SUCCESS',
                                       msg:res.data.message,
                            })
                 }
         
    })
    .catch((err) => {
     
             dispatch({type: 'UPDATE_ORDERS_ERROR',msg:'Error While Saving Data'})
       }
     )

}

export const editOrderDetail = data => dispatch => {

    
    axios.post("/edit_order_detail",data)
    .then((res) => {
            
                if(res.data.success==false)
                {
               
                    dispatch({type: 'EDIT_ORDERS_ERROR',msg:res.data.message})
                }else{
            
                            dispatch({ type: 'EDIT_ORDERS_SUCCESS',
                                       editOrderDetails:res.data,
                            })
                 }
         
    })
    .catch((err) => {
 
             dispatch({type: 'EDIT_ORDERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}


export const updateOrderStatus = data => dispatch => {

    axios.post("/update_status",data)
    .then((res) => {
      
                if(res.data.success==false)
                {
               
                    dispatch({type: 'UPDATE_ORDERS_STATUS_ERROR',msg:res.data.message})
                }else{
                       
                            dispatch({ type: 'UPDATE_ORDERS_STATUS_SUCCESS',
                                       msg:res.data.message,
                            })
                 }
         
    })
    .catch((err) => {
 
             dispatch({type: 'UPDATE_ORDERS_STATUS_ERROR',msg:'Error While Saving Data'})
       }
     )

}


export const getOrderDetail = data => dispatch => {

  
    axios.post("/order_detail",data)
    .then((res) => {
           
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_ORDER_DETAIL_ERROR',msg:res.data.message})
                }else{

                    dispatch({ type: 'GET_ORDER_DETAIL_SUCCESS',
                               orderDetail:res.data.order,
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_ORDER_DETAIL_ERROR',msg:'Error While Fetching Data'})
       }
     ) 

}


export const searchDeliveredOrder = data => dispatch => {

    axios.post("/search_order",data)
    .then((res) => {
              
                if(res.data.success==false)
                {
                    dispatch({type: 'SEARCH_DELIVERED_ORDER_ERROR',msg:res.data.message})
                }else{

                    const orders = res.data.orders
                    var isDeliveredData = false
                    if(orders.length)
                    {
                        isDeliveredData = true
                    }

                    dispatch({ type: 'SEARCH_DELIVERED_ORDER_SUCCESS',
                                searchDeliveredOrders:orders,
                                isDeliveredData:isDeliveredData
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'SEARCH_DELIVERED_ORDER_ERROR',msg:'Error While Fetching Data'})
       }
     )

}


export const searchInvoiceOrder = data => dispatch => {

    axios.post("/search_order",data)
    .then((res) => {
              
                if(res.data.success==false)
                {
                    dispatch({type: 'SEARCH_INVOICE_ORDER_ERROR',msg:res.data.message})
                }else{

                    const orders = res.data.orders
                    var isInvoiceData = false
                    if(orders.length)
                    {
                        isInvoiceData = true
                    }

                    dispatch({ type: 'SEARCH_INVOICE_ORDER_SUCCESS',
                                searchInvoiceOrders:orders,
                                isInvoiceData:isInvoiceData
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'SEARCH_INVOICE_ORDER_ERROR',msg:'Error While Fetching Data'})
       }
     )

}


export const searchCompletedOrder = data => dispatch => {

    axios.post("/search_order",data)
    .then((res) => {
              
                if(res.data.success==false)
                {
                    dispatch({type: 'SEARCH_COMPLETED_ORDER_ERROR',msg:res.data.message})
                }else{

                    const orders = res.data.orders
                    var isCompletedData = false
                    if(orders.length)
                    {
                        isCompletedData = true
                    }

                    dispatch({ type: 'SEARCH_COMPLETED_ORDER_SUCCESS',
                                searchCompletedOrders:orders,
                                isCompletedData:isCompletedData
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'SEARCH_COMPLETED_ORDER_ERROR',msg:'Error While Fetching Data'})
       }
     )

}

export const searchPendingOrder = data => dispatch => {

    axios.post("/search_order",data)
    .then((res) => { 
             
                if(res.data.success==false)
                {
                    dispatch({type: 'SEARCH_PENDING_ORDER_ERROR',msg:res.data.message})
                }else{

                    const orders = res.data.orders
                    var isPendingData = false
                    if(orders.length)
                    {
                        isPendingData = true
                    }

                    dispatch({ type: 'SEARCH_PENDING_ORDER_SUCCESS',
                                searchPendingOrders:orders,
                                isPendingData:isPendingData
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'SEARCH_PENDING_ORDER_ERROR',msg:'Error While Fetching Data'})
       }
     )

}


export const ClearMessages = data => dispatch => {

             dispatch({type: 'CLEAR_MESSAGES',msg:'Clear Messages!'})

}