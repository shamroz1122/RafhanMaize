import React,{useEffect} from 'react'
import { View, Text,StatusBar,Platform  } from 'react-native'

const OrderDetails = () => {
    useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle('light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
      },[]) 

    return (
        <View>
            <Text>Order Details</Text>
        </View>
    )
}

export default OrderDetails
