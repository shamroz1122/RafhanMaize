import axios from 'axios';

export const getDashboardSats = () => dispatch => {

    axios.post("/get_dashboard")
    .then((res) => {
          
                if(res.data.success==false)
                {
                    dispatch({type: 'GET_DASHBAORD_STATS_ERROR',msg:res.data.message})
                }else{
                    dispatch({ type: 'GET_DASHBAORD_STATS_SUCCESS',
                               upperSection:res.data.upper_section,
                               middleSection:res.data.middle_section,
                               footerSection:res.data.footer_section,
                              })
                }
         
    })
    .catch((err) => {
 
             dispatch({type: 'GET_DASHBAORD_STATS_ERROR',msg:'Error While Fetching Data'})
       }
     )

}