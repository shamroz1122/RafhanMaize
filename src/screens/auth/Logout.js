import React from 'react';
import {View,AsyncStorage} from 'react-native';
import { logOutUser } from '../../redux/actions/authActions';
import { connect } from 'react-redux'


class Logout extends React.Component {
  constructor(props) {
    super(props);
    this._AppAsync();
  }

  _AppAsync = async () => {

    const User = await AsyncStorage.getItem('User');
            this.props.dispatch(logOutUser(User));
            this.props.navigation.navigate('Auth');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
       
      </View>
    );
  }
}



const mapDispatchToProps = (dispatch) => {

    return {
        logOutUser: (User) => dispatch(logOutUser(User))
    }
}

export default connect(mapDispatchToProps)(Logout)
