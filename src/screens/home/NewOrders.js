import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, StatusBar,Platform,TextInput, TouchableOpacity } from 'react-native';
import { Container,Content,Picker,Item,Icon,DatePicker, Card, CardItem,Right,H3,Left } from 'native-base';
import uuid from 'uuid/v1';

function NewOrder(){

    const [state,setState] = useState({
          orderNumber:'',
          orderNumberLabel:'',

          securityDepositer:'',
         
          poNumber:'',

          note:'',

          customer:'',

          orderDate:'',
          orderDateLabel:'',
        
          deliveryDate:'',
         
          orderDetails:[
             {productName:'', uom:'BG',quantity:'',deliveryDate:'',key:uuid()}
          ]

         
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
          orderDate: currentDate
          
        }))
       
      
      },[])


      const onSetDeliveryDate = (newDate) => {

      let deliveryDate = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
        
      setState((state)=>({
            ...state,
            deliveryDate: deliveryDate,
            orderDetails: state.orderDetails.map(el => ( {...el, deliveryDate:deliveryDate}))
          }))

      }

      const onChangePoNumber = (text) =>{

        setState((state)=>({
          ...state,
          poNumber: text
     
        })
        )
     
      }
      const onChangeNote = (text) => {
        setState((state)=>({
          ...state,
          note: text
     
        })
        )
      }

      const onCustomerPicker = (value) => {
        setState((state)=>({
          ...state,
          customer: value
        })
        )
      }
      const onChangeOrderDetail1 = (text,key) => {

       
          setState((state)=>({
            ...state,
            orderDetails: state.orderDetails.map(el => (el.key === key ? {...el, productName:text} : el))
          })
          )
        
        //  console.log(state.orderDetails)
      }

      const onChangeOrderDetail2 = (text,key) => {

       
        setState((state)=>({
          ...state,
          orderDetails: state.orderDetails.map(el => (el.key === key ? {...el, quantity:text} : el))
        })
        )
      
        //console.log(state.orderDetails)
    }

    const addNewOrderDetail = () =>{

      setState((state)=>({
        ...state,
        orderDetails: [...state.orderDetails, {productName:'', uom:'BG',quantity:'',deliveryDate:state.deliveryDate,key:uuid()}]
      })
      )

    }
    const removeOrderDetail = (key) => {

        var newOrderDetails = state.orderDetails.filter(orderDetail=>{
          return orderDetail.key !== key; 
        });

        setState((state)=>({
          ...state,
          orderDetails: newOrderDetails
        })
      )
    
    }

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

       orderDetailCard : {
      
        borderWidth: 1,
        borderRadius:5,
        marginTop:20,
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
       inputUOMDisable:{
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        width: '48%',
        backgroundColor:'#EEEEEE',
        padding:5,
        borderRadius:5,
        marginTop:20,
        color:'#777777'
       },
       deliveryDateDisable:{
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        width: '100%',
        backgroundColor:'#EEEEEE',
        padding:5,
        borderRadius:5,
        marginTop:20
       },
       
       inputQuantity:{
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        width: '48%',
        padding:5,
        backgroundColor:'#ffffff',
        borderRadius:5,
        marginTop:20
       },
       customerPicker:{
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        backgroundColor:'#ffffff',
        borderRadius:5,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
       },
       productPicker: {
        flex:1,
        flexDirection:'row',
        height: 40, 
        borderColor: '#828282',
        borderWidth: 1,
        width: '100%',
        backgroundColor:'#ffffff',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
     
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


    const orderDetails =   state.orderDetails.map((orderDetail,index) => {
    
        const actionButton = index === 0 ?   <Icon onPress={addNewOrderDetail} style={{color:'#6EB341'}} type="AntDesign" name="pluscircleo" ></Icon>:   <Icon onPress={()=>removeOrderDetail(orderDetail.key)} style={{color:'#B35644'}} type="AntDesign" name="minuscircleo" ></Icon>
      return (


             <Card style={styles.orderDetailCard} key={orderDetail.key}>
                  <CardItem bordered>
                    <Left>
                      <H3 style={{color:'#777777'}}>Order Detail</H3>
                    </Left>
                    <Right>
                      {actionButton}
                    </Right>
                  </CardItem>
                  <CardItem bordered>
                    <View style={{flex:1}}>
                        <View style={styles.productPicker}>
                         <Item picker style={{border:'none'}}>
                            <Picker
                              mode="dropdown"
                            
                              iosIcon={<Icon name="arrow-down" />}
                              placeholder="Product Name"
                              placeholderStyle={{ color: "#777777" }}
                              placeholderIconColor="#777777" 
                              selectedValue={orderDetail.productName}
                              onValueChange={(text)=>onChangeOrderDetail1(text,orderDetail.key)}
                            >
                              <Picker.Item label="Product Name" value="key0" />
                              <Picker.Item label="product 1" value="key1" />
                              <Picker.Item label="product 2" value="key2" />
                              <Picker.Item label="product 3" value="key3" />
                            
                            </Picker>
                          </Item>
                          </View>
                          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}> 
                               <TextInput
                                    style={styles.inputUOMDisable}
                                    placeholder=""
                                    value={"UOM: "+orderDetail.uom}
                                    placeholderTextColor = "#777777"
                                    editable={false}
                                    
                                />
                                <TextInput
                                    style={styles.inputQuantity}
                                    placeholder="Quantity"
                                    placeholderTextColor = "#777777"
                                    keyboardType='number-pad'
                                    value={orderDetail.quantity}
                                    onChangeText={(text)=>onChangeOrderDetail2(text,orderDetail.key)}
                                />
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>  
                                  <TextInput
                                      style={styles.deliveryDateDisable}
                                      placeholder={"Delivery Date: "+orderDetail.deliveryDate}
                                      placeholderTextColor = "#777777"
                                      editable={false}
                                  />
                              </View>
                     </View>
                  </CardItem>
                </Card>
            )
        })


    return (

          <Container style={styles.formFlex}>
                <Content>
                         
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

                                
                                <View style={styles.customerPicker}>
                                 <Item picker >
                                    <Picker
                                      mode="dropdown"
                                      iosIcon={<Icon name="arrow-down" />}
                                   
                                      placeholder="Customer"
                                      placeholderStyle={{ color: "#777777" }}
                                      placeholderIconColor="#777777" 
                                      selectedValue={state.customer}
                                      onValueChange={onCustomerPicker}
                                    >
                                      <Picker.Item label="Customer*" value="key0" />
                                      <Picker.Item label="Asim" value="key1" />
                                      <Picker.Item label="Shamroz" value="key2" />
                                      <Picker.Item label="Azhar Iqbal" value="key3" />
                                     
                                    </Picker>
                                  </Item>
                                </View>
                          
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
                                              onDateChange={onSetDeliveryDate}
                                              disabled={false}
                                              animationType="slide"
                                          
                                              />
                                      </View>
                                      
                                    </View>
                                  
                                {orderDetails}

                                <TouchableOpacity style={styles.button} >
                                  <Text style={styles.loginText}>SAVE</Text>
                                </TouchableOpacity>

               </Content>
          </Container>

                 
    )
}

export default NewOrder;