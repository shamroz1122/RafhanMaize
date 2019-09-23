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


export const getCustomerDetail = data => dispatch => {

  
    axios.post("/customer_detail",data)
    .then((res) => {
           
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_CUSTOMER_ERROR',msg:res.data.message})
                }else{

                    dispatch({ type: 'GET_CUSTOMER_SUCCESS',
                               customerDetail:res.data.customer,
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_CUSTOMER_ERROR',msg:'Error While Fetching Data'})
       }
     )

}


export const searchCustomer = data => dispatch => {

    axios.post("/seach_customer",data)
    .then((res) => {
           
               
                if(res.data.success==false)
                {
                    dispatch({type: 'SEARCH_CUSTOMER_ERROR',msg:res.data.message})
                }else{

                    dispatch({ type: 'SEARCH_CUSTOMER_SUCCESS',
                               searchCustomer:res.data.customers,
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'SEARCH_CUSTOMER_ERROR',msg:'Error While Fetching Data'})
       }
     )

}