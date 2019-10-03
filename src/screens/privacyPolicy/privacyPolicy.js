import React,{useEffect} from "react"
import {WebView,View,Platform,StyleSheet,StatusBar,} from 'react-native';

function privacyPolicy(){


    const styles = StyleSheet.create({
        body:{
            maxHeight: 200,
            width: 320,
            flex: 1
        }
      })

    useEffect(()=>{

        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#333333")
        }
    
    },[])


    return (
        <View style={{flex: 1, flexDirection:'column'}}>
           <WebView
                source={{uri: 'https://www.ingredionincorporated.com/legal/privacy.html'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                useWebKit={true}
                        />
        </View>
    )
}

export default privacyPolicy