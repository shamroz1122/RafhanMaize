import React,{useEffect,useState} from 'react'
import {StatusBar,Platform,View,TouchableOpacity,Text,StyleSheet,Animated,Linking} from 'react-native'
import { Container, Content, Card, CardItem, Body,Toast,H3 } from "native-base"
import { connect } from 'react-redux' 
import { getOrderDetail } from '../../redux/actions/orderActions'
import { updateOrderStatus } from '../../redux/actions/orderActions'
import { ClearMessages } from '../../redux/actions/orderActions'
import Spinner from 'react-native-loading-spinner-overlay';
//import loaderImage from '../../../assets/loader-gif.gif'
import uuid from 'uuid/v1';


const OrderDetails = (props) => {


   const [state,setState] = useState({
      "order": {
         "security_depositor": "",
         "po_number": '',
         "note": '',
         "order_date": "",
         "delivery_date": '',
         "customer": "",
         "products": [
             {
                 "name": "",
                 "uom": "",
                 "qty": "",
                 "delivery_date": ""
             }
         ],
         "total": 1
       }, 
       totalQuantity:0,
       loadingScreen:false,
       orderStatusUpdated:false,
       showAttachments:false,
       fadeAnim:new Animated.Value(0)
      
    })


    useEffect( ()=>{ 
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle('light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }

        setState((state)=>({
         ...state,
          loadingScreen:true
       }))

         const params =  props.navigation.getParam('order')
         let orderid = {'orderid':params.id}
         props.getOrderDetail(orderid)

         if(params.status!='Draft')
         {
            setState((state)=>({ 
               ...state,
                loadingScreen:true,
                orderStatusUpdated:true
             }))
      
         }

      },[]) 
      
      const showAttachments = (value) => {

         if(value)
         {
       
            Animated.timing(
               state.fadeAnim,
               {
                 toValue: 1,
                 duration: 2000,
               }
             ).start();

             setState((state)=>({
               ...state,
               showAttachments:value
             }))
             
         }else{
         
            Animated.timing(                  
               state.fadeAnim,            
               {
                 toValue: 0,                   
                 duration: 2000,              
               }
            ).start(); 

             setState((state)=>({
               ...state,
               showAttachments:value,
             }))
             
         }
       
          
       
      }

      const submitOrder = () =>{
         setState((state)=>({
            ...state,
             loadingScreen:true
          }))
         const params =  props.navigation.getParam('order')
         let orderid = {'order_id':params.id}
         props.updateOrderStatus(orderid)
      }
      const editOrder = () =>{
         const params =  props.navigation.getParam('order')
         let orderid = {'order_id':params.id}
         props.navigation.navigate('EditOrder',{order_id:orderid})
      }
      useEffect( ()=>{
  
         if(props.error)
         {
            console.log('Error Occured: ',props.error)
            setState((state)=>({
             ...state,
              loadingScreen:false
           }))
         }else{
          
            console.log(props.orderDetail)
           if(Object.keys(props.orderDetail).length)
           {
               var totalQty = 0
               props.orderDetail.products.map(product => { 

                  totalQty = totalQty + product.qty 
               })

               setState((state)=>({
                 ...state,
                 order: props.orderDetail,
                 loadingScreen:false,
                 totalQuantity:totalQty,
                 
               }))
           }
        
         }
 
        },[props.error,props.orderDetail]) 


        useEffect( ()=>{
  
         if(props.error)
         {
            console.log('Error Occured: ',props.error)
            setState((state)=>({
             ...state,
              loadingScreen:false
           }))

            Toast.show({
               text:'Something Went Wrong!',
               buttonText: "Ok",
               duration: 3000,
               type: 'danger',
            })

           
         }else{
            if(props.orderStatusUpdated)
            {  
             
               setState((state)=>({
                 ...state,
                 loadingScreen:false,
                 orderStatusUpdated:true
               }))

               Toast.show({
                  text:'Order Successfully Submitted.',
                  buttonText: "Ok",
                  duration: 3000,
                  type: 'success',
              })
              props.ClearMessages()

            }
           
         }
 
        },[props.error,props.orderStatusUpdated]) 

        const styles = StyleSheet.create({  
            button: {
               marginTop:5,
               backgroundColor:'#6CB33E',
               padding: 10
            },
            button2: {
               marginRight:5,
               marginTop:5,
               backgroundColor:'#ffffff',
               padding: 10
            },
        })

       // const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
  
         
                 
                     const products =  state.order.products ? (
                       
                        state.order.products.map(product => {
                        
                        
                          
                       
                        return (
                                 <View key={uuid()}>
                                 <CardItem bordered>
                                       <Body>
                                          <Text style={{color:'#8D8D8D',fontSize:14}}>Product Name</Text>
                                          <Text style={{color:'#333333'}}>{product.name}</Text>
                                       </Body>
                                    </CardItem>
                                    <CardItem bordered>
                                       <Body>
                                          <Text style={{color:'#8D8D8D',fontSize:14}}>UOM</Text>
                                          <Text style={{color:'#333333'}}>{product.uom}</Text>
                                       </Body>
                                       <Body>
                                          <Text style={{color:'#8D8D8D',fontSize:14}}>Quantity</Text>
                                          <Text style={{color:'#333333'}}>{product.qty}</Text>
                                       </Body>
                                    </CardItem>
                                    <CardItem bordered>
                                       <Body>
                                          <Text style={{color:'#8D8D8D',fontSize:14}}>Delivery Date</Text>
                                          <Text style={{color:'#333333'}}>{product.delivery_date}</Text>
                                       </Body>
                                    </CardItem>
                                 </View>
                              )
                           })

                         
                     ) : null 


                     const attachments =  state.order.attachments ? (
                       
                        state.order.attachments.map(attachment => {
         
                        return (
                                 <View key={uuid()}>
                                   <CardItem bordered>
                                       <Body>
                                       <Text style={{color: '#333333'}}
                                             onPress={() => Linking.openURL('http://order.rafhanmaize.com/dev/'+attachment.file_path)}>
                                             {attachment.file_name}
                                       </Text>
                                         
                                       </Body>
                                    </CardItem>
                                 </View>
                              )
                           })

                         
                     ) : null 

                   

    return (
          <Container style={{backgroundColor:"#DFEED7"}}>
            <Content padder>

                  <Spinner
                  overlayColor="rgba(0, 0, 0, 0.3)"
                  visible={state.loadingScreen}
                  color = "#60993A"
                  />
                  {props.orderDetail.attachments && Object.keys(props.orderDetail.attachments).length?<View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',paddingLeft:2,paddingBottom:5}}>
                  
                     <TouchableOpacity onPress={() => showAttachments(!state.showAttachments)} style={styles.button} >
                        <Text style={{color:'#ffffff'}}>Attachments</Text>
                     </TouchableOpacity>
                    
                  </View>:null}

               {state.orderStatusUpdated?null:<View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',paddingRight:2,paddingBottom:5}}>
                     <TouchableOpacity onPress={editOrder} style={styles.button2}  >
                        <Text style={{color:'#60993A'}}>Edit</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={submitOrder} style={styles.button} >
                        <Text style={{color:'#ffffff'}}>Submit</Text>
                     </TouchableOpacity>
                    
                  </View>}
                  <Animated.View                 // Special animatable View
                        style={{
                        opacity: state.fadeAnim,         // Bind opacity to animated value
                        }}
                  >
                     {state.showAttachments?<Card style={{borderRadius:10,elevation:8}}>
                           <CardItem bordered>
                              <Body>
                                 <H3 style={{color:'#333333'}}>Attachments</H3>
                              </Body>
                           </CardItem>
                        {attachments}
                     </Card>:null} 

                  </Animated.View>
             

              <Card style={{borderRadius:10,elevation:4}}>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Security Depositer</Text>
                      <Text style={{color:'#333333'}}>{state.order.security_depositor}</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>PO Number</Text>
                      <Text style={{color:'#333333'}}>{state.order.po_number}</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Note</Text>
                      <Text style={{color:'#333333'}}>{state.order.note}</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Order Date</Text>
                      <Text style={{color:'#333333'}}>{state.order.order_date}</Text>
                   </Body>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Delivery Date</Text>
                      <Text style={{color:'#333333'}}>{state.order.delivery_date}</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Customer</Text>
                      <Text style={{color:'#333333'}}>{state.order.customer}</Text>
                   </Body>
                </CardItem>
              </Card>

              <Card style={{borderRadius:10,elevation:8}}>

                {products}
               
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#333333'}}>Total Quantity</Text>
                   </Body>
                   <Body>
                      <Text style={{color:'#333333'}}>{state.totalQuantity}</Text>
                   </Body>
                </CardItem>
              </Card>
             </Content>
           </Container>
    )
}




const mapStateToProps = (state) => {
   return {
     orderDetail: state.order.orderDetail,
     orderStatusUpdated:state.order.orderStatusUpdated,
     error: state.order.error,
   }
 }
 
 const mapDispatchToProps = (dispatch) => {
   return {
       getOrderDetail: (id) => dispatch(getOrderDetail(id)),
       updateOrderStatus:(id) => dispatch(updateOrderStatus(id)),
       ClearMessages:()=>dispatch(ClearMessages())
   }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
