import axios from 'axios';

export const getAllProducts = data => dispatch => {

  
    axios.post("/get_products",data)
    .then((res) => {
          

        console.log("my products",res.data.products)
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_PRODUCTS_ERROR',msg:res.data.message})
                }else{

                    dispatch({ type: 'GET_PRODUCTS_SUCCESS',
                               products:res.data.products,
                              })
                }
         
    })
    .catch((err) => {

             dispatch({type: 'GET_PRODUCTS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}