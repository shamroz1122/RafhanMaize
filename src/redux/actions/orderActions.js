import axios from 'axios';

export const getDeliveredOrders = data => dispatch => {

    axios.post("/get_all_orders",data)
    .then((res) => {
          

                if(res.data.success==false)
                {
                       dispatch({type: 'GET_ORDERS_ERROR',msg:res.data.message})
                }else{
                        dispatch({ type: 'GET_DELIVERED_ORDERS_SUCCESS',
                            deliveredOrders:res.data.orders,
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

                            dispatch({ type: 'GET_PENDING_ORDERS_SUCCESS',
                                pendingOrders:res.data.orders,
                            })
                 }
         
    })
    .catch((err) => {
 
             dispatch({type: 'GET_ORDERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}