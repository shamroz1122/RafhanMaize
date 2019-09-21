import React,{useState,useEffect} from 'react'
import {View,Text,Platform,StyleSheet,TouchableOpacity,Image,RefreshControl} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'
import { getAllCustomers } from '../../redux/actions/customerActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'


function MyCustomers(props) {

      const [state,setState] = useState({
        searchBar:false,
        filtered: [],
        loadingScreen:true
      })
      const [refreshing, setRefreshing] = useState(false);
      const [paging, setPaging] = useState({
        page:1
      });


     
    // var allCustomers =  [
    //   { customerName: 'Malik Corporation',customerAddress:'Street Address: None | City: None', id:'PK0000517',code:'12001048' },
    //   { customerName: 'Sahara Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000518',code:'12001048' },
    //   { customerName: 'Sitara Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000519',code:'12001048' },
    //   { customerName: 'Dina Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000520',code:'12001048' },
    //   { customerName: 'Lahore Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000521',code:'12001048' },
    //   { customerName: 'Ziarat Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000522',code:'12001048' },
    //   { customerName: 'Anwar Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000523',code:'12001048' }
    // ]



      useEffect( ()=>{

        props.getAllCustomers(paging.page)

      },[]) 

      
      useEffect( ()=>{
  
        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{
          //console.log('new products: ',props.products)
          if(Object.keys(props.customers).length)
          {
              setState((state)=>({
                ...state,
                filtered: [ ...props.customers,...state.filtered],
                loadingScreen:false
              }))

          
          }
          setRefreshing(false)
        }
    
       },[props.error,props.customers]) 





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

                                  currentList = props.customers;

                                  newList = currentList.filter(item => {
                                        
                                  const lc = item.name.toLowerCase();
                                      
                                  const filter = text.toLowerCase();
                                      
                                  return lc.includes(filter);
                                });

                      } else {
                            // If the search bar is empty, set newList to original task list
                              newList = props.customers;
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
                                <Icon type="FontAwesome" name="user-circle" /> 
                              </Item>
                        ):null

        const customers =  state.filtered.length > 0 ? (

                              state.filtered.map(customer => {
                                return (
                                         <TouchableOpacity key={customer.code} activeOpacity={1} onPress={()=>props.navigation.navigate('Corporation',{customer:customer}) }>
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

                          ) : null 
        
    const changeSearchBar = (e) => {
   //   alert('hello')
      setState((state)=>({
        ...state,
        searchBar:!state.searchBar
      })
      )
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
      // wait(2500).then(() => setRefreshing(false));

    }, [refreshing]);

    const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>

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
        <Content refreshControl={
              <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={onRefresh} tintColor="#6DB33F" />
            }>
        <Spinner
              overlayColor="rgba(0, 0, 0, 0.3)"
              visible={state.loadingScreen}
              customIndicator={customIndicator}
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCustomers: (page) => dispatch(getAllCustomers(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCustomers)
