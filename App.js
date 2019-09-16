import React, {Component} from 'react';
import {AppLoading} from 'expo'
import * as Font from 'expo-font';
import { View, AsyncStorage  } from 'react-native';
import { Root } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import { setCurrentUser, logOutUser } from './src/redux/actions/authActions';
import setAuthToken from './src/utils/setAuthToken';
import jwt_decode from "jwt-decode";

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isReady: false,
          token:'',
          user:{}
        };
      }

  componentWillMount() {
    // Check for token to keep user logged in
    AsyncStorage.getItem('Token', (err, token) => {
      if (err) {
        console.log('Not found token :', err)
      } else {
        this.setState({ token })
      
       // console.log('Token',token)
      }
    })
  
    AsyncStorage.getItem('User', (err, user) => {
      if (err) {
        console.log('Not found token :', err)
      } else {
        this.setState({ user })
      
      //  console.log('user',user)
      }
    })


  }

  componentDidUpdate(prevProps) {
    const { token, user } = this.state
    console.log('token',token)
 
    // Set auth token header auth
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    this.props.dispatch(setCurrentUser(user));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      this.props.dispatch(logOutUser());
      // Redirect to login
      this.props.navigation.navigate('Login')
    }
    this.props.navigation.navigate('Home')
  }
  
      async componentDidMount() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ isReady: true });


      }
      

      render() {
        if (!this.state.isReady) {
          return <AppLoading />;
        }
    
        return (
          <Provider store={store}>
          
              <View style={{flex:1}}>
                 <Root>
                  <AppNavigator />
                  </Root>
              </View>
             
          </Provider>
        
        );
      }

    }

    export default App

 