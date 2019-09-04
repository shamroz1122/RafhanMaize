import React,{useEffect} from 'react'
import {View,Text,Platform,StatusBar  } from 'react-native'
export default function MyProducts() {
  useEffect( ()=>{
    if(Platform.OS==='android')
    {
      StatusBar.setBarStyle('light-content',true)
      StatusBar.setBackgroundColor("#60993A")
    }
  },[]) 
    return (
        <View>
          <Text>
            My Products
          </Text>
        </View>
    )
}
