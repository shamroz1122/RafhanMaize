import axios from 'axios';

export const getAllCustomers = data => dispatch => {

  
    axios.post("/get_my_customers",data)
    .then((res) => {
          
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_CUSTOMERS_ERROR',msg:res.data.message})
                }else{

                    dispatch({ type: 'GET_CUSTOMERS_SUCCESS',
                               customers:res.data.customers,
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_CUSTOMERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}