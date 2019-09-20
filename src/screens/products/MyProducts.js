import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,RefreshControl} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Card, CardItem,Item,Input } from 'native-base';
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'

function MyProducts(props) {

      const [state,setState] = useState({
        searchBar:false,
        filtered:[],
        loadingScreen:true,
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
          //console.log('new products: ',props.products)
          if(Object.keys(props.products).length)
          {
              setState((state)=>({
                ...state,
                filtered: [ ...props.products,...state.filtered],
                loadingScreen:false
              })
              )
              setRefreshing(false)
          }

          console.log(state.filtered)
        }
    
       },[props.error,props.products]) 

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
      
                            currentList = props.products;

                            newList = currentList.filter(item => {
                                   
                            const lc = item.name.toLowerCase();
                                
                            const filter = text.toLowerCase();
                                
                            return lc.includes(filter);
                          });

                } else {
                       // If the search bar is empty, set newList to original task list
                        newList = props.products;
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
                                <Icon type="FontAwesome" name="cubes" /> 
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

      props.getAllProducts(page)
      // wait(2500).then(() => setRefreshing(false));

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

        <Content  refreshControl={
          <RefreshControl colors={['#6DB33F']} refreshing={refreshing} onRefresh={onRefresh} tintColor="#6DB33F" />
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
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    getAllProducts: (page) => dispatch(getAllProducts(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts)
