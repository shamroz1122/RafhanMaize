import React, {useState,useEffect} from 'react';
import {AppLoading} from 'expo'
import * as Font from 'expo-font';
import { StyleSheet, View  } from 'react-native';
import Home from './src/screens/dashboard/Home';
import Dashboard from './src/screens/dashboard/Dashboard';
// import AppNavigator from './src/navigation/StackNavigator';
import { Ionicons } from '@expo/vector-icons'

export default function App(props) {

  const [state,setState] = useState({
      loading: true,
      token: ''
  });

  const styles = StyleSheet.create({
  
  });

  useEffect( ()=>{
    declareFont()
  },[])

  const declareFont = async () =>{
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    setState({ loading: false });
  }

    if (state.loading) {
          return (
            <View>
              <AppLoading />
            </View>
          );
        }
        return ( 
          <View style={{flex:1}}>
             {/* <AppNavigator /> */}
             <Dashboard /> 
          </View>
        );
    }


