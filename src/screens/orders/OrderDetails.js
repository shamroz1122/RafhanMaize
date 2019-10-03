import React,{useEffect,useState} from 'react'
import {StatusBar,Platform,Image,View} from 'react-native'
import { Container, Content, Card, CardItem,Text, Body } from "native-base"
import { connect } from 'react-redux'
import { getOrderDetail } from '../../redux/actions/orderActions'
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
       loadingScreen:false
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

      },[]) 

      useEffect( ()=>{
  
         if(props.error)
         {
            console.log('Error Occured: ',props.error)
            setState((state)=>({
             ...state,
              loadingScreen:false
           }))
         }else{
          
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
                 totalQuantity:totalQty
               }))
           }
        
         }
 
        },[props.error,props.orderDetail]) 



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


                   

    return (
          <Container style={{backgroundColor:"#DFEED7"}}>
            <Content padder>
                  <Spinner
                  overlayColor="rgba(0, 0, 0, 0.3)"
                  visible={state.loadingScreen}
                  color = "#60993A"
                  />

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
     error: state.order.error,
   }
 }
 
 const mapDispatchToProps = (dispatch) => {
   return {
       getOrderDetail: (id) => dispatch(getOrderDetail(id))
   }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
