import axios from 'axios';

export const getAllOrders = data => dispatch => {

    axios.post("/get_all_orders",data)
    .then((res) => {
          
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_ORDERS_ERROR',msg:res.data.message})
                }else{
                    dispatch({ type: 'GET_ORDERS_SUCCESS',
                               orders:res.data.orders,
                              })
                }
         
    })
    .catch((err) => {
 
             dispatch({type: 'GET_ORDERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}