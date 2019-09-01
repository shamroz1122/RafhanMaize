import React,{useEffect} from 'react'
import { View, Text,StatusBar } from 'react-native'

const OrderDetails = () => {
    useEffect( ()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#60993A")
      },[]) 

    return (
        <View>
            <Text>Order Details</Text>
        </View>
    )
}

export default OrderDetails
