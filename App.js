import React, {Component} from 'react';
import {AppLoading} from 'expo'
import * as Font from 'expo-font';
import { View } from 'react-native';
import { Root } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons'
import store from './src/redux/store'
import { Provider } from 'react-redux'

class App extends Component {

      constructor(props) {
        super(props);
        this.state = {
          isReady: false,
        };
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

 