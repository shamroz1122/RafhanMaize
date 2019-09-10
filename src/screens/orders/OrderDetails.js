import React,{useEffect} from 'react'
import {StatusBar,Platform,StyleSheet  } from 'react-native'
import { Container, Content, Card, CardItem,Text, Body } from "native-base"
const OrderDetails = () => {
    useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle('light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
      },[]) 


      const styles = StyleSheet.create({

      })

    return (
          <Container style={{backgroundColor:"#DFEED7"}}>
            <Content padder>
              <Card style={{borderRadius:10,elevation:4}}>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Security Depositer</Text>
                      <Text style={{color:'#333333'}}>Lorem Ipsum</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>PO Number</Text>
                      <Text style={{color:'#333333'}}>kiqpk87485</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Note</Text>
                      <Text style={{color:'#333333'}}>Note will here</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Order Date</Text>
                      <Text style={{color:'#333333'}}>2019-08-24 </Text>
                   </Body>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Delivery Date</Text>
                      <Text style={{color:'#333333'}}>2019-08-28</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Customer</Text>
                      <Text style={{color:'#333333'}}>Malik Corporation</Text>
                   </Body>
                </CardItem>
              </Card>

              <Card style={{borderRadius:10,elevation:8}}>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Product Name</Text>
                      <Text style={{color:'#333333'}}>Buffalo Maize Bran 1350000 AFI-PPW30KG</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>UOM</Text>
                      <Text style={{color:'#333333'}}>BG </Text>
                   </Body>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Quantity</Text>
                      <Text style={{color:'#333333'}}>300</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#8D8D8D',fontSize:14}}>Delivery Date</Text>
                      <Text style={{color:'#333333'}}>2019-08-28</Text>
                   </Body>
                </CardItem>
                <CardItem bordered>
                   <Body>
                      <Text style={{color:'#333333'}}>Total </Text>
                   </Body>
                   <Body>
                      <Text style={{color:'#333333'}}>300 x 75 = 22,500</Text>
                   </Body>
                </CardItem>
              </Card>
             </Content>
           </Container>
    )
}

export default OrderDetails
