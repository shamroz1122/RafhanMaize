import React,{useEffect} from 'react'
import { View, Text,Platform,StatusBar } from 'react-native'

function Reports() {
  useEffect( ()=>{
    if(Platform.OS==='android')
    {
      StatusBar.setBarStyle('light-content',true)
      StatusBar.setBackgroundColor("#60993A")
    }
  },[]) 
  return (
    <View>
      <Text>Reports Page</Text>
    </View>
  )
}

export default Reports
