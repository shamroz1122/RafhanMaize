import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, StatusBar,Platform,TextInput, TouchableOpacity,Image } from 'react-native';
import { Container,Content,Picker,Item,Icon,DatePicker, Card, CardItem,Right,H3,Left,Toast,Spinner  } from 'native-base';
import uuid from 'uuid/v1';
import { connect } from 'react-redux'
import { getMyAllCustomers } from '../../redux/actions/customerActions'
import { getOrderNumber } from '../../redux/actions/customerActions'
import { getSelectedProducts } from '../../redux/actions/customerActions'
import { addOrder } from '../../redux/actions/orderActions'
import SpinnerNew from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'



function NewOrder(props){

    const [state,setState] = useState({
          orderNumber:'',
          orderNumberLabel:'',
          spinner:false,
          loadingScreen:true,
          showToast: false,
          securityDepositer:'',
          po_number:'',
          note:'',
          customers:[],
          categories:[],
          partner_id:'0',
          category:'0',
          selectedProducts:[],
          order_date:'',
          orderDateLabel:'',
        
          delivery_date:'',
         
          orderDetails:[
             {product_id:'',productName:'', uom:'BG',qty:'',delivery_date:'',key:uuid()}
          ]

         
    })
    const [paging, setPaging] = useState({
      page:1
    });


      useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle('light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
  

       props.getMyAllCustomers()
       props.getOrderNumber()
    

        const today = new Date();  
        const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        setState((state)=>({
          ...state,
          securityDepositer: 'Security Depositer',
          orderDateLabel: 'Order Date '+currentDate,
          order_date: currentDate
          
        }))
       
      
      },[])

      useEffect( ()=>{


          if(props.customers.length)
          {
            setState((state)=>({
              ...state,
                 customers: props.customers,
                 loadingScreen:false,
            }))
          }
       
      },[props.customers])


      useEffect( ()=>{

        if(props.categories.length)
        {
          setState((state)=>({
            ...state,
               categories: props.categories,
               orderNumber:props.orderNumber,
               orderNumberLabel: 'Order #: 0000'+props.orderNumber,
           
          }))
        }
     
    },[props.orderNumber,props.categories])

    useEffect( ()=>{

      if(props.orderSuccess)
      {
        showToast(props.orderSuccess,'success')
        var ordernum = Number(props.orderNumber)
        ordernum = ordernum+1
        setState((state)=>({
          ...state,
          orderDetails: [{product_id:'',productName:'', uom:'BG',qty:'',delivery_date:'',key:uuid()}],
          partner_id:'0',
          category:'0',
          po_number:'',
          note:'',
          orderNumberLabel: 'Order #: 0000'+ordernum,
        }))
        showSpinner(false)
      }else if(props.orderFail){
        showToast(props.orderFail,'danger')
        showSpinner(false)
      }
   
  },[props.orderSuccess,props.orderFail])

         useEffect( ()=>{

            
                  if(props.selectedProducts.length)
                  {
                   
                    setState((state)=>({
                      ...state,
                      selectedProducts:props.selectedProducts,
                      loadingScreen:false,
                        
                    }))
                  }else{
                
                    if(props.isSelectedData==false){
                     
                      setState((state)=>({
                        ...state,
                        selectedProducts:[],
                        loadingScreen:false,
                          
                      }))

                    }
                
                  }
          
        },[props.selectedProducts,props.isSelectedData])


        const showToast = (msg,type) => {
              Toast.show({
                text:msg,
                buttonText: "Ok",
                duration: 3000,
                type: type,
            })

          }

          const showSpinner = (show)=>{
                setState((state)=>({
                  ...state,
                  spinner: show
                  })
                )
          }

      const onSetDeliveryDate = (newDate) => {

      let deliveryDate = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
        
      setState((state)=>({
            ...state,
            delivery_date: deliveryDate,
            orderDetails: state.orderDetails.map(el => ( {...el, delivery_date:deliveryDate}))
          }))

      }

      const onChangePoNumber = (text) =>{

        setState((state)=>({
          ...state,
          po_number: text
     
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
          partner_id: value
        })
        )

          if(value!=='0' && state.category!=='0')
          {
                setState((state)=>({
                  ...state,
                  loadingScreen:true,
                })
              )

             let data = {customer_id:value,cat_id:state.category}

             props.getSelectedProducts(data)
          }


      }
      const onCategoryPicker = (value) => {

       

            setState((state)=>({
              ...state,
              category: value
            })
          )

  
          if(state.partner_id!=='0' && value!=='0')
          {
                setState((state)=>({
                  ...state,
                  loadingScreen:true,
                })
              )

             let data = {customer_id:state.partner_id,cat_id:value}

             props.getSelectedProducts(data)
          }
         
      }
      const onChangeOrderDetail1 = (text,key) => {

          setState((state)=>({
            ...state,
            orderDetails: state.orderDetails.map(el => (el.key === key ? {...el,product_id:text} : el))
          })
          )
        
      }

      const onChangeOrderDetail2 = (text,key) => {

       
        setState((state)=>({
          ...state,
          orderDetails: state.orderDetails.map(el => (el.key === key ? {...el, qty:text} : el))
        })
        )
      
       
    }

    const addNewOrderDetail = () =>{

      setState((state)=>({
        ...state,
        orderDetails: [...state.orderDetails, {product_id:'',productName:'', uom:'BG',qty:'',delivery_date:state.delivery_date,key:uuid()}]
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
    

    const saveOrder = () => {
      
      // if(state.po_number=='')
      // {
      
      //   showToast("Please Enter PO Number",'danger')
      // }else 
      if(state.partner_id=='0')
      {
       
        showToast("Please Select Customer",'danger')

      }else if(state.category=='0')
      {
      
        showToast("Please Select Category",'danger')
      }
      // else if(state.delivery_date=='')
      // {
       
      //   showToast("Please Select Delivery Date",'danger')
      // }
      else{

        showSpinner(true)
        let orderdata = {
          po_number:state.po_number,
          note:state.note,
          order_date:state.order_date,
          partner_id:state.partner_id,
          delivery_date:state.delivery_date,
          products:state.orderDetails
        }
        props.addOrder(orderdata)
      }
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



  

                const customers =  state.customers.length > 0 ? (

                        state.customers.map(customer => {
                        
                        return (
                                    <Picker.Item label={customer.name} key={customer.id} value={customer.id} />
                                                        
                                )
                          
                            })

                  ) : <Picker.Item label="NothingFound" value={0} key={uuid()} />

                  const categories =  state.categories.length > 0 ? (

                    state.categories.map(category => {
                    
                    return (
                                <Picker.Item label={category.name} key={category.id} value={category.id} />
                                                    
                            )
                      

                        })

              ) : <Picker.Item label="Nothing Found" value={0} key={uuid()} />


              const selectedProducts =  state.selectedProducts.length > 0 ? (

                state.selectedProducts.map(product => {
                
                return (
                            <Picker.Item label={product.p_name} key={product.p_id} value={product.p_id} />
                                                
                        )
                  
                    })

                 ) : <Picker.Item label="No Products" value={0} key={uuid()} />
                

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
                              selectedValue={orderDetail.product_id}
                              onValueChange={(text)=>onChangeOrderDetail1(text,orderDetail.key)}
                            >
                              <Picker.Item label="Product Name" value="0" />
                              {selectedProducts}
                            
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
                                      placeholder={"Delivery Date: "+orderDetail.delivery_date}
                                      placeholderTextColor = "#777777"
                                      editable={false}
                                  />
                              </View>
                     </View>
                  </CardItem>
                </Card>
            )
        })

        const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>

    return (

          <Container style={styles.formFlex}>
                 
        <SpinnerNew
              overlayColor="rgba(0, 0, 0, 0.3)"
              visible={state.loadingScreen}
              customIndicator={customIndicator}
            />

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
                                      selectedValue={state.partner_id}
                                      onValueChange={onCustomerPicker}
                                    >
                               
                                      <Picker.Item label="Customer*" value="0" />
                                       {customers}
                                     
                                    </Picker>
                                  </Item>
                                </View>
                                
                                <View style={styles.customerPicker}>
                                 <Item picker >
                                    <Picker
                                      mode="dropdown"
                                      iosIcon={<Icon name="arrow-down" />}
                                   
                                      placeholder="Product Category"
                                      placeholderStyle={{ color: "#777777" }}
                                      placeholderIconColor="#777777" 
                                      selectedValue={state.category}
                                      onValueChange={onCategoryPicker}
                                    >
                                      <Picker.Item label="Product Category*" value="0" />
                                       {categories}
                                     
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
                                {state.spinner?<Spinner color='#6DB33F' />: <TouchableOpacity onPress={saveOrder}style={styles.button} >
                                  <Text style={styles.loginText}>SAVE</Text>
                                </TouchableOpacity>}
                             

               </Content>
          </Container>

                 
    )
}



const mapStateToProps = (state) => {
  return {
    customers: state.customer.allCustomers,
    orderNumber: state.customer.orderNumber,
    categories: state.customer.categories,
    selectedProducts: state.customer.selectedProducts,
    isSelectedData:state.customer.isSelectedData,
    orderSuccess:state.order.msg,
    orderFail:state.order.msg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyAllCustomers: () => dispatch(getMyAllCustomers()),
    getOrderNumber: () => dispatch(getOrderNumber()),
    getSelectedProducts: (data) => dispatch(getSelectedProducts(data)),
    addOrder: (data) => dispatch(addOrder(data)),
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)
