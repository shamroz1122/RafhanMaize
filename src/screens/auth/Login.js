import React, {useEffect} from 'react'
import { StyleSheet,ImageBackground, Text, View,Image,KeyboardAvoidingView,StatusBar } from 'react-native';
import { Icon,Input,Item,Button } from 'native-base';
import logo from '../../../assets/logo.png'
import Rafhanlogo from '../../../assets/RafhanLogocolor.png'
import loginBg from '../../../assets/login_bg.png'

function Login(){

    useEffect( ()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#333333")
      },[])

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent: 'space-between',
          
        },
        imageFlex:{ 
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
        },
        formFlex: {
            flex: 3,
            flexDirection: 'column',
            height:700,
            padding:40,
       
        },
        ingredionImage:{
            width: '50%',
            height:100,
            justifyContent:'center',
            alignItems:'center',
            marginTop:50
        },
        rafhanImage:{
            width: '50%',
            paddingTop:23,
            height:100,
            justifyContent:'center',
            alignItems:'center',
            marginTop:50
        }, 
        button:{
            marginTop:20,
            backgroundColor: '#6DB33F',
        }
    });

    return (

     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
  
            <ImageBackground source={loginBg} style={{width: '100%', height: '100%'}}>
                    <View style={styles.imageFlex}>

                        <View style={styles.ingredionImage}>
                             <Image  source={logo} style={{ height: 80,width: 125}}/>
                        </View>
                        <View style={styles.rafhanImage}> 
                              <Image  source={Rafhanlogo} style={{ height: 90,width: 140}}/> 
                        </View>
                   
                    </View>
                
                    <View style={styles.formFlex}>
                        <Item >
                            <Icon active name='person' />
                            <Input placeholderTextColor="#6CB33E" placeholder='USERNAME'/>
                        </Item>
                        <Item >
                            <Icon active name='lock' />
                            <Input secureTextEntry={true} placeholderTextColor="#6CB33E" placeholder='PASSWORD'/>
                        </Item>
                        <Button block style={styles.button}>
                            <Text style={{color:'#ffffff'}}>LOGIN</Text>
                        </Button>
                    
                    </View>

            </ImageBackground>
               
      </KeyboardAvoidingView>
                  
    )
}

export default Login