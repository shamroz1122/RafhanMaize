import React, {useEffect} from 'react'
import { View, Text,StatusBar } from 'react-native'


const Corporation = () => {
    useEffect( ()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#60993A")
      },[])
    return (
        <View>
            <Text>Malik Corporation</Text>
        </View>
    )
}

export default Corporation
