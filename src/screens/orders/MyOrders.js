import React,{useEffect} from 'react'
import {View,Text,StatusBar} from 'react-native'
import {Button} from 'native-base'
export default function MyOrders(props) {
    useEffect( ()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#60993A")
      },[]) 
    return (
         <View>
         <Button small transparent onPress={()=>props.navigation.navigate('OrderDetails') }>
             <Text> My Order Details </Text>
        </Button>
       
         </View>
    )
}
