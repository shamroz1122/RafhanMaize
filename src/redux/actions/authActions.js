import axios from 'axios';

export const login = Data => dispatch => {
        axios.post("http://order.rafhanmaize.com/dev/public/api/user_login", Data)
        .then(res => {
                dispatch({type: 'LOGIN_SUCCESS'})
        })
        .catch(err => {
                dispatch({type: 'LOGIN_ERROR',msg:err.response.data})
            
        }
    );
  
};