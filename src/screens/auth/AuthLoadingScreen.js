import React from 'react';
import { ActivityIndicator,AsyncStorage,StatusBar,View} from 'react-native';
import { setCurrentUser, logOutUser } from '../../redux/actions/authActions';
import setAuthToken from '../../utils/setAuthToken';
import setBasePath from "../../utils/setBasePath";
import jwt_decode from "jwt-decode";
import { connect } from 'react-redux'


class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._AppAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _AppAsync = async () => {

    const userToken = await AsyncStorage.getItem('Token');
    const User = await AsyncStorage.getItem('User');

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
            this.props.dispatch(setCurrentUser(User));
            this.props.navigation.navigate('App');
        }

    }else{
        this.props.navigation.navigate('Auth');
    }

  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='large' color="" />
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
