import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, StatusBar,Platform,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Container,Content,Picker,Item,Icon,DatePicker } from 'native-base';


function NewOrder(){

    const [state,setState] = useState({
          orderNumberLabel:'',
          securityDepositer:'',
          orderNumber:'',
          orderDateLabel:'',
          orderDate:'',
          deliveryDate:'',
          poNumber:'',
          note:'',
          customer:'',
    })

      useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle('light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
  
        const today = new Date();  
        const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        setState((state)=>({
          ...state,
          orderNumberLabel: 'Order #: PK0000517',
          orderNumber:'PK0000517',
          securityDepositer: 'Security Depositer',
          orderDateLabel: 'Order Date '+currentDate,
          orderDate: currentDate,

        }))
       
      
      },[])


      const setDate = (newDate) => {

      let deliveryDate = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
        
      setState((state)=>({
            ...state,
            deliveryDate: deliveryDate
        
          }))
          
      }

      const onChangePoNumber = (text) =>{

        setState((state)=>({
          ...state,
          poNumber: text
     
        })
        )
        console.log(state)

      }
      const onChangeNote = (text) => {
        setState((state)=>({
          ...state,
          note: text
     
        })
        )
        console.log(state)
      }

      const onValueChange2 = (value) => {
        setState((state)=>({
          ...state,
          customer: value
        })
        )
      }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    const styles = StyleSheet.create({
     
        formFlex: {
            flex: 1,
            flexDirection: 'column',
            alignItems:'center',
            backgroundColor:'#E1EFD8',
            padding:15
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
        backgroundColor:'#ffffff',
        padding:5,
        borderRadius:5,
        marginTop:20,
        color:'#777777'
       },

       inputDateDisable : {
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        width: '48%',
        backgroundColor:'#EEEEEE',
        padding:5,
        borderRadius:5,
        marginTop:20
       },
       inputDate : {
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        width: '48%',
        backgroundColor:'#ffffff',
       
        borderRadius:5,
        marginTop:20
       },
       disabledInput : {
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        backgroundColor:'#EEEEEE',
        padding:5,
        borderRadius:5,
        marginTop:20,
        color:'#777777'
       },
       button: {
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

          <Container style={styles.formFlex}>
                <Content>
                      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset} >
                             
                               <TextInput
                                    style={styles.disabledInput}
                                    placeholder={state.orderNumberLabel}
                                    placeholderTextColor = "#777777"
                                    editable={false}
                                    
                                />
                                <TextInput
                                    style={styles.disabledInput}
                                    placeholder="Security Depositer"
                                    placeholderTextColor = "#777777"
                                    editable={false}
                                    value={state.securityDepositer}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="PO Number"
                                    placeholderTextColor = "#777777"
                                    keyboardType='number-pad'
                                    onChangeText={onChangePoNumber}
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Note"
                                    placeholderTextColor = "#777777"
                                    onChangeText={onChangeNote}
                                />

                                
                                <Item picker style={styles.input}>
                                    <Picker
                                      mode="dropdown"
                                     
                                      iosIcon={<Icon name="arrow-down" />}
                                      placeholder="Customer"
                                      placeholderStyle={{ color: "#777777" }}
                                      placeholderIconColor="#777777" 
                                      selectedValue={state.customer}
                                      onValueChange={onValueChange2}
                                    >
                                      <Picker.Item style={{color:'#777777'}} label="Customer*" value="key0" />
                                      <Picker.Item label="Asim" value="key1" />
                                      <Picker.Item label="Shamroz" value="key2" />
                                      <Picker.Item label="Azhar Iqbal" value="key3" />
                                     
                                    </Picker>
                                  </Item>

                                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>  
                                        
                                         <TextInput
                                              style={styles.inputDateDisable}
                                              placeholder={state.orderDateLabel}
                                              placeholderTextColor = "#777777"
                                              editable={false}
                                          />
                                     
                                     <View style={styles.inputDate}>
                                         <DatePicker
                                            minimumDate={new Date()}
                                            locale={"da"}
                                            timeZoneOffsetInMinutes={undefined}
                                            modalTransparent={true}
                                            animationType={"fade"}
                                            androidMode={"default"}
                                            placeHolderText="Delivery Date"
                                            textStyle={{ color: "#777777" }}
                                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                                            onDateChange={setDate}
                                            disabled={false}
                                            animationType="slide"
                                        
                                            />
                                     </View>
                                       


                                    </View>
                                   

                                <TouchableOpacity style={styles.button} >
                                  <Text style={styles.loginText}>SAVE</Text>
                                </TouchableOpacity>

                    </KeyboardAvoidingView>
                         
               </Content>
          </Container>

            // <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled> */}
            // </KeyboardAvoidingView>
              
    )
}

export default NewOrder;