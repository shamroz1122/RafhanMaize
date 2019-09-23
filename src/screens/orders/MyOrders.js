import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,RefreshControl} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H2,H3,Tab,Tabs,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'
import { getDeliveredOrders } from '../../redux/actions/orderActions'
import { getPendingOrders } from '../../redux/actions/orderActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'

function MyOrders(props) {

      const [state,setState] = useState({
        searchBar:false,
        pendingfiltered:[],
        deliveredfiltered:[],
        loadingScreen:true,
        tab:false
      })
      const [refreshing, setRefreshing] = useState(false);

      const [pendingPaging, setPendingPaging] = useState({
        status:'submit',
        page:1
      });

      const [deliveredPaging, setDeliveredPaging] = useState({
        status:'delivered',
        page:1
      });

  
    useEffect( ()=>{

        props.getDeliveredOrders(deliveredPaging)
        props.getPendingOrders(pendingPaging)
      },[]) 

      
      useEffect( ()=>{

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
        
          if(Object.keys(props.deliveredOrders).length)
          {
           
              setState((state)=>({
                ...state,
                deliveredfiltered: [...props.deliveredOrders,...state.deliveredfiltered],
                loadingScreen:false
              }))
           
          }

       
          setRefreshing(false)
        }
    
       },[props.error,props.deliveredOrders]) 


       useEffect( ()=>{

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
          //console.log('new products: ',props.products)
       
          if(Object.keys(props.pendingOrders).length)
          {
              setState((state)=>({
                ...state,
                pendingfiltered: [...props.pendingOrders,...state.pendingfiltered],
                loadingScreen:false
              }))

          }
          setRefreshing(false)
        }
    
       },[props.error,props.pendingOrders]) 


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

                            if(state.tab)
                            {
                              currentList = props.pendingOrders;
                            }else{
                              currentList = props.deliveredOrders;
                            }
                        

                            newList = currentList.filter(item => {
                                  
                            const lc = item.name.toLowerCase();
                                
                            const filter = text.toLowerCase();
                                
                            return lc.includes(filter);
                          });

                } else {
                      // If the search bar is empty, set newList to original task list
                      if(state.tab)
                      {
                        newList = props.pendingOrders;
                      }else{
                        newList = props.deliveredOrders;
                      }
                    
                }
                  // Set the filtered state based on what our rules added to newList

                  if(state.tab)
                  {
                    setState(
                      (state) =>({ 
                        ...state,
                        pendingfiltered : newList 
                      })
                    )
                  }else{
                    setState(
                      (state) =>({ 
                        ...state,
                        deliveredfiltered : newList 
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

             const ordersDelivered =  state.deliveredfiltered ? (

                                state.deliveredfiltered.map(order => {
                                
                                return (
                                         <TouchableOpacity key={order.id} activeOpacity={1} onPress={()=>props.navigation.navigate('OrderDetails',{order:order}) }>
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
                                  

                                    })

                                    
                          ) : null 

                const ordersPending =  state.pendingfiltered ? (

                  state.pendingfiltered.map(order => {

                    return (
                              <TouchableOpacity key={order.id} activeOpacity={1} onPress={()=>props.navigation.navigate('OrderDetails',{order:order}) }>
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

 

    const onRefreshPending = React.useCallback(() => {
    
      setRefreshing(true);
      let page_number = pendingPaging.page+1
      let page = {status:'submit',page:page_number}
      setPendingPaging({status:'submit',page:page_number})
      props.getPendingOrders(page)
      // wait(2500).then(() => setRefreshing(false));

    }, [refreshing]);

    
    const onRefreshDelivered = React.useCallback(() => {
   
      setRefreshing(true);
      let page_number = deliveredPaging.page+1
      let page = {status:'delivered',page:page_number}
      setDeliveredPaging({status:'delivered',page:page_number})
      props.getDeliveredOrders(page)
      // wait(2500).then(() => setRefreshing(false));

    }, [refreshing]);


    const onChangeTab = () => {
      setState((state)=>({
        ...state,
        tab:!state.tab
      })
      )
    }

    const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
  

    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
    
        <Header hasTabs androidStatusBarColor="#60993A" style={styles.header}>
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
                    <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={state.tab?onRefreshPending:onRefreshDelivered} tintColor="#6DB33F" />
                  } 
                style={{backgroundColor:"#DFEED7"}}
         >
        
              {searchBar}
              <Tabs onChangeTab={onChangeTab} tabBarUnderlineStyle={{backgroundColor:'#ffffff'}}>
               
                <Tab heading="Delivered" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}} tabStyle={{backgroundColor:'#60993A'}} textStyle={{color:'#ffffff'}}>
                    
                        { ordersDelivered ? <View style={styles.cardView} >{ordersDelivered}</View> : null }
                      
                </Tab>

                <Tab heading="Pending" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#B35644'}}  tabStyle={{backgroundColor:'#B35644'}}  textStyle={{color:'#ffffff'}}>

                        { ordersPending ? <View style={styles.cardView} >{ordersPending}</View> : null }

                </Tab>
                
              </Tabs>

        </Content>
      </Container>

    )
}



const mapStateToProps = (state) => {
  return {
    deliveredOrders: state.order.deliveredOrders,
    pendingOrders: state.order.pendingOrders,
    error: state.order.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDeliveredOrders: (page) => dispatch(getDeliveredOrders(page)),
    getPendingOrders: (page) => dispatch(getPendingOrders(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
