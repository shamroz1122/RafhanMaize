import React, {useEffect} from 'react'
import { View, Text,Platform,StatusBar } from 'react-native'

const MyCustomers = () => {

  useEffect( ()=>{
    if(Platform.OS==='android')
    {
      StatusBar.setBarStyle( 'light-content',true)
      StatusBar.setBackgroundColor("#333333")
    }
    },[]) 

  return (
    <View>
      <Text>My Customers</Text>
    </View>
  )
}

export default MyCustomers
