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
                                pendingOrders:res.data.orders,
                                isPendingData:isPendingData
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
                    dispatch({ type: 'SEARCH_DELIVERED_ORDER_SUCCESS',
                                searchDeliveredOrders:res.data.orders,
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'SEARCH_DELIVERED_ORDER_ERROR',msg:'Error While Fetching Data'})
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
                    dispatch({ type: 'SEARCH_PENDING_ORDER_SUCCESS',
                                searchPendingOrders:res.data.orders,
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'SEARCH_PENDING_ORDER_ERROR',msg:'Error While Fetching Data'})
       }
     )

}