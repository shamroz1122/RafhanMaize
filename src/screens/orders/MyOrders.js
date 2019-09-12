import React,{useState,useEffect} from 'react'
import {View,Text,StatusBar,Platform,StyleSheet,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H2,H3,Tab,Tabs,Card, CardItem,Item,Input } from 'native-base';
function MyOrders(props) {

      const [state,setState] = useState({
        searchBar:false,
        orders: []
      })

     
    var allOrders =  [
      { orderTitle: 'Malik Corporation', orderDetail:'Order #: PK0000517 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:'PK0000517' },
      { orderTitle: 'Sahara Corporation', orderDetail:'Order #: PK0000518 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:'PK0000518' },
      { orderTitle: 'Sitara Corporation', orderDetail:'Order #: PK0000519 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:'PK0000519' },
      { orderTitle: 'Dina Corporation', orderDetail:'Order #: PK0000520 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:'PK0000520' },
      { orderTitle: 'Lahore Corporation', orderDetail:'Order #: PK0000521 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:'PK0000521' },
      { orderTitle: 'Ziarat Corporation', orderDetail:'Order #: PK0000522 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:'PK0000522' },
      { orderTitle: 'Anwar Corporation', orderDetail:'Order #: PK0000523 | Order Date: 2019-08-24 | Delivery Date: 2019-08-28',id:'PK0000523' }
    ]

    useEffect( ()=>{
    
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#60993A")
          StatusBar.setTranslucent(false)
        }
      
        setState(
          (state) =>({ 
            ...state,
            orders : allOrders 
          })
        )


      },[]) 

      const styles = StyleSheet.create({

        header:{
            backgroundColor:'#6DB33F',
        },
        card :{
          elevation: 4
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

      const onSearch = (text) => {
  
                var value = text.toLowerCase()
                var orders = state.orders.filter(order=>{
                  return order.orderTitle.substring(0, value.length).toLowerCase() === value; 
                });
    
                if(text=='')
                {
              
                  setState(
                    (state) =>({ 
                      ...state,
                      orders : allOrders 
                    })
                  )
                    
                }else{
             
                  setState(
                    (state) =>({ 
                      ...state,
                      orders : orders 
                    })
                  )
                }
            
      }


       const searchBar = state.searchBar==true? 
                        (
                              <Item>
                                <Input type="text" id="search" onChangeText={onSearch}  placeholder="Search" />
                                <Icon type="MaterialCommunityIcons" name="shopping" /> 
                              </Item>
                        ):null

        const orders =  state.orders.length > 0 ? (

                              state.orders.map(order => {
                                return (
                                         <TouchableOpacity key={order.id} activeOpacity={1} onPress={()=>props.navigation.navigate('OrderDetails',{order:order}) }>
                                            <Card style={styles.card} >
                                                <CardItem >
                                                  <Left>
                                                    <View style={styles.myButton}>
                                                      <Icon type="MaterialCommunityIcons" name="shopping" style={{color:'#ffffff'}}/>
                                                    </View>
                                                    <Body>
                                                      <H3 style={{color:'#6DB33F'}}>{order.orderTitle}</H3>
                                                      <Text style={{fontSize:10,color:'#838383'}}>{order.orderDetail}</Text>
                                                    </Body>
                                                  </Left>
                                                </CardItem>
                                              </Card>
                                            </TouchableOpacity>
                                        )
                                    })

                          ) : null 
        
      

    const changeSearchBar = (e) => {
   //   alert('hello')
      setState((state)=>({
        ...state,
        searchBar:!state.searchBar
      })
      )
    }

    

    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
    
        <Header style={styles.header}>
          <Left>
            <Button onPress={()=>props.navigation.navigate('Dashboard') } transparent>
               <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
            </Button>
          </Left>
          <Body>
            <H3 style={{color:'#ffffff'}}>Orders</H3>
          </Body>
          <Right>
            <Button onPress={changeSearchBar} transparent>
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