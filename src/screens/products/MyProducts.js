import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,RefreshControl,TouchableHighlight,Modal} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions'
import { searchProducts } from '../../redux/actions/productActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'

function MyProducts(props) {

      const [state,setState] = useState({
        searchBar:false,
        filtered: [],
        products:[],
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
    
       props.getAllProducts(paging.page)

      },[]) 

       useEffect( ()=>{
  
        if(props.error)
        {
           console.log('Error Occured: ',props.error)
        }else{

          if(props.isData)
          {
                    //console.log('new products: ',props.products)
                    if(Object.keys(props.products).length)
                    {
                            //  console.log("orderfilter: ",state.filtered)
                            if(props.isSearch)
                            {

                              setState((state)=>({
                                ...state,
                                filtered: props.products,
                                loadingScreen:false,
                                isSearch:true
                              }))
                            }else{

                              setState((state)=>({
                                ...state,
                                filtered: [...props.products,...state.filtered],
                                products:[...props.products,...state.products],
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
    
       },[props.error,props.products,props.isSearch,props.isData]) 





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
       
        },
        text:{
          fontSize:10,color:'#838383'
        },
        nestedText:{
          fontWeight:'bold',
          color:'#000000'
        },
        nestedBottomText:{
          fontWeight:'bold',
          color:'#000000',
          backgroundColor:'#DCECD2'
        }
      })

      const onSearch = (text) => {
  
               // Variable to hold the original version of the list
              let currentList = [];
                  // Variable to hold the filtered list before putting into state
              let newList = [];
              // If the search bar isn't empty
              if (text !== "") {
      
                            currentList = state.products;

                            newList = currentList.filter(item => {
                                   
                            

                            const productCode = item.code
                            const productCodeFilter = text 

                            const productReference = item.referance
                            const productReferenceFilter = text 

                            const name = item.name.toLowerCase();
                            const nameFilter = text.toLowerCase();
                            
                                
                            return name.includes(nameFilter) || productCode.includes(productCodeFilter) || productReference.includes(productReferenceFilter)
                       
                       
                          });

                } else {
                       // If the search bar is empty, set newList to original task list
                        newList = state.products;
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

        const products =  state.filtered.length > 0 ? (

                              state.filtered.map(product => {
                                return (
                                         <TouchableOpacity key={product.id} activeOpacity={1} >
                                          
                                          
                                           <Card style={styles.card} >
                                       
                                                <CardItem  bordered>
                                                  <Left>
                                                    <Text style={styles.text}>Item Code: <Text style={styles.nestedText}>{product.code}</Text> </Text>
                                                  </Left>
                                                  <Right>
                                                    <Text style={styles.text}>Reference: <Text style={styles.nestedText}>{product.referance}</Text> </Text>
                                                  </Right>
                                              
                                                </CardItem>
                                                <CardItem bordered>
                                                  <Body>
                                                    <Text style={styles.text}>
                                                        Name
                                                    </Text>
                                                    <Text style={{color:'#90C66E'}}>{product.name}</Text>
                                                  </Body>
                                                </CardItem>
                                                <CardItem  bordered>
                                                  <Left>
                                                    <Text style={styles.text}>Minimum Order Limit: <Text style={styles.nestedBottomText}>{product.min_order_limit}</Text> </Text>
                                                  </Left>
                                                  <Right>
                                                    <Text style={styles.text}>Maximum Order Limit: <Text style={styles.nestedBottomText}>{product.max_order_limit}</Text> </Text>
                                                  </Right>
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
        props.searchProducts(search)
      }
      
    }



    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      let page_number = paging.page+1
      let page = {page:page_number}
      setPaging({page:page_number})
      props.getAllProducts(page)
    
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
        props.getAllProducts(page)

      }, [refreshing]);



    const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
  
    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
        <Header androidStatusBarColor="#60993A" style={styles.header}>
          <Left>
            <Button onPress={()=>props.navigation.navigate('MyOrders') } transparent>
               <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
            </Button>
          </Left>
          <Body>
            <H3 style={{color:'#ffffff'}}>Products</H3>
          </Body>
          <Right>
            <Button onPress={changeSearchBar} transparent>
              <Icon style={{color:'#ffffff'}} name='search' />
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

               
                        <H3>Search Any Product From Database</H3>

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

        <Content  refreshControl={
          <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={state.isSearch?newRefresh:onRefresh} tintColor="#6DB33F" />
        }>
        
              {searchBar}
            
              <View style={styles.cardView}>
                {products}
              </View>
            
        </Content>
      </Container>

    )
}




const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    error: state.product.error,
    isSearch:state.product.isSearch,
    isData: state.product.isData
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    getAllProducts: (page) => dispatch(getAllProducts(page)),
    searchProducts: (search) => dispatch(searchProducts(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts)
