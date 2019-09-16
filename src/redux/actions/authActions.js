import axios from 'axios';
import setAuthToken from "../../utils/setAuthToken";
import { AsyncStorage } from 'react-native';


// Login - get user token
export const login = Data => dispatch => {

        axios.post("http://order.rafhanmaize.com/dev/public/api/user_login", Data)
        .then((res) => {
              

               if(res.data.success == false)
               {
                        dispatch({type: 'LOGIN_ERROR',msg:res.data.message[0]})
               }else{
                
                        // Set token to localStorage
                        const token = res.data.token;
                        AsyncStorage.setItem("User", JSON.stringify(res.data.user));
                        AsyncStorage.setItem("Token", token);
                        setAuthToken(token);
                
                        dispatch({type: 'LOGIN_SUCCESS',user:res.data.user})

               } 

        })
        .catch((err) => {
        //      console.log(err)
                dispatch({type: 'LOGIN_ERROR',msg:'Invalid Credentials'})
        }
    );
  
};   

// Set logged in user
export const setCurrentUser = Data => dispatch => {
        dispatch({type: 'LOGIN_SUCCESS', user:Data})
};

// Log user out
export const logOutUser = (navigation) => dispatch => {
        // Remove token from local storage
        AsyncStorage.removeItem("AdminToken");
        // Remove auth header for future requests
        setAuthToken(false);
        // Set isAuthenticated to false
        dispatch({type: 'LOGOUT_USER'})
        navigation.navigate('SignIn')
    };


