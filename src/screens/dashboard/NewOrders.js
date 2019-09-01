import React,{useEffect} from 'react'
import { View, Text,StatusBar } from 'react-native'

const NewOrders = () => {
    useEffect( ()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#60993A")
      },[])
      
    return (
        <View>
            <Text>Add New Orders</Text>
        </View>
    )
}

export default NewOrders
