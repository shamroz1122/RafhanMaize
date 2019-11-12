import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,RefreshControl,TouchableHighlight,Modal} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Tab,Tabs,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'

import { getDeliveredOrders } from '../../redux/actions/orderActions'
import { getPendingOrders } from '../../redux/actions/orderActions'
import { getInvoiceOrders } from '../../redux/actions/orderActions'
import { getCompletedOrders } from '../../redux/actions/orderActions'

import { searchDeliveredOrder } from '../../redux/actions/orderActions'
import { searchPendingOrder } from '../../redux/actions/orderActions'
import { searchCompletedOrder } from '../../redux/actions/orderActions'
import { searchInvoiceOrder } from '../../redux/actions/orderActions'

import Spinner from 'react-native-loading-spinner-overlay';
//import loaderImage from '../../../assets/loader-gif.gif'

function MyOrders(props) {

      const [state,setState] = useState({
        searchBar:false,
        pendingfiltered:[],
        deliveredfiltered:[],
        invoicefiltered:[],
        completedfiltered:[],
        pending:[],
        delivered:[],
        invoice:[],
        completed:[],
        loadingScreen:true,
        tab:0,
        modalVisible: false,
        searchFromDB:'',
        isSearchDelivered:false,
        isSearchPending:false,
        isSearchInvoice:false,
        isSearchCompleted:false,
     
      })
      const [refreshing, setRefreshing] = useState(false);

      const [pendingPaging, setPendingPaging] = useState({
        status:'draft',
        page:1
      });

      const [deliveredPaging, setDeliveredPaging] = useState({
        status:'delivered',
        page:1
      });
      const [invoicePaging, setInvoicePaging] = useState({
        status:'invoiced',
        page:1
      });
      const [completedPaging, setCompletedPaging] = useState({
        status:'completed',
        page:1
      });

      const selectedTab = props.navigation.dangerouslyGetParent().getParam('tab')!==undefined?props.navigation.dangerouslyGetParent().getParam('tab'):0


    useEffect( ()=>{

        props.getDeliveredOrders(deliveredPaging)
        props.getPendingOrders(pendingPaging)
        props.getInvoiceOrders(invoicePaging)
        props.getCompletedOrders(completedPaging)
        props.navigation.getParam('tab')
      
        // setState((state)=>({
        //   ...state,
        //   tab:selectedTab
        // })) 
console.log(selectedTab)
      },[]) 

      
      useEffect( ()=>{

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
        
          if(props.isDeliveredData)
          {    
                 
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
                      
                          loadingScreen:false,
                          isSearchDelivered:true
                        }))
                        
                      }

                    }

                }else{
            
                      setState((state)=>({
                        ...state,
                        loadingScreen:false,
                      }))
                  
                }
          setRefreshing(false)
        }
    
       },[props.error,props.deliveredOrders,props.isSearchDelivered,props.isDeliveredData]) 

       useEffect( ()=>{

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
        
          if(props.isInvoiceData)
          {    
                    if(Object.keys(props.invoiceOrders).length)
                    {
                    
                        if(props.isSearchInvoice)
                        {
                          setState((state)=>({
                            ...state,
                            invoicefiltered: props.invoiceOrders,
                            loadingScreen:false,
                            isSearchInvoice:true
                          }))
                          
                        }else{
                          setState((state)=>({
                            ...state,
                            invoicefiltered: [...props.invoiceOrders,...state.invoicefiltered],
                            invoice: [...props.invoiceOrders,...state.invoice],
                            loadingScreen:false
                          }))
                      
                        }

                    }else{

                      if(props.isSearchInvoice)
                      {
                        setState((state)=>({
                          ...state,
                      
                          loadingScreen:false,
                          isSearchInvoice:true
                        }))
                        
                      }

                    }

                }else{
            
                      setState((state)=>({
                        ...state,
                        loadingScreen:false,
                      }))
                  
                }
          setRefreshing(false)
        }
    
       },[props.error,props.invoiceOrders,props.isSearchInvoice,props.isInvoiceData]) 


       useEffect( ()=>{

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
        
          if(props.isCompletedData)
          {    
                    if(Object.keys(props.completedOrders).length)
                    {
                    
                        if(props.isSearchCompleted)
                        {
                          setState((state)=>({
                            ...state,
                            completedfiltered: props.completedOrders,
                            loadingScreen:false,
                            isSearchCompleted:true
                          }))
                          
                        }else{
                          setState((state)=>({
                            ...state,
                            completedfiltered: [...props.completedOrders,...state.completedfiltered],
                            completed: [...props.completedOrders,...state.completed],
                            loadingScreen:false
                          }))
                      
                        }

                    }else{

                      if(props.isSearchCompleted)
                      {
                        setState((state)=>({
                          ...state,
                          loadingScreen:false,
                          isSearchCompleted:true
                        }))
                        
                      }

                    }

                }else{
            
                      setState((state)=>({
                        ...state,
                        loadingScreen:false,
                      }))
                  
                }
          setRefreshing(false)
        }
    
       },[props.error,props.completedOrders,props.isSearchCompleted,props.isCompletedData]) 


       useEffect( ()=>{ 

        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
        
       
              if(props.isPendingData)
              {
               
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
                  }else{
                
                    setState((state)=>({
                      ...state,
                   
                      loadingScreen:false,
                    }))
                    
                  }

          setRefreshing(false)
        }
    
       },[props.error,props.pendingOrders,props.isSearchPending,props.isPendingData]) 


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


                            if(state.tab==0)
                            { 
                              currentList = state.pending;
                            }else if(state.tab==1){
                            
                              currentList = state.delivered;
                            }else if(state.tab==2){
                          
                              currentList = state.invoice;
                            }else if(state.tab==3){
                          
                              currentList = state.completed;
                            }
                        

                            newList = currentList.filter(item => {
                                  

                            const orderNumber = item.order_number
                            const orderNumberFilter = text 

                            // const orderDate = item.date
                            // const orderDateFilter = text 

                            const name = item.name.toLowerCase();
                            const nameFilter = text.toLowerCase();

                            const status = item.status.toLowerCase();
                            const statusFilter = text.toLowerCase();

                            return name.includes(nameFilter) || orderNumber.includes(orderNumberFilter) || status.includes(statusFilter) 
                          });

                } else {
                      // If the search bar is empty, set newList to original task list

                      if(state.tab==0)
                      {
                        newList = state.pending;
                      }else if(state.tab==1){
                        newList = state.delivered;
                      }else if(state.tab==2){
                        newList = state.invoice;
                      }else if(state.tab==3){
                        newList = state.completed;
                      }
                 
                }
                  // Set the filtered state based on what our rules added to newList
                  if(state.tab==0)
                  {

                    setState(
                      (state) =>({ 
                        ...state,
                        pendingfiltered : newList 
                      })
                    )

                  }else if(state.tab==1){

                    setState(
                      (state) =>({ 
                        ...state,
                        deliveredfiltered : newList 
                      })
                    )

                  }else if(state.tab==2){

                    setState(
                      (state) =>({ 
                        ...state,
                        invoicefiltered : newList 
                      })
                    )

                  }else if(state.tab==3){

                    setState(
                      (state) =>({ 
                        ...state,
                        completedfiltered : newList 
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
                                                      <Text style={{color:'#6DB33F'}}>{order.name}</Text>
                                                      <Text style={{fontSize:10,color:'#838383'}}>Order #: {order.order_number} | Order Date: {order.date} | Delivery Date: {order.delivery_date} | Status: {order.status} </Text>
                                                    </Body>
                                                  </Left>
                                                </CardItem>
                                              </Card>
                                            </TouchableOpacity>
                                        )
                                  

                                    })

                                    
                          ) : <Text style={{textAlign:'center'}}>Opps! No Result Found</Text> 


                    const ordersInvoice =  state.invoicefiltered.length > 0 ? (

                      state.invoicefiltered.map(order => {
                      
                      return (
                                <TouchableOpacity key={order.id} activeOpacity={1} onPress={()=>props.navigation.navigate('OrderDetails',{order:order}) }>
                                  <Card style={styles.card} >
                                      <CardItem >
                                        <Left>
                                          <View style={styles.myButton}>
                                            <Icon type="MaterialCommunityIcons" name="shopping" style={{color:'#ffffff'}}/>
                                          </View>
                                          <Body>
                                            <Text style={{color:'#6DB33F'}}>{order.name}</Text>
                                            <Text style={{fontSize:10,color:'#838383'}}>Order #: {order.order_number} | Order Date: {order.date} | Delivery Date: {order.delivery_date} | Status: {order.status} </Text>
                                          </Body>
                                        </Left>
                                      </CardItem>
                                    </Card>
                                  </TouchableOpacity>
                              )
                        

                          })

                                
                      ) : <Text style={{textAlign:'center'}}>Opps! No Result Found</Text> 

                      const ordersCompleted =  state.completedfiltered.length > 0 ? (

                        state.completedfiltered.map(order => {
                        
                        return (
                                  <TouchableOpacity key={order.id} activeOpacity={1} onPress={()=>props.navigation.navigate('OrderDetails',{order:order}) }>
                                    <Card style={styles.card} >
                                        <CardItem >
                                          <Left>
                                            <View style={styles.myButton}>
                                              <Icon type="MaterialCommunityIcons" name="shopping" style={{color:'#ffffff'}}/>
                                            </View>
                                            <Body>
                                              <Text style={{color:'#6DB33F'}}>{order.name}</Text>
                                              <Text style={{fontSize:10,color:'#838383'}}>Order #: {order.order_number} | Order Date: {order.date} | Delivery Date: {order.delivery_date} | Status: {order.status} </Text>
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
                                          <Text style={{color:'#6DB33F'}}>{order.name}</Text>
                                          <Text style={{fontSize:10,color:'#838383'}}>Order #: {order.order_number} | Order Date: {order.date} | Delivery Date: {order.delivery_date} | Status: {order.status}</Text>
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
 
       const searchFromDatabase = () => {
        setModalVisible(false)

          if(state.searchFromDB!='')
          {

                  setState((state)=>({
                  ...state,
                  loadingScreen:true
                }))
                if(state.tab==1)
                {
             
                  let search = {status:'delivered','search':state.searchFromDB}
                  props.searchDeliveredOrder(search)
                }else if(state.tab==0){
            
                  let search = {status:'draft','search':state.searchFromDB}
                  props.searchPendingOrder(search)
                }else if(state.tab==2){
            
                  let search = {status:'invoiced','search':state.searchFromDB}
                  props.searchInvoiceOrder(search)
                }else if(state.tab==3){
            
                  let search = {status:'completed','search':state.searchFromDB}
                  props.searchCompletedOrder(search)
                }
      
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
        let page = {status:'draft',page:1}
       setPendingPaging(page)
       props.getPendingOrders(page)

      }else{

        if(props.newOrderPlaced)
        {
          setState(
            (state) =>({ 
              ...state, 
              pendingfiltered : []
            })
          )
          let page = {status:'draft',page:1}
         setPendingPaging(page)
         props.getPendingOrders(page)

        }else{
        
          let page_number = pendingPaging.page+1
          let page = {status:'draft',page:page_number}
          setPendingPaging({status:'draft',page:page_number})
    
          props.getPendingOrders(page)

        }
      
      }


    }, [refreshing,state.isSearchPending,props.newOrderPlaced]);

    
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


    const onRefreshInvoice = React.useCallback(() => {
   
      setRefreshing(true);

      if(state.isSearchInvoice)
      {
     
        setState(
          (state) =>({ 
            ...state, 
            invoicefiltered : [],
            isSearchInvoice:false
          })
        )
        let page = {status:'invoiced',page:1}
        setInvoicePaging(page)
        props.getInvoiceOrders(page)

      }else{
        
        let page_number = invoicePaging.page+1
        let page = {status:'invoiced',page:page_number}
        setInvoicePaging({status:'invoiced',page:page_number})
        props.getInvoiceOrders(page)
      }

    }, [refreshing,state.isSearchInvoice]);


    const onRefreshCompleted= React.useCallback(() => {
   
      setRefreshing(true);

      if(state.isSearchCompleted)
      {
     
        setState(
          (state) =>({ 
            ...state, 
            completedfiltered : [],
            isSearchCompleted:false
          })
        )
        let page = {status:'completed',page:1}
        setCompletedPaging(page)
        props.getCompletedOrders(page)

      }else{
        
        let page_number = completedPaging.page+1
        let page = {status:'completed',page:page_number}
        setCompletedPaging({status:'completed',page:page_number})
        props.getCompletedOrders(page)
      }

    }, [refreshing,state.isSearchCompleted]);






    // const onChangeTab = (e) => {
    //   console.log(e)
    //   setState((state)=>({...state,tab:i}))
    // }

   // const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
  

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
              color = "#60993A"
            />


               
        <Modal
          animationType="slide"
          transparent={false}
          visible={state.modalVisible}
          onRequestClose={() => {
            setModalVisible(!state.modalVisible);
          }}>


          <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#DFEED7',padding:15}}>

               
                    {state.tab? <H3>Search Any Pending Order From Database</H3>:<H3>Search Any Delivered Order From Database</H3>}   
                        <Item>
                                <Input type="text" id="search" onChangeText={onSearchFromDB}  />
                                <TouchableHighlight
                                  onPress={searchFromDatabase}>
                                  <Icon type="FontAwesome" name="search" />
                                </TouchableHighlight>
                         </Item>
                

          </View>
        </Modal>

   
        
              {searchBar}
              <Tabs initialPage={0} onChangeTab={({ i }) => setState((state)=>({...state,tab:i} ))}  tabBarUnderlineStyle={{backgroundColor:'#ffffff'}}>
               
               <Tab heading="Pending" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}}  tabStyle={{backgroundColor:'#ffffff'}}  textStyle={{color:'#60993A'}}>
                      <Content refreshControl={
                              <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={onRefreshPending} tintColor="#6DB33F" />
                            } 
                            style={{backgroundColor:"#DFEED7"}}
                      >
                           <View style={styles.cardView} >{ordersPending}</View>
                      </Content>
                </Tab>


                <Tab heading="Delivered" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}}   tabStyle={{backgroundColor:'#ffffff'}}  textStyle={{color:'#60993A'}}>
                    <Content refreshControl={
                        <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={onRefreshDelivered} tintColor="#6DB33F" />
                      } 
                      style={{backgroundColor:"#DFEED7"}}
                     >
                        <View style={styles.cardView} >{ordersDelivered}</View> 
                    </Content>
                </Tab>

                <Tab heading="Invoice" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}}  tabStyle={{backgroundColor:'#ffffff'}}  textStyle={{color:'#60993A'}}>
                    <Content refreshControl={
                        <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={onRefreshInvoice} tintColor="#6DB33F" />
                      } 
                      style={{backgroundColor:"#DFEED7"}}
                     >
                        <View style={styles.cardView} >{ordersInvoice}</View> 
                    </Content>
                </Tab>

                <Tab heading="Completed" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}}   tabStyle={{backgroundColor:'#ffffff'}}  textStyle={{color:'#60993A'}}>
                    <Content refreshControl={
                        <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={onRefreshCompleted} tintColor="#6DB33F" />
                      } 
                      style={{backgroundColor:"#DFEED7"}}
                     >
                        <View style={styles.cardView} >{ordersCompleted}</View> 
                    </Content>
                </Tab>

              </Tabs>

      
      </Container>

    )
}



const mapStateToProps = (state) => {
  return {
    deliveredOrders: state.order.deliveredOrders,
    pendingOrders: state.order.pendingOrders,
    invoiceOrders: state.order.invoiceOrders,
    completedOrders: state.order.completedOrders,

    error: state.order.error,

    isSearchDelivered:state.order.isSearchDelivered,
    isSearchPending:state.order.isSearchPending,
    isSearchCompleted:state.order.isSearchCompleted,
    isSearchInvoice:state.order.isSearchInvoice,

    isDeliveredData:state.order.isDeliveredData,
    isCompletedData:state.order.isCompletedData,
    isInvoiceData:state.order.isInvoiceData,
    isPendingData:state.order.isPendingData,

    newOrderPlaced:state.order.newOrderPlaced

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDeliveredOrders: (page) => dispatch(getDeliveredOrders(page)),
    getPendingOrders: (page) => dispatch(getPendingOrders(page)),
    getInvoiceOrders: (page) => dispatch(getInvoiceOrders(page)),
    getCompletedOrders: (page) => dispatch(getCompletedOrders(page)),

    searchDeliveredOrder: (search) => dispatch(searchDeliveredOrder(search)),
    searchPendingOrder: (search) => dispatch(searchPendingOrder(search)),
    searchCompletedOrder: (search) => dispatch(searchCompletedOrder(search)),
    searchInvoiceOrder: (search) => dispatch(searchInvoiceOrder(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
