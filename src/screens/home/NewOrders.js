import React,{useEffect} from 'react'
import { View, Text,StatusBar,Platform } from 'react-native'

const NewOrders = () => {
    useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
      },[])
      
    return (
        <View>
            <Text>Add New Orders</Text>
        </View>
    )
}

export default NewOrders
