import React, {useEffect} from 'react'
import { View, Text,StatusBar,Platform  } from 'react-native'

function Profile() {
    useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
      },[])

    return (
        <View>
            <Text>My Profile</Text>
        </View>
    )
}

export default Profile
