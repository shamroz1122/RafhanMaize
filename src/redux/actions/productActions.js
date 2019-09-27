import axios from 'axios';

export const getAllProducts = data => dispatch => {

  
    axios.post("/get_products",data)
    .then((res) => {
          

  
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_PRODUCTS_ERROR',msg:res.data.message})
                }else{

                    const products = res.data.products
                    var isData = false
                    if(products.length)
                    {
                        isData = true
                    }


                    dispatch({ type: 'GET_PRODUCTS_SUCCESS',
                               products:products,
                               isData:isData
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_PRODUCTS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}

export const searchProducts = data => dispatch => {

    axios.post("/search_product",data)
    .then((res) => {
           
    
                if(res.data.success==false)
                {
                    dispatch({type: 'SEARCH_PRODUCT_ERROR',msg:res.data.message})
                }else{

                    dispatch({ type: 'SEARCH_PRODUCT_SUCCESS',
                               searchProduct:res.data.products,
                              })
                }
         
    })
    .catch((err) => {
        
             dispatch({type: 'SEARCH_PRODUCT_ERROR',msg:'Error While Fetching Data'})
       }
     )

}