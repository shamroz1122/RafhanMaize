import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,RefreshControl} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H2,H3,Tab,Tabs,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'
import { getAllOrders } from '../../redux/actions/orderActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'

function MyOrders(props) {

      const [state,setState] = useState({
        searchBar:false,
        filtered:[],
        loadingScreen:true
      })
      const [refreshing, setRefreshing] = useState(false);
      const [paging, setPaging] = useState({
        page:1
      });

  
    useEffect( ()=>{
        props.getAllOrders(paging.page)

      },[]) 

      
      useEffect( ()=>{

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
          //console.log('new products: ',props.products)
          if(Object.keys(props.orders).length)
          {
              setState((state)=>({
                ...state,
                filtered: [ ...props.orders,...state.filtered],
                loadingScreen:false
              }))

          }
          setRefreshing(false)
        }
    
       },[props.error,props.orders]) 



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
  
              // Variable to hold the original version of the list
              let currentList = [];
              // Variable to hold the filtered list before putting into state
              let newList = [];
              // If the search bar isn't empty
              if (text !== "") {

                            currentList = props.orders;

                            newList = currentList.filter(item => {
                                  
                            const lc = item.name.toLowerCase();
                                
                            const filter = text.toLowerCase();
                                
                            return lc.includes(filter);
                          });

                } else {
                      // If the search bar is empty, set newList to original task list
                        newList = props.orders;
                }
                  // Set the filtered state based on what our rules added to newList
                setState(
                  (state) =>({ 
                    ...state,
                    filtered : newList 
                  })
                )


      }


       const searchBar = state.searchBar==true? 
                        (
                              <Item>
                                <Input type="text" id="search" onChangeText={onSearch}  placeholder="Search" />
                                <Icon type="MaterialCommunityIcons" name="shopping" /> 
                              </Item>
                        ):null

             const ordersDelivered =  state.filtered ? (

                              state.filtered.map(order => {
                                if(order.status=='Delivered')
                                {
                                return (
                                         <TouchableOpacity key={order.order_number} activeOpacity={1} onPress={()=>props.navigation.navigate('OrderDetails',{order:order}) }>
                                            <Card style={styles.card} >
                                                <CardItem >
                                                  <Left>
                                                    <View style={styles.myButton}>
                                                      <Icon type="MaterialCommunityIcons" name="shopping" style={{color:'#ffffff'}}/>
                                                    </View>
                                                    <Body>
                                                      <H3 style={{color:'#6DB33F'}}>{order.name}</H3>
                                                      <Text style={{fontSize:10,color:'#838383'}}>Order #: {order.order_number} | Order Date: {order.date} | Delivery Date: {order.delivery_date} </Text>
                                                    </Body>
                                                  </Left>
                                                </CardItem>
                                              </Card>
                                            </TouchableOpacity>
                                        )
                                }

                                    })

                                    
                          ) : null 

                const ordersPending =  state.filtered ? (

                  state.filtered.map(order => {

                    if(order.status=='Pending')
                    {
                    return (
                              <TouchableOpacity key={order.order_number} activeOpacity={1} onPress={()=>props.navigation.navigate('OrderDetails',{order:order}) }>
                                <Card style={styles.card} >
                                    <CardItem >
                                      <Left>
                                        <View style={styles.myButton}>
                                          <Icon type="MaterialCommunityIcons" name="shopping" style={{color:'#ffffff'}}/>
                                        </View>
                                        <Body>
                                          <H3 style={{color:'#6DB33F'}}>{order.name}</H3>
                                          <Text style={{fontSize:10,color:'#838383'}}>Order #: {order.order_number} | Order Date: {order.date} | Delivery Date: {order.delivery_date} </Text>
                                        </Body>
                                      </Left>
                                    </CardItem>
                                  </Card>
                                </TouchableOpacity>
                            )
                    }else{
                      return null
                    }

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

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      let page_number = paging.page+1
      let page = {page:page_number}
      setPaging({page:page_number})

      props.getAllOrders(page)
      // wait(2500).then(() => setRefreshing(false));

    }, [refreshing]);

    const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
  

    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
    
        <Header androidStatusBarColor="#60993A" style={styles.header}>
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

        <Spinner
              overlayColor="rgba(0, 0, 0, 0.3)"
              visible={state.loadingScreen}
              customIndicator={customIndicator}
            />

        <Content refreshControl={
              <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={onRefresh} tintColor="#6DB33F" />
            }
         style={{backgroundColor:"#DFEED7"}}
         >
        
              {searchBar}
              <Tabs  tabBarUnderlineStyle={{backgroundColor:'#ffffff'}}>
               
                <Tab heading="Delivered" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}} tabStyle={{backgroundColor:'#60993A'}} textStyle={{color:'#ffffff'}}>
                    
                        { ordersDelivered ? <View style={styles.cardView} >{ordersDelivered}</View> : null }
                      
                </Tab>

                <Tab heading="Pending" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#B35644'}}  tabStyle={{backgroundColor:'#B35644'}}  textStyle={{color:'#ffffff'}}>

                    
                         { ordersDelivered ? <View style={styles.cardView} >{ordersDelivered}</View> : null }

                </Tab>
                
              </Tabs>

        </Content>
      </Container>

    )
}



const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    error: state.order.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllOrders: (page) => dispatch(getAllOrders(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
