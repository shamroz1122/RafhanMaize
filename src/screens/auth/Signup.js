import React from 'react';
import { StyleSheet, Text, View, StatusBar,Image,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Container, Header, Title, Right, Body, H2 } from 'native-base';


function Signup(){

    const styles = StyleSheet.create({
        header:{
            backgroundColor:'#6CB33E',
            marginTop: StatusBar.currentHeight 
        },
        textFlex: {
            flex: 1,
            flexDirection: 'column',
            alignItems:'center',
            marginTop:40
        },
        formFlex: {
            flex: 4,
            flexDirection: 'column',
            alignItems:'center',
            backgroundColor:'#E1EFD8',
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            paddingTop: 15
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
        justifyContent: 'center',
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
                    <Title>Signup</Title>
                </Body>
                <Right />
             </Header>
                 
                    <View style={styles.textFlex}>
                        <Text>
                           <H2> Create Your Account</H2>
                        </Text>
                        <View style = {styles.lineStyle} />
                        <Text style = {styles.text}> 
                            Please fill and complete all your {"\n"}
                            details for registraion
                        </Text>
                    </View>
                    <View style={styles.formFlex}>
                           <TextInput
                                style={styles.input}
                                placeholder="Name"
                                placeholderTextColor = "#777777"
                            />
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
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                placeholderTextColor = "#777777"
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                placeholderTextColor = "#777777"
                                keyboardType='number-pad'
                            />
                            <TouchableOpacity style={styles.button} >
                              <Text style={styles.loginText}>SIGNUP</Text>
                            </TouchableOpacity>

                            <View style={styles.bottomText} >
                           
                                <Text style={styles.bottomTextStyle}>
                                   Already have account?{' '} 
                                   <Text style={{color: '#6CB33E'}}>
                                     Login
                                  </Text>
                                </Text>
                                 
                            </View>
                    </View>
         
                    </KeyboardAvoidingView>

    )
}

export default Signup;