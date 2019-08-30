import React from 'react';
import { StyleSheet, Text, View, StatusBar,Image,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Container, Header, Title, Right, Body, H2 } from 'native-base';
import logo from '../../../assets/logo.png'

function OldLogin(){

    const styles = StyleSheet.create({
        header:{
            backgroundColor:'#6CB33E',
            marginTop: StatusBar.currentHeight 
        },
        imageFlex:{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
        },

        textFlex: {
            flex: 1,
            flexDirection: 'column',
            alignItems:'center',
        },
        formFlex: {
            flex: 3,
            flexDirection: 'column',
            alignItems:'center',
            backgroundColor:'#E1EFD8',
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            marginTop:50,
            paddingTop: 60
        },
        lineStyle:{
            borderBottomWidth: 4,
            borderColor:'#6CB33E',
            width:'10%',
            marginTop:10
          
       },
       text: {
        color:'grey',
        textAlign:'center',
        marginTop:10
       },
       input : {
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        width: '80%',
        backgroundColor:'#ffffff',
        padding:5,
        borderRadius:5,
        marginTop:20
       },
       button: {
        width: '80%',
        marginTop:20,
        backgroundColor:'#6CB33E',
        borderRadius:5,
        padding: 10,
       },
       loginText:{
        color:'#fff',
        textAlign:'center'
       },
       bottomText: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width:'80%'
       },
       bottomTextStyle:{
        color:'grey',
        marginTop:20,
        fontSize:11
       }


    });

    return (
      
        
         <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
             <Header style={styles.header}>
                <Body>
                    <Title>Login</Title>
                </Body>
                <Right />
             </Header>
                    <View style={styles.imageFlex}>
                            <Image  source={logo} style={{ height: 110,width: 170}}/>
                    </View>
                    <View style={styles.textFlex}>
                        <Text>
                           <H2> Welcome To Ingredion</H2>
                        </Text>
                        <View style = {styles.lineStyle} />
                        <Text style = {styles.text}> 
                            Please enter your email and {"\n"}
                            password to continue
                        </Text>
                    </View>

                    <View style={styles.formFlex}>
                        
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                placeholderTextColor = "#777777"
                                keyboardType='email-address'
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor = "#777777"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity style={styles.button} >
                              <Text style={styles.loginText}>LOGIN</Text>
                            </TouchableOpacity>

                            <View style={styles.bottomText} >
                                <Text style={styles.bottomTextStyle}>
                                   Forgot Password?
                                </Text> 
                                <Text style={styles.bottomTextStyle}>
                                   Don't Have Account?{' '} 
                                   <Text style={{color: '#6CB33E'}}>
                                     Signup
                                  </Text>
                                </Text>
                                 
                            </View>


                    </View>
         
                    </KeyboardAvoidingView>
      

    )
}

export default OldLogin;