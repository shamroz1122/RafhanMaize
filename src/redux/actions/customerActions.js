import axios from 'axios';

export const getAllCustomers = data => dispatch => {
  
  
    axios.post("/get_my_customers",data)
    .then((res) => {
      
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_CUSTOMERS_ERROR',msg:res.data.message})
                }else{

                 
                    const customers = res.data.customers
                    var isData = false
                    if(customers.length)
                    {
                        isData = true
                    }

                    dispatch({ type: 'GET_CUSTOMERS_SUCCESS',
                               customers:customers,
                               isData:isData

                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_CUSTOMERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}

export const getMyAllCustomers = data => dispatch => {
  
  
    axios.post("/get_all_customers")
    .then((res) => {
      
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_ALL_CUSTOMERS_ERROR',msg:res.data.message})
                }else{

                 
                    const customers = res.data.customers
                   

                    dispatch({ type: 'GET_ALL_CUSTOMERS_SUCCESS',
                                 AllCustomers:customers,
                        
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_ALL_CUSTOMERS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}

export const getOrderNumber = data => dispatch => {
  
  
    axios.post("/get_order_number")
    .then((res) => {
      
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_ORDER_NUMBER_ERROR',msg:res.data.message})
                }else{

                 
                    dispatch({ type: 'GET_ORDER_NUMBER_SUCCESS',
                                 orderNumber:res.data.order_number,
                                 categories: res.data.categories
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_ORDER_NUMBER_ERROR',msg:'Error While Fetching Data'})
       }
     )

} 

export const getSelectedProducts = data => dispatch => {
  
  
    axios.post("/cat_products",data)
    .then((res) => {
      
             
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_SELECTED_PRODUCTS_ERROR',msg:res.data.message})
                }else{
                    const products = res.data.products
                    var isSelectedData = false
                    if(products.length)
                    {
                        isSelectedData = true
                    }

                    dispatch({ type: 'GET_SELECTED_PRODUCTS_SUCCESS',
                               selectedProducts:products,
                               isSelectedData:isSelectedData

                              })
                 
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_SELECTED_PRODUCTS_ERROR',msg:'Error While Fetching Data'})
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