import React, {Component} from 'react';
import {AppLoading} from 'expo'
import * as Font from 'expo-font';
import { StyleSheet, View  } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons'
// export App function App(props) {

//   const [state,setState] = useState({
//       loading: true,
//       token: ''
//   });

//   const styles = StyleSheet.create({
  
//   });

//   useEffect( ()=>{
//     declareFont()
//   },[])

//   const declareFont = async () =>{
//     await Font.loadAsync({
//       Roboto: require("native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
//     });
 
//     setState({ loading: false });
//   }

//     if (state.loading) {
//           return (
//             <View>
//               <AppLoading />
//             </View>
//           );
//         }
//         return ( 
//           <View style={{flex:1}}>
//              {/* <AppNavigator /> */}
//              <AppContainer />
//           </View>
//         );

//     }

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
          <View style={{flex:1}}>
           <AppNavigator />
          </View>
        );
      }

    }

    export default App

 