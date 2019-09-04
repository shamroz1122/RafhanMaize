import React,{useState,useEffect} from 'react'
import {View,Text,StatusBar,Platform,StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title,Content,H2,Tab,Tabs,Card, CardItem,Item,Input } from 'native-base';
function MyOrders(props) {

      const [state,setState] = useState({
        searchBar:false,
        orders: [
            { orderTitle: 'Malik Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:1 },
            { orderTitle: 'Sahara Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:2 },
            { orderTitle: 'Sitara Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:3 },
            { orderTitle: 'Dina Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:4 },
            { orderTitle: 'Lahore Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:5 },
            { orderTitle: 'Ziarat Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:6 },
            { orderTitle: 'Anwar Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:7 }
          ]
      })

    useEffect( ()=>{
    
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
        
      },[]) 

      const styles = StyleSheet.create({

        header:{
            backgroundColor:'#6DB33F',
        },
        card :{
          elevation: 8
        },
        cardView:{
          padding:15,
          backgroundColor:"#DFEED7"
        },
        myButton :{
          padding: 5,
          height: 50,
          width: 50,  //The Width must be the same as the height
          borderRadius:100, //Then Make the Border Radius twice the size of width or Height   
          backgroundColor:'#60993A',
          alignItems:'center',
          justifyContent:'center'
       
        }
      })

      const searchBar = state.searchBar==true? (
      (
                <Item>
                  <Input placeholder="Search" />
                  <Icon type="MaterialCommunityIcons" name="shopping" /> 
              </Item>
      )
      ):null

    const orders = state.orders.map(order => {
    return (
                 <Card style={styles.card} key={order.id}>
                    <CardItem>
                      <Left>
                        <View style={styles.myButton}>
                          <Icon type="MaterialCommunityIcons" name="shopping" style={{color:'#ffffff'}}/>
                        </View>
                        <Body>
                          <H2 style={{color:'#6DB33F'}}>{order.orderTitle}</H2>
                          <Text style={{fontSize:10,color:'#838383'}}>{order.orderDetail}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                  </Card>
      )
    })      
      
    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
        <Header style={styles.header}>
          <Left>
            <Button onPress={()=>props.navigation.navigate('Dashboard') } transparent>
               <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
            </Button>
          </Left>
          <Body>
            <Title><H2 style={{color:'#ffffff'}}>Orders</H2></Title>
          </Body>
          <Right>
            <Button onPress={()=>setState({searchBar:!state.searchBar})} transparent>
              <Icon style={{color:'#ffffff'}} name='search' />
            </Button>
            <Button onPress={()=>props.navigation.navigate('NewOrders') } transparent>
              <Icon style={{color:'#ffffff'}} ios='ios-add-circle-outline' android="md-add-circle-outline" />
            </Button>
           
          </Right>
        </Header>
        <Content>
        
              {searchBar}
              <Tabs tabBarUnderlineStyle={{backgroundColor:'#ffffff'}}>
                <Tab  heading="Delivered" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}} tabStyle={{backgroundColor:'#60993A'}} textStyle={{color:'#ffffff'}}>
                        <View style={styles.cardView}>
                          {orders}
                        </View>
                </Tab>

                <Tab heading="Pending" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#B35644'}}  tabStyle={{backgroundColor:'#B35644'}}  textStyle={{color:'#ffffff'}}>

                   <View style={styles.cardView}>
                      {orders}
                   </View>
                </Tab>
              </Tabs>

          

        </Content>
      </Container>

    )
}
export default  MyOrders;