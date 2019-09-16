import React, {useState,useEffect} from 'react'
import { StyleSheet,ImageBackground, Text, View,Image,KeyboardAvoidingView,StatusBar,Platform } from 'react-native';
import { Icon,Input,Item,Button,Spinner,Toast } from 'native-base';
import logo from '../../../assets/logo.png'
import Rafhanlogo from '../../../assets/RafhanLogocolor.png'
import loginBg from '../../../assets/login_bg.png'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/authActions'
import { State } from 'react-native-gesture-handler';

function Login(props){

            const [credentials,setCredentials] = useState({
                    email:'',
                    password:'' 
            })
            const [state,setState] = useState({
          
                isLoading:false,
                showToast: false
            })

        useEffect( ()=>{
         
            if(Platform.OS==='android')
            {
                StatusBar.setBarStyle('light-content',true)
                StatusBar.setBackgroundColor("#333333")
            }
        },[]) 

        useEffect( ()=>{
       
               if (props.isAuthenticated) {
                    setState({...state,isLoading:false})
                    props.navigation.navigate('Home'); // push user to dashboard when they login
                }

                if(props.authError)
                {

                    Toast.show({
                        text: props.authError,
                        buttonText: "Ok",
                        duration: 3000,
                        type: "danger",
                        
                    })
                    setState({...state,isLoading:false})
                }

        },[props.authError,props.isAuthenticated]) 

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


    const onChangeUsername = (text) => {
        setCredentials({...credentials,email:text})
    }
    const onChangePassword = (text) => {
        setCredentials({...credentials,password:text})
    }

    const onLogin = (e) => {
        setState({...state,isLoading:true})
       // console.log(props) 
        props.login(credentials)
    }


    return (

        <View style={styles.container}>
     
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
                                <KeyboardAvoidingView behavior="padding" enabled >


                                    <Item >
                                        <Icon android="md-mail" ios="ios-mail"/>
                                        <Input onChangeText={onChangeUsername}  value={credentials.username} name="username" placeholderTextColor="#6CB33E" placeholder='EMAIL'/>
                                           
                                    </Item>
                                    <Item >
                                      
                                        <Icon android="md-lock" ios="ios-lock"/>
                                        <Input onChangeText={onChangePassword} value={credentials.password} name="password" secureTextEntry={true} placeholderTextColor="#6CB33E" placeholder='PASSWORD'/>
                                    </Item>
                                    
                                
                                    {state.isLoading?<Spinner color='#6DB33F' />:  <Button block style={styles.button} onPress={onLogin}>
                                        <Text style={{color:'#ffffff'}}>LOGIN</Text>
                                    </Button>}
                                  
                                    </KeyboardAvoidingView>
                                </View>
                      

                        </ImageBackground>
        </View>
       
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        login: (creds) => dispatch(login(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)