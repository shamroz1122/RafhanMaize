import React from 'react';
import { AsyncStorage,StatusBar,View} from 'react-native';
import { setCurrentUser, logOutUser } from '../../redux/actions/authActions';
import setAuthToken from '../../utils/setAuthToken';
import setBasePath from "../../utils/setBasePath";
import jwt_decode from "jwt-decode";
import { connect } from 'react-redux'
import {Image} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._AppAsync();
    this.state = {
      isReady: true,
    };
  }

  // Fetch the token from storage then navigate to our appropriate place
  _AppAsync = async () => {

    const userToken = await AsyncStorage.getItem('Token');
    const User = await AsyncStorage.getItem('User');
    const parsedUser = JSON.parse(User)
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    if(userToken)
    {
        const decoded = jwt_decode(userToken);
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (decoded.exp < currentTime) {
   
            this.props.dispatch(logOutUser());
            this.props.navigation.navigate('Auth');
        }else{
            setBasePath()
            setAuthToken(userToken);
            this.props.dispatch(setCurrentUser(parsedUser));
            this.setState({ isReady: false });
           await this.props.navigation.navigate('App',{userImage:parsedUser.user_profile_img});
        }

    }else{
        this.setState({ isReady: false });
       await this.props.navigation.navigate('Auth');
    }

  };


  // Render any loading content that you like here
  render() {
    //const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Spinner
          visible={this.state.isReady}
          color = "#60993A"
        />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (User) => dispatch(setCurrentUser(User)),
        logOutUser: (User) => dispatch(logOutUser(User))
    }
}

export default connect(mapDispatchToProps)(AuthLoadingScreen)
