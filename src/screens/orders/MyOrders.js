import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,RefreshControl,TouchableHighlight,Modal} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Tab,Tabs,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'
import { getDeliveredOrders } from '../../redux/actions/orderActions'
import { getPendingOrders } from '../../redux/actions/orderActions'
import { searchDeliveredOrder } from '../../redux/actions/orderActions'
import { searchPendingOrder } from '../../redux/actions/orderActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'

function MyOrders(props) {

      const [state,setState] = useState({
        searchBar:false,
        pendingfiltered:[],
        deliveredfiltered:[],
        pending:[],
        delivered:[],
        loadingScreen:true,
        tab:false,
        modalVisible: false,
        searchFromDB:'',
        isSearchDelivered:false,
        isSearchPending:false
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
        


         // console.log("searchdelivered: ",props.deliveredOrders)
          if(Object.keys(props.deliveredOrders).length)
          {
          
              if(props.isSearchDelivered)
              {
                setState((state)=>({
                  ...state,
                  deliveredfiltered: props.deliveredOrders,
                  loadingScreen:false,
                  isSearchDelivered:true
                }))
                
              }else{
                setState((state)=>({
                  ...state,
                  deliveredfiltered: [...props.deliveredOrders,...state.deliveredfiltered],
                  delivered: [...props.deliveredOrders,...state.delivered],
                  loadingScreen:false
                }))
             
              }

          }else{

            if(props.isSearchDelivered)
            {
              setState((state)=>({
                ...state,
                deliveredfiltered: [],
                loadingScreen:false,
                isSearchDelivered:true
              }))
              
            }

          }

          setRefreshing(false)
        }
    
       },[props.error,props.deliveredOrders,props.isSearchDelivered]) 


       useEffect( ()=>{

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
          //console.log('new products: ',props.products)
       

 // console.log("searchdelivered: ",props.deliveredOrders)
                    if(Object.keys(props.pendingOrders).length)
                    {
                     
                        if(props.isSearchPending)
                        {
                          setState((state)=>({
                            ...state,
                            pendingfiltered: props.pendingOrders,
                            loadingScreen:false,
                            isSearchPending:true
                          }))
                          
                        }else{
                          setState((state)=>({
                            ...state,
                            pendingfiltered: [...props.pendingOrders,...state.pendingfiltered],
                            pending: [...props.pendingOrders,...state.pending],
                            loadingScreen:false
                          }))
                        
                        }

                    }else{
                   
                      if(props.isSearchPending)
                      {
                        setState((state)=>({
                          ...state,
                          pendingfiltered: [],
                          loadingScreen:false,
                          isSearchPending:true
                        }))
                        
                      }

                    }


          setRefreshing(false)
        }
    
       },[props.error,props.pendingOrders,props.isSearchPending]) 


      const styles = StyleSheet.create({

        header:{
            backgroundColor:'#6DB33F',
        },
        card :{
          elevation: 4
        },
        cardView:{
          padding:15,
          backgroundColor:"#DFEED7",
          color:'black'
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
                              currentList = state.pending;
                            }else{
                              currentList = state.delivered;
                            }
                        

                            newList = currentList.filter(item => {
                                  

                            const orderNumber = item.order_number
                            const orderNumberFilter = text 

                            const orderDate = item.date
                            const orderDateFilter = text 

                            const name = item.name.toLowerCase();
                            const nameFilter = text.toLowerCase();
                            
                                
                            return name.includes(nameFilter) || orderNumber.includes(orderNumberFilter) || orderDate.includes(orderDateFilter)
                          });

                } else {
                      // If the search bar is empty, set newList to original task list
                      if(state.tab)
                      {
                        newList = state.pending;
                      }else{
                        newList = state.delivered; 
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


      const setModalVisible = (visible) => {
        setState({...state,modalVisible: visible});
      }

       const searchBar = state.searchBar==true? 
                        (
                              <Item>
                                <Input type="text" id="search" onChangeText={onSearch}  placeholder="Search" />
                                <TouchableHighlight
                                  onPress={() => {
                                      setModalVisible(true);
                                  }}>
                                  <Icon type="FontAwesome" name="search-plus" />
                                </TouchableHighlight>
                            
                               
                              </Item>
                        ):null


             const ordersDelivered =  state.deliveredfiltered.length > 0 ? (

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

                                    
                          ) : <Text style={{textAlign:'center'}}>Opps! No Result Found</Text> 

                const ordersPending =  state.pendingfiltered.length > 0 ? (

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

              ) : <Text style={{textAlign:'center'}}>Opps! No Result Found</Text> 
        
      
          
    const changeSearchBar = (e) => {
   //   alert('hello')
      setState((state)=>({
        ...state,
        searchBar:!state.searchBar
      })
      )
    }

    const onSearchFromDB = (text) => {
      //   alert('hello')
         setState((state)=>({
           ...state,
           searchFromDB:text
         })
         )
       }
 
       const searchFromDatabase = (tab) => {

        setModalVisible(false)
     
            setState((state)=>({
            ...state,
            loadingScreen:true
          }))
        
          if(tab=='delivered')
          {
          
            let search = {status:'delivered','search':state.searchFromDB}
            props.searchDeliveredOrder(search)
          }else{
        
            let search = {status:'submit','search':state.searchFromDB}
            props.searchPendingOrder(search)
          }

      }

    const onRefreshPending = React.useCallback(() => {
    
      setRefreshing(true);


      if(state.isSearchPending)
      {
      
        setState(
          (state) =>({ 
            ...state, 
            pendingfiltered : [],
            isSearchPending:false
          })
        )
        let page = {status:'submit',page:1}
       setPendingPaging(page)
       props.getPendingOrders(page)

      }else{

      
        let page_number = pendingPaging.page+1
        let page = {status:'submit',page:page_number}
        setPendingPaging({status:'submit',page:page_number})
  
        props.getPendingOrders(page)
      }


    }, [refreshing,state.isSearchPending]);

    
    const onRefreshDelivered = React.useCallback(() => {
   
      setRefreshing(true);

      if(state.isSearchDelivered)
      {
       
        setState(
          (state) =>({ 
            ...state, 
            deliveredfiltered : [],
            isSearchDelivered:false
          })
        )
        let page = {status:'delivered',page:1}
        setDeliveredPaging(page)
        props.getDeliveredOrders(page)

      }else{

      
        let page_number = deliveredPaging.page+1
        let page = {status:'delivered',page:page_number}
        setDeliveredPaging({status:'delivered',page:page_number})
        props.getDeliveredOrders(page)
      }

    }, [refreshing,state.isSearchDelivered]);


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


               
        <Modal
          animationType="slide"
          transparent={false}
          visible={state.modalVisible}
          onRequestClose={() => {
            setModalVisible(!state.modalVisible);
          }}>


          <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#DFEED7',padding:15}}>

               
                        <H3>Search Order From Database</H3>

                        <Item>
                                <Input type="text" id="search" onChangeText={onSearchFromDB}  />
                                <TouchableHighlight
                                  onPress={() => {
                                      searchFromDatabase(state.tab?'pending':'delivered');
                                  }}>
                                  <Icon type="FontAwesome" name="search" />
                                </TouchableHighlight>
                         </Item>
                

          </View>
        </Modal>

        <Content refreshControl={
                    <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={state.tab?onRefreshPending:onRefreshDelivered} tintColor="#6DB33F" />
                  } 
                style={{backgroundColor:"#DFEED7"}}
         >
        
              {searchBar}
              <Tabs onChangeTab={onChangeTab} tabBarUnderlineStyle={{backgroundColor:'#ffffff'}}>
               
                <Tab heading="Delivered" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}} tabStyle={{backgroundColor:'#60993A'}} textStyle={{color:'#ffffff'}}>
                       
                        <View style={styles.cardView} >{ordersDelivered}</View> 
                      
                </Tab>

                <Tab heading="Pending" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#B35644'}}  tabStyle={{backgroundColor:'#B35644'}}  textStyle={{color:'#ffffff'}}>

                           <View style={styles.cardView} >{ordersPending}</View>
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
    isSearchDelivered:state.order.isSearchDelivered,
    isSearchPending:state.order.isSearchPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDeliveredOrders: (page) => dispatch(getDeliveredOrders(page)),
    getPendingOrders: (page) => dispatch(getPendingOrders(page)),
    searchDeliveredOrder: (search) => dispatch(searchDeliveredOrder(search)),
    searchPendingOrder: (search) => dispatch(searchPendingOrder(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
