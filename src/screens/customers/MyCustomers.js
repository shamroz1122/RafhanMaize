import React,{useState,useEffect} from 'react'
import {View,Text,Platform,StyleSheet,TouchableOpacity,RefreshControl,TouchableHighlight,Modal} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'
import { getAllCustomers } from '../../redux/actions/customerActions'
import { searchCustomer } from '../../redux/actions/customerActions'
import Spinner from 'react-native-loading-spinner-overlay';
//import loaderImage from '../../../assets/loader-gif.gif'

function MyCustomers(props) {

      const [state,setState] = useState({
        searchBar:false,
        filtered: [],
        customers:[],
        loadingScreen:true,
        modalVisible: false,
        searchFromDB:'',
        isSearch:false
      })
      const [refreshing, setRefreshing] = useState(false);
      const [paging, setPaging] = useState({
        page:1
      });


    


      useEffect( ()=>{

        props.getAllCustomers(paging.page)

      },[]) 

      
      useEffect( ()=>{
  
        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
          //console.log('new products: ',props.products)
        
          if(props.isData)
          {

                if(Object.keys(props.customers).length)
                {
                  
                        //  console.log("orderfilter: ",state.filtered)
                        if(props.isSearch)
                        {
                          setState((state)=>({
                            ...state,
                            filtered: props.customers,
                            loadingScreen:false,
                            isSearch:true
                          }))
                        }else{
                          setState((state)=>({
                            ...state,
                            filtered: [...props.customers,...state.filtered],
                            customers:[...props.customers,...state.customers],
                            loadingScreen:false,
                            isSearch:false
                          }))
                        }
                  
                }else{

                  if(props.isSearch)
                  {
                    setState((state)=>({
                      ...state,
                      filtered: [],
                      loadingScreen:false,
                      isSearch:true
                    }))
                    
                  }

                }

        }else{
          setState((state)=>({
            ...state,
            filtered: [],
            loadingScreen:false,
          }))
          
        }

          setRefreshing(false)
        }
    
       },[props.error,props.customers,props.isSearch,props.isData]) 





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
          backgroundColor:'#6DB33F',
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

                             
                                  currentList = state.customers;
                                

                                  newList = currentList.filter(item => {
                                        
                                  const code =  item.code;   
                                  const codefilter =  text;  

                                  const lc = item.name.toLowerCase();
                                      
                                  const filter = text.toLowerCase();
                                      
                                  return lc.includes(filter) || code.includes(codefilter)
                                });

                      } else {
                        
                       
                            // If the search bar is empty, set newList to original task list
                              newList = state.customers;
                      }
                        // Set the filtered state based on what our rules added to newList
                      setState(
                        (state) =>({ 
                          ...state,
                          filtered : newList 
                        })
                      )

            
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

        const customers =  state.filtered.length > 0 ? (

                              state.filtered.map(customer => {
                                return (
                                         <TouchableOpacity key={customer.id} activeOpacity={1} onPress={()=>props.navigation.navigate('Corporation',{customer:customer}) }>
                                            <Card style={styles.card} >
                                                <CardItem style={{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>

                                                <View style={{flex:1,flexDirection:'row'}}>
                                                      <View style={{flex:5,alignItems:'center',justifyContent:'center',padding:15}}>
                                                            <Left>
                                                            <View style={styles.myButton}>
                                                              <Icon type="FontAwesome" name="user-circle" style={{color:'#ffffff'}}/>
                                                            </View>
                                                            <Body>
                                                              <Text style={{fontSize:10,color:'#838383'}}>Code {customer.code}</Text>
                                                              <Text style={{color:'#6DB33F'}}>{customer.name}</Text>
                                                              <Text style={{fontSize:10,color:'#838383'}}>Street Address: { customer.street!=''?customer.street:'None' } | City: { customer.street!=''?customer.city:'None' }</Text>
                                                            </Body>
                                                          </Left>
                                                      </View>
                                                      <View style={{backgroundColor:'#6DB33F',flex:1,alignItems:'center',justifyContent:'center'}} >
                                                    
                                                               <Text>
                                                                  <Icon  type="AntDesign" style={{fontSize:15,color:'#ffffff'}}  name="right"  />
                                                               </Text>
                                                         
                                                                <Text style={{fontSize:12,color:'#ffffff'}}>VIEW</Text>
                                                          
                                                     
                                                      </View>
                                                </View>
                                   
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

            let search = {'search':state.searchFromDB}
            props.searchCustomer(search)

          }
       }
  

    if(Platform.OS==='android')
    {
      var mycustomerTitle = <H3 style={{color:'#ffffff'}}>My Customers</H3>
    }else{
      var mycustomerTitle = <Text style={{color:'#ffffff',fontSize:18}}>My Customers</Text>
    }


    const onRefresh = React.useCallback(() => {
            setRefreshing(true);
            let page_number = paging.page+1
            let page = {page:page_number}
            setPaging({page:page_number})
            props.getAllCustomers(page)
          
    }, [refreshing]);

    const newRefresh =  React.useCallback(() => {
         setRefreshing(true);
          setState(
            (state) =>({ 
              ...state, 
              filtered : [] 
            })
          )
         let page = {page:1}
         setPaging(page)
         props.getAllCustomers(page)

 }, [refreshing]);

  //  const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>

    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
        <Header androidStatusBarColor="#60993A" style={styles.header}>
          <Left>
            <Button onPress={()=>props.navigation.navigate('MyProducts') } transparent>
               <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
            </Button>
          </Left>
          <Body>
           { mycustomerTitle }
          </Body>
          <Right>
            <Button onPress={changeSearchBar} transparent>
              <Icon style={{color:'#ffffff'}} name='search' />
            </Button>
          </Right>
        </Header>
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={state.modalVisible}
          onRequestClose={() => {
            setModalVisible(!state.modalVisible);
          }}>


          <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#DFEED7',padding:15}}>

               
                        <H3>Search Any Customer From Database</H3>

                        <Item>
                                <Input type="text" id="search" onChangeText={onSearchFromDB}  />
                                <TouchableHighlight
                                  onPress={() => {
                                      searchFromDatabase();
                                  }}>
                                  <Icon type="FontAwesome" name="search" />
                                </TouchableHighlight>
                         </Item>
                

          </View>
        </Modal>
        <Content refreshControl={
              <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={state.isSearch?newRefresh:onRefresh} tintColor="#6DB33F" />
            }>

        
            
        <Spinner
              overlayColor="rgba(0, 0, 0, 0.3)"
              visible={state.loadingScreen}
              color = "#60993A"
            />

              {searchBar}
      
              <View style={styles.cardView}>
                {customers}
              </View>
           
        </Content>
      </Container>

    )
}




const mapStateToProps = (state) => {
  return {
    customers: state.customer.customers,
    error: state.customer.error,
    isSearch:state.customer.isSearch,
    isData:state.customer.isData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCustomers: (page) => dispatch(getAllCustomers(page)),
    searchCustomer: (search) => dispatch(searchCustomer(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCustomers)
