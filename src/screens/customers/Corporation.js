import React, {useEffect} from 'react'
import { View, Text,StatusBar,Platform } from 'react-native'


function Corporation() {

    useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#333333")
        }
        },[]) 
      
    return (
        <View>
            <Text>Malik Corporation</Text>
        </View>
    )
}

export default Corporation
